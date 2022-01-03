
namespace SCMONLINE.Procurement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Procurement.RfqItemText")]
    [BasedOnRow(typeof(Entities.RfqItemTextRow), CheckNames = true)]
    public class RfqItemTextForm
    {
        public Int64 RfqItemId { get; set; }
        public String TextId { get; set; }
        public String TextForm { get; set; }
        public String TextLine { get; set; }
    }
}