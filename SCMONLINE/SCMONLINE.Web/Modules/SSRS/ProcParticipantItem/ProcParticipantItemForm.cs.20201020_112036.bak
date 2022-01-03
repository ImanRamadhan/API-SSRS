
namespace SCMONLINE.Procurement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Procurement.ProcParticipantItem")]
    [BasedOnRow(typeof(Entities.ProcParticipantItemRow), CheckNames = true)]
    public class ProcParticipantItemForm
    {
        [Hidden]
        public Int64 ProcParticipantId { get; set; }
        [Hidden]
        public Int64 ProcurementId { get; set; }
        public String VendorId { get; set; }
        public String VendorName { get; set; }
        public DateTime F5ParticipantSubmitDate { get; set; }
        public String F5ParticipantSubmitBy { get; set; }
        public Int64 RfqItemId { get; set; }
        public String ItemSequence { get; set; }
        public String Material { get; set; }
        public String ShortText { get; set; }

        public Decimal BidPrice { get; set; }
        public Decimal BidPriceVsOe { get; set; }
        public Decimal BidPriceVsOePercentage { get; set; }
        public Int32 Rank { get; set; }
        public String EvaluationDescription { get; set; }
        public Decimal NegotiationPrice { get; set; }
        public Decimal NpVsOe { get; set; }
        public Decimal NpVsOePercentage { get; set; }
        public Int32 NegotiationRank { get; set; }
        public String NegotiationDesc { get; set; }
        public Boolean ProposeDisclaimer { get; set; }
        public String DisclaimerDesc { get; set; }
        public Int32 EvaluationConclusionItemId { get; set; }
    }
}