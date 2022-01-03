
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/F2_ProcurementDocCreation"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.F2_ProcurementDocCreation)]
    public class F2_ProcurementDocCreationController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/F2_ProcurementDocCreation/F2_ProcurementDocCreationIndex.cshtml");
        }
    }
}