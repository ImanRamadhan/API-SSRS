
namespace SCMONLINE.Procurement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Procurement.F20_ProcPr")]
    [BasedOnRow(typeof(Entities.ProcPrRow), CheckNames = true)]
    public class F20_ProcPrForm
    {
        public Int64 ProcurementId { get; set; }
        public String PrNo { get; set; }
        public DateTime InsertDate { get; set; }
        public String InsertBy { get; set; }
    }
}