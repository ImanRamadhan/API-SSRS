﻿
namespace SCMONLINE.Procurement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Procurement.F13_ProcParticipant")]
    [BasedOnRow(typeof(Entities.ProcParticipantRow), CheckNames = true)]
    public class F13_ProcParticipantColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int64 ProcParticipantId { get; set; }
        //public String ProcurementProcurementTypeId { get; set; }
        [EditLink]
        public String VendorId { get; set; }
        public String VendorName { get; set; }
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
        //public DateTime F5ParticipantSubmitDate { get; set; }
        //public String F5ParticipantSubmitBy { get; set; }
        [DisplayName("Final Bid Price"), Width(200, Max = 400, Min = 200)]
        public Decimal FinalBidPrice { get; set; }
        [DisplayName("Rank"), Width(100, Max = 400, Min = 1500)]
        public Int32 SequenceNo { get; set; }
    }
}