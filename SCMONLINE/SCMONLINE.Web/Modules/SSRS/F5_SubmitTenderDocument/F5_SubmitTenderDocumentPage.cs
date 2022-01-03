
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/F5_SubmitTenderDocument"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.F5_SubmitTenderDocument)]
    public class F5_SubmitTenderDocumentController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/F5_SubmitTenderDocument/F5_SubmitTenderDocumentIndex.cshtml");
        }
    }
}