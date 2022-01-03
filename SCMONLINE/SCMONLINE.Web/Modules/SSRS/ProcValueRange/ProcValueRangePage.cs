
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/ProcValueRange"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.ProcValueRange)]
    public class ProcValueRangeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/ProcValueRange/ProcValueRangeIndex.cshtml");
        }
    }
}