
namespace SCMONLINE.Procurement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Procurement.PurchDocTextRef")]
    [BasedOnRow(typeof(Entities.PurchDocTextRefRow), CheckNames = true)]
    public class PurchDocTextRefForm
    {
        public String Meaning { get; set; }
    }
}