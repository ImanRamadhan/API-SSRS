
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/ProcParticipant"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.ProcParticipant)]
    public class ProcParticipantController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/ProcParticipant/ProcParticipantIndex.cshtml");
        }
    }
}