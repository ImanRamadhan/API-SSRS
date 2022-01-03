
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/ProcurementType"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.ProcurementType)]
    public class ProcurementTypeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/ProcurementType/ProcurementTypeIndex.cshtml");
        }
    }
}