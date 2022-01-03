
namespace SCMONLINE.Procurement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Procurement.EvaluationConclusionItem")]
    [BasedOnRow(typeof(Entities.EvaluationConclusionItemRow), CheckNames = true)]
    public class EvaluationConclusionItemColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 EvaluationConclusionItemId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String Description { get; set; }
    }
}