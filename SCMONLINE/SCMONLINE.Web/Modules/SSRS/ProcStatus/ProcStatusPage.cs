
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/ProcStatus"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.ProcStatus)]
    public class ProcStatusController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/ProcStatus/ProcStatusIndex.cshtml");
        }
    }
}