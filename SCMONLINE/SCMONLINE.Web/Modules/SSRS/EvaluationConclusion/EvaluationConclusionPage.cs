
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/EvaluationConclusion"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.EvaluationConclusion)]
    public class EvaluationConclusionController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/EvaluationConclusion/EvaluationConclusionIndex.cshtml");
        }
    }
}