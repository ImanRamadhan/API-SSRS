using System.Web.Hosting;
using System.IO;
using System.Net.Mail;

namespace SCMONLINE.Common
{
    public class EmailHelper
    {
        public static void Send(string subject, string body, string address, string displayName = "")
        {
            var message = new MailMessage();
            message.To.Add(new MailAddress(address, ""));
            message.Subject = subject;
            message.Body = body;
            message.IsBodyHtml = true;

            var client = new SmtpClient();

            var smtp = new System.Net.Mail.SmtpClient();
            var credential = (System.Net.NetworkCredential)smtp.Credentials;
            string strhost = smtp.Host;
            int port = smtp.Port;
            string strUsername = credential.UserName;
            string password = credential.Password;

            if (client.DeliveryMethod == SmtpDeliveryMethod.SpecifiedPickupDirectory &&
                string.IsNullOrEmpty(client.PickupDirectoryLocation))
            {
                var pickupPath = HostingEnvironment.MapPath("~/App_Data");
                pickupPath = Path.Combine(pickupPath, "Mail");
                Directory.CreateDirectory(pickupPath);
                client.PickupDirectoryLocation = pickupPath;
            }

            ////Configurando host para enveio.
            //NetworkCredential nc = new NetworkCredential("shin.tekh@gmail.com", "NvidiaGeforce");
            client.Credentials = credential;
            client.EnableSsl = true;
            client.Host = strhost;
            client.Port = port;
            client.Send(message);
        }
    }
}