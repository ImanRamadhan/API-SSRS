
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/F7_ProcParticipant"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.F7_ProcParticipant)]
    public class F7_ProcParticipantController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/F7_ProcParticipant/F7_ProcParticipantIndex.cshtml");
        }
    }
}