
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/AddressType"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.AddressType)]
    public class AddressTypeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/AddressType/AddressTypeIndex.cshtml");
        }
    }
}