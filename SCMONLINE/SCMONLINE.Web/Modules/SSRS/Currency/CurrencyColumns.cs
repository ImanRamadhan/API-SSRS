
namespace SCMONLINE.Procurement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Procurement.Currency")]
    [BasedOnRow(typeof(Entities.CurrencyRow), CheckNames = true)]
    public class CurrencyColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public String CurrencyId { get; set; }
        public String Name { get; set; }
        public String Description { get; set; }
    }
}