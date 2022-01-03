
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/F8_ProcParticipant"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.F8_ProcParticipant)]
    public class F8_ProcParticipantController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/F8_ProcParticipant/F8_ProcParticipantIndex.cshtml");
        }
    }
}