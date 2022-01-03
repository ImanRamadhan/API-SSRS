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

    [ConnectionKey("Default"), TableName("[dbo].[ContractType]")]
    [DisplayName("Contract Type"), InstanceName("Contract Type"), TwoLevelCached]
    [ReadPermission("Procurement:ContractType:Read")]
    [InsertPermission("Procurement:ContractType:Insert")]
    [UpdatePermission("Procurement:ContractType:Update")]
    [DeletePermission("Procurement:ContractType:Delete")]
    [LookupScript]
    public sealed class ContractTypeRow : Row, IIdRow, INameRow
    {

        [DisplayName("Contract Type Id"), Identity]
        [EditLink, QuickSearch]
        public Int32? ContractTypeId { get { return Fields.ContractTypeId[this]; } set { Fields.ContractTypeId[this] = value; } }
        public partial class RowFields { public Int32Field ContractTypeId; }

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


        IIdField IIdRow.IdField { get { return Fields.ContractTypeId; } }

        StringField INameRow.NameField { get { return Fields.Name; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public ContractTypeRow() : base(Fields) { }

        public partial class RowFields : RowFieldsBase { }
    }
}
