
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/F20_Procurement"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ProcurementRow))]
    public class F20_ProcurementController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/F20_Procurement/F20_ProcurementIndex.cshtml");
        }
    }
}