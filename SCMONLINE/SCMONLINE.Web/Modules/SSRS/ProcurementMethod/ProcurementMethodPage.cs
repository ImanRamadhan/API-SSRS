
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/ProcurementMethod"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.ProcurementMethod)]
    public class ProcurementMethodController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/ProcurementMethod/ProcurementMethodIndex.cshtml");
        }
    }
}