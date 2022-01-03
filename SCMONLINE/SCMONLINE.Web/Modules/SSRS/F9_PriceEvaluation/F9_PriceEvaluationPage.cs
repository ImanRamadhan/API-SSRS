
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/F9_PriceEvaluation"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.F9_PriceEvaluation)]
    public class F9_PriceEvaluationController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/F9_PriceEvaluation/F9_PriceEvaluationIndex.cshtml");
        }
    }
}