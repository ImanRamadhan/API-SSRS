
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/RfqItem"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.RfqItem)]
    public class RfqItemController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/RfqItem/RfqItemIndex.cshtml");
        }
    }
}