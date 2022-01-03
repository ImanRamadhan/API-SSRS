
namespace SCMONLINE.Procurement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Procurement.F19_CommitteeMember")]
    [BasedOnRow(typeof(Entities.CommitteeMemberRow), CheckNames = true)]
    public class F19_CommitteeMemberColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CommitteeMemberId { get; set; }
        //public String ProcurementProcurementTypeId { get; set; }
        [DisplayName("PDSI Role"), Width(500, Max = 650, Min = 500)]
        public String RoleRoleName { get; set; }
        [DisplayName("Committee Role"), Width(150, Max = 400, Min = 150)]
        public String CommitteeRoleName { get; set; }
        //public Boolean MandatoryRole { get; set; }
        [DisplayName("Approval Status"), Width(150, Max = 400, Min = 150)]
        public Boolean ApprovalStatus { get; set; }
        [DisplayName("Approval Date"), Width(150, Max = 400, Min = 150)]
        public DateTime ApprovalDate { get; set; }
        [EditLink]
        public String ApprovalBy { get; set; }
    }
}