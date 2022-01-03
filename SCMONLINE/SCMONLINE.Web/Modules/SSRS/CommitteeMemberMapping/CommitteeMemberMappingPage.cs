
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/CommitteeMemberMapping"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.CommitteeMemberMapping)]
    public class CommitteeMemberMappingController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/CommitteeMemberMapping/CommitteeMemberMappingIndex.cshtml");
        }
    }
}