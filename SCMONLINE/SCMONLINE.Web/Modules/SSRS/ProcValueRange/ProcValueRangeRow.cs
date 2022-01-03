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

    [ConnectionKey("Default"), TableName("[dbo].[ProcValueRange]")]
    [DisplayName("Proc Value Range"), InstanceName("Proc Value Range"), TwoLevelCached]
    [ReadPermission("Procurement:ProcValueRange:Read")]
    [InsertPermission("Procurement:ProcValueRange:Insert")]
    [UpdatePermission("Procurement:ProcValueRange:Update")]
    [DeletePermission("Procurement:ProcValueRange:Delete")]
    [LookupScript]
    public sealed class ProcValueRangeRow : Row, IIdRow, INameRow
    {

        [DisplayName("Proc Value Range Id"), Identity]
        [EditLink,QuickSearch] 
 public Int32? ProcValueRangeId { get { return Fields.ProcValueRangeId[this]; } set { Fields.ProcValueRangeId[this] = value; } }
		public partial class RowFields { public Int32Field ProcValueRangeId; }

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


        IIdField IIdRow.IdField { get { return Fields.ProcValueRangeId; } }

        StringField INameRow.NameField { get { return Fields.Name; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProcValueRangeRow() : base(Fields) { }

		public partial class RowFields : RowFieldsBase { }
    }
}
