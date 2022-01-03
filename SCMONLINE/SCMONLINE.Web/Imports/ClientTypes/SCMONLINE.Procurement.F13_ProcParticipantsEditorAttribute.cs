using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SCMONLINE.Procurement
{
    public partial class F13_ProcParticipantsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SCMONLINE.Procurement.F13_ProcParticipantsEditor";

        public F13_ProcParticipantsEditorAttribute()
            : base(Key)
        {
        }
    }
}

