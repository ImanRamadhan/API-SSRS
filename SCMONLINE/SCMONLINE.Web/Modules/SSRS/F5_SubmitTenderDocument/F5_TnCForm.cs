
namespace SCMONLINE.Procurement.Forms
{
    using Serenity.ComponentModel;
    using Serenity.Web;
    using System;
    using System.ComponentModel;

    [FormScript("Procurement.F5_TnC")]
    public class F5_TnCForm
    {
        [StaticTextBlock(HideLabel = true, IsHtml = true)]
        public String TnCDescription { get; set; }

        [DisplayName("Saya Mengerti & Setuju")]
        public Boolean TnCAgree { get; set; }
    }
}
