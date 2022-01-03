
namespace SCMONLINE.Procurement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Procurement.EvaluationConclusion")]
    [BasedOnRow(typeof(Entities.EvaluationConclusionRow), CheckNames = true)]
    public class EvaluationConclusionColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 EvaluationConclusionId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String Description { get; set; }
    }
}