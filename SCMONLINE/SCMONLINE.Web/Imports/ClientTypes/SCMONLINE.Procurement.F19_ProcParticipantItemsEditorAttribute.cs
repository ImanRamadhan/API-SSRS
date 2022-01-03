using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SCMONLINE.Procurement
{
    public partial class F19_ProcParticipantItemsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SCMONLINE.Procurement.F19_ProcParticipantItemsEditor";

        public F19_ProcParticipantItemsEditorAttribute()
            : base(Key)
        {
        }
    }
}

