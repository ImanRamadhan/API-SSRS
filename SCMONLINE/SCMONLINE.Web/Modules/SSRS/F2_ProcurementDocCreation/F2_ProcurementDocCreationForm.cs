
namespace SCMONLINE.Procurement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Procurement.F2_ProcurementDocCreation")]
    [BasedOnRow(typeof(Entities.ProcurementRow), CheckNames = true)]
    public class F2_ProcurementDocCreationForm
    {

        [CssClass("col-md-8")]
        [Updatable(false), Insertable(false)]
        public String ProcurementTypeId { get; set; }
        [CssClass("col-md-8")]
        [Updatable(false), Insertable(false)]
        public String Status { get; set; }
        [CssClass("col-md-8")]
        [Updatable(false), Insertable(false)]
        public String CollectiveNumber { get; set; }
        [CssClass("col-md-8")]
        [Updatable(false), Insertable(false)]
        public String Title { get; set; }
        [CssClass("col-md-8")]
        [Updatable(false), Insertable(false)]
        public String Classification { get; set; }
        [CssClass("col-md-8")]
        [Updatable(false), Insertable(false)]
        public String Qualification { get; set; }
        [CssClass("col-md-8")]
        [Updatable(false), Insertable(false)]
        public String RequestedBy { get; set; }
        [CssClass("col-md-8")]
        [Updatable(false), Insertable(false)]
        public String RequestorPosition { get; set; }
        [CssClass("col-md-8")]
        [Updatable(false), Insertable(false)]
        public String ApprovedBy { get; set; }
        [CssClass("col-md-8")]
        [Updatable(false), Insertable(false)]
        public String ApproverPosition { get; set; }
        [CssClass("col-md-8")]
        [Updatable(false), Insertable(false)]
        public String SapBidderListCreatedBy { get; set; }
        [CssClass("col-md-8")]
        [Updatable(false), Insertable(false)]
        public DateTime SapBidderListCreatedDate { get; set; }
        [CssClass("col-md-8")]
        [Updatable(false), Insertable(false)]
        public String CreatedBy { get; set; }
        [CssClass("col-md-8")]
        [Updatable(false), Insertable(false)]
        public DateTime CreatedDate { get; set; }
        //public Decimal GuaranteePercentage { get; set; }
        //public Int32 OfficeAddress { get; set; }
        //public Int32 ProcValueRangeId { get; set; }
        //public Int32 CommitteeTypeId { get; set; }
        //public Boolean PerformanceGuaranteeRequired { get; set; }
        [CssClass("col-md-8")]
        public Int32 TenderPeriod { get; set; }
        [CssClass("col-md-8")]
        public Int32 DeliveryTime { get; set; }
        [CssClass("col-md-8")]
        public Int32 DestinationId { get; set; }
        [CssClass("col-md-8")]
        public Int32 ContractTypeId { get; set; }
        [CssClass("col-md-8")]
        public String CurrencyId { get; set; }
        [CssClass("col-md-8")]
        public Int32 DocSubmitMethodId { get; set; }
        [CssClass("col-md-8")]
        public Boolean AanwijzingExists { get; set; }
        [CssClass("col-md-8")]
        public DateTime AanwijzingDate { get; set; }
        [CssClass("col-md-8")]
        [Hidden]
        public DateTime AanwijzingClosingDate { get; set; }
        [CssClass("col-md-8")]
        [Hidden]
        public String AanwijzingLocation { get; set; }
        // [CssClass("col-md-8")]
        // public String AanwijzingClosingLocation { get; set; }
        [CssClass("col-md-8")]
        [Hidden]
        public String AanwijzingSecretary { get; set; }
        [CssClass("col-md-8")]
        [Hidden]
        public String AanwijzingSummary { get; set; }
        [CssClass("col-md-8")]
        public Boolean FieldSurveyExists { get; set; }
        [CssClass("col-md-8")]
        public String FieldSurveyAddress { get; set; }
        public String RequestTerms { get; set; }
        [CssClass("col-md-8")]
        public String ItbDocumentFile { get; set; }
        [CssClass("col-md-8")]
        public String ItbDocumentName { get; set; }
        [CssClass("col-md-8")]
        public String RksDocumentFile { get; set; }
        [CssClass("col-md-8")]
        public String RksDocumentName { get; set; }
        [CssClass("col-md-8")]
        public DateTime TenderDocSubmitOpenDate { get; set; }
        [CssClass("col-md-8")]
        public DateTime TenderDocSubmitCloseDate { get; set; }
        //public String OrderTypeId { get; set; }
        //public String PurchDocNum { get; set; }
        //public DateTime RfqDate { get; set; }
        //public DateTime QuotationDeadline { get; set; }
        //public String PurchGroup { get; set; }
        //public String PrNo { get; set; }
        //public String AuthPersonName { get; set; }
        //public String AuthPosition { get; set; }
        //public String HeaderText { get; set; }
        //public String HeaderNote { get; set; }
        //public String WorkDescription { get; set; }
        //public String BankKey { get; set; }
        //public String PoCover { get; set; }
        //public String DeliveryAddress { get; set; }
        //public String ToPTargVal { get; set; }
        //public String YourReference { get; set; }
        //public String OurReference { get; set; }
        //public String SalesPerson { get; set; }
        //public String Telephone { get; set; }
        //public DateTime ValidityStart { get; set; }
        //public DateTime ValidityEnd { get; set; }
        //public Decimal ItemInterval { get; set; }
        //public Decimal SubItemInterval { get; set; }
        //public DateTime Warranty { get; set; }
        //public String Language { get; set; }
        //public Boolean ReviewOeRequired { get; set; }
        //public Boolean ProcAgreement { get; set; }
        //public DateTime ProcAgreementDate { get; set; }
        //public Boolean ProcAsRequired { get; set; }
        //public Boolean ProcAsApproved { get; set; }
        //public DateTime ProcAsApprovedDate { get; set; }
        //public String ProcAsDesc { get; set; }
        //public String FinalConclusionDesc { get; set; }
        //public DateTime WinnerNominationDate { get; set; }
        //public DateTime ObjectionCloseDate { get; set; }
        //public String PoDocName { get; set; }
        //public String TemporaryPic { get; set; }
        //public String PoNumber { get; set; }
        //public String PoDocFile { get; set; }
        //public DateTime F1SubmitDate { get; set; }
        //public String F1SubmitBy { get; set; }
        [CssClass("col-md-8")]
        [Updatable(false), Insertable(false)]
        public DateTime F2SubmitDate { get; set; }
        [CssClass("col-md-8")]
        [Updatable(false), Insertable(false)]
        public String F2SubmitBy { get; set; }
        //public DateTime F3SubmitDate { get; set; }
        //public String F3SubmitBy { get; set; }
        //public DateTime F31SubmitDate { get; set; }
        //public String F31SubmitBy { get; set; }
        //public DateTime F4SubmitDate { get; set; }
        //public String F4SubmitBy { get; set; }
        //public DateTime F5SubmitDate { get; set; }
        //public String F5SubmitBy { get; set; }
        //public DateTime F6SubmitDate { get; set; }
        //public String F6SubmitBy { get; set; }
        //public DateTime F7SubmitDate { get; set; }
        //public String F7SubmitBy { get; set; }
        //public DateTime F8SubmitDate { get; set; }
        //public String F8SubmitBy { get; set; }
        //public DateTime F9SubmitDate { get; set; }
        //public String F9SubmitBy { get; set; }
        //public DateTime F10SubmitDate { get; set; }
        //public String F10SubmitBy { get; set; }
        //public DateTime F11SubmitDate { get; set; }
        //public String F11SubmitBy { get; set; }
        //public DateTime F12SubmitDate { get; set; }
        //public String F12SubmitBy { get; set; }
        //public DateTime F13SubmitDate { get; set; }
        //public String F13SubmitBy { get; set; }
        //public DateTime F14SubmitDate { get; set; }
        //public String F14SubmitBy { get; set; }
        //public DateTime F15SubmitDate { get; set; }
        //public String F15SubmitBy { get; set; }
        //public DateTime F16SubmitDate { get; set; }
        //public String F16SubmitBy { get; set; }
        //public DateTime F17SubmitDate { get; set; }
        //public String F17SubmitBy { get; set; }
        //public String ProcurementMethodId { get; set; }
        //public Boolean SubmitObjection { get; set; }
        //[CssClass("col-md-8")]
        //[TextAreaEditor]
        
        //public String ObjectionDescription { get; set; }
    }
}