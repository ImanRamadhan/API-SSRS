
namespace SCMONLINE.Procurement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Procurement.F5_SubmitTenderDocument")]
    [BasedOnRow(typeof(Entities.ProcParticipantRow), CheckNames = true)]
    public class F5_SubmitTenderDocumentForm
    {
        public Int64 ProcurementId { get; set; }
        public String ProcurementProcurementTypeId { get; set; }
        public String ProcurementStatus { get; set; }
        public String ProcurementCollectiveNumber { get; set; }
        public String ProcurementTitle { get; set; }
        public String ProcurementClassification { get; set; }
        public String ProcurementQualification { get; set; }
        public String DocSubmitMethodName { get; set; }


        //public Int32 SequenceNo { get; set; }
        [ReadOnly(true)]
        public String VendorId { get; set; }
        public String PriceDocumentFile { get; set; }
        //public String PriceDocumentName { get; set; }
        public String TechSpecDocFile { get; set; }
        //public String TechSpecDocName { get; set; }
        public String SupportingLetterFile { get; set; }
        //public String SupportingLetterName { get; set; }
        public String CatalogFile { get; set; }
        //public String CatalogName { get; set; }
        [Hidden]
        public Boolean SubmitDocTnc { get; set; }
        [Hidden]
        public DateTime SubmitDocTncDate { get; set; }
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

        [F5_ProcParticipantItemsEditor]
        public List<Entities.ProcParticipantItemRow> ProcParticipantItems { get; set; }
        [Hidden]
        public DateTime F5ParticipantSubmitDate { get; set; }
        [Hidden]
        public String F5ParticipantSubmitBy { get; set; }

    }
}