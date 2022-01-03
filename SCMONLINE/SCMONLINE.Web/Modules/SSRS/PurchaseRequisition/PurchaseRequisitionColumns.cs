
namespace SCMONLINE.Procurement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Procurement.PurchaseRequisition")]
    [BasedOnRow(typeof(Entities.PurchaseRequisitionRow), CheckNames = true)]
    public class PurchaseRequisitionColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public String PrNo { get; set; }
        public String BuyerUsername { get; set; }
        //public String CostCenter { get; set; }
        public String ScanPrFile { get; set; }
        public String ScanPrName { get; set; }
        public DateTime AssignDate { get; set; }
        public String AssignBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public String CreatedBy { get; set; }
        public String Status { get; set; }
    }
}