
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/F9_ProcParticipantItem"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.F9_ProcParticipantItem)]
    public class F9_ProcParticipantItemController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/F9_ProcParticipantItem/F9_ProcParticipantItemIndex.cshtml");
        }
    }
}