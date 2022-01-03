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

    [ConnectionKey("Default"), TableName("[dbo].[CharacteristicDescription]")]
    [DisplayName("Characteristic Description"), InstanceName("Characteristic Description"), TwoLevelCached]
    [ReadPermission("Procurement:CharacteristicDescription:Read")]
    [InsertPermission("Procurement:CharacteristicDescription:Insert")]
    [UpdatePermission("Procurement:CharacteristicDescription:Update")]
    [DeletePermission("Procurement:CharacteristicDescription:Delete")]
    public sealed class CharacteristicDescriptionRow : Row, IIdRow, INameRow
    {

        [DisplayName("Internal Char"), Size(20), PrimaryKey, QuickSearch]
        public String InternalChar { get { return Fields.InternalChar[this]; } set { Fields.InternalChar[this] = value; } }
		public partial class RowFields { public StringField InternalChar; }

        [DisplayName("Language"), Size(2)]
        public String Language { get { return Fields.Language[this]; } set { Fields.Language[this] = value; } }
		public partial class RowFields { public StringField Language; }

        [DisplayName("Int Counter")]
        public Int32? IntCounter { get { return Fields.IntCounter[this]; } set { Fields.IntCounter[this] = value; } }
		public partial class RowFields { public Int32Field IntCounter; }

        [DisplayName("Description"), Size(60)]
        public String Description { get { return Fields.Description[this]; } set { Fields.Description[this] = value; } }
		public partial class RowFields { public StringField Description; }

        [DisplayName("Heading1"), Size(60)]
        public String Heading1 { get { return Fields.Heading1[this]; } set { Fields.Heading1[this] = value; } }
		public partial class RowFields { public StringField Heading1; }

        [DisplayName("Heading2"), Size(60)]
        public String Heading2 { get { return Fields.Heading2[this]; } set { Fields.Heading2[this] = value; } }
		public partial class RowFields { public StringField Heading2; }

        [DisplayName("Valid From")]
        public DateTime? ValidFrom { get { return Fields.ValidFrom[this]; } set { Fields.ValidFrom[this] = value; } }
		public partial class RowFields { public DateTimeField ValidFrom; }

        [DisplayName("Tech St From"), Size(24)]
        public String TechStFrom { get { return Fields.TechStFrom[this]; } set { Fields.TechStFrom[this] = value; } }
		public partial class RowFields { public StringField TechStFrom; }

        [DisplayName("Change Number"), Size(24)]
        public String ChangeNumber { get { return Fields.ChangeNumber[this]; } set { Fields.ChangeNumber[this] = value; } }
		public partial class RowFields { public StringField ChangeNumber; }

        [DisplayName("Deletion Ind"), Size(2)]
        public String DeletionInd { get { return Fields.DeletionInd[this]; } set { Fields.DeletionInd[this] = value; } }
		public partial class RowFields { public StringField DeletionInd; }

        #region Foreign Fields

        #endregion Foreign Fields


        IIdField IIdRow.IdField { get { return Fields.InternalChar; } }

        StringField INameRow.NameField { get { return Fields.InternalChar; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public CharacteristicDescriptionRow() : base(Fields) { }

		public partial class RowFields : RowFieldsBase { }
    }
}
