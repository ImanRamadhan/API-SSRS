
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/F7_ProcParticipantItem"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.F7_ProcParticipantItem)]
    public class F7_ProcParticipantItemController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/F7_ProcParticipantItem/F7_ProcParticipantItemIndex.cshtml");
        }
    }
}