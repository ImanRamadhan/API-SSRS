
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/PurchaseRequisition"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.PurchaseRequisition)]
    public class PurchaseRequisitionController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/PurchaseRequisition/PurchaseRequisitionIndex.cshtml");
        }
    }
}