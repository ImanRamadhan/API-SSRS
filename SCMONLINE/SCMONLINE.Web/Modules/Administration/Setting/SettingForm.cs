
namespace SCMONLINE.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.Setting")]
    [BasedOnRow(typeof(Entities.SettingRow), CheckNames = true)]
    public class SettingForm
    {
        public String Value { get; set; }
        public String Description { get; set; }
    }
}