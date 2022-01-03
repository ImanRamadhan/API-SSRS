
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/VendorAddress"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.VendorAddress)]
    public class VendorAddressController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/VendorAddress/VendorAddressIndex.cshtml");
        }
    }
}