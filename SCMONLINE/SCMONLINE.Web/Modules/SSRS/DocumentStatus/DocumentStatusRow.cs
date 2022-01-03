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

    [ConnectionKey("Default"), TableName("[dbo].[DocumentStatus]")]
    [DisplayName("Document Status"), InstanceName("Document Status"), TwoLevelCached]
    [ReadPermission("Procurement:DocumentStatus:Read")]
    [InsertPermission("Procurement:DocumentStatus:Insert")]
    [UpdatePermission("Procurement:DocumentStatus:Update")]
    [DeletePermission("Procurement:DocumentStatus:Delete")]
    [LookupScript]
    public sealed class DocumentStatusRow : Row, IIdRow, INameRow
    {

        [DisplayName("Document Status Id"), Identity]
        [EditLink,QuickSearch] 
 public Int32? DocumentStatusId { get { return Fields.DocumentStatusId[this]; } set { Fields.DocumentStatusId[this] = value; } }
		public partial class RowFields { public Int32Field DocumentStatusId; }

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


        IIdField IIdRow.IdField { get { return Fields.DocumentStatusId; } }

        StringField INameRow.NameField { get { return Fields.Name; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public DocumentStatusRow() : base(Fields) { }

		public partial class RowFields : RowFieldsBase { }
    }
}
