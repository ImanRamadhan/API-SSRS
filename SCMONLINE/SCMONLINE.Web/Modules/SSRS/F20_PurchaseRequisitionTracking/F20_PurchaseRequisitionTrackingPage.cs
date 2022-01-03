
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/F20_PurchaseRequisitionTracking"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.F20_PurchaseRequisitionTracking)]
    public class F20_PurchaseRequisitionTrackingController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/F20_PurchaseRequisitionTracking/F20_PurchaseRequisitionTrackingIndex.cshtml");
        }
    }
}