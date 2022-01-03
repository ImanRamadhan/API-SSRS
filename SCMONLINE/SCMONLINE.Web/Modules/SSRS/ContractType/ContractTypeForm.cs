
namespace SCMONLINE.Procurement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Procurement.ContractType")]
    [BasedOnRow(typeof(Entities.ContractTypeRow), CheckNames = true)]
    public class ContractTypeForm
    {
        public String Name { get; set; }
        public String Description { get; set; }
    }
}