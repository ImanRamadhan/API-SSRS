
namespace SCMONLINE.Procurement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Procurement.F19_ProcParticipantItem")]
    [BasedOnRow(typeof(Entities.ProcParticipantItemRow), CheckNames = true)]
    public class F19_ProcParticipantItemColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 ProcParticipantItemId { get; set; }
        //public String ProcParticipantVendorId { get; set; }
        //public String ProcurementProcurementTypeId { get; set; }
        //public String RfqItemPurchasingDocument { get; set; }

        [EditLink]
        public String ItemSequence { get; set; }
        public String Material { get; set; }
        public String ShortText { get; set; }
        public String RfqItemPlant { get; set; }
        public String RfqItemStorageLocation { get; set; }

        public Decimal BidPrice { get; set; }
        public Decimal RfqItemTargetQuantity { get; set; }
        public String RfqItemOrderUnit { get; set; }

    }
}