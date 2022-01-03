using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SCMONLINE.Procurement
{
    public partial class F20_ProcPrEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SCMONLINE.Procurement.F20_ProcPrEditor";

        public F20_ProcPrEditorAttribute()
            : base(Key)
        {
        }
    }
}

