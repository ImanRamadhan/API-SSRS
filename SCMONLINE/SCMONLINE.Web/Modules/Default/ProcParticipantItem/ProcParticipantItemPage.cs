
namespace SCMONLINE.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/ProcParticipantItem"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ProcParticipantItemRow))]
    public class ProcParticipantItemController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/ProcParticipantItem/ProcParticipantItemIndex.cshtml");
        }
    }
}