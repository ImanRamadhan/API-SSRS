
namespace SCMONLINE.Procurement.Repositories
{
    using Microsoft.Reporting.WebForms;
    using SSRS.mi_osReadTableMC_PXD;
    using SCMONLINE.Modules._Ext.Utils;
    using SCMONLINE.Procurement.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Configuration;
    using System.Data;
    using System.Globalization;
    using System.IO;
    using System.Linq;
    using System.Net.Mail;
    using System.Text;
    using System.Web.Hosting;
    using System.Web.Mail;
    using System.Web.UI.WebControls;
    using MyRow = Entities.ProcurementRow;

    public class F1_BLSelectionAdjustmentRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        //public static class ReportViewerControl
        //{
        //    public static ReportViewer GetReportViewerControl(string reportPath)
        //    {
        //        ReportViewer reportViewer = new ReportViewer();
        //        reportViewer.ServerReport.ReportPath = reportPath;
        //        reportViewer.ProcessingMode = ProcessingMode.Remote;
        //        reportViewer.SizeToReportContent = true;
        //        //reportViewer.SizeToReportContent = false;
        //        //reportViewer.AsyncRendering = true;
        //        reportViewer.Width = Unit.Percentage(100);
        //        reportViewer.Height = Unit.Percentage(100);
        //        //reportViewer.Width = Unit.Pixel(1000);
        //        //reportViewer.Height = Unit.Pixel(1000);
        //        //reportViewer.ShowBackButton = true;
        //        //reportViewer.ShowPrintButton = true;
        //        reportViewer.ServerReport.ReportServerUrl = new Uri("http://dbprodpdsi.pertamina.com/reportserver");
        //        reportViewer.ServerReport.ReportServerCredentials = new SSRSReportServerCredentials();
        //        return reportViewer;
        //    }
        //}

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            //protected override void AfterSave()
            //{
            //    base.AfterSave();

            //    Warning[] warnings;
            //    string[] streamids;
            //    string mimeType;
            //    string encoding;
            //    string filenameExtension;

            //    ReportViewer rptViewer = ReportViewerControl.GetReportViewerControl("/SO_SCM_ONLINE/Pengadaan");
            //    //ReportParameterInfoCollection pInfo = rptViewer.ServerReport.GetParameters();

            //    //string filenameParams = Guid.NewGuid().ToString();
            //    string filenameParams = "Report Pengadaan - R2.PDF";

            //    byte[] bytes;
            //    if (rptViewer.ProcessingMode == ProcessingMode.Local)
            //    {
            //        bytes = rptViewer.LocalReport.Render("PDF", null, out mimeType,
            //         out encoding, out filenameExtension, out streamids, out warnings);
            //    }
            //    else
            //    {
            //        bytes = rptViewer.ServerReport.Render("PDF", null, out mimeType,
            //        out encoding, out filenameExtension, out streamids, out warnings);
            //        //string typesfile = ".PDF";
            //        string host = ConfigurationManager.AppSettings["SMTPHost"];
            //        System.Net.Mail.MailMessage mail = new System.Net.Mail.MailMessage();
            //        mail.Body = "Please find your report attached";
            //        //mail.IsBodyHtml = true;
            //        mail.To.Add(new MailAddress("muhammadhafizyusuf554@gmail.com"));
            //        //mail.From = new MailAddress(fromAddress, fromDisplay, Encoding.UTF8);
            //        mail.Subject = "Apapun dimanapun minumnya Air Putih";
            //        mail.SubjectEncoding = Encoding.UTF8;
            //        //mail.Priority = MailPriority.Normal;
            //        //foreach (MailAttachment ma in attachments)
            //        //{
            //        Attachment att = new Attachment(new MemoryStream(bytes), filenameParams);

            //        mail.Attachments.Add(att);
            //        //}
            //        var client = new SmtpClient();

            //        var smtp = new System.Net.Mail.SmtpClient();
            //        var credential = (System.Net.NetworkCredential)smtp.Credentials;
            //        string strhost = smtp.Host;
            //        int port = smtp.Port;
            //        string strUsername = credential.UserName;
            //        string password = credential.Password;

            //        if (client.DeliveryMethod == SmtpDeliveryMethod.SpecifiedPickupDirectory &&
            //            string.IsNullOrEmpty(client.PickupDirectoryLocation))
            //        {
            //            var pickupPath = HostingEnvironment.MapPath("~/App_Data");
            //            pickupPath = Path.Combine(pickupPath, "Mail");
            //            Directory.CreateDirectory(pickupPath);
            //            client.PickupDirectoryLocation = pickupPath;
            //        }
            //        client.Credentials = credential;
            //        client.EnableSsl = true;
            //        client.Host = strhost;
            //        client.Port = port;
            //        client.Send(mail);
            //        //SmtpClient smtp = new SmtpClient();
            //        //smtp.Credentials = new System.Net.NetworkCredential("hzheveo554@gmail.com", "sendaljepit5789");
            //        //smtp.Host = host;
            //        //smtp.Send(mail);
            //    }
            //}
            
            protected override void BeforeSave()
            {
                base.BeforeSave();

                var request = new BidderListServiceRequest();
                request.CollectiveNumber = this.Row.CollectiveNumber;
                var bidderListHeader = new F1_BLSelectionAdjustmentRepository().GetBidderListHeader(this.Connection, request);

                Row.Title = bidderListHeader.Title;
                Row.SapBidderListCreatedDate = bidderListHeader.SapBidderListCreatedDate;
                Row.SapBidderListCreatedBy = bidderListHeader.SapBidderListCreatedBy;
                Row.ProcurementTypeId = bidderListHeader.ProcurementTypeId;
                Row.Classification = bidderListHeader.Classification;
                Row.Qualification = bidderListHeader.Qualification;
                Row.RequestedBy = bidderListHeader.RequestedBy;
                Row.RequestorPosition = bidderListHeader.RequestorPosition;
                Row.ApprovedBy = bidderListHeader.ApprovedBy;
                Row.ApproverPosition = bidderListHeader.ApproverPosition;
                //Don't replace participant, we'll need to adjust them
                //Row.ProcParticipant = bidderListHeader.ProcParticipant;
                Row.ProcurementMethodId = bidderListHeader.ProcurementMethodId;

                switch (Row.ProcValueRangeId)
                {
                    case 1:
                        //internal
                        Row.CommitteeTypeId = 2;
                        break;
                    case 2:
                        //pengadaan
                        Row.CommitteeTypeId = 1;
                        break;
                    case 3:
                        //pengadaan
                        Row.CommitteeTypeId = 1;
                        break;
                    default:
                        break;
                }


                if (IsCreate)
                {
                    Row.CreatedDate = DateTime.Now;
                    Row.CreatedBy = Authorization.Username;
                }

            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> {
        }
        private class MyListHandler : ListRequestHandler<MyRow>
        {
            protected override void ApplyFilters(SqlQuery query)
            {
                base.ApplyFilters(query);

                var procurementType = new List<string>();
                if (Authorization.HasPermission(ProcurementPermission.DataService))
                {
                    procurementType.Add("S");
                }
                if (Authorization.HasPermission(ProcurementPermission.DataMaterial))
                {
                    procurementType.Add("M");
                }

                if (procurementType.Count > 0)
                {
                    query.Where(new Criteria(fld.ProcurementTypeId).In(procurementType));
                }
                else
                {
                    //hide all data
                    query.Where(new Criteria("1=2"));
                }

            }
        }

        internal MyRow GetBidderListHeader(IDbConnection connection, BidderListServiceRequest request)
        {
            var client = new mi_osReadTableMCClient();
            client.ClientCredentials.UserName.UserName = ConfigurationManager.AppSettings["SAPUserName"];
            client.ClientCredentials.UserName.Password = ConfigurationManager.AppSettings["SAPPassword"]; ;

            var @params = new dt_ReadTableMC_Request();

            @params.CLIENT = ConfigurationManager.AppSettings["SAPClient"];
            @params.QUERY_TABLE = "ZMBIDLISTH";
            @params.DELIMITER = "|";
            @params.NO_DATA = "";
            @params.ROWSKIPS = "0";
            @params.ROWCOUNT = "1";
            @params.OPTIONS = new dt_ReadTableMC_RequestOPTIONS[2];
            @params.OPTIONS = InitializeArrayHelper.InitializeArray<dt_ReadTableMC_RequestOPTIONS>(2);
            @params.OPTIONS[0].TEXT = "EKORG EQ '"+ ConfigurationManager.AppSettings["SAPOrgCode"] + "'";
            @params.OPTIONS[1].TEXT = "AND BIDLISTNO EQ '" + request.CollectiveNumber + "'";
            @params.FIELDS = InitializeArrayHelper.InitializeArray<dt_ReadTableMC_RequestFIELDS>(11);
            ////new dt_ReadTableMC_RequestFIELDS[11];
            ////@params.FIELDS[0] = new dt_ReadTableMC_RequestFIELDS();
            @params.FIELDS[0].FIELDNAME = "KNDPRO";
            @params.FIELDS[1].FIELDNAME = "SUBIDUSAHA";
            @params.FIELDS[2].FIELDNAME = "KUALIFIKASI";
            @params.FIELDS[3].FIELDNAME = "PENGADAAN";
            @params.FIELDS[4].FIELDNAME = "REKANAN";
            @params.FIELDS[5].FIELDNAME = "DIUSULKAN";
            @params.FIELDS[6].FIELDNAME = "DISETUJUI";
            @params.FIELDS[7].FIELDNAME = "JAB_DIUSULKAN";
            @params.FIELDS[8].FIELDNAME = "JAB_DISETUJUI";
            @params.FIELDS[9].FIELDNAME = "CRDATE";
            @params.FIELDS[10].FIELDNAME = "CRUSER";

            var result = client.mi_osReadTableMC(@params);

            //Bidder list not found
            if (result.DATA == null) throw new ValidationError("Bidder List " + request.CollectiveNumber + " not found!");

            //Bidder list exists
            var resultRow = result.DATA[0].WA.Split('|').Select(p => p.Trim()).ToList();

            //var x = ""Hello From End Point!""   
            ProcurementRow bidderListHeader = new ProcurementRow();

            bidderListHeader.Title = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "PENGADAAN")];
            bidderListHeader.SapBidderListCreatedDate = DateTime.ParseExact(resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "CRDATE")], "yyyyMMdd", CultureInfo.InvariantCulture);
            bidderListHeader.SapBidderListCreatedBy = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "CRUSER")];
            bidderListHeader.ProcurementTypeId = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "KNDPRO")];
            bidderListHeader.Classification = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "SUBIDUSAHA")];
            bidderListHeader.Qualification = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "KUALIFIKASI")];
            bidderListHeader.RequestedBy = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "DIUSULKAN")];
            bidderListHeader.RequestorPosition = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "JAB_DIUSULKAN")];
            bidderListHeader.ApprovedBy = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "DISETUJUI")];
            bidderListHeader.ApproverPosition = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "JAB_DISETUJUI")];
            bidderListHeader.ProcParticipant = GetAllParticipant(connection, request.CollectiveNumber);
            bidderListHeader.ProcurementMethodId = request.CollectiveNumber.Substring(3, 2);

            return bidderListHeader;
        }

        private List<ProcParticipantRow> GetAllParticipant(IDbConnection connection, string collectiveNumber)
        {
            var client = new mi_osReadTableMCClient();
            client.ClientCredentials.UserName.UserName = ConfigurationManager.AppSettings["SAPUserName"];
            client.ClientCredentials.UserName.Password = ConfigurationManager.AppSettings["SAPPassword"]; ;

            var @params = new dt_ReadTableMC_Request();

            @params.CLIENT = ConfigurationManager.AppSettings["SAPClient"];
            @params.QUERY_TABLE = "ZMBIDLISTI";
            @params.DELIMITER = "|";
            @params.NO_DATA = "";
            @params.ROWSKIPS = "0";
            @params.ROWCOUNT = "-1";
            @params.OPTIONS = new dt_ReadTableMC_RequestOPTIONS[2];
            @params.OPTIONS = InitializeArrayHelper.InitializeArray<dt_ReadTableMC_RequestOPTIONS>(2);
            @params.OPTIONS[0].TEXT = "EKORG EQ '" + ConfigurationManager.AppSettings["SAPOrgCode"] + "'";
            @params.OPTIONS[1].TEXT = "AND BIDLISTNO EQ '" + collectiveNumber + "'";
            @params.FIELDS = InitializeArrayHelper.InitializeArray<dt_ReadTableMC_RequestFIELDS>(16);
            ////new dt_ReadTableMC_RequestFIELDS[11];
            ////@params.FIELDS[0] = new dt_ReadTableMC_RequestFIELDS();
            @params.FIELDS[0].FIELDNAME = "MANDT";
            @params.FIELDS[1].FIELDNAME = "EKORG";
            @params.FIELDS[2].FIELDNAME = "EKGRP";
            @params.FIELDS[3].FIELDNAME = "BIDLISTNO";
            @params.FIELDS[4].FIELDNAME = "SEQNO";
            @params.FIELDS[5].FIELDNAME = "ORIG_SEQNO";
            @params.FIELDS[6].FIELDNAME = "LIFNR";
            @params.FIELDS[7].FIELDNAME = "KTOKK";
            @params.FIELDS[8].FIELDNAME = "STAKEHOLDERS";
            @params.FIELDS[9].FIELDNAME = "DIRECTOR";
            @params.FIELDS[10].FIELDNAME = "TT_BL";
            @params.FIELDS[11].FIELDNAME = "POINTT";
            @params.FIELDS[12].FIELDNAME = "PERCENT_WIN";
            @params.FIELDS[13].FIELDNAME = "BL_PL";
            @params.FIELDS[14].FIELDNAME = "TT_PO";
            @params.FIELDS[15].FIELDNAME = "STATUS";

            var result = client.mi_osReadTableMC(@params);

            ////Bidder list not found
            //if (result.DATA == null) throw new ValidationError("Bidder List " + collectiveNumber + " not found!");
            List<ProcParticipantRow> participantList = new List<ProcParticipantRow>();

            if (result.DATA != null)
            {

                foreach (var row in result.DATA)
                {
                    var resultRow = row.WA.Split('|').Select(p => p.Trim()).ToList();
                    var participant = new ProcParticipantRow();

                    //Only Get Vendor Id From SAP
                    participant.VendorId = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "LIFNR")];
                    participant.SequenceNo = Int32.Parse(resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "SEQNO")]);
                    //take other vendor data from synchronized local database
                    var vendorRequest = new RetrieveRequest();
                    vendorRequest.EntityId = participant.VendorId;
                    var vendor = new VendorRepository().Retrieve(connection, vendorRequest);
                    if (vendor != null)
                    {
                        participant.VendorName = vendor.Entity.Name;
                        participant.VendorPenaltyCode = vendor.Entity.PenaltyCode;
                        participant.Source = "SAP";
                    }

                    participantList.Add(participant);
                }

            }
            return participantList;
        }

    }
}