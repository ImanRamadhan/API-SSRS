
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/F7_TenderEvaluation"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.F7_TenderEvaluation)]
    public class F7_TenderEvaluationController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/F7_TenderEvaluation/F7_TenderEvaluationIndex.cshtml");
        }
    }
}