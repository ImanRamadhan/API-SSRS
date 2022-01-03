using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SCMONLINE.Procurement
{
    public partial class F5_ProcParticipantItemsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SCMONLINE.Procurement.F5_ProcParticipantItemsEditor";

        public F5_ProcParticipantItemsEditorAttribute()
            : base(Key)
        {
        }
    }
}

