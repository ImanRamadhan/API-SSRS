
namespace SCMONLINE.Procurement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Procurement.DocSubmitMethod")]
    [BasedOnRow(typeof(Entities.DocSubmitMethodRow), CheckNames = true)]
    public class DocSubmitMethodColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 DocSubmitMethodId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String Description { get; set; }
    }
}