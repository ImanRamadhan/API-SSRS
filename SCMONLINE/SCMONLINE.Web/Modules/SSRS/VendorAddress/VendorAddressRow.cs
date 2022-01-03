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

    [ConnectionKey("Default"), TableName("[dbo].[VendorAddress]")]
    [DisplayName("Vendor Address"), InstanceName("Vendor Address"), TwoLevelCached]
    [ReadPermission("Procurement:VendorAddress:Read")]
    [InsertPermission("Procurement:VendorAddress:Insert")]
    [UpdatePermission("Procurement:VendorAddress:Update")]
    [DeletePermission("Procurement:VendorAddress:Delete")]
    public sealed class VendorAddressRow : Row, IIdRow, INameRow
    {

        [DisplayName("Vendor Address Id"), Identity]
        [EditLink, QuickSearch]
        public Int32? VendorAddressId { get { return Fields.VendorAddressId[this]; } set { Fields.VendorAddressId[this] = value; } }
        public partial class RowFields { public Int32Field VendorAddressId; }

        [DisplayName("Vendor Id"), Size(50)]
        [EditLink, QuickSearch]
        public String VendorId { get { return Fields.VendorId[this]; } set { Fields.VendorId[this] = value; } }
        public partial class RowFields { public StringField VendorId; }

        [DisplayName("Address"), ForeignKey("[dbo].[Address]", "AddressId"), LeftJoin("jAddress"), TextualField("AddressName")]
        [EditLink, QuickSearch]
        public Int32? AddressId { get { return Fields.AddressId[this]; } set { Fields.AddressId[this] = value; } }
        public partial class RowFields { public Int32Field AddressId; }

        #region Foreign Fields


        [DisplayName("Address Name"), Expression("jAddress.[Name]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String AddressName { get { return Fields.AddressName[this]; } set { Fields.AddressName[this] = value; } }
        public partial class RowFields { public StringField AddressName; }

        [DisplayName("Address Description"), Expression("jAddress.[Description]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String AddressDescription { get { return Fields.AddressDescription[this]; } set { Fields.AddressDescription[this] = value; } }
        public partial class RowFields { public StringField AddressDescription; }

        [DisplayName("Address Address Type Id"), Expression("jAddress.[AddressTypeId]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public Int32? AddressAddressTypeId { get { return Fields.AddressAddressTypeId[this]; } set { Fields.AddressAddressTypeId[this] = value; } }
        public partial class RowFields { public Int32Field AddressAddressTypeId; }


        #endregion Foreign Fields


        IIdField IIdRow.IdField { get { return Fields.VendorAddressId; } }

        StringField INameRow.NameField { get { return Fields.AddressName; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public VendorAddressRow() : base(Fields) { }

        public partial class RowFields : RowFieldsBase { }
    }
}
