
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/DocumentStatus"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.DocumentStatus)]
    public class DocumentStatusController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/DocumentStatus/DocumentStatusIndex.cshtml");
        }
    }
}