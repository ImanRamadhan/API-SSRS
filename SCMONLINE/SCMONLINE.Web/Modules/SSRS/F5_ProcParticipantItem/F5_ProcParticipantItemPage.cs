
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/F5_ProcParticipantItem"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.F5_ProcParticipantItem)]
    public class F5_ProcParticipantItemController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/F5_ProcParticipantItem/F5_ProcParticipantItemIndex.cshtml");
        }
    }
}