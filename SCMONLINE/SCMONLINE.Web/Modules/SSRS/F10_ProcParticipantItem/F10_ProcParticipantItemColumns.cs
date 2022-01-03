
namespace SCMONLINE.Procurement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Procurement.F10_ProcParticipantItem")]
    [BasedOnRow(typeof(Entities.ProcParticipantItemRow), CheckNames = true)]
    public class F10_ProcParticipantItemColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 ProcParticipantItemId { get; set; }
        public String ProcParticipantVendorId { get; set; }
        [Hidden]
        public String ProcurementProcurementTypeId { get; set; }
        [Hidden]
        public String RfqItemPurchasingDocument { get; set; }
        public String RfqItemStorageLocation { get; set; }
        public String RfqItemPlant { get; set; }
        public String RfqItemOwnerEstimateReview { get; set; }
        //[Hidden]
        public Decimal NegotiationPrice { get; set; }
        //[Hidden]
        public Decimal NpVsOe { get; set; }
        //[Hidden]
        public Decimal NpVsOePercentage { get; set; }
        //[Hidden]
        public Int32 NegotiationRank { get; set; }
        //[Hidden]
        public String NegotiationDesc { get; set; }
        [DisplayName("Owner Estimate"), Width(150, Max = 400, Min = 150)]
        public Decimal RfqItemOwnerEstimate { get; set; }
        [DisplayName("Bid Price"), Width(150, Max = 400, Min = 150)]
        public Decimal BidPrice { get; set; }
        public Decimal BidPriceVsOe { get; set; }
        public Decimal BidPriceVsOePercentage { get; set; }
        public Int32 Rank { get; set; }
        [EditLink]
        public String EvaluationDescription { get; set; }
        
        [Hidden]
        public Boolean ProposeDisclaimer { get; set; }
        [Hidden]
        public String DisclaimerDesc { get; set; }
        public String EvaluationConclusionItemName { get; set; }
    }
}