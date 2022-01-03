
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/F12_ProcAs"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.F12_ProcAs)]
    public class F12_ProcAsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/F12_ProcAs/F12_ProcAsIndex.cshtml");
        }
    }
}