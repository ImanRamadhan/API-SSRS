
namespace SCMONLINE.Procurement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Procurement.VendorRepresentative")]
    [BasedOnRow(typeof(Entities.VendorRepresentativeRow), CheckNames = true)]
    public class VendorRepresentativeForm
    {
        public String VendorId { get; set; }
        public Int32 UserId { get; set; }
    }
}