
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/F1_BLSelectionAdjustment"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.F1_BLSelectionAdjustment)]
    public class F1_BLSelectionAdjustmentController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/F1_BLSelectionAdjustment/F1_BLSelectionAdjustmentIndex.cshtml");
        }
    }
}