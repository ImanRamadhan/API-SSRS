
namespace SCMONLINE.Procurement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Procurement.RfqText")]
    [BasedOnRow(typeof(Entities.RfqTextRow), CheckNames = true)]
    public class RfqTextForm
    {
        [Hidden]
        public Int64 ProcurementId { get; set; }
        public String TextId { get; set; }
        [Hidden]
        public String TextForm { get; set; }
        public String TextLine { get; set; }
    }
}