
namespace SCMONLINE.Procurement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Procurement.Address")]
    [BasedOnRow(typeof(Entities.AddressRow), CheckNames = true)]
    public class AddressColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 AddressId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String Description { get; set; }
        public String AddressTypeName { get; set; }
    }
}