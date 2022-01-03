
namespace SCMONLINE.Procurement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Procurement.CommitteeRole")]
    [BasedOnRow(typeof(Entities.CommitteeRoleRow), CheckNames = true)]
    public class CommitteeRoleForm
    {
        public String Name { get; set; }
        public String Description { get; set; }
    }
}