
namespace SCMONLINE.Procurement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Procurement.OrderType")]
    [BasedOnRow(typeof(Entities.OrderTypeRow), CheckNames = true)]
    public class OrderTypeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public String OrderTypeId { get; set; }
        public String Name { get; set; }
        public String Description { get; set; }
    }
}