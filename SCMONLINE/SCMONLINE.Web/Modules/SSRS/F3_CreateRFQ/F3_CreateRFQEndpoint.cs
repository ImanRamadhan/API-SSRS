
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
    using MyRepository = Repositories.F3_CreateRFQRepository;
    using MyRow = Entities.ProcurementRow;
    using SCMONLINE.Procurement.Entities;
    using System.Web.Hosting;
    using System.Net.Mail;
    using System.IO;
    using System.Text;
    using System.Configuration;
    using Microsoft.Reporting.WebForms;

    [RoutePrefix("Services/Procurement/F3_CreateRFQ"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class F3_CreateRFQController : ServiceEndpoint
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
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.F3_CreateRFQColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "F3_CreateRFQList_" + DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }
        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Submit(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            if (request.Entity.AanwijzingExists == true)
            {
                request.Entity.Status = "F4";
            }
            else {
                request.Entity.Status = "F5";
            }
            request.Entity.F3SubmitDate = DateTime.Now;
            request.Entity.F3SubmitBy = Authorization.Username;
            //return new MyRepository().Update(uow, request);
            var dataUpdate = new MyRepository().Update(uow, request);
            return dataUpdate;
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse SendMail(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            new MyRepository().SaveNote(Int64.Parse(request.EntityId.ToStringNullSafe()), 
                                request.Entity.CollectiveNumber.ToString(), uow);
            return new SaveResponse();
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse SendMailVendor(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var a = request.Entity.DeliveryAddress.ToString();
            new MyRepository().SaveNoteVendor(Int64.Parse(request.EntityId.ToStringNullSafe()),
                                request.Entity.CollectiveNumber.ToString(),
                                request.Entity.TenderDocSubmitOpenDate.ToString(),
                                request.Entity.TenderDocSubmitCloseDate.ToString(),
                                request.Entity.Title.ToStringNullSafe(), uow);
            return new SaveResponse();
        }


        [HttpPost]
        public ProcurementRow GetRFQ(IUnitOfWork uow, RfqServiceRequest request)
        {
            return new MyRepository().GetRFQ(uow, request);
        }
    }
}
