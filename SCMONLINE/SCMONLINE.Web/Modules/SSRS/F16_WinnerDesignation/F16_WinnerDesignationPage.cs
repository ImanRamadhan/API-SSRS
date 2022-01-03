
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/F16_WinnerDesignation"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.F16_WinnerDesignation)]
    public class F16_WinnerDesignationController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/F16_WinnerDesignation/F16_WinnerDesignationIndex.cshtml");
        }
    }
}