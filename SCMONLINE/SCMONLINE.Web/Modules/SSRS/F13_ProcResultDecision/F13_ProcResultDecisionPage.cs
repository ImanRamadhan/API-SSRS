
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/F13_ProcResultDecision"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.F13_ProcResultDecision)]
    public class F13_ProcResultDecisionController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/F13_ProcResultDecision/F13_ProcResultDecisionIndex.cshtml");
        }
    }
}