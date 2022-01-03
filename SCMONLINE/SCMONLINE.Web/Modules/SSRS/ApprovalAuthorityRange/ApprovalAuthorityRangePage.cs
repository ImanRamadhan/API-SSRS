
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/ApprovalAuthorityRange"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ApprovalAuthorityRangeRow))]
    public class ApprovalAuthorityRangeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/ApprovalAuthorityRange/ApprovalAuthorityRangeIndex.cshtml");
        }
    }
}