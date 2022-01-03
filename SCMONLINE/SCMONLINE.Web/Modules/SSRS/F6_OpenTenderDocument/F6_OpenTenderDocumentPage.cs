
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/F6_OpenTenderDocument"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.F6_OpenTenderDocument)]
    public class F6_OpenTenderDocumentController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/F6_OpenTenderDocument/F6_OpenTenderDocumentIndex.cshtml");
        }
    }
}