
namespace SCMONLINE.Procurement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Procurement.ProcurementMethod")]
    [BasedOnRow(typeof(Entities.ProcurementMethodRow), CheckNames = true)]
    public class ProcurementMethodForm
    {
        public String Name { get; set; }
        public String Description { get; set; }
    }
}