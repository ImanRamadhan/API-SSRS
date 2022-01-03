
namespace SCMONLINE.Procurement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Procurement.EvaluationConclusion")]
    [BasedOnRow(typeof(Entities.EvaluationConclusionRow), CheckNames = true)]
    public class EvaluationConclusionForm
    {
        public String Name { get; set; }
        public String Description { get; set; }
    }
}