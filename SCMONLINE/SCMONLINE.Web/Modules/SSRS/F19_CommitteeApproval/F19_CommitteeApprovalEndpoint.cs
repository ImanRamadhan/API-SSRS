
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
    using MyRepository = Repositories.F19_CommitteeApprovalRepository;
    using MyRow = Entities.ProcurementRow;
    using SCMONLINE.Administration.Entities;
    using SCMONLINE.Procurement.Entities;
    using System.Collections.Generic;
    using SCMONLINE.Administration.Repositories;
    using System.Linq;

    [RoutePrefix("Services/Procurement/F19_CommitteeApproval"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class F19_CommitteeApprovalController : ServiceEndpoint
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
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.F19_CommitteeApprovalColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "F19_CommitteeApprovalList_" + DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse SubmitCreate(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            request.Entity.Status = "F19";
            request.Entity.F8SubmitDate = DateTime.Now;
            request.Entity.F8SubmitBy = Authorization.Username;

            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Approve(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            request.Entity.CommitteeMember.ForEach(item =>
            {
                var userRoles = new UserRoleRepository().List(uow.Connection, new Administration.UserRoleListRequest() { UserID = Int32.Parse(Authorization.UserId) }).Entities;
                if (userRoles.Any(x => x == item.RoleId))
                {
                    item.ApprovalStatus = _Ext.ApproveTidakApprove.Approve;
                    item.ApprovalDate = DateTime.Now;
                    item.ApprovalBy = Authorization.Username;
                }
            });
            return new MyRepository().Submit(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Reject(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            request.Entity.CommitteeMember.ForEach(item =>
            {
                var userRoles = new UserRoleRepository().List(uow.Connection, new Administration.UserRoleListRequest() { UserID = Int32.Parse(Authorization.UserId) }).Entities;
                if (userRoles.Any(x => x == item.RoleId))
                {
                    item.ApprovalStatus = _Ext.ApproveTidakApprove.TidakApprove;
                    item.ApprovalDate = DateTime.Now;
                    item.ApprovalBy = Authorization.Username;
                }
            });
            return new MyRepository().SubmitReject(uow, request);
        }
    }
}
