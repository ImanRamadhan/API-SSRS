
namespace SCMONLINE.Procurement.Lookups
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class F9_EvaluationConclusionItemLookup : RowLookupScript<Entities.EvaluationConclusionItemRow>
    {
        public F9_EvaluationConclusionItemLookup()
        {
            //IdField = TextField = "Name";
        }
        
        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.EvaluationConclusionItemRow.Fields;
            query
                .Select(fld.EvaluationConclusionItemId, fld.Name)
                .Where(
                    new Criteria(fld.EvaluationConclusionItemId) != 1);// &
                    //new Criteria(fld.Country).IsNotNull());
        }

        protected override void ApplyOrder(SqlQuery query)
        {
            //var fld = Entities.CommitteeMemberRow.Fields;
        }
    }
}