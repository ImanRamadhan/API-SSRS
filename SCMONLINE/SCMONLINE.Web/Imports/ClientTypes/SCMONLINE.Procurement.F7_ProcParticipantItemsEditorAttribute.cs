using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SCMONLINE.Procurement
{
    public partial class F7_ProcParticipantItemsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SCMONLINE.Procurement.F7_ProcParticipantItemsEditor";

        public F7_ProcParticipantItemsEditorAttribute()
            : base(Key)
        {
        }
    }
}

