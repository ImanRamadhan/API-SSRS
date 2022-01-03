
namespace SCMONLINE.Procurement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Procurement.VendorLookupView")]
    [BasedOnRow(typeof(Entities.VendorLookupViewRow), CheckNames = true)]
    public class VendorLookupViewColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public String VendorId { get; set; }
        public String Name { get; set; }
    }
}