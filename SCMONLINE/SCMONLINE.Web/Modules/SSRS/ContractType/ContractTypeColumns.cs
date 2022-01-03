﻿
namespace SCMONLINE.Procurement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Procurement.ContractType")]
    [BasedOnRow(typeof(Entities.ContractTypeRow), CheckNames = true)]
    public class ContractTypeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ContractTypeId { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String Description { get; set; }
    }
}