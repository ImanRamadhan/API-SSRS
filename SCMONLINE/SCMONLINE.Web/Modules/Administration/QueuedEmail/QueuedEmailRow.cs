namespace SCMONLINE.Administration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
	using System.Collections.Generic;
    using System.IO;

    [ConnectionKey("Default"), TableName("[dbo].[QueuedEmail]")]
    [DisplayName("Queued Email"), InstanceName("Queued Email"), TwoLevelCached]
    [ReadPermission("Administration:QueuedEmail:Read")]
    [InsertPermission("Administration:QueuedEmail:Insert")]
    [UpdatePermission("Administration:QueuedEmail:Update")]
    [DeletePermission("Administration:QueuedEmail:Delete")]
    public sealed class QueuedEmailRow : Row, IIdRow, INameRow
    {

        [DisplayName("Id"), Identity]
        public Int32? Id { get { return Fields.Id[this]; } set { Fields.Id[this] = value; } }
		public partial class RowFields { public Int32Field Id; }

        [DisplayName("Priority Id"), NotNull]
        public Int32? PriorityId { get { return Fields.PriorityId[this]; } set { Fields.PriorityId[this] = value; } }
		public partial class RowFields { public Int32Field PriorityId; }

        [DisplayName("From"), Size(500), NotNull, QuickSearch]
        public String From { get { return Fields.From[this]; } set { Fields.From[this] = value; } }
		public partial class RowFields { public StringField From; }

        [DisplayName("From Name"), Size(500)]
        public String FromName { get { return Fields.FromName[this]; } set { Fields.FromName[this] = value; } }
		public partial class RowFields { public StringField FromName; }

        [DisplayName("To"), Size(500), NotNull]
        public String To { get { return Fields.To[this]; } set { Fields.To[this] = value; } }
		public partial class RowFields { public StringField To; }

        [DisplayName("To Name"), Size(500)]
        public String ToName { get { return Fields.ToName[this]; } set { Fields.ToName[this] = value; } }
		public partial class RowFields { public StringField ToName; }

        [DisplayName("Reply To"), Size(500)]
        public String ReplyTo { get { return Fields.ReplyTo[this]; } set { Fields.ReplyTo[this] = value; } }
		public partial class RowFields { public StringField ReplyTo; }

        [DisplayName("Reply To Name"), Size(500)]
        public String ReplyToName { get { return Fields.ReplyToName[this]; } set { Fields.ReplyToName[this] = value; } }
		public partial class RowFields { public StringField ReplyToName; }

        [DisplayName("Cc"), Column("CC"), Size(500)]
        public String Cc { get { return Fields.Cc[this]; } set { Fields.Cc[this] = value; } }
		public partial class RowFields { public StringField Cc; }

        [DisplayName("Bcc"), Size(500)]
        public String Bcc { get { return Fields.Bcc[this]; } set { Fields.Bcc[this] = value; } }
		public partial class RowFields { public StringField Bcc; }

        [DisplayName("Subject"), Size(1000)]
        public String Subject { get { return Fields.Subject[this]; } set { Fields.Subject[this] = value; } }
		public partial class RowFields { public StringField Subject; }

        [DisplayName("Body")]
        public String Body { get { return Fields.Body[this]; } set { Fields.Body[this] = value; } }
		public partial class RowFields { public StringField Body; }

        [DisplayName("Attachment File Path"), Size(1000)]
        public String AttachmentFilePath { get { return Fields.AttachmentFilePath[this]; } set { Fields.AttachmentFilePath[this] = value; } }
		public partial class RowFields { public StringField AttachmentFilePath; }

        [DisplayName("Attachment File Name"), Size(1000)]
        public String AttachmentFileName { get { return Fields.AttachmentFileName[this]; } set { Fields.AttachmentFileName[this] = value; } }
		public partial class RowFields { public StringField AttachmentFileName; }

        [DisplayName("Attached Download Id")]
        public Int32? AttachedDownloadId { get { return Fields.AttachedDownloadId[this]; } set { Fields.AttachedDownloadId[this] = value; } }
		public partial class RowFields { public Int32Field AttachedDownloadId; }

        [DisplayName("Created On Utc"), NotNull]
        public DateTime? CreatedOnUtc { get { return Fields.CreatedOnUtc[this]; } set { Fields.CreatedOnUtc[this] = value; } }
		public partial class RowFields { public DateTimeField CreatedOnUtc; }

        [DisplayName("Sent Tries")]
        public Int32? SentTries { get { return Fields.SentTries[this]; } set { Fields.SentTries[this] = value; } }
		public partial class RowFields { public Int32Field SentTries; }

        [DisplayName("Sent On Utc")]
        public DateTime? SentOnUtc { get { return Fields.SentOnUtc[this]; } set { Fields.SentOnUtc[this] = value; } }
		public partial class RowFields { public DateTimeField SentOnUtc; }

        [DisplayName("Email Account"), NotNull, ForeignKey("[dbo].[EmailAccounts]", "Id"), LeftJoin("jEmailAccount"), TextualField("EmailAccountEmail")]
        public Int32? EmailAccountId { get { return Fields.EmailAccountId[this]; } set { Fields.EmailAccountId[this] = value; } }
		public partial class RowFields { public Int32Field EmailAccountId; }

        [DisplayName("Dont Send Before Date Utc")]
        public DateTime? DontSendBeforeDateUtc { get { return Fields.DontSendBeforeDateUtc[this]; } set { Fields.DontSendBeforeDateUtc[this] = value; } }
		public partial class RowFields { public DateTimeField DontSendBeforeDateUtc; }

        [DisplayName("Has Error")]
        public Boolean? HasError { get { return Fields.HasError[this]; } set { Fields.HasError[this] = value; } }
		public partial class RowFields { public BooleanField HasError; }

        [DisplayName("Result"), Size(1000)]
        public String Result { get { return Fields.Result[this]; } set { Fields.Result[this] = value; } }
		public partial class RowFields { public StringField Result; }

        #region Foreign Fields


        [DisplayName("Email Account Email"), Expression("jEmailAccount.[Email]"), ReadOnly(true)]
        public String EmailAccountEmail { get { return Fields.EmailAccountEmail[this]; } set { Fields.EmailAccountEmail[this] = value; } }
		public partial class RowFields { public StringField EmailAccountEmail; }

        [DisplayName("Email Account Display Name"), Expression("jEmailAccount.[DisplayName]"), ReadOnly(true)]
        public String EmailAccountDisplayName { get { return Fields.EmailAccountDisplayName[this]; } set { Fields.EmailAccountDisplayName[this] = value; } }
		public partial class RowFields { public StringField EmailAccountDisplayName; }

        [DisplayName("Email Account Host"), Expression("jEmailAccount.[Host]"), ReadOnly(true)]
        public String EmailAccountHost { get { return Fields.EmailAccountHost[this]; } set { Fields.EmailAccountHost[this] = value; } }
		public partial class RowFields { public StringField EmailAccountHost; }

        [DisplayName("Email Account Port"), Expression("jEmailAccount.[Port]"), ReadOnly(true)]
        public Int32? EmailAccountPort { get { return Fields.EmailAccountPort[this]; } set { Fields.EmailAccountPort[this] = value; } }
		public partial class RowFields { public Int32Field EmailAccountPort; }

        [DisplayName("Email Account Username"), Expression("jEmailAccount.[Username]"), ReadOnly(true)]
        public String EmailAccountUsername { get { return Fields.EmailAccountUsername[this]; } set { Fields.EmailAccountUsername[this] = value; } }
		public partial class RowFields { public StringField EmailAccountUsername; }

        [DisplayName("Email Account Password"), Expression("jEmailAccount.[Password]"), ReadOnly(true)]
        public String EmailAccountPassword { get { return Fields.EmailAccountPassword[this]; } set { Fields.EmailAccountPassword[this] = value; } }
		public partial class RowFields { public StringField EmailAccountPassword; }

        [DisplayName("Email Account Enable Ssl"), Expression("jEmailAccount.[EnableSsl]"), ReadOnly(true)]
        public Boolean? EmailAccountEnableSsl { get { return Fields.EmailAccountEnableSsl[this]; } set { Fields.EmailAccountEnableSsl[this] = value; } }
		public partial class RowFields { public BooleanField EmailAccountEnableSsl; }

        [DisplayName("Email Account Use Default Credentials"), Expression("jEmailAccount.[UseDefaultCredentials]"), ReadOnly(true)]
        public Boolean? EmailAccountUseDefaultCredentials { get { return Fields.EmailAccountUseDefaultCredentials[this]; } set { Fields.EmailAccountUseDefaultCredentials[this] = value; } }
		public partial class RowFields { public BooleanField EmailAccountUseDefaultCredentials; }

        [DisplayName("Email Account Insert Date"), Expression("jEmailAccount.[InsertDate]"), ReadOnly(true)]
        public DateTime? EmailAccountInsertDate { get { return Fields.EmailAccountInsertDate[this]; } set { Fields.EmailAccountInsertDate[this] = value; } }
		public partial class RowFields { public DateTimeField EmailAccountInsertDate; }

        [DisplayName("Email Account Insert User Id"), Expression("jEmailAccount.[InsertUserId]"), ReadOnly(true)]
        public Int32? EmailAccountInsertUserId { get { return Fields.EmailAccountInsertUserId[this]; } set { Fields.EmailAccountInsertUserId[this] = value; } }
		public partial class RowFields { public Int32Field EmailAccountInsertUserId; }

        [DisplayName("Email Account Update Date"), Expression("jEmailAccount.[UpdateDate]"), ReadOnly(true)]
        public DateTime? EmailAccountUpdateDate { get { return Fields.EmailAccountUpdateDate[this]; } set { Fields.EmailAccountUpdateDate[this] = value; } }
		public partial class RowFields { public DateTimeField EmailAccountUpdateDate; }

        [DisplayName("Email Account Update User Id"), Expression("jEmailAccount.[UpdateUserId]"), ReadOnly(true)]
        public Int32? EmailAccountUpdateUserId { get { return Fields.EmailAccountUpdateUserId[this]; } set { Fields.EmailAccountUpdateUserId[this] = value; } }
		public partial class RowFields { public Int32Field EmailAccountUpdateUserId; }

        [DisplayName("Email Account Is Active"), Expression("jEmailAccount.[IsActive]"), ReadOnly(true)]
        public Int16? EmailAccountIsActive { get { return Fields.EmailAccountIsActive[this]; } set { Fields.EmailAccountIsActive[this] = value; } }
		public partial class RowFields { public Int16Field EmailAccountIsActive; }


        #endregion Foreign Fields


        IIdField IIdRow.IdField { get { return Fields.Id; } }

        StringField INameRow.NameField { get { return Fields.From; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public QueuedEmailRow() : base(Fields) { }

		public partial class RowFields : RowFieldsBase { }
    }
}
