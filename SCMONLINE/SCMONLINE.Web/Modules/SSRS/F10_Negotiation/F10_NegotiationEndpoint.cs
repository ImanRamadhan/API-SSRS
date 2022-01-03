
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
    using MyRepository = Repositories.F10_NegotiationRepository;
    using MyRow = Entities.ProcurementRow;
    using SCMONLINE.Procurement.Entities;
    using OfficeOpenXml;
    using System.IO;
    using System.Collections.Generic;
    using SCMONLINE.Modules.Common.Helpers;

    [RoutePrefix("Services/Procurement/F10_Negotiation"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class F10_NegotiationController : ServiceEndpoint
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
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.F10_NegotiationColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "F10_NegotiationList_" + DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Submit(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var connection = SqlConnections.NewFor<ProcParticipantRow>();
            var a = request.EntityId;
            var p = new DynamicParameters();
            p.Add("@ProcurementId", a.ToString());

            List<ProcParticipantRow> participant = (List<ProcParticipantRow>)connection.Query<ProcParticipantRow>("SP_AddFinalBidPrice", p, commandType: CommandType.StoredProcedure);
            connection.Execute("SP_AddFinalBidPrice", p, commandType: CommandType.StoredProcedure);
            request.Entity.Status = "F11";
            request.Entity.F10SubmitDate = DateTime.Now;
            request.Entity.F10SubmitBy = Authorization.Username;

            return new MyRepository().Update(uow, request);
        }


        [HttpPost]
        public ExcelImportResponse<RfqItemRow> OwnerEstimateReviewImport(IUnitOfWork uow, ExcelImportRequest request)
        {
            //Response.Write("Holla");
            //break;
            request.CheckNotNull();

            Check.NotNullOrWhiteSpace(request.FileName, "filename");

            UploadHelper.CheckFileNameSecurity(request.FileName);

            if (!request.FileName.StartsWith("temporary/"))
                throw new ArgumentOutOfRangeException("filename");

            ExcelPackage ep = new ExcelPackage();
            using (var fs = new FileStream(UploadHelper.DbFilePath(request.FileName), FileMode.Open, FileAccess.Read))
                ep.Load(fs);

            var p = RfqItemRow.Fields;

            var response = new ExcelImportResponse<RfqItemRow>();
            response.ErrorList = new List<string>();
            response.ImportedData = new List<RfqItemRow>();

            var worksheet = ep.Workbook.Worksheets[1];
            var headers = worksheet.GetHeaderColumns();
            for (var row = 2; row <= worksheet.Dimension.End.Row; row++)
            {
                try
                {
                    var rfqItemId = Convert.ToInt32(worksheet.Cells[row, Array.IndexOf(headers, "ID") + 1].Value ?? "");
                    var rfqItemSequence = Convert.ToString(worksheet.Cells[row, Array.IndexOf(headers, "Item") + 1].Value ?? "");
                    //var ownerEstimateReview = Convert.ToDecimal(worksheet.Cells[row, Array.IndexOf(headers, "Owner Estimate Review") + 1].Value ?? 0);
                    var ownerEstimateReview = Convert.ToDecimal(worksheet.Cells[row, Array.IndexOf(headers, "Kaji Ulang OE") + 1].Value ?? 0);

                    var rfqItem = new RfqItemRow
                    {
                        RfqItemId = rfqItemId,
                        Item = rfqItemSequence,
                        OwnerEstimateReview = ownerEstimateReview
                    };
                    response.ImportedData.Add(rfqItem);
                    response.Updated = response.Updated + 1;
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
