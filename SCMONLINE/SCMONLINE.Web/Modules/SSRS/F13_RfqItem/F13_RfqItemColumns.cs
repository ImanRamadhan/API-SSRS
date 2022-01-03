
namespace SCMONLINE.Procurement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Procurement.F13_RfqItem")]
    [BasedOnRow(typeof(Entities.RfqItemRow), CheckNames = true)]
    public class F13_RfqItemColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 RfqItemId { get; set; }
        //public String ProcurementProcurementTypeId { get; set; }
        public Decimal OwnerEstimate { get; set; }
        public Decimal OwnerEstimateReview { get; set; }
        [EditLink]
        //public String PurchasingDocument { get; set; }
        public String Item { get; set; }
        //public String DeletionIndicator { get; set; }
        //public String RfqStatus { get; set; }
        //public DateTime LastChangedOn { get; set; }
        public String ShortText { get; set; }
        public String Material { get; set; }
        //public String Plant { get; set; }
        //public String StorageLocation { get; set; }
        //public String ReqTrackingNumber { get; set; }
        //public String MaterialGroup { get; set; }
        //public String PurchasingInfoRec { get; set; }
        //public String VendorMaterialNo { get; set; }
        //public Decimal TargetQuantity { get; set; }
        public Decimal OrderQuantity { get; set; }
        public String OrderUnit { get; set; }
        //public String OrderPriceUnit { get; set; }
        //public Decimal QuantityConversion { get; set; }
        //public Decimal EqualTo { get; set; }
        //public Decimal Denominator { get; set; }
        //public Decimal NetOrderPrice { get; set; }
        public Decimal PriceUnit { get; set; }
        //public Decimal NetOrderValue { get; set; }
        //public Decimal GrossOrderValue { get; set; }
        //public DateTime QuotationDeadline { get; set; }
        //public Decimal GrProcessingTime { get; set; }
        //public String TaxCode { get; set; }
        //public String BaseUnitOfMeasure { get; set; }
        //public String ShippingInstr { get; set; }
        //public Decimal OaTargetValue { get; set; }
        //public String PriceDate { get; set; }
        //public String PurchDocCategory { get; set; }
        //public Decimal EffectiveValue { get; set; }
        //public String AffectsCommitments { get; set; }
        //public String MaterialType { get; set; }
        //public String SubitemCategory { get; set; }
        //public String SubItems { get; set; }
        //public Decimal Subtotal1 { get; set; }
        //public Decimal Subtotal2 { get; set; }
        //public Decimal Subtotal3 { get; set; }
        //public Decimal Subtotal4 { get; set; }
        //public Decimal Subtotal5 { get; set; }
    }
}