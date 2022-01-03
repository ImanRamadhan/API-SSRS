
namespace SCMONLINE.Procurement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Procurement.PurchDocTextRef")]
    [BasedOnRow(typeof(Entities.PurchDocTextRefRow), CheckNames = true)]
    public class PurchDocTextRefColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public String TextId { get; set; }
        public String Meaning { get; set; }
    }
}