
namespace SCMONLINE.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.Setting")]
    [BasedOnRow(typeof(Entities.SettingRow), CheckNames = true)]
    public class SettingColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId")]
        [Width(150, Max = 400, Min = 150)]
        public String Name { get; set; }
        [Width(450, Max = 650, Min = 450)]
        public String Value { get; set; }
        [Width(200, Max = 400, Min = 200)]
        public String Description { get; set; }
    }
}