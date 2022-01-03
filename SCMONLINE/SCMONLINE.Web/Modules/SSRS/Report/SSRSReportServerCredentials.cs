using Microsoft.Reporting.WebForms;
using System;
using System.Configuration;
using System.Net;
using System.Security.Principal;

namespace SCMONLINE.Procurement
{
    [Serializable]
    public sealed class SSRSReportServerCredentials : IReportServerCredentials
    {
        public WindowsIdentity ImpersonationUser
        {
            get
            {
                // Use the default Windows user.  Credentials will be
                // provided by the NetworkCredentials property.
                return null;
            }
        }

        public ICredentials NetworkCredentials
        {
            get
            {
                // Read the user information from the Web.config file.  
                // By reading the information on demand instead of 
                // storing it, the credentials will not be stored in 
                // session, reducing the vulnerable surface area to the
                // Web.config file, which can be secured with an ACL.

                // User name
                string userName = "administrator";
                //string userName = "hafiz";
                //string userName =
                //    ConfigurationManager.AppSettings
                //        ["Hafiz"];

                //if (string.IsNullOrEmpty(userName))
                //  throw new Exception(
                //    "Missing user name from web.config file");

                // Password
                string password = "P3rt4m1n4";
                //string password = "aksdj788723478";
                //string password =
                //    ConfigurationManager.AppSettings
                //        ["aksdj788723478"];

                //if (string.IsNullOrEmpty(password))
                //    throw new Exception(
                //      "Missing password from web.config file");

                // Domain
                //string domain =
                //    ConfigurationManager.AppSettings
                //        ["SSRSDomain"];

                //if (string.IsNullOrEmpty(domain))
                //    throw new Exception(
                //        "Missing domain from web.config file");

                return new NetworkCredential(userName, password);
            }
        }


        public bool GetFormsCredentials(out Cookie authCookie,
                    out string userName, out string password,
                    out string authority)
        {
            authCookie = null;
            userName = null;
            password = null;
            authority = null;

            // Not using form credentials
            return false;
        }
    }
}