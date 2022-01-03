
namespace SCMONLINE.Inbox.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Inbox.Notification")]
    [BasedOnRow(typeof(Entities.NotificationRow), CheckNames = true)]
    public class NotificationForm
    {

        [Category("Title")]
        [DisplayName("")][ReadOnly(true)]
        public String Title { get; set; }

        [Category("Message")]
        [DisplayName("")][ReadOnly(true)]
        public String Description { get; set; }
        [DisplayName("")][ReadOnly(true)]
        public String Link { get; set; }


        //Hiding Component in Notification Page
        [Hidden]
        public DateTime CreateDate { get; set; }
        [Hidden]
        public DateTime ReadingDate { get; set; }
        [Hidden]
        public Int32 UserId { get; set; }


        
    }

}