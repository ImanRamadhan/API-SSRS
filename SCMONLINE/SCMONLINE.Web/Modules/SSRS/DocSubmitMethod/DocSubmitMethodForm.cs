
namespace SCMONLINE.Procurement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Procurement.DocSubmitMethod")]
    [BasedOnRow(typeof(Entities.DocSubmitMethodRow), CheckNames = true)]
    public class DocSubmitMethodForm
    {
        public String Name { get; set; }
        public String Description { get; set; }
    }
}