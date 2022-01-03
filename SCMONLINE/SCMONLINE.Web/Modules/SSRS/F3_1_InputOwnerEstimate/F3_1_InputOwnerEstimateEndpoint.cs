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
    using MyRepository = Repositories.F3_1_InputOwnerEstimateRepository;
    using MyRow = Entities.ProcurementRow;
    using OfficeOpenXml;
    using SCMONLINE.Procurement.Entities;
    using System.IO;
    using System.Collections.Generic;
    using SCMONLINE.Modules.Common.Helpers;
    using SCMONLINE.Procurement.Repositories;

    //using System.IO;
    //using System.Collections.Generic;
    //using SCMONLINE.Procurement.Entities;

    [RoutePrefix("Services/Procurement/F3_1_InputOwnerEstimate"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class F3_1_InputOwnerEstimateController : ServiceEndpoint
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
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.F3_1_InputOwnerEstimateColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "F3_1_InputOwnerEstimateList_" + DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }
        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Submit(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            request.Entity.F31SubmitDate = DateTime.Now;
            request.Entity.F31SubmitBy = Authorization.Username;
            return new MyRepository().Update(uow, request);
        }


        [HttpPost]
        public ExcelImportResponse<RfqItemRow> ExcelImport(IUnitOfWork uow, ExcelImportRequest request)
        {
            request.CheckNotNull();

            Check.NotNullOrWhiteSpace(request.FileName, "filename");

            UploadHelper.CheckFileNameSecurity(request.FileName);

            if (!request.FileName.StartsWith("temporary/"))
                throw new ArgumentOutOfRangeException("filename");

            ExcelPackage ep = new ExcelPackage();
            using (var fs = new FileStream(UploadHelper.DbFilePath(request.FileName), FileMode.Open, FileAccess.Read))
                ep.Load(fs);

            var p = RfqItemRow.Fields;
            //var p = RfqItemRow.Fields;
            //var s = SupplierRow.Fields;
            //var c = CategoryRow.Fields;

            var response = new ExcelImportResponse<RfqItemRow>();
            response.ErrorList = new List<string>();
            response.ImportedData = new List<RfqItemRow>();

            var worksheet = ep.Workbook.Worksheets[1];
            var headers = worksheet.GetHeaderColumns();
            for (var row = 2; row <= worksheet.Dimension.End.Row; row++)
            {
                try
                {
                    var rfqItemId = Convert.ToInt32(worksheet.Cells[row, Array.IndexOf(headers, "ID") + 1].Value == null ? 0 : worksheet.Cells[row, Array.IndexOf(headers, "ID") + 1].Value);
                    var rfqItemSequence = Convert.ToString(worksheet.Cells[row, Array.IndexOf(headers, "Item") + 1].Value ?? "");
                    var ownerEstimate = Convert.ToDecimal(worksheet.Cells[row, Array.IndexOf(headers, "OE Total Price") + 1].Value ?? 0);
                    var orderquantity = Convert.ToDecimal(worksheet.Cells[row, Array.IndexOf(headers, "Order Quantity") + 1].Value == null ? 0 : worksheet.Cells[row, Array.IndexOf(headers, "Order Quantity") + 1].Value);
                    var priceunit = Convert.ToString(worksheet.Cells[row, Array.IndexOf(headers, "OE Unit Price") + 1].Value == null ? "" : worksheet.Cells[row, Array.IndexOf(headers, "OE Unit Price") + 1].Value);
                    var orderunit = Convert.ToString(worksheet.Cells[row, Array.IndexOf(headers, "Order Unit") + 1].Value == null ? "" : worksheet.Cells[row, Array.IndexOf(headers, "Order Unit") + 1].Value);
                    //if (rfqItemId.IsTrimmedEmpty())
                    //    continue;

                    //var rfqItem = uow.Connection.TryFirst<RfqItemRow>(q => q
                    //    .Select(p.RfqItemId)
                    //    .Where(p.RfqItemId == rfqItemId));

                    //var rfqItem = uow.Connection.Single<RfqItemRow>(q => q
                    //    .Select(p.RfqItemId)
                    //    .Where(p.RfqItemId == rfqItemId));

                    //if (rfqItem == null)
                    //{
                    //rfqItem = new RfqItemRow
                    //{
                    //    OwnerEstimate = ownerEstimate
                    //};
                    //}
                    //else
                    //{
                    // avoid assignment errors
                    //rfqItem.TrackWithChecks = false;

                    //only update for their own data
                    //new RfqItemRepository().Update(uow, new SaveRequest<RfqItemRow>
                    //{
                    //    Entity = rfqItem,
                    //    EntityId = rfqItem.RfqItemId.Value
                    //});

                    var rfqItem = new RfqItemRow
                    {
                        RfqItemId = rfqItemId,
                        Item = rfqItemSequence,
                        OrderPriceUnit = priceunit,
                        OrderQuantity = orderquantity,
                        OwnerEstimate = ownerEstimate,
                        OrderUnit = orderunit
                    };
                    response.ImportedData.Add(rfqItem);
                    //}



                    response.Updated = response.Updated + 1;

                    //var supplierName = Convert.ToString(worksheet.Cells[row, 2].Value ?? "");
                    //if (!string.IsNullOrWhiteSpace(supplierName))
                    //{
                    //    var supplier = uow.Connection.TryFirst<SupplierRow>(q => q
                    //        .Select(s.SupplierID)
                    //        .Where(s.CompanyName == supplierName));

                    //    if (supplier == null)
                    //    {
                    //        response.ErrorList.Add("Error On Row " + row + ": Supplier with name '" +
                    //            supplierName + "' is not found!");
                    //        continue;
                    //    }

                    //    rfqItem.SupplierID = supplier.SupplierID.Value;
                    //}
                    //else
                    //    rfqItem.SupplierID = null;

                    //var categoryName = Convert.ToString(worksheet.Cells[row, 3].Value ?? "");
                    //if (!string.IsNullOrWhiteSpace(categoryName))
                    //{
                    //    var category = uow.Connection.TryFirst<CategoryRow>(q => q
                    //        .Select(c.CategoryID)
                    //        .Where(c.CategoryName == categoryName));

                    //    if (category == null)
                    //    {
                    //        response.ErrorList.Add("Error On Row " + row + ": Category with name '" +
                    //            categoryName + "' is not found!");
                    //        continue;
                    //    }

                    //    rfqItem.CategoryID = category.CategoryID.Value;
                    //}
                    //else
                    //    rfqItem.CategoryID = null;

                    //rfqItem.QuantityPerUnit = Convert.ToString(worksheet.Cells[row, 4].Value ?? "");
                    //rfqItem.UnitPrice = Convert.ToDecimal(worksheet.Cells[row, 5].Value ?? 0);
                    //rfqItem.UnitsInStock = Convert.ToInt16(worksheet.Cells[row, 6].Value ?? 0);
                    //rfqItem.UnitsOnOrder = Convert.ToInt16(worksheet.Cells[row, 7].Value ?? 0);
                    //rfqItem.ReorderLevel = Convert.ToInt16(worksheet.Cells[row, 8].Value ?? 0);

                    //if (rfqItem.ProductID == null)
                    //{
                    //    new ProductRepository().Create(uow, new SaveRequest<MyRow>
                    //    {
                    //        Entity = rfqItem
                    //    });

                    //    response.Inserted = response.Inserted + 1;
                    //}
                    //else
                    //{
                    //    new ProductRepository().Update(uow, new SaveRequest<MyRow>
                    //    {
                    //        Entity = rfqItem,
                    //        EntityId = rfqItem.ProductID.Value
                    //    });

                    //    response.Updated = response.Updated + 1;
                    //}
                }
                catch (Exception ex)
                {
                    response.ErrorList.Add("Exception on Row " + row + ": " + ex.Message);
                }
            }

            return response;
        }

    }
}
