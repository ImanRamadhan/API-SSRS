
namespace SCMONLINE.Procurement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Procurement.F2_ProcurementDocCreation")]
    [BasedOnRow(typeof(Entities.ProcurementRow), CheckNames = true)]
    public class F2_ProcurementDocCreationColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 ProcurementId { get; set; }
        [EditLink]
        public String ProcurementTypeName { get; set; }
        [Width(150, Min = 300)]
        [EditLink]
        public String StatusName { get; set; }
        [EditLink]
        public String CollectiveNumber { get; set; }
        [Width(150, Min = 200)]
        [EditLink]
        public String Title { get; set; }
        [EditLink]
        public String Classification { get; set; }
        [EditLink]
        public String Qualification { get; set; }
        [EditLink]
        public String RequestedBy { get; set; }
        [EditLink]
        public String RequestorPosition { get; set; }
        [EditLink]
        public String ApprovedBy { get; set; }
        [EditLink]
        public String ApproverPosition { get; set; }
        [EditLink]
        public String SapBidderListCreatedBy { get; set; }
        [EditLink]
        public DateTime SapBidderListCreatedDate { get; set; }
        [EditLink]
        public String CreatedBy { get; set; }
        [EditLink]
        public DateTime CreatedDate { get; set; }
        //public Decimal GuaranteePercentage { get; set; }
        //public String OfficeAddressName { get; set; }
        //public String ProcValueRangeName { get; set; }
        //public String CommitteeTypeName { get; set; }
        //public Boolean PerformanceGuaranteeRequired { get; set; }
        [EditLink]
        public Int32 TenderPeriod { get; set; }
        [EditLink]
        public Int32 DeliveryTime { get; set; }
        [EditLink]
        public String DestinationName { get; set; }
        [EditLink]
        public String ContractTypeName { get; set; }
        [EditLink]
        public String CurrencyName { get; set; }
        [Width(150, Min = 200)]
        [EditLink]
        public String DocSubmitMethodName { get; set; }
        [EditLink]
        public Boolean AanwijzingExists { get; set; }
        [EditLink]
        public DateTime AanwijzingDate { get; set; }
        [EditLink]
        public DateTime AanwijzingClosingDate { get; set; }
        [EditLink]
        public String AanwijzingLocation { get; set; }
        [EditLink]
        public String AanwijzingClosingLocation { get; set; }
        [EditLink]
        public String AanwijzingSecretary { get; set; }
        [EditLink]
        public String AanwijzingSummary { get; set; }
        [EditLink]
        public Boolean FieldSurveyExists { get; set; }
        [EditLink]
        public String FieldSurveyAddress { get; set; }
        [EditLink]
        public String ItbDocumentFile { get; set; }
        [EditLink]
        public String ItbDocumentName { get; set; }
        [EditLink]
        public String RksDocumentFile { get; set; }
        [EditLink]
        public String RksDocumentName { get; set; }
        [EditLink]
        public DateTime TenderDocSubmitOpenDate { get; set; }
        [EditLink]
        public DateTime TenderDocSubmitCloseDate { get; set; }
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
        //public DateTime ObjectionCloseDate { get; set; }
        //public String PoDocName { get; set; }
        //public String TemporaryPic { get; set; }
        //public String PoNumber { get; set; }
        //public String PoDocFile { get; set; }
        //public DateTime F1SubmitDate { get; set; }
        //public String F1SubmitBy { get; set; }
        [EditLink]
        public DateTime F2SubmitDate { get; set; }
        [EditLink]

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

        //public String ProcurementMethodName { get; set; }
    }
}