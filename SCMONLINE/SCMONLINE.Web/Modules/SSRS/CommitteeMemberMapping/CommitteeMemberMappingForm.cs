
namespace SCMONLINE.Procurement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Procurement.CommitteeMemberMapping")]
    [BasedOnRow(typeof(Entities.CommitteeMemberMappingRow), CheckNames = true)]
    public class CommitteeMemberMappingForm
    {
        public Int32 Sequence { get; set; }
        public String ProcurementTypeId { get; set; }
        public Int32 ProcValueRangeId { get; set; }
        public Int32 RoleId { get; set; }
        public Int32 CommitteeRoleId { get; set; }
        //public Boolean MandatoryRole { get; set; }
    }
}