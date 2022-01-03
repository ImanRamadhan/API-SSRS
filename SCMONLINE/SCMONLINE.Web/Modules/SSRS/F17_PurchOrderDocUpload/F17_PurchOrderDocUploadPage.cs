
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/F17_PurchOrderDocUpload"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.F17_PurchOrderDocUpload)]
    public class F17_PurchOrderDocUploadController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/F17_PurchOrderDocUpload/F17_PurchOrderDocUploadIndex.cshtml");
        }
    }
}