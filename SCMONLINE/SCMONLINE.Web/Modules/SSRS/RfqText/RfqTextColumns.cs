
namespace SCMONLINE.Procurement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Procurement.RfqText")]
    [BasedOnRow(typeof(Entities.RfqTextRow), CheckNames = true)]
    public class RfqTextColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 RfqTextId { get; set; }
        [DisplayName("Text"), Width(150, Max = 400, Min = 150)]
        public String TextId { get; set; }
        [EditLink]
        [DisplayName("Text Meaning"), Width(250, Max = 450, Min = 250)]
        public String TextMeaning { get; set; }
        // [Hidden]
        [DisplayName("Text Form"), Width(150, Max = 400, Min = 150)]
        public String TextForm { get; set; }
        [DisplayName("Text Line"), Width(550, Max = 700, Min = 550)]
        public String TextLine { get; set; }
    }
}