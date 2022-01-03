using Microsoft.Reporting.WebForms;
using SCMONLINE.Procurement;
using Serenity.Web;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Mvc;

namespace SCMONLINE.Modules.SSRS.ReportOther
{
    [RoutePrefix("SSRS/ReportOther"), Route("{action=index}")]
    public class ReportRandomController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/SSRS/ReportOther/ReportViewerIndex.cshtml");
        }

        [HttpGet]
        public ActionResult ReportTest()
        {
            ReportViewer rptViewer = ReportViewerControl.GetReportViewerControl("/LTC/test");
            //string ID = Request.QueryString["ProcurementId"].ToString();
            //ReportParameter rParams = new ReportParameter("ProcurementId", ID);
            //rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams });
            //rptViewer.ShowParameterPrompts = false;
            ViewBag.ReportViewer = rptViewer;
            ViewBag.Title = "Report Test";
            return PartialView("~/Modules/SSRS/ReportOther/_ReportView.cshtml");
        }

        [HttpGet]
        public ActionResult LTCReportLHPB()
        {
            ReportViewer rptViewer = ReportViewerControl2.GetReportViewerControl("/LTC/LHPB");
            string ID = Request.QueryString["reqID"].ToString();
            ReportParameter rParams = new ReportParameter("reqID", ID);
            rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams });
            rptViewer.ShowParameterPrompts = false;
            ViewBag.ReportViewer = rptViewer;
            ViewBag.Title = "Report LTC LHPB";
            return PartialView("~/Modules/SSRS/ReportOther/_ReportView.cshtml");
        }

        [HttpGet]
        public ActionResult LTCReportBASTB()
        {
            ReportViewer rptViewer = ReportViewerControl2.GetReportViewerControl("/LTC/BASTB");
            string ID = Request.QueryString["reqID"].ToString();
            ReportParameter rParams = new ReportParameter("reqID", ID);
            rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams });
            rptViewer.ShowParameterPrompts = false;
            ViewBag.ReportViewer = rptViewer;
            ViewBag.Title = "Report LTC BASTB";
            return PartialView("~/Modules/SSRS/ReportOther/_ReportView.cshtml");
        }

        [HttpGet]
        public ActionResult LTCReportSP3()
        {
            ReportViewer rptViewer = ReportViewerControl2.GetReportViewerControl("/LTC/SP3");
            string ID = Request.QueryString["reqID"].ToString();
            ReportParameter rParams = new ReportParameter("reqID", ID);
            rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams });
            rptViewer.ShowParameterPrompts = false;
            ViewBag.ReportViewer = rptViewer;
            ViewBag.Title = "Report LTC SP3";
            return PartialView("~/Modules/SSRS/ReportOther/_ReportView.cshtml");
        }

        [HttpGet]
        public ActionResult LTCReportDENDA()
        {
            ReportViewer rptViewer = ReportViewerControl2.GetReportViewerControl("/LTC/Denda");
            string ID = Request.QueryString["reqID"].ToString();
            ReportParameter rParams = new ReportParameter("reqID", ID);
            rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams });
            rptViewer.ShowParameterPrompts = false;
            ViewBag.ReportViewer = rptViewer;
            ViewBag.Title = "Report LTC Denda";
            return PartialView("~/Modules/SSRS/ReportOther/_ReportView.cshtml");
        }

        [HttpGet]
        public ActionResult LTCReportLHPBDev()
        {
            ReportViewer rptViewer = ReportViewerControl.GetReportViewerControl("/LTC/LHPB_DEV");
            string ID = Request.QueryString["reqID"].ToString();
            ReportParameter rParams = new ReportParameter("reqID", ID);
            rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams });
            rptViewer.ShowParameterPrompts = false;
            ViewBag.ReportViewer = rptViewer;
            ViewBag.Title = "Report LTC LHPB Dev";
            return PartialView("~/Modules/SSRS/ReportOther/_ReportView.cshtml");
        }

        [HttpGet]
        public ActionResult LTCReportBASTBDev()
        {
            ReportViewer rptViewer = ReportViewerControl.GetReportViewerControl("/LTC/BASTB_DEV");
            string ID = Request.QueryString["reqID"].ToString();
            ReportParameter rParams = new ReportParameter("reqID", ID);
            rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams });
            rptViewer.ShowParameterPrompts = false;
            ViewBag.ReportViewer = rptViewer;
            ViewBag.Title = "Report LTC BASTB Dev";
            return PartialView("~/Modules/SSRS/ReportOther/_ReportView.cshtml");
        }

        [HttpGet]
        public ActionResult LTCReportSP3Dev()
        {
            ReportViewer rptViewer = ReportViewerControl.GetReportViewerControl("/LTC/SP3_DEV");
            string ID = Request.QueryString["reqID"].ToString();
            ReportParameter rParams = new ReportParameter("reqID", ID);
            rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams });
            rptViewer.ShowParameterPrompts = false;
            ViewBag.ReportViewer = rptViewer;
            ViewBag.Title = "Report LTC SP3 Dev";
            return PartialView("~/Modules/SSRS/ReportOther/_ReportView.cshtml");
        }

        [HttpGet]
        public ActionResult LTCReportDENDADev()
        {
            ReportViewer rptViewer = ReportViewerControl.GetReportViewerControl("/LTC/Denda_DEV");
            string ID = Request.QueryString["reqID"].ToString();
            ReportParameter rParams = new ReportParameter("reqID", ID);
            rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams });
            rptViewer.ShowParameterPrompts = false;
            ViewBag.ReportViewer = rptViewer;
            ViewBag.Title = "Report LTC Denda Dev";
            return PartialView("~/Modules/SSRS/ReportOther/_ReportView.cshtml");
        }

        [HttpGet]
        public ActionResult LTCReportAllR1Dev()
        {
            ReportViewer rptViewer = ReportViewerControl.GetReportViewerControl("/LTC/Report_ALLR1_DEV");
            rptViewer.ShowParameterPrompts = false;
            ViewBag.ReportViewer = rptViewer;
            ViewBag.Title = "Report LTC Summary Transaction Dev";
            return PartialView("~/Modules/SSRS/ReportOther/_ReportView.cshtml");
        }

        [HttpGet]
        public ActionResult LTCReportR1Dev()
        {
            ReportViewer rptViewer = ReportViewerControl.GetReportViewerControl("/LTC/Report_R1_DEV");
            string ReqStatus = Request.QueryString["ReqStatus"].ToString();
            ReportParameter rParams = new ReportParameter("ReqStatus", ReqStatus);
            rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams });
            rptViewer.ShowParameterPrompts = false;
            ViewBag.ReportViewer = rptViewer;
            ViewBag.Title = "Report LTC Summary Transaction Dev";
            return PartialView("~/Modules/SSRS/ReportOther/_ReportView.cshtml");
        }

        [HttpGet]
        public ActionResult LTCReportAllR1()
        {
            ReportViewer rptViewer = ReportViewerControl2.GetReportViewerControl("/LTC/Report_ALLR1");
            rptViewer.ShowParameterPrompts = false;
            ViewBag.ReportViewer = rptViewer;
            ViewBag.Title = "Report LTC Summary Transaction";
            return PartialView("~/Modules/SSRS/ReportOther/_ReportView.cshtml");
        }

        [HttpGet]
        public ActionResult LTCReportR1()
        {
            ReportViewer rptViewer = ReportViewerControl2.GetReportViewerControl("/LTC/Report_R1");
            string ReqStatus = Request.QueryString["ReqStatus"].ToString();
            ReportParameter rParams = new ReportParameter("ReqStatus", ReqStatus);
            rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams });
            rptViewer.ShowParameterPrompts = false;
            ViewBag.ReportViewer = rptViewer;
            ViewBag.Title = "Report LTC Summary Transaction";
            return PartialView("~/Modules/SSRS/ReportOther/_ReportView.cshtml");
        }

        [HttpGet]
        public ActionResult DigitalAttendanceReport()
        {
            ReportViewer rptViewer = ReportViewerControl2.GetReportViewerControl("/DigitalAttendance/DigitalAbsensi");
            string Username = Request.QueryString["username"].ToString();
            string From = Request.QueryString["from"].ToString();
            string To = Request.QueryString["to"].ToString();
            ReportParameter rParams = new ReportParameter("username", Username);
            ReportParameter rParams2 = new ReportParameter("from", From);
            ReportParameter rParams3 = new ReportParameter("to", To);
            rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams, rParams2, rParams3 });
            rptViewer.ShowParameterPrompts = false;
            ViewBag.ReportViewer = rptViewer;
            ViewBag.Title = "Report Digital Attendance";
            return PartialView("~/Modules/SSRS/ReportOther/_ReportView.cshtml");
        }

        [HttpGet]
        public ActionResult BiodataPekerjaPDSI()
        {
            ReportViewer rptViewer = null;
            string Filter = Request.QueryString["type"].ToString();
            string Param = Request.QueryString["var"].ToString();

            if (Filter == "direktorat")
            {
                rptViewer = ReportViewerControl2.GetReportViewerControl("/ABSENSI_COVID_19/Biodata_Pekerja_filter_direktorat");
                ReportParameter rParams = new ReportParameter("param", Param);
                rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams });
            }
            else if (Filter == "fungsi")
            {
                rptViewer = ReportViewerControl2.GetReportViewerControl("/ABSENSI_COVID_19/Biodata_Pekerja_filter_fungsi");
                ReportParameter rParams = new ReportParameter("param", Param);
                rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams });
            }
            else if (Filter == "departemen")
            {
                rptViewer = ReportViewerControl2.GetReportViewerControl("/ABSENSI_COVID_19/Biodata_Pekerja_filter_departemen");
                ReportParameter rParams = new ReportParameter("param", Param);
                rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams });
            }
            else
            {
                rptViewer = ReportViewerControl2.GetReportViewerControl("/ABSENSI_COVID_19/Biodata_Pekerja");
            }

            rptViewer.ServerReport.Timeout = Int32.MaxValue;
            rptViewer.ProcessingMode = ProcessingMode.Remote;
            rptViewer.ShowParameterPrompts = false;
            ViewBag.ReportViewer = rptViewer;
            ViewBag.Title = "Report Absensi Digital & Survei Covid-19";
            return PartialView("~/Modules/SSRS/ReportOther/_ReportView.cshtml");
        }

        public ActionResult AbsensiPekerjaPDSI()
        {
            ReportViewer rptViewer = null;
            string Filter = Request.QueryString["type"].ToString();
            string Param = Request.QueryString["var"].ToString();
            string StartReport = Request.QueryString["datestart"].ToString();
            string EndReport = Request.QueryString["dateend"].ToString();
            string CutOffTime = Request.QueryString["time"].ToString();

            string TimeReport = DateTime.Now.ToString("HH:mm:ss");
            if (CutOffTime == "-")
            {
                if (EndReport != DateTime.Now.ToString("yyyy-MM-dd"))
                {
                    TimeReport = "23:59:59";
                }
            }
            else
            {
                TimeReport = CutOffTime + ":00";
            }

            StartReport = StartReport + " 00:00:00";
            EndReport = EndReport + " " + TimeReport;
            
            if (Filter == "direktorat")
            {
                rptViewer = ReportViewerControl2.GetReportViewerControl("/ABSENSI_COVID_19/Absensi_Pekerja_filter_direktorat");
                ReportParameter rParams = new ReportParameter("startReport", StartReport);
                ReportParameter rParams2 = new ReportParameter("endReport", EndReport);
                ReportParameter rParams3 = new ReportParameter("param", Param);
                rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams, rParams2, rParams3 });
            }
            else if (Filter == "fungsi")
            {
                rptViewer = ReportViewerControl2.GetReportViewerControl("/ABSENSI_COVID_19/Absensi_Pekerja_filter_fungsi");
                ReportParameter rParams = new ReportParameter("startReport", StartReport);
                ReportParameter rParams2 = new ReportParameter("endReport", EndReport);
                ReportParameter rParams3 = new ReportParameter("param", Param);
                rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams, rParams2, rParams3 });
            }
            else if (Filter == "departemen")
            {
                rptViewer = ReportViewerControl2.GetReportViewerControl("/ABSENSI_COVID_19/Absensi_Pekerja_filter_departemen");
                ReportParameter rParams = new ReportParameter("startReport", StartReport);
                ReportParameter rParams2 = new ReportParameter("endReport", EndReport);
                ReportParameter rParams3 = new ReportParameter("param", Param);
                rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams, rParams2, rParams3 });
            }
            else
            {
                rptViewer = ReportViewerControl2.GetReportViewerControl("/ABSENSI_COVID_19/Absensi_Pekerja");
                ReportParameter rParams = new ReportParameter("startReport", StartReport);
                ReportParameter rParams2 = new ReportParameter("endReport", EndReport);
                rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams, rParams2 });
            }

            rptViewer.ShowParameterPrompts = false;
            ViewBag.ReportViewer = rptViewer;
            ViewBag.Title = "Report Absensi Digital & Survei Covid-19";
            return PartialView("~/Modules/SSRS/ReportOther/_ReportView.cshtml");
        }

        public ActionResult CovidPekerjaPDSI()
        {
            ReportViewer rptViewer = null;
            string Filter = Request.QueryString["type"].ToString();
            string Param = Request.QueryString["var"].ToString();
            string StartReport = Request.QueryString["datestart"].ToString();
            string EndReport = Request.QueryString["dateend"].ToString();
            string CutOffTime = Request.QueryString["time"].ToString();

            string TimeReport = DateTime.Now.ToString("HH:mm:ss");
            if (CutOffTime == "-")
            {
                if (EndReport != DateTime.Now.ToString("yyyy-MM-dd"))
                {
                    TimeReport = "23:59:59";
                }
            }
            else
            {
                TimeReport = CutOffTime + ":00";
            }

            StartReport = StartReport + " 00:00:00";
            EndReport = EndReport + " " + TimeReport;

            if (Filter == "direktorat")
            {
                rptViewer = ReportViewerControl2.GetReportViewerControl("/ABSENSI_COVID_19/Covid_Pekerja_filter_direktorat");
                ReportParameter rParams = new ReportParameter("startReport", StartReport);
                ReportParameter rParams2 = new ReportParameter("endReport", EndReport);
                ReportParameter rParams3 = new ReportParameter("param", Param);
                rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams, rParams2, rParams3 });
            }
            else if (Filter == "fungsi")
            {
                rptViewer = ReportViewerControl2.GetReportViewerControl("/ABSENSI_COVID_19/Covid_Pekerja_filter_fungsi");
                ReportParameter rParams = new ReportParameter("startReport", StartReport);
                ReportParameter rParams2 = new ReportParameter("endReport", EndReport);
                ReportParameter rParams3 = new ReportParameter("param", Param);
                rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams, rParams2, rParams3 });
            }
            else if (Filter == "departemen")
            {
                rptViewer = ReportViewerControl2.GetReportViewerControl("/ABSENSI_COVID_19/Covid_Pekerja_filter_departemen");
                ReportParameter rParams = new ReportParameter("startReport", StartReport);
                ReportParameter rParams2 = new ReportParameter("endReport", EndReport);
                ReportParameter rParams3 = new ReportParameter("param", Param);
                rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams, rParams2, rParams3 });
            }
            else
            {
                rptViewer = ReportViewerControl2.GetReportViewerControl("/ABSENSI_COVID_19/Covid_Pekerja");
                ReportParameter rParams = new ReportParameter("startReport", StartReport);
                ReportParameter rParams2 = new ReportParameter("endReport", EndReport);
                rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams, rParams2 });
            }

            rptViewer.ShowParameterPrompts = false;
            ViewBag.ReportViewer = rptViewer;
            ViewBag.Title = "Report Absensi Digital & Survei Covid-19";
            return PartialView("~/Modules/SSRS/ReportOther/_ReportView.cshtml");
        }

        public ActionResult TidakAbsensiPekerjaPDSI()
        {
            ReportViewer rptViewer = null;
            string Filter = Request.QueryString["type"].ToString();
            string Param = Request.QueryString["var"].ToString();
            string StartReport = Request.QueryString["datestart"].ToString();
            string EndReport = Request.QueryString["dateend"].ToString();
            string CutOffTime = Request.QueryString["time"].ToString();

            string TimeReport = DateTime.Now.ToString("HH:mm:ss");
            if (CutOffTime == "-")
            {
                if (EndReport != DateTime.Now.ToString("yyyy-MM-dd"))
                {
                    TimeReport = "23:59:59";
                }
            }
            else
            {
                TimeReport = CutOffTime + ":00";
            }

            StartReport = StartReport + " 00:00:00";
            EndReport = EndReport + " " + TimeReport;

            if (Filter == "direktorat")
            {
                rptViewer = ReportViewerControl2.GetReportViewerControl("/ABSENSI_COVID_19/Data_Pekerja_tidak_Absen_filter_direktorat");
                ReportParameter rParams = new ReportParameter("startReport", StartReport);
                ReportParameter rParams2 = new ReportParameter("endReport", EndReport);
                ReportParameter rParams3 = new ReportParameter("param", Param);
                rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams, rParams3, rParams2 });
            }
            else if (Filter == "fungsi")
            {
                rptViewer = ReportViewerControl2.GetReportViewerControl("/ABSENSI_COVID_19/Data_Pekerja_tidak_Absen_filter_fungsi");
                ReportParameter rParams = new ReportParameter("startReport", StartReport);
                ReportParameter rParams2 = new ReportParameter("endReport", EndReport);
                ReportParameter rParams3 = new ReportParameter("param", Param);
                rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams, rParams3, rParams2 });
            }
            else if (Filter == "departemen")
            {
                rptViewer = ReportViewerControl2.GetReportViewerControl("/ABSENSI_COVID_19/Data_Pekerja_tidak_Absen_filter_departemen");
                ReportParameter rParams = new ReportParameter("startReport", StartReport);
                ReportParameter rParams2 = new ReportParameter("endReport", EndReport);
                ReportParameter rParams3 = new ReportParameter("param", Param);
                rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams, rParams3, rParams2 });
            }
            else
            {
                rptViewer = ReportViewerControl2.GetReportViewerControl("/ABSENSI_COVID_19/Data_Pekerja_tidak_Absen");
                ReportParameter rParams = new ReportParameter("startReport", StartReport);
                ReportParameter rParams2 = new ReportParameter("endReport", EndReport);
                rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams, rParams2 });
            }

            rptViewer.ShowParameterPrompts = false;
            ViewBag.ReportViewer = rptViewer;
            ViewBag.Title = "Report Absensi Digital & Survei Covid-19";
            return PartialView("~/Modules/SSRS/ReportOther/_ReportView.cshtml");
        }

        public ActionResult TidakAbsensiPekerjaTKJP()
        {
            ReportViewer rptViewer = null;
            string Filter = Request.QueryString["type"].ToString();
            string Param = Request.QueryString["var"].ToString();
            string StartReport = Request.QueryString["datestart"].ToString();
            string EndReport = Request.QueryString["dateend"].ToString();
            string CutOffTime = Request.QueryString["time"].ToString();

            string TimeReport = DateTime.Now.ToString("HH:mm:ss");
            if (CutOffTime == "-")
            {
                if (EndReport != DateTime.Now.ToString("yyyy-MM-dd"))
                {
                    TimeReport = "23:59:59";
                }
            }
            else
            {
                TimeReport = CutOffTime + ":00";
            }

            StartReport = StartReport + " 00:00:00";
            EndReport = EndReport + " " + TimeReport;

            if (Filter == "direktorat")
            {
                rptViewer = ReportViewerControl2.GetReportViewerControl("/ABSENSI_COVID_19/Data_Pekerja_tidak_Absen_tkjp_filter_direktorat");
                ReportParameter rParams = new ReportParameter("startReport", StartReport);
                ReportParameter rParams2 = new ReportParameter("endReport", EndReport);
                ReportParameter rParams3 = new ReportParameter("param", Param);
                rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams, rParams3, rParams2 });
            }
            else if (Filter == "fungsi")
            {
                rptViewer = ReportViewerControl2.GetReportViewerControl("/ABSENSI_COVID_19/Data_Pekerja_tidak_Absen_tkjp_filter_fungsi");
                ReportParameter rParams = new ReportParameter("startReport", StartReport);
                ReportParameter rParams2 = new ReportParameter("endReport", EndReport);
                ReportParameter rParams3 = new ReportParameter("param", Param);
                rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams, rParams3, rParams2 });
            }
            else if (Filter == "departemen")
            {
                rptViewer = ReportViewerControl2.GetReportViewerControl("/ABSENSI_COVID_19/Data_Pekerja_tidak_Absen_tkjp_filter_departemen");
                ReportParameter rParams = new ReportParameter("startReport", StartReport);
                ReportParameter rParams2 = new ReportParameter("endReport", EndReport);
                ReportParameter rParams3 = new ReportParameter("param", Param);
                rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams, rParams3, rParams2 });
            }
            else
            {
                rptViewer = ReportViewerControl2.GetReportViewerControl("/ABSENSI_COVID_19/Data_Pekerja_tidak_Absen_tkjp");
                ReportParameter rParams = new ReportParameter("startReport", StartReport);
                ReportParameter rParams2 = new ReportParameter("endReport", EndReport);
                rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams, rParams2 });
            }

            rptViewer.ShowParameterPrompts = false;
            ViewBag.ReportViewer = rptViewer;
            ViewBag.Title = "Report Absensi Digital & Survei Covid-19";
            return PartialView("~/Modules/SSRS/ReportOther/_ReportView.cshtml");
        }

        public ActionResult TidakAbsensiPekerjaTKJPDev()
        {
            ReportViewer rptViewer = null;
            string Filter = Request.QueryString["type"].ToString();
            string Param = Request.QueryString["var"].ToString();
            string StartReport = Request.QueryString["datestart"].ToString();
            string EndReport = Request.QueryString["dateend"].ToString();
            string CutOffTime = Request.QueryString["time"].ToString();

            string TimeReport = DateTime.Now.ToString("HH:mm:ss");
            if (CutOffTime == "-")
            {
                if (EndReport != DateTime.Now.ToString("yyyy-MM-dd"))
                {
                    TimeReport = "23:59:59";
                }
            }
            else
            {
                TimeReport = CutOffTime + ":00";
            }

            StartReport = StartReport + " 00:00:00";
            EndReport = EndReport + " " + TimeReport;

            if (Filter == "direktorat")
            {
                rptViewer = ReportViewerControl.GetReportViewerControl("/ABSENSI_COVID_19/Data_Pekerja_tidak_Absen_tkjp_filter_direktorat");
                ReportParameter rParams = new ReportParameter("startReport", StartReport);
                ReportParameter rParams2 = new ReportParameter("endReport", EndReport);
                ReportParameter rParams3 = new ReportParameter("param", Param);
                rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams, rParams3, rParams2 });
            }
            else if (Filter == "fungsi")
            {
                rptViewer = ReportViewerControl.GetReportViewerControl("/ABSENSI_COVID_19/Data_Pekerja_tidak_Absen_tkjp_filter_fungsi");
                ReportParameter rParams = new ReportParameter("startReport", StartReport);
                ReportParameter rParams2 = new ReportParameter("endReport", EndReport);
                ReportParameter rParams3 = new ReportParameter("param", Param);
                rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams, rParams3, rParams2 });
            }
            else if (Filter == "departemen")
            {
                rptViewer = ReportViewerControl.GetReportViewerControl("/ABSENSI_COVID_19/Data_Pekerja_tidak_Absen_tkjp_filter_departemen");
                ReportParameter rParams = new ReportParameter("startReport", StartReport);
                ReportParameter rParams2 = new ReportParameter("endReport", EndReport);
                ReportParameter rParams3 = new ReportParameter("param", Param);
                rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams, rParams3, rParams2 });
            }
            else
            {
                rptViewer = ReportViewerControl.GetReportViewerControl("/ABSENSI_COVID_19/Data_Pekerja_tidak_Absen_tkjp");
                ReportParameter rParams = new ReportParameter("startReport", StartReport);
                ReportParameter rParams2 = new ReportParameter("endReport", EndReport);
                rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams, rParams2 });
            }

            rptViewer.ShowParameterPrompts = false;
            ViewBag.ReportViewer = rptViewer;
            ViewBag.Title = "Report Absensi Digital & Survei Covid-19";
            return PartialView("~/Modules/SSRS/ReportOther/_ReportView.cshtml");
        }

        public ActionResult StatusSurveyCovidPekerja()
        {
            ReportViewer rptViewer = null;
            string Status = Request.QueryString["var"].ToString();
            string StartReport = Request.QueryString["datestart"].ToString();
            string EndReport = Request.QueryString["dateend"].ToString();
            string CutOffTime = Request.QueryString["time"].ToString();

            string TimeReport = DateTime.Now.ToString("HH:mm:ss");
            if (CutOffTime == "-")
            {
                if (EndReport != DateTime.Now.ToString("yyyy-MM-dd"))
                {
                    TimeReport = "23:59:59";
                }
            }
            else
            {
                TimeReport = CutOffTime + ":00";
            }

            StartReport = StartReport + " 00:00:00";
            EndReport = EndReport + " " + TimeReport;

            rptViewer = ReportViewerControl2.GetReportViewerControl("/ABSENSI_COVID_19/Status_Aman_ODP_PDP_Covid");
            ReportParameter rParams = new ReportParameter("startReport", StartReport);
            ReportParameter rParams2 = new ReportParameter("endReport", EndReport);
            ReportParameter rParams3 = new ReportParameter("status", Status);
            rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams, rParams2, rParams3 });
            
            rptViewer.ShowParameterPrompts = false;
            ViewBag.ReportViewer = rptViewer;
            ViewBag.Title = "Report Absensi Digital & Survei Covid-19";
            return PartialView("~/Modules/SSRS/ReportOther/_ReportView.cshtml");
        }

        public ActionResult AbsensiCovidMixedPekerjaPDSI()
        {
            ReportViewer rptViewer = null;
            string Filter = Request.QueryString["type"].ToString();
            string Param = Request.QueryString["var"].ToString();
            string StartReport = Request.QueryString["datestart"].ToString();
            string EndReport = Request.QueryString["dateend"].ToString();
            string CutOffTime = Request.QueryString["time"].ToString();

            string TimeReport = DateTime.Now.ToString("HH:mm:ss");
            if (CutOffTime == "-")
            {
                if (EndReport != DateTime.Now.ToString("yyyy-MM-dd"))
                {
                    TimeReport = "23:59:59";
                }
            }
            else
            {
                TimeReport = CutOffTime + ":00";
            }

            StartReport = StartReport + " 00:00:00";
            EndReport = EndReport + " " + TimeReport;

            if (Filter == "direktorat")
            {
                rptViewer = ReportViewerControl2.GetReportViewerControl("/ABSENSI_COVID_19/Absensi_Covid_filter_direktorat");
                ReportParameter rParams = new ReportParameter("startReport", StartReport);
                ReportParameter rParams2 = new ReportParameter("endReport", EndReport);
                ReportParameter rParams3 = new ReportParameter("param", Param);
                rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams, rParams2, rParams3 });
            }
            else if (Filter == "fungsi")
            {
                rptViewer = ReportViewerControl2.GetReportViewerControl("/ABSENSI_COVID_19/Absensi_Covid_filter_fungsi");
                ReportParameter rParams = new ReportParameter("startReport", StartReport);
                ReportParameter rParams2 = new ReportParameter("endReport", EndReport);
                ReportParameter rParams3 = new ReportParameter("param", Param);
                rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams, rParams2, rParams3 });
            }
            else if (Filter == "departemen")
            {
                rptViewer = ReportViewerControl2.GetReportViewerControl("/ABSENSI_COVID_19/Absensi_Covid_filter_departemen");
                ReportParameter rParams = new ReportParameter("startReport", StartReport);
                ReportParameter rParams2 = new ReportParameter("endReport", EndReport);
                ReportParameter rParams3 = new ReportParameter("param", Param);
                rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams, rParams2, rParams3 });
            }
            else
            {
                rptViewer = ReportViewerControl2.GetReportViewerControl("/ABSENSI_COVID_19/Absensi_Covid");
                ReportParameter rParams = new ReportParameter("startReport", StartReport);
                ReportParameter rParams2 = new ReportParameter("endReport", EndReport);
                rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams, rParams2 });
            }

            rptViewer.ShowParameterPrompts = false;
            ViewBag.ReportViewer = rptViewer;
            ViewBag.Title = "Report Absensi Digital & Survei Covid-19";
            return PartialView("~/Modules/SSRS/ReportOther/_ReportView.cshtml");
        }

        [HttpGet]
        public ActionResult SuratKeteranganKerjaSK()
        {
            ReportViewer rptViewer = ReportViewerControl2.GetReportViewerControl2("/SURAT_KET_SK_ANIES_DKI/Surat_Keterangan_Kerja_DKI");
            string nomorPekerja = Request.QueryString["nomorPekerja"].ToString();
            ReportParameter rParams = new ReportParameter("nomorPekerja", nomorPekerja);
            rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams });
            rptViewer.ShowParameterPrompts = false;
            ViewBag.ReportViewer = rptViewer;
            ViewBag.Title = "Report Surat Keterangan Kerja";

            return PartialView("~/Modules/SSRS/ReportOther/_ReportView.cshtml");
        }

        [HttpGet]
        public ActionResult SuratJaminanKerjaSK()
        {
            ReportViewer rptViewer = ReportViewerControl2.GetReportViewerControl2("/SURAT_KET_SK_ANIES_DKI/Surat_Jaminan_Kerja_DKI");
            string nomorPekerja = Request.QueryString["nomorPekerja"].ToString();
            ReportParameter rParams = new ReportParameter("nomorPekerja", nomorPekerja);
            rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams });
            rptViewer.ShowParameterPrompts = false;
            ViewBag.ReportViewer = rptViewer;
            ViewBag.Title = "Report Surat Jaminan Kerja";
            return PartialView("~/Modules/SSRS/ReportOther/_ReportView.cshtml");
        }

        public ActionResult SuratPernyataanSehat()
        {
            ReportViewer rptViewer = ReportViewerControl2.GetReportViewerControl2("/SURAT_KET_SK_ANIES_DKI/Surat_pernyataan");
            string nomorPekerja = Request.QueryString["nomorPekerja"].ToString();
            ReportParameter rParams = new ReportParameter("nomorPekerja", nomorPekerja);
            rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams });
            rptViewer.ShowParameterPrompts = false;
            ViewBag.ReportViewer = rptViewer;
            ViewBag.Title = "Report Surat Pernyataan Sehat";
            return PartialView("~/Modules/SSRS/ReportOther/_ReportView.cshtml");
        }

        public ActionResult RegistrasiSIKM()
        {
            ReportViewer rptViewer = null;
            string Lokasi = Request.QueryString["lokasi"].ToString();
            string StartReport = Request.QueryString["datestart"].ToString();
            string EndReport = Request.QueryString["dateend"].ToString();
            
            if (Lokasi == "")
            {
                rptViewer = ReportViewerControl2.GetReportViewerControl("/SIKM_PERTAMINA/Register_SIKM");
                ReportParameter rParams = new ReportParameter("startReport", StartReport);
                ReportParameter rParams2 = new ReportParameter("endReport", EndReport);
                rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams, rParams2 });
            }
            else
            {
                rptViewer = ReportViewerControl2.GetReportViewerControl("/SIKM_PERTAMINA/Register_SIKM_Filter_Lokasi");
                ReportParameter rParams = new ReportParameter("startReport", StartReport);
                ReportParameter rParams2 = new ReportParameter("endReport", EndReport);
                ReportParameter rParams3 = new ReportParameter("lokasi", Lokasi);
                rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams, rParams2, rParams3 });
            }

            rptViewer.ShowParameterPrompts = false;
            ViewBag.ReportViewer = rptViewer;
            ViewBag.Title = "Report Log Registrasi SIKM PDSI";
            return PartialView("~/Modules/SSRS/ReportOther/_ReportView.cshtml");
        }

        public ActionResult GeoLocationPekerja()
        {
            ReportViewer rptViewer = null;
            string Filter = Request.QueryString["type"].ToString();
            string Param = Request.QueryString["var"].ToString();
            string StartReport = Request.QueryString["datestart"].ToString();
            string EndReport = Request.QueryString["dateend"].ToString();
            string MetodeKerja = Request.QueryString["metode"].ToString();

            if (MetodeKerja != "" && Filter == "")
            {
                rptViewer = ReportViewerControl2.GetReportViewerControl("/ABSENSI_COVID_19/Geolocation_metode");
                ReportParameter rParams = new ReportParameter("dateStart", StartReport);
                ReportParameter rParams2 = new ReportParameter("dateEnd", EndReport);
                ReportParameter rParams3 = new ReportParameter("metode", MetodeKerja);
                rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams, rParams2, rParams3 });
            }
            else if (MetodeKerja == "" && Filter == "direktorat")
            {
                rptViewer = ReportViewerControl2.GetReportViewerControl("/ABSENSI_COVID_19/Geolocation_direktorat");
                ReportParameter rParams = new ReportParameter("dateStart", StartReport);
                ReportParameter rParams2 = new ReportParameter("dateEnd", EndReport);
                ReportParameter rParams3 = new ReportParameter("direktorat", Param);
                rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams, rParams2, rParams3 });
            }
            else if (MetodeKerja == "" && Filter == "fungsi")
            {
                rptViewer = ReportViewerControl2.GetReportViewerControl("/ABSENSI_COVID_19/Geolocation_fungsi");
                ReportParameter rParams = new ReportParameter("dateStart", StartReport);
                ReportParameter rParams2 = new ReportParameter("dateEnd", EndReport);
                ReportParameter rParams3 = new ReportParameter("fungsi", Param);
                rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams, rParams2, rParams3 });
            }
            else if (MetodeKerja == "" && Filter == "departemen")
            {
                rptViewer = ReportViewerControl2.GetReportViewerControl("/ABSENSI_COVID_19/Geolocation_departemen");
                ReportParameter rParams = new ReportParameter("dateStart", StartReport);
                ReportParameter rParams2 = new ReportParameter("dateEnd", EndReport);
                ReportParameter rParams3 = new ReportParameter("departemen", Param);
                rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams, rParams2, rParams3 });
            }
            else if (MetodeKerja != "" && Filter == "direktorat")
            {
                rptViewer = ReportViewerControl2.GetReportViewerControl("/ABSENSI_COVID_19/Geolocation_metode_direktorat");
                ReportParameter rParams = new ReportParameter("dateStart", StartReport);
                ReportParameter rParams2 = new ReportParameter("dateEnd", EndReport);
                ReportParameter rParams3 = new ReportParameter("metode", MetodeKerja);
                ReportParameter rParams4 = new ReportParameter("direktorat", Param);
                rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams, rParams2, rParams3, rParams4 });
            }
            else if (MetodeKerja != "" && Filter == "fungsi")
            {
                rptViewer = ReportViewerControl2.GetReportViewerControl("/ABSENSI_COVID_19/Geolocation_metode_fungsi");
                ReportParameter rParams = new ReportParameter("dateStart", StartReport);
                ReportParameter rParams2 = new ReportParameter("dateEnd", EndReport);
                ReportParameter rParams3 = new ReportParameter("metode", MetodeKerja);
                ReportParameter rParams4 = new ReportParameter("fungsi", Param);
                rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams, rParams2, rParams3, rParams4 });
            }
            else if (MetodeKerja != "" && Filter == "departemen")
            {
                rptViewer = ReportViewerControl2.GetReportViewerControl("/ABSENSI_COVID_19/Geolocation_metode_departemen");
                ReportParameter rParams = new ReportParameter("dateStart", StartReport);
                ReportParameter rParams2 = new ReportParameter("dateEnd", EndReport);
                ReportParameter rParams3 = new ReportParameter("metode", MetodeKerja);
                ReportParameter rParams4 = new ReportParameter("departemen", Param);
                rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams, rParams2, rParams3, rParams4 });
            }
            else
            {
                rptViewer = ReportViewerControl2.GetReportViewerControl("/ABSENSI_COVID_19/Geolocation_all");
                ReportParameter rParams = new ReportParameter("dateStart", StartReport);
                ReportParameter rParams2 = new ReportParameter("dateEnd", EndReport);
                rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams, rParams2 });
            }

            rptViewer.ShowParameterPrompts = false;
            ViewBag.ReportViewer = rptViewer;
            ViewBag.Title = "Report Koordinat Lokasi Pekerja PDSI";
            return PartialView("~/Modules/SSRS/ReportOther/_ReportView.cshtml");
        }

        public ActionResult ReportTestCovidJumlahSurat()
        {
            ReportViewer rptViewer = null;
            string Bulan = Request.QueryString["bulan"].ToString();
            
            rptViewer = ReportViewerControl2.GetReportViewerControl("/SURAT_PENGANTAR_TEST_COVID/Report_Jumlah_Request_SP");
            ReportParameter rParams = new ReportParameter("bulan", Bulan);
            rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams });
            
            rptViewer.ShowParameterPrompts = false;
            ViewBag.ReportViewer = rptViewer;
            ViewBag.Title = "Report Test Covid Jumlah Request Surat Pengantar";
            return PartialView("~/Modules/SSRS/ReportOther/_ReportView.cshtml");
        }

        public ActionResult ReportTestCovidJumlahRS()
        {
            ReportViewer rptViewer = null;
            string Bulan = Request.QueryString["bulan"].ToString();

            rptViewer = ReportViewerControl2.GetReportViewerControl("/SURAT_PENGANTAR_TEST_COVID/Report_Jumlah_RS");
            ReportParameter rParams = new ReportParameter("bulan", Bulan);
            rptViewer.ServerReport.SetParameters(new ReportParameter[] { rParams });

            rptViewer.ShowParameterPrompts = false;
            ViewBag.ReportViewer = rptViewer;
            ViewBag.Title = "Report Test Covid Jumlah Rumah Sakit";
            return PartialView("~/Modules/SSRS/ReportOther/_ReportView.cshtml");
        }
    }
}