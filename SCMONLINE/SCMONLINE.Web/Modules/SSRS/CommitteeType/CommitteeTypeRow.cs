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

    [ConnectionKey("Default"), TableName("[dbo].[CommitteeType]")]
    [DisplayName("Committee Type"), InstanceName("Committee Type"), TwoLevelCached]
    [ReadPermission("Procurement:CommitteeType:Read")]
    [InsertPermission("Procurement:CommitteeType:Insert")]
    [UpdatePermission("Procurement:CommitteeType:Update")]
    [DeletePermission("Procurement:CommitteeType:Delete")]
    [LookupScript]
    public sealed class CommitteeTypeRow : Row, IIdRow, INameRow
    {

        [DisplayName("Committee Type Id"), Identity]
        [EditLink, QuickSearch]
        public Int32? CommitteeTypeId { get { return Fields.CommitteeTypeId[this]; } set { Fields.CommitteeTypeId[this] = value; } }
        public partial class RowFields { public Int32Field CommitteeTypeId; }

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


        IIdField IIdRow.IdField { get { return Fields.CommitteeTypeId; } }

        StringField INameRow.NameField { get { return Fields.Name; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public CommitteeTypeRow() : base(Fields) { }

        public partial class RowFields : RowFieldsBase { }
    }
}
