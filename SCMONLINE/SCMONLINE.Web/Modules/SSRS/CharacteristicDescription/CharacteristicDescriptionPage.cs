
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/CharacteristicDescription"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CharacteristicDescriptionRow))]
    public class CharacteristicDescriptionController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/CharacteristicDescription/CharacteristicDescriptionIndex.cshtml");
        }
    }
}