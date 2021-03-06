
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
    using MyRepository = Repositories.F17_PurchOrderDocUploadRepository;
    using MyRow = Entities.ProcurementRow;

    [RoutePrefix("Services/Procurement/F17_PurchOrderDocUpload"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class F17_PurchOrderDocUploadController : ServiceEndpoint
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
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.F17_PurchOrderDocUploadColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "F17_PurchOrderDocUploadList_" + DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }
        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Submit(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            //End Flow, no other status changed
            request.Entity.F17SubmitDate = DateTime.Now;
            request.Entity.F17SubmitBy = Authorization.Username;
            return new MyRepository().Update(uow, request);
        }

    }
}
