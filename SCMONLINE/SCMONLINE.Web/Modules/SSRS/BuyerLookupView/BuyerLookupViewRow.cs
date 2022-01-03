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

    [ConnectionKey("Default"), TableName("[dbo].[BuyerLookupView]")]
    [DisplayName("Buyer Lookup View"), InstanceName("Buyer Lookup View"), TwoLevelCached]
    [ReadPermission("Procurement:BuyerLookupView:Read")]
    [InsertPermission("Procurement:BuyerLookupView:Insert")]
    [UpdatePermission("Procurement:BuyerLookupView:Update")]
    [DeletePermission("Procurement:BuyerLookupView:Delete")]
    [LookupScript(Expiration = -1)]
    public sealed class BuyerLookupViewRow : Row, IIdRow, INameRow
    {

        [DisplayName("User Id"), NotNull]
        public Int32? UserId { get { return Fields.UserId[this]; } set { Fields.UserId[this] = value; } }
        public partial class RowFields { public Int32Field UserId; }

        [DisplayName("Name"), QuickSearch]
        public String Name { get { return Fields.Name[this]; } set { Fields.Name[this] = value; } }
        public partial class RowFields { public StringField Name; }

        [DisplayName("Active Pr"), Column("ActivePR")]
        public Int32? ActivePr { get { return Fields.ActivePr[this]; } set { Fields.ActivePr[this] = value; } }
        public partial class RowFields { public Int32Field ActivePr; }

        #region Foreign Fields

        #endregion Foreign Fields


        IIdField IIdRow.IdField { get { return Fields.UserId; } }

        StringField INameRow.NameField { get { return Fields.Name; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public BuyerLookupViewRow() : base(Fields) { }

        public partial class RowFields : RowFieldsBase { }
    }
}
