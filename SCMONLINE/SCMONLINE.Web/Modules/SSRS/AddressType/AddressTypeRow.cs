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

    [ConnectionKey("Default"), TableName("[dbo].[AddressType]")]
    [DisplayName("Address Type"), InstanceName("Address Type"), TwoLevelCached]
    [ReadPermission("Procurement:AddressType:Read")]
    [InsertPermission("Procurement:AddressType:Insert")]
    [UpdatePermission("Procurement:AddressType:Update")]
    [DeletePermission("Procurement:AddressType:Delete")]
    [LookupScript]
    public sealed class AddressTypeRow : Row, IIdRow, INameRow
    {

        [DisplayName("Address Type Id"), Identity]
        [EditLink, QuickSearch]
        public Int32? AddressTypeId { get { return Fields.AddressTypeId[this]; } set { Fields.AddressTypeId[this] = value; } }
        public partial class RowFields { public Int32Field AddressTypeId; }

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


        IIdField IIdRow.IdField { get { return Fields.AddressTypeId; } }

        StringField INameRow.NameField { get { return Fields.Name; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public AddressTypeRow() : base(Fields) { }

        public partial class RowFields : RowFieldsBase { }
    }
}
