using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SCMONLINE.Procurement
{
    public partial class F19_ProcParticipantsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SCMONLINE.Procurement.F19_ProcParticipantsEditor";

        public F19_ProcParticipantsEditorAttribute()
            : base(Key)
        {
        }
    }
}

