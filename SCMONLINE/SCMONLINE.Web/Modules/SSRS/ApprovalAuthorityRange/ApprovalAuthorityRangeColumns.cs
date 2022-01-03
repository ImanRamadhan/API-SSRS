
namespace SCMONLINE.Procurement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Procurement.ApprovalAuthorityRange")]
    [BasedOnRow(typeof(Entities.ApprovalAuthorityRangeRow), CheckNames = true)]
    public class ApprovalAuthorityRangeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ApprovalAuthorityRangeId { get; set; }
        public String RoleRoleName { get; set; }
        [EditLink]
        public String ProcurementTypeName { get; set; }
        public String CurrencyName { get; set; }
        public Decimal MinValue { get; set; }
        public Decimal MaxValue { get; set; }
    }
}