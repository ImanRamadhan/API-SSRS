
namespace SCMONLINE.Procurement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Procurement.ProcParticipantItem")]
    [BasedOnRow(typeof(Entities.ProcParticipantItemRow), CheckNames = true)]
    public class ProcParticipantItemColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 ProcParticipantItemId { get; set; }
        [Hidden]
        public String ProcParticipantVendorId { get; set; }
        [Hidden]
        public String VendorName { get; set; }
        //public String ProcurementProcurementTypeId { get; set; }
        [Hidden]
        public String RfqItemPurchasingDocument { get; set; }
        [Hidden]
        public DateTime F5ParticipantSubmitDate { get; set; }
        public String F5ParticipantSubmitBy { get; set; }
        public String ItemSequence { get; set; }
        public String Material { get; set; }
        public String ShortText { get; set; }
        public Decimal RfqItemOwnerEstimate { get; set; }
        public Decimal RfqItemOwnerEstimateReview { get; set; }
        public Decimal BidPrice { get; set; }
        public Decimal BidPriceVsOe { get; set; }
        public Decimal BidPriceVsOePercentage { get; set; }
        public Int32 Rank { get; set; }
        [EditLink]
        public String EvaluationDescription { get; set; }
        public Decimal NegotiationPrice { get; set; }
        public Decimal NpVsOe { get; set; }
        public Decimal NpVsOePercentage { get; set; }
        public Int32 NegotiationRank { get; set; }
        public String NegotiationDesc { get; set; }
        public Boolean ProposeDisclaimer { get; set; }
        public String DisclaimerDesc { get; set; }
        public String EvaluationConclusionItemName { get; set; }
    }
}