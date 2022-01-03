
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/ContractType"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.ContractType)]
    public class ContractTypeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/ContractType/ContractTypeIndex.cshtml");
        }
    }
}