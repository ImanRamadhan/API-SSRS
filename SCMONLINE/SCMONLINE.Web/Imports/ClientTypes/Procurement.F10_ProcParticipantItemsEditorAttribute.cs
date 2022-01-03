using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SCMONLINE.Procurement
{
    public partial class F10_ProcParticipantItemsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SCMONLINE.Procurement.F10_ProcParticipantItemsEditor";

        public F10_ProcParticipantItemsEditorAttribute()
            : base(Key)
        {
        }
    }
}

