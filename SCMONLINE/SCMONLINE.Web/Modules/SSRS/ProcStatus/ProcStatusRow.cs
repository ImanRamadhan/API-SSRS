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

    [ConnectionKey("Default"), TableName("[dbo].[ProcStatus]")]
    [DisplayName("Proc Status"), InstanceName("Proc Status"), TwoLevelCached]
    [ReadPermission("Procurement:ProcStatus:Read")]
    [InsertPermission("Procurement:ProcStatus:Insert")]
    [UpdatePermission("Procurement:ProcStatus:Update")]
    [DeletePermission("Procurement:ProcStatus:Delete")]
    [LookupScript]
    public sealed class ProcStatusRow : Row, IIdRow, INameRow
    {

        [DisplayName("Proc Status Id"), Size(50), PrimaryKey]
        [EditLink, QuickSearch]
        public String ProcStatusId { get { return Fields.ProcStatusId[this]; } set { Fields.ProcStatusId[this] = value; } }
        public partial class RowFields { public StringField ProcStatusId; }

        [DisplayName("Name")]
        [EditLink, QuickSearch]
        public String Name { get { return Fields.Name[this]; } set { Fields.Name[this] = value; } }
        public partial class RowFields { public StringField Name; }

        [DisplayName("Description")]
        [EditLink, QuickSearch]
        public String Description { get { return Fields.Description[this]; } set { Fields.Description[this] = value; } }
        public partial class RowFields { public StringField Description; }

        #region Foreign Fields

        #endregion Foreign Fields


        IIdField IIdRow.IdField { get { return Fields.ProcStatusId; } }

        StringField INameRow.NameField { get { return Fields.Name; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProcStatusRow() : base(Fields) { }

        public partial class RowFields : RowFieldsBase { }
    }
}
