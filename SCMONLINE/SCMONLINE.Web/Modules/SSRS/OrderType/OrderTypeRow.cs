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

    [ConnectionKey("Default"), TableName("[dbo].[OrderType]")]
    [DisplayName("Order Type"), InstanceName("Order Type"), TwoLevelCached]
    [ReadPermission("Procurement:OrderType:Read")]
    [InsertPermission("Procurement:OrderType:Insert")]
    [UpdatePermission("Procurement:OrderType:Update")]
    [DeletePermission("Procurement:OrderType:Delete")]
    [LookupScript]
    public sealed class OrderTypeRow : Row, IIdRow, INameRow
    {

        [DisplayName("Order Type Id"), Size(4), PrimaryKey]
        [EditLink,QuickSearch] 
 public String OrderTypeId { get { return Fields.OrderTypeId[this]; } set { Fields.OrderTypeId[this] = value; } }
		public partial class RowFields { public StringField OrderTypeId; }

        [DisplayName("Name")]
        [EditLink,QuickSearch] 
 public String Name { get { return Fields.Name[this]; } set { Fields.Name[this] = value; } }
		public partial class RowFields { public StringField Name; }

        [DisplayName("Description")]
        [EditLink,QuickSearch] 
 public String Description { get { return Fields.Description[this]; } set { Fields.Description[this] = value; } }
		public partial class RowFields { public StringField Description; }

        #region Foreign Fields

        #endregion Foreign Fields


        IIdField IIdRow.IdField { get { return Fields.OrderTypeId; } }

        StringField INameRow.NameField { get { return Fields.OrderTypeId; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public OrderTypeRow() : base(Fields) { }

		public partial class RowFields : RowFieldsBase { }
    }
}
