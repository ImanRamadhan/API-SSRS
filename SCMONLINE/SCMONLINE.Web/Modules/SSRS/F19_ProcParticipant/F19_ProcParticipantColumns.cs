
namespace SCMONLINE.Procurement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Procurement.F19_ProcParticipant")]
    [BasedOnRow(typeof(Entities.ProcParticipantRow), CheckNames = true)]
    public class F19_ProcParticipantColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 ProcParticipantId { get; set; }
        public Int32 SequenceNo { get; set; }
        public String VendorId { get; set; }
        public String VendorName { get; set; }
        [Updatable(false), Insertable(false)]
        public String PriceDocumentFile { get; set; }
        [Updatable(false), Insertable(false)]
        public String TechSpecDocFile { get; set; }
        [Updatable(false), Insertable(false)]
        public String SupportingLetterFile { get; set; }
        [Updatable(false), Insertable(false)]
        public String CatalogFile { get; set; }
        public Int32 AdminDocAtk { get; set; }
        public Int32 TechSpecDocAtk { get; set; }
        public Int32 SupportingLetterAtk { get; set; }
        public Int32 CatalogAtk { get; set; }
        public String EvaluationDesc { get; set; }
        public String ClarificationRequest { get; set; }
        public Int32 EvaluationConclusionId { get; set; }
        public DateTime F5ParticipantSubmitDate { get; set; }
        public String F5ParticipantSubmitBy { get; set; }
    }
}