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

    [ConnectionKey("Default"), TableName("[dbo].[PurchaseRequisition]")]
    [DisplayName("F20 Purchase Requisition Tracking"), InstanceName("F20 Purchase Requisition Tracking"), TwoLevelCached]
    [ReadPermission("Procurement:F20_PurchaseRequisitionTracking:Read")]
    [InsertPermission("Procurement:F20_PurchaseRequisitionTracking:Insert")]
    [UpdatePermission("Procurement:F20_PurchaseRequisitionTracking:Update")]
    [DeletePermission("Procurement:F20_PurchaseRequisitionTracking:Delete")]
    public sealed class F20_PurchaseRequisitionTrackingRow : Row, IIdRow, INameRow
    {

        [DisplayName("Pr No"), Column("PRNo"), Size(10), PrimaryKey, QuickSearch]
        public String PrNo { get { return Fields.PrNo[this]; } set { Fields.PrNo[this] = value; } }
		public partial class RowFields { public StringField PrNo; }

        [DisplayName("Buyer"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jBuyer"), TextualField("BuyerUsername")]
        public Int32? BuyerId { get { return Fields.BuyerId[this]; } set { Fields.BuyerId[this] = value; } }
		public partial class RowFields { public Int32Field BuyerId; }

        [DisplayName("Cost Center"), Size(50)]
        public String CostCenter { get { return Fields.CostCenter[this]; } set { Fields.CostCenter[this] = value; } }
		public partial class RowFields { public StringField CostCenter; }

        [DisplayName("Scan Pr File"), Column("ScanPRFile")]
        public String ScanPrFile { get { return Fields.ScanPrFile[this]; } set { Fields.ScanPrFile[this] = value; } }
		public partial class RowFields { public StringField ScanPrFile; }

        [DisplayName("Scan Pr Name"), Column("ScanPRName")]
        public String ScanPrName { get { return Fields.ScanPrName[this]; } set { Fields.ScanPrName[this] = value; } }
		public partial class RowFields { public StringField ScanPrName; }

        [DisplayName("Assign Date")]
        public DateTime? AssignDate { get { return Fields.AssignDate[this]; } set { Fields.AssignDate[this] = value; } }
		public partial class RowFields { public DateTimeField AssignDate; }

        [DisplayName("Assign By")]
        public String AssignBy { get { return Fields.AssignBy[this]; } set { Fields.AssignBy[this] = value; } }
		public partial class RowFields { public StringField AssignBy; }

        [DisplayName("Created Date")]
        public DateTime? CreatedDate { get { return Fields.CreatedDate[this]; } set { Fields.CreatedDate[this] = value; } }
		public partial class RowFields { public DateTimeField CreatedDate; }

        [DisplayName("Created By")]
        public String CreatedBy { get { return Fields.CreatedBy[this]; } set { Fields.CreatedBy[this] = value; } }
		public partial class RowFields { public StringField CreatedBy; }

        [DisplayName("Status"), Size(50)]
        public String Status { get { return Fields.Status[this]; } set { Fields.Status[this] = value; } }
		public partial class RowFields { public StringField Status; }

        #region Foreign Fields


        [DisplayName("Buyer Username"), Expression("jBuyer.[Username]"), ReadOnly(true)]
        public String BuyerUsername { get { return Fields.BuyerUsername[this]; } set { Fields.BuyerUsername[this] = value; } }
		public partial class RowFields { public StringField BuyerUsername; }

        [DisplayName("Buyer Display Name"), Expression("jBuyer.[DisplayName]"), ReadOnly(true)]
        public String BuyerDisplayName { get { return Fields.BuyerDisplayName[this]; } set { Fields.BuyerDisplayName[this] = value; } }
		public partial class RowFields { public StringField BuyerDisplayName; }

        [DisplayName("Buyer Email"), Expression("jBuyer.[Email]"), ReadOnly(true)]
        public String BuyerEmail { get { return Fields.BuyerEmail[this]; } set { Fields.BuyerEmail[this] = value; } }
		public partial class RowFields { public StringField BuyerEmail; }

        [DisplayName("Buyer Source"), Expression("jBuyer.[Source]"), ReadOnly(true)]
        public String BuyerSource { get { return Fields.BuyerSource[this]; } set { Fields.BuyerSource[this] = value; } }
		public partial class RowFields { public StringField BuyerSource; }

        [DisplayName("Buyer Password Hash"), Expression("jBuyer.[PasswordHash]"), ReadOnly(true)]
        public String BuyerPasswordHash { get { return Fields.BuyerPasswordHash[this]; } set { Fields.BuyerPasswordHash[this] = value; } }
		public partial class RowFields { public StringField BuyerPasswordHash; }

        [DisplayName("Buyer Password Salt"), Expression("jBuyer.[PasswordSalt]"), ReadOnly(true)]
        public String BuyerPasswordSalt { get { return Fields.BuyerPasswordSalt[this]; } set { Fields.BuyerPasswordSalt[this] = value; } }
		public partial class RowFields { public StringField BuyerPasswordSalt; }

        [DisplayName("Buyer Last Directory Update"), Expression("jBuyer.[LastDirectoryUpdate]"), ReadOnly(true)]
        public DateTime? BuyerLastDirectoryUpdate { get { return Fields.BuyerLastDirectoryUpdate[this]; } set { Fields.BuyerLastDirectoryUpdate[this] = value; } }
		public partial class RowFields { public DateTimeField BuyerLastDirectoryUpdate; }

        [DisplayName("Buyer User Image"), Expression("jBuyer.[UserImage]"), ReadOnly(true)]
        public String BuyerUserImage { get { return Fields.BuyerUserImage[this]; } set { Fields.BuyerUserImage[this] = value; } }
		public partial class RowFields { public StringField BuyerUserImage; }

        [DisplayName("Buyer Insert Date"), Expression("jBuyer.[InsertDate]"), ReadOnly(true)]
        public DateTime? BuyerInsertDate { get { return Fields.BuyerInsertDate[this]; } set { Fields.BuyerInsertDate[this] = value; } }
		public partial class RowFields { public DateTimeField BuyerInsertDate; }

        [DisplayName("Buyer Insert User Id"), Expression("jBuyer.[InsertUserId]"), ReadOnly(true)]
        public Int32? BuyerInsertUserId { get { return Fields.BuyerInsertUserId[this]; } set { Fields.BuyerInsertUserId[this] = value; } }
		public partial class RowFields { public Int32Field BuyerInsertUserId; }

        [DisplayName("Buyer Update Date"), Expression("jBuyer.[UpdateDate]"), ReadOnly(true)]
        public DateTime? BuyerUpdateDate { get { return Fields.BuyerUpdateDate[this]; } set { Fields.BuyerUpdateDate[this] = value; } }
		public partial class RowFields { public DateTimeField BuyerUpdateDate; }

        [DisplayName("Buyer Update User Id"), Expression("jBuyer.[UpdateUserId]"), ReadOnly(true)]
        public Int32? BuyerUpdateUserId { get { return Fields.BuyerUpdateUserId[this]; } set { Fields.BuyerUpdateUserId[this] = value; } }
		public partial class RowFields { public Int32Field BuyerUpdateUserId; }

        [DisplayName("Buyer Is Active"), Expression("jBuyer.[IsActive]"), ReadOnly(true)]
        public Int16? BuyerIsActive { get { return Fields.BuyerIsActive[this]; } set { Fields.BuyerIsActive[this] = value; } }
		public partial class RowFields { public Int16Field BuyerIsActive; }


        #endregion Foreign Fields


        IIdField IIdRow.IdField { get { return Fields.PrNo; } }

        StringField INameRow.NameField { get { return Fields.PrNo; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public F20_PurchaseRequisitionTrackingRow() : base(Fields) { }

		public partial class RowFields : RowFieldsBase { }
    }
}
