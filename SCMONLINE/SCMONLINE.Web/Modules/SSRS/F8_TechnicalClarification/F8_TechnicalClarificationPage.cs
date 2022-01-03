
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/F8_TechnicalClarification"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.F8_TechnicalClarification)]
    public class F8_TechnicalClarificationController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/F8_TechnicalClarification/F8_TechnicalClarificationIndex.cshtml");
        }
    }
}