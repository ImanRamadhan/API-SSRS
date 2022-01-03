
namespace SCMONLINE.Procurement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Procurement.CommitteeMember")]
    [BasedOnRow(typeof(Entities.CommitteeMemberRow), CheckNames = true)]
    public class CommitteeMemberColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 CommitteeMemberId { get; set; }
        [EditLink]
        public String CommitteeRoleName { get; set; }
        [EditLink]
        [DisplayName("PDSI Role"), Width(500, Max = 650, Min = 500)]
        public String RoleRoleName { get; set; }
        //public Boolean MandatoryRole { get; set; }
    }
}