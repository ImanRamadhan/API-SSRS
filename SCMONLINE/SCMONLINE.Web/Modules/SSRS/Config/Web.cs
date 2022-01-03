using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SCMONLINE.Modules.SSRS.Config
{
    [RoutePrefix("SSRS/Config"), Route("{action=index}")]
    public class WebController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/SSRS/ReportOther/ReportViewerIndex.cshtml");
        }

        [HttpGet]
        public ActionResult UpdateUsernameSSRS()
        {
            string usernameSSRS = Request.QueryString["usernamessrs"].ToString();
            Configuration objConfig = System.Web.Configuration.WebConfigurationManager.OpenWebConfiguration("~");
            AppSettingsSection objAppsettings = (AppSettingsSection)objConfig.GetSection("appSettings");
            //Edit
            if (objAppsettings != null)
            {
                objAppsettings.Settings["userNameSSRS"].Value = usernameSSRS;
                objConfig.Save();
            }
            return PartialView("~/Modules/SSRS/ReportOther/_ReportView.cshtml");
        }

        [HttpGet]
        public ActionResult UpdatePasswordSSRS()
        {
            string passwordSSRS = Request.QueryString["passwordssrs"].ToString();
            Configuration objConfig = System.Web.Configuration.WebConfigurationManager.OpenWebConfiguration("~");
            AppSettingsSection objAppsettings = (AppSettingsSection)objConfig.GetSection("appSettings");
            //Edit
            if (objAppsettings != null)
            {
                objAppsettings.Settings["passwordSSRS"].Value = passwordSSRS;
                objConfig.Save();
            }
            return PartialView("~/Modules/SSRS/ReportOther/_ReportView.cshtml");
        }
    }
}