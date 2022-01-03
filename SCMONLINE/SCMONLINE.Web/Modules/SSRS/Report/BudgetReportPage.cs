namespace SCMONLINE.Procurement.Pages
{
    using Microsoft.Reporting.WebForms;
    using SCMONLINE.Modules.Procurement.ReportViewerA;
    using Serenity;
    using Serenity.Web;
    using Serenity.Services;
    using Serenity.Data;
    using System.Web.Mvc;
    using System;
    using System.Net;
    using ReportViewerForMvc;
    using System.Web.UI.WebControls;
    using SCMONLINE.Procurement;
    using SCMONLINE.Procurement.Entities;
    using System.Configuration;

    [RoutePrefix("Procurement/Report"), Route("{action=index}")]
    [PageAuthorize("?")]
    public class BudgetReportController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Procurement/Report/ReportViewerIndex.cshtml");
        }

        public ActionResult ReportR1()
        {
            //ReportViewer rptViewer = ReportViewerControl.GetReportViewerControl("/ReportServer/Pages/ReportViewer.aspx?/SO_SCM_ONLINE/R1&rs:Command=Render");
            ReportViewer rptViewer = ReportViewerControl.GetReportViewerControl("/SO_SCM_ONLINE/R1");
            if (ConfigurationManager.AppSettings["Environment"] != null) { 
                if (ConfigurationManager.AppSettings["Environment"].ToString() == "Development")
                {
                    rptViewer = ReportViewerControl.GetReportViewerControl("/SO_SCM_ONLINE/R1_DEV");
                }
            }

            string ID = Request.QueryString["ProcurementId"].ToString();
            ReportParameter rParams = new ReportParameter("ProcurementId", ID);
            rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams });
            rptViewer.ShowParameterPrompts = false;
            ViewBag.ReportViewer = rptViewer;
            ViewBag.Title = "Report R1";
            return PartialView("~/Modules/Procurement/Report/_ReportView.cshtml");
        }
        [HttpGet]
        public ActionResult ReportR3()
        {
            ReportViewer rptViewer = ReportViewerControl.GetReportViewerControl("/SO_SCM_ONLINE/R3");
            string ID = Request.QueryString["ProcurementId"].ToString(); 
            ReportParameter rParams = new ReportParameter("ProcurementId", ID);
            rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams });
            rptViewer.ShowParameterPrompts = false;
            ViewBag.ReportViewer = rptViewer;
            ViewBag.Title = "Report R3";
            return PartialView("~/Modules/Procurement/Report/_ReportView.cshtml");
        }

        /*[HttpPost, JsonFilter]
        public Result<ServiceResponse> ForgotPassword(ForgotRequest request)
        {
            return this.UseConnection("Default", connection =>
            {
                request.CheckNotNull();

                //if (string.IsNullOrEmpty(request.CollectiveNumber))
                  //  throw new ArgumentNullException("Collective Number");

                var user = connection.TryFirst<ProcurementRow>(ProcurementRow.Fields.CollectiveNumber == request.CollectiveNumber);
                
                return new ServiceResponse();
            });
        }*/

        public ActionResult ReportR4()
        {
            ReportViewer rptViewer = ReportViewerControl.GetReportViewerControl("/SO_SCM_ONLINE/R4");
            string ID = Request.QueryString["ProcurementId"].ToString(); 
            ReportParameter rParams = new ReportParameter("ProcurementId", ID);
            rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams });
            rptViewer.ShowParameterPrompts = false;
            ViewBag.ReportViewer = rptViewer;
            ViewBag.Title = "Report R4";
            return PartialView("~/Modules/Procurement/Report/_ReportView.cshtml");
        }

        public ActionResult ReportR5()
        {
            ReportViewer rptViewer = ReportViewerControl.GetReportViewerControl("/SO_SCM_ONLINE/R5");
            string ID = Request.QueryString["ProcurementId"].ToString(); 
            ReportParameter rParams = new ReportParameter("ProcurementId", ID);
            rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams });
            rptViewer.ShowParameterPrompts = false;
            ViewBag.ReportViewer = rptViewer;
            ViewBag.Title = "Report R5";
            return PartialView("~/Modules/Procurement/Report/_ReportView.cshtml");
        }

        public ActionResult ReportR6()
        {
            ReportViewer rptViewer = ReportViewerControl.GetReportViewerControl("/SO_SCM_ONLINE/R6");
            string ID = Request.QueryString["ProcurementId"].ToString(); 
            ReportParameter rParams = new ReportParameter("ProcurementId", ID);
            rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams });
            rptViewer.ShowParameterPrompts = false;
            ViewBag.ReportViewer = rptViewer;
            ViewBag.Title = "Report R6";
            return PartialView("~/Modules/Procurement/Report/_ReportView.cshtml");
        }

        public ActionResult ReportR7()
        {
            ReportViewer rptViewer = ReportViewerControl.GetReportViewerControl("/SO_SCM_ONLINE/R7");
            string ID = Request.QueryString["ProcurementId"].ToString(); 
            ReportParameter rParams = new ReportParameter("ProcurementId", ID);
            rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams });
            rptViewer.ShowParameterPrompts = false;
            ViewBag.ReportViewer = rptViewer;
            ViewBag.Title = "Report R7";
            return PartialView("~/Modules/Procurement/Report/_ReportView.cshtml");
        }

        public ActionResult EVALUASI_HARGA()
        {
            ReportViewer rptViewer = ReportViewerControl.GetReportViewerControl("/SO_SCM_ONLINE/Evaluasi_Penawaran_Harga_Negosiasi");
            string ID = Request.QueryString["ProcurementId"].ToString();
            ReportParameter rParams = new ReportParameter("ProcurementId", ID);
            rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams });
            rptViewer.ShowParameterPrompts = false;
            ViewBag.ReportViewer = rptViewer;
            ViewBag.Title = "Report Evaluasi Penawaran Harga Negosiasi";
            return PartialView("~/Modules/Procurement/Report/_ReportView.cshtml");
        }
    }
}