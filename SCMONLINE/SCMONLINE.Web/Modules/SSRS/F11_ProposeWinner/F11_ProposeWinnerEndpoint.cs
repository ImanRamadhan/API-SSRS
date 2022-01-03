
namespace SCMONLINE.Procurement.Endpoints
{
    using System;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using Serenity.Reporting;
    using Serenity.Web;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.F11_ProposeWinnerRepository;
    using MyRow = Entities.ProcurementRow;

    [RoutePrefix("Services/Procurement/F11_ProposeWinner"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class F11_ProposeWinnerController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }

        public FileContentResult ListExcel(IDbConnection connection, ListRequest request)
        {
            var data = List(connection, request).Entities;
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.F11_ProposeWinnerColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "F11_ProposeWinnerList_" + DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Submit(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            //Get Enum Value with getvalueordefault and chose what your enum value
            if (request.Entity.ProcAgreement.GetValueOrDefault() == _Ext.ApproveTidakApprove.Approve)
            {
                //if(request.Entity.ProcAsRequired.GetValueOrDefault() == _Ext.YaTidak.Ya)
                //{
                //    request.Entity.Status = "F12";
                //}else
                //{
                    request.Entity.Status = "F13";
                //}
            }
            else
            {
                request.Entity.Status = "F11-REJ";
            }
            request.Entity.F11SubmitDate = DateTime.Now;
            request.Entity.F11SubmitBy = Authorization.Username;
            request.Entity.WinnerNominationDate = DateTime.Now;
            request.Entity.ProcAgreementDate = DateTime.Now;
            var repo = new MyRepository().Update(uow, request);
            // SendNotification();
            //uow.Connection.GetCurrentActualTransaction().Commit();
            return repo;
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse SendMailReject(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            //Get Enum Value with getvalueordefault and chose what your enum value
            if (request.Entity.ProcAgreement.GetValueOrDefault() == _Ext.ApproveTidakApprove.Approve)
            {
                if (request.Entity.ProcAsRequired.GetValueOrDefault() == _Ext.YaTidak.Ya)
                {
                    request.Entity.Status = "F12";
                }
                else
                {
                    request.Entity.Status = "F13";
                }
            }
            else
            {
                request.Entity.Status = "F11-REJ";
            }
            request.Entity.F11SubmitDate = DateTime.Now;
            request.Entity.F11SubmitBy = Authorization.Username;
            request.Entity.WinnerNominationDate = DateTime.Now;
            request.Entity.ProcAgreementDate = DateTime.Now;
            var repo = new MyRepository().Update(uow, request);
            // SendNotification();
            //uow.Connection.GetCurrentActualTransaction().Commit();
            return repo;
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse SendMail(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            //Request enum value and retrieve as boolean for value in SaveNote
            new MyRepository().SaveNote(Int64.Parse(request.EntityId.ToStringNullSafe()),
                                        request.Entity.ProcAgreement.GetValueOrDefault() == _Ext.ApproveTidakApprove.Approve, uow);
            return new SaveResponse();
        }
    }
}
