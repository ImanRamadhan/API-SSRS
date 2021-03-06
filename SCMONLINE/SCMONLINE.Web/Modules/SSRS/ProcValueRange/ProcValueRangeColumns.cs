
namespace SCMONLINE.Procurement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Procurement.ProcValueRange")]
    [BasedOnRow(typeof(Entities.ProcValueRangeRow), CheckNames = true)]
    public class ProcValueRangeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ProcValueRangeId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String Description { get; set; }
    }
}