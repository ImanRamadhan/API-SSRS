
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/CommitteeMember"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.CommitteeMember)]
    public class CommitteeMemberController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/CommitteeMember/CommitteeMemberIndex.cshtml");
        }
    }
}