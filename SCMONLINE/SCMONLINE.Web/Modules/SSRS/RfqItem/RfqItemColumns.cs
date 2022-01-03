
namespace SCMONLINE.Procurement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Procurement.RfqItem")]
    [BasedOnRow(typeof(Entities.RfqItemRow), CheckNames = true)]
    public class RfqItemColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 RfqItemId { get; set; }
        public String ProcurementStatus { get; set; }
        [EditLink]
        public String PurchasingDocument { get; set; }
        [DisplayName("Item"), Width(100, Max = 200, Min = 100)]
        public String Item { get; set; }
        public String DeletionIndicator { get; set; }
        public String RfqStatus { get; set; }
        public DateTime LastChangedOn { get; set; }
        [DisplayName("Short Text"), Width(250, Max = 400, Min = 150)]
        public String ShortText { get; set; }
        [DisplayName("Material"), Width(250, Min = 150)]
        public String Material { get; set; }
        public String Plant { get; set; }
        public String StorageLocation { get; set; }
        public String ReqTrackingNumber { get; set; }
        public String MaterialGroup { get; set; }
        public String PurchasingInfoRec { get; set; }
        public String VendorMaterialNo { get; set; }
        public Decimal TargetQuantity { get; set; }
        [DisplayName("Order Quantity"), Width(100, Max = 200, Min = 100)]
        public Decimal OrderQuantity { get; set; }
        [DisplayName("Order Unit"), Width(100, Max = 200, Min = 100)]
        public String OrderUnit { get; set; }
        [DisplayName("OE Unit Price"), Width(150, Max = 400, Min = 150)]
        public String OrderPriceUnit { get; set; }
        public Decimal QuantityConversion { get; set; }
        public Decimal EqualTo { get; set; }
        public Decimal Denominator { get; set; }
        public Decimal NetOrderPrice { get; set; }
        public Decimal PriceUnit { get; set; }
        public Decimal NetOrderValue { get; set; }
        public Decimal GrossOrderValue { get; set; }
        public DateTime QuotationDeadline { get; set; }
        public Decimal GrProcessingTime { get; set; }
        public String TaxCode { get; set; }
        public String BaseUnitOfMeasure { get; set; }
        public String ShippingInstr { get; set; }
        public Decimal OaTargetValue { get; set; }
        public String PriceDate { get; set; }
        public String PurchDocCategory { get; set; }
        public Decimal EffectiveValue { get; set; }
        public String AffectsCommitments { get; set; }
        public String MaterialType { get; set; }
        public String SubitemCategory { get; set; }
        public String SubItems { get; set; }
        public Decimal Subtotal1 { get; set; }
        public Decimal Subtotal2 { get; set; }
        public Decimal Subtotal3 { get; set; }
        public Decimal Subtotal4 { get; set; }
        public Decimal Subtotal5 { get; set; }
        [DisplayName("OE Total Price"), Width(350, Max = 600, Min = 350)]
        public Decimal OwnerEstimate { get; set; }
        public Decimal OwnerEstimateReview { get; set; }
    }
}