using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using Microsoft.Reporting.WinForms;
using System.IO;
using System.Configuration;
using Microsoft.Reporting.WebForms;

namespace SCMONLINE.Modules.Common.Reporting
{
    /// <summary>
    /// Summary description for ReportService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]

    public class ReportService : System.Web.Services.WebService
    {

        [WebMethod]
        public string HelloWorld()
        {
            return "Hello World";
        }

        // setup report variables
        private string ExportReport()
        {
            Warning[] warnings;
            string[] streamids;
            string mimeType;
            string encoding;
            string filenameExtension;

            //Render the report to a byte array
            byte[] bytes;
            if (reportViewer1.ProcessingMode == ProcessingMode.Local)
            {
                bytes = reportViewer1.LocalReport.Render("PDF", null, out mimeType,
                    out encoding, out filenameExtension, out streamids, out warnings);
            }
            else
            {
                bytes = reportViewer1.ServerReport.Render("PDF", null, out mimeType,
                   out encoding, out filenameExtension, out streamids, out warnings);
            }

            //Write report out to temporary PDF file
            string filename = Path.Combine(Path.GetTempPath(), "ReportToAttach.pdf");
            using (FileStream fs = new FileStream(filename, FileMode.Create))
            {
                fs.Write(bytes, 0, bytes.Length);
            }

            //return path to saved file
            return filename;
        }


    }
}
