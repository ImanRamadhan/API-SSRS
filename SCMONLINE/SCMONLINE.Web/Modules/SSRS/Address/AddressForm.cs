
namespace SCMONLINE.Procurement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Procurement.Address")]
    [BasedOnRow(typeof(Entities.AddressRow), CheckNames = true)]
    public class AddressForm
    {
        public String Name { get; set; }
        public String Description { get; set; }
        public Int32 AddressTypeId { get; set; }
    }
}