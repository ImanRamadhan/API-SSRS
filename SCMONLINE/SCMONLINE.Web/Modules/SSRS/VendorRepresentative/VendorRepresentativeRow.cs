namespace SCMONLINE.Procurement.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ConnectionKey("Default"), TableName("[dbo].[VendorRepresentative]")]
    [DisplayName("Vendor Representative"), InstanceName("Vendor Representative"), TwoLevelCached]
    [ReadPermission("Procurement:VendorRepresentative:Read")]
    [InsertPermission("Procurement:VendorRepresentative:Insert")]
    [UpdatePermission("Procurement:VendorRepresentative:Update")]
    [DeletePermission("Procurement:VendorRepresentative:Delete")]
    [MinSelectLevel(SelectLevel.List)]
    public sealed class VendorRepresentativeRow : Row, IIdRow, INameRow
    {

        [DisplayName("Vendor Representative Id"), Identity]
        [EditLink, QuickSearch]
        public Int32? VendorRepresentativeId { get { return Fields.VendorRepresentativeId[this]; } set { Fields.VendorRepresentativeId[this] = value; } }
        public partial class RowFields { public Int32Field VendorRepresentativeId; }

        [DisplayName("Vendor Id"), Size(50)]
        [EditLink, QuickSearch]
        public String VendorId { get { return Fields.VendorId[this]; } set { Fields.VendorId[this] = value; } }
        public partial class RowFields { public StringField VendorId; }

        [DisplayName("User"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUser"), TextualField("UserUsername")]
        [EditLink, QuickSearch]
        public Int32? UserId { get { return Fields.UserId[this]; } set { Fields.UserId[this] = value; } }
        public partial class RowFields { public Int32Field UserId; }

        #region Foreign Fields


        [DisplayName("User Username"), Expression("jUser.[Username]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String UserUsername { get { return Fields.UserUsername[this]; } set { Fields.UserUsername[this] = value; } }
        public partial class RowFields { public StringField UserUsername; }

        [DisplayName("User Display Name"), Expression("jUser.[DisplayName]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String UserDisplayName { get { return Fields.UserDisplayName[this]; } set { Fields.UserDisplayName[this] = value; } }
        public partial class RowFields { public StringField UserDisplayName; }

        [DisplayName("User Email"), Expression("jUser.[Email]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String UserEmail { get { return Fields.UserEmail[this]; } set { Fields.UserEmail[this] = value; } }
        public partial class RowFields { public StringField UserEmail; }

        [DisplayName("User Source"), Expression("jUser.[Source]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String UserSource { get { return Fields.UserSource[this]; } set { Fields.UserSource[this] = value; } }
        public partial class RowFields { public StringField UserSource; }

        [DisplayName("User Password Hash"), Expression("jUser.[PasswordHash]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String UserPasswordHash { get { return Fields.UserPasswordHash[this]; } set { Fields.UserPasswordHash[this] = value; } }
        public partial class RowFields { public StringField UserPasswordHash; }

        [DisplayName("User Password Salt"), Expression("jUser.[PasswordSalt]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String UserPasswordSalt { get { return Fields.UserPasswordSalt[this]; } set { Fields.UserPasswordSalt[this] = value; } }
        public partial class RowFields { public StringField UserPasswordSalt; }

        [DisplayName("User Last Directory Update"), Expression("jUser.[LastDirectoryUpdate]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public DateTime? UserLastDirectoryUpdate
        {
            get { return Fields.UserLastDirectoryUpdate[this]; }
            set { Fields.UserLastDirectoryUpdate[this] = value; }
        }
        public partial class RowFields
        {
            [EditLink, QuickSearch]
            public DateTimeField UserLastDirectoryUpdate; }

        [DisplayName("User User Image"), Expression("jUser.[UserImage]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String UserUserImage { get { return Fields.UserUserImage[this]; } set { Fields.UserUserImage[this] = value; } }
        public partial class RowFields { public StringField UserUserImage; }

        [DisplayName("User Insert Date"), Expression("jUser.[InsertDate]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public DateTime? UserInsertDate { get { return Fields.UserInsertDate[this]; } set { Fields.UserInsertDate[this] = value; } }
        public partial class RowFields
        {
            [EditLink, QuickSearch]
            public DateTimeField UserInsertDate; }

        [DisplayName("User Insert User Id"), Expression("jUser.[InsertUserId]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public Int32? UserInsertUserId { get { return Fields.UserInsertUserId[this]; } set { Fields.UserInsertUserId[this] = value; } }
        public partial class RowFields { public Int32Field UserInsertUserId; }

        [DisplayName("User Update Date"), Expression("jUser.[UpdateDate]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public DateTime? UserUpdateDate { get { return Fields.UserUpdateDate[this]; } set { Fields.UserUpdateDate[this] = value; } }
        public partial class RowFields
        {
            [EditLink, QuickSearch]
            public DateTimeField UserUpdateDate; }

        [DisplayName("User Update User Id"), Expression("jUser.[UpdateUserId]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public Int32? UserUpdateUserId { get { return Fields.UserUpdateUserId[this]; } set { Fields.UserUpdateUserId[this] = value; } }
        public partial class RowFields { public Int32Field UserUpdateUserId; }

        [DisplayName("User Is Active"), Expression("jUser.[IsActive]"), ReadOnly(true)]
        public Int16? UserIsActive { get { return Fields.UserIsActive[this]; } set { Fields.UserIsActive[this] = value; } }
        public partial class RowFields { public Int16Field UserIsActive; }


        #endregion Foreign Fields


        IIdField IIdRow.IdField { get { return Fields.VendorRepresentativeId; } }

        StringField INameRow.NameField { get { return Fields.VendorId; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public VendorRepresentativeRow() : base(Fields) { }

        public partial class RowFields : RowFieldsBase { }
    }
}
