
namespace SCMONLINE.Procurement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Procurement.CommitteeRole")]
    [BasedOnRow(typeof(Entities.CommitteeRoleRow), CheckNames = true)]
    public class CommitteeRoleColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CommitteeRoleId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String Description { get; set; }
    }
}