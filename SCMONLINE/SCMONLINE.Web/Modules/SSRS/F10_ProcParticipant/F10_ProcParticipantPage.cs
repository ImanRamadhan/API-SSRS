
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/F10_ProcParticipant"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ProcParticipantRow))]
    public class F10_ProcParticipantController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/F10_ProcParticipant/F10_ProcParticipantIndex.cshtml");
        }
    }
}