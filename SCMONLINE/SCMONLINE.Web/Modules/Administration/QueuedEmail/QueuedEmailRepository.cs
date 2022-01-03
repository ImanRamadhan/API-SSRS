
namespace SCMONLINE.Administration.Repositories
{
    using Microsoft.Reporting.WebForms;
    using SCMONLINE.Administration.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Collections.Generic;
    using System.Configuration;
    using System.Data;
    using System.IO;
    using System.Net.Mail;
    using System.Text;
    using System.Web.Hosting;
    using MyRow = Entities.QueuedEmailRow;

    public class QueuedEmailRepository
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

        //private void SendNote()
        //{
        //    Warning[] warnings;
        //    string[] streamids;
        //    byte[] bytes = null;
        //    string mimeType;
        //    string encoding;
        //    string filenameExtension;
        //    var a = Row.ProcurementId;
        //    ReportViewer rptViewer = ReportViewerControl.GetReportViewerControl("/SO_SCM_ONLINE/Pengadaan");
        //    ReportParameter param = new ReportParameter("ProcurementId", a.ToString());
        //    param.Values.Add(a.ToString());
        //    rptViewer.ServerReport.SetParameters(param);
        //    string filenameParams = "Report Pengadaan - R2.PDF";
        //    if (rptViewer.ProcessingMode == ProcessingMode.Local)
        //    {
        //        bytes = rptViewer.LocalReport.Render("PDF", null, out mimeType,
        //         out encoding, out filenameExtension, out streamids, out warnings);
        //    }
        //    else
        //    {
        //        bytes = rptViewer.ServerReport.Render("PDF", null, out mimeType,
        //        out encoding, out filenameExtension, out streamids, out warnings);
        //        string host = ConfigurationManager.AppSettings["SMTPHost"];
        //        var connection = SqlConnections.NewFor<QueuedEmailRow>();
        //        var p = new DynamicParameters();
        //        p.Add("@ProcurementId", a.ToString());
        //        List<QueuedEmailRow> az = (List<QueuedEmailRow>)connection.Query<QueuedEmailRow>("SP_GetUserMail", p, commandType: CommandType.StoredProcedure);
        //        foreach (var test in az)
        //        {
        //            var emailModel = new DocProcurementModel();
        //            emailModel.DisplayName = test.DisplayName;

        //            var emailBody = TemplateHelper.RenderTemplate(
        //                MVC.Views.SSRS.F3_CreateRFQ.DocProcurement, emailModel);
        //            System.Net.Mail.MailMessage mail = new System.Net.Mail.MailMessage();
        //            mail.Body = emailBody;

        //            mail.To.Add(new MailAddress(test.Email));
        //            mail.Subject = "Report Penawaran Pengadaan [R2]";
        //            mail.SubjectEncoding = Encoding.UTF8;
        //            Attachment att = new Attachment(new MemoryStream(bytes), filenameParams);
        //            mail.Attachments.Add(att);
        //            var client = new SmtpClient();

        //            var smtp = new System.Net.Mail.SmtpClient();
        //            var credential = (System.Net.NetworkCredential)smtp.Credentials;
        //            string strhost = smtp.Host;
        //            int port = smtp.Port;
        //            string strUsername = credential.UserName;
        //            string password = credential.Password;

        //            if (client.DeliveryMethod == SmtpDeliveryMethod.SpecifiedPickupDirectory &&
        //                string.IsNullOrEmpty(client.PickupDirectoryLocation))
        //            {
        //                var pickupPath = HostingEnvironment.MapPath("~/App_Data");
        //                pickupPath = Path.Combine(pickupPath, "Mail");
        //                Directory.CreateDirectory(pickupPath);
        //                client.PickupDirectoryLocation = pickupPath;
        //            }
        //            client.Credentials = credential;
        //            client.EnableSsl = true;
        //            client.Host = strhost;
        //            client.Port = port;

        //            client.Send(mail);
        //        }
        //    }
        //}

        private class MySaveHandler : SaveRequestHandler<MyRow> { }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}