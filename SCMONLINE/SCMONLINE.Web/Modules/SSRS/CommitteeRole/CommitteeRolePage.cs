
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/CommitteeRole"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.CommitteeRole)]
    public class CommitteeRoleController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/CommitteeRole/CommitteeRoleIndex.cshtml");
        }
    }
}