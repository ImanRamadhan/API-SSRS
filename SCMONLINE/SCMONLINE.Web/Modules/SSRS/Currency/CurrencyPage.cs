
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/Currency"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.Currency)]
    public class CurrencyController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/Currency/CurrencyIndex.cshtml");
        }
    }
}