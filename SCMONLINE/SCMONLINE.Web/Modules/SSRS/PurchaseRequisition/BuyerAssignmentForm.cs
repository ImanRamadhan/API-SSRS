
namespace SCMONLINE.Procurement.Forms
{
    using SCMONLINE.Procurement.Entities;
    using SCMONLINE.Procurement.Lookups;
    using Serenity.ComponentModel;
    using Serenity.Web;
    using System;

    [FormScript("Procurement.BuyerAssignment")]
    public class BuyerAssignmentForm
    {
        [Required]
        [LookupEditor(typeof(BuyerLookup))]
        public int BuyerId { get; set; }
    }
}
