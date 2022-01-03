
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/F4_Aanwijzing"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.F4_Aanwijzing)]
    public class F4_AanwijzingController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/F4_Aanwijzing/F4_AanwijzingIndex.cshtml");
        }
    }
}