
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/F19_ProcParticipantItem"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ProcParticipantItemRow))]
    public class F19_ProcParticipantItemController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/F19_ProcParticipantItem/F19_ProcParticipantItemIndex.cshtml");
        }
    }
}