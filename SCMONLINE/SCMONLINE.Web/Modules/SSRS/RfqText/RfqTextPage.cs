
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/RfqText"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.RfqText)]
    public class RfqTextController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/RfqText/RfqTextIndex.cshtml");
        }
    }
}