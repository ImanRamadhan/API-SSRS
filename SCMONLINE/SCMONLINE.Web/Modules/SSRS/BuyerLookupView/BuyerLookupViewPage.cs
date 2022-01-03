
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/BuyerLookupView"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.BuyerLookupViewRow))]
    public class BuyerLookupViewController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/BuyerLookupView/BuyerLookupViewIndex.cshtml");
        }
    }
}