using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SCMONLINE.Procurement
{
    public partial class F7_ProcParticipantsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SCMONLINE.Procurement.F7_ProcParticipantsEditor";

        public F7_ProcParticipantsEditorAttribute()
            : base(Key)
        {
        }
    }
}

