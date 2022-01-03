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

    [ConnectionKey("Default"), TableName("[dbo].[CommitteeMemberMapping]")]
    [DisplayName("Committee Member Mapping"), InstanceName("Committee Member Mapping"), TwoLevelCached]
    [ReadPermission("Procurement:CommitteeMemberMapping:Read")]
    [InsertPermission("Procurement:CommitteeMemberMapping:Insert")]
    [UpdatePermission("Procurement:CommitteeMemberMapping:Update")]
    [DeletePermission("Procurement:CommitteeMemberMapping:Delete")]
    [LookupScript]
    public sealed class CommitteeMemberMappingRow : Row, IIdRow, INameRow
    {

        [DisplayName("Committee Member Mapping Id"), Identity]
        [EditLink,QuickSearch] 
 public Int32? CommitteeMemberMappingId { get { return Fields.CommitteeMemberMappingId[this]; } set { Fields.CommitteeMemberMappingId[this] = value; } }
		public partial class RowFields { public Int32Field CommitteeMemberMappingId; }

        [DisplayName("Sequence")]
        [LookupInclude]
        [EditLink,QuickSearch] 
 public Int32? Sequence { get { return Fields.Sequence[this]; } set { Fields.Sequence[this] = value; } }
		public partial class RowFields { public Int32Field Sequence; }

        [DisplayName("Procurement Type"), Size(1), ForeignKey("[dbo].[ProcurementType]", "ProcurementTypeId"), LeftJoin("jProcurementType"), TextualField("ProcurementTypeName")]
        [LookupInclude]
        [EditLink,QuickSearch] 
 public String ProcurementTypeId { get { return Fields.ProcurementTypeId[this]; } set { Fields.ProcurementTypeId[this] = value; } }
		public partial class RowFields { public StringField ProcurementTypeId; }

        [DisplayName("Proc Value Range"), ForeignKey("[dbo].[ProcValueRange]", "ProcValueRangeId"), LeftJoin("jProcValueRange"), TextualField("ProcValueRangeName")]
        [LookupInclude]
        [EditLink,QuickSearch] 
 public Int32? ProcValueRangeId { get { return Fields.ProcValueRangeId[this]; } set { Fields.ProcValueRangeId[this] = value; } }
		public partial class RowFields { public Int32Field ProcValueRangeId; }

        [DisplayName("Role"), ForeignKey("[dbo].[Roles]", "RoleId"), LeftJoin("jRole"), TextualField("RoleRoleName")]
        [LookupInclude]
        [EditLink,QuickSearch] 
 public Int32? RoleId { get { return Fields.RoleId[this]; } set { Fields.RoleId[this] = value; } }
		public partial class RowFields { public Int32Field RoleId; }

        [DisplayName("Committee Role"), ForeignKey("[dbo].[CommitteeRole]", "CommitteeRoleId"), LeftJoin("jCommitteeRole"), TextualField("CommitteeRoleName")]
        [LookupInclude]
        [EditLink,QuickSearch] 
 public Int32? CommitteeRoleId { get { return Fields.CommitteeRoleId[this]; } set { Fields.CommitteeRoleId[this] = value; } }
		public partial class RowFields { public Int32Field CommitteeRoleId; }

 //       [DisplayName("Mandatory Role")]
 //       [LookupInclude]
 //       [EditLink,QuickSearch] 
 //public Boolean? MandatoryRole { get { return Fields.MandatoryRole[this]; } set { Fields.MandatoryRole[this] = value; } }
	//	public partial class RowFields { public BooleanField MandatoryRole; }

        #region Foreign Fields


        [DisplayName("Procurement Type Name"), Expression("jProcurementType.[Name]"), ReadOnly(true)]
        [EditLink,QuickSearch] 
 public String ProcurementTypeName { get { return Fields.ProcurementTypeName[this]; } set { Fields.ProcurementTypeName[this] = value; } }
		public partial class RowFields { public StringField ProcurementTypeName; }

        [DisplayName("Procurement Type Description"), Expression("jProcurementType.[Description]"), ReadOnly(true)]
        [EditLink,QuickSearch] 
 public String ProcurementTypeDescription { get { return Fields.ProcurementTypeDescription[this]; } set { Fields.ProcurementTypeDescription[this] = value; } }
		public partial class RowFields { public StringField ProcurementTypeDescription; }



        [DisplayName("Proc Value Range Name"), Expression("jProcValueRange.[Name]"), ReadOnly(true)]
        [EditLink,QuickSearch] 
 public String ProcValueRangeName { get { return Fields.ProcValueRangeName[this]; } set { Fields.ProcValueRangeName[this] = value; } }
		public partial class RowFields { public StringField ProcValueRangeName; }

        [DisplayName("Proc Value Range Description"), Expression("jProcValueRange.[Description]"), ReadOnly(true)]
        [EditLink,QuickSearch] 
 public String ProcValueRangeDescription { get { return Fields.ProcValueRangeDescription[this]; } set { Fields.ProcValueRangeDescription[this] = value; } }
		public partial class RowFields { public StringField ProcValueRangeDescription; }



        [DisplayName("Role Role Name"), Expression("jRole.[RoleName]"), ReadOnly(true)]
        [LookupInclude]
        [MinSelectLevel(SelectLevel.List)]
        [EditLink,QuickSearch] 
 public String RoleRoleName { get { return Fields.RoleRoleName[this]; } set { Fields.RoleRoleName[this] = value; } }
		public partial class RowFields { public StringField RoleRoleName; }

        [DisplayName("Role Cost Center"), Expression("jRole.[CostCenter]"), ReadOnly(true)]
        [EditLink,QuickSearch] 
 public String RoleCostCenter { get { return Fields.RoleCostCenter[this]; } set { Fields.RoleCostCenter[this] = value; } }
		public partial class RowFields { public StringField RoleCostCenter; }



        [DisplayName("Committee Role Name"), Expression("jCommitteeRole.[Name]"), ReadOnly(true)]
        [LookupInclude]
        [MinSelectLevel(SelectLevel.List)]
        [EditLink,QuickSearch] 
 public String CommitteeRoleName { get { return Fields.CommitteeRoleName[this]; } set { Fields.CommitteeRoleName[this] = value; } }
		public partial class RowFields { public StringField CommitteeRoleName; }

        [DisplayName("Committee Role Description"), Expression("jCommitteeRole.[Description]"), ReadOnly(true)]
        [EditLink,QuickSearch] 
 public String CommitteeRoleDescription { get { return Fields.CommitteeRoleDescription[this]; } set { Fields.CommitteeRoleDescription[this] = value; } }
		public partial class RowFields { public StringField CommitteeRoleDescription; }


        #endregion Foreign Fields


        IIdField IIdRow.IdField { get { return Fields.CommitteeMemberMappingId; } }

        StringField INameRow.NameField { get { return Fields.ProcurementTypeId; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public CommitteeMemberMappingRow() : base(Fields) { }

		public partial class RowFields : RowFieldsBase { }
    }
}
