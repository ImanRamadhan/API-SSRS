
namespace SCMONLINE.Procurement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Procurement.F6_ProcParticipantItem")]
    [BasedOnRow(typeof(Entities.ProcParticipantItemRow), CheckNames = true)]
    public class F6_ProcParticipantItemColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int64 ProcParticipantItemId { get; set; }
        //public String ProcParticipantVendorId { get; set; }
        //public String ProcurementProcurementTypeId { get; set; }
        //public String RfqItemPurchasingDocument { get; set; }
     
        [EditLink]
        [DisplayName("Item"), Width(150, Max = 400, Min = 150)]
        public String ItemSequence { get; set; }
        public String Material { get; set; }
        public String ShortText { get; set; }
        //[DisplayName("Bid Price"), Width(250, Max = 400, Min = 250)]
        //public Decimal BidPrice { get; set; }
        [DisplayName("Order Quantity"), Width(150, Max = 400, Min = 150)]
        public Decimal RfqItemOrderQuantity { get; set; }
        //public Decimal RfqItemTargetQuantity { get; set; }
        public String RfqItemOrderUnit { get; set; }
        //public Decimal RfqItemOrderPriceUnit { get; set; }



        //public Decimal BidPriceVsOe { get; set; }
        //public Decimal BidPriceVsOePercentage { get; set; }
        //public Int32 Rank { get; set; }
        //[EditLink]
        //public String EvaluationDescription { get; set; }
        //public Decimal NegotiationPrice { get; set; }
        //public Decimal NpVsOe { get; set; }
        //public Decimal NpVsOePercentage { get; set; }
        //public Int32 NegotiationRank { get; set; }
        //public String NegotiationDesc { get; set; }
        //public Boolean ProposeDisclaimer { get; set; }
        //public String DisclaimerDesc { get; set; }
        //public String EvaluationConclusionItemName { get; set; }
    }
}