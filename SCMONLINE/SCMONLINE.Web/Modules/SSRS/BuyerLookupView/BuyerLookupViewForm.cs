
namespace SCMONLINE.Procurement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Procurement.BuyerLookupView")]
    [BasedOnRow(typeof(Entities.BuyerLookupViewRow), CheckNames = true)]
    public class BuyerLookupViewForm
    {
        public String Name { get; set; }
        public Int32 ActivePr { get; set; }
    }
}