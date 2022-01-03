
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/VendorRepresentative"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.VendorRepresentative)]
    public class VendorRepresentativeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/VendorRepresentative/VendorRepresentativeIndex.cshtml");
        }
    }
}