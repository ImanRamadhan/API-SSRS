
namespace SCMONLINE.Administration.Pages
{
    using SCMONLINE.Procurement;
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Administration/Setting"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.Setting)]
    public class SettingController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Administration/Setting/SettingIndex.cshtml");
        }
    }
}