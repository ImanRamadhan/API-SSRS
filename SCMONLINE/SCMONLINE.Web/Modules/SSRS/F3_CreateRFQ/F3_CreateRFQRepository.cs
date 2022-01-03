namespace SCMONLINE.Procurement.Repositories
{
    using Microsoft.Reporting.WebForms;
    using SCMONLINE.Administration;
    using SCMONLINE.Administration.Entities;
    using SCMONLINE.Administration.Repositories;
    using SSRS.mi_os_rfqpo_web;
    using SSRS.mi_osReadTableMC_PXD;
    using SCMONLINE.Modules._Ext.Utils;
    using SCMONLINE.Procurement.Entities;
    using SCMONLINE.Modules.Common.Model;
    using Serenity;
    using System.IO;
    using Serenity.IO;
    using Serenity.Data;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Collections.Generic;
    using System.Configuration;
    using System.Data;
    using System.Globalization;
    using System.Linq;
    using System.Net;
    using System.Net.Mail;
    using System.Text;
    using System.Threading.Tasks;
    using System.Web;
    using System.Web.Hosting;
    using System.Web.UI.WebControls;
    using MyRow = Entities.ProcurementRow;
    using MyRowMail = Entities.VendorRepresentativeRow;
    using static System.Net.WebRequestMethods;
    using System.Net.Http;

    public class F3_CreateRFQRepository
    {

        private static MyRow.RowFields fld { get { return MyRow.Fields; } }
        private static MyRowMail.RowFields ld { get { return MyRowMail.Fields; } }

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

        private class MyListHandler : ListRequestHandler<MyRow>
        {
            protected override void ApplyFilters(SqlQuery query)
            {
                base.ApplyFilters(query);

                var procurementType = new List<string>();
                if (Serenity.Authorization.HasPermission(ProcurementPermission.DataService))
                {
                    procurementType.Add("S");
                }
                if (Serenity.Authorization.HasPermission(ProcurementPermission.DataMaterial))
                {
                    procurementType.Add("M");
                }



                query.Where(new Criteria(fld.F3SubmitDate).IsNotNull() || new Criteria(fld.Status) == "F3");

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

        //private class MySaveHandler : SaveRequestHandler<MyRow> { }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow>
        {
            protected override void OnReturn()
            {
                base.OnReturn();
                var procurementType = new List<string>();
                var nocn = ProcurementRow.Fields.ProcurementId;
                if (Serenity.Authorization.HasPermission(ProcurementPermission.DataService))
                {
                    procurementType.Add("S");
                }
                if (Serenity.Authorization.HasPermission(ProcurementPermission.DataMaterial))
                {
                    procurementType.Add("M");
                }

                if (Row.F3SubmitDate != null || Row.Status == "F3") { }
                else { throw new ValidationError("AccessDenied", null, Texts.Site.AccessDenied.LackPermissions); }

                if (procurementType.Count > 0)
                {
                    if (procurementType.Any(x => x == Row.ProcurementTypeId))
                    {
                    }
                    else { throw new ValidationError("AccessDenied", null, Texts.Site.AccessDenied.LackPermissions); }

                }
                else
                {
                    throw new ValidationError("AccessDenied", null, Texts.Site.AccessDenied.LackPermissions);
                }

            }
        }

        public void SaveNoteVendor(Int64 id, String NoCN, String Indate, String CloseDate, String Title, IUnitOfWork uow)
        {
            var a = id;
            string host = ConfigurationManager.AppSettings["SMTPHost"];
            var connection = SqlConnections.NewFor<UserRow>();
            var p = new DynamicParameters();

            var adminEmail = connection.TrySingle<SettingRow>(new Criteria(SettingRow.Fields.Name.PropertyName) == "admin_email");
            string[] emails = adminEmail.Value.Split('|');

            //default value if doesnot exist on database table setting
            string fromAdmin = "ramadhan.iman@gmail.com";
            string fromNameAdmin = "Admin";
            if (emails.Count() > 1)
            {
                fromAdmin = emails[0];
                fromNameAdmin = emails[1];
            }

            p.Add("@ProcurementId", a.ToString());
            List<F3_EmailVendorRow> az = (List<F3_EmailVendorRow>)connection.Query<F3_EmailVendorRow>("SP_VendorEmail", p, commandType: CommandType.StoredProcedure);
            foreach (var test in az)
            {
                var emailComplaint = connection.TrySingle<SettingRow>(new Criteria(SettingRow.Fields.Name.PropertyName) == "pic_email");
                
                //var EmailComplaint = Administration.SettingRow.getLookup().itemById["request_description"].Value;
                var emailModel = new DocProcurementModel();
                emailModel.Username = test.Username;
                emailModel.Password = "pertamina123";
                emailModel.InDate = Indate;
                emailModel.CloseDate = CloseDate;
                emailModel.DisplayName = emailComplaint.Value;
                var emailBody = TemplateHelper.RenderTemplate(
                    MVC.Views.SSRS.F3_CreateRFQ.DocInviteVendor, emailModel);
                //System.Net.Mail.MailMessage mail = new System.Net.Mail.MailMessage();
                
                var client = new JsonServiceClient("http://ptmpdsiapp.pertamina.com/commonapi/api/");
                var response = client.Post<ListResponse<Dictionary<string, object>>>("email/send",
                    new EmailRequest {
                        recipient = test.EmailParticipant,
                        recipientCC = string.Empty,
                        recipientBC = string.Empty,
                        subject = "Notifikasi Info Lebih Lanjut Untuk Pengadaan" + Title + NoCN,
                        body = emailBody,
                        description = string.Empty
                    });
                
                /*
                HttpClient client = new HttpClient();
                var response = string.Empty;
                
                Uri u = new Uri(ConfigurationManager.AppSettings["urlEmailapi"]);
                var payload = "{\"recipient\": \"" + test.EmailParticipant + "\"," +
                                "\"recipientCC\": \"" + string.Empty + "\"," +
                                "\"recipientBC\": \"" + string.Empty + "\"," +
                                "\"subject\": \"" + "Notifikasi Info Lebih Lanjut Untuk Pengadaan" + Title + NoCN + "\"," +
                                "\"body\": \"" + emailBody + "\"," +
                                "\"description\": \"" + string.Empty + "\"}";

                HttpContent c = new StringContent(payload, Encoding.UTF8, "application/json");

                HttpResponseMessage result = await client.PostAsync(u, c);
                */
                /*
                var Queued = new QueuedEmailRow();
                Queued.PriorityId = 1;
                Queued.From = fromAdmin;
                Queued.FromName = fromNameAdmin;
                Queued.To = test.EmailParticipant;
                Queued.ToName = test.VendorName;
                Queued.Subject = "Notifikasi Info Lebih Lanjut Untuk Pengadaan" + Title + NoCN;
                //Queued.AttachmentFileName = namefile;
                //Queued.AttachmentFilePath = filePath;
                Queued.Body = emailBody;
                Queued.CreatedOnUtc = DateTime.Now;
                //Queued.CreatedOnUtc = DateTime.Now;
                //Queued.SentTries = 1;
                Queued.EmailAccountId = 1;

                var saveRequest = new SaveRequest<QueuedEmailRow> { Entity = Queued };
                new QueuedEmailRepository().Create(uow, saveRequest);
                */
            }
            //EmailThread.StartEmailThread();
        }

        public void SaveNote(Int64 id, String NoCN, IUnitOfWork uow)
        {
            Warning[] warnings;
            string[] streamids;
            byte[] bytes = null;
            string mimeType;
            string encoding;
            string filenameExtension;

            var a = id;
            ReportViewer rptViewer = ReportViewerControl.GetReportViewerControl("/SO_SCM_ONLINE/Pengadaan");
            if (ConfigurationManager.AppSettings["Environment"] != null)
            {
                if (ConfigurationManager.AppSettings["Environment"].ToString() == "Development")
                {
                    rptViewer = ReportViewerControl.GetReportViewerControl("/SO_SCM_ONLINE/Pengadaan_DEV");
                }
            }
            ReportParameter param = new ReportParameter("ProcurementId", a.ToString());
            param.Values.Add(a.ToString());
            rptViewer.ServerReport.SetParameters(param);
            string filenameParams = "Report Pengadaan - R2";
            if (rptViewer.ProcessingMode == ProcessingMode.Local)
            {
                bytes = rptViewer.LocalReport.Render("PDF", null, out mimeType,
                 out encoding, out filenameExtension, out streamids, out warnings);
            }
            else
            {
                
                bytes = rptViewer.ServerReport.Render("PDF", null, out mimeType,
                out encoding, out filenameExtension, out streamids, out warnings);
                string host = ConfigurationManager.AppSettings["SMTPHost"];
                var connection = SqlConnections.NewFor<UserRow>();
                var p = new DynamicParameters();

                var adminEmail = connection.TrySingle<SettingRow>(new Criteria(SettingRow.Fields.Name.PropertyName) == "admin_email");
                string[] emails = adminEmail.Value.Split('|');

                //default value if doesnot exist on database table setting
                string fromAdmin = "ramadhan.iman@gmail.com";
                string fromNameAdmin = "Admin";
                if (emails.Count() > 1)
                {
                    fromAdmin = emails[0];
                    fromNameAdmin = emails[1];
                }

                p.Add("@ProcurementId", a.ToString());
                List<UserRow> az = (List<UserRow>)connection.Query<UserRow>("SP_GetUserMail", p, commandType: CommandType.StoredProcedure);
                foreach (var test in az)
                {
                    var emailComplaint = connection.TrySingle<SettingRow>(new Criteria(SettingRow.Fields.Name.PropertyName) == "pic_email");

                    //var EmailComplaint = Administration.SettingRow.getLookup().itemById["request_description"].Value;
                    var emailModel = new DocProcurementModel();
                    emailModel.DisplayName = emailComplaint.Value;
                    var emailBody = TemplateHelper.RenderTemplate(
                        MVC.Views.SSRS.F3_CreateRFQ.DocProcurement, emailModel);
                    //System.Net.Mail.MailMessage mail = new System.Net.Mail.MailMessage();
                    var nameFileMandatory = filenameParams + DateTime.Now.ToString("MMddyyyyHHmmss") + ".PDF";
                    var ms = new MemoryStream(bytes);
                    var processor = new UploadProcessor
                    {
                        ThumbWidth = 128,
                        ThumbHeight = 96,
                    };
                    var path = "/temporary/";
                    var namefile = "Report R2_Dokumen_Pengadaan" + DateTime.Now.ToString("yyyyMMddHHmmss") + ".PDF";
                    var filePath = path + namefile;
                    var fullFilePath = HostingEnvironment.MapPath("~/App_Data/upload" + filePath);
                    ms.Seek(0, SeekOrigin.Begin);
                    Directory.CreateDirectory(filePath);
                    using (FileStream fs = new FileStream(fullFilePath, FileMode.Create))
                    {
                        var FileSize = fs.Length;
                        ms.CopyTo(fs);
                    }

                    SSRS.MailServicesPTM.Service1Client mailservice = new SSRS.MailServicesPTM.Service1Client();
                    SSRS.MailServicesPTM.CommonAttachmentDoc att = new SSRS.MailServicesPTM.CommonAttachmentDoc();

                    att.filename = namefile;
                    att.filebyte = bytes;

                    var atts = new List<SSRS.MailServicesPTM.CommonAttachmentDoc>();
                    atts.Add(att);

                    var mailuser = ConfigurationManager.AppSettings["MailUser"].ToString();
                    var mailPassword = ConfigurationManager.AppSettings["MailPassword"].ToString();

                    SSRS.MailServicesPTM.CommonResponseMessage messageResult = new SSRS.MailServicesPTM.CommonResponseMessage();

                    try
                    {
                        messageResult = mailservice.SendMessageAtt(
                                                                    mailuser,
                                                                    mailPassword,
                                                                    test.Email,
                                                                    null,
                                                                    null,
                                                                    "Report Penawaran Pengadaan [R2] " + NoCN,
                                                                    emailBody,
                                                                    atts.ToArray()
                                                                    );
                    }
                    catch (Exception ex)
                    {

                    }

                    /*
                    var Queued = new QueuedEmailRow();
                    Queued.PriorityId = 1;
                    Queued.From = fromAdmin;
                    Queued.FromName = fromNameAdmin;
                    Queued.To = test.Email;
                    Queued.ToName = test.DisplayName;
                    Queued.Subject = "Report Penawaran Pengadaan [R2] "+ NoCN;
                    Queued.AttachmentFileName = namefile;
                    Queued.AttachmentFilePath = filePath;
                    Queued.Body = emailBody;
                    Queued.CreatedOnUtc = DateTime.Now;
                    //Queued.CreatedOnUtc = DateTime.Now;
                    //Queued.SentTries = 1;
                    Queued.EmailAccountId = 1;

                    var saveRequest = new SaveRequest<QueuedEmailRow> { Entity = Queued };
                    new QueuedEmailRepository().Create(uow, saveRequest);
                    */
                }
            }
            //EmailThread.StartEmailThread();
        }

        public static class ReportViewerControl
        {
            public static ReportViewer GetReportViewerControl(string reportPath)
            {
                ReportViewer reportViewer = new ReportViewer();
                reportViewer.ServerReport.ReportPath = reportPath;
                reportViewer.ProcessingMode = ProcessingMode.Remote;
                reportViewer.SizeToReportContent = true;
                reportViewer.Width = Unit.Percentage(100);
                reportViewer.Height = Unit.Percentage(100);
                reportViewer.ServerReport.ReportServerUrl = new Uri("http://dbprodpdsi.pertamina.com/reportserver");
                reportViewer.ServerReport.ReportServerCredentials = new SSRSReportServerCredentials();
                return reportViewer;
            }
        }



        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            //private void SaveNote(IUnitOfWork uow, QueuedEmailRow Queued, string entityType, Int64 entityId, Int64? noteId)
            
            private void SendNotification()
            {
                Warning[] warnings;
                string[] streamids;
                byte[] bytes = null;
                string mimeType;
                string encoding;
                string filenameExtension;
                //System.Collections.Specialized.NameValueCollection urlAccessParameters = new System.Collections.Specialized.NameValueCollection();
                // urlAccessParameters.Add("rs:ProcurementId", "True");
                var a = Row.ProcurementId;
                ReportViewer rptViewer = ReportViewerControl.GetReportViewerControl("/SO_SCM_ONLINE/Pengadaan");
                //ReportParameterInfoCollection pInfo = rptViewer.ServerReport.GetParameters();
                ReportParameter param = new ReportParameter("ProcurementId", a.ToString());
                param.Values.Add(a.ToString());
                //List<ReportParameter> param = new List<ReportParameter>();
                //param.Add(new ReportParameter("ProcurementId", a.ToString()));
                rptViewer.ServerReport.SetParameters(param);
                //rptViewer.ProcessingMode = ProcessingMode.Remote;

                //string filenameParams = Guid.NewGuid().ToString();
                string filenameParams = "Report Pengadaan - R2.PDF";


                if (rptViewer.ProcessingMode == ProcessingMode.Local)
                {
                    bytes = rptViewer.LocalReport.Render("PDF", null, out mimeType,
                     out encoding, out filenameExtension, out streamids, out warnings);
                }
                else
                {
                    //bytes = rptViewer.ServerReport.Render("pdf", null, urlAccessParameters, out streamids, out mimeType, out filenameExtension);
                    bytes = rptViewer.ServerReport.Render("PDF", null, out mimeType,
                    out encoding, out filenameExtension, out streamids, out warnings);
                    //string typesfile = ".PDF";
                    string host = ConfigurationManager.AppSettings["SMTPHost"];

                    //System.Net.Mail.MailMessage mail = new System.Net.Mail.MailMessage();
                    //mail.Body = "Please find your report attached";

                    //mail.IsBodyHtml = true;
                    //var b = MyRowMail.Row.VendorId;
                    //audit log behavior
                    //new UserRepository().Retrieve();
                    //var c = GetRepresentativeId();
                    //var FinalConclu = Row.FinalConclusionDesc;
                    //if (FinalConclu == "Lulus")
                    //{

                    //}
                    var connection = SqlConnections.NewFor<UserRow>();
                    var p = new DynamicParameters();
                    p.Add("@ProcurementId", a.ToString());
                    List<UserRow> az = (List<UserRow>)connection.Query<UserRow>("SP_GetUserMail", p, commandType: CommandType.StoredProcedure);
                    //Lanjut besok
                    foreach (var test in az)
                    {
                        var emailModel = new DocProcurementModel();
                        emailModel.DisplayName = test.DisplayName;

                        //var emailSubject = Texts.Forms.Membership.ResetPassword.EmailSubject.ToString();
                        var emailBody = TemplateHelper.RenderTemplate(
                            MVC.Views.SSRS.F3_CreateRFQ.DocProcurement, emailModel);
                        System.Net.Mail.MailMessage mail = new System.Net.Mail.MailMessage();
                        mail.Body = emailBody;

                        mail.To.Add(new MailAddress(test.Email));
                        mail.Subject = "Report Penawaran Pengadaan [R2]";
                        mail.SubjectEncoding = Encoding.UTF8;
                        //mail.Priority = MailPriority.Normal;
                        //foreach (MailAttachment ma in attachments)
                        //{
                        Attachment att = new Attachment(new MemoryStream(bytes), filenameParams);

                        //var path = HostingEnvironment.MapPath("~/App_Data/upload/temporary/coba file/"+DateTime.Now.ToString("dd MM yyyy hhmmss"));
                        //System.IO.FileInfo file = new System.IO.FileInfo(path);
                        //file.Directory.Create(); // If the directory already exists, this method does nothing.

                        //File.WriteAllBytes(path, bytes);

                        mail.Attachments.Add(att);
                        //}
                        var client = new SmtpClient();

                        var smtp = new System.Net.Mail.SmtpClient();
                        var credential = (System.Net.NetworkCredential)smtp.Credentials;
                        string strhost = smtp.Host;
                        int port = smtp.Port;
                        string strUsername = credential.UserName;
                        string password = credential.Password;

                        if (client.DeliveryMethod == SmtpDeliveryMethod.SpecifiedPickupDirectory &&
                            string.IsNullOrEmpty(client.PickupDirectoryLocation))
                        {
                            var pickupPath = HostingEnvironment.MapPath("~/App_Data");
                            pickupPath = Path.Combine(pickupPath, "Mail");
                            Directory.CreateDirectory(pickupPath);
                            client.PickupDirectoryLocation = pickupPath;
                        }
                        client.Credentials = credential;
                        client.EnableSsl = true;
                        client.Host = strhost;
                        client.Port = port;

                        client.Send(mail);
                    }
                    //mail.To.Add(new MailAddress(az.FirstOrDefault().Email));

                    //mail.From = new MailAddress(fromAddress, fromDisplay, Encoding.UTF8);
                    /*mail.Subject = "Apapun dimanapun minumnya Air Putih";
                    mail.SubjectEncoding = Encoding.UTF8;
                    //mail.Priority = MailPriority.Normal;
                    //foreach (MailAttachment ma in attachments)
                    //{
                    Attachment att = new Attachment(new MemoryStream(bytes), filenameParams);

                    mail.Attachments.Add(att);
                    //}
                    var client = new SmtpClient();

                    var smtp = new System.Net.Mail.SmtpClient();
                    var credential = (System.Net.NetworkCredential)smtp.Credentials;
                    string strhost = smtp.Host;
                    int port = smtp.Port;
                    string strUsername = credential.UserName;
                    string password = credential.Password;

                    if (client.DeliveryMethod == SmtpDeliveryMethod.SpecifiedPickupDirectory &&
                        string.IsNullOrEmpty(client.PickupDirectoryLocation))
                    {
                        var pickupPath = HostingEnvironment.MapPath("~/App_Data");
                        pickupPath = Path.Combine(pickupPath, "Mail");
                        Directory.CreateDirectory(pickupPath);
                        client.PickupDirectoryLocation = pickupPath;
                    }
                    client.Credentials = credential;
                    client.EnableSsl = true;
                    client.Host = strhost;
                    client.Port = port;
                    client.Send(mail);*/
                }
            }


            protected override void AfterSave()
            {
                base.AfterSave();


                this.UnitOfWork.OnCommit += () =>
                {
                    GenerateProcParticipantItem(Row);
                    //SaveNote(UnitOfWork);
                    //EmailThread.StartEmailThread();
                    //SendNotification();
                };

                /*this.Connection.GetCurrentActualTransaction().Commit();
                Warning[] warnings;
                string[] streamids;
                byte[] bytes = null;
                string mimeType;
                string encoding;
                string filenameExtension;
                //System.Collections.Specialized.NameValueCollection urlAccessParameters = new System.Collections.Specialized.NameValueCollection();
               // urlAccessParameters.Add("rs:ProcurementId", "True");
                var a = Row.ProcurementId;
                ReportViewer rptViewer = ReportViewerControl.GetReportViewerControl("/SO_SCM_ONLINE/Pengadaan");
                //ReportParameterInfoCollection pInfo = rptViewer.ServerReport.GetParameters();
                ReportParameter param = new ReportParameter("ProcurementId",a.ToString());
                 param.Values.Add(a.ToString());
                //List<ReportParameter> param = new List<ReportParameter>();
                //param.Add(new ReportParameter("ProcurementId", a.ToString()));
                rptViewer.ServerReport.SetParameters(param);
                //rptViewer.ProcessingMode = ProcessingMode.Remote;

                //string filenameParams = Guid.NewGuid().ToString();
                string filenameParams = "Report Pengadaan - R2.PDF";

                
                if (rptViewer.ProcessingMode == ProcessingMode.Local)
                {
                    bytes = rptViewer.LocalReport.Render("PDF", null, out mimeType,
                     out encoding, out filenameExtension, out streamids, out warnings);
                }
                else
                {
                    //bytes = rptViewer.ServerReport.Render("pdf", null, urlAccessParameters, out streamids, out mimeType, out filenameExtension);
                    bytes = rptViewer.ServerReport.Render("PDF", null, out mimeType,
                    out encoding, out filenameExtension, out streamids, out warnings);
                    //string typesfile = ".PDF";
                    string host = ConfigurationManager.AppSettings["SMTPHost"];
                    System.Net.Mail.MailMessage mail = new System.Net.Mail.MailMessage();
                    mail.Body = "Please find your report attached";
                    //mail.IsBodyHtml = true;
                    mail.To.Add(new MailAddress("muhammadhafizyusuf554@gmail.com"));
                    //mail.From = new MailAddress(fromAddress, fromDisplay, Encoding.UTF8);
                    mail.Subject = "Apapun dimanapun minumnya Air Putih";
                    mail.SubjectEncoding = Encoding.UTF8;
                    //mail.Priority = MailPriority.Normal;
                    //foreach (MailAttachment ma in attachments)
                    //{
                    Attachment att = new Attachment(new MemoryStream(bytes), filenameParams);

                    mail.Attachments.Add(att);
                    //}
                    var client = new SmtpClient();

                    var smtp = new System.Net.Mail.SmtpClient();
                    var credential = (System.Net.NetworkCredential)smtp.Credentials;
                    string strhost = smtp.Host;
                    int port = smtp.Port;
                    string strUsername = credential.UserName;
                    string password = credential.Password;

                    if (client.DeliveryMethod == SmtpDeliveryMethod.SpecifiedPickupDirectory &&
                        string.IsNullOrEmpty(client.PickupDirectoryLocation))
                    {
                        var pickupPath = HostingEnvironment.MapPath("~/App_Data");
                        pickupPath = Path.Combine(pickupPath, "Mail");
                        Directory.CreateDirectory(pickupPath);
                        client.PickupDirectoryLocation = pickupPath;
                    }
                    client.Credentials = credential;
                    client.EnableSsl = true;
                    client.Host = strhost;
                    client.Port = port;
                    client.Send(mail);
                    //SmtpClient smtp = new SmtpClient();
                    //smtp.Credentials = new System.Net.NetworkCredential("hzheveo554@gmail.com", "sendaljepit5789");
                    //smtp.Host = host;
                    //smtp.Send(mail);
                }*/
            }

            private void GenerateProcParticipantItem(MyRow row)
            {
                var ppiService = new ProcParticipantItemRepository();
                //Remove previous item
                var listRequest = new ListRequest();
                var ppiCriteria = new Dictionary<string, object>();
                ppiCriteria.Add(ProcParticipantItemRow.Fields.ProcurementId.PropertyName, row.ProcurementId);
                listRequest.EqualityFilter = ppiCriteria;
                var oldProcParticipantItems = ppiService.List(this.Connection, listRequest);
                if (oldProcParticipantItems.Entities != null)
                {
                    oldProcParticipantItems.Entities.ForEach(item =>
                    {
                        var deleteRequest = new DeleteRequest();
                        deleteRequest.EntityId = item.ProcParticipantItemId;
                        ppiService.Delete(this.UnitOfWork, deleteRequest);
                    });
                }

                //add new item
                //F3 not load procparticipant, so we have to recall the data
                var procParticipantLR = new ListRequest();
                var ppCriteria = new Dictionary<string, object>();
                ppCriteria.Add(ProcParticipantRow.Fields.ProcurementId.PropertyName, row.ProcurementId);
                procParticipantLR.EqualityFilter = ppCriteria;
                var procPrticipants = new ProcParticipantRepository().List(this.Connection, procParticipantLR);

                //when RFQ newly created, it doesn't have ID, we need to re-load
                //the RFQ to get it's ID
                var rfqListRequest = new ListRequest();
                var rfqCriteria = new Dictionary<string, object>();
                rfqCriteria.Add(RfqItemRow.Fields.ProcurementId.PropertyName, row.ProcurementId);
                rfqListRequest.EqualityFilter = rfqCriteria;
                var rfqItems = new F13_RfqItemRepository().List(this.Connection, rfqListRequest);

                if (procPrticipants.Entities != null)
                {
                    procPrticipants.Entities.ForEach(ppItem =>
                    {
                        if (rfqItems.Entities != null)
                        {
                            rfqItems.Entities.ForEach(rfqItem =>
                            {
                                var ppi = new ProcParticipantItemRow();
                                var ppiRequest = new SaveRequest<ProcParticipantItemRow>();

                                ppi.ProcParticipantId = ppItem.ProcParticipantId;
                                ppi.ProcurementId = ppItem.ProcurementId;
                                ppi.RfqItemId = rfqItem.RfqItemId;

                                ppiRequest.Entity = ppi;
                                ppiService.Create(this.UnitOfWork, ppiRequest);
                            });
                        }
                    });
                }
            }
        }

        internal MyRow GetRFQ(IUnitOfWork uow, RfqServiceRequest request)
        {

            var client = new mi_osReadTableMCClient();
            client.ClientCredentials.UserName.UserName = ConfigurationManager.AppSettings["SAPUserName"];
            client.ClientCredentials.UserName.Password = ConfigurationManager.AppSettings["SAPPassword"]; ;

            var @params = new dt_ReadTableMC_Request();

            @params.CLIENT = ConfigurationManager.AppSettings["SAPClient"];
            @params.QUERY_TABLE = "EKKO";
            @params.DELIMITER = "|";
            @params.NO_DATA = "";
            @params.ROWSKIPS = "0";
            @params.ROWCOUNT = "1";
            //@params.OPTIONS = new dt_ReadTableMC_RequestOPTIONS[2];
            @params.OPTIONS = InitializeArrayHelper.InitializeArray<dt_ReadTableMC_RequestOPTIONS>(1);
            //@params.OPTIONS[0].TEXT = "";
            //@params.OPTIONS[0].TEXT = "EKORG EQ '" + ConfigurationManager.AppSettings["SAPOrgCode"] + "'";
            @params.OPTIONS[0].TEXT = "EBELN EQ '" + request.RfqNo + "'";
            @params.FIELDS = InitializeArrayHelper.InitializeArray<dt_ReadTableMC_RequestFIELDS>(17);
            ////new dt_ReadTableMC_RequestFIELDS[11];
            ////@params.FIELDS[0] = new dt_ReadTableMC_RequestFIELDS();
            @params.FIELDS[0].FIELDNAME = "AEDAT";
            @params.FIELDS[1].FIELDNAME = "ANGDT";
            @params.FIELDS[2].FIELDNAME = "BSART";
            @params.FIELDS[3].FIELDNAME = "EKGRP";
            @params.FIELDS[4].FIELDNAME = "GWLDT";
            @params.FIELDS[5].FIELDNAME = "IHREZ";
            @params.FIELDS[6].FIELDNAME = "PINCR";
            @params.FIELDS[7].FIELDNAME = "SPRAS";
            @params.FIELDS[8].FIELDNAME = "TELF1";
            @params.FIELDS[9].FIELDNAME = "UPINC";
            @params.FIELDS[10].FIELDNAME = "UNSEZ";
            @params.FIELDS[11].FIELDNAME = "VERKF";
            @params.FIELDS[12].FIELDNAME = "WAERS";
            @params.FIELDS[13].FIELDNAME = "ZZMMAUTHNAME";
            @params.FIELDS[14].FIELDNAME = "ZZMMAUTHPOS";
            @params.FIELDS[15].FIELDNAME = "ZZMMVLDEND";
            @params.FIELDS[16].FIELDNAME = "ZZMMVLDSTART";

            var result = client.mi_osReadTableMC(@params);

            //Bidder list not found
            if (result.DATA == null) throw new ValidationError("RFQ " + request.RfqNo + " not found!");

            //RFQ list exists
            var resultRow = result.DATA[0].WA.Split('|').Select(p => p.Trim()).ToList();

            //var x = ""Hello From End Point!""   
            ProcurementRow RFQHeader = new ProcurementRow();

            RFQHeader.OrderTypeId = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "BSART")];
            RFQHeader.RfqDate = DateTime.ParseExact(resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "AEDAT")], "yyyyMMdd", CultureInfo.InvariantCulture);
            RFQHeader.QuotationDeadline = DateTime.ParseExact(resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "ANGDT")], "yyyyMMdd", CultureInfo.InvariantCulture);
            RFQHeader.PurchGroup = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "EKGRP")];
            RFQHeader.AuthPersonName = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "ZZMMAUTHNAME")];
            RFQHeader.AuthPosition = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "ZZMMAUTHPOS")];
            RFQHeader.RfqTexts = GetRfqText(uow, request.RfqNo);
            RFQHeader.RfqItems = GetRfqItem(uow, request.RfqNo);
            RFQHeader.ProcPurchaseRequests = GetProcPr(uow, request.RfqNo);
            RFQHeader.PrNo = RFQHeader.ProcPurchaseRequests[0].PrNo;
            RFQHeader.CurrencyId = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "WAERS")];
            RFQHeader.YourReference = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "IHREZ")];
            RFQHeader.OurReference = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "UNSEZ")];
            RFQHeader.SalesPerson = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "VERKF")];
            RFQHeader.Telephone = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "TELF1")];
            RFQHeader.ValidityStart = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "ZZMMVLDSTART")].ToDateTimeSapNullSafe();
            RFQHeader.ValidityEnd = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "ZZMMVLDEND")].ToDateTimeSapNullSafe();
            RFQHeader.ItemInterval = decimal.Parse(resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "PINCR")]);
            RFQHeader.SubItemInterval = decimal.Parse(resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "UPINC")]);
            RFQHeader.Warranty = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "GWLDT")].ToDateTimeSapNullSafe();
            RFQHeader.Language = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "SPRAS")];


            //RFQHeader.SapBidderListCreatedDate = DateTime.ParseExact(resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "CRDATE")], "yyyyMMdd", CultureInfo.InvariantCulture);
            //RFQHeader.SapBidderListCreatedBy = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "CRUSER")];
            //RFQHeader.ProcurementTypeId = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "KNDPRO")];
            //RFQHeader.Classification = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "SUBIDUSAHA")];
            //RFQHeader.Qualification = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "KUALIFIKASI")];
            //RFQHeader.RequestedBy = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "DIUSULKAN")];
            //RFQHeader.RequestorPosition = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "JAB_DIUSULKAN")];
            //RFQHeader.ApprovedBy = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "JAB_DIUSULKAN")];
            //RFQHeader.ApproverPosition = resultRow[Array.FindIndex(result.FIELDS, row => row.FIELDNAME == "JAB_DISETUJUI")];
            //RFQHeader.ProcParticipant = GetRFQItem(connection, request.RFQNo);
            //RFQHeader.ProcurementMethodId = request.RFQNo.Substring(3, 2);

            return RFQHeader;
        }

        private List<ProcPrRow> GetProcPr(IUnitOfWork uow, string rfqNo)
        {
            var client = new mi_osReadTableMCClient();
            client.ClientCredentials.UserName.UserName = ConfigurationManager.AppSettings["SAPUserName"];
            client.ClientCredentials.UserName.Password = ConfigurationManager.AppSettings["SAPPassword"]; ;

            var @params = new dt_ReadTableMC_Request();

            @params.CLIENT = ConfigurationManager.AppSettings["SAPClient"];
            @params.QUERY_TABLE = "EKET";
            @params.DELIMITER = "|";
            @params.NO_DATA = "";
            @params.ROWSKIPS = "0";
            @params.ROWCOUNT = "1000000";
            @params.OPTIONS = new dt_ReadTableMC_RequestOPTIONS[1];
            @params.OPTIONS = InitializeArrayHelper.InitializeArray<dt_ReadTableMC_RequestOPTIONS>(1);
            //@params.OPTIONS[0].TEXT = "EKORG EQ '" + ConfigurationManager.AppSettings["SAPOrgCode"] + "'";
            //@params.OPTIONS[1].TEXT = "AND BIDLISTNO EQ '" + rfqNo + "'";
            @params.OPTIONS[0].TEXT = "EBELN EQ '" + rfqNo + "'";

            @params.FIELDS = InitializeArrayHelper.InitializeArray<dt_ReadTableMC_RequestFIELDS>(1);
            ////new dt_ReadTableMC_RequestFIELDS[11];
            ////@params.FIELDS[0] = new dt_ReadTableMC_RequestFIELDS();
            @params.FIELDS[0].FIELDNAME = "BANFN";


            var result = client.mi_osReadTableMC(@params);

            ////Bidder list not found
            //if (result.DATA == null) throw new ValidationError("Rfq " + collectiveNumber + " not found!");

            List<ProcPrRow> procPrList = new List<ProcPrRow>();

            if (result.DATA != null)
            {
                var rows = result.DATA.GroupBy(p => p.WA)
                    .Select(g => g.First())
                    .ToList();

                foreach (var row in rows)
                {
                    var resultRow = row.WA.Split('|').Select(p => p.Trim()).ToList();
                    var procPr = new ProcPrRow();

                    procPr.PrNo = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "BANFN")];
                    var prRepo = new PurchaseRequisitionRepository();
                    var prObj = uow.Connection.TryFirst<PurchaseRequisitionRow>(PurchaseRequisitionRow.Fields.PrNo == procPr.PrNo);
                    if (prObj == null)
                    {
                        //Register to PR List
                        var newPr = new PurchaseRequisitionRow { PrNo = procPr.PrNo };
                        prRepo.Create(uow, new SaveRequest<PurchaseRequisitionRow> { EntityId = procPr.PrNo, Entity = newPr });
                    }

                    procPr.InsertDate = DateTime.Now;
                    procPr.InsertBy = Serenity.Authorization.Username;

                    //purchaseRequest.Item = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "EBELP")];
                    //purchaseRequest.DeletionIndicator = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "LOEKZ")];
                    //purchaseRequest.RfqStatus = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "STATU")];
                    //purchaseRequest.LastChangedOn = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "AEDAT")].ToDateTimeSapNullSafe();
                    //purchaseRequest.ShortText = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "TXZ01")];
                    //purchaseRequest.Material = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "MATNR")];
                    //purchaseRequest.Plant = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "WERKS")];
                    //purchaseRequest.StorageLocation = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "LGORT")];
                    //purchaseRequest.ReqTrackingNumber = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "BEDNR")];
                    //purchaseRequest.MaterialGroup = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "MATKL")];
                    //purchaseRequest.PurchasingInfoRec = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "INFNR")];
                    //purchaseRequest.VendorMaterialNo = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "IDNLF")];
                    //purchaseRequest.TargetQuantity = decimal.Parse(resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "KTMNG")]);
                    //purchaseRequest.OrderQuantity = decimal.Parse(resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "MENGE")]);
                    //purchaseRequest.OrderUnit = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "MEINS")];
                    //purchaseRequest.OrderPriceUnit = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "BPRME")];
                    //purchaseRequest.QuantityConversion = decimal.Parse(resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "BPUMZ")]);
                    //purchaseRequest.EqualTo = decimal.Parse(resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "UMREZ")]);
                    //purchaseRequest.Denominator = decimal.Parse(resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "UMREN")]);
                    //purchaseRequest.NetOrderPrice = decimal.Parse(resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "NETPR")]);
                    //purchaseRequest.PriceUnit = decimal.Parse(resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "PEINH")]);
                    //purchaseRequest.NetOrderValue = decimal.Parse(resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "NETWR")]);
                    //purchaseRequest.GrossOrderValue = decimal.Parse(resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "BRTWR")]);
                    //purchaseRequest.QuotationDeadline = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "AGDAT")].ToDateTimeSapNullSafe();
                    //purchaseRequest.GrProcessingTime = decimal.Parse(resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "WEBAZ")]);
                    //purchaseRequest.TaxCode = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "MWSKZ")];
                    //purchaseRequest.BaseUnitOfMeasure = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "LMEIN")];
                    //purchaseRequest.ShippingInstr = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "EVERS")];
                    //purchaseRequest.OaTargetValue = decimal.Parse(resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "ZWERT")]);
                    //purchaseRequest.PriceDate = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "PRDAT")];
                    //purchaseRequest.PurchDocCategory = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "BSTYP")];
                    //purchaseRequest.EffectiveValue = decimal.Parse(resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "EFFWR")]);
                    //purchaseRequest.AffectsCommitments = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "XOBLR")];
                    //purchaseRequest.MaterialType = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "MTART")];
                    //purchaseRequest.SubitemCategory = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "UPTYP")];
                    //purchaseRequest.SubItems = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "UPVOR")];
                    //purchaseRequest.Subtotal1 = decimal.Parse(resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "KZWI1")]);
                    //purchaseRequest.Subtotal2 = decimal.Parse(resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "KZWI2")]);
                    //purchaseRequest.Subtotal3 = decimal.Parse(resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "KZWI3")]);
                    //purchaseRequest.Subtotal4 = decimal.Parse(resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "KZWI4")]);
                    //purchaseRequest.Subtotal5 = decimal.Parse(resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "KZWI5")]);



                    ////Only Get Vendor Id From SAP
                    //rfqItem.VendorId = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "LIFNR")];
                    //rfqItem.SequenceNo = Int32.Parse(resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "SEQNO")]);
                    ////take other vendor data from synchronized local database
                    //var vendorRequest = new RetrieveRequest();
                    //vendorRequest.EntityId = rfqItem.VendorId;
                    //var vendor = new VendorRepository().Retrieve(connection, vendorRequest);
                    //if (vendor != null)
                    //{
                    //    rfqItem.VendorName = vendor.Entity.Name;
                    //    rfqItem.VendorPenaltyCode = vendor.Entity.PenaltyCode;
                    //    rfqItem.Source = "SAP";
                    //}

                    procPrList.Add(procPr);
                }

            }


            return procPrList;
        }

        private List<RfqTextRow> GetRfqText(IUnitOfWork uow, string rFQNo)
        {
            //var client = new mi_os_rfqpoClient();
            //client.ClientCredentials.UserName.UserName = "osds";
            //client.ClientCredentials.UserName.Password = "pertamina";

            //var @params = new dt_rfqpo_request();

            //@params.RFQPO_DETAIL = new dt_rfqpo_requestRFQPO_DETAIL();
            //@params.RFQPO_DETAIL.EKORG = "2110";
            //@params.RFQPO_DETAIL.MANDT = "350";
            //@params.RFQPO_DETAIL.BUKRS = "2110";
            //@params.RFQPO_DETAIL.EBELN = new dt_rfqpo_requestRFQPO_DETAILEBELN[1];
            //@params.RFQPO_DETAIL.EBELN[0] = new dt_rfqpo_requestRFQPO_DETAILEBELN();
            //@params.RFQPO_DETAIL.EBELN[0].SIGN = "I";
            //@params.RFQPO_DETAIL.EBELN[0].OPTION = "EQ";
            //@params.RFQPO_DETAIL.EBELN[0].LOW = rFQNo;
            ////@params.RFQPO_DETAIL.EBELN[0].LOW = "6400000375";
            //@params.RFQPO_DETAIL.EBELN[0].HIGH = rFQNo;
            //var result = client.mi_os_rfqpo(@params);

            var client = new mi_os_rfqpoService();
            client.Credentials = new NetworkCredential(ConfigurationManager.AppSettings["SAPUserName"], ConfigurationManager.AppSettings["SAPPassword"]);
            var request = new dt_rfqpo_request();

            request.RFQPO_DETAIL = new dt_rfqpo_requestRFQPO_DETAIL();
            request.RFQPO_DETAIL.EKORG = ConfigurationManager.AppSettings["SAPOrgCode"];
            request.RFQPO_DETAIL.MANDT = ConfigurationManager.AppSettings["SAPClient"];
            request.RFQPO_DETAIL.BUKRS = ConfigurationManager.AppSettings["SAPOrgCode"];
            request.RFQPO_DETAIL.EBELN = new dt_rfqpo_requestRFQPO_DETAILEBELN[1];
            request.RFQPO_DETAIL.EBELN[0] = new dt_rfqpo_requestRFQPO_DETAILEBELN();
            request.RFQPO_DETAIL.EBELN[0].SIGN = "I";
            request.RFQPO_DETAIL.EBELN[0].OPTION = "EQ";
            request.RFQPO_DETAIL.EBELN[0].LOW = rFQNo;
            //request.RFQPO_DETAIL.EBELN[0].LOW = "6400000375";
            request.RFQPO_DETAIL.EBELN[0].HIGH = rFQNo;

            var response = client.mi_os_rfqpo(request);
            //Map attribute
            var rfqTextList = new List<RfqTextRow>();

            if (response.Length > 0)
            {
                var sapRfqText = response[0].HEADERTEXT;

                if (response[0].HEADERTEXT != null)
                {
                    var rfqTextMeaning = new PurchDocTextRefRepository().List(uow.Connection, new ListRequest()).Entities;

                    foreach (var sapRfqTextItem in sapRfqText)
                    {
                        var rfqTextItem = new RfqTextRow();
                        rfqTextItem.TextId = sapRfqTextItem.TEXT_ID;
                        rfqTextItem.TextForm = sapRfqTextItem.TEXT_FORM;
                        rfqTextItem.TextLine = sapRfqTextItem.TEXT_LINE;
                        rfqTextItem.TextMeaning = rfqTextMeaning.FirstOrDefault(x => x.TextId == sapRfqTextItem.TEXT_ID).Meaning;
                        rfqTextList.Add(rfqTextItem);
                    }
                }
            }

            return rfqTextList;
        }

        private List<RfqItemRow> GetRfqItem(IUnitOfWork uow, string rfqNo)
        {
            var client = new mi_osReadTableMCClient();
            client.ClientCredentials.UserName.UserName = ConfigurationManager.AppSettings["SAPUserName"];
            client.ClientCredentials.UserName.Password = ConfigurationManager.AppSettings["SAPPassword"]; ;

            var @params = new dt_ReadTableMC_Request();

            @params.CLIENT = ConfigurationManager.AppSettings["SAPClient"];
            @params.QUERY_TABLE = "EKPO";
            @params.DELIMITER = "|";
            @params.NO_DATA = "";
            @params.ROWSKIPS = "0";
            @params.ROWCOUNT = "1000";
            @params.OPTIONS = new dt_ReadTableMC_RequestOPTIONS[1];
            @params.OPTIONS = InitializeArrayHelper.InitializeArray<dt_ReadTableMC_RequestOPTIONS>(1);
            //@params.OPTIONS[0].TEXT = "EKORG EQ '" + ConfigurationManager.AppSettings["SAPOrgCode"] + "'";
            //@params.OPTIONS[1].TEXT = "AND BIDLISTNO EQ '" + rfqNo + "'";
            @params.OPTIONS[0].TEXT = "EBELN EQ '" + rfqNo + "'";

            @params.FIELDS = InitializeArrayHelper.InitializeArray<dt_ReadTableMC_RequestFIELDS>(42);
            ////new dt_ReadTableMC_RequestFIELDS[11];
            ////@params.FIELDS[0] = new dt_ReadTableMC_RequestFIELDS();
            @params.FIELDS[0].FIELDNAME = "EBELN";
            @params.FIELDS[1].FIELDNAME = "EBELP";
            @params.FIELDS[2].FIELDNAME = "LOEKZ";
            @params.FIELDS[3].FIELDNAME = "STATU";
            @params.FIELDS[4].FIELDNAME = "AEDAT";
            @params.FIELDS[5].FIELDNAME = "TXZ01";
            @params.FIELDS[6].FIELDNAME = "MATNR";
            @params.FIELDS[7].FIELDNAME = "WERKS";
            @params.FIELDS[8].FIELDNAME = "LGORT";
            @params.FIELDS[9].FIELDNAME = "BEDNR";
            @params.FIELDS[10].FIELDNAME = "MATKL";
            @params.FIELDS[11].FIELDNAME = "INFNR";
            @params.FIELDS[12].FIELDNAME = "IDNLF";
            @params.FIELDS[13].FIELDNAME = "KTMNG";
            @params.FIELDS[14].FIELDNAME = "MENGE";
            @params.FIELDS[15].FIELDNAME = "MEINS";
            @params.FIELDS[16].FIELDNAME = "BPRME";
            @params.FIELDS[17].FIELDNAME = "BPUMZ";
            @params.FIELDS[18].FIELDNAME = "UMREZ";
            @params.FIELDS[19].FIELDNAME = "UMREN";
            @params.FIELDS[20].FIELDNAME = "NETPR";
            @params.FIELDS[21].FIELDNAME = "PEINH";
            @params.FIELDS[22].FIELDNAME = "NETWR";
            @params.FIELDS[23].FIELDNAME = "BRTWR";
            @params.FIELDS[24].FIELDNAME = "AGDAT";
            @params.FIELDS[25].FIELDNAME = "WEBAZ";
            @params.FIELDS[26].FIELDNAME = "MWSKZ";
            @params.FIELDS[27].FIELDNAME = "LMEIN";
            @params.FIELDS[28].FIELDNAME = "EVERS";
            @params.FIELDS[29].FIELDNAME = "ZWERT";
            @params.FIELDS[30].FIELDNAME = "PRDAT";
            @params.FIELDS[31].FIELDNAME = "BSTYP";
            @params.FIELDS[32].FIELDNAME = "EFFWR";
            @params.FIELDS[33].FIELDNAME = "XOBLR";
            @params.FIELDS[34].FIELDNAME = "MTART";
            @params.FIELDS[35].FIELDNAME = "UPTYP";
            @params.FIELDS[36].FIELDNAME = "UPVOR";
            @params.FIELDS[37].FIELDNAME = "KZWI1";
            @params.FIELDS[38].FIELDNAME = "KZWI2";
            @params.FIELDS[39].FIELDNAME = "KZWI3";
            @params.FIELDS[40].FIELDNAME = "KZWI4";
            @params.FIELDS[41].FIELDNAME = "KZWI5";

            var result = client.mi_osReadTableMC(@params);

            ////Bidder list not found
            //if (result.DATA == null) throw new ValidationError("Bidder List " + collectiveNumber + " not found!");
            List<RfqItemRow> rfqItemList = new List<RfqItemRow>();

            if (result.DATA != null)
            {
                foreach (var row in result.DATA)
                {
                    var resultRow = row.WA.Split('|').Select(p => p.Trim()).ToList();
                    var rfqItem = new RfqItemRow();

                    rfqItem.PurchasingDocument = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "EBELN")];
                    rfqItem.Item = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "EBELP")];
                    rfqItem.DeletionIndicator = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "LOEKZ")];
                    rfqItem.RfqStatus = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "STATU")];
                    rfqItem.LastChangedOn = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "AEDAT")].ToDateTimeSapNullSafe();
                    rfqItem.ShortText = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "TXZ01")];
                    rfqItem.Material = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "MATNR")];
                    rfqItem.Plant = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "WERKS")];
                    rfqItem.StorageLocation = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "LGORT")];
                    rfqItem.ReqTrackingNumber = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "BEDNR")];
                    rfqItem.MaterialGroup = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "MATKL")];
                    rfqItem.PurchasingInfoRec = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "INFNR")];
                    rfqItem.VendorMaterialNo = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "IDNLF")];
                    rfqItem.TargetQuantity = decimal.Parse(resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "KTMNG")]);
                    /* edit by Iman Akbar Ramadhan - 05 Agustus 2019 - order quantity disamakan dengan target quantity dengan yang ada di SAP */
                    //rfqItem.OrderQuantity = decimal.Parse(resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "MENGE")]);
                    rfqItem.OrderQuantity = decimal.Parse(resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "KTMNG")]);
                    rfqItem.OrderUnit = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "MEINS")];
                    /* edit by Iman Akbar Ramadhan - 05 Agustus 2019 - order price dan Owner Estimate di kosongkan untuk keperluan tim OE */
                    //rfqItem.OrderPriceUnit = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "BPRME")];
                    //rfqItem.OrderPriceUnit = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "NETPR")];
                    //rfqItem.OwnerEstimate = decimal.Parse(rfqItem.OrderPriceUnit) * rfqItem.OrderQuantity;
                    rfqItem.QuantityConversion = decimal.Parse(resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "BPUMZ")]);
                    rfqItem.EqualTo = decimal.Parse(resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "UMREZ")]);
                    rfqItem.Denominator = decimal.Parse(resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "UMREN")]);
                    rfqItem.NetOrderPrice = decimal.Parse(resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "NETPR")]);
                    rfqItem.PriceUnit = decimal.Parse(resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "PEINH")]);
                    rfqItem.NetOrderValue = decimal.Parse(resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "NETWR")]);
                    rfqItem.GrossOrderValue = decimal.Parse(resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "BRTWR")]);
                    rfqItem.QuotationDeadline = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "AGDAT")].ToDateTimeSapNullSafe();
                    rfqItem.GrProcessingTime = decimal.Parse(resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "WEBAZ")]);
                    rfqItem.TaxCode = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "MWSKZ")];
                    rfqItem.BaseUnitOfMeasure = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "LMEIN")];
                    rfqItem.ShippingInstr = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "EVERS")];
                    rfqItem.OaTargetValue = decimal.Parse(resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "ZWERT")]);
                    rfqItem.PriceDate = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "PRDAT")];
                    rfqItem.PurchDocCategory = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "BSTYP")];
                    rfqItem.EffectiveValue = decimal.Parse(resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "EFFWR")]);
                    rfqItem.AffectsCommitments = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "XOBLR")];
                    rfqItem.MaterialType = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "MTART")];
                    rfqItem.SubitemCategory = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "UPTYP")];
                    rfqItem.SubItems = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "UPVOR")];
                    rfqItem.Subtotal1 = decimal.Parse(resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "KZWI1")]);
                    rfqItem.Subtotal2 = decimal.Parse(resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "KZWI2")]);
                    rfqItem.Subtotal3 = decimal.Parse(resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "KZWI3")]);
                    rfqItem.Subtotal4 = decimal.Parse(resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "KZWI4")]);
                    rfqItem.Subtotal5 = decimal.Parse(resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "KZWI5")]);



                    ////Only Get Vendor Id From SAP
                    //rfqItem.VendorId = resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "LIFNR")];
                    //rfqItem.SequenceNo = Int32.Parse(resultRow[Array.FindIndex(result.FIELDS, sapRow => sapRow.FIELDNAME == "SEQNO")]);
                    ////take other vendor data from synchronized local database
                    //var vendorRequest = new RetrieveRequest();
                    //vendorRequest.EntityId = rfqItem.VendorId;
                    //var vendor = new VendorRepository().Retrieve(connection, vendorRequest);
                    //if (vendor != null)
                    //{
                    //    rfqItem.VendorName = vendor.Entity.Name;
                    //    rfqItem.VendorPenaltyCode = vendor.Entity.PenaltyCode;
                    //    rfqItem.Source = "SAP";
                    //}

                    rfqItemList.Add(rfqItem);
                }

            }


            return rfqItemList;
        }

        private Int64? GetRepresentativeId(IDbConnection connection, string rfqNo)
        {
            var request = new ListRequest();
            var filter = new Dictionary<string, object>();
            filter.Add(ld.UserEmail.PropertyName, rfqNo);
            request.EqualityFilter = filter;
            var Representative = new VendorRepresentativeRepository().List(connection, request);

            return Representative.Entities.FirstOrDefault().UserId;
        }
        private Int64? GetProcurementId(IDbConnection connection, string rfqNo)
        {
            var request = new ListRequest();
            var filter = new Dictionary<string, object>();
            filter.Add(fld.PurchDocNum.PropertyName, rfqNo);
            request.EqualityFilter = filter;
            var procurement = new ProcurementRepository().List(connection, request);

            return procurement.Entities.FirstOrDefault().ProcurementId;
        }
    }
}