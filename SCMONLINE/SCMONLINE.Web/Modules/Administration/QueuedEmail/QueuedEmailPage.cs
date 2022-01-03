
namespace SCMONLINE.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Administration/QueuedEmail"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.QueuedEmailRow))]
    public class QueuedEmailController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Administration/QueuedEmail/QueuedEmailIndex.cshtml");
        }
    }
}