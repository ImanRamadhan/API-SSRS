
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
    using MyRepository = Repositories.F12_ProcAsRepository;
    using MyRow = Entities.ProcurementRow;

    [RoutePrefix("Services/Procurement/F12_ProcAs"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class F12_ProcAsController : ServiceEndpoint
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
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.F12_ProcAsColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "F12_ProcAsList_" + DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }
        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Submit(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            //request.Entity.ProcParticipant.FirstOrDefault(participant =>
            //{
            //    //Is there any clarification for some participant?
            //    if (
            //    participant.AdminDocAtk == 4
            //    || participant.CatalogAtk == 4
            //    || participant.SupportingLetterAtk == 4
            //    || participant.TechSpecDocAtk == 4
            //    || participant.EvaluationConclusionId == 3
            //    )
            //    {
            //        request.Entity.Status = "F19";
            //        return true;
            //    }
            //    return false;
            //});
            //Get Enum Value with getvalueordefault and chose what your enum value
            if (request.Entity.ProcAsApproved.GetValueOrDefault() == _Ext.ApproveTidakApprove.Approve)
            {
                request.Entity.Status = "F13";
            }
            else
            {
                request.Entity.Status = "F12-REJ";
            }
            request.Entity.ProcAsApprovedDate = DateTime.Now;
            request.Entity.F12SubmitDate = DateTime.Now;
            request.Entity.F12SubmitBy = Authorization.Username;

            return new MyRepository().Update(uow, request);
        }

    }
}
