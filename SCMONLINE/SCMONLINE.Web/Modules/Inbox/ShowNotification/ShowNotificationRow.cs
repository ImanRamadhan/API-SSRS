
namespace SCMONLINE.Inbox.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Inbox"), TableName("[dbo].[ShowNotification]")]
    [DisplayName("Show Notification"), InstanceName("Show Notification")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ShowNotificationRow : Row, IIdRow, INameRow
    {

        [DisplayName("Notification Id"), Identity]
        public Int32? NotificationId
        {
            get { return Fields.NotificationId[this]; }
            set { Fields.NotificationId[this] = value; }
        }

        [DisplayName("Title"), Size(50), QuickSearch]
        public String Title
        {
            get { return Fields.Title[this]; }
            set { Fields.Title[this] = value; }
        }

        [DisplayName("Description")]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Link")]
        public String Link
        {
            get { return Fields.Link[this]; }
            set { Fields.Link[this] = value; }
        }

        [DisplayName("Create Date")]
        public DateTime? CreateDate
        {
            get { return Fields.CreateDate[this]; }
            set { Fields.CreateDate[this] = value; }
        }

        [DisplayName("Reading Date")]
        public DateTime? ReadingDate
        {
            get { return Fields.ReadingDate[this]; }
            set { Fields.ReadingDate[this] = value; }
        }

        [DisplayName("User Id")]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.NotificationId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Title; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ShowNotificationRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field NotificationId;

            public StringField Title;

            public StringField Description;

            public StringField Link;

            public DateTimeField CreateDate;

            public DateTimeField ReadingDate;

            public Int32Field UserId;


		}
    }
}
