
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/EvaluationConclusionItem"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.EvaluationConclusionItem)]
    public class EvaluationConclusionItemController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/EvaluationConclusionItem/EvaluationConclusionItemIndex.cshtml");
        }
    }
}