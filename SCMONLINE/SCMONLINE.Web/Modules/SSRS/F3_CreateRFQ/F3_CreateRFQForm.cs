
namespace SCMONLINE.Procurement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Procurement.F3_CreateRFQ")]
    [BasedOnRow(typeof(Entities.ProcurementRow), CheckNames = true)]
    public class F3_CreateRFQForm
    {
        [CssClass("col-md-8")]
        [Updatable(false), Insertable(false)]
        public String ProcurementTypeId { get; set; }
        [CssClass("col-md-8")]
        [Updatable(false), Insertable(false)]
        public String Status { get; set; }
        [CssClass("col-md-8")]
        [ReadOnly(true)]
        //[Updatable(false), Insertable(false)]
        public String CollectiveNumber { get; set; }
        [CssClass("col-md-8")]
        //[Updatable(false), Insertable(false)]
        public String Title { get; set; }
        [CssClass("col-md-8")]
        [Updatable(false), Insertable(false)]
        public String Classification { get; set; }
        [CssClass("col-md-8")]
        [Updatable(false), Insertable(false)]
        public String Qualification { get; set; }
        //[CssClass("col-md-8")]
        //public String RequestedBy { get; set; }
        //[CssClass("col-md-8")]
        //public String RequestorPosition { get; set; }
        //[CssClass("col-md-8")]
        //public String ApprovedBy { get; set; }
        //[CssClass("col-md-8")]
        //public String ApproverPosition { get; set; }
        //[CssClass("col-md-8")]
        //public String SapBidderListCreatedBy { get; set; }
        //[CssClass("col-md-8")]
        //public DateTime SapBidderListCreatedDate { get; set; }
        //[CssClass("col-md-8")]
        //public String CreatedBy { get; set; }
        //[CssClass("col-md-8")]
        //public DateTime CreatedDate { get; set; }
        //[CssClass("col-md-8")]
        //public Decimal GuaranteePercentage { get; set; }
        //[CssClass("col-md-8")]
        //public Int32 OfficeAddress { get; set; }
        //[CssClass("col-md-8")]
        //public Int32 ProcValueRangeId { get; set; }
        //[CssClass("col-md-8")]
        //public Int32 CommitteeTypeId { get; set; }
        //[CssClass("col-md-8")]
        //public Boolean PerformanceGuaranteeRequired { get; set; }
        //[CssClass("col-md-8")]
        //public Int32 TenderPeriod { get; set; }
        //[CssClass("col-md-8")]
        //public Int32 DeliveryTime { get; set; }
        //[CssClass("col-md-8")]
        //public Int32 DestinationId { get; set; }
        //[CssClass("col-md-8")]
        //public Int32 ContractTypeId { get; set; }
        
        //[CssClass("col-md-8")]
        //public Int32 DocSubmitMethodId { get; set; }
        //[CssClass("col-md-8")]
        [Hidden]
        public Boolean AanwijzingExists { get; set; }
        //[CssClass("col-md-8")]
        //public DateTime AanwijzingDate { get; set; }
        //[CssClass("col-md-8")]
        //public DateTime AanwijzingClosingDate { get; set; }
        //[CssClass("col-md-8")]
        //public String AanwijzingLocation { get; set; }
        //[CssClass("col-md-8")]
        //public String AanwijzingClosingLocation { get; set; }
        //[CssClass("col-md-8")]
        //public String AanwijzingSecretary { get; set; }
        //[CssClass("col-md-8")]
        //public String AanwijzingSummary { get; set; }
        //[CssClass("col-md-8")]
        //public Boolean FieldSurveyExists { get; set; }
        //[CssClass("col-md-8")]
        //public String FieldSurveyAddress { get; set; }
        //[CssClass("col-md-8")]
        //public String ItbDocumentFile { get; set; }
        //[CssClass("col-md-8")]
        //public String ItbDocumentName { get; set; }
        //[CssClass("col-md-8")]
        //public String RksDocumentFile { get; set; }
        //[CssClass("col-md-8")]
        //public String RksDocumentName { get; set; }
        //[CssClass("col-md-8")]
        [Hidden]
        public DateTime TenderDocSubmitOpenDate { get; set; }
        //[CssClass("col-md-8")]
        [Hidden]
        public DateTime TenderDocSubmitCloseDate { get; set; }
        [CssClass("col-md-8")]
        [ReadOnly(true)]
        public String CurrencyId { get; set; }
        [CssClass("col-md-8")]
        public String PurchDocNum { get; set; }
        [CssClass("col-md-8")]
        public String OrderTypeId { get; set; }
        [CssClass("col-md-8")]
        //[Insertable(false), Updatable(false)]
        [ReadOnly(true)]
        public DateTime RfqDate { get; set; }
        [CssClass("col-md-8")]
        [ReadOnly(true)]
       // [Insertable(false), Updatable(false)]
        public DateTime QuotationDeadline { get; set; }
        [CssClass("col-md-8")]
        [ReadOnly(true)]
        //[Insertable(false), Updatable(false)]
        public String PurchGroup { get; set; }
        [CssClass("col-md-8")]
        [ReadOnly(true)]
        public String PrNo { get; set; }
        [CssClass("col-md-8")]
        [ReadOnly(true)]
        public String AuthPersonName { get; set; }
        [CssClass("col-md-8")]
        [ReadOnly(true)]
        public String AuthPosition { get; set; }
        //[CssClass("col-md-8")]
        //public String HeaderText { get; set; }
        //[CssClass("col-md-8")]
        //public String HeaderNote { get; set; }
        //[CssClass("col-md-8")]
        //public String WorkDescription { get; set; }
        //[CssClass("col-md-8")]
        //public String BankKey { get; set; }
        //[CssClass("col-md-8")]
        //public String PoCover { get; set; }
        [CssClass("col-md-8")]
        public String DeliveryAddress { get; set; }
        [CssClass("col-md-8")]
        public String ToPTargVal { get; set; }
        [CssClass("col-md-8")]
        [ReadOnly(true)]
        public String YourReference { get; set; }
        [CssClass("col-md-8")]
        [ReadOnly(true)]
        public String OurReference { get; set; }
        [CssClass("col-md-8")]
        [ReadOnly(true)]
        public String SalesPerson { get; set; }
        [CssClass("col-md-8")]
        [ReadOnly(true)]
        public String Telephone { get; set; }
        [CssClass("col-md-8")]
        [ReadOnly(true)]
        public DateTime ValidityStart { get; set; }
        [CssClass("col-md-8")]
        [ReadOnly(true)]
        public DateTime ValidityEnd { get; set; }
        [CssClass("col-md-8")]
        [ReadOnly(true)]
        public Decimal ItemInterval { get; set; }
        [CssClass("col-md-8")]
        [ReadOnly(true)]
        public Decimal SubItemInterval { get; set; }
        [CssClass("col-md-8")]
        [ReadOnly(true)]
        public DateTime Warranty { get; set; }
        [CssClass("col-md-8")]
        [ReadOnly(true)]
        public String Language { get; set; }
        //[CssClass("col-md-8")]
        //public Boolean ReviewOeRequired { get; set; }
        //[CssClass("col-md-8")]
        //public Boolean ProcAgreement { get; set; }
        //[CssClass("col-md-8")]
        //public DateTime ProcAgreementDate { get; set; }
        //[CssClass("col-md-8")]
        //public Boolean ProcAsRequired { get; set; }
        //[CssClass("col-md-8")]
        //public Boolean ProcAsApproved { get; set; }
        //[CssClass("col-md-8")]
        //public DateTime ProcAsApprovedDate { get; set; }
        //[CssClass("col-md-8")]
        //public String ProcAsDesc { get; set; }
        //[CssClass("col-md-8")]
        //public String FinalConclusionDesc { get; set; }
        //[CssClass("col-md-8")]
        //public DateTime WinnerNominationDate { get; set; }
        //[CssClass("col-md-8")]
        //public DateTime ObjectionCloseDate { get; set; }
        //[CssClass("col-md-8")]
        //public String PoDocName { get; set; }
        //[CssClass("col-md-8")]
        //public String TemporaryPic { get; set; }
        //[CssClass("col-md-8")]
        //public String PoNumber { get; set; }
        //[CssClass("col-md-8")]
        //public String PoDocFile { get; set; }
        //[CssClass("col-md-8")]
        //public DateTime F1SubmitDate { get; set; }
        //[CssClass("col-md-8")]
        //public String F1SubmitBy { get; set; }
        //[CssClass("col-md-8")]
        //public DateTime F2SubmitDate { get; set; }
        //[CssClass("col-md-8")]
        //public String F2SubmitBy { get; set; }
        [CssClass("col-md-8")]
        [Updatable(false), Insertable(false)]
        public DateTime F3SubmitDate { get; set; }
        [CssClass("col-md-8")]
        [Updatable(false), Insertable(false)]
        public String F3SubmitBy { get; set; }
        //[CssClass("col-md-8")]
        //public DateTime F31SubmitDate { get; set; }
        //[CssClass("col-md-8")]
        //public String F31SubmitBy { get; set; }
        //[CssClass("col-md-8")]
        //public DateTime F4SubmitDate { get; set; }
        //[CssClass("col-md-8")]
        //public String F4SubmitBy { get; set; }
        //[CssClass("col-md-8")]
        //public DateTime F5SubmitDate { get; set; }
        //[CssClass("col-md-8")]
        //public String F5SubmitBy { get; set; }
        //[CssClass("col-md-8")]
        //public DateTime F6SubmitDate { get; set; }
        //[CssClass("col-md-8")]
        //public String F6SubmitBy { get; set; }
        //[CssClass("col-md-8")]
        //public DateTime F7SubmitDate { get; set; }
        //[CssClass("col-md-8")]
        //public String F7SubmitBy { get; set; }
        //[CssClass("col-md-8")]
        //public DateTime F8SubmitDate { get; set; }
        //[CssClass("col-md-8")]
        //public String F8SubmitBy { get; set; }
        //[CssClass("col-md-8")]
        //public DateTime F9SubmitDate { get; set; }
        //[CssClass("col-md-8")]
        //public String F9SubmitBy { get; set; }
        //[CssClass("col-md-8")]
        //public DateTime F10SubmitDate { get; set; }
        //[CssClass("col-md-8")]
        //public String F10SubmitBy { get; set; }
        //[CssClass("col-md-8")]
        //public DateTime F11SubmitDate { get; set; }
        //[CssClass("col-md-8")]
        //public String F11SubmitBy { get; set; }
        //[CssClass("col-md-8")]
        //public DateTime F12SubmitDate { get; set; }
        //[CssClass("col-md-8")]
        //public String F12SubmitBy { get; set; }
        //[CssClass("col-md-8")]
        //public DateTime F13SubmitDate { get; set; }
        //[CssClass("col-md-8")]
        //public String F13SubmitBy { get; set; }
        //[CssClass("col-md-8")]
        //public DateTime F14SubmitDate { get; set; }
        //[CssClass("col-md-8")]
        //public String F14SubmitBy { get; set; }
        //[CssClass("col-md-8")]
        //public DateTime F15SubmitDate { get; set; }
        //[CssClass("col-md-8")]
        //public String F15SubmitBy { get; set; }
        //[CssClass("col-md-8")]
        //public DateTime F16SubmitDate { get; set; }
        //[CssClass("col-md-8")]
        //public String F16SubmitBy { get; set; }
        //[CssClass("col-md-8")]
        //public DateTime F17SubmitDate { get; set; }
        //[CssClass("col-md-8")]
        //public String F17SubmitBy { get; set; }
        //[CssClass("col-md-8")]
        //public String ProcurementMethodId { get; set; }

        [RfqItemsEditor]
        public List<Entities.RfqItemRow> RfqItems { get; set; }
        [RfqTextsEditor]
        public List<Entities.RfqTextRow> RfqTexts { get; set; }
        [PurchaseRequestsEditor]
        public List<Entities.ProcPrRow> ProcPurchaseRequests { get; set; }

    }
}