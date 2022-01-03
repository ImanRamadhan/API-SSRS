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
    [DisplayName("StoreGraphs2"), InstanceName("StoreGraphs2"), TwoLevelCached]
    [ReadPermission("Inbox:TrySp:Read")]
    [InsertPermission("Inbox:TrySp:Insert")]
    [UpdatePermission("Inbox:TrySp:Update")]
    [DeletePermission("Inbox:TrySp:Delete")]
    public sealed class StoreGraphs2Row : Row, IIdRow, INameRow
    {

        [DisplayName("label"), Size(100), QuickSearch]
        public String label { get { return Fields.label[this]; } set { Fields.label[this] = value; } }
		public partial class RowFields { public StringField label; }

        /*[DisplayName("CreatedDate")]
        public DateTime? CreatedDate { get { return Fields.CreatedDate[this]; } set { Fields.CreatedDate[this] = value; } }
		public partial class RowFields { public DateTimeField CreatedDate; }*/

        [DisplayName("value"), Size(100), NotNull]
        public Int32? value { get { return Fields.value[this]; } set { Fields.value[this] = value; } }
		public partial class RowFields { public Int32Field value; }

        //[DisplayName("Jumlah")]
        //public Int32? Jumlah { get { return Fields.Jumlah[this]; } set { Fields.Jumlah[this] = value; } }
        //public partial class RowFields { public Int32Field Jumlah; }

        #region Foreign Fields

        #endregion Foreign Fields


        IIdField IIdRow.IdField { get { return Fields.label; } }

        StringField INameRow.NameField { get { return Fields.label; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public StoreGraphs2Row() : base(Fields) { }

		public partial class RowFields : RowFieldsBase { }
    }
}
