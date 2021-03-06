
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
    using MyRepository = Repositories.F6_ProcParticipantItemRepository;
    using MyRow = Entities.ProcParticipantItemRow;
    using System.Collections.Generic;
    using SCMONLINE.Procurement.Entities;

    [RoutePrefix("Services/Procurement/F6_ProcParticipantItem"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class F6_ProcParticipantItemController : ServiceEndpoint
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
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.F6_ProcParticipantItemColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "F6_ProcParticipantItemList_" + DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }

        public FileContentResult ListExcelBidPrice(IDbConnection connection, List<MyRow> data)
        {
            List<string> includeColumns = new List<string>();

            var fld = ProcParticipantItemRow.Fields;

            includeColumns.Add(fld.ProcParticipantItemId.PropertyName);
            includeColumns.Add(fld.ItemSequence.PropertyName);
            includeColumns.Add(fld.Material.PropertyName);
            includeColumns.Add(fld.ShortText.PropertyName);
            includeColumns.Add(fld.BidPrice.PropertyName);
            includeColumns.Add(fld.RfqItemTargetQuantity.PropertyName);
            includeColumns.Add(fld.RfqItemOrderUnit.PropertyName);

            var report = new DynamicDataReport(data, includeColumns, typeof(Columns.F6_ProcParticipantItemColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "SubmitBidPrice_" + DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }

    }
}
