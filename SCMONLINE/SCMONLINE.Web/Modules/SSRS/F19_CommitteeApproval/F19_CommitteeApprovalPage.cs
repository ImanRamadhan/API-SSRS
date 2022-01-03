
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/F19_CommitteeApproval"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.F19_CommitteeApproval)]
    public class F19_CommitteeApprovalController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/F19_CommitteeApproval/F19_CommitteeApprovalIndex.cshtml");
        }
    }
}