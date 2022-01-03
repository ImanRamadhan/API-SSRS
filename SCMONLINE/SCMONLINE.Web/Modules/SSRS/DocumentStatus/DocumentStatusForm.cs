
namespace SCMONLINE.Procurement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Procurement.DocumentStatus")]
    [BasedOnRow(typeof(Entities.DocumentStatusRow), CheckNames = true)]
    public class DocumentStatusForm
    {
        public String Name { get; set; }
        public String Description { get; set; }
    }
}