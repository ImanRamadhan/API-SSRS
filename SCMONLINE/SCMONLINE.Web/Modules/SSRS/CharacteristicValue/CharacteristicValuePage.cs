
namespace SCMONLINE.Procurement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Procurement/CharacteristicValue"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CharacteristicValueRow))]
    public class CharacteristicValueController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/CharacteristicValue/CharacteristicValueIndex.cshtml");
        }
    }
}