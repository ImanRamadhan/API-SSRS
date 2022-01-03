
namespace SCMONLINE.Inbox.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Inbox.Notification")]
    [BasedOnRow(typeof(Entities.NotificationRow), CheckNames = true)]
    public class NotificationColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 NotificationId { get; set; }
        [EditLink]
        public String Title { get; set; }
        public String Description { get; set; }
        public String Link { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime ReadingDate { get; set; }
        public String UserUsername { get; set; }
    }
}