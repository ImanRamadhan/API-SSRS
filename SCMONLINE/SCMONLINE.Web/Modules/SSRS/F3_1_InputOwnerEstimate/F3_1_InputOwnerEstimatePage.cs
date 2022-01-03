
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/F3_1_InputOwnerEstimate"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.F3_1_InputOwnerEstimate)]
    public class F3_1_InputOwnerEstimateController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/F3_1_InputOwnerEstimate/F3_1_InputOwnerEstimateIndex.cshtml");
        }
    }
}