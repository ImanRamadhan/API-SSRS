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

    [ConnectionKey("Default"), TableName("[dbo].[Address]")]
    [DisplayName("Address"), InstanceName("Address"), TwoLevelCached]
    [ReadPermission("Procurement:Address:Read")]
    [InsertPermission("Procurement:Address:Insert")]
    [UpdatePermission("Procurement:Address:Update")]
    [DeletePermission("Procurement:Address:Delete")]
    [LookupScript]
    public sealed class AddressRow : Row, IIdRow, INameRow
    {

        [DisplayName("Address Id"), Identity]
        [EditLink, QuickSearch]
        public Int32? AddressId { get { return Fields.AddressId[this]; } set { Fields.AddressId[this] = value; } }
        public partial class RowFields { public Int32Field AddressId; }

        [DisplayName("Alamat")]
        [EditLink, QuickSearch]
        [TextAreaEditor]
        public String Name { get { return Fields.Name[this]; } set { Fields.Name[this] = value; } }
        public partial class RowFields { public StringField Name; }

        [DisplayName("Keterangan")]
        [EditLink, QuickSearch]
        [TextAreaEditor]
        public String Description { get { return Fields.Description[this]; } set { Fields.Description[this] = value; } }
        public partial class RowFields { public StringField Description; }

        [DisplayName("Address Type"), ForeignKey("[dbo].[AddressType]", "AddressTypeId"), LeftJoin("jAddressType"), TextualField("AddressTypeName")]
        [EditLink, QuickSearch]
        [LookupEditor(typeof(AddressTypeRow))]
        public Int32? AddressTypeId { get { return Fields.AddressTypeId[this]; } set { Fields.AddressTypeId[this] = value; } }
        public partial class RowFields { public Int32Field AddressTypeId; }

        #region Foreign Fields


        [DisplayName("Address Type Name"), Expression("jAddressType.[Name]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String AddressTypeName { get { return Fields.AddressTypeName[this]; } set { Fields.AddressTypeName[this] = value; } }
        public partial class RowFields { public StringField AddressTypeName; }

        [DisplayName("Address Type Description"), Expression("jAddressType.[Description]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String AddressTypeDescription { get { return Fields.AddressTypeDescription[this]; } set { Fields.AddressTypeDescription[this] = value; } }
        public partial class RowFields { public StringField AddressTypeDescription; }


        #endregion Foreign Fields


        IIdField IIdRow.IdField { get { return Fields.AddressId; } }

        StringField INameRow.NameField { get { return Fields.Name; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public AddressRow() : base(Fields) { }

        public partial class RowFields : RowFieldsBase { }
    }
}
