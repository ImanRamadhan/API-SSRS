
namespace SCMONLINE.Procurement
{
    using Serenity.ComponentModel;
    using Serenity.Services;
    using System;
    using System.ComponentModel;

    [FormScript("Procurement.Report")]
    public class ForgotRequest : ServiceRequest
    {
        [Required(true),  DisplayName("Collective Number")]
        public String CollectiveNumber { get; set; }
    }
}