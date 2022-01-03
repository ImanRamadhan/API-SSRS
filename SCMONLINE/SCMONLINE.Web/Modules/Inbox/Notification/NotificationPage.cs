
namespace SCMONLINE.Inbox.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Inbox/Notification"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.NotificationRow))]
    public class NotificationController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Inbox/Notification/NotificationIndex.cshtml");
        }
    }
}