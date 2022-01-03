
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
    using MyRepository = Repositories.PurchaseRequisitionRepository;
    using MyRow = Entities.PurchaseRequisitionRow;
    using System.Threading;
    using SCMONLINE.Procurement.Entities;
    using SCMONLINE.Procurement.Repositories;

    [RoutePrefix("Services/Procurement/PurchaseRequisition"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class PurchaseRequisitionController : ServiceEndpoint
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
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.PurchaseRequisitionColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "PurchaseRequisitionList_" + DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }

        public ServiceResponse AssignBuyerBulkAction(IUnitOfWork uow, AssignBuyerActionRequest request)
        {
            request.CheckNotNull();

            //var random = new Random();

            // fail randomly with 3 percent chance
            //if (random.Next(100) < 3)
            //    throw new ValidationError("Failed randomly!");
            var prRepo = new MyRepository();
            foreach (var PrNo in request.PrNo)
            {
                var sr = new SaveRequest<MyRow>();
                sr.Entity = new MyRow();
                sr.EntityId = sr.Entity.PrNo = PrNo;
                sr.Entity.BuyerId = request.BuyerId;
                sr.Entity.BuyerInsertDate = DateTime.Now;
                sr.Entity.BuyerInsertUserId = Int32.Parse(Authorization.UserId);
                sr.Entity.AssignDate= DateTime.Now;
                sr.Entity.AssignBy = Authorization.Username;

                prRepo.Update(uow, sr);
                //Thread.Sleep(random.Next(400) + 100);
            }

            return new ServiceResponse();
        }

    }
}
