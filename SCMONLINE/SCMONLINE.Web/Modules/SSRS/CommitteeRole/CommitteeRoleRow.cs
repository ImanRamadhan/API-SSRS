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

    [ConnectionKey("Default"), TableName("[dbo].[CommitteeRole]")]
    [DisplayName("Committee Role"), InstanceName("Committee Role"), TwoLevelCached]
    [ReadPermission("Procurement:CommitteeRole:Read")]
    [InsertPermission("Procurement:CommitteeRole:Insert")]
    [UpdatePermission("Procurement:CommitteeRole:Update")]
    [DeletePermission("Procurement:CommitteeRole:Delete")]
    [LookupScript]
    public sealed class CommitteeRoleRow : Row, IIdRow, INameRow
    {

        [DisplayName("Committee Role Id"), Identity]
        [EditLink,QuickSearch] 
 public Int32? CommitteeRoleId { get { return Fields.CommitteeRoleId[this]; } set { Fields.CommitteeRoleId[this] = value; } }
		public partial class RowFields { public Int32Field CommitteeRoleId; }

        [DisplayName("Name")]
        [EditLink,QuickSearch] 
 public String Name { get { return Fields.Name[this]; } set { Fields.Name[this] = value; } }
		public partial class RowFields { public StringField Name; }

        [DisplayName("Description")]
        [EditLink,QuickSearch] 
 public String Description { get { return Fields.Description[this]; } set { Fields.Description[this] = value; } }
		public partial class RowFields { public StringField Description; }

        [DisplayName("Mandatory Role")]
        [LookupInclude]
        [EditLink, QuickSearch]
        public Boolean? MandatoryRole { get { return Fields.MandatoryRole[this]; } set { Fields.MandatoryRole[this] = value; } }
        public partial class RowFields { public BooleanField MandatoryRole; }

        #region Foreign Fields

        #endregion Foreign Fields


        IIdField IIdRow.IdField { get { return Fields.CommitteeRoleId; } }

        StringField INameRow.NameField { get { return Fields.Name; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public CommitteeRoleRow() : base(Fields) { }

		public partial class RowFields : RowFieldsBase { }
    }
}
