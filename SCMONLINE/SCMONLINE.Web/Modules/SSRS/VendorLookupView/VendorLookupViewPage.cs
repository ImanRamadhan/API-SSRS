
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/VendorLookupView"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.VendorLookupViewRow))]
    public class VendorLookupViewController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/VendorLookupView/VendorLookupViewIndex.cshtml");
        }
    }
}