
namespace SCMONLINE.Procurement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Procurement.VendorAddress")]
    [BasedOnRow(typeof(Entities.VendorAddressRow), CheckNames = true)]
    public class VendorAddressColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 VendorAddressId { get; set; }
        [EditLink]
        public String VendorId { get; set; }
        public String AddressName { get; set; }
    }
}