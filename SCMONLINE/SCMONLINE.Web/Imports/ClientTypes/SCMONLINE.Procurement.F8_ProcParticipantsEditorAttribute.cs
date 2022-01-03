using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SCMONLINE.Procurement
{
    public partial class F8_ProcParticipantsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SCMONLINE.Procurement.F8_ProcParticipantsEditor";

        public F8_ProcParticipantsEditorAttribute()
            : base(Key)
        {
        }
    }
}

