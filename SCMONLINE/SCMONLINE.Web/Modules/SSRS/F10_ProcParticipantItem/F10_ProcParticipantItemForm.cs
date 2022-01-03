
namespace SCMONLINE.Procurement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Procurement.F10_ProcParticipantItem")]
    [BasedOnRow(typeof(Entities.ProcParticipantItemRow), CheckNames = true)]
    public class F10_ProcParticipantItemForm
    {
        [ReadOnly(true)]
        public Int64 ProcParticipantId { get; set; }
        [Hidden]
        public Int64 ProcurementId { get; set; }
        [ReadOnly(true)]
        public Int64 RfqItemId { get; set; }
        public String ProcParticipantVendorId { get; set; }
        public String VendorName { get; set; }
        [ReadOnly(true)]
        public Decimal BidPrice { get; set; }
        [ReadOnly(true)]
        public Decimal BidPriceVsOe { get; set; }
        [ReadOnly(true)]
        public Decimal BidPriceVsOePercentage { get; set; }
        [ReadOnly(true)]
        public Int32 Rank { get; set; }
        public String EvaluationDescription { get; set; }
        public Decimal NegotiationPrice { get; set; }
        public Decimal NpVsOe { get; set; }
        public Decimal NpVsOePercentage { get; set; }
        public Int32 NegotiationRank { get; set; }
        public String NegotiationDesc { get; set; }
        [Hidden]
        public Boolean ProposeDisclaimer { get; set; }
        [Hidden]
        public String DisclaimerDesc { get; set; }
        [LookupEditor(typeof(Entities.EvaluationConclusionItemRow), FilterField = "EvaluationConclusionItemId", FilterValue = 1)]
        public Int32 EvaluationConclusionItemId { get; set; }
    }
}