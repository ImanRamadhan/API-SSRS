using Microsoft.Reporting.WebForms;
using System;
using System.Configuration;
using System.Web.UI.WebControls;


namespace SCMONLINE.Procurement
{
    public static class ReportViewerControl2
    {
        public static ReportViewer GetReportViewerControl(string reportPath)
        {
            ReportViewer reportViewer = new ReportViewer();
            reportViewer.ServerReport.ReportPath = reportPath;
            reportViewer.ProcessingMode = ProcessingMode.Remote;
            reportViewer.SizeToReportContent = true;
            //reportViewer.SizeToReportContent = false;
            //reportViewer.AsyncRendering = true;
            reportViewer.Width = Unit.Percentage(100);
            reportViewer.Height = Unit.Percentage(100);
            //reportViewer.Width = Unit.Pixel(1000);
            //reportViewer.Height = Unit.Pixel(1000);
            //reportViewer.ShowBackButton = true;
            //reportViewer.ShowPrintButton = true;
            reportViewer.ServerReport.ReportServerUrl = new Uri(ConfigurationManager.AppSettings["urlSSRS"].ToString());
            reportViewer.ServerReport.ReportServerCredentials = new SSRSReportServerCredentials2();
            return reportViewer;
        }

        public static ReportViewer GetReportViewerControl2(string reportPath)
        {
            ReportViewer reportViewer = new ReportViewer();
            reportViewer.ServerReport.ReportPath = reportPath;
            reportViewer.ProcessingMode = ProcessingMode.Remote;
            reportViewer.SizeToReportContent = true;
            //reportViewer.SizeToReportContent = false;
            //reportViewer.AsyncRendering = true;
            reportViewer.Width = Unit.Percentage(100);
            reportViewer.Height = Unit.Percentage(100);
            //reportViewer.Width = Unit.Pixel(1000);
            //reportViewer.Height = Unit.Pixel(1000);
            //reportViewer.ShowBackButton = true;
            reportViewer.ShowToolBar = false;
            reportViewer.ShowExportControls = false;
            reportViewer.ShowPrintButton = true;
            reportViewer.ServerReport.ReportServerUrl = new Uri("http://ptmpdsisqlsvr02.pertamina.com/ReportServer");
            reportViewer.ServerReport.ReportServerCredentials = new SSRSReportServerCredentials2();
            return reportViewer;
        }
    }
}