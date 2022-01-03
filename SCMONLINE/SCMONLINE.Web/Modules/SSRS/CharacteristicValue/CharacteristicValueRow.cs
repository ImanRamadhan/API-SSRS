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

    [ConnectionKey("Default"), TableName("[dbo].[CharacteristicValue]")]
    [DisplayName("Characteristic Value"), InstanceName("Characteristic Value"), TwoLevelCached]
    [ReadPermission("Procurement:CharacteristicValue:Read")]
    [InsertPermission("Procurement:CharacteristicValue:Insert")]
    [UpdatePermission("Procurement:CharacteristicValue:Update")]
    [DeletePermission("Procurement:CharacteristicValue:Delete")]
    public sealed class CharacteristicValueRow : Row, IIdRow, INameRow
    {

        [DisplayName("Characteristic Value Id"), Identity]
        public Int64? CharacteristicValueId { get { return Fields.CharacteristicValueId[this]; } set { Fields.CharacteristicValueId[this] = value; } }
		public partial class RowFields { public Int64Field CharacteristicValueId; }

        [DisplayName("Object"), QuickSearch]
        public String Object { get { return Fields.Object[this]; } set { Fields.Object[this] = value; } }
		public partial class RowFields { public StringField Object; }

        [DisplayName("Internal Char")]
        public String InternalChar { get { return Fields.InternalChar[this]; } set { Fields.InternalChar[this] = value; } }
		public partial class RowFields { public StringField InternalChar; }

        [DisplayName("Counter")]
        public String Counter { get { return Fields.Counter[this]; } set { Fields.Counter[this] = value; } }
		public partial class RowFields { public StringField Counter; }

        [DisplayName("Object Class")]
        public String ObjectClass { get { return Fields.ObjectClass[this]; } set { Fields.ObjectClass[this] = value; } }
		public partial class RowFields { public StringField ObjectClass; }

        [DisplayName("Class Type")]
        public String ClassType { get { return Fields.ClassType[this]; } set { Fields.ClassType[this] = value; } }
		public partial class RowFields { public StringField ClassType; }

        [DisplayName("Int Counter")]
        public String IntCounter { get { return Fields.IntCounter[this]; } set { Fields.IntCounter[this] = value; } }
		public partial class RowFields { public StringField IntCounter; }

        [DisplayName("Char Value")]
        public String CharValue { get { return Fields.CharValue[this]; } set { Fields.CharValue[this] = value; } }
		public partial class RowFields { public StringField CharValue; }

        [DisplayName("Value From")]
        public String ValueFrom { get { return Fields.ValueFrom[this]; } set { Fields.ValueFrom[this] = value; } }
		public partial class RowFields { public StringField ValueFrom; }

        [DisplayName("Int Meas Unit")]
        public String IntMeasUnit { get { return Fields.IntMeasUnit[this]; } set { Fields.IntMeasUnit[this] = value; } }
		public partial class RowFields { public StringField IntMeasUnit; }

        [DisplayName("Value To")]
        public String ValueTo { get { return Fields.ValueTo[this]; } set { Fields.ValueTo[this] = value; } }
		public partial class RowFields { public StringField ValueTo; }

        [DisplayName("Code")]
        public String Code { get { return Fields.Code[this]; } set { Fields.Code[this] = value; } }
		public partial class RowFields { public StringField Code; }

        [DisplayName("Tolerance From")]
        public String ToleranceFrom { get { return Fields.ToleranceFrom[this]; } set { Fields.ToleranceFrom[this] = value; } }
		public partial class RowFields { public StringField ToleranceFrom; }

        [DisplayName("Tolerance To")]
        public String ToleranceTo { get { return Fields.ToleranceTo[this]; } set { Fields.ToleranceTo[this] = value; } }
		public partial class RowFields { public StringField ToleranceTo; }

        [DisplayName("Percentage")]
        public String Percentage { get { return Fields.Percentage[this]; } set { Fields.Percentage[this] = value; } }
		public partial class RowFields { public StringField Percentage; }

        [DisplayName("Increment")]
        public String Increment { get { return Fields.Increment[this]; } set { Fields.Increment[this] = value; } }
		public partial class RowFields { public StringField Increment; }

        [DisplayName("Author")]
        public String Author { get { return Fields.Author[this]; } set { Fields.Author[this] = value; } }
		public partial class RowFields { public StringField Author; }

        [DisplayName("Change Number")]
        public String ChangeNumber { get { return Fields.ChangeNumber[this]; } set { Fields.ChangeNumber[this] = value; } }
		public partial class RowFields { public StringField ChangeNumber; }

        [DisplayName("Valid From")]
        public String ValidFrom { get { return Fields.ValidFrom[this]; } set { Fields.ValidFrom[this] = value; } }
		public partial class RowFields { public StringField ValidFrom; }

        [DisplayName("Deletion Ind")]
        public String DeletionInd { get { return Fields.DeletionInd[this]; } set { Fields.DeletionInd[this] = value; } }
		public partial class RowFields { public StringField DeletionInd; }

        [DisplayName("Instance Cntr")]
        public String InstanceCntr { get { return Fields.InstanceCntr[this]; } set { Fields.InstanceCntr[this] = value; } }
		public partial class RowFields { public StringField InstanceCntr; }

        [DisplayName("Position")]
        public String Position { get { return Fields.Position[this]; } set { Fields.Position[this] = value; } }
		public partial class RowFields { public StringField Position; }

        [DisplayName("Comp Type")]
        public String CompType { get { return Fields.CompType[this]; } set { Fields.CompType[this] = value; } }
		public partial class RowFields { public StringField CompType; }

        #region Foreign Fields

        #endregion Foreign Fields


        IIdField IIdRow.IdField { get { return Fields.CharacteristicValueId; } }

        StringField INameRow.NameField { get { return Fields.Object; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public CharacteristicValueRow() : base(Fields) { }

		public partial class RowFields : RowFieldsBase { }
    }
}
