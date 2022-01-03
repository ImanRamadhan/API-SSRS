
namespace SCMONLINE.Membership.Pages
{
    using Serenity;
    using Serenity.Services;
    using System;
    using System.Web.Mvc;
    using System.Web.Security;

    // Add WCF, Adapter LOB SDK, and SAP Adapter namepaces  
    using System.ServiceModel;
   


    [RoutePrefix("Account"), Route("{action=index}")]
    public partial class AccountController : Controller
    {
        public static bool UseAdminLTELoginBox = false;

        [HttpGet]
        public ActionResult Login(string activated)
        {

            // var client = new mi_os_rfqpo.mi_os_rfqpoClient();
            // client.ClientCredentials.UserName.UserName = "osds";
            // client.ClientCredentials.UserName.Password = "pertamina";

            // var @params = new mi_os_rfqpo.dt_rfqpo_request();

            // @params.RFQPO_DETAIL = new mi_os_rfqpo.dt_rfqpo_requestRFQPO_DETAIL();
            // @params.RFQPO_DETAIL.EKORG = "2110";
            // @params.RFQPO_DETAIL.MANDT = "350";
            // @params.RFQPO_DETAIL.BUKRS = "2110";
            // @params.RFQPO_DETAIL.EBELN = new mi_os_rfqpo.dt_rfqpo_requestRFQPO_DETAILEBELN[1];
            // @params.RFQPO_DETAIL.EBELN[0] = new mi_os_rfqpo.dt_rfqpo_requestRFQPO_DETAILEBELN();
            // @params.RFQPO_DETAIL.EBELN[0].SIGN = "I";
            // @params.RFQPO_DETAIL.EBELN[0].OPTION = "EQ";
            // @params.RFQPO_DETAIL.EBELN[0].LOW = "6400000375";
            // @params.RFQPO_DETAIL.EBELN[0].HIGH = "6400000375";
            //var result = client.mi_os_rfqpo(@params);

            //var client = new mi_osReadTableMC_PXD.mi_osReadTableMCClient();
            //client.ClientCredentials.UserName.UserName = "osds";
            //client.ClientCredentials.UserName.Password = "pertamina";

            //var @params = new mi_osReadTableMC_PXD.dt_ReadTableMC_Request();

            //@params.CLIENT = "350";
            //@params.QUERY_TABLE = "ZMBIDLISTH";
            //@params.DELIMITER = "|";
            //@params.NO_DATA = "";
            //@params.ROWSKIPS = "0";
            //@params.ROWCOUNT = "10";
            //@params.OPTIONS = new mi_osReadTableMC_PXD.dt_ReadTableMC_RequestOPTIONS[1];
            //@params.OPTIONS[0] = new mi_osReadTableMC_PXD.dt_ReadTableMC_RequestOPTIONS();
            //@params.OPTIONS[0].TEXT = "EKORG EQ '1010'";
            //@params.FIELDS = new mi_osReadTableMC_PXD.dt_ReadTableMC_RequestFIELDS[1];
            //@params.FIELDS[0] = new mi_osReadTableMC_PXD.dt_ReadTableMC_RequestFIELDS();
            //@params.FIELDS[0].FIELDNAME = "BIDLISTNO";


            //var result = client.mi_osReadTableMC(@params);


            ViewData["Activated"] = activated;
            ViewData["HideLeftNavigation"] = true;

            if (UseAdminLTELoginBox)
                return View(MVC.Views.Membership.Account.AccountLogin_AdminLTE);
            else
                return View(MVC.Views.Membership.Account.AccountLogin);
        }

        [HttpGet]
        public ActionResult AccessDenied(string returnURL)
        {
            ViewData["HideLeftNavigation"] = !Authorization.IsLoggedIn;

            return View(MVC.Views.Errors.AccessDenied, (object)returnURL);
        }

        [HttpPost, JsonFilter]
        public Result<ServiceResponse> Login(LoginRequest request)
        {
            return this.ExecuteMethod(() =>
            {
                request.CheckNotNull();

                if (string.IsNullOrEmpty(request.Username))
                    throw new ArgumentNullException("username");

                var username = request.Username;
                
                if (WebSecurityHelper.Authenticate(ref username, request.Password, false))
                    return new ServiceResponse();

                throw new ValidationError("AuthenticationError", Texts.Validation.AuthenticationError);
            });
        }

        private ActionResult Error(string message)
        {
            return View(MVC.Views.Errors.ValidationError,
                new ValidationError(Texts.Validation.InvalidResetToken));
        }

        public ActionResult Signout()
        {
            Session.Abandon();
            FormsAuthentication.SignOut();
            return new RedirectResult("~/");
        }
    }
}