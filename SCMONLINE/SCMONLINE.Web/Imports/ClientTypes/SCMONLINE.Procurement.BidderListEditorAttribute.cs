using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SCMONLINE.Procurement
{
    public partial class BidderListEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SCMONLINE.Procurement.BidderListEditor";

        public BidderListEditorAttribute()
            : base(Key)
        {
        }
    }
}

