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

    [ConnectionKey("Default"), TableName("[dbo].[Currency]")]
    [DisplayName("Currency"), InstanceName("Currency"), TwoLevelCached]
    [ReadPermission("Procurement:Currency:Read")]
    [InsertPermission("Procurement:Currency:Insert")]
    [UpdatePermission("Procurement:Currency:Update")]
    [DeletePermission("Procurement:Currency:Delete")]
    [LookupScript]
    public sealed class CurrencyRow : Row, IIdRow, INameRow
    {

        [DisplayName("Currency Id"), Size(3), PrimaryKey]
        [EditLink,QuickSearch] 
 public String CurrencyId { get { return Fields.CurrencyId[this]; } set { Fields.CurrencyId[this] = value; } }
		public partial class RowFields { public StringField CurrencyId; }

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


        IIdField IIdRow.IdField { get { return Fields.CurrencyId; } }

        StringField INameRow.NameField { get { return Fields.CurrencyId; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public CurrencyRow() : base(Fields) { }

		public partial class RowFields : RowFieldsBase { }
    }
}
