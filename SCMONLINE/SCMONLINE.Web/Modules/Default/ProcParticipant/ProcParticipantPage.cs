
namespace SCMONLINE.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/ProcParticipant"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ProcParticipantRow))]
    public class ProcParticipantController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/ProcParticipant/ProcParticipantIndex.cshtml");
        }
    }
}