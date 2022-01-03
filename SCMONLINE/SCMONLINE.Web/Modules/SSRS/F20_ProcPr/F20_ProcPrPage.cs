
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/F20_ProcPr"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ProcPrRow))]
    public class F20_ProcPrController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/F20_ProcPr/F20_ProcPrIndex.cshtml");
        }
    }
}