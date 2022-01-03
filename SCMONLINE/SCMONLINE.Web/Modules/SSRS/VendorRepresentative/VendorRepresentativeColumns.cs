
namespace SCMONLINE.Procurement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Procurement.VendorRepresentative")]
    [BasedOnRow(typeof(Entities.VendorRepresentativeRow), CheckNames = true)]
    public class VendorRepresentativeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 VendorRepresentativeId { get; set; }
        [EditLink]
        public String VendorId { get; set; }
        public String UserUsername { get; set; }
    }
}