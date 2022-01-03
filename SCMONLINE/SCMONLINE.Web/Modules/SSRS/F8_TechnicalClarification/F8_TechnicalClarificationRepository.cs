
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
    using MyRow = Entities.ProcurementRow;

    public class F8_TechnicalClarificationRepository
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

        public void SaveNote(Int64 id, IUnitOfWork uow)
        {
            Warning[] warnings;
            string[] streamids;
            byte[] bytes = null;
            string mimeType;
            string encoding;
            string filenameExtension;

            //var idProc = Row.ProcurementId;
            var idProc = id;
            var connection = SqlConnections.NewFor<F8_QualificationRow>();
            var parameter = new DynamicParameters();
            var request = new ListRequest();
            
            var procParticipantparam = new Dictionary<string, object>();
            procParticipantparam.Add("ProcurementId", idProc.ToString());
            request.EqualityFilter = procParticipantparam;
            var participantList = new ProcParticipantRepository().List(connection, request);
            
            foreach (var ProcPartiId in participantList.Entities)
            {
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

                var procc = ProcPartiId.VendorId;
                parameter.Add("@ProcurementId", idProc.ToString());
                parameter.Add("@Vendorid", procc.ToString());
                List<F8_QualificationRow> ListQualification = (List<F8_QualificationRow>)connection.Query<F8_QualificationRow>("SP_BERITA_ACARA_KLARIFIKASI", parameter, commandType: CommandType.StoredProcedure);
                foreach (var qualificationItem in ListQualification)
                {
                    ReportViewer rptViewer = ReportViewerControl.GetReportViewerControl("/SO_SCM_ONLINE/Berita_Acara_Klarifikasi");
                    ReportParameter[] param = new ReportParameter[2];
                    param[0] = new Microsoft.Reporting.WebForms.ReportParameter("ProcurementId", idProc.ToString());
                    param[1] = new Microsoft.Reporting.WebForms.ReportParameter("Vendorid", procc.ToString());
                    //param.Values.Add(a.ToString());
                    rptViewer.ServerReport.SetParameters(param);
                    string filenameParams = "Report Berita_Acara_Klarifikasi.PDF";
                    rptViewer.ProcessingMode = ProcessingMode.Remote;

                    bytes = rptViewer.ServerReport.Render("PDF", null, out mimeType,
                    out encoding, out filenameExtension, out streamids, out warnings);

                    string host = ConfigurationManager.AppSettings["SMTPHost"];
                    var emailModel = new DocProcurementModel();
                    var emailComplaint = connection.TrySingle<SettingRow>(new Criteria(SettingRow.Fields.Name.PropertyName) == "pic_email");
                    emailModel.VendorWinner = emailComplaint.Value;
                    emailModel.DisplayName = qualificationItem.CommitteeTypeDescription;
                    //var emailSubject = Texts.Forms.Membership.ResetPassword.EmailSubject.ToString();
                    var emailBody = TemplateHelper.RenderTemplate(MVC.Views.SSRS.F8_TechnicalClarification.F8_Clarification, new F8ClarificationModel());

                    var nameFileMandatory = filenameParams + DateTime.Now.ToString("MMddyyyyHHmmss") + ".PDF";
                    var ms = new MemoryStream(bytes);

                    var processor = new UploadProcessor
                    {
                        ThumbWidth = 128,
                        ThumbHeight = 96,
                    };

                    //var path = "/temporary/";
                    var namefile = "Report Berita_Acara_Klarifikasi" + DateTime.Now.ToString("yyyyMMddHHmmss") + ".PDF";
                    
                    //var filePath = path + namefile;
                    //var fullFilePath = HostingEnvironment.MapPath("~/App_Data/upload" + filePath);
                    //ms.Seek(0, SeekOrigin.Begin);
                    //Directory.CreateDirectory(filePath);

                    //using (FileStream fs = new FileStream(fullFilePath, FileMode.Create))
                    //{
                    //    var FileSize = fs.Length;
                    //    ms.CopyTo(fs);
                    //}

                    var vendor = connection.TrySingle<VendorRow>(new Criteria(VendorRow.Fields.VendorId.PropertyName) == qualificationItem.Vendorid);

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
                                                                    qualificationItem.Email,
                                                                    null,
                                                                    null,
                                                                    "Report Berita Acara Klarifikasi",
                                                                    emailBody,
                                                                    atts.ToArray()
                                                                    );
                    }
                    catch (Exception ex)
                    {

                    }

                    //var Queued = new QueuedEmailRow();
                    //Queued.PriorityId = 1;
                    //Queued.From = fromAdmin;
                    //Queued.FromName = fromNameAdmin;
                    //Queued.To = qualificationItem.Email;
                    //Queued.ToName = vendor.Name;
                    //Queued.Subject = "Report Berita Acara Klarifikasi";
                    //Queued.AttachmentFileName = namefile;
                    //Queued.AttachmentFilePath = filePath;
                    //Queued.Body = emailBody;
                    //Queued.CreatedOnUtc = DateTime.Now;
                    ////Queued.CreatedOnUtc = DateTime.Now;
                    ////Queued.SentTries = 1;
                    //Queued.EmailAccountId = 1;

                    //var saveRequest = new SaveRequest<QueuedEmailRow> { Entity = Queued };
                    //new QueuedEmailRepository().Create(uow, saveRequest);

                }
            }
            //EmailThread.StartEmailThread();
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



                query.Where(new Criteria(fld.F8SubmitDate).IsNotNull() || new Criteria(fld.Status) == "F8");

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

                    var procParticipantparam  = new Dictionary<string, object>();
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
                        //Ga dipake sp nya
                        List<F8_QualificationRow> az = (List<F8_QualificationRow>)connection.Query<F8_QualificationRow>("SP_EVALUASI_PENAWARAN_HARGA", p, commandType: CommandType.StoredProcedure);
                        foreach (var test in az)
                        {
                            ReportViewer rptViewer = ReportViewerControl.GetReportViewerControl("/SO_SCM_ONLINE/Berita_Acara_Klarifikasi");
                            ReportParameter[] param = new ReportParameter[2];
                            param[0] = new Microsoft.Reporting.WebForms.ReportParameter("ProcurementId", a.ToString());
                            param[1] = new Microsoft.Reporting.WebForms.ReportParameter("Vendorid", procc.ToString());
                            //param.Values.Add(a.ToString());
                            rptViewer.ServerReport.SetParameters(param);
                            string namefile = "Report Berita_Acara_Klarifikasi.PDF";
                            rptViewer.ProcessingMode = ProcessingMode.Remote;
                            bytes = rptViewer.ServerReport.Render("PDF", null, out mimeType,
                            out encoding, out filenameExtension, out streamids, out warnings);
                            string host = ConfigurationManager.AppSettings["SMTPHost"];
                            var emailModel = new DocProcurementModel();
                            emailModel.DisplayName = test.CommitteeTypeDescription;
                            //var emailSubject = Texts.Forms.Membership.ResetPassword.EmailSubject.ToString();
                            var emailBody = TemplateHelper.RenderTemplate(
                                MVC.Views.SSRS.F8_TechnicalClarification.F8_Clarification, emailModel);

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
                                                                            "Report Berita Acara Klarifikasi",
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
                        //mail.Subject = "Report Berita Acara Klarifikasi";
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
                        //}
                    }
                    }
            }


            protected override void AfterSave()
            {
                base.AfterSave();

                this.UnitOfWork.OnCommit += () => {
                    //SaveNote(UnitOfWork);
                    //EmailThread.StartEmailThread();
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
                var procurementType = new List<string>();
                if (Authorization.HasPermission(ProcurementPermission.DataService))
                {
                    procurementType.Add("S");
                }
                if (Authorization.HasPermission(ProcurementPermission.DataMaterial))
                {
                    procurementType.Add("M");
                }

                if (Row.F8SubmitDate != null || Row.Status == "F8") { }
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
    }
}