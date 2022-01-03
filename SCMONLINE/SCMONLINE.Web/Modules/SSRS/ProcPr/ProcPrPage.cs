
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/ProcPr"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.ProcPr)]
    public class ProcPrController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/ProcPr/ProcPrIndex.cshtml");
        }
    }
}