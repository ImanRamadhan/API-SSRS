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

    [ConnectionKey("Default"), TableName("[dbo].[ViewStoredGraph]")]
    [DisplayName("View Stored Graph"), InstanceName("View Stored Graph"), TwoLevelCached]
    [ReadPermission("Inbox:ViewStoredGraph:Read")]
    [InsertPermission("Inbox:ViewStoredGraph:Insert")]
    [UpdatePermission("Inbox:ViewStoredGraph:Update")]
    [DeletePermission("Inbox:ViewStoredGraph:Delete")]
    public sealed class ViewStoredGraphRow : Row, IIdRow, INameRow
    {

        [DisplayName("Name"), Size(100), NotNull, QuickSearch]
        public String Name { get { return Fields.Name[this]; } set { Fields.Name[this] = value; } }
		public partial class RowFields { public StringField Name; }

        [DisplayName("Jumlah")]
        public Int32? Jumlah { get { return Fields.Jumlah[this]; } set { Fields.Jumlah[this] = value; } }
		public partial class RowFields { public Int32Field Jumlah; }

        #region Foreign Fields

        #endregion Foreign Fields


        IIdField IIdRow.IdField { get { return Fields.Name; } }

        StringField INameRow.NameField { get { return Fields.Name; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public ViewStoredGraphRow() : base(Fields) { }

		public partial class RowFields : RowFieldsBase { }
    }
}
