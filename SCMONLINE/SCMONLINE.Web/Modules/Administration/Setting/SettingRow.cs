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

    [ConnectionKey("Default"), TableName("[dbo].[Setting]")]
    [DisplayName("Setting"), InstanceName("Setting"), TwoLevelCached]
    [ReadPermission("Administration:Setting:Read")]
    [InsertPermission("Administration:Setting:Insert")]
    [UpdatePermission("Administration:Setting:Update")]
    [DeletePermission("Administration:Setting:Delete")]
    [LookupScript(Permission = "?")]
    public sealed class SettingRow : Row, IIdRow, INameRow
    {

        [DisplayName("Name"), Size(50), PrimaryKey]
        [EditLink,QuickSearch] 
 public String Name { get { return Fields.Name[this]; } set { Fields.Name[this] = value; } }
		public partial class RowFields { public StringField Name; }

        [DisplayName("Value"),LookupInclude]
        [EditLink,QuickSearch] 
 public String Value { get { return Fields.Value[this]; } set { Fields.Value[this] = value; } }
		public partial class RowFields { public StringField Value; }

        [DisplayName("Description"),LookupInclude]
        [EditLink,QuickSearch] 
 public String Description { get { return Fields.Description[this]; } set { Fields.Description[this] = value; } }
		public partial class RowFields { public StringField Description; }

        #region Foreign Fields

        #endregion Foreign Fields


        IIdField IIdRow.IdField { get { return Fields.Name; } }

        StringField INameRow.NameField { get { return Fields.Name; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public SettingRow() : base(Fields) { }

		public partial class RowFields : RowFieldsBase { }
    }
}
