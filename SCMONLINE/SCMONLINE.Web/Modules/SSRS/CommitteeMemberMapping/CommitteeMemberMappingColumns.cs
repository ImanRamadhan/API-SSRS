
namespace SCMONLINE.Procurement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Procurement.CommitteeMemberMapping")]
    [BasedOnRow(typeof(Entities.CommitteeMemberMappingRow), CheckNames = true)]
    public class CommitteeMemberMappingColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CommitteeMemberMappingId { get; set; }
        public Int32 Sequence { get; set; }
        [EditLink]
        public String ProcurementTypeName { get; set; }
        public String ProcValueRangeName { get; set; }
        public String RoleRoleName { get; set; }
        public String CommitteeRoleName { get; set; }
        //public Boolean MandatoryRole { get; set; }
    }
}