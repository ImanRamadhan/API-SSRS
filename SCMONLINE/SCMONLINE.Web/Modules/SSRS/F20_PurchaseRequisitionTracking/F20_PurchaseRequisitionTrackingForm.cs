
namespace SCMONLINE.Procurement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Procurement.F20_PurchaseRequisitionTracking")]
    [BasedOnRow(typeof(Entities.PurchaseRequisitionRow), CheckNames = true)]
    public class F20_PurchaseRequisitionTrackingForm
    {
        [ReadOnly(true)]
        public Int32 BuyerId { get; set; }
        [ReadOnly(true)]
        public String CostCenter { get; set; }
        public String ScanPrFile { get; set; }
        public String ScanPrName { get; set; }
        [ReadOnly(true)]
        public DateTime AssignDate { get; set; }
        [ReadOnly(true)]
        public String AssignBy { get; set; }
        [ReadOnly(true)]
        public DateTime CreatedDate { get; set; }
        [ReadOnly(true)]
        public String CreatedBy { get; set; }
        [ReadOnly(true)]
        public String Status { get; set; }
        [F20_ProcPrEditor]
        public List<Entities.ProcPrRow> ProcPrItems { get; set; }
    }
}