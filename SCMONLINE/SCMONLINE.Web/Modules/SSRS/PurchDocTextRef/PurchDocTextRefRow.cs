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

    [ConnectionKey("Default"), TableName("[dbo].[PurchDocTextRef]")]
    [DisplayName("Purch Doc Text Ref"), InstanceName("Purch Doc Text Ref"), TwoLevelCached]
    [ReadPermission("Procurement:PurchDocTextRef:Read")]
    [InsertPermission("Procurement:PurchDocTextRef:Insert")]
    [UpdatePermission("Procurement:PurchDocTextRef:Update")]
    [DeletePermission("Procurement:PurchDocTextRef:Delete")]
    [LookupScript]
    public sealed class PurchDocTextRefRow : Row, IIdRow, INameRow
    {

        [DisplayName("Text Id"), Size(4), PrimaryKey]
        [EditLink, QuickSearch]
        public String TextId { get { return Fields.TextId[this]; } set { Fields.TextId[this] = value; } }
        public partial class RowFields { public StringField TextId; }

        [DisplayName("Meaning"), Size(30)]
        [EditLink, QuickSearch]
        public String Meaning { get { return Fields.Meaning[this]; } set { Fields.Meaning[this] = value; } }
        public partial class RowFields { public StringField Meaning; }

        #region Foreign Fields

        #endregion Foreign Fields


        IIdField IIdRow.IdField { get { return Fields.TextId; } }

        StringField INameRow.NameField { get { return Fields.Meaning; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public PurchDocTextRefRow() : base(Fields) { }

        public partial class RowFields : RowFieldsBase { }
    }
}
