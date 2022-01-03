
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/DocSubmitMethod"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.DocSubmitMethod)]
    public class DocSubmitMethodController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/DocSubmitMethod/DocSubmitMethodIndex.cshtml");
        }
    }
}