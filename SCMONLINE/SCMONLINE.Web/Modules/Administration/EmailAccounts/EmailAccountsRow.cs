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

    [ConnectionKey("Default"), TableName("[dbo].[EmailAccounts]")]
    [DisplayName("Email Accounts"), InstanceName("Email Accounts"), TwoLevelCached]
    [ReadPermission("Administration:EmailAccounts:Read")]
    [InsertPermission("Administration:EmailAccounts:Insert")]
    [UpdatePermission("Administration:EmailAccounts:Update")]
    [DeletePermission("Administration:EmailAccounts:Delete")]
    public sealed class EmailAccountsRow : Row, IIdRow, INameRow
    {

        [DisplayName("Id"), Identity]
        public Int32? Id { get { return Fields.Id[this]; } set { Fields.Id[this] = value; } }
		public partial class RowFields { public Int32Field Id; }

        [DisplayName("Email"), Size(255), NotNull, QuickSearch]
        public String Email { get { return Fields.Email[this]; } set { Fields.Email[this] = value; } }
		public partial class RowFields { public StringField Email; }

        [DisplayName("Display Name"), Size(255), NotNull]
        public String DisplayName { get { return Fields.DisplayName[this]; } set { Fields.DisplayName[this] = value; } }
		public partial class RowFields { public StringField DisplayName; }

        [DisplayName("Host"), Size(255), NotNull]
        public String Host { get { return Fields.Host[this]; } set { Fields.Host[this] = value; } }
		public partial class RowFields { public StringField Host; }

        [DisplayName("Port"), NotNull]
        public Int32? Port { get { return Fields.Port[this]; } set { Fields.Port[this] = value; } }
		public partial class RowFields { public Int32Field Port; }

        [DisplayName("Username"), Size(255), NotNull]
        public String Username { get { return Fields.Username[this]; } set { Fields.Username[this] = value; } }
		public partial class RowFields { public StringField Username; }

        [DisplayName("Password"), Size(255), NotNull]
        public String Password { get { return Fields.Password[this]; } set { Fields.Password[this] = value; } }
		public partial class RowFields { public StringField Password; }

        [DisplayName("Enable Ssl"), NotNull]
        public Boolean? EnableSsl { get { return Fields.EnableSsl[this]; } set { Fields.EnableSsl[this] = value; } }
		public partial class RowFields { public BooleanField EnableSsl; }

        [DisplayName("Use Default Credentials"), NotNull]
        public Boolean? UseDefaultCredentials { get { return Fields.UseDefaultCredentials[this]; } set { Fields.UseDefaultCredentials[this] = value; } }
		public partial class RowFields { public BooleanField UseDefaultCredentials; }

        [DisplayName("Insert Date"), NotNull]
        public DateTime? InsertDate { get { return Fields.InsertDate[this]; } set { Fields.InsertDate[this] = value; } }
		public partial class RowFields { public DateTimeField InsertDate; }

        [DisplayName("Insert User Id"), NotNull]
        public Int32? InsertUserId { get { return Fields.InsertUserId[this]; } set { Fields.InsertUserId[this] = value; } }
		public partial class RowFields { public Int32Field InsertUserId; }

        [DisplayName("Update Date")]
        public DateTime? UpdateDate { get { return Fields.UpdateDate[this]; } set { Fields.UpdateDate[this] = value; } }
		public partial class RowFields { public DateTimeField UpdateDate; }

        [DisplayName("Update User Id")]
        public Int32? UpdateUserId { get { return Fields.UpdateUserId[this]; } set { Fields.UpdateUserId[this] = value; } }
		public partial class RowFields { public Int32Field UpdateUserId; }

        [DisplayName("Is Active"), NotNull]
        public Int16? IsActive { get { return Fields.IsActive[this]; } set { Fields.IsActive[this] = value; } }
		public partial class RowFields { public Int16Field IsActive; }

        #region Foreign Fields

        #endregion Foreign Fields


        IIdField IIdRow.IdField { get { return Fields.Id; } }

        StringField INameRow.NameField { get { return Fields.Email; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public EmailAccountsRow() : base(Fields) { }

		public partial class RowFields : RowFieldsBase { }
    }
}
