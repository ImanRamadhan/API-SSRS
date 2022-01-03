
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/CommitteeType"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.CommitteeType)]
    public class CommitteeTypeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/CommitteeType/CommitteeTypeIndex.cshtml");
        }
    }
}