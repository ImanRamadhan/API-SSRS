
namespace SCMONLINE.Procurement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Procurement.CommitteeType")]
    [BasedOnRow(typeof(Entities.CommitteeTypeRow), CheckNames = true)]
    public class CommitteeTypeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CommitteeTypeId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String Description { get; set; }
    }
}