
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/F6_ProcParticipantItem"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.F6_ProcParticipantItem)]
    public class F6_ProcParticipantItemController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/F6_ProcParticipantItem/F6_ProcParticipantItemIndex.cshtml");
        }
    }
}