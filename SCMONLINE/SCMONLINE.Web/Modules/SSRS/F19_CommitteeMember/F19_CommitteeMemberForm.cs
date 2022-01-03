
namespace SCMONLINE.Procurement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Procurement.F19_CommitteeMember")]
    [BasedOnRow(typeof(Entities.CommitteeMemberRow), CheckNames = true)]
    public class F19_CommitteeMemberForm
    {
        [ReadOnly(true)]
        public Int64 ProcurementId { get; set; }
        [ReadOnly(true)]
        public Int32 RoleId { get; set; }
        [ReadOnly(true)]
        public Int32 CommitteeRoleId { get; set; }
        //public Boolean MandatoryRole { get; set; }
        public Boolean ApprovalStatus { get; set; }
        public DateTime ApprovalDate { get; set; }
        public String ApprovalBy { get; set; }
    }
}