
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/F6_ProcParticipant"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.F6_ProcParticipant)]
    public class F6_ProcParticipantController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/F6_ProcParticipant/F6_ProcParticipantIndex.cshtml");
        }
    }
}