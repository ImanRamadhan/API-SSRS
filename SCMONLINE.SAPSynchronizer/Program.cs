using SCMONLINE.SAPSynchronizer.mi_osReadTableMC_PXD;
using SqlBulkTools;
using StackExchange.Exceptional;
using StackExchange.Exceptional.Notifiers;
using StackExchange.Exceptional.Stores;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SCMONLINE.SAPSynchronizer
{
    static class Program
    {
        /// <summary>
        /// The main entry point for the application.
        /// </summary>
        [STAThread]
        static void Main()
        {
            Exceptional.Configure(
                settings =>
                {
                    settings.DefaultStore = new SQLErrorStore(new ErrorStoreSettings
                    {
                        ApplicationName = "SCMONLINE",
                        ConnectionString = Properties.Settings.Default.DefaultConnection
                    });

                }
            );
            // Optional: for logging all unhandled exceptions
            Exceptional.ObserveAppDomainUnhandledExceptions();

            //// Example of code-only setup, alternatively this can be in the App.config
            //// RollupPeriod is null so a new file is always generated, for demonstration purposes
            //Exceptional.EnableLogging();
            //Exceptional.Configure(settings =>
            //{
            //    //settings.DefaultStore = new JSONErrorStore(new ErrorStoreSettings
            //    //{
            //    //    ApplicationName = "Samples.Console",
            //    //    Path = "Errors123",
            //    //    RollupPeriod = null,

            //    //});

            //    // Example of a code-only email setup, alternatively this can be in the App.config
            //    //settings.Register(new EmailNotifier(new EmailSettings
            //    //{
            //    //    SMTPHost = "localhost", // Use Papercut here for testing: https://github.com/ChangemakerStudios/Papercut
            //    //    FromAddress = "exceptions@site.com",
            //    //    FromDisplayName = "Bob the Builder",
            //    //    ToAddress = "dont.use@thisadress.com"
            //    //}));
            //});

            SyncVendorData();
        }

        private static void UpdateVendorPerformance(List<Vendor> selectedVendorList)
        {
            //if (vendorList.Count == 0) throw new Exception("No Vendor Exists");

            var client = new mi_osReadTableMCClient();
            client.ClientCredentials.UserName.UserName = Properties.Settings.Default.SAPUserName;
            client.ClientCredentials.UserName.Password = Properties.Settings.Default.SAPPassword; ;

            var @params = new dt_ReadTableMC_Request();

            @params.CLIENT = Properties.Settings.Default.SAPClient;
            @params.QUERY_TABLE = "ZMVISUM";
            @params.DELIMITER = "|";
            @params.NO_DATA = "";
            @params.ROWSKIPS = "0";
            @params.ROWCOUNT = "-1";



            //@params.OPTIONS[0].TEXT = "LIFNR EQ '" + vendorList[0].VendorId + "'";
            //int i = 1;

            //foreach (var item in vendorList.Skip(1))
            //{
            //    @params.OPTIONS[i].TEXT = " OR LIFNR EQ '" + item.VendorId + "'";
            //    i++;
            //}

            @params.FIELDS = InitializeArrayHelper.InitializeArray<dt_ReadTableMC_RequestFIELDS>(3);
            @params.FIELDS[0].FIELDNAME = "LIFNR";
            @params.FIELDS[1].FIELDNAME = "PCODET";
            @params.FIELDS[2].FIELDNAME = "TT_PO";


            //Data list not found

            var newVendorList = new List<Vendor>();
            int i = 0;
            int leftItemCount = selectedVendorList.Count;

            //First init options
            if (leftItemCount > 1000)
            {
                @params.OPTIONS = InitializeArrayHelper.InitializeArray<dt_ReadTableMC_RequestOPTIONS>(1001);
                leftItemCount = leftItemCount - 1000;
                @params.OPTIONS[1000].TEXT = ") AND REGGROUP EQ 'KORP'";
            }
            else
            {
                @params.OPTIONS = InitializeArrayHelper.InitializeArray<dt_ReadTableMC_RequestOPTIONS>(leftItemCount + 1);
                @params.OPTIONS[leftItemCount].TEXT = ") AND REGGROUP EQ 'KORP'";
            }

            //need it to filter by regulation group, bulk merge need unique match target
            //@params.OPTIONS[1001].TEXT = " AND REGGROUP EQ 'KORP'";

            //var result = client.mi_osReadTableMC(@params);
            //if (result.DATA == null) throw new Exception("Data not found!");

            foreach (var selectedVendor in selectedVendorList)
            {
                if ((i) % 1000 == 0)
                {
                    @params.OPTIONS[(i) % 1000].TEXT = "(LIFNR EQ '" + selectedVendor.VendorId + "'";
                }
                else
                {
                    @params.OPTIONS[(i) % 1000].TEXT = " OR LIFNR EQ '" + selectedVendor.VendorId + "'";
                }

                //we need to break transaction. SAP options paramater limited.
                if ((i + 1) % 1000 == 0 || i == (selectedVendorList.Count - 1))
                {
                    var result = client.mi_osReadTableMC(@params);

                    foreach (var item in result.DATA)
                    {
                        var resultRow = item.WA.Split('|').Select(p => p.Trim()).ToList();
                        var vendor = new Vendor();
                        vendor.VendorId = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "LIFNR")];
                        vendor.PenaltyCode = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "PCODET")];
                        vendor.TotalPo = Int32.Parse(resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "TT_PO")]);

                        newVendorList.Add(vendor);
                    }

                    //foreach (var item in result.DATA)
                    //{

                    //    var resultRow = item.WA.Split('|').Select(p => p.Trim()).ToList();
                    //    var vendor = new Vendor();
                    //    vendor.VendorId = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "LIFNR")];
                    //    vendor.Country = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "LAND1")];
                    //    vendor.Name = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "NAME1")];
                    //    vendor.Name2 = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "NAME2")];
                    //    vendor.Name3 = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "NAME3")];
                    //    vendor.Name4 = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "NAME4")];
                    //    vendor.City = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "ORT01")];
                    //    vendor.District = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "ORT02")];
                    //    vendor.PoBox = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "PFACH")];
                    //    vendor.PoBoxPcode = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "PSTL2")];
                    //    vendor.PostalCode = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "PSTLZ")];
                    //    vendor.Region = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "REGIO")];
                    //    vendor.SearchTerm = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "SORTL")];
                    //    vendor.Street = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "STRAS")];
                    //    vendor.Address = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "ADRNR")];
                    //    vendor.Name = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "MCOD1")];
                    //    vendor.Name2 = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "MCOD2")];
                    //    vendor.City = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "MCOD3")];
                    //    vendor.Title = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "ANRED")];
                    //    vendor.TrainStation = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "BAHNS")];
                    //    vendor.LocationNo1 = int.Parse(resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "BBBNR")]);
                    //    vendor.LocationNo2 = int.Parse(resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "BBSNR")]);
                    //    vendor.Authorization = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "BEGRU")];
                    //    vendor.Industry = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "BRSCH")];
                    //    vendor.CheckDigit = int.Parse(resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "BUBKZ")]);
                    //    vendor.DataLine = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "DATLT")];
                    //    vendor.DmeIndicator = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "DTAMS")];
                    //    vendor.InstructionKey = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "DTAWS")];
                    //    vendor.CreatedOn = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "ERDAT")].ToDateTimeSapNullSafe();

                    //    newVendorList.Add(vendor);
                    //}

                    //reset filter
                    if (leftItemCount > 1000)
                    {
                        @params.OPTIONS = InitializeArrayHelper.InitializeArray<dt_ReadTableMC_RequestOPTIONS>(1001);
                        leftItemCount = leftItemCount - 1000;
                        @params.OPTIONS[1000].TEXT = ") AND REGGROUP EQ 'KORP'";
                    }
                    else
                    {
                        @params.OPTIONS = InitializeArrayHelper.InitializeArray<dt_ReadTableMC_RequestOPTIONS>(leftItemCount + 1);
                        @params.OPTIONS[leftItemCount].TEXT = ") AND REGGROUP EQ 'KORP'";
                    }


                }
                i++;
                // j++;
            }




            var bulk = new BulkOperations();
            bulk.Setup<Vendor>(x => x.ForCollection(newVendorList))
                .WithTable("Vendor")
                .AddColumn(x => x.PenaltyCode)
                .BulkInsertOrUpdate()
                .MatchTargetOn(x => x.VendorId);

            bulk.CommitTransaction("SCMONLINE.SAPSynchronizer.Properties.Settings.DefaultConnection");
        }

        private static void UpdateVendorProfile(List<Vendor> selectedVendorList)
        {
            //if (vendorList.Count == 0) throw new Exception("No Vendor Exists");

            var client = new mi_osReadTableMCClient();
            client.ClientCredentials.UserName.UserName = Properties.Settings.Default.SAPUserName;
            client.ClientCredentials.UserName.Password = Properties.Settings.Default.SAPPassword; ;

            var @params = new dt_ReadTableMC_Request();

            @params.CLIENT = Properties.Settings.Default.SAPClient;
            @params.QUERY_TABLE = "AUSP";
            @params.DELIMITER = "|";
            @params.NO_DATA = "";
            @params.ROWSKIPS = "0";
            @params.ROWCOUNT = "-1";



            //@params.OPTIONS[0].TEXT = "LIFNR EQ '" + vendorList[0].VendorId + "'";
            //int i = 1;

            //foreach (var item in vendorList.Skip(1))
            //{
            //    @params.OPTIONS[i].TEXT = " OR LIFNR EQ '" + item.VendorId + "'";
            //    i++;
            //}

            @params.FIELDS = InitializeArrayHelper.InitializeArray<dt_ReadTableMC_RequestFIELDS>(24);
            @params.FIELDS[0].FIELDNAME = "OBJEK";
            @params.FIELDS[1].FIELDNAME = "ATINN";
            @params.FIELDS[2].FIELDNAME = "ATZHL";
            @params.FIELDS[3].FIELDNAME = "MAFID";
            @params.FIELDS[4].FIELDNAME = "KLART";
            @params.FIELDS[5].FIELDNAME = "ADZHL";
            @params.FIELDS[6].FIELDNAME = "ATWRT";
            @params.FIELDS[7].FIELDNAME = "ATFLV";
            @params.FIELDS[8].FIELDNAME = "ATAWE";
            @params.FIELDS[9].FIELDNAME = "ATFLB";
            @params.FIELDS[10].FIELDNAME = "ATAW1";
            @params.FIELDS[11].FIELDNAME = "ATCOD";
            @params.FIELDS[12].FIELDNAME = "ATTLV";
            @params.FIELDS[13].FIELDNAME = "ATTLB";
            @params.FIELDS[14].FIELDNAME = "ATPRZ";
            @params.FIELDS[15].FIELDNAME = "ATINC";
            @params.FIELDS[16].FIELDNAME = "ATAUT";
            @params.FIELDS[17].FIELDNAME = "AENNR";
            @params.FIELDS[18].FIELDNAME = "DATUV";
            @params.FIELDS[19].FIELDNAME = "LKENZ";
            @params.FIELDS[20].FIELDNAME = "ATIMB";
            @params.FIELDS[21].FIELDNAME = "ATZIS";
            @params.FIELDS[22].FIELDNAME = "ATSRT";
            @params.FIELDS[23].FIELDNAME = "ATVGLART";


            //Data list not found

            var newCharacteristicValueList = new List<CharacteristicValue>();
            int i = 0;
            int leftItemCount = selectedVendorList.Count;

            //First init options
            if (leftItemCount > 1000)
            {
                @params.OPTIONS = InitializeArrayHelper.InitializeArray<dt_ReadTableMC_RequestOPTIONS>(1000 + 1);
                leftItemCount = leftItemCount - 1000;
                @params.OPTIONS[1000].TEXT = ") AND MANDT EQ '" + Properties.Settings.Default.SAPClient + "'";
                ////Filter Komisaris
                //@params.OPTIONS[1000 + 1].TEXT = " AND (ATINN EQ '0000000005'";
                ////Filter Direksi
                //@params.OPTIONS[1000 + 2].TEXT = " OR ATINN EQ '0000000019'";
                ////Filter Kualifikasi
                //@params.OPTIONS[1000 + 3].TEXT = " OR ATINN EQ '0000000010')";
            }
            else
            {
                @params.OPTIONS = InitializeArrayHelper.InitializeArray<dt_ReadTableMC_RequestOPTIONS>(leftItemCount + 1);
                @params.OPTIONS[leftItemCount].TEXT = ") AND MANDT EQ '" + Properties.Settings.Default.SAPClient + "'";
                ////Filter Komisaris
                //@params.OPTIONS[leftItemCount + 1].TEXT = " AND (ATINN EQ '0000000005'";
                ////Filter Direksi
                //@params.OPTIONS[leftItemCount + 2].TEXT = " OR ATINN EQ '0000000019')";
                ////Filter Kualifikasi
                //@params.OPTIONS[leftItemCount + 3].TEXT = " OR ATINN EQ '0000000010')";
            }

            //need it to filter by regulation group, bulk merge need unique match target
            //@params.OPTIONS[1001].TEXT = " AND REGGROUP EQ 'KORP'";

            //var result = client.mi_osReadTableMC(@params);
            //if (result.DATA == null) throw new Exception("Data not found!");

            foreach (var selectedVendor in selectedVendorList)
            {
                if ((i) % 1000 == 0)
                {
                    @params.OPTIONS[(i) % 1000].TEXT = "(OBJEK EQ '" + selectedVendor.VendorId + "'";
                }
                else
                {
                    @params.OPTIONS[(i) % 1000].TEXT = " OR OBJEK EQ '" + selectedVendor.VendorId + "'";
                }

                //we need to break transaction. SAP options paramater limited.
                if ((i + 1) % 1000 == 0 || i == (selectedVendorList.Count - 1))
                {
                    var result = client.mi_osReadTableMC(@params);
                    if (result.DATA != null)
                    {

                        foreach (var item in result.DATA)
                        {
                            var resultRow = item.WA.Split('|').Select(p => p.Trim()).ToList();

                            var cv = new CharacteristicValue();
                            cv.Object = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "OBJEK")];
                            cv.InternalChar = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "ATINN")];
                            cv.Counter = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "ATZHL")];
                            cv.ObjectClass = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "MAFID")];
                            cv.ClassType = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "KLART")];
                            cv.IntCounter = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "ADZHL")];
                            cv.CharValue = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "ATWRT")];
                            cv.ValueFrom = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "ATFLV")];
                            cv.IntMeasUnit = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "ATAWE")];
                            cv.ValueTo = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "ATFLB")];
                            cv.IntMeasUnit = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "ATAW1")];
                            cv.Code = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "ATCOD")];
                            cv.ToleranceFrom = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "ATTLV")];
                            cv.ToleranceTo = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "ATTLB")];
                            cv.Percentage = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "ATPRZ")];
                            cv.Increment = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "ATINC")];
                            cv.Author = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "ATAUT")];
                            cv.ChangeNumber = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "AENNR")];
                            cv.ValidFrom = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "DATUV")];
                            cv.DeletionInd = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "LKENZ")];
                            //cv.InternalChar = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "ATIMB")];
                            cv.InstanceCntr = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "ATZIS")];
                            cv.Position = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "ATSRT")];
                            cv.CompType = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "ATVGLART")];


                            newCharacteristicValueList.Add(cv);
                        }
                    }


                    //foreach (var item in result.DATA)
                    //{

                    //    var resultRow = item.WA.Split('|').Select(p => p.Trim()).ToList();
                    //    var vendor = new Vendor();
                    //    vendor.VendorId = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "LIFNR")];
                    //    vendor.Country = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "LAND1")];
                    //    vendor.Name = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "NAME1")];
                    //    vendor.Name2 = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "NAME2")];
                    //    vendor.Name3 = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "NAME3")];
                    //    vendor.Name4 = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "NAME4")];
                    //    vendor.City = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "ORT01")];
                    //    vendor.District = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "ORT02")];
                    //    vendor.PoBox = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "PFACH")];
                    //    vendor.PoBoxPcode = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "PSTL2")];
                    //    vendor.PostalCode = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "PSTLZ")];
                    //    vendor.Region = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "REGIO")];
                    //    vendor.SearchTerm = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "SORTL")];
                    //    vendor.Street = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "STRAS")];
                    //    vendor.Address = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "ADRNR")];
                    //    vendor.Name = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "MCOD1")];
                    //    vendor.Name2 = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "MCOD2")];
                    //    vendor.City = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "MCOD3")];
                    //    vendor.Title = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "ANRED")];
                    //    vendor.TrainStation = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "BAHNS")];
                    //    vendor.LocationNo1 = int.Parse(resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "BBBNR")]);
                    //    vendor.LocationNo2 = int.Parse(resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "BBSNR")]);
                    //    vendor.Authorization = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "BEGRU")];
                    //    vendor.Industry = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "BRSCH")];
                    //    vendor.CheckDigit = int.Parse(resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "BUBKZ")]);
                    //    vendor.DataLine = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "DATLT")];
                    //    vendor.DmeIndicator = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "DTAMS")];
                    //    vendor.InstructionKey = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "DTAWS")];
                    //    vendor.CreatedOn = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "ERDAT")].ToDateTimeSapNullSafe();

                    //    newVendorList.Add(vendor);
                    //}

                    //reset filter
                    if (leftItemCount > 1000)
                    {
                        @params.OPTIONS = InitializeArrayHelper.InitializeArray<dt_ReadTableMC_RequestOPTIONS>(1000 + 1);
                        leftItemCount = leftItemCount - 1000;
                        @params.OPTIONS[1000].TEXT = ") AND MANDT EQ '" + Properties.Settings.Default.SAPOrgCode + "'";

                        ////Filter Komisaris
                        //@params.OPTIONS[1000 + 1].TEXT = " AND (ATINN EQ '0000000005'";
                        ////Filter Direksi
                        //@params.OPTIONS[1000 + 2].TEXT = " OR ATINN EQ '0000000019'";
                        ////Filter Kualifikasi
                        //@params.OPTIONS[1000 + 3].TEXT = " OR ATINN EQ '0000000010')";
                    }
                    else
                    {
                        @params.OPTIONS = InitializeArrayHelper.InitializeArray<dt_ReadTableMC_RequestOPTIONS>(leftItemCount + 1);
                        @params.OPTIONS[leftItemCount].TEXT = ") AND MANDT EQ '" + Properties.Settings.Default.SAPOrgCode + "'";
                        ////Filter Komisaris
                        //@params.OPTIONS[leftItemCount + 1].TEXT = " AND (ATINN EQ '0000000005'";
                        ////Filter Direksi
                        //@params.OPTIONS[leftItemCount + 2].TEXT = " OR ATINN EQ '0000000019'";
                        ////Filter Kualifikasi
                        //@params.OPTIONS[leftItemCount + 3].TEXT = " OR ATINN EQ '0000000010')";
                    }


                }
                i++;
                // j++;
            }




            var bulk = new BulkOperations();
            bulk.Setup<CharacteristicValue>(x => x.ForCollection(newCharacteristicValueList))
                .WithTable("CharacteristicValue")

                .AddColumn(x => x.Object)
                .AddColumn(x => x.InternalChar)
                .AddColumn(x => x.Counter)
                .AddColumn(x => x.ObjectClass)
                .AddColumn(x => x.ClassType)
                .AddColumn(x => x.IntCounter)
                .AddColumn(x => x.CharValue)
                .AddColumn(x => x.ValueFrom)
                .AddColumn(x => x.IntMeasUnit)
                .AddColumn(x => x.ValueTo)
                .AddColumn(x => x.Code)
                .AddColumn(x => x.ToleranceFrom)
                .AddColumn(x => x.ToleranceTo)
                .AddColumn(x => x.Percentage)
                .AddColumn(x => x.Increment)
                .AddColumn(x => x.Author)
                .AddColumn(x => x.ChangeNumber)
                .AddColumn(x => x.ValidFrom)
                .AddColumn(x => x.DeletionInd)
                .AddColumn(x => x.InstanceCntr)
                .AddColumn(x => x.Position)
                .AddColumn(x => x.CompType)

                .BulkInsertOrUpdate()
                .SetIdentityColumn(x=>x.CharacteristicValueId)
                .MatchTargetOn(x => x.Object)
                .MatchTargetOn(x => x.InternalChar)
                .MatchTargetOn(x => x.Counter)
                .MatchTargetOn(x => x.ObjectClass)
                .MatchTargetOn(x => x.ClassType)
                .MatchTargetOn(x => x.IntCounter)
                ;

            bulk.CommitTransaction("SCMONLINE.SAPSynchronizer.Properties.Settings.DefaultConnection");

        }

        private static void UpdateVendorQualification()
        {
            using (var conn = new SqlConnection(Properties.Settings.Default.DefaultConnection))
            using (var command = new SqlCommand("SP_UPDATE_VENDOR_QUALIFICATION", conn)
            {
                CommandType = CommandType.StoredProcedure
            })
            {
                conn.Open();
                command.ExecuteNonQuery();
            }
        }

        private static void SyncVendorData()
        {
            var selectedVendorList = GetVendorCodeByCompanyCode();
            if (selectedVendorList.Count == 0) throw new Exception("No Vendor Data");

            var client = new mi_osReadTableMCClient();
            client.ClientCredentials.UserName.UserName = Properties.Settings.Default.SAPUserName;
            client.ClientCredentials.UserName.Password = Properties.Settings.Default.SAPPassword; ;

            var @params = new dt_ReadTableMC_Request();

            @params.CLIENT = Properties.Settings.Default.SAPClient;
            @params.QUERY_TABLE = "LFA1";
            @params.DELIMITER = "|";
            @params.NO_DATA = "";
            @params.ROWSKIPS = "0";
            @params.ROWCOUNT = "-1";
            //@params.OPTIONS = InitializeArrayHelper.InitializeArray<dt_ReadTableMC_RequestOPTIONS>(selectedVendor.Count);
            //@params.OPTIONS = InitializeArrayHelper.InitializeArray<dt_ReadTableMC_RequestOPTIONS>(1);

            //@params.OPTIONS[0].TEXT = "LIFNR EQ '" + selectedVendor[0] + "'";


            @params.FIELDS = InitializeArrayHelper.InitializeArray<dt_ReadTableMC_RequestFIELDS>(30);

            @params.FIELDS[0].FIELDNAME = "MANDT";
            @params.FIELDS[1].FIELDNAME = "LIFNR";
            @params.FIELDS[2].FIELDNAME = "LAND1";
            @params.FIELDS[3].FIELDNAME = "NAME1";
            @params.FIELDS[4].FIELDNAME = "NAME2";
            @params.FIELDS[5].FIELDNAME = "NAME3";
            @params.FIELDS[6].FIELDNAME = "NAME4";
            @params.FIELDS[7].FIELDNAME = "ORT01";
            @params.FIELDS[8].FIELDNAME = "ORT02";
            @params.FIELDS[9].FIELDNAME = "PFACH";
            @params.FIELDS[10].FIELDNAME = "PSTL2";
            @params.FIELDS[11].FIELDNAME = "PSTLZ";
            @params.FIELDS[12].FIELDNAME = "REGIO";
            @params.FIELDS[13].FIELDNAME = "SORTL";
            @params.FIELDS[14].FIELDNAME = "STRAS";
            @params.FIELDS[15].FIELDNAME = "ADRNR";
            @params.FIELDS[16].FIELDNAME = "MCOD1";
            @params.FIELDS[17].FIELDNAME = "MCOD2";
            @params.FIELDS[18].FIELDNAME = "MCOD3";
            @params.FIELDS[19].FIELDNAME = "ANRED";
            @params.FIELDS[20].FIELDNAME = "BAHNS";
            @params.FIELDS[21].FIELDNAME = "BBBNR";
            @params.FIELDS[22].FIELDNAME = "BBSNR";
            @params.FIELDS[23].FIELDNAME = "BEGRU";
            @params.FIELDS[24].FIELDNAME = "BRSCH";
            @params.FIELDS[25].FIELDNAME = "BUBKZ";
            @params.FIELDS[26].FIELDNAME = "DATLT";
            @params.FIELDS[27].FIELDNAME = "DTAMS";
            //@params.FIELDS[28].FIELDNAME = "DTAWS";
            @params.FIELDS[28].FIELDNAME = "KTOKK";
            @params.FIELDS[29].FIELDNAME = "ERDAT";


            // @params.OPTIONS = InitializeArrayHelper.InitializeArray<dt_ReadTableMC_RequestOPTIONS>(1000);
            var newVendorList = new List<Vendor>();

            int i = 0;
            int leftItemCount = selectedVendorList.Count;

            //First init options
            if (leftItemCount > 1000)
            {
                @params.OPTIONS = InitializeArrayHelper.InitializeArray<dt_ReadTableMC_RequestOPTIONS>(1000);
                leftItemCount = leftItemCount - 1000;
            }
            else
            {
                @params.OPTIONS = InitializeArrayHelper.InitializeArray<dt_ReadTableMC_RequestOPTIONS>(leftItemCount);
            }


            foreach (var selectedVendor in selectedVendorList)
            {
                if ((i) % 1000 == 0)
                {
                    @params.OPTIONS[(i) % 1000].TEXT = "LIFNR EQ '" + selectedVendor + "'";
                }
                else
                {
                    @params.OPTIONS[(i) % 1000].TEXT = " OR LIFNR EQ '" + selectedVendor + "'";
                }

                //we need to break transaction. SAP options paramater limited.
                if ((i + 1) % 1000 == 0 || i == (selectedVendorList.Count - 1))
                {
                    var result = client.mi_osReadTableMC(@params);

                    foreach (var item in result.DATA)
                    {
                        var resultRow = item.WA.Split('|').Select(p => p.Trim()).ToList();
                        var vendor = new Vendor();
                        vendor.VendorId = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "LIFNR")];
                        vendor.Country = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "LAND1")];
                        vendor.Name = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "NAME1")];
                        vendor.Name2 = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "NAME2")];
                        vendor.Name3 = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "NAME3")];
                        vendor.Name4 = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "NAME4")];
                        vendor.City = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "ORT01")];
                        vendor.District = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "ORT02")];
                        vendor.PoBox = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "PFACH")];
                        vendor.PoBoxPcode = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "PSTL2")];
                        vendor.PostalCode = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "PSTLZ")];
                        vendor.Region = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "REGIO")];
                        vendor.SearchTerm = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "SORTL")];
                        vendor.Street = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "STRAS")];
                        vendor.Address = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "ADRNR")];
                        vendor.Name = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "MCOD1")];
                        vendor.Name2 = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "MCOD2")];
                        vendor.City = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "MCOD3")];
                        vendor.Title = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "ANRED")];
                        vendor.TrainStation = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "BAHNS")];
                        vendor.LocationNo1 = int.Parse(resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "BBBNR")]);
                        vendor.LocationNo2 = int.Parse(resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "BBSNR")]);
                        vendor.Authorization = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "BEGRU")];
                        vendor.Industry = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "BRSCH")];
                        vendor.CheckDigit = int.Parse(resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "BUBKZ")]);
                        vendor.DataLine = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "DATLT")];
                        vendor.DmeIndicator = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "DTAMS")];
                        //vendor.InstructionKey = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "DTAWS")];
                        vendor.CreatedOn = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "ERDAT")].ToDateTimeSapNullSafe();
                        vendor.Group = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "KTOKK")];

                        newVendorList.Add(vendor);
                    }

                    //reset filter
                    if (leftItemCount > 1000)
                    {
                        @params.OPTIONS = InitializeArrayHelper.InitializeArray<dt_ReadTableMC_RequestOPTIONS>(1000);
                        leftItemCount = leftItemCount - 1000;
                    }
                    else
                    {
                        @params.OPTIONS = InitializeArrayHelper.InitializeArray<dt_ReadTableMC_RequestOPTIONS>(leftItemCount);
                    }

                }
                i++;
                // j++;
            }



            var bulk = new BulkOperations();
            bulk.Setup<Vendor>(x => x.ForCollection(newVendorList))
                .WithTable("Vendor")
                .AddAllColumns()
                .BulkInsertOrUpdate()
                .MatchTargetOn(x => x.VendorId);

            bulk.CommitTransaction("SCMONLINE.SAPSynchronizer.Properties.Settings.DefaultConnection");

            UpdateVendorPerformance(newVendorList);
            UpdateVendorProfile(newVendorList);
            UpdateVendorQualification();

        }

        private static List<string> GetVendorCodeByCompanyCode()
        {
            var vendorList = new List<string>();
            var client = new mi_osReadTableMCClient();
            client.ClientCredentials.UserName.UserName = Properties.Settings.Default.SAPUserName;
            client.ClientCredentials.UserName.Password = Properties.Settings.Default.SAPPassword; ;

            var @params = new dt_ReadTableMC_Request();

            @params.CLIENT = Properties.Settings.Default.SAPClient;
            @params.QUERY_TABLE = "LFB1";
            @params.DELIMITER = "|";
            @params.NO_DATA = "";
            @params.ROWSKIPS = "0";
            @params.ROWCOUNT = "1";


            @params.OPTIONS = InitializeArrayHelper.InitializeArray<dt_ReadTableMC_RequestOPTIONS>(1);
            @params.OPTIONS[0].TEXT = "BUKRS EQ '" + Properties.Settings.Default.SAPOrgCode + "'";

            @params.FIELDS = InitializeArrayHelper.InitializeArray<dt_ReadTableMC_RequestFIELDS>(1);
            @params.FIELDS[0].FIELDNAME = "LIFNR";

            var result = client.mi_osReadTableMC(@params);

            //Data list not found
            if (result.DATA == null) throw new Exception("Data not found!");

            var updatedVendorList = new List<Vendor>();
            foreach (var item in result.DATA)
            {
                var resultRow = item.WA.Split('|').Select(p => p.Trim()).ToList();
                vendorList.Add(resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "LIFNR")]);
            }

            return vendorList;
        }
        public static string ToStringNullSafe(this object value)
        {
            return (value ?? string.Empty).ToString();
        }
        public static DateTime? ToDateTimeSapNullSafe(this object value)
        {
            DateTime? date = null;
            if (value.ToStringNullSafe() != "00000000")
            {
                date = DateTime.ParseExact(value.ToStringNullSafe(), "yyyyMMdd", CultureInfo.InvariantCulture);
            }

            return date;
        }
    }

}
