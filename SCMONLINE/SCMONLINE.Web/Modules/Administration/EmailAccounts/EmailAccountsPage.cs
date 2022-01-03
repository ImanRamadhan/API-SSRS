
namespace SCMONLINE.Administration.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Administration/EmailAccounts"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EmailAccountsRow))]
    public class EmailAccountsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Administration/EmailAccounts/EmailAccountsIndex.cshtml");
        }
    }
}