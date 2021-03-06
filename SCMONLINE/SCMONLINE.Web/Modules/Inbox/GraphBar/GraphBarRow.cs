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

    [ConnectionKey("Default")]
    [DisplayName("GraphBar"), InstanceName("GraphBar"), TwoLevelCached]
    [ReadPermission("Inbox:TrySp:Read")]
    [InsertPermission("Inbox:TrySp:Insert")]
    [UpdatePermission("Inbox:TrySp:Update")]
    [DeletePermission("Inbox:TrySp:Delete")]
    public sealed class GraphBarRow : Row, IIdRow, INameRow
    {
        [DisplayName("stat"), Size(100), QuickSearch]
        public String stat { get { return Fields.stat[this]; } set { Fields.stat[this] = value; } }
        public partial class RowFields { public StringField stat; }

        [DisplayName("tgl")]
        public DateTime? tgl { get { return Fields.tgl[this]; } set { Fields.tgl[this] = value; } }
        public partial class RowFields { public DateTimeField tgl; }

        [DisplayName("label"), Size(100), NotNull]
        public String label { get { return Fields.label[this]; } set { Fields.label[this] = value; } }
        public partial class RowFields { public StringField label; }

        [DisplayName("value")]
        public Int32? value { get { return Fields.value[this]; } set { Fields.value[this] = value; } }
        public partial class RowFields { public Int32Field value; }

        #region Foreign Fields

        #endregion Foreign Fields


        IIdField IIdRow.IdField { get { return Fields.stat; } }

        StringField INameRow.NameField { get { return Fields.label; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public GraphBarRow() : base(Fields) { }

		public partial class RowFields : RowFieldsBase { }
    }
}
