
namespace SCMONLINE.Procurement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Procurement.F6_ProcParticipantItem")]
    [BasedOnRow(typeof(Entities.ProcParticipantItemRow), CheckNames = true)]
    public class F6_ProcParticipantItemForm
    {
        [Updatable(false), Insertable(false)]
        public Int64 ProcParticipantItemId { get; set; }
        [Updatable(false), Insertable(false)]
        public String ItemSequence { get; set; }
        [Updatable(false), Insertable(false)]
        public String Material { get; set; }
        [Updatable(false), Insertable(false)]
        public String ShortText { get; set; }
        //[Updatable(false), Insertable(false)]
        //public Decimal BidPrice { get; set; }
        [Updatable(false), Insertable(false)]
        public Decimal RfqItemTargetQuantity { get; set; }
        [Updatable(false), Insertable(false)]
        public String RfqItemOrderUnit { get; set; }
        [Hidden]
        public Int32 ProcurementDocSubmitMethodId { get; set; }


        //public Int64 ProcParticipantId { get; set; }
        //public Int64 ProcurementId { get; set; }
        //public Int64 RfqItemId { get; set; }
        //public String ProcParticipantVendorId { get; set; }
        //public String VendorName { get; set; }
        //public String ItemSequence { get; set; }
        //public String ShortText { get; set; }
        //public String Material { get; set; }
        //public Decimal RfqItemTargetQuantity { get; set; }
        //public String RfqItemOrderUnit { get; set; }
        //public Decimal RfqItemOrderPriceUnit { get; set; }


        //public Decimal BidPrice { get; set; }
        //public Decimal BidPriceVsOe { get; set; }
        //public Decimal BidPriceVsOePercentage { get; set; }
        //public Int32 Rank { get; set; }
        //public String EvaluationDescription { get; set; }
        //public Decimal NegotiationPrice { get; set; }
        //public Decimal NpVsOe { get; set; }
        //public Decimal NpVsOePercentage { get; set; }
        //public Int32 NegotiationRank { get; set; }
        //public String NegotiationDesc { get; set; }
        //public Boolean ProposeDisclaimer { get; set; }
        //public String DisclaimerDesc { get; set; }
        //public Int32 EvaluationConclusionItemId { get; set; }
    }
}