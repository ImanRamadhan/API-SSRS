
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/F15_ObjectionProcess"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.F15_ObjectionProcess)]
    public class F15_ObjectionProcessController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/F15_ObjectionProcess/F15_ObjectionProcessIndex.cshtml");
        }
    }
}