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

    [ConnectionKey("Default"), TableName("[dbo].[RFQItemText]")]
    [DisplayName("Rfq Item Text"), InstanceName("Rfq Item Text"), TwoLevelCached]
    [ReadPermission("Procurement:RfqItemText:Read")]
    [InsertPermission("Procurement:RfqItemText:Insert")]
    [UpdatePermission("Procurement:RfqItemText:Update")]
    [DeletePermission("Procurement:RfqItemText:Delete")]
    public sealed class RfqItemTextRow : Row, IIdRow, INameRow
    {

        [DisplayName("Rfq Item Text Id"), Column("RFQItemTextId"), Identity]
        public Int64? RfqItemTextId { get { return Fields.RfqItemTextId[this]; } set { Fields.RfqItemTextId[this] = value; } }
		public partial class RowFields { public Int64Field RfqItemTextId; }

        [DisplayName("Rfq Item"), Column("RFQItemId"), ForeignKey("[dbo].[RFQItem]", "RFQItemId"), LeftJoin("jRfqItem"), TextualField("RfqItemPurchasingDocument")]
        public Int64? RfqItemId { get { return Fields.RfqItemId[this]; } set { Fields.RfqItemId[this] = value; } }
		public partial class RowFields { public Int64Field RfqItemId; }

        [DisplayName("Text Id")]
        [EditLink,QuickSearch] 
 public String TextId { get { return Fields.TextId[this]; } set { Fields.TextId[this] = value; } }
		public partial class RowFields { public StringField TextId; }

        [DisplayName("Text Form")]
        [EditLink,QuickSearch] 
 public String TextForm { get { return Fields.TextForm[this]; } set { Fields.TextForm[this] = value; } }
		public partial class RowFields { public StringField TextForm; }

        [DisplayName("Text Line")]
        [EditLink,QuickSearch] 
 public String TextLine { get { return Fields.TextLine[this]; } set { Fields.TextLine[this] = value; } }
		public partial class RowFields { public StringField TextLine; }

        #region Foreign Fields


        [DisplayName("Rfq Item Procurement Id"), Expression("jRfqItem.[ProcurementId]"), ReadOnly(true)]
        public Int64? RfqItemProcurementId { get { return Fields.RfqItemProcurementId[this]; } set { Fields.RfqItemProcurementId[this] = value; } }
		public partial class RowFields { public Int64Field RfqItemProcurementId; }

        [DisplayName("Rfq Item Owner Estimate Review"), Expression("jRfqItem.[OwnerEstimateReview]"), ReadOnly(true)]
        public Decimal? RfqItemOwnerEstimateReview { get { return Fields.RfqItemOwnerEstimateReview[this]; } set { Fields.RfqItemOwnerEstimateReview[this] = value; } }
		public partial class RowFields { public DecimalField RfqItemOwnerEstimateReview; }

        [DisplayName("Rfq Item Owner Estimate"), Expression("jRfqItem.[OwnerEstimate]"), ReadOnly(true)]
        public Decimal? RfqItemOwnerEstimate { get { return Fields.RfqItemOwnerEstimate[this]; } set { Fields.RfqItemOwnerEstimate[this] = value; } }
		public partial class RowFields { public DecimalField RfqItemOwnerEstimate; }

        [DisplayName("Rfq Item Purchasing Document"), Expression("jRfqItem.[PurchasingDocument]"), ReadOnly(true)]
        [EditLink,QuickSearch] 
 public String RfqItemPurchasingDocument { get { return Fields.RfqItemPurchasingDocument[this]; } set { Fields.RfqItemPurchasingDocument[this] = value; } }
		public partial class RowFields { public StringField RfqItemPurchasingDocument; }

        [DisplayName("Rfq Item Item"), Expression("jRfqItem.[Item]"), ReadOnly(true)]
        [EditLink,QuickSearch] 
 public String RfqItemItem { get { return Fields.RfqItemItem[this]; } set { Fields.RfqItemItem[this] = value; } }
		public partial class RowFields { public StringField RfqItemItem; }

        [DisplayName("Rfq Item Deletion Indicator"), Expression("jRfqItem.[DeletionIndicator]"), ReadOnly(true)]
        [EditLink,QuickSearch] 
 public String RfqItemDeletionIndicator { get { return Fields.RfqItemDeletionIndicator[this]; } set { Fields.RfqItemDeletionIndicator[this] = value; } }
		public partial class RowFields { public StringField RfqItemDeletionIndicator; }

        [DisplayName("Rfq Item Rfq Status"), Expression("jRfqItem.[RfqStatus]"), ReadOnly(true)]
        [EditLink,QuickSearch] 
 public String RfqItemRfqStatus { get { return Fields.RfqItemRfqStatus[this]; } set { Fields.RfqItemRfqStatus[this] = value; } }
		public partial class RowFields { public StringField RfqItemRfqStatus; }

        [DisplayName("Rfq Item Last Changed On"), Expression("jRfqItem.[LastChangedOn]"), ReadOnly(true)]
        [EditLink,QuickSearch] 
 public DateTime? RfqItemLastChangedOn { get { return Fields.RfqItemLastChangedOn[this]; } set { Fields.RfqItemLastChangedOn[this] = value; } }
		public partial class RowFields { [EditLink,QuickSearch] 
 public DateTimeField RfqItemLastChangedOn; }

        [DisplayName("Rfq Item Short Text"), Expression("jRfqItem.[ShortText]"), ReadOnly(true)]
        [EditLink,QuickSearch] 
 public String RfqItemShortText { get { return Fields.RfqItemShortText[this]; } set { Fields.RfqItemShortText[this] = value; } }
		public partial class RowFields { public StringField RfqItemShortText; }

        [DisplayName("Rfq Item Material"), Expression("jRfqItem.[Material]"), ReadOnly(true)]
        [EditLink,QuickSearch] 
 public String RfqItemMaterial { get { return Fields.RfqItemMaterial[this]; } set { Fields.RfqItemMaterial[this] = value; } }
		public partial class RowFields { public StringField RfqItemMaterial; }

        [DisplayName("Rfq Item Plant"), Expression("jRfqItem.[Plant]"), ReadOnly(true)]
        [EditLink,QuickSearch] 
 public String RfqItemPlant { get { return Fields.RfqItemPlant[this]; } set { Fields.RfqItemPlant[this] = value; } }
		public partial class RowFields { public StringField RfqItemPlant; }

        [DisplayName("Rfq Item Storage Location"), Expression("jRfqItem.[StorageLocation]"), ReadOnly(true)]
        [EditLink,QuickSearch] 
 public String RfqItemStorageLocation { get { return Fields.RfqItemStorageLocation[this]; } set { Fields.RfqItemStorageLocation[this] = value; } }
		public partial class RowFields { public StringField RfqItemStorageLocation; }

        [DisplayName("Rfq Item Req Tracking Number"), Expression("jRfqItem.[ReqTrackingNumber]"), ReadOnly(true)]
        [EditLink,QuickSearch] 
 public String RfqItemReqTrackingNumber { get { return Fields.RfqItemReqTrackingNumber[this]; } set { Fields.RfqItemReqTrackingNumber[this] = value; } }
		public partial class RowFields { public StringField RfqItemReqTrackingNumber; }

        [DisplayName("Rfq Item Material Group"), Expression("jRfqItem.[MaterialGroup]"), ReadOnly(true)]
        [EditLink,QuickSearch] 
 public String RfqItemMaterialGroup { get { return Fields.RfqItemMaterialGroup[this]; } set { Fields.RfqItemMaterialGroup[this] = value; } }
		public partial class RowFields { public StringField RfqItemMaterialGroup; }

        [DisplayName("Rfq Item Purchasing Info Rec"), Expression("jRfqItem.[PurchasingInfoRec]"), ReadOnly(true)]
        [EditLink,QuickSearch] 
 public String RfqItemPurchasingInfoRec { get { return Fields.RfqItemPurchasingInfoRec[this]; } set { Fields.RfqItemPurchasingInfoRec[this] = value; } }
		public partial class RowFields { public StringField RfqItemPurchasingInfoRec; }

        [DisplayName("Rfq Item Vendor Material No"), Expression("jRfqItem.[VendorMaterialNo]"), ReadOnly(true)]
        [EditLink,QuickSearch] 
 public String RfqItemVendorMaterialNo { get { return Fields.RfqItemVendorMaterialNo[this]; } set { Fields.RfqItemVendorMaterialNo[this] = value; } }
		public partial class RowFields { public StringField RfqItemVendorMaterialNo; }

        [DisplayName("Rfq Item Target Quantity"), Expression("jRfqItem.[TargetQuantity]"), ReadOnly(true)]
        public Decimal? RfqItemTargetQuantity { get { return Fields.RfqItemTargetQuantity[this]; } set { Fields.RfqItemTargetQuantity[this] = value; } }
		public partial class RowFields { public DecimalField RfqItemTargetQuantity; }

        [DisplayName("Rfq Item Order Quantity"), Expression("jRfqItem.[OrderQuantity]"), ReadOnly(true)]
        public Decimal? RfqItemOrderQuantity { get { return Fields.RfqItemOrderQuantity[this]; } set { Fields.RfqItemOrderQuantity[this] = value; } }
		public partial class RowFields { public DecimalField RfqItemOrderQuantity; }

        [DisplayName("Rfq Item Order Unit"), Expression("jRfqItem.[OrderUnit]"), ReadOnly(true)]
        [EditLink,QuickSearch] 
 public String RfqItemOrderUnit { get { return Fields.RfqItemOrderUnit[this]; } set { Fields.RfqItemOrderUnit[this] = value; } }
		public partial class RowFields { public StringField RfqItemOrderUnit; }

        [DisplayName("Rfq Item Order Price Unit"), Expression("jRfqItem.[OrderPriceUnit]"), ReadOnly(true)]
        [EditLink,QuickSearch] 
 public String RfqItemOrderPriceUnit { get { return Fields.RfqItemOrderPriceUnit[this]; } set { Fields.RfqItemOrderPriceUnit[this] = value; } }
		public partial class RowFields { public StringField RfqItemOrderPriceUnit; }

        [DisplayName("Rfq Item Quantity Conversion"), Expression("jRfqItem.[QuantityConversion]"), ReadOnly(true)]
        public Decimal? RfqItemQuantityConversion { get { return Fields.RfqItemQuantityConversion[this]; } set { Fields.RfqItemQuantityConversion[this] = value; } }
		public partial class RowFields { public DecimalField RfqItemQuantityConversion; }

        [DisplayName("Rfq Item Equal To"), Expression("jRfqItem.[EqualTo]"), ReadOnly(true)]
        public Decimal? RfqItemEqualTo { get { return Fields.RfqItemEqualTo[this]; } set { Fields.RfqItemEqualTo[this] = value; } }
		public partial class RowFields { public DecimalField RfqItemEqualTo; }

        [DisplayName("Rfq Item Denominator"), Expression("jRfqItem.[Denominator]"), ReadOnly(true)]
        public Decimal? RfqItemDenominator { get { return Fields.RfqItemDenominator[this]; } set { Fields.RfqItemDenominator[this] = value; } }
		public partial class RowFields { public DecimalField RfqItemDenominator; }

        [DisplayName("Rfq Item Net Order Price"), Expression("jRfqItem.[NetOrderPrice]"), ReadOnly(true)]
        public Decimal? RfqItemNetOrderPrice { get { return Fields.RfqItemNetOrderPrice[this]; } set { Fields.RfqItemNetOrderPrice[this] = value; } }
		public partial class RowFields { public DecimalField RfqItemNetOrderPrice; }

        [DisplayName("Rfq Item Price Unit"), Expression("jRfqItem.[PriceUnit]"), ReadOnly(true)]
        public Decimal? RfqItemPriceUnit { get { return Fields.RfqItemPriceUnit[this]; } set { Fields.RfqItemPriceUnit[this] = value; } }
		public partial class RowFields { public DecimalField RfqItemPriceUnit; }

        [DisplayName("Rfq Item Net Order Value"), Expression("jRfqItem.[NetOrderValue]"), ReadOnly(true)]
        public Decimal? RfqItemNetOrderValue { get { return Fields.RfqItemNetOrderValue[this]; } set { Fields.RfqItemNetOrderValue[this] = value; } }
		public partial class RowFields { public DecimalField RfqItemNetOrderValue; }

        [DisplayName("Rfq Item Gross Order Value"), Expression("jRfqItem.[GrossOrderValue]"), ReadOnly(true)]
        public Decimal? RfqItemGrossOrderValue { get { return Fields.RfqItemGrossOrderValue[this]; } set { Fields.RfqItemGrossOrderValue[this] = value; } }
		public partial class RowFields { public DecimalField RfqItemGrossOrderValue; }

        [DisplayName("Rfq Item Quotation Deadline"), Expression("jRfqItem.[QuotationDeadline]"), ReadOnly(true)]
        [EditLink,QuickSearch] 
 public DateTime? RfqItemQuotationDeadline { get { return Fields.RfqItemQuotationDeadline[this]; } set { Fields.RfqItemQuotationDeadline[this] = value; } }
		public partial class RowFields { [EditLink,QuickSearch] 
 public DateTimeField RfqItemQuotationDeadline; }

        [DisplayName("Rfq Item Gr Processing Time"), Expression("jRfqItem.[GrProcessingTime]"), ReadOnly(true)]
        [EditLink,QuickSearch] 
 public DateTime? RfqItemGrProcessingTime { get { return Fields.RfqItemGrProcessingTime[this]; } set { Fields.RfqItemGrProcessingTime[this] = value; } }
		public partial class RowFields { [EditLink,QuickSearch] 
 public DateTimeField RfqItemGrProcessingTime; }

        [DisplayName("Rfq Item Tax Code"), Expression("jRfqItem.[TaxCode]"), ReadOnly(true)]
        [EditLink,QuickSearch] 
 public String RfqItemTaxCode { get { return Fields.RfqItemTaxCode[this]; } set { Fields.RfqItemTaxCode[this] = value; } }
		public partial class RowFields { public StringField RfqItemTaxCode; }

        [DisplayName("Rfq Item Base Unit Of Measure"), Expression("jRfqItem.[BaseUnitOfMeasure]"), ReadOnly(true)]
        [EditLink,QuickSearch] 
 public String RfqItemBaseUnitOfMeasure { get { return Fields.RfqItemBaseUnitOfMeasure[this]; } set { Fields.RfqItemBaseUnitOfMeasure[this] = value; } }
		public partial class RowFields { public StringField RfqItemBaseUnitOfMeasure; }

        [DisplayName("Rfq Item Shipping Instr"), Expression("jRfqItem.[ShippingInstr]"), ReadOnly(true)]
        [EditLink,QuickSearch] 
 public String RfqItemShippingInstr { get { return Fields.RfqItemShippingInstr[this]; } set { Fields.RfqItemShippingInstr[this] = value; } }
		public partial class RowFields { public StringField RfqItemShippingInstr; }

        [DisplayName("Rfq Item Oa Target Value"), Expression("jRfqItem.[OaTargetValue]"), ReadOnly(true)]
        public Decimal? RfqItemOaTargetValue { get { return Fields.RfqItemOaTargetValue[this]; } set { Fields.RfqItemOaTargetValue[this] = value; } }
		public partial class RowFields { public DecimalField RfqItemOaTargetValue; }

        [DisplayName("Rfq Item Price Date"), Expression("jRfqItem.[PriceDate]"), ReadOnly(true)]
        [EditLink,QuickSearch] 
 public String RfqItemPriceDate { get { return Fields.RfqItemPriceDate[this]; } set { Fields.RfqItemPriceDate[this] = value; } }
		public partial class RowFields { public StringField RfqItemPriceDate; }

        [DisplayName("Rfq Item Purch Doc Category"), Expression("jRfqItem.[PurchDocCategory]"), ReadOnly(true)]
        [EditLink,QuickSearch] 
 public String RfqItemPurchDocCategory { get { return Fields.RfqItemPurchDocCategory[this]; } set { Fields.RfqItemPurchDocCategory[this] = value; } }
		public partial class RowFields { public StringField RfqItemPurchDocCategory; }

        [DisplayName("Rfq Item Effective Value"), Expression("jRfqItem.[EffectiveValue]"), ReadOnly(true)]
        public Decimal? RfqItemEffectiveValue { get { return Fields.RfqItemEffectiveValue[this]; } set { Fields.RfqItemEffectiveValue[this] = value; } }
		public partial class RowFields { public DecimalField RfqItemEffectiveValue; }

        [DisplayName("Rfq Item Affects Commitments"), Expression("jRfqItem.[AffectsCommitments]"), ReadOnly(true)]
        [EditLink,QuickSearch] 
 public String RfqItemAffectsCommitments { get { return Fields.RfqItemAffectsCommitments[this]; } set { Fields.RfqItemAffectsCommitments[this] = value; } }
		public partial class RowFields { public StringField RfqItemAffectsCommitments; }

        [DisplayName("Rfq Item Material Type"), Expression("jRfqItem.[MaterialType]"), ReadOnly(true)]
        [EditLink,QuickSearch] 
 public String RfqItemMaterialType { get { return Fields.RfqItemMaterialType[this]; } set { Fields.RfqItemMaterialType[this] = value; } }
		public partial class RowFields { public StringField RfqItemMaterialType; }

        [DisplayName("Rfq Item Subitem Category"), Expression("jRfqItem.[SubitemCategory]"), ReadOnly(true)]
        [EditLink,QuickSearch] 
 public String RfqItemSubitemCategory { get { return Fields.RfqItemSubitemCategory[this]; } set { Fields.RfqItemSubitemCategory[this] = value; } }
		public partial class RowFields { public StringField RfqItemSubitemCategory; }

        [DisplayName("Rfq Item Sub Items"), Expression("jRfqItem.[SubItems]"), ReadOnly(true)]
        [EditLink,QuickSearch] 
 public String RfqItemSubItems { get { return Fields.RfqItemSubItems[this]; } set { Fields.RfqItemSubItems[this] = value; } }
		public partial class RowFields { public StringField RfqItemSubItems; }

        [DisplayName("Rfq Item Subtotal1"), Expression("jRfqItem.[Subtotal1]"), ReadOnly(true)]
        public Decimal? RfqItemSubtotal1 { get { return Fields.RfqItemSubtotal1[this]; } set { Fields.RfqItemSubtotal1[this] = value; } }
		public partial class RowFields { public DecimalField RfqItemSubtotal1; }

        [DisplayName("Rfq Item Subtotal2"), Expression("jRfqItem.[Subtotal2]"), ReadOnly(true)]
        public Decimal? RfqItemSubtotal2 { get { return Fields.RfqItemSubtotal2[this]; } set { Fields.RfqItemSubtotal2[this] = value; } }
		public partial class RowFields { public DecimalField RfqItemSubtotal2; }

        [DisplayName("Rfq Item Subtotal3"), Expression("jRfqItem.[Subtotal3]"), ReadOnly(true)]
        public Decimal? RfqItemSubtotal3 { get { return Fields.RfqItemSubtotal3[this]; } set { Fields.RfqItemSubtotal3[this] = value; } }
		public partial class RowFields { public DecimalField RfqItemSubtotal3; }

        [DisplayName("Rfq Item Subtotal4"), Expression("jRfqItem.[Subtotal4]"), ReadOnly(true)]
        public Decimal? RfqItemSubtotal4 { get { return Fields.RfqItemSubtotal4[this]; } set { Fields.RfqItemSubtotal4[this] = value; } }
		public partial class RowFields { public DecimalField RfqItemSubtotal4; }

        [DisplayName("Rfq Item Subtotal5"), Expression("jRfqItem.[Subtotal5]"), ReadOnly(true)]
        public Decimal? RfqItemSubtotal5 { get { return Fields.RfqItemSubtotal5[this]; } set { Fields.RfqItemSubtotal5[this] = value; } }
		public partial class RowFields { public DecimalField RfqItemSubtotal5; }


        #endregion Foreign Fields


        IIdField IIdRow.IdField { get { return Fields.RfqItemTextId; } }

        StringField INameRow.NameField { get { return Fields.TextLine; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public RfqItemTextRow() : base(Fields) { }

		public partial class RowFields : RowFieldsBase { }
    }
}
