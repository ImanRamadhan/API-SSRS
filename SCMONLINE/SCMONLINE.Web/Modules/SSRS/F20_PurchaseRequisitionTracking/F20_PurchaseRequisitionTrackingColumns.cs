
namespace SCMONLINE.Procurement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Procurement.F20_PurchaseRequisitionTracking")]
    [BasedOnRow(typeof(Entities.PurchaseRequisitionRow), CheckNames = true)]
    public class F20_PurchaseRequisitionTrackingColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public String PrNo { get; set; }
        public String BuyerUsername { get; set; }
        public String CostCenter { get; set; }
        [Hidden]
        public String ScanPrFile { get; set; }
        [Hidden]
        public String ScanPrName { get; set; }
        public DateTime AssignDate { get; set; }
        public String AssignBy { get; set; }
        [Hidden]
        public DateTime CreatedDate { get; set; }
        [Hidden]
        public String CreatedBy { get; set; }
        public String Status { get; set; }
    }
}