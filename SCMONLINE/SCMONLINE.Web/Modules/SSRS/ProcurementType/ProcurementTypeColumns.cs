
namespace SCMONLINE.Procurement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Procurement.ProcurementType")]
    [BasedOnRow(typeof(Entities.ProcurementTypeRow), CheckNames = true)]
    public class ProcurementTypeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public String ProcurementTypeId { get; set; }
        public String Name { get; set; }
        public String Description { get; set; }
    }
}