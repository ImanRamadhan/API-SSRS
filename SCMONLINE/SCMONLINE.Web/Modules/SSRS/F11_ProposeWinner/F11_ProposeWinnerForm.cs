
namespace SCMONLINE.Procurement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Procurement.F11_ProposeWinner")]
    [BasedOnRow(typeof(Entities.ProcurementRow), CheckNames = true)]
    public class F11_ProposeWinnerForm
    {
        [ReadOnly(true)]
        public String ProcurementTypeId { get; set; }
        [ReadOnly(true)]
        public String Status { get; set; }
        [ReadOnly(true)]
        public String CollectiveNumber { get; set; }
        [ReadOnly(true)]
        public String Title { get; set; }
        [ReadOnly(true)]
        public String Classification { get; set; }
        [ReadOnly(true)]
        public String Qualification { get; set; }
        //public String RequestedBy { get; set; }
        //public String RequestorPosition { get; set; }
        //public String ApprovedBy { get; set; }
        //public String ApproverPosition { get; set; }
        //public String SapBidderListCreatedBy { get; set; }
        //public DateTime SapBidderListCreatedDate { get; set; }
        //public String CreatedBy { get; set; }
        //public DateTime CreatedDate { get; set; }
        //public Decimal GuaranteePercentage { get; set; }
        //public Int32 OfficeAddress { get; set; }
        //public Int32 ProcValueRangeId { get; set; }
        //public Int32 CommitteeTypeId { get; set; }
        //public Boolean PerformanceGuaranteeRequired { get; set; }
        //public Int32 TenderPeriod { get; set; }
        //public Int32 DeliveryTime { get; set; }
        //public Int32 DestinationId { get; set; }
        //public Int32 ContractTypeId { get; set; }
        //public String CurrencyId { get; set; }
        //public Int32 DocSubmitMethodId { get; set; }
        //public Boolean AanwijzingExists { get; set; }
        //public DateTime AanwijzingDate { get; set; }
        //public DateTime AanwijzingClosingDate { get; set; }
        //public String AanwijzingLocation { get; set; }
        //public String AanwijzingClosingLocation { get; set; }
        //public String AanwijzingSecretary { get; set; }
        //public String AanwijzingSummary { get; set; }
        //public Boolean FieldSurveyExists { get; set; }
        //public String FieldSurveyAddress { get; set; }
        //public String ItbDocumentFile { get; set; }
        //public String ItbDocumentName { get; set; }
        //public String RksDocumentFile { get; set; }
        //public String RksDocumentName { get; set; }
        //public DateTime TenderDocSubmitOpenDate { get; set; }
        //public DateTime TenderDocSubmitCloseDate { get; set; }
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
        public Boolean ProcAgreement { get; set; }
        [ReadOnly(true)]
        public DateTime ProcAgreementDate { get; set; }
        //public Boolean ProcAsRequired { get; set; }
        [ReadOnly(true)]
        public DateTime WinnerNominationDate { get; set; }
        [Hidden]
        public Boolean ProcAsApproved { get; set; }
        [Hidden]
        public DateTime ProcAsApprovedDate { get; set; }
        [Hidden]
        public String ProcAsDesc { get; set; }
        [Hidden]
        public String FinalConclusionDesc { get; set; }
        public String ProcRejectTender { get; set; }
        public String ProcRejectTenderDesc { get; set; }
        //public DateTime ObjectionCloseDate { get; set; }
        //public String PoDocName { get; set; }
        //public String TemporaryPic { get; set; }
        //public String PoNumber { get; set; }
        //public String PoDocFile { get; set; }
        //public DateTime F1SubmitDate { get; set; }
        //public String F1SubmitBy { get; set; }
        //public DateTime F2SubmitDate { get; set; }
        //public String F2SubmitBy { get; set; }
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
        [ReadOnly(true)]
        public DateTime F11SubmitDate { get; set; }
        [ReadOnly(true)]
        public String F11SubmitBy { get; set; }
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
        [Hidden]
        public String ProcurementMethodId { get; set; }
    }
}