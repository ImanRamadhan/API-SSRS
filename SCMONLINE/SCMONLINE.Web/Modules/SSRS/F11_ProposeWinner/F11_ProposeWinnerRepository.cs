
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
    using System.Web.Hosting;
    using MyRow = Entities.ProcurementRow;

    public class F11_ProposeWinnerRepository
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

        public void SaveNote(Int64 id, Boolean agreement, IUnitOfWork uow)
        {
            var a = id;
            var agree = agreement;
            var connection = SqlConnections.NewFor<UserRow>();
            var p = new DynamicParameters();
            p.Add("@ProcurementId", a.ToString());
            p.Add("@Agreement", agree.ToString());
            //List<UserRow> az = (List<UserRow>)connection.Query<UserRow>("SP_GetClarification", p, commandType: CommandType.StoredProcedure);
            List<F11_AgreementRow> nz = (List<F11_AgreementRow>)connection.Query<F11_AgreementRow>("SP_GetAgreement", p, commandType: CommandType.StoredProcedure);
            foreach (var test in nz)
            {
                if (test.Agreement == "False" || test.Agreement == "0")
                {
                    var emailModel = new F11ProposeModel();
                    var emailComplaint = connection.TrySingle<SettingRow>(new Criteria(SettingRow.Fields.Name.PropertyName) == "pic_email");
                    emailModel.VendorWinner = emailComplaint.Value;
                    //emailModel.DisplayName = test.CommitteeTypeDescription;
                    var emailBody = TemplateHelper.RenderTemplate(
                        MVC.Views.SSRS.F11_ProposeWinner.F11_Propose, emailModel);

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
                                                                    "Proses Pengadaan F11 - Propose Winner",
                                                                    emailBody
                                                                    );
                    }
                    catch (Exception ex)
                    {

                    }

                    //System.Net.Mail.MailMessage mail = new System.Net.Mail.MailMessage();
                    //var Queued2 = new QueuedEmailRow();
                    //Queued2.PriorityId = 1;
                    //Queued2.From = "hzheveo554@gmail.com";
                    //Queued2.FromName = "hz";
                    //Queued2.To = test.EmailParticipant;
                    //Queued2.ToName = "Wildan ";
                    //Queued2.Subject = "Proses Pengadaan F11 - Propose Winner";
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
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            private void SendNotification()
            {
                var a = Row.ProcurementId;
                var agree = Row.ProcAgreement;
                string host = ConfigurationManager.AppSettings["SMTPHost"];
                var FinalConclu = Row.FinalConclusionDesc;

                var connection = SqlConnections.NewFor<UserRow>();
                var p = new DynamicParameters();
                p.Add("@ProcurementId", a.ToString());
                p.Add("@Agreement", agree.ToString());
                //List<UserRow> az = (List<UserRow>)connection.Query<UserRow>("SP_GetClarification", p, commandType: CommandType.StoredProcedure);
                List<F11_AgreementRow> nz = (List<F11_AgreementRow>)connection.Query<F11_AgreementRow>("SP_GetAgreement", p, commandType: CommandType.StoredProcedure);
                foreach (var test in nz)
                {
                    if (test.Agreement == "False")
                    {

                        var emailModel = new DocProcurementModel();
                        emailModel.DisplayName = test.CommitteeTypeDescription;

                        //var emailSubject = Texts.Forms.Membership.ResetPassword.EmailSubject.ToString();
                        var emailBody = TemplateHelper.RenderTemplate(
                            MVC.Views.SSRS.F11_ProposeWinner.F11_Propose, emailModel);

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
                                                                        "Proses Pengadaan F11 - Propose Winner",
                                                                        emailBody
                                                                        );
                        }
                        catch (Exception ex)
                        {

                        }

                        //System.Net.Mail.MailMessage mail = new System.Net.Mail.MailMessage();
                        ////mail.Body = "Evaluasi Penawaran Anda Yang Ada di Proses [F11- Propose Winner], 'TIdak Di-Setujui' dan Pengadaan Anda Di Batalkan.";
                        //mail.Body = emailBody;
                        //mail.To.Add(new MailAddress(test.EmailParticipant));
                        //mail.Subject = "Proses Pengadaan F11 - Propose Winner";
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
                var procurementType = new List<string>();
                if (Serenity.Authorization.HasPermission(ProcurementPermission.DataService))
                {
                    procurementType.Add("S");
                }
                if (Serenity.Authorization.HasPermission(ProcurementPermission.DataMaterial))
                {
                    procurementType.Add("M");
                }

                if (Row.F11SubmitDate != null || Row.Status == "F11") { }
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



                query.Where(new Criteria(fld.F11SubmitDate).IsNotNull() || new Criteria(fld.Status) == "F11");

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