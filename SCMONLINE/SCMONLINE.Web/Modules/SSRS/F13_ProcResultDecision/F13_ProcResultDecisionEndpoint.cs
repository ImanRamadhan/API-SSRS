
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
    using MyRepository = Repositories.F13_ProcResultDecisionRepository;
    using MyRow = Entities.ProcurementRow;

    [RoutePrefix("Services/Procurement/F13_ProcResultDecision"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class F13_ProcResultDecisionController : ServiceEndpoint
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

		public FileContentResult ListExcel(IDbConnection connection, ListRequest request) {
            var data = List(connection, request).Entities;
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.F13_ProcResultDecisionColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "F13_ProcResultDecisionList_" + DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Approve(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            request.Entity.Status = "F14";
            request.Entity.F13SubmitDate = DateTime.Now;
            request.Entity.F13SubmitBy = Authorization.Username;
            return new MyRepository().Update(uow, request);
        }
        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Reject(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            request.Entity.Status = "F13-REJ";
            request.Entity.F13SubmitDate = DateTime.Now;
            request.Entity.F13SubmitBy = Authorization.Username;
            return new MyRepository().Update(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse SendMailApprove(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            new MyRepository().SaveNoteApprove(Int64.Parse(request.EntityId.ToStringNullSafe()), uow);
            return new SaveResponse();
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse SendMailReject(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            new MyRepository().SaveNoteReject(Int64.Parse(request.EntityId.ToStringNullSafe()), uow);
            return new SaveResponse();
        }

    }
}
