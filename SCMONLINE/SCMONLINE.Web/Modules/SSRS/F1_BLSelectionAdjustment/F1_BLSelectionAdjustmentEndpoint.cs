
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
    using MyRepository = Repositories.F1_BLSelectionAdjustmentRepository;
    using MyRow = Entities.ProcurementRow;
    using SSRS.mi_osReadTableMC_PXD;
    using System.Collections.Generic;
    using SCMONLINE.Modules._Ext.Utils;
    using SCMONLINE.Procurement.Entities;
    using System.Linq;
    using SCMONLINE.Procurement.Repositories;
    using System.Globalization;

    [RoutePrefix("Services/Procurement/F1_BLSelectionAdjustment"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class F1_BLSelectionAdjustmentController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            //Initial Flow
            if (string.IsNullOrWhiteSpace(request.Entity.Status))
            {
                request.Entity.Status = "F1";
            }
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
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.F1_BLSelectionAdjustmentColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "F1_BLSelectionAdjustmentList_" + DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }

        [HttpPost]
        public ProcurementRow GetBidderListHeader(IDbConnection connection, BidderListServiceRequest request)
        {
            return new MyRepository().GetBidderListHeader(connection, request);
        }


        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse SubmitCreate(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            //if (request.Entity.CommitteeMember == "test" && request.Entity.ApprovedBy == "test") {

            //}
            request.Entity.Status = "F2";
            request.Entity.F1SubmitDate = DateTime.Now;
            request.Entity.F1SubmitBy = Authorization.Username;

            return new MyRepository().Update(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse SubmitUpdate(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            request.Entity.Status = "F2";
            request.Entity.F1SubmitDate = DateTime.Now;
            request.Entity.F1SubmitBy = Authorization.Username;

            return new MyRepository().Update(uow, request);
        }

    }
}
