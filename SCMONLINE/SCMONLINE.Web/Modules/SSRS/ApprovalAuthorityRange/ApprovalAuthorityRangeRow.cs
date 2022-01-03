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

    [ConnectionKey("Default"), TableName("[dbo].[ApprovalAuthorityRange]")]
    [DisplayName("Approval Authority Range"), InstanceName("Approval Authority Range"), TwoLevelCached]
    [ReadPermission("Procurement:ApprovalAuthorityRange:Read")]
    [InsertPermission("Procurement:ApprovalAuthorityRange:Insert")]
    [UpdatePermission("Procurement:ApprovalAuthorityRange:Update")]
    [DeletePermission("Procurement:ApprovalAuthorityRange:Delete")]
    public sealed class ApprovalAuthorityRangeRow : Row, IIdRow, INameRow
    {

        [DisplayName("Approval Authority Range Id"), Identity]
        public Int32? ApprovalAuthorityRangeId { get { return Fields.ApprovalAuthorityRangeId[this]; } set { Fields.ApprovalAuthorityRangeId[this] = value; } }
		public partial class RowFields { public Int32Field ApprovalAuthorityRangeId; }

        [DisplayName("Role"), ForeignKey("[dbo].[Roles]", "RoleId"), LeftJoin("jRole"), TextualField("RoleRoleName")]
        public Int32? RoleId { get { return Fields.RoleId[this]; } set { Fields.RoleId[this] = value; } }
		public partial class RowFields { public Int32Field RoleId; }

        [DisplayName("Procurement Type"), Size(1), ForeignKey("[dbo].[ProcurementType]", "ProcurementTypeId"), LeftJoin("jProcurementType"), QuickSearch, TextualField("ProcurementTypeName")]
        public String ProcurementTypeId { get { return Fields.ProcurementTypeId[this]; } set { Fields.ProcurementTypeId[this] = value; } }
		public partial class RowFields { public StringField ProcurementTypeId; }

        [DisplayName("Currency"), Size(3), ForeignKey("[dbo].[Currency]", "CurrencyId"), LeftJoin("jCurrency"), TextualField("CurrencyName")]
        public String CurrencyId { get { return Fields.CurrencyId[this]; } set { Fields.CurrencyId[this] = value; } }
		public partial class RowFields { public StringField CurrencyId; }

        [DisplayName("Min Value"), Size(19), Scale(4)]
        public Decimal? MinValue { get { return Fields.MinValue[this]; } set { Fields.MinValue[this] = value; } }
		public partial class RowFields { public DecimalField MinValue; }

        [DisplayName("Max Value"), Size(19), Scale(4)]
        public Decimal? MaxValue { get { return Fields.MaxValue[this]; } set { Fields.MaxValue[this] = value; } }
		public partial class RowFields { public DecimalField MaxValue; }

        #region Foreign Fields


        [DisplayName("Role Role Name"), Expression("jRole.[RoleName]"), ReadOnly(true)]
        public String RoleRoleName { get { return Fields.RoleRoleName[this]; } set { Fields.RoleRoleName[this] = value; } }
		public partial class RowFields { public StringField RoleRoleName; }

        [DisplayName("Role Cost Center"), Expression("jRole.[CostCenter]"), ReadOnly(true)]
        public String RoleCostCenter { get { return Fields.RoleCostCenter[this]; } set { Fields.RoleCostCenter[this] = value; } }
		public partial class RowFields { public StringField RoleCostCenter; }



        [DisplayName("Procurement Type Name"), Expression("jProcurementType.[Name]"), ReadOnly(true)]
        public String ProcurementTypeName { get { return Fields.ProcurementTypeName[this]; } set { Fields.ProcurementTypeName[this] = value; } }
		public partial class RowFields { public StringField ProcurementTypeName; }

        [DisplayName("Procurement Type Description"), Expression("jProcurementType.[Description]"), ReadOnly(true)]
        public String ProcurementTypeDescription { get { return Fields.ProcurementTypeDescription[this]; } set { Fields.ProcurementTypeDescription[this] = value; } }
		public partial class RowFields { public StringField ProcurementTypeDescription; }



        [DisplayName("Currency Name"), Expression("jCurrency.[Name]"), ReadOnly(true)]
        public String CurrencyName { get { return Fields.CurrencyName[this]; } set { Fields.CurrencyName[this] = value; } }
		public partial class RowFields { public StringField CurrencyName; }

        [DisplayName("Currency Description"), Expression("jCurrency.[Description]"), ReadOnly(true)]
        public String CurrencyDescription { get { return Fields.CurrencyDescription[this]; } set { Fields.CurrencyDescription[this] = value; } }
		public partial class RowFields { public StringField CurrencyDescription; }


        #endregion Foreign Fields


        IIdField IIdRow.IdField { get { return Fields.ApprovalAuthorityRangeId; } }

        StringField INameRow.NameField { get { return Fields.ProcurementTypeId; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public ApprovalAuthorityRangeRow() : base(Fields) { }

		public partial class RowFields : RowFieldsBase { }
    }
}
