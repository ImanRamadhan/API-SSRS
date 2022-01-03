
namespace SCMONLINE.Procurement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Procurement.CommitteeType")]
    [BasedOnRow(typeof(Entities.CommitteeTypeRow), CheckNames = true)]
    public class CommitteeTypeForm
    {
        public String Name { get; set; }
        public String Description { get; set; }
    }
}