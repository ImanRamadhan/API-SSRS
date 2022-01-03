
namespace SCMONLINE.Procurement.Repositories
{
    using Microsoft.Reporting.WebForms;
    using SCMONLINE.Administration.Entities;
    using SCMONLINE.Administration.Repositories;
    using SCMONLINE.Modules._Ext.Utils;
    using SCMONLINE.Procurement.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Collections.Generic;
    using System.Configuration;
    using System.Data;
    using System.IO;
    using System.Linq;
    using System.Net.Mail;
    using System.Text;
    using System.Web.Hosting;
    using System.Web.UI.WebControls;
    using static MVC.Views.SSRS;
    using MyRow = Entities.ProcurementRow;

    public class F9_PriceEvaluationRepository
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

        public void SaveNote(Int64 id,Int64 contractType, IUnitOfWork uow)
        {
            Warning[] warnings;
            string[] streamids;
            byte[] bytes = null;
            string mimeType;
            string encoding;
            string filenameExtension;

            var a = id;
            var connection = SqlConnections.NewFor<F8_QualificationRow>();
            var p = new DynamicParameters();
            var request = new ListRequest();
            var procParticipantparam = new Dictionary<string, object>();
            procParticipantparam.Add("ProcurementId", a.ToString());
            request.EqualityFilter = procParticipantparam;
            //request.Criteria
            //p.Add("@ProcurementId", a.ToString());
            var participantList = new ProcParticipantRepository().List(connection, request);
            //foreach (var ProcPartiId in participantList.Entities)
            //{

                //var procc = ProcPartiId.VendorId;
                p.Add("@ProcurementId", a.ToString());
            //p.Add("@Vendorid", procc.ToString());
            //contract type 1 = Lumpsum, 2 = Itemized

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

            if (contractType == 1)
            {
                List<F8_QualificationRow> az = (List<F8_QualificationRow>)connection.Query<F8_QualificationRow>("SP_EVALUASI_PENAWARAN_HARGA_ITEMIZED", p, commandType: CommandType.StoredProcedure);
                foreach (var test in az)
                {
                    var blacoba = test.NAME;
                    if (test.NAME == "" || test.NAME == null)
                    {
                        //ReportViewer rptViewer2 = ReportViewerControl.GetReportViewerControl("/SO_SCM_ONLINE/NPH_F9");
                        //ReportParameter[] param2 = new ReportParameter[1];
                        //param2[0] = new Microsoft.Reporting.WebForms.ReportParameter("ProcurementId", a.ToString());
                        //param2[1] = new Microsoft.Reporting.WebForms.ReportParameter("Vendorid", procc.ToString());
                        //rptViewer2.ServerReport.SetParameters(param2);
                        //string filenameParams2 = "Report NPH.PDF";
                        //rptViewer2.ProcessingMode = ProcessingMode.Remote;
                        //bytes = rptViewer2.ServerReport.Render("PDF", null, out mimeType,
                        //out encoding, out filenameExtension, out streamids, out warnings);
                        var emailModel2 = new F9PriceModel();
                        var emailComplaint = connection.TrySingle<SettingRow>(new Criteria(SettingRow.Fields.Name.PropertyName) == "pic_email");
                        emailModel2.VendorWinner = emailComplaint.Value;
                        emailModel2.Title = "Dari hasil proses pengadaan pekerjaan tersebut di atas Pengadaan " + test.title + " mengusulkan gagal lelang, karena tidak ada peserta yang lulus proses evaluasi administrasi dan akan dilakukan tender ulang";
                        var emailBody2 = TemplateHelper.RenderTemplate(
                            MVC.Views.SSRS.F9_PriceEvaluation.F9_Price, emailModel2);

                        SSRS.MailServicesPTM.Service1Client mailservice = new SSRS.MailServicesPTM.Service1Client();
                        SSRS.MailServicesPTM.CommonResponseMessage messageResult = new SSRS.MailServicesPTM.CommonResponseMessage();
                        var mailuser = ConfigurationManager.AppSettings["MailUser"].ToString();
                        var mailPassword = ConfigurationManager.AppSettings["MailPassword"].ToString();

                        try
                        {
                            messageResult = mailservice.SendMessage(
                                                                        mailuser,
                                                                        mailPassword,
                                                                        test.Email,
                                                                        null,
                                                                        null,
                                                                        "Hasil Evaluasi Penawaran Harga ",
                                                                        emailBody2
                                                                        );
                        }
                        catch (Exception ex)
                        {

                        }

                        //var Queued2 = new QueuedEmailRow();
                        //Queued2.PriorityId = 1;
                        //Queued2.From = fromAdmin;
                        //Queued2.FromName = fromNameAdmin;
                        //Queued2.To = test.Email;
                        //Queued2.ToName = "User ";
                        //Queued2.Subject = "Hasil Evaluasi Penawaran Harga ";
                        //Queued2.Body = emailBody2;
                        //Queued2.CreatedOnUtc = DateTime.Now;
                        ////Queued.CreatedOnUtc = DateTime.Now;
                        ////Queued.SentTries = 1;
                        //Queued2.EmailAccountId = 1;

                        //var saveRequest2 = new SaveRequest<QueuedEmailRow> { Entity = Queued2 };
                        //new QueuedEmailRepository().Create(uow, saveRequest2);
                        //EmailThread.StartEmailThread();
                    }
                    else if (test.NAME != "Usul Tunjuk Pemenang")
                    {
                        if (test.NAME == "Negosiasi Langsung")
                        {
                            var emailModel = new F9PriceModel();
                            var emailComplaint = connection.TrySingle<SettingRow>(new Criteria(SettingRow.Fields.Name.PropertyName) == "pic_email");
                            emailModel.VendorWinner = emailComplaint.Value;
                            emailModel.Title = "Panitia Pengadaan Internal telah melaksanakan Evaluasi Harga Penawaran dengan hasil Anda perlu melakukan Negosiasi Langsung";
                            var emailBody = TemplateHelper.RenderTemplate(
                                MVC.Views.SSRS.F9_PriceEvaluation.F9_Price, emailModel);

                            SSRS.MailServicesPTM.Service1Client mailservice = new SSRS.MailServicesPTM.Service1Client();
                            SSRS.MailServicesPTM.CommonResponseMessage messageResult = new SSRS.MailServicesPTM.CommonResponseMessage();
                            var mailuser = ConfigurationManager.AppSettings["MailUser"].ToString();
                            var mailPassword = ConfigurationManager.AppSettings["MailPassword"].ToString();

                            try
                            {
                                messageResult = mailservice.SendMessage(
                                                                            mailuser,
                                                                            mailPassword,
                                                                            test.Email,
                                                                            null,
                                                                            null,
                                                                            "Hasil Evaluasi Penawaran Harga ",
                                                                            emailBody
                                                                            );
                            }
                            catch (Exception ex)
                            {

                            }
                            //System.Net.Mail.MailMessage mail = new System.Net.Mail.MailMessage();
                            //var Queued = new QueuedEmailRow();
                            //Queued.PriorityId = 1;
                            //Queued.From = fromAdmin;
                            //Queued.FromName = fromNameAdmin;
                            //Queued.To = test.Email;
                            //Queued.ToName = "User ";
                            //Queued.Subject = "Hasil Evaluasi Penawaran Harga ";
                            //Queued.Body = emailBody;
                            //Queued.CreatedOnUtc = DateTime.Now;
                            //Queued.EmailAccountId = 1;
                            //var saveRequest = new SaveRequest<QueuedEmailRow> { Entity = Queued };
                            //new QueuedEmailRepository().Create(uow, saveRequest);
                        }
                        else if (test.NAME == "Negosiasi Tertulis")
                        {
                            var emailModel = new F9PriceModel();
                            var emailComplaint = connection.TrySingle<SettingRow>(new Criteria(SettingRow.Fields.Name.PropertyName) == "pic_email");
                            emailModel.VendorWinner = emailComplaint.Value;
                            emailModel.Title = "Panitia Pengadaan Internal telah melaksanakan Evaluasi Harga Penawaran dengan hasil Anda perlu melakukan Negosiasi Tertulis";
                            var emailBody = TemplateHelper.RenderTemplate(
                                MVC.Views.SSRS.F9_PriceEvaluation.F9_Price, emailModel);

                            SSRS.MailServicesPTM.Service1Client mailservice = new SSRS.MailServicesPTM.Service1Client();
                            SSRS.MailServicesPTM.CommonResponseMessage messageResult = new SSRS.MailServicesPTM.CommonResponseMessage();
                            var mailuser = ConfigurationManager.AppSettings["MailUser"].ToString();
                            var mailPassword = ConfigurationManager.AppSettings["MailPassword"].ToString();

                            try
                            {
                                messageResult = mailservice.SendMessage(
                                                                            mailuser,
                                                                            mailPassword,
                                                                            test.Email,
                                                                            null,
                                                                            null,
                                                                            "Hasil Evaluasi Penawaran Harga ",
                                                                            emailBody
                                                                            );
                            }
                            catch (Exception ex)
                            {

                            }

                            //System.Net.Mail.MailMessage mail = new System.Net.Mail.MailMessage();
                            //var Queued = new QueuedEmailRow();
                            //Queued.PriorityId = 1;
                            //Queued.From = fromAdmin;
                            //Queued.FromName = fromNameAdmin;
                            //Queued.To = test.Email;
                            //Queued.ToName = "User ";
                            //Queued.Subject = "Hasil Evaluasi Penawaran Harga ";
                            //Queued.Body = emailBody;
                            //Queued.CreatedOnUtc = DateTime.Now;
                            //Queued.EmailAccountId = 1;
                            //var saveRequest = new SaveRequest<QueuedEmailRow> { Entity = Queued };
                            //new QueuedEmailRepository().Create(uow, saveRequest);
                        }
                    }
                }
                //}
                //EmailThread.StartEmailThread();
            }
            //Contract type 2 = Itemized
            else if (contractType == 2)
            {
                List<F8_QualificationRow> az = (List<F8_QualificationRow>)connection.Query<F8_QualificationRow>("SP_EVALUASI_PENAWARAN_HARGA_LUMPSUM", p, commandType: CommandType.StoredProcedure);
                foreach (var test in az)
                {
                    var blacoba = test.NAME;
                    if (test.NAME == "" || test.NAME == null)
                    {
                        var emailModel2 = new F9PriceModel();
                        var emailComplaint = connection.TrySingle<SettingRow>(new Criteria(SettingRow.Fields.Name.PropertyName) == "pic_email");
                        emailModel2.VendorWinner = emailComplaint.Value;
                        emailModel2.Title = "Dari hasil proses pengadaan pekerjaan tersebut di atas Pengadaan " + test.title + " mengusulkan gagal lelang, karena tidak ada peserta yang lulus proses evaluasi administrasi dan akan dilakukan tender ulang";
                        var emailBody2 = TemplateHelper.RenderTemplate(
                            MVC.Views.SSRS.F9_PriceEvaluation.F9_Price, emailModel2);

                        SSRS.MailServicesPTM.Service1Client mailservice = new SSRS.MailServicesPTM.Service1Client();
                        SSRS.MailServicesPTM.CommonResponseMessage messageResult = new SSRS.MailServicesPTM.CommonResponseMessage();
                        var mailuser = ConfigurationManager.AppSettings["MailUser"].ToString();
                        var mailPassword = ConfigurationManager.AppSettings["MailPassword"].ToString();

                        try
                        {
                            messageResult = mailservice.SendMessage(
                                                                        mailuser,
                                                                        mailPassword,
                                                                        test.Email,
                                                                        null,
                                                                        null,
                                                                        "Hasil Evaluasi Penawaran Harga ",
                                                                        emailBody2
                                                                        );
                        }
                        catch (Exception ex)
                        {

                        }

                        //var Queued2 = new QueuedEmailRow();
                        //Queued2.PriorityId = 1;
                        //Queued2.From = fromAdmin;
                        //Queued2.FromName = fromNameAdmin;
                        //Queued2.To = test.Email;
                        //Queued2.ToName = "User ";
                        //Queued2.Subject = "Hasil Evaluasi Penawaran Harga ";
                        //Queued2.Body = emailBody2;
                        //Queued2.CreatedOnUtc = DateTime.Now;
                        //Queued2.EmailAccountId = 1;

                        //var saveRequest2 = new SaveRequest<QueuedEmailRow> { Entity = Queued2 };
                        //new QueuedEmailRepository().Create(uow, saveRequest2);
                    }
                    else if (test.NAME != "Usul Tunjuk Pemenang")
                    {
                        if (test.NAME == "Negosiasi Langsung")
                        {
                            var emailModel = new F9PriceModel();
                            var emailComplaint = connection.TrySingle<SettingRow>(new Criteria(SettingRow.Fields.Name.PropertyName) == "pic_email");
                            emailModel.VendorWinner = emailComplaint.Value;
                            emailModel.Title = "Panitia Pengadaan Internal telah melaksanakan Evaluasi Harga Penawaran dengan hasil Anda perlu melakukan Negosiasi Langsung";
                            var emailBody = TemplateHelper.RenderTemplate(
                                MVC.Views.SSRS.F9_PriceEvaluation.F9_Price, emailModel);

                            SSRS.MailServicesPTM.Service1Client mailservice = new SSRS.MailServicesPTM.Service1Client();
                            SSRS.MailServicesPTM.CommonResponseMessage messageResult = new SSRS.MailServicesPTM.CommonResponseMessage();
                            var mailuser = ConfigurationManager.AppSettings["MailUser"].ToString();
                            var mailPassword = ConfigurationManager.AppSettings["MailPassword"].ToString();

                            try
                            {
                                messageResult = mailservice.SendMessage(
                                                                            mailuser,
                                                                            mailPassword,
                                                                            test.Email,
                                                                            null,
                                                                            null,
                                                                            "Hasil Evaluasi Penawaran Harga ",
                                                                            emailBody
                                                                            );
                            }
                            catch (Exception ex)
                            {

                            }

                            //System.Net.Mail.MailMessage mail = new System.Net.Mail.MailMessage();
                            //var Queued = new QueuedEmailRow();
                            //Queued.PriorityId = 1;
                            //Queued.From = fromAdmin;
                            //Queued.FromName = fromNameAdmin;
                            //Queued.To = test.Email;
                            //Queued.ToName = "User ";
                            //Queued.Subject = "Hasil Evaluasi Penawaran Harga ";
                            //Queued.Body = emailBody;
                            //Queued.CreatedOnUtc = DateTime.Now;
                            //Queued.EmailAccountId = 1;
                            //var saveRequest = new SaveRequest<QueuedEmailRow> { Entity = Queued };
                            //new QueuedEmailRepository().Create(uow, saveRequest);
                        }
                        else if (test.NAME == "Negosiasi Tertulis")
                        {
                            var emailModel = new F9PriceModel();
                            var emailComplaint = connection.TrySingle<SettingRow>(new Criteria(SettingRow.Fields.Name.PropertyName) == "pic_email");
                            emailModel.VendorWinner = emailComplaint.Value;
                            emailModel.Title = "Panitia Pengadaan Internal telah melaksanakan Evaluasi Harga Penawaran dengan hasil Anda perlu melakukan Negosiasi Tertulis";
                            var emailBody = TemplateHelper.RenderTemplate(
                                MVC.Views.SSRS.F9_PriceEvaluation.F9_Price, emailModel);

                            SSRS.MailServicesPTM.Service1Client mailservice = new SSRS.MailServicesPTM.Service1Client();
                            SSRS.MailServicesPTM.CommonResponseMessage messageResult = new SSRS.MailServicesPTM.CommonResponseMessage();
                            var mailuser = ConfigurationManager.AppSettings["MailUser"].ToString();
                            var mailPassword = ConfigurationManager.AppSettings["MailPassword"].ToString();

                            try
                            {
                                messageResult = mailservice.SendMessage(
                                                                            mailuser,
                                                                            mailPassword,
                                                                            test.Email,
                                                                            null,
                                                                            null,
                                                                            "Hasil Evaluasi Penawaran Harga ",
                                                                            emailBody
                                                                            );
                            }
                            catch (Exception ex)
                            {

                            }

                            //System.Net.Mail.MailMessage mail = new System.Net.Mail.MailMessage();
                            //var Queued = new QueuedEmailRow();
                            //Queued.PriorityId = 1;
                            //Queued.From = fromAdmin;
                            //Queued.FromName = fromNameAdmin;
                            //Queued.To = test.Email;
                            //Queued.ToName = "User ";
                            //Queued.Subject = "Hasil Evaluasi Penawaran Harga ";
                            //Queued.Body = emailBody;
                            //Queued.CreatedOnUtc = DateTime.Now;
                            //Queued.EmailAccountId = 1;
                            //var saveRequest = new SaveRequest<QueuedEmailRow> { Entity = Queued };
                            //new QueuedEmailRepository().Create(uow, saveRequest);
                        }
                    }
                }
                //}
                //EmailThread.StartEmailThread();
            }
                
        }
        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            private void SendNotification()
            {
                Warning[] warnings;
                string[] streamids;
                byte[] bytes = null;
                string mimeType;
                string encoding;
                string filenameExtension;

                var a = Row.ProcurementId;


                var connection = SqlConnections.NewFor<F8_QualificationRow>();
                var p = new DynamicParameters();
                var request = new ListRequest();

                var procParticipantparam = new Dictionary<string, object>();
                procParticipantparam.Add("ProcurementId", a.ToString());
                request.EqualityFilter = procParticipantparam;
                //request.Criteria
                //p.Add("@ProcurementId", a.ToString());
                var participantList = new ProcParticipantRepository().List(connection, request);


                foreach (var ProcPartiId in participantList.Entities)
                {
                    var procc = ProcPartiId.VendorId;
                    p.Add("@ProcurementId", a.ToString());
                    p.Add("@Vendorid", procc.ToString());
                    //Ga di pake Function-nya
                    List<F8_QualificationRow> az = (List<F8_QualificationRow>)connection.Query<F8_QualificationRow>("SP_EVALUASI_PENAWARAN_HARGA", p, commandType: CommandType.StoredProcedure);
                    foreach (var test in az)
                    {
                        ReportViewer rptViewer = ReportViewerControl.GetReportViewerControl("/SO_SCM_ONLINE/Evaluasi_Penawaran_Harga_Negosiasi");
                        ReportParameter[] param = new ReportParameter[2];
                        param[0] = new Microsoft.Reporting.WebForms.ReportParameter("ProcurementId", a.ToString());
                        param[1] = new Microsoft.Reporting.WebForms.ReportParameter("Vendorid", procc.ToString());
                        //param.Values.Add(a.ToString());
                        rptViewer.ServerReport.SetParameters(param);
                        string namefile = "Report Evaluasi_Penawaran_Harga.PDF";
                        rptViewer.ProcessingMode = ProcessingMode.Remote;
                        bytes = rptViewer.ServerReport.Render("PDF", null, out mimeType,
                        out encoding, out filenameExtension, out streamids, out warnings);
                        string host = ConfigurationManager.AppSettings["SMTPHost"];

                        //var connection = SqlConnections.NewFor<UserRow>();
                        //var p = new DynamicParameters();
                        //p.Add("@ProcurementId", a.ToString());
                        //List<UserRow> az = (List<UserRow>)connection.Query<UserRow>("SP_EVALUASI_PENAWARAN_HARGA", p, commandType: CommandType.StoredProcedure);
                        //foreach (var test in az)
                        //{
                        var emailModel = new F9PriceModel();
                        emailModel.Title = test.CommitteeTypeDescription;

                        //var emailSubject = Texts.Forms.Membership.ResetPassword.EmailSubject.ToString();
                        var emailBody = TemplateHelper.RenderTemplate(
                            MVC.Views.SSRS.F9_PriceEvaluation.F9_Price, emailModel);

                        SSRS.MailServicesPTM.Service1Client mailservice = new SSRS.MailServicesPTM.Service1Client();
                        SSRS.MailServicesPTM.CommonAttachmentDoc att = new SSRS.MailServicesPTM.CommonAttachmentDoc();

                        att.filename = namefile;
                        att.filebyte = bytes;

                        var atts = new List<SSRS.MailServicesPTM.CommonAttachmentDoc>();
                        atts.Add(att);

                        SSRS.MailServicesPTM.CommonResponseMessage messageResult = new SSRS.MailServicesPTM.CommonResponseMessage();
                        var mailuser = ConfigurationManager.AppSettings["MailUser"].ToString();
                        var mailPassword = ConfigurationManager.AppSettings["MailPassword"].ToString();

                        try
                        {
                            messageResult = mailservice.SendMessageAtt(
                                                                        mailuser,
                                                                        mailPassword,
                                                                        test.Email,
                                                                        null,
                                                                        null,
                                                                        "Hasil Evaluasi Penawaran Harga ",
                                                                        emailBody,
                                                                        atts.ToArray()
                                                                        );
                        }
                        catch (Exception ex)
                        {

                        }
                        //System.Net.Mail.MailMessage mail = new System.Net.Mail.MailMessage();
                        //mail.Body = emailBody;

                        //mail.To.Add(new MailAddress(test.Email));
                        //mail.Subject = "Report Evaluasi Penawaran Harga";
                        //mail.SubjectEncoding = Encoding.UTF8;
                        //Attachment att = new Attachment(new MemoryStream(bytes), filenameParams);

                        //mail.Attachments.Add(att);
                        //var client = new SmtpClient();

                        //var smtp = new System.Net.Mail.SmtpClient();
                        //var credential = (System.Net.NetworkCredential)smtp.Credentials;
                        //string strhost = smtp.Host;
                        //int port = smtp.Port;
                        //string strUsername = credential.UserName;
                        //string password = credential.Password;

                        //if (client.DeliveryMethod == SmtpDeliveryMethod.SpecifiedPickupDirectory &&
                        //    string.IsNullOrEmpty(client.PickupDirectoryLocation))
                        //{
                        //    var pickupPath = HostingEnvironment.MapPath("~/App_Data");
                        //    pickupPath = Path.Combine(pickupPath, "Mail");
                        //    Directory.CreateDirectory(pickupPath);
                        //    client.PickupDirectoryLocation = pickupPath;
                        //}
                        //client.Credentials = credential;
                        //client.EnableSsl = true;
                        //client.Host = strhost;
                        //client.Port = port;
                        //client.Send(mail);
                    }
                    }
                //}
            }

            protected override void AfterSave()
            {
                base.AfterSave();

                this.UnitOfWork.OnCommit += () => {
                    //SendNotification();
                };
            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow>
        {
            protected override void OnReturn()
            {
                base.OnReturn();

                var connection = SqlConnections.NewFor<F8_QualificationRow>();
                var p = new DynamicParameters();
                var a = Row.ProcurementId;
                var request = new ListRequest();
                var procParticipantparam = new Dictionary<string, object>();
                procParticipantparam.Add("ProcurementId", a.ToString());
                procParticipantparam.Add("EvaluationConclusionId", 1);
                request.EqualityFilter = procParticipantparam;
                var participantList = new ProcParticipantRepository().List(connection, request);
                
                var excludeParticipantId = participantList.Entities.ToArray();
                //select hasil dari list variabel participantList dan diubah ke array
                var excludeParticipantIdArray = participantList.Entities.Select(x => x.ProcParticipantId).ToArray();
                //Hilangkan Row di GridMemory dengan kondisi jika vendor tidak mengisi BidPrice dan Status Evaluation = No Qoute
                Row.ProcParticipantItems = Row.ProcParticipantItems.Where(x => x.BidPrice > 0 || !excludeParticipantIdArray.Contains(x.ProcParticipantId)).ToList();



                var procurementType = new List<string>();
                if (Authorization.HasPermission(ProcurementPermission.DataService))
                {
                    procurementType.Add("S");
                }
                if (Authorization.HasPermission(ProcurementPermission.DataMaterial))
                {
                    procurementType.Add("M");
                }
                //var itemprocparticipant = new List<string>();
                //itemprocparticipant = fld.ProcParticipantItems.
                if (Row.F9SubmitDate != null || Row.Status == "F9") { }
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
        private class MyListHandler : ListRequestHandler<MyRow>
        {
            protected override void ApplyFilters(SqlQuery query)
            {
                base.ApplyFilters(query);
                //query.Where(new Criteria(fld.ProcParticipantItems) > 0);
                var procurementType = new List<string>();
                if (Authorization.HasPermission(ProcurementPermission.DataService))
                {
                    procurementType.Add("S");
                }
                if (Authorization.HasPermission(ProcurementPermission.DataMaterial))
                {
                    procurementType.Add("M");
                }


                
                query.Where(new Criteria(fld.F9SubmitDate).IsNotNull() || new Criteria(fld.Status) == "F9");
                //query.Where(new Criteria(ProcParticipantItemRow.Fields.BidPrice).IsNotNull());
                //query.Where(new Criteria(fld.BidPrice).IsNotNull());
                //query.Where(new Criteria(fld.ProcParticipantItems).IsNotNull());
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
    }
}