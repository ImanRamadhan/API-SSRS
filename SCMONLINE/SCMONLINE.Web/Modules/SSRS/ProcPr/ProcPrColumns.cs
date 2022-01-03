
namespace SCMONLINE.Procurement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Procurement.ProcPr")]
    [BasedOnRow(typeof(Entities.ProcPrRow), CheckNames = true)]
    public class ProcPrColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int64 ProcPrId { get; set; }
        [EditLink]
        public String PrNo { get; set; }
        public DateTime InsertDate { get; set; }
        public String InsertBy { get; set; }
    }
}