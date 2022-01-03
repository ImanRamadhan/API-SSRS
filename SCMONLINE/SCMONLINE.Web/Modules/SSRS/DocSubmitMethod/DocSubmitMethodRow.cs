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

    [ConnectionKey("Default"), TableName("[dbo].[DocSubmitMethod]")]
    [DisplayName("Doc Submit Method"), InstanceName("Doc Submit Method"), TwoLevelCached]
    [ReadPermission("Procurement:DocSubmitMethod:Read")]
    [InsertPermission("Procurement:DocSubmitMethod:Insert")]
    [UpdatePermission("Procurement:DocSubmitMethod:Update")]
    [DeletePermission("Procurement:DocSubmitMethod:Delete")]
    [LookupScript]
    public sealed class DocSubmitMethodRow : Row, IIdRow, INameRow
    {

        [DisplayName("Doc Submit Method Id"), Identity]
        [EditLink,QuickSearch] 
 public Int32? DocSubmitMethodId { get { return Fields.DocSubmitMethodId[this]; } set { Fields.DocSubmitMethodId[this] = value; } }
		public partial class RowFields { public Int32Field DocSubmitMethodId; }

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


        IIdField IIdRow.IdField { get { return Fields.DocSubmitMethodId; } }

        StringField INameRow.NameField { get { return Fields.Name; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public DocSubmitMethodRow() : base(Fields) { }

		public partial class RowFields : RowFieldsBase { }
    }
}
