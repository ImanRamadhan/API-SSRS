
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/F13_RfqItem"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.F13_RfqItem)]
    public class F13_RfqItemController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/F13_RfqItem/F13_RfqItemIndex.cshtml");
        }
    }
}