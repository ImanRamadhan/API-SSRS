
namespace SCMONLINE.Procurement.Pages
{
    using Microsoft.Reporting.WebForms;
    using Serenity;
    using Serenity.Services;
    using Serenity.Web;
    using System.Configuration;
    using System.Data;
    using System.IO;
    using System.Net.Mail;
    using System.Text;
    using System.Threading.Tasks;
    using System.Web.Hosting;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/F3_CreateRFQ"), Route("{action=index}")]
    [PageAuthorize(ProcurementPermission.F3_CreateRFQ)]
    public class F3_CreateRFQController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/F3_CreateRFQ/F3_CreateRFQIndex.cshtml");
        }

    }
}