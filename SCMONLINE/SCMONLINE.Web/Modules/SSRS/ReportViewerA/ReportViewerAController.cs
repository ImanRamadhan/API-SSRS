using Microsoft.Reporting.WebForms;
using SCMONLINE.Modules.Procurement.ReportViewerA;
using System;
using System.Linq;
using System.Net;
using System.Security.Principal;
using System.Web.Mvc;
using System.Web.UI.WebControls;

namespace SCMONLINE.Procurement.Pages
{
    [Authorize, RoutePrefix("Procurement/ReportViewerA"), Route("{action=index}")]
    public class ReportViewerAController : Controller
    {
        public ActionResult Page()
        {
            //System.Collections.Generic.List<SCMONLINE.AuditLog> customers = null;
            //using (SCMONLINE.ReportEntityModel dc = new SCMONLINE.ReportEntityModel())
            //{
            //customers = dc.AuditLogs.OrderBy(a => a.TimeStamp).ToList();
            ReportViewer reportViewer = new ReportViewer();

            //ResetReportViewer(ProcessingMode.Remote);
            reportViewer.ProcessingMode = ProcessingMode.Remote;
            reportViewer.ServerReport.ReportServerUrl = new Uri(@"http://dbprodpdsi.pertamina.com/ReportServer/Pages/ReportViewer.aspx?");
            reportViewer.ServerReport.ReportPath = "/SO_SCM_ONLINE/R3&rs:Command=Render";

            //DataSourceCredentials dsCrendtials = new DataSourceCredentials();
            /*dsCrendtials.Name = "PDSI Report Center";
            dsCrendtials.UserId = "Hafiz";
            dsCrendtials.Password = "aksdj788723478";
            reportViewer.ServerReport.SetDataSourceCredentials(new DataSourceCredentials[] { dsCrendtials });
            */
            //reportViewer.RefreshReport();

            //reportViewer.LocalReport.DataSources.Clear();
            //ReportDataSource rdc = new ReportDataSource("DataSet1", customers);

            //reportViewer.LocalReport.DataSources.Add(rdc);


            //reportViewer.LocalReport.ReportPath += @"Reports/SampleReport.rdlc";
            reportViewer.ServerReport.ReportServerCredentials = new ReportServerCredentials("Hafiz", "aksdj788723478", "http://dbprodpdsi.pertamina.com/ReportServer/Pages/ReportViewer.aspx?");
            reportViewer.SizeToReportContent = true;
            reportViewer.ZoomMode = ZoomMode.FullPage;
            reportViewer.Width = Unit.Pixel(1600);
            reportViewer.Height = Unit.Pixel(1200);
            ViewBag.ReportViewer = reportViewer;

            reportViewer.ServerReport.Refresh();

            //}
            return View(MVC.Views.Procurement.ReportViewerA.ReportViewerIndexA);
        }

    }
}