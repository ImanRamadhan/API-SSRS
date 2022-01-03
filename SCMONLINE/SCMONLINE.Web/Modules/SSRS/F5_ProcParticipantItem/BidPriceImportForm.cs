
namespace SCMONLINE.Procurement.Forms
{
    using Serenity.ComponentModel;
    using Serenity.Web;
    using System;

    [FormScript("Procurement.BidPriceImport")]
    public class BidPriceImportForm
    {
        [FileUploadEditor, Required]
        public String FileName { get; set; }
    }
}
