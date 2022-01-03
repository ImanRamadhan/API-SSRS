
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/OrderType"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.OrderType)]
    public class OrderTypeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/OrderType/OrderTypeIndex.cshtml");
        }
    }
}