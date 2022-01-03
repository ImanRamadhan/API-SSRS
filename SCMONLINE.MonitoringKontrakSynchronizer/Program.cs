using Dapper;
using SqlBulkTools;
using StackExchange.Exceptional;
using StackExchange.Exceptional.Stores;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
//using System.Data;
//using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SCMONLINE.MonitoringKontrakSynchronizer
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
                        ConnectionString = Properties.Settings.Default.ScmOnlineConnection
                    });

                }
            );
            // Optional: for logging all unhandled exceptions
            Exceptional.ObserveAppDomainUnhandledExceptions();
            var conn = new SqlConnection(Properties.Settings.Default.MonitoringKontrakConnection);
            var prList = conn.Query<GET_RECENT_PR_STATUS>("GET_RECENT_PR_STATUS", commandType: CommandType.StoredProcedure);
            //SAP PR No length is 10 
            var mappedPrList = prList.Select(a => new PurchaseRequisition { PRNo = Truncate(a.PR_RELEASE_NO.Trim(),10), Status = Truncate(a.STATUS.Trim(),50) }).ToList();

            var bulk = new BulkOperations();
            bulk.Setup<PurchaseRequisition>(x => x.ForCollection(mappedPrList))
                .WithTable("PurchaseRequisition")
                //.AddAllColumns()
                
                .AddColumn(x => x.Status)
                .BulkInsertOrUpdate()
                //.SetIdentityColumn(x => x.PRNo)
                .MatchTargetOn(x => x.PRNo);

            bulk.CommitTransaction("SCMONLINE.MonitoringKontrakSynchronizer.Properties.Settings.ScmOnlineConnection");

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
            //});        }


            //    var user = cnn.Query<User>("spGetUser", new { Id = 1 },
            //commandType: CommandType.StoredProcedure).First();

            //    using (var conn = new SqlConnection(Properties.Settings.Default.MonitoringKontrakConnection))
            //    using (var command = new SqlCommand("GET_RECENT_PR_STATUS", conn)
            //    {
            //        CommandType = CommandType.StoredProcedure
            //    })
            //    {
            //        conn.Open();

            //        using (var da = new SqlDataAdapter(command))
            //        {
            //            command.CommandType = CommandType.StoredProcedure;
            //            var prStatusList = new DataTable();
            //            da.Fill(prStatusList);
            //            foreach (var row in prStatusList.Rows)
            //            {
            //            }
            //        }
            //    }
        }
        /// <summary>
        /// Get a substring of the first N characters.
        /// </summary>
        public static string Truncate(string source, int length)
        {
            if (source.Length > length)
            {
                source = source.Substring(0, length);
            }
            return source;
        }
    }
}
