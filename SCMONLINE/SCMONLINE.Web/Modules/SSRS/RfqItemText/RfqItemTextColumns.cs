
namespace SCMONLINE.Procurement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Procurement.RfqItemText")]
    [BasedOnRow(typeof(Entities.RfqItemTextRow), CheckNames = true)]
    public class RfqItemTextColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 RfqItemTextId { get; set; }
        public String RfqItemPurchasingDocument { get; set; }
        [EditLink]
        public String TextId { get; set; }
        public String TextForm { get; set; }
        public String TextLine { get; set; }
    }
}