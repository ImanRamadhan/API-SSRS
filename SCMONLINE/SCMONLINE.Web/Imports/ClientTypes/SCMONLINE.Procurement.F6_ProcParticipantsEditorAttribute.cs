using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SCMONLINE.Procurement
{
    public partial class F6_ProcParticipantsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SCMONLINE.Procurement.F6_ProcParticipantsEditor";

        public F6_ProcParticipantsEditorAttribute()
            : base(Key)
        {
        }
    }
}

