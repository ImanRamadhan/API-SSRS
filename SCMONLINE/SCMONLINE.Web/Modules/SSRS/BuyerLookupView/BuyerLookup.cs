
namespace SCMONLINE.Procurement.Lookups
{
    using SCMONLINE.Administration.Entities;
    using SCMONLINE.Procurement.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;
    using System;

    [LookupScript("Procurement.BuyerLookup", Expiration = -1)]
    public sealed class BuyerLookup : RowLookupScript<BuyerLookupViewRow>
    {
        public BuyerLookup()
        {
            IdField = BuyerLookupViewRow.Fields.UserId.PropertyName;
            Permission = "*";
            Expiration = TimeSpan.FromDays(-1);
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query);

            //query.Select(BuyerLookupViewRow.Fields.BuyerLookupViewId);
            query.OrderBy(BuyerLookupViewRow.Fields.ActivePr);
        }
    }
}