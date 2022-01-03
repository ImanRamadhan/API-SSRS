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

    [ConnectionKey("Default"), TableName("[dbo].[ProcurementMethod]")]
    [DisplayName("Procurement Method"), InstanceName("Procurement Method"), TwoLevelCached]
    [ReadPermission("Procurement:ProcurementMethod:Read")]
    [InsertPermission("Procurement:ProcurementMethod:Insert")]
    [UpdatePermission("Procurement:ProcurementMethod:Update")]
    [DeletePermission("Procurement:ProcurementMethod:Delete")]
    [LookupScript]
    public sealed class ProcurementMethodRow : Row, IIdRow, INameRow
    {

        [DisplayName("Procurement Method Id"), Size(50), PrimaryKey]
        [EditLink,QuickSearch] 
 public String ProcurementMethodId { get { return Fields.ProcurementMethodId[this]; } set { Fields.ProcurementMethodId[this] = value; } }
		public partial class RowFields { public StringField ProcurementMethodId; }

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


        IIdField IIdRow.IdField { get { return Fields.ProcurementMethodId; } }

        StringField INameRow.NameField { get { return Fields.Name; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProcurementMethodRow() : base(Fields) { }

		public partial class RowFields : RowFieldsBase { }
    }
}
