
namespace SCMONLINE.Procurement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Procurement.F14_WinnerAnnouncement")]
    [BasedOnRow(typeof(Entities.ProcurementRow), CheckNames = true)]
    public class F14_WinnerAnnouncementColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 ProcurementId { get; set; }
        [EditLink]
        public String ProcurementTypeName { get; set; }
        [Width(150, Min = 300)]
        public String StatusName { get; set; }
        public String CollectiveNumber { get; set; }
        [Width(150, Min = 300)]
        public String Title { get; set; }
        public String Classification { get; set; }
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
        //public String OfficeAddressName { get; set; }
        //public String ProcValueRangeName { get; set; }
        //public String CommitteeTypeName { get; set; }
        //public Boolean PerformanceGuaranteeRequired { get; set; }
        //public Int32 TenderPeriod { get; set; }
        //public Int32 DeliveryTime { get; set; }
        //public String DestinationName { get; set; }
        //public String ContractTypeName { get; set; }
        //public String CurrencyName { get; set; }
        //public String DocSubmitMethodName { get; set; }
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
        //public String OrderTypeName { get; set; }
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
        public DateTime ObjectionCloseDate { get; set; }
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
        //public DateTime F11SubmitDate { get; set; }
        //public String F11SubmitBy { get; set; }
        //public DateTime F12SubmitDate { get; set; }
        //public String F12SubmitBy { get; set; }
        public DateTime F13SubmitDate { get; set; }
        public String F13SubmitBy { get; set; }
        public DateTime F14SubmitDate { get; set; }
        public String F14SubmitBy { get; set; }
        //public DateTime F15SubmitDate { get; set; }
        //public String F15SubmitBy { get; set; }
        //public DateTime F16SubmitDate { get; set; }
        //public String F16SubmitBy { get; set; }
        //public DateTime F17SubmitDate { get; set; }
        //public String F17SubmitBy { get; set; }
        //public String ProcurementMethodName { get; set; }
    }
}