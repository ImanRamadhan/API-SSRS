
namespace SCMONLINE.Procurement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Procurement.CharacteristicDescription")]
    [BasedOnRow(typeof(Entities.CharacteristicDescriptionRow), CheckNames = true)]
    public class CharacteristicDescriptionColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public String InternalChar { get; set; }
        public String Language { get; set; }
        public Int32 IntCounter { get; set; }
        public String Description { get; set; }
        public String Heading1 { get; set; }
        public String Heading2 { get; set; }
        public DateTime ValidFrom { get; set; }
        public String TechStFrom { get; set; }
        public String ChangeNumber { get; set; }
        public String DeletionInd { get; set; }
    }
}