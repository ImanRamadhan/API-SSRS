
namespace SCMONLINE.Procurement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Procurement.F8_ProcParticipant")]
    [BasedOnRow(typeof(Entities.ProcParticipantRow), CheckNames = true)]
    public class F8_ProcParticipantForm
    {
        public Int64 ProcurementId { get; set; }
        [ReadOnly(true)]
        public Int32 SequenceNo { get; set; }
        [ReadOnly(true)]
        public String VendorId { get; set; }
        public String VendorName { get; set; }


        [Updatable(false), Insertable(false)]
        [Hidden]
        public String PriceDocumentFile { get; set; }
        //public String PriceDocumentName { get; set; }
        [Updatable(false), Insertable(false)]
        [Hidden]
        public String TechSpecDocFile { get; set; }
        //public String TechSpecDocName { get; set; }
        [Updatable(false), Insertable(false)]
        [Hidden]
        public String SupportingLetterFile { get; set; }
        //public String SupportingLetterName { get; set; }
        [Updatable(false), Insertable(false)]
        [Hidden]
        public String CatalogFile { get; set; }
        //public String CatalogName { get; set; }
        //public Boolean SubmitDocTnc { get; set; }
        //public DateTime SubmitDocTncDate { get; set; }
        //public Boolean AdminDocExists { get; set; }
        //public Boolean TechSpecDocExists { get; set; }
        //public Boolean SupportingLetterExists { get; set; }
        //public Boolean CatalogExists { get; set; }
        //public String OpeningDocDesc { get; set; }
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
        public Int32 EvaluationConclusionId { get; set; }
        
        [ReadOnly(true)]
        public String ClarificationRequest { get; set; }
        public String ClarificationOffer { get; set; }
        public String ClarificationResult { get; set; }
        //public String Source { get; set; }

        //[F8_ProcParticipantItemsEditor]
        //public List<Entities.ProcParticipantItemRow> ProcParticipantItems { get; set; }
        [ReadOnly(true)]
        public DateTime F5ParticipantSubmitDate { get; set; }
        [ReadOnly(true)]
        public String F5ParticipantSubmitBy { get; set; }
        //public Decimal FinalBidPrice { get; set; }
    }
}