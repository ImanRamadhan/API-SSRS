
namespace SCMONLINE.Procurement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Procurement.VendorAddress")]
    [BasedOnRow(typeof(Entities.VendorAddressRow), CheckNames = true)]
    public class VendorAddressForm
    {
        public String VendorId { get; set; }
        public Int32 AddressId { get; set; }
    }
}