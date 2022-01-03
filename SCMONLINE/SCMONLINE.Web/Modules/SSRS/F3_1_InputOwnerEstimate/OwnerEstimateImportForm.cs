
namespace SCMONLINE.Procurement.Forms
{
    using Serenity.ComponentModel;
    using Serenity.Web;
    using System;

    [FormScript("Procurement.OwnerEstimateImport")]
    public class OwnerEstimateImportForm
    {
        [FileUploadEditor, Required]
        public String FileName { get; set; }
    }
}
