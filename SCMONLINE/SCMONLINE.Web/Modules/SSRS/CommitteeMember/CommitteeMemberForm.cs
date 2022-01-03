
namespace SCMONLINE.Procurement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Procurement.CommitteeMember")]
    [BasedOnRow(typeof(Entities.CommitteeMemberRow), CheckNames = true)]
    public class CommitteeMemberForm
    {
        [Hidden]
        public Int64 ProcurementId { get; set; }
        public Int32 CommitteeRoleId { get; set; }
        public Int32 RoleId { get; set; }
        //[Hidden]
        //public Boolean MandatoryRole { get; set; }
    }
}