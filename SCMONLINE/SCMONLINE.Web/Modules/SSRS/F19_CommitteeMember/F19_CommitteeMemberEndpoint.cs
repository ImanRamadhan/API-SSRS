
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
    using MyRepository = Repositories.F19_CommitteeMemberRepository;
    using MyRow = Entities.CommitteeMemberRow;

    [RoutePrefix("Services/Procurement/F19_CommitteeMember"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class F19_CommitteeMemberController : ServiceEndpoint
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
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.F19_CommitteeMemberColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "F19_CommitteeMemberList_" + DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }

        

        //[HttpPost, AuthorizeUpdate(typeof(MyRow))]
        //public SaveResponse SendMailApprove(IUnitOfWork uow, SaveRequest<MyRow> request)
        //{
        //    new MyRepository().NoteApprove(Int64.Parse(request.EntityId.ToStringNullSafe()), uow);
        //    return new SaveResponse();
        //}

        //[HttpPost, AuthorizeUpdate(typeof(MyRow))]
        //public SaveResponse SendMailReject(IUnitOfWork uow, SaveRequest<MyRow> request)
        //{
        //    new MyRepository().NoteReject(Int64.Parse(request.EntityId.ToStringNullSafe()), uow);
        //    return new SaveResponse();
        //}
    }
}
