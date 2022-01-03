using Microsoft.Reporting.WebForms;
using System.Linq;
using System.Web.Mvc;
using System.Web.UI.WebControls;
namespace SCMONLINE.Report
{
    [Authorize, RoutePrefix("Procurement/TestReport"), Route("{action=index}")]
    public class ReportViewerController2 : Controller
    {
        public ActionResult Page()
        {
            System.Collections.Generic.List<SCMONLINE.AuditLog> customers = null;
            using (SCMONLINE.ReportEntityModel dc = new SCMONLINE.ReportEntityModel())
            {
                customers = dc.AuditLogs.OrderBy(a => a.TimeStamp).ToList();
                ReportViewer reportViewer = new ReportViewer();

                reportViewer.LocalReport.ReportPath = Request.MapPath(Request.ApplicationPath);

                reportViewer.LocalReport.DataSources.Clear();
                ReportDataSource rdc = new ReportDataSource("DataSet1", customers);

                reportViewer.LocalReport.DataSources.Add(rdc);

                reportViewer.ProcessingMode = ProcessingMode.Local;
                reportViewer.LocalReport.ReportPath += @"Reports/SampleReport.rdlc";
                reportViewer.SizeToReportContent = true;
                reportViewer.ZoomMode = ZoomMode.FullPage;
                reportViewer.Width = Unit.Pixel(1600);
                reportViewer.Height = Unit.Pixel(1200);
                ViewBag.ReportViewer = reportViewer;

                reportViewer.LocalReport.Refresh();
            }
            return View(MVC.Views.Report.ReportViewer.Page);
        }


    }
}