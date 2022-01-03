using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SCMONLINE.Procurement
{
    public partial class CommitteeMembersEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SCMONLINE.Procurement.CommitteeMembersEditor";

        public CommitteeMembersEditorAttribute()
            : base(Key)
        {
        }
    }
}

