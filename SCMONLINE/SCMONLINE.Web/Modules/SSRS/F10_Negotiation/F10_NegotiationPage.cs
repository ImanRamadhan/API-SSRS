
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/F10_Negotiation"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.F10_Negotiation)]
    public class F10_NegotiationController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/F10_Negotiation/F10_NegotiationIndex.cshtml");
        }
    }
}