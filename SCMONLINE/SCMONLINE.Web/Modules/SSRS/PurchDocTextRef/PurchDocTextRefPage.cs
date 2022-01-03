
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/PurchDocTextRef"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.PurchDocTextRef)]
    public class PurchDocTextRefController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/PurchDocTextRef/PurchDocTextRefIndex.cshtml");
        }
    }
}