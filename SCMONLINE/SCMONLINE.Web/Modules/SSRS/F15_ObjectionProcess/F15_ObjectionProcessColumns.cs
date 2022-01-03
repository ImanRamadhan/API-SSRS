
namespace SCMONLINE.Procurement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Procurement.F15_ObjectionProcess")]
    [BasedOnRow(typeof(Entities.ProcParticipantRow), CheckNames = true)]
    public class F15_ObjectionProcessColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [Width(150, Min = 40)]
        public Int64 ProcParticipantId { get; set; }
        //public String ProcurementProcurementTypeId { get; set; }
        //public Int32 SequenceNo { get; set; }
        [EditLink]
        [DisplayName("Item"), Width(250, Max = 400, Min = 250)]
        public String ProcurementTitle { get; set; }
        [EditLink]
        [Width(150, Min = 250)]
        public String VendorId { get; set; }
        [EditLink]
        public String PriceDocumentFile { get; set; }
        [EditLink]
        public String PriceDocumentName { get; set; }
        [EditLink]
        public String Source { get; set; }
        [EditLink]
        public DateTime F5ParticipantSubmitDate { get; set; }
        [EditLink]
        public String F5ParticipantSubmitBy { get; set; }
        [EditLink]
        [DisplayName("Final Bid Price"), Width(150, Max = 400, Min = 150)]
        public Decimal FinalBidPrice { get; set; }
        [EditLink]
        public Boolean SubmitObjection { get; set; }
        [EditLink]
        public String ObjectionDescription { get; set; }

    }
}