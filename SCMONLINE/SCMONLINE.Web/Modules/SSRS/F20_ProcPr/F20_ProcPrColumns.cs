
namespace SCMONLINE.Procurement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Procurement.F20_ProcPr")]
    [BasedOnRow(typeof(Entities.ProcPrRow), CheckNames = true)]
    public class F20_ProcPrColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 ProcPrId { get; set; }
        public String ProcurementId { get; set; }
        public String ProcurementCollectiveNumber { get; set; }
        public String ProcurementStatus { get; set; }
        [Hidden]
        [EditLink]
        public String PrNoCostCenter { get; set; }
        public DateTime InsertDate { get; set; }
        public String InsertBy { get; set; }
    }
}