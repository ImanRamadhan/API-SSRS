using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SCMONLINE.Procurement
{
    public partial class PurchaseRequestsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SCMONLINE.Procurement.PurchaseRequestsEditor";

        public PurchaseRequestsEditorAttribute()
            : base(Key)
        {
        }
    }
}

