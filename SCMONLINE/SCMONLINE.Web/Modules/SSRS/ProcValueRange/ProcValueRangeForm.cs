
namespace SCMONLINE.Procurement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Procurement.ProcValueRange")]
    [BasedOnRow(typeof(Entities.ProcValueRangeRow), CheckNames = true)]
    public class ProcValueRangeForm
    {
        public String Name { get; set; }
        public String Description { get; set; }
    }
}