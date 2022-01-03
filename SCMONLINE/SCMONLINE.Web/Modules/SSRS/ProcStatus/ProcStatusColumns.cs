
namespace SCMONLINE.Procurement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Procurement.ProcStatus")]
    [BasedOnRow(typeof(Entities.ProcStatusRow), CheckNames = true)]
    public class ProcStatusColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public String ProcStatusId { get; set; }
        public String Name { get; set; }
        public String Description { get; set; }
    }
}