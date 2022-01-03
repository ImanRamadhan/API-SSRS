
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
    using MyRow = Entities.ProcurementRow;

    public class F7_TenderEvaluationRepository
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

        public void SaveNote(Int64 id, String NoCN, IUnitOfWork uow)
        {
            var procId = id;
            string host = ConfigurationManager.AppSettings["SMTPHost"];
            //var FinalConclu = Row.FinalConclusionDesc;

            var connection = SqlConnections.NewFor<UserRow>();
            var parameter = new DynamicParameters();

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

            parameter.Add("@ProcurementId", procId.ToString());
            List<F7_VendorParticipantRow> listVendorParticipant = (List<F7_VendorParticipantRow>)connection.Query<F7_VendorParticipantRow>("SP_GetClarification", parameter, commandType: CommandType.StoredProcedure);
            foreach (var vendorParticipanItem in listVendorParticipant)
            {
                System.Net.Mail.MailMessage mail = new System.Net.Mail.MailMessage();
                var emailComplaint = connection.TrySingle<SettingRow>(new Criteria(SettingRow.Fields.Name.PropertyName) == "pic_email");
                //var Queued = new QueuedEmailRow();
                var emailModel = new F7EvaluationModel();
                var te = vendorParticipanItem.QuoteDesc;
                var test = vendorParticipanItem.EvaluateConclusionName;
                var emailBody = "";
                if (vendorParticipanItem.EvaluateConclusionName == "Lulus")
                {
                    emailModel.Title = "Telah Di Terima dan Dinyatakan dengan Status 'Lulus'.";
                    emailModel.VendorWinner = emailComplaint.Value;
                    emailModel.CollectiveNumber = NoCN;
                    emailBody = TemplateHelper.RenderTemplate(
                    MVC.Views.SSRS.F7_TenderEvaluation.F7_Evaluation, emailModel);
                    //Queued.Body = emailBody;
                }
                else if (vendorParticipanItem.EvaluateConclusionName == "Klarifikasi")
                {
                    emailModel.Title = "Belum Di Terima dan Dinyatakan dengan Status 'Klarifikasi'.";
                    emailModel.VendorWinner = emailComplaint.Value;
                    emailModel.CollectiveNumber = NoCN;
                    emailBody = TemplateHelper.RenderTemplate(
                    MVC.Views.SSRS.F7_TenderEvaluation.F7_Evaluation, emailModel);
                    //Queued.Body = emailBody;
                }

                SSRS.MailServicesPTM.Service1Client mailservice = new SSRS.MailServicesPTM.Service1Client();
                
                var mailuser = ConfigurationManager.AppSettings["MailUser"].ToString();
                var mailPassword = ConfigurationManager.AppSettings["MailPassword"].ToString();

                SSRS.MailServicesPTM.CommonResponseMessage messageResult = new SSRS.MailServicesPTM.CommonResponseMessage();

                try
                {
                    messageResult = mailservice.SendMessage(
                                                                mailuser,
                                                                mailPassword,
                                                                vendorParticipanItem.EmailParticipant,
                                                                null,
                                                                null,
                                                                "Evaluasi Penawaran Pengadaan " + NoCN,
                                                                emailBody
                                                                );
                }
                catch (Exception ex)
                {

                }

                //else if (vendorParticipanItem.EvaluateConclusionName == "No Quote")
                //{
                //    emailModel.Title = "Telah Dibatalkan Dikarenakan : ";
                //    emailModel.DescNoQuote = vendorParticipanItem.QuoteDesc;
                //    emailModel.VendorWinner = emailComplaint.Value;
                //    emailModel.CollectiveNumber = NoCN;
                //    var emailBody = TemplateHelper.RenderTemplate(
                //    MVC.Views.SSRS.F7_TenderEvaluation.F7_Evaluation, emailModel);
                //    Queued.Body = emailBody;
                //}

                //Queued.PriorityId = 1;
                //Queued.From = fromAdmin;
                //Queued.FromName = fromNameAdmin;
                //Queued.To = vendorParticipanItem.EmailParticipant;
                //Queued.ToName = "User ";
                //Queued.Subject = "Evaluasi Penawaran Pengadaan " + NoCN;
                //Queued.CreatedOnUtc = DateTime.Now;
                //Queued.EmailAccountId = 1;

                //var saveRequest = new SaveRequest<QueuedEmailRow> { Entity = Queued };
                //new QueuedEmailRepository().Create(uow, saveRequest);
            }
            //EmailThread.StartEmailThread();
        }
        
        public void SendCommitteeNotification(Int64 id, String NoCN, IUnitOfWork uow)
        {
            var procId = id;
            string host = ConfigurationManager.AppSettings["SMTPHost"];
            //var FinalConclu = Row.FinalConclusionDesc;

            var connection = SqlConnections.NewFor<UserRow>();
            var parameter = new DynamicParameters();

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

            parameter.Add("@ProcurementId", procId.ToString());
            List<F7_VendorParticipantRow> listVendorParticipant = (List<F7_VendorParticipantRow>)connection.Query<F7_VendorParticipantRow>("SP_GetClarification", parameter, commandType: CommandType.StoredProcedure);
            foreach (var vendorParticipanItem in listVendorParticipant)
            {
                if (vendorParticipanItem.EvaluateConclusionName == "Lulus")
                {
                    List<F7_ListCommitteeRow> listCommittee = (List<F7_ListCommitteeRow>)connection.Query<F7_ListCommitteeRow>("SP_GetCommitteeList", parameter, commandType: CommandType.StoredProcedure);
                    foreach (var listCommitteeItem in listCommittee)
                    {
                        System.Net.Mail.MailMessage mail = new System.Net.Mail.MailMessage();
                        var emailComplaint = connection.TrySingle<SettingRow>(new Criteria(SettingRow.Fields.Name.PropertyName) == "pic_email");
                        //var Queued = new QueuedEmailRow();
                        var emailModel = new F7EvaluationModel();

                        emailModel.Title = "Kami beritahukan Kepada para Panitia Pengadaan agar segera melakukan Approve di Flow F19_CommitteeApproval, Agar bisa melanjutkan ke Flow berikutnya F8_TechnicalClarification.";
                        //emailModel.DescNoQuote = listCommittee.QuoteDesc;
                        emailModel.VendorWinner = emailComplaint.Value;
                        emailModel.CollectiveNumber = NoCN;
                        var emailBody = TemplateHelper.RenderTemplate(
                        MVC.Views.SSRS.F7_TenderEvaluation.F7_Evaluation, emailModel);
                        
                        SSRS.MailServicesPTM.Service1Client mailservice = new SSRS.MailServicesPTM.Service1Client();
                        
                        var mailuser = ConfigurationManager.AppSettings["MailUser"].ToString();
                        var mailPassword = ConfigurationManager.AppSettings["MailPassword"].ToString();

                        SSRS.MailServicesPTM.CommonResponseMessage messageResult = new SSRS.MailServicesPTM.CommonResponseMessage();

                        try
                        {
                            messageResult = mailservice.SendMessage(
                                                                        mailuser,
                                                                        mailPassword,
                                                                        listCommitteeItem.Email,
                                                                        null,
                                                                        null,
                                                                        "Pemberitahuan Agar Melakukan Approve di Pengadaan " + NoCN,
                                                                        emailBody
                                                                        );
                        }
                        catch (Exception ex)
                        {

                        }

                        //Queued.Body = emailBody;

                        //Queued.PriorityId = 1;
                        //Queued.From = fromAdmin;
                        //Queued.FromName = fromNameAdmin;
                        //Queued.To = listCommitteeItem.Email;
                        //Queued.ToName = "User ";
                        //Queued.Subject = "Pemberitahuan Agar Melakukan Approve di Pengadaan " + NoCN;
                        //Queued.CreatedOnUtc = DateTime.Now;
                        //Queued.EmailAccountId = 1;

                        //var saveRequest = new SaveRequest<QueuedEmailRow> { Entity = Queued };
                        //new QueuedEmailRepository().Create(uow, saveRequest);
                    }
                    //EmailThread.StartEmailThread();
                }
                
            }
        }

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {

            private void SendNotification()
            {
                var a = Row.ProcurementId;
                string host = ConfigurationManager.AppSettings["SMTPHost"];
                var FinalConclu = Row.FinalConclusionDesc;

                var connection = SqlConnections.NewFor<UserRow>();
                var p = new DynamicParameters();
                p.Add("@ProcurementId", a.ToString());
                //List<UserRow> az = (List<UserRow>)connection.Query<UserRow>("SP_GetClarification", p, commandType: CommandType.StoredProcedure);
                List<F7_VendorParticipantRow> nz = (List<F7_VendorParticipantRow>)connection.Query<F7_VendorParticipantRow>("SP_GetClarification", p, commandType: CommandType.StoredProcedure);
                foreach (var test in nz)
                {
                    //System.Net.Mail.MailMessage mail = new System.Net.Mail.MailMessage();
                    /*foreach (var main in nz) {
                        if (main.EvaluationConclusionName == "Lulus") {
                            mail.Body = "Evaluasi Penawaran Anda Telah Di Terima dan Dinyatakan dengan Status 'Lulus'. ";
                        } else if (main.EvaluationConclusionName == "Klarifikasi") {
                            mail.Body = "Evaluasi Penawaran Anda Belum Di Terima dan Dinyatakan dengan Status 'Klarifikasi'." +
                                "Berikut Data yang Perlu di Klarifikasi : ";
                        }
                    }*/
                    var emailModel = new F7EvaluationModel();
                    var emailBody = "";
                    //emailModel.Title = "Telah Di Terima dan Dinyatakan dengan Status 'Lulus'.";

                    //var emailSubject = Texts.Forms.Membership.ResetPassword.EmailSubject.ToString();

                    if (test.EvaluateConclusionName == "Lulus")
                    {
                        emailModel.Title = "Telah Di Terima dan Dinyatakan dengan Status 'Lulus'.";
                        emailBody = TemplateHelper.RenderTemplate(
                        MVC.Views.SSRS.F7_TenderEvaluation.F7_Evaluation, emailModel);
                        //mail.Body = emailBody;
                    }
                    else if (test.EvaluateConclusionName == "Klarifikasi")
                    {
                        emailModel.Title = "Belum Di Terima dan Dinyatakan dengan Status 'Klarifikasi'.";
                        emailBody = TemplateHelper.RenderTemplate(
                        MVC.Views.SSRS.F7_TenderEvaluation.F7_Evaluation, emailModel);
                        //mail.Body = emailBody;
                    }

                    SSRS.MailServicesPTM.Service1Client mailservice = new SSRS.MailServicesPTM.Service1Client();
                    
                    var mailuser = ConfigurationManager.AppSettings["MailUser"].ToString();
                    var mailPassword = ConfigurationManager.AppSettings["MailPassword"].ToString();

                    SSRS.MailServicesPTM.CommonResponseMessage messageResult = new SSRS.MailServicesPTM.CommonResponseMessage();

                    try
                    {
                        messageResult = mailservice.SendMessage(
                                                                    mailuser,
                                                                    mailPassword,
                                                                    test.EmailParticipant,
                                                                    null,
                                                                    null,
                                                                    "Evaluasi Penawaran Pengadaan",
                                                                    emailBody
                                                                    );
                    }
                    catch (Exception ex)
                    {

                    }

                    //mail.Body = "Please find your report attached";

                    //mail.To.Add(new MailAddress(test.EmailParticipant));
                    //mail.Subject = "Evaluasi Penawaran Pengadaan";
                    //mail.SubjectEncoding = Encoding.UTF8;
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

                if (Row.F7SubmitDate != null || Row.Status == "F7") { }
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

                var procurementType = new List<string>();
                if (Authorization.HasPermission(ProcurementPermission.DataService))
                {
                    procurementType.Add("S");
                }
                if (Authorization.HasPermission(ProcurementPermission.DataMaterial))
                {
                    procurementType.Add("M");
                }



                query.Where(new Criteria(fld.F7SubmitDate).IsNotNull() || new Criteria(fld.Status) == "F7");

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