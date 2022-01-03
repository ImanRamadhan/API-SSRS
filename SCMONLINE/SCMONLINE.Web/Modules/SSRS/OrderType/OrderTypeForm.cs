
namespace SCMONLINE.Procurement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Procurement.OrderType")]
    [BasedOnRow(typeof(Entities.OrderTypeRow), CheckNames = true)]
    public class OrderTypeForm
    {
        public String Name { get; set; }
        public String Description { get; set; }
    }
}