
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/F13_ProcParticipant"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.F13_ProcParticipant)]
    public class F13_ProcParticipantController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/F13_ProcParticipant/F13_ProcParticipantIndex.cshtml");
        }
    }
}