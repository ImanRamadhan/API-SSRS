
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
    using MyRepository = Repositories.F13_RfqItemRepository;
    using MyRow = Entities.RfqItemRow;
    using System.Collections.Generic;
    using SCMONLINE.Procurement.Entities;

    [RoutePrefix("Services/Procurement/F13_RfqItem"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class F13_RfqItemController : ServiceEndpoint
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
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.F13_RfqItemColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "F13_RfqItemList_" + DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }

        public FileContentResult ListExcelOwnerEstimateReview(IDbConnection connection, List<RfqItemRow> data)
        {
            //var data = List(connection, request).Entities;
            List<string> includeColumns = new List<string>();
            includeColumns.Add("RfqItemId");
            //includeColumns.Add("ProcurementStatus");
            includeColumns.Add("OwnerEstimateReview");
            //includeColumns.Add("PurchasingDocument");
            includeColumns.Add("Item");
            includeColumns.Add("Material");
            //includeColumns.Add("DeletionIndicator");
            //includeColumns.Add("RfqStatus");
            //includeColumns.Add("LastChangedOn");
            includeColumns.Add("ShortText");
            //includeColumns.Add("Plant");
            //includeColumns.Add("StorageLocation");
            //includeColumns.Add("ReqTrackingNumber");
            //includeColumns.Add("MaterialGroup");
            //includeColumns.Add("PurchasingInfoRec");
            //includeColumns.Add("VendorMaterialNo");
            //includeColumns.Add("TargetQuantity");
            includeColumns.Add("OrderQuantity");
            includeColumns.Add("OrderUnit");
            includeColumns.Add("OrderPriceUnit");
            includeColumns.Add("OwnerEstimate");
            //includeColumns.Add("QuantityConversion");
            //includeColumns.Add("EqualTo");
            //includeColumns.Add("Denominator");
            //includeColumns.Add("NetOrderPrice");
            //includeColumns.Add("PriceUnit");
            //includeColumns.Add("NetOrderValue");
            //includeColumns.Add("GrossOrderValue");
            //includeColumns.Add("QuotationDeadline");
            //includeColumns.Add("GrProcessingTime");
            //includeColumns.Add("TaxCode");
            //includeColumns.Add("BaseUnitOfMeasure");
            //includeColumns.Add("ShippingInstr");
            //includeColumns.Add("OaTargetValue");
            //includeColumns.Add("PriceDate");
            //includeColumns.Add("PurchDocCategory");
            //includeColumns.Add("EffectiveValue");
            //includeColumns.Add("AffectsCommitments");
            //includeColumns.Add("MaterialType");
            //includeColumns.Add("SubitemCategory");
            //includeColumns.Add("SubItems");
            //includeColumns.Add("Subtotal1");
            //includeColumns.Add("Subtotal2");
            //includeColumns.Add("Subtotal3");
            //includeColumns.Add("Subtotal4");
            //includeColumns.Add("Subtotal5");
            var report = new DynamicDataReport(data, includeColumns, typeof(Columns.RfqItemColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "OwnerEstimateReview_" + DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }

    }
}
