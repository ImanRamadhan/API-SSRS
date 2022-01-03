
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/F19_CommitteeMember"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CommitteeMemberRow))]
    public class F19_CommitteeMemberController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/F19_CommitteeMember/F19_CommitteeMemberIndex.cshtml");
        }
    }
}