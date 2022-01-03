
namespace SCMONLINE.Procurement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Procurement.ApprovalAuthorityRange")]
    [BasedOnRow(typeof(Entities.ApprovalAuthorityRangeRow), CheckNames = true)]
    public class ApprovalAuthorityRangeForm
    {
        public Int32 RoleId { get; set; }
        public String ProcurementTypeId { get; set; }
        public String CurrencyId { get; set; }
        public Decimal MinValue { get; set; }
        public Decimal MaxValue { get; set; }
    }
}