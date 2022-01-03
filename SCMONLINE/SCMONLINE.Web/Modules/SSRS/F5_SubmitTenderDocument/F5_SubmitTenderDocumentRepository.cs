
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

    public class F5_SubmitTenderDocumentRepository
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
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow>
        {
            protected override void OnReturn()
            {
                base.OnReturn();
                if (Row.ProcurementTenderDocSubmitOpenDate != null)
                {
                    Row.ProcurementTenderDocSubmitOpenDay = Row.ProcurementTenderDocSubmitOpenDate.Value.ToString("dddd", new System.Globalization.CultureInfo("id-ID"));
                    Row.ProcurementTenderDocSubmitOpenDateOnly = Row.ProcurementTenderDocSubmitOpenDate.Value.ToString("dd MMMM yyyy", new System.Globalization.CultureInfo("id-ID"));
                    Row.ProcurementTenderDocSubmitOpenTime = Row.ProcurementTenderDocSubmitOpenDate.Value.ToString("hh:mm", new System.Globalization.CultureInfo("id-ID"));
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
                var ownVendorListId = new VendorRepresentativeRepository().List(this.Connection, new ListRequest { EqualityFilter = criteria});
                
                //query.Where(new Criteria(fld.VendorId).In(ownVendorListId.Entities.Select(vendor=>vendor.VendorId).ToList()));
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