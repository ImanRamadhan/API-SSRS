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

    [ConnectionKey("Default"), TableName("[dbo].[VendorLookupView]")]
    [DisplayName("Vendor Lookup View"), InstanceName("Vendor Lookup View"), TwoLevelCached]
    [ReadPermission("Procurement:VendorLookupView:Read")]
    [InsertPermission("Procurement:VendorLookupView:Insert")]
    [UpdatePermission("Procurement:VendorLookupView:Update")]
    [DeletePermission("Procurement:VendorLookupView:Delete")]
    [LookupScript]
    public sealed class VendorLookupViewRow : Row, IIdRow, INameRow
    {

        [DisplayName("Vendor Id"), Size(50), NotNull, QuickSearch]
        public String VendorId { get { return Fields.VendorId[this]; } set { Fields.VendorId[this] = value; } }
		public partial class RowFields { public StringField VendorId; }

        [DisplayName("Name")]
        [LookupInclude]
        public String Name { get { return Fields.Name[this]; } set { Fields.Name[this] = value; } }
		public partial class RowFields { public StringField Name; }

        #region Foreign Fields

        #endregion Foreign Fields


        IIdField IIdRow.IdField { get { return Fields.VendorId; } }

        StringField INameRow.NameField { get { return Fields.Name; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public VendorLookupViewRow() : base(Fields) { }

		public partial class RowFields : RowFieldsBase { }
    }
}
