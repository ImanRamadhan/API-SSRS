
namespace SCMONLINE.Procurement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Procurement.BuyerLookupView")]
    [BasedOnRow(typeof(Entities.BuyerLookupViewRow), CheckNames = true)]
    public class BuyerLookupViewColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 UserId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public Int32 ActivePr { get; set; }
    }
}