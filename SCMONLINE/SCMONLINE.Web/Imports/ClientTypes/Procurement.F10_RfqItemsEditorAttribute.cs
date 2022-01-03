using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SCMONLINE.Procurement
{
    public partial class F10_RfqItemsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SCMONLINE.Procurement.F10_RfqItemsEditor";

        public F10_RfqItemsEditorAttribute()
            : base(Key)
        {
        }
    }
}

