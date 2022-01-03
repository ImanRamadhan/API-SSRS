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
    using SCMONLINE.Procurement.Lookups;

    [ConnectionKey("Default"), TableName("[dbo].[PurchaseRequisition]")]
    [DisplayName("Purchase Requisition"), InstanceName("Purchase Requisition"), TwoLevelCached]
    [ReadPermission("Procurement:PurchaseRequisition:Read")]
    [InsertPermission("Procurement:PurchaseRequisition:Insert")]
    [UpdatePermission("Procurement:PurchaseRequisition:Update")]
    [DeletePermission("Procurement:PurchaseRequisition:Delete")]
    public sealed class PurchaseRequisitionRow : Row, IIdRow, INameRow
    {

        [DisplayName("Pr No"), Column("PRNo"), Size(50), PrimaryKey]
        [EditLink, QuickSearch]
        public String PrNo { get { return Fields.PrNo[this]; } set { Fields.PrNo[this] = value; } }
        public partial class RowFields { public StringField PrNo; }

        [DisplayName("Buyer"), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jBuyer"), TextualField("BuyerUsername")]
        [EditLink, QuickSearch]
        [LookupEditor(typeof(BuyerLookup))]
        //[LookupEditor(typeof(BuyerLookupViewRow))]
        public Int32? BuyerId { get { return Fields.BuyerId[this]; } set { Fields.BuyerId[this] = value; } }
        public partial class RowFields { public Int32Field BuyerId; }

        [DisplayName("Cost Center"), Size(50)]
        [EditLink, QuickSearch]
        public String CostCenter { get { return Fields.CostCenter[this]; } set { Fields.CostCenter[this] = value; } }
        public partial class RowFields { public StringField CostCenter; }

        [DisplayName("Scan Pr File"), Column("ScanPRFile")]
        [MinSelectLevel(SelectLevel.List)]
        [FileUploadEditor(FilenameFormat = "PurchaseRequest/{1:0000}/{0:00000000}_{2}_{4}_{3:yyyy-MM-dd_HH-mm-ss}", CopyToHistory = true, OriginalNameProperty = "ScanPrName", DisplayFileName = true)]
        [EditLink, QuickSearch]
        public String ScanPrFile { get { return Fields.ScanPrFile[this]; } set { Fields.ScanPrFile[this] = value; } }
        public partial class RowFields { public StringField ScanPrFile; }

        [DisplayName("Scan Pr Name"), Column("ScanPRName")]
        [MinSelectLevel(SelectLevel.List)]
        [Hidden]
        [EditLink, QuickSearch]
        public String ScanPrName { get { return Fields.ScanPrName[this]; } set { Fields.ScanPrName[this] = value; } }
        public partial class RowFields { public StringField ScanPrName; }

        [DisplayName("Assign Date")]
        [EditLink, QuickSearch]
        public DateTime? AssignDate { get { return Fields.AssignDate[this]; } set { Fields.AssignDate[this] = value; } }
        public partial class RowFields
        {
            [EditLink, QuickSearch]
            public DateTimeField AssignDate;
        }

        [DisplayName("Assign By")]
        [EditLink, QuickSearch]
        public String AssignBy { get { return Fields.AssignBy[this]; } set { Fields.AssignBy[this] = value; } }
        public partial class RowFields { public StringField AssignBy; }

        [DisplayName("Created Date")]
        [EditLink, QuickSearch]
        public DateTime? CreatedDate { get { return Fields.CreatedDate[this]; } set { Fields.CreatedDate[this] = value; } }
        public partial class RowFields
        {
            [EditLink, QuickSearch]
            public DateTimeField CreatedDate;
        }

        [DisplayName("Created By")]
        [EditLink, QuickSearch]
        public String CreatedBy { get { return Fields.CreatedBy[this]; } set { Fields.CreatedBy[this] = value; } }
        public partial class RowFields { public StringField CreatedBy; }

        [DisplayName("Status")]
        [ReadOnly(true)]
        [EditLink, QuickSearch]
        public String Status { get { return Fields.Status[this]; } set { Fields.Status[this] = value; } }
        public partial class RowFields { public StringField Status; }

        [DisplayName("Procurement"), MasterDetailRelation(foreignKey: "PRNo"), NotMapped]
        public List<ProcPrRow> ProcPrItems
        {
            get { return Fields.ProcPrItems[this]; }
            set { Fields.ProcPrItems[this] = value; }
        }
        public partial class RowFields { public RowListField<ProcPrRow> ProcPrItems; }

        //[DisplayName("Request Description")]
        //[EditLink]
        //public String RequestDescription { get { return Fields.RequestDescription[this]; } set { Fields.RequestDescription[this] = value; } }
        //public partial class RowFields { public StringField RequestDescription; }
        #region Foreign Fields


        [DisplayName("Buyer Username"), Expression("jBuyer.[Username]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String BuyerUsername { get { return Fields.BuyerUsername[this]; } set { Fields.BuyerUsername[this] = value; } }
        public partial class RowFields { public StringField BuyerUsername; }

        [DisplayName("Buyer Display Name"), Expression("jBuyer.[DisplayName]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String BuyerDisplayName { get { return Fields.BuyerDisplayName[this]; } set { Fields.BuyerDisplayName[this] = value; } }
        public partial class RowFields { public StringField BuyerDisplayName; }

        [DisplayName("Buyer Email"), Expression("jBuyer.[Email]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String BuyerEmail { get { return Fields.BuyerEmail[this]; } set { Fields.BuyerEmail[this] = value; } }
        public partial class RowFields { public StringField BuyerEmail; }

        [DisplayName("Buyer Source"), Expression("jBuyer.[Source]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String BuyerSource { get { return Fields.BuyerSource[this]; } set { Fields.BuyerSource[this] = value; } }
        public partial class RowFields { public StringField BuyerSource; }

        [DisplayName("Buyer Password Hash"), Expression("jBuyer.[PasswordHash]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String BuyerPasswordHash { get { return Fields.BuyerPasswordHash[this]; } set { Fields.BuyerPasswordHash[this] = value; } }
        public partial class RowFields { public StringField BuyerPasswordHash; }

        [DisplayName("Buyer Password Salt"), Expression("jBuyer.[PasswordSalt]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String BuyerPasswordSalt { get { return Fields.BuyerPasswordSalt[this]; } set { Fields.BuyerPasswordSalt[this] = value; } }
        public partial class RowFields { public StringField BuyerPasswordSalt; }

        [DisplayName("Buyer Last Directory Update"), Expression("jBuyer.[LastDirectoryUpdate]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public DateTime? BuyerLastDirectoryUpdate { get { return Fields.BuyerLastDirectoryUpdate[this]; } set { Fields.BuyerLastDirectoryUpdate[this] = value; } }
        public partial class RowFields
        {
            [EditLink, QuickSearch]
            public DateTimeField BuyerLastDirectoryUpdate;
        }

        [DisplayName("Buyer User Image"), Expression("jBuyer.[UserImage]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String BuyerUserImage { get { return Fields.BuyerUserImage[this]; } set { Fields.BuyerUserImage[this] = value; } }
        public partial class RowFields { public StringField BuyerUserImage; }

        [DisplayName("Buyer Insert Date"), Expression("jBuyer.[InsertDate]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public DateTime? BuyerInsertDate { get { return Fields.BuyerInsertDate[this]; } set { Fields.BuyerInsertDate[this] = value; } }
        public partial class RowFields
        {
            [EditLink, QuickSearch]
            public DateTimeField BuyerInsertDate;
        }

        [DisplayName("Buyer Insert User Id"), Expression("jBuyer.[InsertUserId]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public Int32? BuyerInsertUserId { get { return Fields.BuyerInsertUserId[this]; } set { Fields.BuyerInsertUserId[this] = value; } }
        public partial class RowFields { public Int32Field BuyerInsertUserId; }

        [DisplayName("Buyer Update Date"), Expression("jBuyer.[UpdateDate]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public DateTime? BuyerUpdateDate { get { return Fields.BuyerUpdateDate[this]; } set { Fields.BuyerUpdateDate[this] = value; } }
        public partial class RowFields
        {
            [EditLink, QuickSearch]
            public DateTimeField BuyerUpdateDate;
        }

        [DisplayName("Buyer Update User Id"), Expression("jBuyer.[UpdateUserId]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public Int32? BuyerUpdateUserId { get { return Fields.BuyerUpdateUserId[this]; } set { Fields.BuyerUpdateUserId[this] = value; } }
        public partial class RowFields { public Int32Field BuyerUpdateUserId; }

        [DisplayName("Buyer Is Active"), Expression("jBuyer.[IsActive]"), ReadOnly(true)]
        public Int16? BuyerIsActive { get { return Fields.BuyerIsActive[this]; } set { Fields.BuyerIsActive[this] = value; } }
        public partial class RowFields { public Int16Field BuyerIsActive; }


        #endregion Foreign Fields


        IIdField IIdRow.IdField { get { return Fields.PrNo; } }

        StringField INameRow.NameField { get { return Fields.PrNo; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public PurchaseRequisitionRow() : base(Fields) { }

        public partial class RowFields : RowFieldsBase { }
    }
}
