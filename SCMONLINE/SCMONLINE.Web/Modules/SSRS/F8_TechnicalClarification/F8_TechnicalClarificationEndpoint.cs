
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
    using MyRepository = Repositories.F8_TechnicalClarificationRepository;
    using MyRow = Entities.ProcurementRow;
    using SCMONLINE.Modules._Ext.Utils;

    [RoutePrefix("Services/Procurement/F8_TechnicalClarification"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class F8_TechnicalClarificationController : ServiceEndpoint
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
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.F8_TechnicalClarificationColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "F8_TechnicalClarificationList_" + DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Submit(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            request.Entity.Status = "F9";
            request.Entity.F8SubmitDate = DateTime.Now;
            request.Entity.F8SubmitBy = Authorization.Username;
            var dataUpdate = new MyRepository().Update(uow, request);
            //new MyRepository().SaveNote(Int64.Parse(request.EntityId.ToStringNullSafe()), uow);
            return dataUpdate;
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse SendMail(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            new MyRepository().SaveNote(Int64.Parse(request.EntityId.ToStringNullSafe()), uow);
            return new SaveResponse();
        }
    }
}
