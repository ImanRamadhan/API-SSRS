
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/Procurement"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.Procurement)]
    public class ProcurementController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/Procurement/ProcurementIndex.cshtml");
        }
    }
}