using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SCMONLINE.Procurement
{
    public partial class F20_ProcurementEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SCMONLINE.Procurement.F20_ProcurementEditor";

        public F20_ProcurementEditorAttribute()
            : base(Key)
        {
        }
    }
}

