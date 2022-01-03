
namespace SCMONLINE.Procurement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Procurement.Currency")]
    [BasedOnRow(typeof(Entities.CurrencyRow), CheckNames = true)]
    public class CurrencyForm
    {
        public String Name { get; set; }
        public String Description { get; set; }
    }
}