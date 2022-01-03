
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/Address"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.Address)]
    public class AddressController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/Address/AddressIndex.cshtml");
        }
    }
}