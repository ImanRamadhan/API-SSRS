
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/RfqItemText"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.RfqItemText)]
    public class RfqItemTextController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/RfqItemText/RfqItemTextIndex.cshtml");
        }
    }
}