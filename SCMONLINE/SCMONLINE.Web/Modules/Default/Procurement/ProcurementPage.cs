
namespace SCMONLINE.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Procurement"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ProcurementRow))]
    public class ProcurementController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Procurement/ProcurementIndex.cshtml");
        }
    }
}