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
    [DisplayName("StoreGraphs2"), InstanceName("StoreGraphsFC"), TwoLevelCached]
    [ReadPermission("Inbox:TrySp:Read")]
    [InsertPermission("Inbox:TrySp:Insert")]
    [UpdatePermission("Inbox:TrySp:Update")]
    [DeletePermission("Inbox:TrySp:Delete")]
    public sealed class StoreGraphsFCRow : Row, IIdRow, INameRow
    {
        [DisplayName("buyer"), Size(100), QuickSearch]
        public String buyer { get { return Fields.buyer[this]; } set { Fields.buyer[this] = value; } }
        public partial class RowFields { public StringField buyer; }

        [DisplayName("label"), Size(100), QuickSearch]
        public String label { get { return Fields.label[this]; } set { Fields.label[this] = value; } }
		public partial class RowFields { public StringField label; }

        /*[DisplayName("CreatedDate")]
        public DateTime? CreatedDate { get { return Fields.CreatedDate[this]; } set { Fields.CreatedDate[this] = value; } }
		public partial class RowFields { public DateTimeField CreatedDate; }*/

        [DisplayName("data"), Size(100), NotNull]
        public Int32? data { get { return Fields.data[this]; } set { Fields.data[this] = value; } }
		public partial class RowFields { public Int32Field data; }

        //[DisplayName("Jumlah")]
        //public Int32? Jumlah { get { return Fields.Jumlah[this]; } set { Fields.Jumlah[this] = value; } }
        //public partial class RowFields { public Int32Field Jumlah; }

        #region Foreign Fields

        #endregion Foreign Fields


        IIdField IIdRow.IdField { get { return Fields.buyer; } }

        StringField INameRow.NameField { get { return Fields.label; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public StoreGraphsFCRow() : base(Fields) { }

		public partial class RowFields : RowFieldsBase { }
    }
}
