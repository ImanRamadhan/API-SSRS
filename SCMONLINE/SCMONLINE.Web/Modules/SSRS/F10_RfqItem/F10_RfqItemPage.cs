
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/F10_RfqItem"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.F10_RfqItem)]
    public class F10_RfqItemController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/F10_RfqItem/F10_RfqItemIndex.cshtml");
        }
    }
}