
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
    using MyRepository = Repositories.F5_SubmitTenderDocumentRepository;
    using MyRow = Entities.ProcParticipantRow;
    using OfficeOpenXml;
    using System.IO;
    using SCMONLINE.Procurement.Entities;
    using System.Collections.Generic;
    using SCMONLINE.Modules.Common.Helpers;

    [RoutePrefix("Services/Procurement/F5_SubmitTenderDocument"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class F5_SubmitTenderDocumentController : ServiceEndpoint
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
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.F5_SubmitTenderDocumentColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "F5_SubmitTenderDocumentList_" + DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Submit(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            request.Entity.F5ParticipantSubmitDate = DateTime.Now;
            request.Entity.F5ParticipantSubmitBy = Authorization.Username;

            return new MyRepository().Update(uow, request);
        }

        [HttpPost]
        public ExcelImportResponse<ProcParticipantItemRow> BidPriceImport(IUnitOfWork uow, ExcelImportRequest request)
        {
            request.CheckNotNull();

            Check.NotNullOrWhiteSpace(request.FileName, "filename");

            UploadHelper.CheckFileNameSecurity(request.FileName);

            if (!request.FileName.StartsWith("temporary/"))
                throw new ArgumentOutOfRangeException("filename");

            ExcelPackage ep = new ExcelPackage();
            using (var fs = new FileStream(UploadHelper.DbFilePath(request.FileName), FileMode.Open, FileAccess.Read))
                ep.Load(fs);

            //var p =ProcParticipantItemRow.Fields;

            var response = new ExcelImportResponse<ProcParticipantItemRow>();
            response.ErrorList = new List<string>();
            response.ImportedData = new List<ProcParticipantItemRow>();

            var fld = ProcParticipantItemRow.Fields;

            var worksheet = ep.Workbook.Worksheets[1];
            var headers = worksheet.GetHeaderColumns();
            for (var row = 2; row <= worksheet.Dimension.End.Row; row++)
            {
                try
                {
                    var procParticipant = new ProcParticipantItemRow()
                    {
                        ItemSequence = worksheet.Cells[row, Array.IndexOf(headers, fld.ItemSequence.Title) + 1].Text,
                        BidPrice = Convert.ToDecimal(worksheet.Cells[row, Array.IndexOf(headers, fld.BidPrice.Title) + 1].Value ?? 0),
                    };

                    response.ImportedData.Add(procParticipant);
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
