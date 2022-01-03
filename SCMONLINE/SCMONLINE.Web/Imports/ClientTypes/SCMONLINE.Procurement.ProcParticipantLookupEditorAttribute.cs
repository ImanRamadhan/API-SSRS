using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SCMONLINE.Procurement
{
    public partial class ProcParticipantLookupEditorAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "SCMONLINE.Procurement.ProcParticipantLookupEditor";

        public ProcParticipantLookupEditorAttribute()
            : base(Key)
        {
        }

        public String Name
        {
            get { return GetOption<String>("name"); }
            set { SetOption("name", value); }
        }

        public String PenaltyCode
        {
            get { return GetOption<String>("penaltyCode"); }
            set { SetOption("penaltyCode", value); }
        }

        public String VendorId
        {
            get { return GetOption<String>("vendorId"); }
            set { SetOption("vendorId", value); }
        }
    }
}

