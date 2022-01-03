using Microsoft.Reporting.WebForms;
using System;
using System.Configuration;
using System.Net;
using System.Security.Principal;

namespace SCMONLINE.Procurement
{
    [Serializable]
    public sealed class SSRSReportServerCredentials2 : IReportServerCredentials
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
                string userName = ConfigurationManager.AppSettings["userNameSSRS"].ToString();
                // Password
                string password = ConfigurationManager.AppSettings["passwordSSRS"].ToString();
                
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