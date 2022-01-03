
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/F19_ProcParticipant"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ProcParticipantRow))]
    public class F19_ProcParticipantController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/F19_ProcParticipant/F19_ProcParticipantIndex.cshtml");
        }
    }
}