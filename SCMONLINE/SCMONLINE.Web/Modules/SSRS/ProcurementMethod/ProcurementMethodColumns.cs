
namespace SCMONLINE.Procurement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Procurement.ProcurementMethod")]
    [BasedOnRow(typeof(Entities.ProcurementMethodRow), CheckNames = true)]
    public class ProcurementMethodColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public String ProcurementMethodId { get; set; }
        public String Name { get; set; }
        public String Description { get; set; }
    }
}