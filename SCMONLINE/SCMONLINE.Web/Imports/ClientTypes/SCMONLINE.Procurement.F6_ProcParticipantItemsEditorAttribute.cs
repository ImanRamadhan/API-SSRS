using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SCMONLINE.Procurement
{
    public partial class F6_ProcParticipantItemsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SCMONLINE.Procurement.F6_ProcParticipantItemsEditor";

        public F6_ProcParticipantItemsEditorAttribute()
            : base(Key)
        {
        }
    }
}

