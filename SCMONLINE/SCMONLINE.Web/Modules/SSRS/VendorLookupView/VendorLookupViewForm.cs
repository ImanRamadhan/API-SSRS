
namespace SCMONLINE.Procurement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Procurement.VendorLookupView")]
    [BasedOnRow(typeof(Entities.VendorLookupViewRow), CheckNames = true)]
    public class VendorLookupViewForm
    {
        public String Name { get; set; }
    }
}