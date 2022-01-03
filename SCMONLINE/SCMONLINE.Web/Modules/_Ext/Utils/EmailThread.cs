using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SCMONLINE.Modules._Ext.Utils
{
    using Administration.Entities;
    using Serenity;
    using Serenity.Abstractions;
    using Serenity.Data;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Collections.Generic;
    using System.Configuration;
    using System.IO;
    using System.Net.Mail;
    using System.Threading;
    using System.Web.Hosting;
    using MyRepository = Administration.Repositories.QueuedEmailRepository;
    using MyRow = Administration.Entities.QueuedEmailRow;
    public static class EmailThread
    {
        private static Thread _SendEmailThread = null;
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public static void StartEmailThread()
        {
            if (_SendEmailThread == null)
            {
                _SendEmailThread = new Thread(new ThreadStart(SendEmails));
                _SendEmailThread.Priority = ThreadPriority.AboveNormal;
                _SendEmailThread.Start();
            }
        }
        public static void EndEmailThread()
        {
            if (_SendEmailThread != null)
            {
                _SendEmailThread.Abort();
            }
        }

        private static void SendEmails()
        {
            //bool enableEmailService = Convert.ToBoolean(ConfigurationManager.AppSettings["EnableEmailService"]);
            //if (enableEmailService)
            //{
            //    (Dependency.Resolve<IAuthorizationService>() as ImpersonatingAuthorizationService).Impersonate("admin");
            //    while (true)
            //    {
            //        //Thread.Sleep(40000); // 40 sec
            //        var connection = SqlConnections.NewFor<MyRow>();
            //        var request = new ListRequest();
            //        request.Criteria = new Criteria(fld.SentOnUtc.PropertyName).IsNull();
            //        ListResponse<MyRow> rows =
            //        new MyRepository().List(connection, request);
            //        if (rows.TotalCount == 0)
            //            break;

            //        foreach (MyRow row in rows.Entities)
            //        {
            //            try
            //            {
            //                SSRS.MailServicesPTM.CommonAttachmentDoc att = null;
            //                List<SSRS.MailServicesPTM.CommonAttachmentDoc> atts = new List<SSRS.MailServicesPTM.CommonAttachmentDoc>();

            //                //new email with service
            //                if (!string.IsNullOrEmpty(row.AttachmentFilePath))
            //                {   
            //                    string[] filePaths = Directory.GetFiles(row.AttachmentFilePath);
            //                    var namepath = row.AttachmentFilePath;
            //                    string[] arrNamePath = namepath.Split('/');
            //                    string namaFile = "";
            //                    if (arrNamePath.Count() > 0)
            //                    {
            //                        namaFile = arrNamePath[arrNamePath.Count() - 1];
            //                    }
            //                    var fullFilePath = HostingEnvironment.MapPath("~/App_Data/upload/" + namepath);
            //                    byte[] bytes = System.IO.File.ReadAllBytes(fullFilePath);

            //                    att = new SSRS.MailServicesPTM.CommonAttachmentDoc();
            //                    att.filename = namaFile;
            //                    att.filebyte = bytes;

            //                    atts.Add(att);
            //                }

            //                SSRS.MailServicesPTM.Service1Client mailservice = new SSRS.MailServicesPTM.Service1Client();

            //                var mailuser = ConfigurationManager.AppSettings["MailUser"].ToString();
            //                var mailPassword = ConfigurationManager.AppSettings["MailPassword"].ToString();

            //                SSRS.MailServicesPTM.CommonResponseMessage messageResult = new SSRS.MailServicesPTM.CommonResponseMessage();
            //                try
            //                {
            //                    messageResult = mailservice.SendMessageAtt(
            //                                                                mailuser,
            //                                                                mailPassword,
            //                                                                row.To,
            //                                                                row.Cc,
            //                                                                row.Bcc,
            //                                                                row.Subject,
            //                                                                row.Body,
            //                                                                atts.ToArray()
            //                                                                );

            //                    row.HasError = false;
            //                    row.SentTries++;
            //                    row.SentOnUtc = DateTime.UtcNow;
            //                    row.Result = "Sent Email Successfull";
            //                }
            //                catch (Exception ex)
            //                {
            //                    row.HasError = true;
            //                    row.Result = ex.Message;
            //                    row.SentTries++;
            //                    row.SentOnUtc = null;
            //                }

            //                //MailMessage mailMessage = new MailMessage();
            //                //mailMessage.From = new MailAddress(row.From, row.FromName);
            //                //foreach (var to in row.To.Split(','))
            //                //    mailMessage.To.Add(new MailAddress(to));
            //                //if (!string.IsNullOrEmpty(row.Cc))
            //                //    foreach (var cc in row.Cc.Split(','))
            //                //        mailMessage.CC.Add(new MailAddress(cc));
            //                //if (!string.IsNullOrEmpty(row.Bcc))
            //                //    foreach (var bcc in row.Bcc.Split(','))
            //                //        mailMessage.Bcc.Add(new MailAddress(bcc));
            //                //if (!string.IsNullOrEmpty(row.AttachmentFilePath))
            //                //{
            //                //    string[] filePaths = Directory.GetFiles(row.AttachmentFilePath);
            //                //    var namepath = row.AttachmentFilePath;
            //                //    var fullFilePath = HostingEnvironment.MapPath("~/App_Data/upload/" + namepath);
            //                //    byte[] bytes = System.IO.File.ReadAllBytes(fullFilePath);
            //                //    Attachment att = new Attachment(new MemoryStream(bytes), row.AttachmentFileName);
            //                //    mailMessage.Attachments.Add(att);
            //                //    mailMessage.Subject = row.Subject;
            //                //    mailMessage.Body = row.Body;
            //                //    mailMessage.IsBodyHtml = true;
            //                //}
            //                //else { 
            //                //    //mailMessage.Attachments.Add(new Attachment(row.AttachmentFileName));
            //                //    //mailMessage.Attachments.Add(new Attachment(row.AttachmentFilePath));
            //                //    mailMessage.Subject = row.Subject;
            //                //    mailMessage.Body = row.Body;
            //                //    mailMessage.IsBodyHtml = true;
            //                //}
            //                //EmailAccountsRow emailAccount = connection.TryFirst<EmailAccountsRow>(EmailAccountsRow.Fields.Id == (int)row.EmailAccountId.Value);
            //                //SmtpClient smtp = new SmtpClient
            //                //{
            //                //    Host = emailAccount.Host,
            //                //    Port = (int)emailAccount.Port,
            //                //    EnableSsl = (bool)emailAccount.EnableSsl,
            //                //    DeliveryMethod = SmtpDeliveryMethod.Network,
            //                //    Credentials = new System.Net.NetworkCredential(emailAccount.Username, emailAccount.Password),
            //                //    Timeout = 30000, //30 sec
            //                //};
            //                //smtp.Send(mailMessage);
            //                //row.HasError = false;
            //                //row.SentTries++;
            //                //row.SentOnUtc = DateTime.UtcNow;
            //                //row.Result = "Sent Email Successfull";
            //            }
            //            catch (Exception ex)
            //            {
            //                row.HasError = true;
            //                row.Result = ex.Message;
            //                row.SentTries++;
            //                row.SentOnUtc = null;
            //            }
            //            connection.UpdateById<MyRow>(row);
            //        }
            //    }
            //    (Dependency.Resolve<IAuthorizationService>() as ImpersonatingAuthorizationService).UndoImpersonate();
            //}
        }
    }
}