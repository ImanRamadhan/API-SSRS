
namespace SCMONLINE.Procurement.Forms
{
    using Serenity.ComponentModel;
    using Serenity.Web;
    using System;

    [FormScript("Procurement.OwnerEstimateReviewImport")]
    public class OwnerEstimateReviewImportForm
    {
        [FileUploadEditor, Required]
        public String FileName { get; set; }
    }
}
