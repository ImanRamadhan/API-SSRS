
namespace SCMONLINE.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.QueuedEmail")]
    [BasedOnRow(typeof(Entities.QueuedEmailRow), CheckNames = true)]
    public class QueuedEmailForm
    {
        public Int32 PriorityId { get; set; }
        public String From { get; set; }
        public String FromName { get; set; }
        public String To { get; set; }
        public String ToName { get; set; }
        public String ReplyTo { get; set; }
        public String ReplyToName { get; set; }
        public String Cc { get; set; }
        public String Bcc { get; set; }
        public String Subject { get; set; }
        public String Body { get; set; }
        public String AttachmentFilePath { get; set; }
        public String AttachmentFileName { get; set; }
        public Int32 AttachedDownloadId { get; set; }
        public DateTime CreatedOnUtc { get; set; }
        public Int32 SentTries { get; set; }
        public DateTime SentOnUtc { get; set; }
        public Int32 EmailAccountId { get; set; }
        public DateTime DontSendBeforeDateUtc { get; set; }
        public Boolean HasError { get; set; }
        public String Result { get; set; }
    }
}