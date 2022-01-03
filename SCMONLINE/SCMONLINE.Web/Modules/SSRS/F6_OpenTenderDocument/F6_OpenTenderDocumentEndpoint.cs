
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
    using MyRepository = Repositories.F6_OpenTenderDocumentRepository;
    using MyRow = Entities.ProcurementRow;

    [RoutePrefix("Services/Procurement/F6_OpenTenderDocument"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class F6_OpenTenderDocumentController : ServiceEndpoint
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
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.F6_OpenTenderDocumentColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "F6_OpenTenderDocumentList_" + DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }
        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Submit(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            request.Entity.Status = "F7";
            request.Entity.F6SubmitDate = DateTime.Now;
            request.Entity.F6SubmitBy = Authorization.Username;

            return new MyRepository().Update(uow, request);
        }
        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Rejected(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            //no clarification? go to F9
            request.Entity.Status = "F6-REJ";
            request.Entity.F6SubmitDate = DateTime.Now;
            request.Entity.F6SubmitBy = Authorization.Username;

            return new MyRepository().Update(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse SendMailReject(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            new MyRepository().SaveNoteRejected(Int64.Parse(request.EntityId.ToStringNullSafe()), request.Entity.CollectiveNumber.ToString(), uow);
            return new SaveResponse();
        }

    }
}
