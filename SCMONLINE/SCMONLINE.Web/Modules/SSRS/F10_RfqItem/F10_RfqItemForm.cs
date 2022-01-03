
namespace SCMONLINE.Procurement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Procurement.F10_RfqItem")]
    [BasedOnRow(typeof(Entities.RfqItemRow), CheckNames = true)]
    public class F10_RfqItemForm
    {
        [ReadOnly(true)]
        public Int64 RfqItemId { get; set; }
        [ReadOnly(true)]
        public Decimal OwnerEstimate { get; set; }
        public Decimal OwnerEstimateReview { get; set; }
        [ReadOnly(true)]
        [EditLink]
        public String Item { get; set; }
        [ReadOnly(true)]
        public String ShortText { get; set; }
        [ReadOnly(true)]
        public String Material { get; set; }
        [ReadOnly(true)]
        public Decimal TargetQuantity { get; set; }
        [ReadOnly(true)]
        public String OrderUnit { get; set; }
        [ReadOnly(true)]
        public Decimal PriceUnit { get; set; }
        //[Hidden]
        //public Int64 ProcurementId { get; set; }
        //[ReadOnly(true)]
        //public Decimal OwnerEstimateReview { get; set; }
        //[ReadOnly(true)]
        //public Decimal OwnerEstimate { get; set; }
        //[ReadOnly(true)]
        //public String PurchasingDocument { get; set; }
        //[ReadOnly(true)]
        //public String Item{ get; set; }
        //[ReadOnly(true)]
        //public String DeletionIndicator { get; set; }
        //[ReadOnly(true)]
        //public String RfqStatus { get; set; }
        //[ReadOnly(true)]
        //public DateTime LastChangedOn { get; set; }
        //[ReadOnly(true)]
        //public String ShortText { get; set; }
        //[ReadOnly(true)]
        //public String Material { get; set; }
        //[ReadOnly(true)]
        //public String Plant { get; set; }
        //[ReadOnly(true)]
        //public String StorageLocation { get; set; }
        //[ReadOnly(true)]
        //public String ReqTrackingNumber { get; set; }
        //[ReadOnly(true)]
        //public String MaterialGroup { get; set; }
        //[ReadOnly(true)]
        //public String PurchasingInfoRec { get; set; }
        //[ReadOnly(true)]
        //public String VendorMaterialNo { get; set; }
        //[ReadOnly(true)]
        //public Decimal TargetQuantity { get; set; }
        //[ReadOnly(true)]
        //public Decimal OrderQuantity { get; set; }
        //[ReadOnly(true)]
        //public String OrderUnit { get; set; }
        //[ReadOnly(true)]
        //public String OrderPriceUnit { get; set; }
        //[ReadOnly(true)]
        //public Decimal QuantityConversion { get; set; }
        //[ReadOnly(true)]
        //public Decimal EqualTo { get; set; }
        //[ReadOnly(true)]
        //public Decimal Denominator { get; set; }
        //[ReadOnly(true)]
        //public Decimal NetOrderPrice { get; set; }
        //[ReadOnly(true)]
        //public Decimal PriceUnit { get; set; }
        //[ReadOnly(true)]
        //public Decimal NetOrderValue { get; set; }
        //[ReadOnly(true)]
        //public Decimal GrossOrderValue { get; set; }
        //[ReadOnly(true)]
        //public DateTime QuotationDeadline { get; set; }
        //[ReadOnly(true)]
        //public Decimal GrProcessingTime { get; set; }
        //[ReadOnly(true)]
        //public String TaxCode { get; set; }
        //[ReadOnly(true)]
        //public String BaseUnitOfMeasure { get; set; }
        //[Hidden]
        //public String ShippingInstr { get; set; }
        //[ReadOnly(true)]
        //public Decimal OaTargetValue { get; set; }
        //[ReadOnly(true)]
        //public String PriceDate { get; set; }
        //[ReadOnly(true)]
        //public String PurchDocCategory { get; set; }
        //[ReadOnly(true)]
        //public Decimal EffectiveValue { get; set; }
        //[Hidden]
        //public String AffectsCommitments { get; set; }
        //public String MaterialType { get; set; }
        //public String SubitemCategory { get; set; }
        //public String SubItems { get; set; }
        //[Hidden]
        //public Decimal Subtotal1 { get; set; }
        //[Hidden]
        //public Decimal Subtotal2 { get; set; }
        //[Hidden]
        //public Decimal Subtotal3 { get; set; }
        //[Hidden]
        //public Decimal Subtotal4 { get; set; }
        //[Hidden]
        //public Decimal Subtotal5 { get; set; }
    }
}