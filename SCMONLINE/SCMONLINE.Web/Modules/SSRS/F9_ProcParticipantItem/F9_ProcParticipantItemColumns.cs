
namespace SCMONLINE.Procurement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Procurement.F9_ProcParticipantItem")]
    [BasedOnRow(typeof(Entities.ProcParticipantItemRow), CheckNames = true)]
    public class F9_ProcParticipantItemColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [Hidden]
        public String ProcParticipantVendorId { get; set; }
        [Hidden]
        [EditLink]
        public String VendorName { get; set; }
        [DateTimeFormatter(DisplayFormat = "dd/MM/yyyy HH:mm:ss")]
        [Hidden]
        public DateTime F5ParticipantSubmitDate { get; set; }
        
        [EditLink]
        [DisplayName("Item"), Width(150, Max = 400, Min = 150)]
        public Int32 ItemSequence { get; set; }
        [EditLink]
        public String ShortText { get; set; }
        [EditLink]
        [DisplayName("Material"), Width(150, Max = 400, Min = 150)]
        public String Material { get; set; }


        
        [EditLink]
        [QuickFilter]
        [DisplayName("Bid Price"), Width(150, Max = 400, Min = 150)]
        public Decimal BidPrice { get; set; }
        [EditLink]
        [DisplayName("Owner Estimate"), Width(150, Max = 400, Min = 150)]
        public Decimal RfqItemOwnerEstimate { get; set; }
        [EditLink]
        [DisplayName("Bid Price vs OE"), Width(200, Max = 400, Min = 200)]
        public Decimal BidPriceVsOe { get; set; }
        [EditLink]
        public Decimal BidPriceVsOePercentage { get; set; }
        [EditLink]
        public Int32 Rank { get; set; }
        [EditLink]
        public String EvaluationDescription { get; set; }
        //public Decimal NegotiationPrice { get; set; }
        //public Decimal NpVsOe { get; set; }
        //public Decimal NpVsOePercentage { get; set; }
        //public Int32 NegotiationRank { get; set; }
        //public String NegotiationDesc { get; set; }
        //public Boolean ProposeDisclaimer { get; set; }
        //public String DisclaimerDesc { get; set; }
        [LookupEditor(typeof(Lookups.F9_EvaluationConclusionItemLookup))]
        [EditLink]
        public String EvaluationConclusionItemName { get; set; }
    }
}