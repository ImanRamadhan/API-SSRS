
namespace SCMONLINE.Procurement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Procurement.F20_Procurement")]
    [BasedOnRow(typeof(Entities.ProcurementRow), CheckNames = true)]
    public class F20_ProcurementColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 ProcurementId { get; set; }
        [EditLink]
        [Hidden]
        public String ProcurementTypeName { get; set; }
        public String StatusName { get; set; }
        public String CollectiveNumber { get; set; }
        public String Title { get; set; }
        [Hidden]
        public String Classification { get; set; }
        [Hidden]
        public String Qualification { get; set; }
        [Hidden]
        public String RequestedBy { get; set; }
        [Hidden]
        public String RequestorPosition { get; set; }
        [Hidden]
        public String ApprovedBy { get; set; }
        [Hidden]
        public String ApproverPosition { get; set; }
        [Hidden]
        public String SapBidderListCreatedBy { get; set; }
        [Hidden]
        public DateTime SapBidderListCreatedDate { get; set; }
        [Hidden]
        public String CreatedBy { get; set; }
        [Hidden]
        public DateTime CreatedDate { get; set; }
        [Hidden]
        public Decimal GuaranteePercentage { get; set; }
        [Hidden]
        public Int32 OfficeAddress { get; set; }
        [Hidden]
        public String ProcValueRangeName { get; set; }
        [Hidden]
        public String CommitteeTypeName { get; set; }
        [Hidden]
        public Boolean PerformanceGuaranteeRequired { get; set; }
        [Hidden]
        public Int32 TenderPeriod { get; set; }
        [Hidden]
        public Int32 DeliveryTime { get; set; }
        [Hidden]
        public Int32 DestinationId { get; set; }
        [Hidden]
        public String ContractTypeName { get; set; }
        [Hidden]
        public String CurrencyName { get; set; }
        [Hidden]
        public String DocSubmitMethodName { get; set; }
        [Hidden]
        public Boolean AanwijzingExists { get; set; }
        [Hidden]
        public DateTime AanwijzingDate { get; set; }
        [Hidden]
        public DateTime AanwijzingClosingDate { get; set; }
        [Hidden]
        public String AanwijzingLocation { get; set; }
        [Hidden]
        public String AanwijzingClosingLocation { get; set; }
        [Hidden]
        public String AanwijzingSecretary { get; set; }
        [Hidden]
        public String AanwijzingSummary { get; set; }
        [Hidden]
        public Boolean FieldSurveyExists { get; set; }
        [Hidden]
        public String FieldSurveyAddress { get; set; }
        [Hidden]
        public String ItbDocumentFile { get; set; }
        [Hidden]
        public String ItbDocumentName { get; set; }
        [Hidden]
        public String RksDocumentFile { get; set; }
        [Hidden]
        public String RksDocumentName { get; set; }
        [Hidden]
        public DateTime TenderDocSubmitOpenDate { get; set; }
        [Hidden]
        public DateTime TenderDocSubmitCloseDate { get; set; }
        [Hidden]
        public String OrderTypeName { get; set; }
        [Hidden]
        public String PurchDocNum { get; set; }
        [Hidden]
        public DateTime RfqDate { get; set; }
        [Hidden]
        public DateTime QuotationDeadline { get; set; }
        [Hidden]
        public String PurchGroup { get; set; }
        [Hidden]
        public String PrNo { get; set; }
        public String AuthPersonName { get; set; }
        [Hidden]
        public String AuthPosition { get; set; }
        [Hidden]
        public String HeaderText { get; set; }
        [Hidden]
        public String HeaderNote { get; set; }
        [Hidden]
        public String WorkDescription { get; set; }
        [Hidden]
        public String BankKey { get; set; }
        [Hidden]
        public String PoCover { get; set; }
        [Hidden]
        public String DeliveryAddress { get; set; }
        [Hidden]
        public String ToPTargVal { get; set; }
        [Hidden]
        public String YourReference { get; set; }
        [Hidden]
        public String OurReference { get; set; }
        [Hidden]
        public String SalesPerson { get; set; }
        [Hidden]
        public String Telephone { get; set; }
        [Hidden]
        public DateTime ValidityStart { get; set; }
        [Hidden]
        public DateTime ValidityEnd { get; set; }
        [Hidden]
        public Decimal ItemInterval { get; set; }
        [Hidden]
        public Decimal SubItemInterval { get; set; }
        [Hidden]
        public DateTime Warranty { get; set; }
        [Hidden]
        public String Language { get; set; }
        [Hidden]
        public DateTime EvaluationClosingPriceDate { get; set; }
        [Hidden]
        public Boolean ReviewOeRequired { get; set; }
        [Hidden]
        public Boolean ProcAgreement { get; set; }
        [Hidden]
        public DateTime ProcAgreementDate { get; set; }
        [Hidden]
        public Boolean ProcAsRequired { get; set; }
        [Hidden]
        public Boolean ProcAsApproved { get; set; }
        [Hidden]
        public DateTime ProcAsApprovedDate { get; set; }
        [Hidden]
        public String ProcAsDesc { get; set; }
        [Hidden]
        public String FinalConclusionDesc { get; set; }
        [Hidden]
        public DateTime WinnerNominationDate { get; set; }
        [Hidden]
        public DateTime ObjectionCloseDate { get; set; }
        [Hidden]
        public String PoDocName { get; set; }
        [Hidden]
        public String TemporaryPic { get; set; }
        [Hidden]
        public String PoNumber { get; set; }
        [Hidden]
        public String PoDocFile { get; set; }
        public DateTime F1SubmitDate { get; set; }
        public String F1SubmitBy { get; set; }
        public DateTime F2SubmitDate { get; set; }
        public String F2SubmitBy { get; set; }
        public DateTime F3SubmitDate { get; set; }
        public String F3SubmitBy { get; set; }
        public DateTime F31SubmitDate { get; set; }
        public String F31SubmitBy { get; set; }
        public DateTime F4SubmitDate { get; set; }
        public String F4SubmitBy { get; set; }
        public DateTime F5SubmitDate { get; set; }
        public String F5SubmitBy { get; set; }
        public DateTime F6SubmitDate { get; set; }
        public String F6SubmitBy { get; set; }
        public DateTime F7SubmitDate { get; set; }
        public String F7SubmitBy { get; set; }
        public DateTime F8SubmitDate { get; set; }
        public String F8SubmitBy { get; set; }
        public DateTime F9SubmitDate { get; set; }
        public String F9SubmitBy { get; set; }
        public DateTime F10SubmitDate { get; set; }
        public String F10SubmitBy { get; set; }
        public DateTime F11SubmitDate { get; set; }
        public String F11SubmitBy { get; set; }
        public DateTime F12SubmitDate { get; set; }
        public String F12SubmitBy { get; set; }
        public DateTime F13SubmitDate { get; set; }
        public String F13SubmitBy { get; set; }
        public DateTime F14SubmitDate { get; set; }
        public String F14SubmitBy { get; set; }
        public DateTime F15SubmitDate { get; set; }
        public String F15SubmitBy { get; set; }
        public DateTime F16SubmitDate { get; set; }
        public String F16SubmitBy { get; set; }
        public DateTime F17SubmitDate { get; set; }
        public String F17SubmitBy { get; set; }
        public String ProcurementMethodName { get; set; }
        [Hidden]
        public String District { get; set; }
        [Hidden]
        public String Csms { get; set; }
        [Hidden]
        public String MinScore { get; set; }
    }
}