
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/F10_ProcParticipantItem"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.F10_ProcParticipantItem)]
    public class F10_ProcParticipantItemController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/F10_ProcParticipantItem/F10_ProcParticipantItemIndex.cshtml");
        }
    }
}