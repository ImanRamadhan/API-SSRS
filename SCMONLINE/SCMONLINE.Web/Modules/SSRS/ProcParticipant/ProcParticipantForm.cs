
namespace SCMONLINE.Procurement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Procurement.ProcParticipant")]
    [BasedOnRow(typeof(Entities.ProcParticipantRow), CheckNames = true)]
    public class ProcParticipantForm
    {
        [Hidden]
        public Int64 ProcurementId { get; set; }
        [Hidden]
        public Int32 SequenceNo { get; set; }
        public String VendorId { get; set; }
        public String VendorName { get; set; }
        public String VendorPenaltyCode { get; set; }
        public String Qualification { get; set; }
        //public Boolean Invitation { get; set; }
        //public String PriceDocumentFile { get; set; }
        //public String PriceDocumentName { get; set; }
        //public String TechSpecDocFile { get; set; }
        //public String TechSpecDocName { get; set; }
        //public String SupportingLetterFile { get; set; }
        //public String SupportingLetterName { get; set; }
        //public String CatalogFile { get; set; }
        //public String CatalogName { get; set; }
        //public Boolean SubmitDocTnc { get; set; }
        //public DateTime SubmitDocTncDate { get; set; }
        //public Boolean AdminDocExists { get; set; }
        //public Boolean TechSpecDocExists { get; set; }
        //public Boolean SupportingLetterExists { get; set; }
        //public Boolean CatalogExists { get; set; }
        //public String OpeningDocDesc { get; set; }
        //public Int32 AdminDocAtk { get; set; }
        //public Int32 TechSpecDocAtk { get; set; }
        //public Int32 SupportingLetterAtk { get; set; }
        //public Int32 CatalogAtk { get; set; }
        //public String EvaluationDesc { get; set; }
        //public String ClarificationRequest { get; set; }
        //public Int32 EvaluationConclusionId { get; set; }
        //public String ClarificationOffer { get; set; }
        //public String ClarificationResult { get; set; }
        //public String Source { get; set; }
        //public DateTime F5ParticipantSubmitDate { get; set; }
        //public String F5ParticipantSubmitBy { get; set; }
        //public Decimal FinalBidPrice { get; set; }
    }
}