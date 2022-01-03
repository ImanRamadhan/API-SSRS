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

    [ConnectionKey("Default"), TableName("[dbo].[Procurement]")]
    [DisplayName("F10 Negotiation"), InstanceName("F10 Negotiation"), TwoLevelCached]
    [ReadPermission("Procurement:F10_Negotiation:Read")]
    [InsertPermission("Procurement:F10_Negotiation:Insert")]
    [UpdatePermission("Procurement:F10_Negotiation:Update")]
    [DeletePermission("Procurement:F10_Negotiation:Delete")]
    public sealed class F10_NegotiationRow : Row, IIdRow, INameRow
    {

        [DisplayName("Procurement Id"), Identity]
        public Int64? ProcurementId { get { return Fields.ProcurementId[this]; } set { Fields.ProcurementId[this] = value; } }
		public partial class RowFields { public Int64Field ProcurementId; }

        [DisplayName("Procurement Type"), Size(1), ForeignKey("[dbo].[ProcurementType]", "ProcurementTypeId"), LeftJoin("jProcurementType"), QuickSearch, TextualField("ProcurementTypeName")]
        public String ProcurementTypeId { get { return Fields.ProcurementTypeId[this]; } set { Fields.ProcurementTypeId[this] = value; } }
		public partial class RowFields { public StringField ProcurementTypeId; }

        [DisplayName("Status"), Size(50), ForeignKey("[dbo].[ProcStatus]", "ProcStatusId"), LeftJoin("jStatus"), TextualField("StatusName")]
        public String Status { get { return Fields.Status[this]; } set { Fields.Status[this] = value; } }
		public partial class RowFields { public StringField Status; }

        [DisplayName("Collective Number")]
        public String CollectiveNumber { get { return Fields.CollectiveNumber[this]; } set { Fields.CollectiveNumber[this] = value; } }
		public partial class RowFields { public StringField CollectiveNumber; }

        [DisplayName("Title")]
        public String Title { get { return Fields.Title[this]; } set { Fields.Title[this] = value; } }
		public partial class RowFields { public StringField Title; }

        [DisplayName("Classification")]
        public String Classification { get { return Fields.Classification[this]; } set { Fields.Classification[this] = value; } }
		public partial class RowFields { public StringField Classification; }

        [DisplayName("Qualification")]
        public String Qualification { get { return Fields.Qualification[this]; } set { Fields.Qualification[this] = value; } }
		public partial class RowFields { public StringField Qualification; }

        [DisplayName("Requested By")]
        public String RequestedBy { get { return Fields.RequestedBy[this]; } set { Fields.RequestedBy[this] = value; } }
		public partial class RowFields { public StringField RequestedBy; }

        [DisplayName("Requestor Position")]
        public String RequestorPosition { get { return Fields.RequestorPosition[this]; } set { Fields.RequestorPosition[this] = value; } }
		public partial class RowFields { public StringField RequestorPosition; }

        [DisplayName("Approved By")]
        public String ApprovedBy { get { return Fields.ApprovedBy[this]; } set { Fields.ApprovedBy[this] = value; } }
		public partial class RowFields { public StringField ApprovedBy; }

        [DisplayName("Approver Position")]
        public String ApproverPosition { get { return Fields.ApproverPosition[this]; } set { Fields.ApproverPosition[this] = value; } }
		public partial class RowFields { public StringField ApproverPosition; }

        [DisplayName("Sap Bidder List Created By"), Column("SAPBidderListCreatedBy")]
        public String SapBidderListCreatedBy { get { return Fields.SapBidderListCreatedBy[this]; } set { Fields.SapBidderListCreatedBy[this] = value; } }
		public partial class RowFields { public StringField SapBidderListCreatedBy; }

        [DisplayName("Sap Bidder List Created Date"), Column("SAPBidderListCreatedDate")]
        public DateTime? SapBidderListCreatedDate { get { return Fields.SapBidderListCreatedDate[this]; } set { Fields.SapBidderListCreatedDate[this] = value; } }
		public partial class RowFields { public DateTimeField SapBidderListCreatedDate; }

        [DisplayName("Created By")]
        public String CreatedBy { get { return Fields.CreatedBy[this]; } set { Fields.CreatedBy[this] = value; } }
		public partial class RowFields { public StringField CreatedBy; }

        [DisplayName("Created Date")]
        public DateTime? CreatedDate { get { return Fields.CreatedDate[this]; } set { Fields.CreatedDate[this] = value; } }
		public partial class RowFields { public DateTimeField CreatedDate; }

        [DisplayName("Guarantee Percentage"), Size(19), Scale(4)]
        public Decimal? GuaranteePercentage { get { return Fields.GuaranteePercentage[this]; } set { Fields.GuaranteePercentage[this] = value; } }
		public partial class RowFields { public DecimalField GuaranteePercentage; }

        [DisplayName("Office Address"), ForeignKey("[dbo].[Address]", "AddressId"), LeftJoin("jOfficeAddress"), TextualField("OfficeAddressName")]
        public Int32? OfficeAddress { get { return Fields.OfficeAddress[this]; } set { Fields.OfficeAddress[this] = value; } }
		public partial class RowFields { public Int32Field OfficeAddress; }

        [DisplayName("Proc Value Range"), ForeignKey("[dbo].[ProcValueRange]", "ProcValueRangeId"), LeftJoin("jProcValueRange"), TextualField("ProcValueRangeName")]
        public Int32? ProcValueRangeId { get { return Fields.ProcValueRangeId[this]; } set { Fields.ProcValueRangeId[this] = value; } }
		public partial class RowFields { public Int32Field ProcValueRangeId; }

        [DisplayName("Committee Type"), ForeignKey("[dbo].[CommitteType]", "CommitteTypeId"), LeftJoin("jCommitteeType"), TextualField("CommitteeTypeName")]
        public Int32? CommitteeTypeId { get { return Fields.CommitteeTypeId[this]; } set { Fields.CommitteeTypeId[this] = value; } }
		public partial class RowFields { public Int32Field CommitteeTypeId; }

        [DisplayName("Performance Guarantee Required")]
        public Boolean? PerformanceGuaranteeRequired { get { return Fields.PerformanceGuaranteeRequired[this]; } set { Fields.PerformanceGuaranteeRequired[this] = value; } }
		public partial class RowFields { public BooleanField PerformanceGuaranteeRequired; }

        [DisplayName("Tender Period")]
        public Int32? TenderPeriod { get { return Fields.TenderPeriod[this]; } set { Fields.TenderPeriod[this] = value; } }
		public partial class RowFields { public Int32Field TenderPeriod; }

        [DisplayName("Delivery Time")]
        public Int32? DeliveryTime { get { return Fields.DeliveryTime[this]; } set { Fields.DeliveryTime[this] = value; } }
		public partial class RowFields { public Int32Field DeliveryTime; }

        [DisplayName("Destination"), ForeignKey("[dbo].[Address]", "AddressId"), LeftJoin("jDestination"), TextualField("DestinationName")]
        public Int32? DestinationId { get { return Fields.DestinationId[this]; } set { Fields.DestinationId[this] = value; } }
		public partial class RowFields { public Int32Field DestinationId; }

        [DisplayName("Contract Type"), ForeignKey("[dbo].[ContractType]", "ContractTypeId"), LeftJoin("jContractType"), TextualField("ContractTypeName")]
        public Int32? ContractTypeId { get { return Fields.ContractTypeId[this]; } set { Fields.ContractTypeId[this] = value; } }
		public partial class RowFields { public Int32Field ContractTypeId; }

        [DisplayName("Currency"), Size(3), ForeignKey("[dbo].[Currency]", "CurrencyId"), LeftJoin("jCurrency"), TextualField("CurrencyName")]
        public String CurrencyId { get { return Fields.CurrencyId[this]; } set { Fields.CurrencyId[this] = value; } }
		public partial class RowFields { public StringField CurrencyId; }

        [DisplayName("Doc Submit Method"), ForeignKey("[dbo].[DocSubmitMethod]", "DocSubmitMethodId"), LeftJoin("jDocSubmitMethod"), TextualField("DocSubmitMethodName")]
        public Int32? DocSubmitMethodId { get { return Fields.DocSubmitMethodId[this]; } set { Fields.DocSubmitMethodId[this] = value; } }
		public partial class RowFields { public Int32Field DocSubmitMethodId; }

        [DisplayName("Aanwijzing Exists")]
        public Boolean? AanwijzingExists { get { return Fields.AanwijzingExists[this]; } set { Fields.AanwijzingExists[this] = value; } }
		public partial class RowFields { public BooleanField AanwijzingExists; }

        [DisplayName("Aanwijzing Date")]
        public DateTime? AanwijzingDate { get { return Fields.AanwijzingDate[this]; } set { Fields.AanwijzingDate[this] = value; } }
		public partial class RowFields { public DateTimeField AanwijzingDate; }

        [DisplayName("Aanwijzing Closing Date")]
        public DateTime? AanwijzingClosingDate { get { return Fields.AanwijzingClosingDate[this]; } set { Fields.AanwijzingClosingDate[this] = value; } }
		public partial class RowFields { public DateTimeField AanwijzingClosingDate; }

        [DisplayName("Aanwijzing Location")]
        public String AanwijzingLocation { get { return Fields.AanwijzingLocation[this]; } set { Fields.AanwijzingLocation[this] = value; } }
		public partial class RowFields { public StringField AanwijzingLocation; }

        [DisplayName("Aanwijzing Closing Location")]
        public String AanwijzingClosingLocation { get { return Fields.AanwijzingClosingLocation[this]; } set { Fields.AanwijzingClosingLocation[this] = value; } }
		public partial class RowFields { public StringField AanwijzingClosingLocation; }

        [DisplayName("Aanwijzing Secretary")]
        public String AanwijzingSecretary { get { return Fields.AanwijzingSecretary[this]; } set { Fields.AanwijzingSecretary[this] = value; } }
		public partial class RowFields { public StringField AanwijzingSecretary; }

        [DisplayName("Aanwijzing Summary")]
        public String AanwijzingSummary { get { return Fields.AanwijzingSummary[this]; } set { Fields.AanwijzingSummary[this] = value; } }
		public partial class RowFields { public StringField AanwijzingSummary; }

        [DisplayName("Field Survey Exists")]
        public Boolean? FieldSurveyExists { get { return Fields.FieldSurveyExists[this]; } set { Fields.FieldSurveyExists[this] = value; } }
		public partial class RowFields { public BooleanField FieldSurveyExists; }

        [DisplayName("Field Survey Address")]
        public String FieldSurveyAddress { get { return Fields.FieldSurveyAddress[this]; } set { Fields.FieldSurveyAddress[this] = value; } }
		public partial class RowFields { public StringField FieldSurveyAddress; }

        [DisplayName("Itb Document File"), Column("ITBDocumentFile")]
        public String ItbDocumentFile { get { return Fields.ItbDocumentFile[this]; } set { Fields.ItbDocumentFile[this] = value; } }
		public partial class RowFields { public StringField ItbDocumentFile; }

        [DisplayName("Itb Document Name"), Column("ITBDocumentName")]
        public String ItbDocumentName { get { return Fields.ItbDocumentName[this]; } set { Fields.ItbDocumentName[this] = value; } }
		public partial class RowFields { public StringField ItbDocumentName; }

        [DisplayName("Rks Document File"), Column("RKSDocumentFile")]
        public String RksDocumentFile { get { return Fields.RksDocumentFile[this]; } set { Fields.RksDocumentFile[this] = value; } }
		public partial class RowFields { public StringField RksDocumentFile; }

        [DisplayName("Rks Document Name"), Column("RKSDocumentName")]
        public String RksDocumentName { get { return Fields.RksDocumentName[this]; } set { Fields.RksDocumentName[this] = value; } }
		public partial class RowFields { public StringField RksDocumentName; }

        [DisplayName("Tender Doc Submit Open Date")]
        public DateTime? TenderDocSubmitOpenDate { get { return Fields.TenderDocSubmitOpenDate[this]; } set { Fields.TenderDocSubmitOpenDate[this] = value; } }
		public partial class RowFields { public DateTimeField TenderDocSubmitOpenDate; }

        [DisplayName("Tender Doc Submit Close Date")]
        public DateTime? TenderDocSubmitCloseDate { get { return Fields.TenderDocSubmitCloseDate[this]; } set { Fields.TenderDocSubmitCloseDate[this] = value; } }
		public partial class RowFields { public DateTimeField TenderDocSubmitCloseDate; }

        [DisplayName("Order Type"), Size(4), ForeignKey("[dbo].[OrderType]", "OrderTypeId"), LeftJoin("jOrderType"), TextualField("OrderTypeName")]
        public String OrderTypeId { get { return Fields.OrderTypeId[this]; } set { Fields.OrderTypeId[this] = value; } }
		public partial class RowFields { public StringField OrderTypeId; }

        [DisplayName("Purch Doc Num"), Size(10)]
        public String PurchDocNum { get { return Fields.PurchDocNum[this]; } set { Fields.PurchDocNum[this] = value; } }
		public partial class RowFields { public StringField PurchDocNum; }

        [DisplayName("Rfq Date"), Column("RFQDate")]
        public DateTime? RfqDate { get { return Fields.RfqDate[this]; } set { Fields.RfqDate[this] = value; } }
		public partial class RowFields { public DateTimeField RfqDate; }

        [DisplayName("Quotation Deadline")]
        public DateTime? QuotationDeadline { get { return Fields.QuotationDeadline[this]; } set { Fields.QuotationDeadline[this] = value; } }
		public partial class RowFields { public DateTimeField QuotationDeadline; }

        [DisplayName("Purch Group")]
        public String PurchGroup { get { return Fields.PurchGroup[this]; } set { Fields.PurchGroup[this] = value; } }
		public partial class RowFields { public StringField PurchGroup; }

        [DisplayName("Pr No"), Column("PRNo")]
        public String PrNo { get { return Fields.PrNo[this]; } set { Fields.PrNo[this] = value; } }
		public partial class RowFields { public StringField PrNo; }

        [DisplayName("Auth Person Name")]
        public String AuthPersonName { get { return Fields.AuthPersonName[this]; } set { Fields.AuthPersonName[this] = value; } }
		public partial class RowFields { public StringField AuthPersonName; }

        [DisplayName("Auth Position")]
        public String AuthPosition { get { return Fields.AuthPosition[this]; } set { Fields.AuthPosition[this] = value; } }
		public partial class RowFields { public StringField AuthPosition; }

        [DisplayName("Header Text")]
        public String HeaderText { get { return Fields.HeaderText[this]; } set { Fields.HeaderText[this] = value; } }
		public partial class RowFields { public StringField HeaderText; }

        [DisplayName("Header Note")]
        public String HeaderNote { get { return Fields.HeaderNote[this]; } set { Fields.HeaderNote[this] = value; } }
		public partial class RowFields { public StringField HeaderNote; }

        [DisplayName("Work Description")]
        public String WorkDescription { get { return Fields.WorkDescription[this]; } set { Fields.WorkDescription[this] = value; } }
		public partial class RowFields { public StringField WorkDescription; }

        [DisplayName("Bank Key")]
        public String BankKey { get { return Fields.BankKey[this]; } set { Fields.BankKey[this] = value; } }
		public partial class RowFields { public StringField BankKey; }

        [DisplayName("Po Cover"), Column("POCover")]
        public String PoCover { get { return Fields.PoCover[this]; } set { Fields.PoCover[this] = value; } }
		public partial class RowFields { public StringField PoCover; }

        [DisplayName("Delivery Address")]
        public String DeliveryAddress { get { return Fields.DeliveryAddress[this]; } set { Fields.DeliveryAddress[this] = value; } }
		public partial class RowFields { public StringField DeliveryAddress; }

        [DisplayName("To P Targ Val")]
        public String ToPTargVal { get { return Fields.ToPTargVal[this]; } set { Fields.ToPTargVal[this] = value; } }
		public partial class RowFields { public StringField ToPTargVal; }

        [DisplayName("Your Reference")]
        public String YourReference { get { return Fields.YourReference[this]; } set { Fields.YourReference[this] = value; } }
		public partial class RowFields { public StringField YourReference; }

        [DisplayName("Our Reference")]
        public String OurReference { get { return Fields.OurReference[this]; } set { Fields.OurReference[this] = value; } }
		public partial class RowFields { public StringField OurReference; }

        [DisplayName("Sales Person")]
        public String SalesPerson { get { return Fields.SalesPerson[this]; } set { Fields.SalesPerson[this] = value; } }
		public partial class RowFields { public StringField SalesPerson; }

        [DisplayName("Telephone")]
        public String Telephone { get { return Fields.Telephone[this]; } set { Fields.Telephone[this] = value; } }
		public partial class RowFields { public StringField Telephone; }

        [DisplayName("Validity Start")]
        public DateTime? ValidityStart { get { return Fields.ValidityStart[this]; } set { Fields.ValidityStart[this] = value; } }
		public partial class RowFields { public DateTimeField ValidityStart; }

        [DisplayName("Validity End")]
        public DateTime? ValidityEnd { get { return Fields.ValidityEnd[this]; } set { Fields.ValidityEnd[this] = value; } }
		public partial class RowFields { public DateTimeField ValidityEnd; }

        [DisplayName("Item Interval"), Size(19), Scale(4)]
        public Decimal? ItemInterval { get { return Fields.ItemInterval[this]; } set { Fields.ItemInterval[this] = value; } }
		public partial class RowFields { public DecimalField ItemInterval; }

        [DisplayName("Sub Item Interval"), Size(19), Scale(4)]
        public Decimal? SubItemInterval { get { return Fields.SubItemInterval[this]; } set { Fields.SubItemInterval[this] = value; } }
		public partial class RowFields { public DecimalField SubItemInterval; }

        [DisplayName("Warranty")]
        public DateTime? Warranty { get { return Fields.Warranty[this]; } set { Fields.Warranty[this] = value; } }
		public partial class RowFields { public DateTimeField Warranty; }

        [DisplayName("Language")]
        public String Language { get { return Fields.Language[this]; } set { Fields.Language[this] = value; } }
		public partial class RowFields { public StringField Language; }

        [DisplayName("Review Oe Required"), Column("ReviewOERequired")]
        public Boolean? ReviewOeRequired { get { return Fields.ReviewOeRequired[this]; } set { Fields.ReviewOeRequired[this] = value; } }
		public partial class RowFields { public BooleanField ReviewOeRequired; }

        [DisplayName("Proc Agreement")]
        public Boolean? ProcAgreement { get { return Fields.ProcAgreement[this]; } set { Fields.ProcAgreement[this] = value; } }
		public partial class RowFields { public BooleanField ProcAgreement; }

        [DisplayName("Proc Agreement Date")]
        public DateTime? ProcAgreementDate { get { return Fields.ProcAgreementDate[this]; } set { Fields.ProcAgreementDate[this] = value; } }
		public partial class RowFields { public DateTimeField ProcAgreementDate; }

        [DisplayName("Proc As Required"), Column("ProcASRequired")]
        public Boolean? ProcAsRequired { get { return Fields.ProcAsRequired[this]; } set { Fields.ProcAsRequired[this] = value; } }
		public partial class RowFields { public BooleanField ProcAsRequired; }

        [DisplayName("Proc As Approved"), Column("ProcASApproved")]
        public Boolean? ProcAsApproved { get { return Fields.ProcAsApproved[this]; } set { Fields.ProcAsApproved[this] = value; } }
		public partial class RowFields { public BooleanField ProcAsApproved; }

        [DisplayName("Proc As Approved Date"), Column("ProcASApprovedDate")]
        public DateTime? ProcAsApprovedDate { get { return Fields.ProcAsApprovedDate[this]; } set { Fields.ProcAsApprovedDate[this] = value; } }
		public partial class RowFields { public DateTimeField ProcAsApprovedDate; }

        [DisplayName("Proc As Desc"), Column("ProcASDesc")]
        public String ProcAsDesc { get { return Fields.ProcAsDesc[this]; } set { Fields.ProcAsDesc[this] = value; } }
		public partial class RowFields { public StringField ProcAsDesc; }

        [DisplayName("Final Conclusion Desc")]
        public String FinalConclusionDesc { get { return Fields.FinalConclusionDesc[this]; } set { Fields.FinalConclusionDesc[this] = value; } }
		public partial class RowFields { public StringField FinalConclusionDesc; }

        [DisplayName("Winner Nomination Date")]
        public DateTime? WinnerNominationDate { get { return Fields.WinnerNominationDate[this]; } set { Fields.WinnerNominationDate[this] = value; } }
		public partial class RowFields { public DateTimeField WinnerNominationDate; }

        [DisplayName("Objection Close Date")]
        public DateTime? ObjectionCloseDate { get { return Fields.ObjectionCloseDate[this]; } set { Fields.ObjectionCloseDate[this] = value; } }
		public partial class RowFields { public DateTimeField ObjectionCloseDate; }

        [DisplayName("Po Doc Name"), Column("PODocName")]
        public String PoDocName { get { return Fields.PoDocName[this]; } set { Fields.PoDocName[this] = value; } }
		public partial class RowFields { public StringField PoDocName; }

        [DisplayName("Temporary Pic"), Column("TemporaryPIC")]
        public String TemporaryPic { get { return Fields.TemporaryPic[this]; } set { Fields.TemporaryPic[this] = value; } }
		public partial class RowFields { public StringField TemporaryPic; }

        [DisplayName("Po Number"), Column("PONumber")]
        public String PoNumber { get { return Fields.PoNumber[this]; } set { Fields.PoNumber[this] = value; } }
		public partial class RowFields { public StringField PoNumber; }

        [DisplayName("Po Doc File"), Column("PODocFile")]
        public String PoDocFile { get { return Fields.PoDocFile[this]; } set { Fields.PoDocFile[this] = value; } }
		public partial class RowFields { public StringField PoDocFile; }

        [DisplayName("F1 Submit Date")]
        public DateTime? F1SubmitDate { get { return Fields.F1SubmitDate[this]; } set { Fields.F1SubmitDate[this] = value; } }
		public partial class RowFields { public DateTimeField F1SubmitDate; }

        [DisplayName("F1 Submit By")]
        public String F1SubmitBy { get { return Fields.F1SubmitBy[this]; } set { Fields.F1SubmitBy[this] = value; } }
		public partial class RowFields { public StringField F1SubmitBy; }

        [DisplayName("F2 Submit Date")]
        public DateTime? F2SubmitDate { get { return Fields.F2SubmitDate[this]; } set { Fields.F2SubmitDate[this] = value; } }
		public partial class RowFields { public DateTimeField F2SubmitDate; }

        [DisplayName("F2 Submit By")]
        public String F2SubmitBy { get { return Fields.F2SubmitBy[this]; } set { Fields.F2SubmitBy[this] = value; } }
		public partial class RowFields { public StringField F2SubmitBy; }

        [DisplayName("F3 Submit Date")]
        public DateTime? F3SubmitDate { get { return Fields.F3SubmitDate[this]; } set { Fields.F3SubmitDate[this] = value; } }
		public partial class RowFields { public DateTimeField F3SubmitDate; }

        [DisplayName("F3 Submit By")]
        public String F3SubmitBy { get { return Fields.F3SubmitBy[this]; } set { Fields.F3SubmitBy[this] = value; } }
		public partial class RowFields { public StringField F3SubmitBy; }

        [DisplayName("F3 1 Submit Date"), Column("F3_1SubmitDate")]
        public DateTime? F31SubmitDate { get { return Fields.F31SubmitDate[this]; } set { Fields.F31SubmitDate[this] = value; } }
		public partial class RowFields { public DateTimeField F31SubmitDate; }

        [DisplayName("F3 1 Submit By"), Column("F3_1SubmitBy")]
        public String F31SubmitBy { get { return Fields.F31SubmitBy[this]; } set { Fields.F31SubmitBy[this] = value; } }
		public partial class RowFields { public StringField F31SubmitBy; }

        [DisplayName("F4 Submit Date")]
        public DateTime? F4SubmitDate { get { return Fields.F4SubmitDate[this]; } set { Fields.F4SubmitDate[this] = value; } }
		public partial class RowFields { public DateTimeField F4SubmitDate; }

        [DisplayName("F4 Submit By")]
        public String F4SubmitBy { get { return Fields.F4SubmitBy[this]; } set { Fields.F4SubmitBy[this] = value; } }
		public partial class RowFields { public StringField F4SubmitBy; }

        [DisplayName("F5 Submit Date")]
        public DateTime? F5SubmitDate { get { return Fields.F5SubmitDate[this]; } set { Fields.F5SubmitDate[this] = value; } }
		public partial class RowFields { public DateTimeField F5SubmitDate; }

        [DisplayName("F5 Submit By")]
        public String F5SubmitBy { get { return Fields.F5SubmitBy[this]; } set { Fields.F5SubmitBy[this] = value; } }
		public partial class RowFields { public StringField F5SubmitBy; }

        [DisplayName("F6 Submit Date")]
        public DateTime? F6SubmitDate { get { return Fields.F6SubmitDate[this]; } set { Fields.F6SubmitDate[this] = value; } }
		public partial class RowFields { public DateTimeField F6SubmitDate; }

        [DisplayName("F6 Submit By")]
        public String F6SubmitBy { get { return Fields.F6SubmitBy[this]; } set { Fields.F6SubmitBy[this] = value; } }
		public partial class RowFields { public StringField F6SubmitBy; }

        [DisplayName("F7 Submit Date")]
        public DateTime? F7SubmitDate { get { return Fields.F7SubmitDate[this]; } set { Fields.F7SubmitDate[this] = value; } }
		public partial class RowFields { public DateTimeField F7SubmitDate; }

        [DisplayName("F7 Submit By")]
        public String F7SubmitBy { get { return Fields.F7SubmitBy[this]; } set { Fields.F7SubmitBy[this] = value; } }
		public partial class RowFields { public StringField F7SubmitBy; }

        [DisplayName("F8 Submit Date")]
        public DateTime? F8SubmitDate { get { return Fields.F8SubmitDate[this]; } set { Fields.F8SubmitDate[this] = value; } }
		public partial class RowFields { public DateTimeField F8SubmitDate; }

        [DisplayName("F8 Submit By")]
        public String F8SubmitBy { get { return Fields.F8SubmitBy[this]; } set { Fields.F8SubmitBy[this] = value; } }
		public partial class RowFields { public StringField F8SubmitBy; }

        [DisplayName("F9 Submit Date")]
        public DateTime? F9SubmitDate { get { return Fields.F9SubmitDate[this]; } set { Fields.F9SubmitDate[this] = value; } }
		public partial class RowFields { public DateTimeField F9SubmitDate; }

        [DisplayName("F9 Submit By")]
        public String F9SubmitBy { get { return Fields.F9SubmitBy[this]; } set { Fields.F9SubmitBy[this] = value; } }
		public partial class RowFields { public StringField F9SubmitBy; }

        [DisplayName("F10 Submit Date")]
        public DateTime? F10SubmitDate { get { return Fields.F10SubmitDate[this]; } set { Fields.F10SubmitDate[this] = value; } }
		public partial class RowFields { public DateTimeField F10SubmitDate; }

        [DisplayName("F10 Submit By")]
        public String F10SubmitBy { get { return Fields.F10SubmitBy[this]; } set { Fields.F10SubmitBy[this] = value; } }
		public partial class RowFields { public StringField F10SubmitBy; }

        [DisplayName("F11 Submit Date")]
        public DateTime? F11SubmitDate { get { return Fields.F11SubmitDate[this]; } set { Fields.F11SubmitDate[this] = value; } }
		public partial class RowFields { public DateTimeField F11SubmitDate; }

        [DisplayName("F11 Submit By")]
        public String F11SubmitBy { get { return Fields.F11SubmitBy[this]; } set { Fields.F11SubmitBy[this] = value; } }
		public partial class RowFields { public StringField F11SubmitBy; }

        [DisplayName("F12 Submit Date")]
        public DateTime? F12SubmitDate { get { return Fields.F12SubmitDate[this]; } set { Fields.F12SubmitDate[this] = value; } }
		public partial class RowFields { public DateTimeField F12SubmitDate; }

        [DisplayName("F12 Submit By")]
        public String F12SubmitBy { get { return Fields.F12SubmitBy[this]; } set { Fields.F12SubmitBy[this] = value; } }
		public partial class RowFields { public StringField F12SubmitBy; }

        [DisplayName("F13 Submit Date")]
        public DateTime? F13SubmitDate { get { return Fields.F13SubmitDate[this]; } set { Fields.F13SubmitDate[this] = value; } }
		public partial class RowFields { public DateTimeField F13SubmitDate; }

        [DisplayName("F13 Submit By")]
        public String F13SubmitBy { get { return Fields.F13SubmitBy[this]; } set { Fields.F13SubmitBy[this] = value; } }
		public partial class RowFields { public StringField F13SubmitBy; }

        [DisplayName("F14 Submit Date")]
        public DateTime? F14SubmitDate { get { return Fields.F14SubmitDate[this]; } set { Fields.F14SubmitDate[this] = value; } }
		public partial class RowFields { public DateTimeField F14SubmitDate; }

        [DisplayName("F14 Submit By")]
        public String F14SubmitBy { get { return Fields.F14SubmitBy[this]; } set { Fields.F14SubmitBy[this] = value; } }
		public partial class RowFields { public StringField F14SubmitBy; }

        [DisplayName("F15 Submit Date")]
        public DateTime? F15SubmitDate { get { return Fields.F15SubmitDate[this]; } set { Fields.F15SubmitDate[this] = value; } }
		public partial class RowFields { public DateTimeField F15SubmitDate; }

        [DisplayName("F15 Submit By")]
        public String F15SubmitBy { get { return Fields.F15SubmitBy[this]; } set { Fields.F15SubmitBy[this] = value; } }
		public partial class RowFields { public StringField F15SubmitBy; }

        [DisplayName("F16 Submit Date")]
        public DateTime? F16SubmitDate { get { return Fields.F16SubmitDate[this]; } set { Fields.F16SubmitDate[this] = value; } }
		public partial class RowFields { public DateTimeField F16SubmitDate; }

        [DisplayName("F16 Submit By")]
        public String F16SubmitBy { get { return Fields.F16SubmitBy[this]; } set { Fields.F16SubmitBy[this] = value; } }
		public partial class RowFields { public StringField F16SubmitBy; }

        [DisplayName("F17 Submit Date")]
        public DateTime? F17SubmitDate { get { return Fields.F17SubmitDate[this]; } set { Fields.F17SubmitDate[this] = value; } }
		public partial class RowFields { public DateTimeField F17SubmitDate; }

        [DisplayName("F17 Submit By")]
        public String F17SubmitBy { get { return Fields.F17SubmitBy[this]; } set { Fields.F17SubmitBy[this] = value; } }
		public partial class RowFields { public StringField F17SubmitBy; }

        [DisplayName("Procurement Method"), Size(50), ForeignKey("[dbo].[ProcurementMethod]", "ProcurementMethodId"), LeftJoin("jProcurementMethod"), TextualField("ProcurementMethodName")]
        public String ProcurementMethodId { get { return Fields.ProcurementMethodId[this]; } set { Fields.ProcurementMethodId[this] = value; } }
		public partial class RowFields { public StringField ProcurementMethodId; }

        #region Foreign Fields


        [DisplayName("Procurement Type Name"), Expression("jProcurementType.[Name]"), ReadOnly(true)]
        public String ProcurementTypeName { get { return Fields.ProcurementTypeName[this]; } set { Fields.ProcurementTypeName[this] = value; } }
		public partial class RowFields { public StringField ProcurementTypeName; }

        [DisplayName("Procurement Type Description"), Expression("jProcurementType.[Description]"), ReadOnly(true)]
        public String ProcurementTypeDescription { get { return Fields.ProcurementTypeDescription[this]; } set { Fields.ProcurementTypeDescription[this] = value; } }
		public partial class RowFields { public StringField ProcurementTypeDescription; }



        [DisplayName("Status Name"), Expression("jStatus.[Name]"), ReadOnly(true)]
        public String StatusName { get { return Fields.StatusName[this]; } set { Fields.StatusName[this] = value; } }
		public partial class RowFields { public StringField StatusName; }

        [DisplayName("Status Description"), Expression("jStatus.[Description]"), ReadOnly(true)]
        public String StatusDescription { get { return Fields.StatusDescription[this]; } set { Fields.StatusDescription[this] = value; } }
		public partial class RowFields { public StringField StatusDescription; }



        [DisplayName("Office Address Name"), Expression("jOfficeAddress.[Name]"), ReadOnly(true)]
        public String OfficeAddressName { get { return Fields.OfficeAddressName[this]; } set { Fields.OfficeAddressName[this] = value; } }
		public partial class RowFields { public StringField OfficeAddressName; }

        [DisplayName("Office Address Description"), Expression("jOfficeAddress.[Description]"), ReadOnly(true)]
        public String OfficeAddressDescription { get { return Fields.OfficeAddressDescription[this]; } set { Fields.OfficeAddressDescription[this] = value; } }
		public partial class RowFields { public StringField OfficeAddressDescription; }

        [DisplayName("Office Address Address Type Id"), Expression("jOfficeAddress.[AddressTypeId]"), ReadOnly(true)]
        public Int32? OfficeAddressAddressTypeId { get { return Fields.OfficeAddressAddressTypeId[this]; } set { Fields.OfficeAddressAddressTypeId[this] = value; } }
		public partial class RowFields { public Int32Field OfficeAddressAddressTypeId; }



        [DisplayName("Proc Value Range Name"), Expression("jProcValueRange.[Name]"), ReadOnly(true)]
        public String ProcValueRangeName { get { return Fields.ProcValueRangeName[this]; } set { Fields.ProcValueRangeName[this] = value; } }
		public partial class RowFields { public StringField ProcValueRangeName; }

        [DisplayName("Proc Value Range Description"), Expression("jProcValueRange.[Description]"), ReadOnly(true)]
        public String ProcValueRangeDescription { get { return Fields.ProcValueRangeDescription[this]; } set { Fields.ProcValueRangeDescription[this] = value; } }
		public partial class RowFields { public StringField ProcValueRangeDescription; }



        [DisplayName("Committee Type Name"), Expression("jCommitteeType.[Name]"), ReadOnly(true)]
        public String CommitteeTypeName { get { return Fields.CommitteeTypeName[this]; } set { Fields.CommitteeTypeName[this] = value; } }
		public partial class RowFields { public StringField CommitteeTypeName; }

        [DisplayName("Committee Type Description"), Expression("jCommitteeType.[Description]"), ReadOnly(true)]
        public String CommitteeTypeDescription { get { return Fields.CommitteeTypeDescription[this]; } set { Fields.CommitteeTypeDescription[this] = value; } }
		public partial class RowFields { public StringField CommitteeTypeDescription; }



        [DisplayName("Destination Name"), Expression("jDestination.[Name]"), ReadOnly(true)]
        public String DestinationName { get { return Fields.DestinationName[this]; } set { Fields.DestinationName[this] = value; } }
		public partial class RowFields { public StringField DestinationName; }

        [DisplayName("Destination Description"), Expression("jDestination.[Description]"), ReadOnly(true)]
        public String DestinationDescription { get { return Fields.DestinationDescription[this]; } set { Fields.DestinationDescription[this] = value; } }
		public partial class RowFields { public StringField DestinationDescription; }

        [DisplayName("Destination Address Type Id"), Expression("jDestination.[AddressTypeId]"), ReadOnly(true)]
        public Int32? DestinationAddressTypeId { get { return Fields.DestinationAddressTypeId[this]; } set { Fields.DestinationAddressTypeId[this] = value; } }
		public partial class RowFields { public Int32Field DestinationAddressTypeId; }



        [DisplayName("Contract Type Name"), Expression("jContractType.[Name]"), ReadOnly(true)]
        public String ContractTypeName { get { return Fields.ContractTypeName[this]; } set { Fields.ContractTypeName[this] = value; } }
		public partial class RowFields { public StringField ContractTypeName; }

        [DisplayName("Contract Type Description"), Expression("jContractType.[Description]"), ReadOnly(true)]
        public String ContractTypeDescription { get { return Fields.ContractTypeDescription[this]; } set { Fields.ContractTypeDescription[this] = value; } }
		public partial class RowFields { public StringField ContractTypeDescription; }



        [DisplayName("Currency Name"), Expression("jCurrency.[Name]"), ReadOnly(true)]
        public String CurrencyName { get { return Fields.CurrencyName[this]; } set { Fields.CurrencyName[this] = value; } }
		public partial class RowFields { public StringField CurrencyName; }

        [DisplayName("Currency Description"), Expression("jCurrency.[Description]"), ReadOnly(true)]
        public String CurrencyDescription { get { return Fields.CurrencyDescription[this]; } set { Fields.CurrencyDescription[this] = value; } }
		public partial class RowFields { public StringField CurrencyDescription; }



        [DisplayName("Doc Submit Method Name"), Expression("jDocSubmitMethod.[Name]"), ReadOnly(true)]
        public String DocSubmitMethodName { get { return Fields.DocSubmitMethodName[this]; } set { Fields.DocSubmitMethodName[this] = value; } }
		public partial class RowFields { public StringField DocSubmitMethodName; }

        [DisplayName("Doc Submit Method Description"), Expression("jDocSubmitMethod.[Description]"), ReadOnly(true)]
        public String DocSubmitMethodDescription { get { return Fields.DocSubmitMethodDescription[this]; } set { Fields.DocSubmitMethodDescription[this] = value; } }
		public partial class RowFields { public StringField DocSubmitMethodDescription; }



        [DisplayName("Order Type Name"), Expression("jOrderType.[Name]"), ReadOnly(true)]
        public String OrderTypeName { get { return Fields.OrderTypeName[this]; } set { Fields.OrderTypeName[this] = value; } }
		public partial class RowFields { public StringField OrderTypeName; }

        [DisplayName("Order Type Description"), Expression("jOrderType.[Description]"), ReadOnly(true)]
        public String OrderTypeDescription { get { return Fields.OrderTypeDescription[this]; } set { Fields.OrderTypeDescription[this] = value; } }
		public partial class RowFields { public StringField OrderTypeDescription; }



        [DisplayName("Procurement Method Name"), Expression("jProcurementMethod.[Name]"), ReadOnly(true)]
        public String ProcurementMethodName { get { return Fields.ProcurementMethodName[this]; } set { Fields.ProcurementMethodName[this] = value; } }
		public partial class RowFields { public StringField ProcurementMethodName; }

        [DisplayName("Procurement Method Description"), Expression("jProcurementMethod.[Description]"), ReadOnly(true)]
        public String ProcurementMethodDescription { get { return Fields.ProcurementMethodDescription[this]; } set { Fields.ProcurementMethodDescription[this] = value; } }
		public partial class RowFields { public StringField ProcurementMethodDescription; }


        #endregion Foreign Fields


        IIdField IIdRow.IdField { get { return Fields.ProcurementId; } }

        StringField INameRow.NameField { get { return Fields.ProcurementTypeId; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public F10_NegotiationRow() : base(Fields) { }

		public partial class RowFields : RowFieldsBase { }
    }
}
