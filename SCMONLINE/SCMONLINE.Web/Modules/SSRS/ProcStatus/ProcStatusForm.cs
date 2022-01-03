
namespace SCMONLINE.Procurement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Procurement.ProcStatus")]
    [BasedOnRow(typeof(Entities.ProcStatusRow), CheckNames = true)]
    public class ProcStatusForm
    {
        public String Name { get; set; }
        public String Description { get; set; }
    }
}