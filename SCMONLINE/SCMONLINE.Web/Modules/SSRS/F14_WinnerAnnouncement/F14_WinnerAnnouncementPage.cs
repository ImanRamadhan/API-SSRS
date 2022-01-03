
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/F14_WinnerAnnouncement"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.F14_WinnerAnnouncement)]
    public class F14_WinnerAnnouncementController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/F14_WinnerAnnouncement/F14_WinnerAnnouncementIndex.cshtml");
        }
    }
}