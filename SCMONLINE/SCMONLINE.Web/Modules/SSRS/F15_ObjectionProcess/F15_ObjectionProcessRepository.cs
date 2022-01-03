
namespace SCMONLINE.Procurement.Repositories
{
    using SCMONLINE.Procurement.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using MyRow = Entities.ProcParticipantRow;

    public class F15_ObjectionProcessRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow> { }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> {
            protected override void OnReturn()
            {
                base.OnReturn();
                var criteria = new Dictionary<string, object>();
                criteria.Add(VendorRepresentativeRow.Fields.UserId.PropertyName, Authorization.UserId);
                var ownVendorListId = new VendorRepresentativeRepository().List(this.Connection, new ListRequest { EqualityFilter = criteria });

                var ppCriteria = new Criteria(ProcParticipantRow.Fields.VendorId.PropertyName).In(ownVendorListId.Entities.Select(x=>x.VendorId));
                var ownProcParticipantList = new ProcParticipantRepository().List(this.Connection, new ListRequest { Criteria = ppCriteria });

                if (!ownProcParticipantList.Entities.Exists(x => x.ProcParticipantId == Row.ProcParticipantId))
                {
                    throw new ValidationError("AccessDenied", null, Texts.Site.AccessDenied.LackPermissions);
                }

            }
        }
        private class MyListHandler : ListRequestHandler<MyRow>
        {
            protected override void ApplyFilters(SqlQuery query)
            {
                base.ApplyFilters(query);
                var criteria = new Dictionary<string, object>();
                criteria.Add(VendorRepresentativeRow.Fields.UserId.PropertyName, Authorization.UserId);
                var ownVendorListId = new VendorRepresentativeRepository().List(this.Connection, new ListRequest { EqualityFilter = criteria });
                if (ownVendorListId.Entities.Count > 0)
                {
                    query.Where(new Criteria(fld.VendorId).In(ownVendorListId.Entities.Select(vendor => vendor.VendorId).ToList()));
                }
                else
                {
                    query.Where(new Criteria("1=2"));
                }
            }
        }
    }
}