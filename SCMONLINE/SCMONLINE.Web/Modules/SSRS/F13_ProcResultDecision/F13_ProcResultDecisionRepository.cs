
namespace SCMONLINE.Procurement.Repositories
{
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
    using System.Web;
    using System.Web.Hosting;
    using System.Web.Mvc;
    using System.Web.Security;
    using MyRow = Entities.ProcurementRow;

    public class F13_ProcResultDecisionRepository
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

        public void SaveNoteApprove(Int64 id, IUnitOfWork uow)
        {
            var a = id;
            string host = ConfigurationManager.AppSettings["SMTPHost"];
            //var FinalConclu = Row.FinalConclusionDesc;

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
            //List<UserRow> az = (List<UserRow>)connection.Query<UserRow>("SP_GetClarification", p, commandType: CommandType.StoredProcedure);
            List<F13_StatusF10Row> nz = (List<F13_StatusF10Row>)connection.Query<F13_StatusF10Row>("SP_GetNameEvaluationItem", p, commandType: CommandType.StoredProcedure);
            foreach (var test in nz)
            {
                if (test.IdStatusEvaluation == 1)
                {
                    var emailModel = new F13ResultDecisionModel();
                    var emailComplaint = connection.TrySingle<SettingRow>(new Criteria(SettingRow.Fields.Name.PropertyName) == "pic_email");
                    emailModel.VendorWinner = emailComplaint.Value;
                    emailModel.Title = "Diberitahukan Kepada Rekan/Partner dari Pertamina Drilling Service Indonesia." +
                        "Mengacu hasil evaluasi," +
                        "Bersama ini diberitahukan 'Selamat Pengadaaan Ini Telah Berhasil di Approve dan di Teruskan dengan Status [F14] Pengumuman Pemenang'.";

                    //var emailSubject = Texts.Forms.Membership.ResetPassword.EmailSubject.ToString();
                    var emailBody = TemplateHelper.RenderTemplate(
                        MVC.Views.SSRS.F13_ProcResultDecision.F13_ResultDecision, emailModel);

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
                                                                    "Status Pengadaan [F13]",
                                                                    emailBody
                                                                    );
                    }
                    catch (Exception ex)
                    {

                    }

                    //System.Net.Mail.MailMessage mail = new System.Net.Mail.MailMessage();
                    //var Queued2 = new QueuedEmailRow();
                    //Queued2.PriorityId = 1;
                    //Queued2.From = fromAdmin;
                    //Queued2.FromName = fromNameAdmin;
                    //Queued2.To = test.EmailParticipant;
                    //Queued2.ToName = "User ";
                    //Queued2.Subject = "Status Pengadaan [F13]";
                    //Queued2.Body = emailBody;
                    //Queued2.CreatedOnUtc = DateTime.Now;
                    ////Queued.CreatedOnUtc = DateTime.Now;
                    ////Queued.SentTries = 1;
                    //Queued2.EmailAccountId = 1;

                    //var saveRequest2 = new SaveRequest<QueuedEmailRow> { Entity = Queued2 };
                    //new QueuedEmailRepository().Create(uow, saveRequest2);
                }
            }
            //EmailThread.StartEmailThread();
        }

        public void SaveNoteReject(Int64 id, IUnitOfWork uow)
        {
            var a = id;
            string host = ConfigurationManager.AppSettings["SMTPHost"];
            //var FinalConclu = Row.FinalConclusionDesc;

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
            //List<UserRow> az = (List<UserRow>)connection.Query<UserRow>("SP_GetClarification", p, commandType: CommandType.StoredProcedure);
            List<F13_StatusF10Row> nz = (List<F13_StatusF10Row>)connection.Query<F13_StatusF10Row>("SP_GetNameEvaluationItem", p, commandType: CommandType.StoredProcedure);
            foreach (var test in nz)
            {
                if (test.IdStatusEvaluation != 1)
                {
                    var emailModel = new F13ResultDecisionModel();
                    var emailComplaint = connection.TrySingle<SettingRow>(new Criteria(SettingRow.Fields.Name.PropertyName) == "pic_email");
                    emailModel.VendorWinner = emailComplaint.Value;
                    emailModel.Title = "Diberitahukan Kepada Rekan/Partner dari Pertamina Drilling Service Indonesia." +
                        "Mengacu hasil evaluasi," +
                        "Bersama ini diberitahukan 'Proses Pengadaan Dinyatakan Gagal Lelang'.";
                    //"Mohon Maaf, Bahwa Pengadaan Ini Telah di Batalkan dan akan diberikan dengan Status 'Reject'.";

                    //var emailSubject = Texts.Forms.Membership.ResetPassword.EmailSubject.ToString();
                    var emailBody = TemplateHelper.RenderTemplate(
                        MVC.Views.SSRS.F13_ProcResultDecision.F13_ResultDecision, emailModel);

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
                                                                    "Pengadaan [R13-Reject]",
                                                                    emailBody
                                                                    );
                    }
                    catch (Exception ex)
                    {

                    }

                    //System.Net.Mail.MailMessage mail = new System.Net.Mail.MailMessage();
                    //var Queued2 = new QueuedEmailRow();
                    //Queued2.PriorityId = 1;
                    //Queued2.From = fromAdmin;
                    //Queued2.FromName = fromNameAdmin;
                    //Queued2.To = test.EmailParticipant;
                    //Queued2.ToName = "User ";
                    //Queued2.Subject = "Pengadaan [R13-Reject]";
                    //Queued2.Body = emailBody;
                    //Queued2.CreatedOnUtc = DateTime.Now;
                    ////Queued.CreatedOnUtc = DateTime.Now;
                    ////Queued.SentTries = 1;
                    //Queued2.EmailAccountId = 1;

                    //var saveRequest2 = new SaveRequest<QueuedEmailRow> { Entity = Queued2 };
                    //new QueuedEmailRepository().Create(uow, saveRequest2);
                }
            }
            //EmailThread.StartEmailThread();
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            var row = new MyRetrieveHandler().Process(connection, request);


            var userRoles = new UserRoleRepository().List(connection, new Administration.UserRoleListRequest() { UserID = Int32.Parse(Authorization.UserId) }).Entities;

            if (userRoles.Count > 0)
            {
                var param = new DynamicParameters();
                param.Add("RoleId", string.Join(",", userRoles));
                var allowedProcurement = connection.Query<ProcurementRow>("SP_GET_ALLOWED_AUTH_PROCUREMENT", param: param, commandType: CommandType.StoredProcedure);
                if (allowedProcurement.Any(x => x.ProcurementId == long.Parse(request.EntityId.ToStringNullSafe())))
                {
                    return new MyRetrieveHandler().Process(connection, request);
                }


                var procurementType = new List<string>();
                if (Authorization.HasPermission(ProcurementPermission.DataService))
                {
                    procurementType.Add("S");
                }
                if (Authorization.HasPermission(ProcurementPermission.DataMaterial))
                {
                    procurementType.Add("M");
                }

                if (row.Entity.F13SubmitDate != null || row.Entity.Status == "F13") { }
                else { throw new ValidationError("AccessDenied", null, Texts.Site.AccessDenied.LackPermissions); }

                if (procurementType.Count > 0)
                {
                    if (procurementType.Any(x => x == row.Entity.ProcurementTypeId))
                    {
                    }
                    else { throw new ValidationError("AccessDenied", null, Texts.Site.AccessDenied.LackPermissions); }

                }
                else
                {
                    throw new ValidationError("AccessDenied", null, Texts.Site.AccessDenied.LackPermissions);
                }
            }
            else
            {
                throw new ValidationError("AccessDenied", null, Texts.Site.AccessDenied.LackPermissions);
            }
            return row;
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

                //currentRole
                var userRoles = new UserRoleRepository().List(this.Connection, new Administration.UserRoleListRequest() { UserID = Int32.Parse(Authorization.UserId) }).Entities;

                var param = new DynamicParameters();
                param.Add("RoleId", string.Join(",", userRoles));
                var allowedProcurement = this.Connection.Query<ProcurementRow>("SP_GET_ALLOWED_AUTH_PROCUREMENT", param: param, commandType: CommandType.StoredProcedure);

                if (userRoles.Count > 0 && allowedProcurement.ToList().Count > 0)
                {
                    if (Authorization.Username != "admin")
                    {
                        query.Where(new Criteria(fld.ProcurementId).In(allowedProcurement.Select(x => x.ProcurementId).ToList()));
                    }

                    var procurementType = new List<string>();
                    if (Authorization.HasPermission(ProcurementPermission.DataService))
                    {
                        procurementType.Add("S");
                    }
                    if (Authorization.HasPermission(ProcurementPermission.DataMaterial))
                    {
                        procurementType.Add("M");
                    }

                    query.Where(new Criteria(fld.F13SubmitDate).IsNotNull() || new Criteria(fld.Status) == "F13");

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
                else
                {
                    //hide all data
                    query.Where(new Criteria("1=2"));
                }

            }
        }

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            private void Approved()
            {
                var a = Row.ProcurementId;
                string host = ConfigurationManager.AppSettings["SMTPHost"];
                var FinalConclu = Row.FinalConclusionDesc;

                var connection = SqlConnections.NewFor<UserRow>();
                var p = new DynamicParameters();
                p.Add("@ProcurementId", a.ToString());
                //List<UserRow> az = (List<UserRow>)connection.Query<UserRow>("SP_GetClarification", p, commandType: CommandType.StoredProcedure);
                List<F13_StatusF10Row> nz = (List<F13_StatusF10Row>)connection.Query<F13_StatusF10Row>("SP_GetNameEvaluationItem", p, commandType: CommandType.StoredProcedure);
                foreach (var test in nz)
                {
                    if (test.IdStatusEvaluation == 1)
                    {
                        var emailModel = new F13ResultDecisionModel();
                        emailModel.Title = "Selamat Pengadaaan Anda Telah Berhasil di Approve dan di Teruskan dengan Status [F14].";

                        //var emailSubject = Texts.Forms.Membership.ResetPassword.EmailSubject.ToString();
                        var emailBody = TemplateHelper.RenderTemplate(
                            MVC.Views.SSRS.F13_ProcResultDecision.F13_ResultDecision, emailModel);

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
                                                                         "Status Pengadaan [F13]",
                                                                        emailBody
                                                                        );
                        }
                        catch (Exception ex)
                        {

                        }

                        //System.Net.Mail.MailMessage mail = new System.Net.Mail.MailMessage();
                        //mail.Body = emailBody;
                        ////mail.Body = "Pengadaaan Anda Telah Berhasil di Teruskan dengan Status 'Approve'. " +
                        ////    "Dengan Deskripsi Akhir Sebagai Berikut : " + test.DescConclusion;
                        //mail.To.Add(new MailAddress(test.EmailParticipant));
                        //mail.Subject = "Status Pengadaan [F13]";
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
            }

            private void Rejected()
            {
                var a = Row.ProcurementId;
                string host = ConfigurationManager.AppSettings["SMTPHost"];
                var FinalConclu = Row.FinalConclusionDesc;

                var connection = SqlConnections.NewFor<UserRow>();
                var p = new DynamicParameters();
                p.Add("@ProcurementId", a.ToString());
                //List<UserRow> az = (List<UserRow>)connection.Query<UserRow>("SP_GetClarification", p, commandType: CommandType.StoredProcedure);
                List<F13_StatusF10Row> nz = (List<F13_StatusF10Row>)connection.Query<F13_StatusF10Row>("SP_GetNameEvaluationItem", p, commandType: CommandType.StoredProcedure);
                foreach (var test in nz)
                {
                    if (test.IdStatusEvaluation != 1)
                    {
                        var emailModel = new F13ResultDecisionModel();
                        emailModel.Title = "Mohon Maaf, Bahwa Pengadaan Anda Telah di Batalkan dan akan diberikan dengan Status 'Reject'.";

                        //var emailSubject = Texts.Forms.Membership.ResetPassword.EmailSubject.ToString();
                        var emailBody = TemplateHelper.RenderTemplate(
                            MVC.Views.SSRS.F13_ProcResultDecision.F13_ResultDecision, emailModel);

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
                                                                        "Pengadaan[F13 - Reject]",
                                                                        emailBody
                                                                        );
                        }
                        catch (Exception ex)
                        {

                        }

                        //System.Net.Mail.MailMessage mail = new System.Net.Mail.MailMessage();
                        //mail.Body = emailBody;
                        //mail.To.Add(new MailAddress(test.EmailParticipant));
                        //mail.Subject = "Pengadaan [F13-Reject]";
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
            }

            protected override void AfterSave()
            {
                base.AfterSave();

                this.UnitOfWork.OnCommit += () =>
                {
                    if (Row.Status == "F14")
                    {
                        //Approved();
                    }
                    else if (Row.Status == "F13-REJ")
                    {
                        //Rejected();
                    }
                };
            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
    }
}