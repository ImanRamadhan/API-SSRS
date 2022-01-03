
namespace SCMONLINE.Procurement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Procurement.EvaluationConclusionItem")]
    [BasedOnRow(typeof(Entities.EvaluationConclusionItemRow), CheckNames = true)]
    public class EvaluationConclusionItemForm
    {
        public String Name { get; set; }
        public String Description { get; set; }
    }
}