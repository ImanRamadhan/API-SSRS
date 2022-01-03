
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
    using System.Linq;
    using MyRow = Entities.ProcurementRow;

    public class F6_OpenTenderDocumentRepository
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

        public void SaveNoteRejected(Int64 id, String NoCN, IUnitOfWork uow)
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
                var emailModel = new F7EvaluationModel();
                
                emailModel.Title = "Belum Di Terima dan Dinyatakan dengan Status 'Klarifikasi'.";
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

                //var Queued = new QueuedEmailRow();
                //Queued.Body = emailBody;
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

        private class MySaveHandler : SaveRequestHandler<MyRow> { }
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

                if (Row.F6SubmitDate != null || Row.Status == "F6") { }
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



                query.Where(new Criteria(fld.F6SubmitDate).IsNotNull() || new Criteria(fld.Status) == "F6");

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