
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/F11_ProposeWinner"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.F11_ProposeWinner)]
    public class F11_ProposeWinnerController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/F11_ProposeWinner/F11_ProposeWinnerIndex.cshtml");
        }
    }
}