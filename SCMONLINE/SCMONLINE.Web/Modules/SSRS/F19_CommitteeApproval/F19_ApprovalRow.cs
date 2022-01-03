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

    [ConnectionKey("Default")]
    [DisplayName("F19 Approval"), InstanceName("F19 Approval"), TwoLevelCached]
    public sealed class F19_ApprovalRow : Row, IIdRow, INameRow
    {

        [DisplayName("ID"),Size(100), QuickSearch]
        public Int32? id { get { return Fields.id[this]; } set { Fields.id[this] = value; } }
        public partial class RowFields { public Int32Field id; }

        [DisplayName("Role Id"), Size(100), QuickSearch]
        public Int32? role { get { return Fields.role[this]; } set { Fields.role[this] = value; } }
        public partial class RowFields { public Int32Field role; }

        [DisplayName("Komite Role"), Size(100), QuickSearch]
        public Int32? committee { get { return Fields.committee[this]; } set { Fields.committee[this] = value; } }
        public partial class RowFields { public Int32Field committee; }

        [DisplayName("MandatoryRole"), Size(100), QuickSearch]
        public Int32? mandatory { get { return Fields.mandatory[this]; } set { Fields.mandatory[this] = value; } }
        public partial class RowFields { public Int32Field mandatory; }

        [DisplayName("RoleMandatory"), Size(100), QuickSearch]
        public Int32? locale { get { return Fields.locale[this]; } set { Fields.locale[this] = value; } }
        public partial class RowFields { public Int32Field locale; }

        [DisplayName("Approval Status"), Size(100), QuickSearch]
        public Int32? ApprovalStatus { get { return Fields.ApprovalStatus[this]; } set { Fields.ApprovalStatus[this] = value; } }
        public partial class RowFields { public Int32Field ApprovalStatus; }


        #region Foreign Fields


        [DisplayName("Procurement Type Name"), Expression("jProcurementType.[Name]"), ReadOnly(true)]
        public String ProcurementTypeName { get { return Fields.ProcurementTypeName[this]; } set { Fields.ProcurementTypeName[this] = value; } }
		public partial class RowFields { public StringField ProcurementTypeName; }

        [DisplayName("Procurement Type Description"), Expression("jProcurementType.[Description]"), ReadOnly(true)]
        public String ProcurementTypeDescription { get { return Fields.ProcurementTypeDescription[this]; } set { Fields.ProcurementTypeDescription[this] = value; } }
		public partial class RowFields { public StringField ProcurementTypeDescription; }



        [DisplayName("Status Name"), Expression("jStatus.[Name]"), ReadOnly(true)]
        public String StatusName { get { return Fields.StatusName[this]; } set { Fields.StatusName[this] = value; } }
		public partial class RowFields { public StringField StatusName; }

        [DisplayName("Status Description"), Expression("jStatus.[Description]"), ReadOnly(true)]
        public String StatusDescription { get { return Fields.StatusDescription[this]; } set { Fields.StatusDescription[this] = value; } }
		public partial class RowFields { public StringField StatusDescription; }



        [DisplayName("Office Address Name"), Expression("jOfficeAddress.[Name]"), ReadOnly(true)]
        public String OfficeAddressName { get { return Fields.OfficeAddressName[this]; } set { Fields.OfficeAddressName[this] = value; } }
		public partial class RowFields { public StringField OfficeAddressName; }

        [DisplayName("Office Address Description"), Expression("jOfficeAddress.[Description]"), ReadOnly(true)]
        public String OfficeAddressDescription { get { return Fields.OfficeAddressDescription[this]; } set { Fields.OfficeAddressDescription[this] = value; } }
		public partial class RowFields { public StringField OfficeAddressDescription; }

        [DisplayName("Office Address Address Type Id"), Expression("jOfficeAddress.[AddressTypeId]"), ReadOnly(true)]
        public Int32? OfficeAddressAddressTypeId { get { return Fields.OfficeAddressAddressTypeId[this]; } set { Fields.OfficeAddressAddressTypeId[this] = value; } }
		public partial class RowFields { public Int32Field OfficeAddressAddressTypeId; }



        [DisplayName("Proc Value Range Name"), Expression("jProcValueRange.[Name]"), ReadOnly(true)]
        public String ProcValueRangeName { get { return Fields.ProcValueRangeName[this]; } set { Fields.ProcValueRangeName[this] = value; } }
		public partial class RowFields { public StringField ProcValueRangeName; }

        [DisplayName("Proc Value Range Description"), Expression("jProcValueRange.[Description]"), ReadOnly(true)]
        public String ProcValueRangeDescription { get { return Fields.ProcValueRangeDescription[this]; } set { Fields.ProcValueRangeDescription[this] = value; } }
		public partial class RowFields { public StringField ProcValueRangeDescription; }



        [DisplayName("Committee Type Name"), Expression("jCommitteeType.[Name]"), ReadOnly(true)]
        public String CommitteeTypeName { get { return Fields.CommitteeTypeName[this]; } set { Fields.CommitteeTypeName[this] = value; } }
		public partial class RowFields { public StringField CommitteeTypeName; }

        [DisplayName("Committee Type Description"), Expression("jCommitteeType.[Description]"), ReadOnly(true)]
        public String CommitteeTypeDescription { get { return Fields.CommitteeTypeDescription[this]; } set { Fields.CommitteeTypeDescription[this] = value; } }
		public partial class RowFields { public StringField CommitteeTypeDescription; }



        [DisplayName("Destination Name"), Expression("jDestination.[Name]"), ReadOnly(true)]
        public String DestinationName { get { return Fields.DestinationName[this]; } set { Fields.DestinationName[this] = value; } }
		public partial class RowFields { public StringField DestinationName; }

        [DisplayName("Destination Description"), Expression("jDestination.[Description]"), ReadOnly(true)]
        public String DestinationDescription { get { return Fields.DestinationDescription[this]; } set { Fields.DestinationDescription[this] = value; } }
		public partial class RowFields { public StringField DestinationDescription; }

        [DisplayName("Destination Address Type Id"), Expression("jDestination.[AddressTypeId]"), ReadOnly(true)]
        public Int32? DestinationAddressTypeId { get { return Fields.DestinationAddressTypeId[this]; } set { Fields.DestinationAddressTypeId[this] = value; } }
		public partial class RowFields { public Int32Field DestinationAddressTypeId; }



        [DisplayName("Contract Type Name"), Expression("jContractType.[Name]"), ReadOnly(true)]
        public String ContractTypeName { get { return Fields.ContractTypeName[this]; } set { Fields.ContractTypeName[this] = value; } }
		public partial class RowFields { public StringField ContractTypeName; }

        [DisplayName("Contract Type Description"), Expression("jContractType.[Description]"), ReadOnly(true)]
        public String ContractTypeDescription { get { return Fields.ContractTypeDescription[this]; } set { Fields.ContractTypeDescription[this] = value; } }
		public partial class RowFields { public StringField ContractTypeDescription; }



        [DisplayName("Currency Name"), Expression("jCurrency.[Name]"), ReadOnly(true)]
        public String CurrencyName { get { return Fields.CurrencyName[this]; } set { Fields.CurrencyName[this] = value; } }
		public partial class RowFields { public StringField CurrencyName; }

        [DisplayName("Currency Description"), Expression("jCurrency.[Description]"), ReadOnly(true)]
        public String CurrencyDescription { get { return Fields.CurrencyDescription[this]; } set { Fields.CurrencyDescription[this] = value; } }
		public partial class RowFields { public StringField CurrencyDescription; }



        [DisplayName("Doc Submit Method Name"), Expression("jDocSubmitMethod.[Name]"), ReadOnly(true)]
        public String DocSubmitMethodName { get { return Fields.DocSubmitMethodName[this]; } set { Fields.DocSubmitMethodName[this] = value; } }
		public partial class RowFields { public StringField DocSubmitMethodName; }

        [DisplayName("Doc Submit Method Description"), Expression("jDocSubmitMethod.[Description]"), ReadOnly(true)]
        public String DocSubmitMethodDescription { get { return Fields.DocSubmitMethodDescription[this]; } set { Fields.DocSubmitMethodDescription[this] = value; } }
		public partial class RowFields { public StringField DocSubmitMethodDescription; }



        [DisplayName("Order Type Name"), Expression("jOrderType.[Name]"), ReadOnly(true)]
        public String OrderTypeName { get { return Fields.OrderTypeName[this]; } set { Fields.OrderTypeName[this] = value; } }
		public partial class RowFields { public StringField OrderTypeName; }

        [DisplayName("Order Type Description"), Expression("jOrderType.[Description]"), ReadOnly(true)]
        public String OrderTypeDescription { get { return Fields.OrderTypeDescription[this]; } set { Fields.OrderTypeDescription[this] = value; } }
		public partial class RowFields { public StringField OrderTypeDescription; }



        [DisplayName("Procurement Method Name"), Expression("jProcurementMethod.[Name]"), ReadOnly(true)]
        public String ProcurementMethodName { get { return Fields.ProcurementMethodName[this]; } set { Fields.ProcurementMethodName[this] = value; } }
		public partial class RowFields { public StringField ProcurementMethodName; }

        [DisplayName("Procurement Method Description"), Expression("jProcurementMethod.[Description]"), ReadOnly(true)]
        public String ProcurementMethodDescription { get { return Fields.ProcurementMethodDescription[this]; } set { Fields.ProcurementMethodDescription[this] = value; } }
		public partial class RowFields { public StringField ProcurementMethodDescription; }


        #endregion Foreign Fields


        IIdField IIdRow.IdField { get { return Fields.id; } }

        StringField INameRow.NameField { get { return Fields.ProcurementTypeName; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public F19_ApprovalRow() : base(Fields) { }

		public partial class RowFields : RowFieldsBase { }
    }
}
