
namespace SCMONLINE.Procurement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Procurement.F13_ProcParticipant")]
    [BasedOnRow(typeof(Entities.ProcParticipantRow), CheckNames = true)]
    public class F13_ProcParticipantForm
    {
        public Int64 ProcurementId { get; set; }
        [ReadOnly(true)]
        public Int32 SequenceNo { get; set; }
        [ReadOnly(true)]
        public String VendorId { get; set; }
        [Hidden]
        public String PriceDocumentFile { get; set; }
        [Hidden]
        public String PriceDocumentName { get; set; }
        [Hidden]
        public String TechSpecDocFile { get; set; }
        [Hidden]
        public String TechSpecDocName { get; set; }
        [Hidden]
        public String SupportingLetterFile { get; set; }
        [Hidden]
        public String SupportingLetterName { get; set; }
        [Hidden]
        public String CatalogFile { get; set; }
        [Hidden]
        public String CatalogName { get; set; }
        [Hidden]
        public Boolean SubmitDocTnc { get; set; }
        [Hidden]
        public DateTime SubmitDocTncDate { get; set; }
        [Hidden]
        public Boolean AdminDocExists { get; set; }
        [Hidden]
        public Boolean TechSpecDocExists { get; set; }
        [Hidden]
        public Boolean SupportingLetterExists { get; set; }
        [Hidden]
        public Boolean CatalogExists { get; set; }
        [Hidden]
        public String OpeningDocDesc { get; set; }
        [Hidden]
        public Int32 AdminDocAtk { get; set; }
        [Hidden]
        public Int32 TechSpecDocAtk { get; set; }
        [Hidden]
        public Int32 SupportingLetterAtk { get; set; }
        [Hidden]
        public Int32 CatalogAtk { get; set; }
        [Hidden]
        public String EvaluationDesc { get; set; }
        [Hidden]
        public String ClarificationRequest { get; set; }
        [Hidden]
        public Int32 EvaluationConclusionId { get; set; }
        [Hidden]
        public String ClarificationOffer { get; set; }
        [Hidden]
        public String ClarificationResult { get; set; }
        [Hidden]
        public String Source { get; set; }
        [Hidden]
        public DateTime F5ParticipantSubmitDate { get; set; }
        [Hidden]
        public String F5ParticipantSubmitBy { get; set; }
        [ReadOnly(true)]
        public Decimal FinalBidPrice { get; set; }
    }
}