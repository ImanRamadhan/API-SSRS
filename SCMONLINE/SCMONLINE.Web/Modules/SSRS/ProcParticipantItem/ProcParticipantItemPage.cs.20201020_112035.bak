
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/ProcParticipantItem"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.ProcParticipantItem)]
    public class ProcParticipantItemController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/ProcParticipantItem/ProcParticipantItemIndex.cshtml");
        }
    }
}