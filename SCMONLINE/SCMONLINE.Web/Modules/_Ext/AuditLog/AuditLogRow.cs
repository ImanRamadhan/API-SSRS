//DFA
namespace _Ext.Entities
{
    using SCMONLINE.Administration.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[dbo].[AuditLog]")]
    [DisplayName("Audit Log"), InstanceName("Audit Log"), TwoLevelCached]
    [ReadPermission("Administration:AuditLog")]
    [ModifyPermission("Administration:AuditLog")]
    public sealed class AuditLogRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), PrimaryKey]
        public Int64? Id { get { return Fields.Id[this]; } set { Fields.Id[this] = value; } }

        [DisplayName("Version No."), Size(20), NotNull]
        [EditLink, QuickSearch]
        public Int32? VersionNo { get { return Fields.VersionNo[this]; } set { Fields.VersionNo[this] = value; } }
        [NotMapped]
        [EditLink, QuickSearch]
        public Int32? TotalCount { get { return Fields.TotalCount[this]; } set { Fields.TotalCount[this] = value; } }

        //[DisplayName("User"), NotNull, QuickFilter]
        //[LookupEditor("Administration.User")]
        //[DisplayName("User"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUsers"), TextualField("Username"), QuickFilter, Expression("jUsers.[Username]")]
        //[DisplayName("User"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUsers")]
        //[LookupEditor(typeof(UserRow))]
        //[DisplayName("User"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUsers"), TextualField("Username")]
        //[LookupEditor(typeof(UserRow))]

        //[DisplayName("User"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUsers"), TextualField("Username")]
        [ForeignKey(typeof(UserRow), "UserId"), LeftJoin("jUsers")]

        [LookupEditor(typeof(UserRow)), QuickFilter]
        [EditLink, QuickSearch]
        public Int32? UserId { get { return Fields.UserId[this]; } set { Fields.UserId[this] = value; } }

        [DisplayName("Action Type"), NotNull, QuickFilter]
        //[AuditLogActionTypeFormatter]
        public AuditActionType? ActionType { get { return (AuditActionType?)Fields.ActionType[this]; } set { Fields.ActionType[this] = (int?)value; } }

        [DisplayName("Action Date"), NotNull]
        [DateTimeEditor, DateTimeFormatter]
        [EditLink, QuickSearch]
        public DateTime? ActionDate { get { return Fields.ActionDate[this]; } set { Fields.ActionDate[this] = value; } }

        //[DisplayName("Role")]
        //[Origin("jUsers")]
        //[Expression("jUsers.[UserId]")]
        //[MinSelectLevel(SelectLevel.Details), LookupInclude]
        //[LookupEditor(typeof(RoleRow), Multiple = true), NotMapped]
        //[LinkingSetRelation(typeof(UserRoleRow), "UserId", "RoleId")]
        //[MinSelectLevel(SelectLevel.Details), QuickFilter(CssClass = "hidden-xs")]
        [NotMapped]
        [QuickFilter]
        [EditLink, QuickSearch]
        public String Roles { get { return Fields.Roles[this]; } set { Fields.Roles[this] = value; } }
        public partial class RowFields { public StringField Roles; }


        [DisplayName("Table Name"), Size(100), Column("TableName"), NotNull, QuickFilter]
        [EditLink, QuickSearch]
        public String EntityTableName { get { return Fields.EntityTableName[this]; } set { Fields.EntityTableName[this] = value; } }

        [DisplayName("Entity Id"), NotNull]
        public Int64? EntityId { get { return Fields.EntityId[this]; } set { Fields.EntityId[this] = value; } }

        [DisplayName("Old Entity")]
        [EditLink, QuickSearch]
        public String OldEntity { get { return Fields.OldEntity[this]; } set { Fields.OldEntity[this] = value; } }

        [DisplayName("New Entity")]
        [EditLink, QuickSearch]
        public String NewEntity { get { return Fields.NewEntity[this]; } set { Fields.NewEntity[this] = value; } }

        [DisplayName("IP Address"), Size(100)]
        [EditLink, QuickSearch]
        public String IpAddress { get { return Fields.IpAddress[this]; } set { Fields.IpAddress[this] = value; } }

        [DisplayName("Session Id"), Size(100)]
        [EditLink, QuickSearch]
        public String SessionId { get { return Fields.SessionId[this]; } set { Fields.SessionId[this] = value; } }

        #region Foreign Fields

        [DisplayName("Username"), Expression("jUsers.[Username]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String Username { get { return Fields.Username[this]; } set { Fields.Username[this] = value; } }
        public partial class RowFields { public StringField Username; }

        #endregion Foreign Fields


        public partial class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public Int32Field VersionNo;
            public Int32Field TotalCount;
            public Int32Field UserId;
            public Int32Field ActionType;
            [EditLink, QuickSearch]
            public DateTimeField ActionDate;
            public StringField EntityTableName;
            public Int64Field EntityId;
            public StringField OldEntity;
            public StringField NewEntity;
            public StringField IpAddress;
            public StringField SessionId;

            public RowFields() : base()
            {
                LocalTextPrefix = "_Ext.AuditLog";
            }
        }
        IIdField IIdRow.IdField { get { return Fields.Id; } }

        StringField INameRow.NameField { get { return Fields.EntityTableName; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public AuditLogRow() : base(Fields) { }

    }
}