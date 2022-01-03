
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/Vendor"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.Vendor)]
    public class VendorController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/Vendor/VendorIndex.cshtml");
        }
    }
}