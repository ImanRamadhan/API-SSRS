namespace SCMONLINE.Inbox.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
	using System.Collections.Generic;
    using System.IO;

    [ConnectionKey("Default"), TableName("[dbo].[Notification]")]
    [DisplayName("Notification"), InstanceName("Notification"), TwoLevelCached]
    [ReadPermission("Inbox:Notification:Read")]
    [InsertPermission("Inbox:Notification:Insert")]
    [UpdatePermission("Inbox:Notification:Update")]
    [DeletePermission("Inbox:Notification:Delete")]
    public sealed class NotificationRow : Row, IIdRow, INameRow
    {

        [DisplayName("Notification Id"), Identity]
        public Int32? NotificationId { get { return Fields.NotificationId[this]; } set { Fields.NotificationId[this] = value; } }
		public partial class RowFields { public Int32Field NotificationId; }

        [DisplayName("Title"), Size(50), QuickSearch]
        public String Title { get { return Fields.Title[this]; } set { Fields.Title[this] = value; } }
		public partial class RowFields { public StringField Title; }

        [DisplayName("Description")]
        public String Description { get { return Fields.Description[this]; } set { Fields.Description[this] = value; } }
		public partial class RowFields { public StringField Description; }

        [DisplayName("Link")]
        public String Link { get { return Fields.Link[this]; } set { Fields.Link[this] = value; } }
		public partial class RowFields { public StringField Link; }

        [DisplayName("Create Date")]
        public DateTime? CreateDate { get { return Fields.CreateDate[this]; } set { Fields.CreateDate[this] = value; } }
		public partial class RowFields { public DateTimeField CreateDate; }

        [DisplayName("Reading Date")]
        public DateTime? ReadingDate { get { return Fields.ReadingDate[this]; } set { Fields.ReadingDate[this] = value; } }
		public partial class RowFields { public DateTimeField ReadingDate; }

        [DisplayName("User"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUser"), TextualField("UserUsername")]
        public Int32? UserId { get { return Fields.UserId[this]; } set { Fields.UserId[this] = value; } }
		public partial class RowFields { public Int32Field UserId; }

        #region Foreign Fields


        [DisplayName("User Username"), Expression("jUser.[Username]"), ReadOnly(true)]
        public String UserUsername { get { return Fields.UserUsername[this]; } set { Fields.UserUsername[this] = value; } }
		public partial class RowFields { public StringField UserUsername; }

        [DisplayName("User Display Name"), Expression("jUser.[DisplayName]"), ReadOnly(true)]
        public String UserDisplayName { get { return Fields.UserDisplayName[this]; } set { Fields.UserDisplayName[this] = value; } }
		public partial class RowFields { public StringField UserDisplayName; }

        [DisplayName("User Email"), Expression("jUser.[Email]"), ReadOnly(true)]
        public String UserEmail { get { return Fields.UserEmail[this]; } set { Fields.UserEmail[this] = value; } }
		public partial class RowFields { public StringField UserEmail; }

        [DisplayName("User Source"), Expression("jUser.[Source]"), ReadOnly(true)]
        public String UserSource { get { return Fields.UserSource[this]; } set { Fields.UserSource[this] = value; } }
		public partial class RowFields { public StringField UserSource; }

        [DisplayName("User Password Hash"), Expression("jUser.[PasswordHash]"), ReadOnly(true)]
        public String UserPasswordHash { get { return Fields.UserPasswordHash[this]; } set { Fields.UserPasswordHash[this] = value; } }
		public partial class RowFields { public StringField UserPasswordHash; }

        [DisplayName("User Password Salt"), Expression("jUser.[PasswordSalt]"), ReadOnly(true)]
        public String UserPasswordSalt { get { return Fields.UserPasswordSalt[this]; } set { Fields.UserPasswordSalt[this] = value; } }
		public partial class RowFields { public StringField UserPasswordSalt; }

        [DisplayName("User Last Directory Update"), Expression("jUser.[LastDirectoryUpdate]"), ReadOnly(true)]
        public DateTime? UserLastDirectoryUpdate { get { return Fields.UserLastDirectoryUpdate[this]; } set { Fields.UserLastDirectoryUpdate[this] = value; } }
		public partial class RowFields { public DateTimeField UserLastDirectoryUpdate; }

        [DisplayName("User User Image"), Expression("jUser.[UserImage]"), ReadOnly(true)]
        public String UserUserImage { get { return Fields.UserUserImage[this]; } set { Fields.UserUserImage[this] = value; } }
		public partial class RowFields { public StringField UserUserImage; }

        [DisplayName("User Insert Date"), Expression("jUser.[InsertDate]"), ReadOnly(true)]
        public DateTime? UserInsertDate { get { return Fields.UserInsertDate[this]; } set { Fields.UserInsertDate[this] = value; } }
		public partial class RowFields { public DateTimeField UserInsertDate; }

        [DisplayName("User Insert User Id"), Expression("jUser.[InsertUserId]"), ReadOnly(true)]
        public Int32? UserInsertUserId { get { return Fields.UserInsertUserId[this]; } set { Fields.UserInsertUserId[this] = value; } }
		public partial class RowFields { public Int32Field UserInsertUserId; }

        [DisplayName("User Update Date"), Expression("jUser.[UpdateDate]"), ReadOnly(true)]
        public DateTime? UserUpdateDate { get { return Fields.UserUpdateDate[this]; } set { Fields.UserUpdateDate[this] = value; } }
		public partial class RowFields { public DateTimeField UserUpdateDate; }

        [DisplayName("User Update User Id"), Expression("jUser.[UpdateUserId]"), ReadOnly(true)]
        public Int32? UserUpdateUserId { get { return Fields.UserUpdateUserId[this]; } set { Fields.UserUpdateUserId[this] = value; } }
		public partial class RowFields { public Int32Field UserUpdateUserId; }

        [DisplayName("User Is Active"), Expression("jUser.[IsActive]"), ReadOnly(true)]
        public Int16? UserIsActive { get { return Fields.UserIsActive[this]; } set { Fields.UserIsActive[this] = value; } }
		public partial class RowFields { public Int16Field UserIsActive; }


        #endregion Foreign Fields


        IIdField IIdRow.IdField { get { return Fields.NotificationId; } }

        StringField INameRow.NameField { get { return Fields.Title; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public NotificationRow() : base(Fields) { }

		public partial class RowFields : RowFieldsBase { }
    }
}
