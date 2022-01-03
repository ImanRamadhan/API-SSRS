
namespace SCMONLINE.Procurement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using SCMONLINE.Procurement.Entities;

    [FormScript("Procurement.F9_ProcParticipantItem")]
    [BasedOnRow(typeof(Entities.ProcParticipantItemRow), CheckNames = true)]
    public class F9_ProcParticipantItemForm
    {
        [Hidden]
        public Int64 ProcParticipantItemId { get; set; }
        [Hidden]
        public Int64 ProcParticipantId { get; set; }
        public String ProcParticipantVendorId { get; set; }
        public String VendorName { get; set; }
        //public Int64 ProcurementId { get; set; }
        [DateTimeFormatter(DisplayFormat = "dd/MM/yyyy HH:mm:ss")]
        public DateTime F5ParticipantSubmitDate { get; set; }
        [ReadOnly(true)]
        public Int64 RfqItemId { get; set; }
        public String ItemSequence { get; set; }
        public String Material { get; set; }
        public String ShortText { get; set; }
        [QuickFilter]
        public Decimal BidPrice { get; set; }
        public Decimal BidPriceVsOe { get; set; }
        public Decimal BidPriceVsOePercentage { get; set; }
        public Int32 Rank { get; set; }
        public String EvaluationDescription { get; set; }
        //public Decimal NegotiationPrice { get; set; }
        //public Decimal NpVsOe { get; set; }
        //public Decimal NpVsOePercentage { get; set; }
        //public Int32 NegotiationRank { get; set; }
        //public String NegotiationDesc { get; set; }
        //public Boolean ProposeDisclaimer { get; set; }
        //public String DisclaimerDesc { get; set; }
        [LookupEditor(typeof(Lookups.F9_EvaluationConclusionItemLookup))]
        [Required]
        public Int32 EvaluationConclusionItemId { get; set; }
    }
}