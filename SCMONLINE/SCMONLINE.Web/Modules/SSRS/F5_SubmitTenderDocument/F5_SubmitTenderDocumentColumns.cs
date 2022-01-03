
namespace SCMONLINE.Procurement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Procurement.F5_SubmitTenderDocument")]
    [BasedOnRow(typeof(Entities.ProcParticipantRow), CheckNames = true)]
    public class F5_SubmitTenderDocumentColumns
    {
        [Width(150, Min = 50)]
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 ProcParticipantId { get; set; }
        public String ProcurementProcurementTypeId { get; set; }
        //public String ProcurementTypeName { get; set; }
        public Int32 SequenceNo { get; set; }
        public Int64 ProcurementId { get; set; }
        public String ProcurementCollectiveNumber { get; set; }
        [Width(150, Min = 300)]
        public String ProcurementTitle { get; set; }
        public String ProcurementClassification { get; set; }
        public String ProcurementQualification { get; set; }
        [Width(150, Min = 450)]
        [EditLink]
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
        public DateTime F5ParticipantSubmitDate { get; set; }
        [Hidden]
        public String F5ParticipantSubmitBy { get; set; }

        //public Boolean AdminDocExists { get; set; }
        //public Boolean TechSpecDocExists { get; set; }
        //public Boolean SupportingLetterExists { get; set; }
        //public Boolean CatalogExists { get; set; }
        //public String OpeningDocDesc { get; set; }
        //public String AdminDocAtkName { get; set; }
        //public String TechSpecDocAtkName { get; set; }
        //public String SupportingLetterAtkName { get; set; }
        //public String CatalogAtkName { get; set; }
        //public String EvaluationDesc { get; set; }
        //public String ClarificationRequest { get; set; }
        //public String EvaluationConclusionName { get; set; }
        //public String ClarificationOffer { get; set; }
        //public String ClarificationResult { get; set; }
        //public String Source { get; set; }
    }
}