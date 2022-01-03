
namespace SCMONLINE.Procurement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Procurement.DocumentStatus")]
    [BasedOnRow(typeof(Entities.DocumentStatusRow), CheckNames = true)]
    public class DocumentStatusColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 DocumentStatusId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String Description { get; set; }
    }
}