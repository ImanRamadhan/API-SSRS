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

    [ConnectionKey("Default"), TableName("[dbo].[ProcPR]")]
    [DisplayName("F20 Proc Pr"), InstanceName("F20 Proc Pr"), TwoLevelCached]
    [ReadPermission("Procurement:F20_ProcPr:Read")]
    [InsertPermission("Procurement:F20_ProcPr:Insert")]
    [UpdatePermission("Procurement:F20_ProcPr:Update")]
    [DeletePermission("Procurement:F20_ProcPr:Delete")]
    public sealed class F20_ProcPrRow : Row, IIdRow, INameRow
    {

        [DisplayName("Proc Pr Id"), Column("ProcPRId"), Identity]
        public Int64? ProcPrId { get { return Fields.ProcPrId[this]; } set { Fields.ProcPrId[this] = value; } }
		public partial class RowFields { public Int64Field ProcPrId; }

        [DisplayName("Procurement"), ForeignKey("[dbo].[Procurement]", "ProcurementId"), LeftJoin("jProcurement"), TextualField("ProcurementProcurementTypeId")]
        public Int64? ProcurementId { get { return Fields.ProcurementId[this]; } set { Fields.ProcurementId[this] = value; } }
		public partial class RowFields { public Int64Field ProcurementId; }

        [DisplayName("Pr No"), Column("PRNo"), Size(10), ForeignKey("[dbo].[PurchaseRequisition]", "PRNo"), LeftJoin("jPrNo"), QuickSearch, TextualField("PrNoCostCenter")]
        public String PrNo { get { return Fields.PrNo[this]; } set { Fields.PrNo[this] = value; } }
		public partial class RowFields { public StringField PrNo; }

        [DisplayName("Insert Date")]
        public DateTime? InsertDate { get { return Fields.InsertDate[this]; } set { Fields.InsertDate[this] = value; } }
		public partial class RowFields { public DateTimeField InsertDate; }

        [DisplayName("Insert By")]
        public String InsertBy { get { return Fields.InsertBy[this]; } set { Fields.InsertBy[this] = value; } }
		public partial class RowFields { public StringField InsertBy; }

        #region Foreign Fields


        [DisplayName("Procurement Procurement Type Id"), Expression("jProcurement.[ProcurementTypeId]"), ReadOnly(true)]
        public String ProcurementProcurementTypeId { get { return Fields.ProcurementProcurementTypeId[this]; } set { Fields.ProcurementProcurementTypeId[this] = value; } }
		public partial class RowFields { public StringField ProcurementProcurementTypeId; }

        [DisplayName("Procurement Status"), Expression("jProcurement.[Status]"), ReadOnly(true)]
        public String ProcurementStatus { get { return Fields.ProcurementStatus[this]; } set { Fields.ProcurementStatus[this] = value; } }
		public partial class RowFields { public StringField ProcurementStatus; }

        [DisplayName("Procurement Collective Number"), Expression("jProcurement.[CollectiveNumber]"), ReadOnly(true)]
        public String ProcurementCollectiveNumber { get { return Fields.ProcurementCollectiveNumber[this]; } set { Fields.ProcurementCollectiveNumber[this] = value; } }
		public partial class RowFields { public StringField ProcurementCollectiveNumber; }

        [DisplayName("Procurement Title"), Expression("jProcurement.[Title]"), ReadOnly(true)]
        public String ProcurementTitle { get { return Fields.ProcurementTitle[this]; } set { Fields.ProcurementTitle[this] = value; } }
		public partial class RowFields { public StringField ProcurementTitle; }

        [DisplayName("Procurement Classification"), Expression("jProcurement.[Classification]"), ReadOnly(true)]
        public String ProcurementClassification { get { return Fields.ProcurementClassification[this]; } set { Fields.ProcurementClassification[this] = value; } }
		public partial class RowFields { public StringField ProcurementClassification; }

        [DisplayName("Procurement Qualification"), Expression("jProcurement.[Qualification]"), ReadOnly(true)]
        public String ProcurementQualification { get { return Fields.ProcurementQualification[this]; } set { Fields.ProcurementQualification[this] = value; } }
		public partial class RowFields { public StringField ProcurementQualification; }

        [DisplayName("Procurement Requested By"), Expression("jProcurement.[RequestedBy]"), ReadOnly(true)]
        public String ProcurementRequestedBy { get { return Fields.ProcurementRequestedBy[this]; } set { Fields.ProcurementRequestedBy[this] = value; } }
		public partial class RowFields { public StringField ProcurementRequestedBy; }

        [DisplayName("Procurement Requestor Position"), Expression("jProcurement.[RequestorPosition]"), ReadOnly(true)]
        public String ProcurementRequestorPosition { get { return Fields.ProcurementRequestorPosition[this]; } set { Fields.ProcurementRequestorPosition[this] = value; } }
		public partial class RowFields { public StringField ProcurementRequestorPosition; }

        [DisplayName("Procurement Approved By"), Expression("jProcurement.[ApprovedBy]"), ReadOnly(true)]
        public String ProcurementApprovedBy { get { return Fields.ProcurementApprovedBy[this]; } set { Fields.ProcurementApprovedBy[this] = value; } }
		public partial class RowFields { public StringField ProcurementApprovedBy; }

        [DisplayName("Procurement Approver Position"), Expression("jProcurement.[ApproverPosition]"), ReadOnly(true)]
        public String ProcurementApproverPosition { get { return Fields.ProcurementApproverPosition[this]; } set { Fields.ProcurementApproverPosition[this] = value; } }
		public partial class RowFields { public StringField ProcurementApproverPosition; }

        [DisplayName("Procurement Sap Bidder List Created By"), Expression("jProcurement.[SAPBidderListCreatedBy]"), ReadOnly(true)]
        public String ProcurementSapBidderListCreatedBy { get { return Fields.ProcurementSapBidderListCreatedBy[this]; } set { Fields.ProcurementSapBidderListCreatedBy[this] = value; } }
		public partial class RowFields { public StringField ProcurementSapBidderListCreatedBy; }

        [DisplayName("Procurement Sap Bidder List Created Date"), Expression("jProcurement.[SAPBidderListCreatedDate]"), ReadOnly(true)]
        public DateTime? ProcurementSapBidderListCreatedDate { get { return Fields.ProcurementSapBidderListCreatedDate[this]; } set { Fields.ProcurementSapBidderListCreatedDate[this] = value; } }
		public partial class RowFields { public DateTimeField ProcurementSapBidderListCreatedDate; }

        [DisplayName("Procurement Created By"), Expression("jProcurement.[CreatedBy]"), ReadOnly(true)]
        public String ProcurementCreatedBy { get { return Fields.ProcurementCreatedBy[this]; } set { Fields.ProcurementCreatedBy[this] = value; } }
		public partial class RowFields { public StringField ProcurementCreatedBy; }

        [DisplayName("Procurement Created Date"), Expression("jProcurement.[CreatedDate]"), ReadOnly(true)]
        public DateTime? ProcurementCreatedDate { get { return Fields.ProcurementCreatedDate[this]; } set { Fields.ProcurementCreatedDate[this] = value; } }
		public partial class RowFields { public DateTimeField ProcurementCreatedDate; }

        [DisplayName("Procurement Guarantee Percentage"), Expression("jProcurement.[GuaranteePercentage]"), ReadOnly(true)]
        public Decimal? ProcurementGuaranteePercentage { get { return Fields.ProcurementGuaranteePercentage[this]; } set { Fields.ProcurementGuaranteePercentage[this] = value; } }
		public partial class RowFields { public DecimalField ProcurementGuaranteePercentage; }

        [DisplayName("Procurement Office Address"), Expression("jProcurement.[OfficeAddress]"), ReadOnly(true)]
        public Int32? ProcurementOfficeAddress { get { return Fields.ProcurementOfficeAddress[this]; } set { Fields.ProcurementOfficeAddress[this] = value; } }
		public partial class RowFields { public Int32Field ProcurementOfficeAddress; }

        [DisplayName("Procurement Proc Value Range Id"), Expression("jProcurement.[ProcValueRangeId]"), ReadOnly(true)]
        public Int32? ProcurementProcValueRangeId { get { return Fields.ProcurementProcValueRangeId[this]; } set { Fields.ProcurementProcValueRangeId[this] = value; } }
		public partial class RowFields { public Int32Field ProcurementProcValueRangeId; }

        [DisplayName("Procurement Committee Type Id"), Expression("jProcurement.[CommitteeTypeId]"), ReadOnly(true)]
        public Int32? ProcurementCommitteeTypeId { get { return Fields.ProcurementCommitteeTypeId[this]; } set { Fields.ProcurementCommitteeTypeId[this] = value; } }
		public partial class RowFields { public Int32Field ProcurementCommitteeTypeId; }

        [DisplayName("Procurement Performance Guarantee Required"), Expression("jProcurement.[PerformanceGuaranteeRequired]"), ReadOnly(true)]
        public Boolean? ProcurementPerformanceGuaranteeRequired { get { return Fields.ProcurementPerformanceGuaranteeRequired[this]; } set { Fields.ProcurementPerformanceGuaranteeRequired[this] = value; } }
		public partial class RowFields { public BooleanField ProcurementPerformanceGuaranteeRequired; }

        [DisplayName("Procurement Tender Period"), Expression("jProcurement.[TenderPeriod]"), ReadOnly(true)]
        public Int32? ProcurementTenderPeriod { get { return Fields.ProcurementTenderPeriod[this]; } set { Fields.ProcurementTenderPeriod[this] = value; } }
		public partial class RowFields { public Int32Field ProcurementTenderPeriod; }

        [DisplayName("Procurement Delivery Time"), Expression("jProcurement.[DeliveryTime]"), ReadOnly(true)]
        public Int32? ProcurementDeliveryTime { get { return Fields.ProcurementDeliveryTime[this]; } set { Fields.ProcurementDeliveryTime[this] = value; } }
		public partial class RowFields { public Int32Field ProcurementDeliveryTime; }

        [DisplayName("Procurement Destination Id"), Expression("jProcurement.[DestinationId]"), ReadOnly(true)]
        public Int32? ProcurementDestinationId { get { return Fields.ProcurementDestinationId[this]; } set { Fields.ProcurementDestinationId[this] = value; } }
		public partial class RowFields { public Int32Field ProcurementDestinationId; }

        [DisplayName("Procurement Contract Type Id"), Expression("jProcurement.[ContractTypeId]"), ReadOnly(true)]
        public Int32? ProcurementContractTypeId { get { return Fields.ProcurementContractTypeId[this]; } set { Fields.ProcurementContractTypeId[this] = value; } }
		public partial class RowFields { public Int32Field ProcurementContractTypeId; }

        [DisplayName("Procurement Currency Id"), Expression("jProcurement.[CurrencyId]"), ReadOnly(true)]
        public String ProcurementCurrencyId { get { return Fields.ProcurementCurrencyId[this]; } set { Fields.ProcurementCurrencyId[this] = value; } }
		public partial class RowFields { public StringField ProcurementCurrencyId; }

        [DisplayName("Procurement Doc Submit Method Id"), Expression("jProcurement.[DocSubmitMethodId]"), ReadOnly(true)]
        public Int32? ProcurementDocSubmitMethodId { get { return Fields.ProcurementDocSubmitMethodId[this]; } set { Fields.ProcurementDocSubmitMethodId[this] = value; } }
		public partial class RowFields { public Int32Field ProcurementDocSubmitMethodId; }

        [DisplayName("Procurement Aanwijzing Exists"), Expression("jProcurement.[AanwijzingExists]"), ReadOnly(true)]
        public Boolean? ProcurementAanwijzingExists { get { return Fields.ProcurementAanwijzingExists[this]; } set { Fields.ProcurementAanwijzingExists[this] = value; } }
		public partial class RowFields { public BooleanField ProcurementAanwijzingExists; }

        [DisplayName("Procurement Aanwijzing Date"), Expression("jProcurement.[AanwijzingDate]"), ReadOnly(true)]
        public DateTime? ProcurementAanwijzingDate { get { return Fields.ProcurementAanwijzingDate[this]; } set { Fields.ProcurementAanwijzingDate[this] = value; } }
		public partial class RowFields { public DateTimeField ProcurementAanwijzingDate; }

        [DisplayName("Procurement Aanwijzing Closing Date"), Expression("jProcurement.[AanwijzingClosingDate]"), ReadOnly(true)]
        public DateTime? ProcurementAanwijzingClosingDate { get { return Fields.ProcurementAanwijzingClosingDate[this]; } set { Fields.ProcurementAanwijzingClosingDate[this] = value; } }
		public partial class RowFields { public DateTimeField ProcurementAanwijzingClosingDate; }

        [DisplayName("Procurement Aanwijzing Location"), Expression("jProcurement.[AanwijzingLocation]"), ReadOnly(true)]
        public String ProcurementAanwijzingLocation { get { return Fields.ProcurementAanwijzingLocation[this]; } set { Fields.ProcurementAanwijzingLocation[this] = value; } }
		public partial class RowFields { public StringField ProcurementAanwijzingLocation; }

        [DisplayName("Procurement Aanwijzing Closing Location"), Expression("jProcurement.[AanwijzingClosingLocation]"), ReadOnly(true)]
        public String ProcurementAanwijzingClosingLocation { get { return Fields.ProcurementAanwijzingClosingLocation[this]; } set { Fields.ProcurementAanwijzingClosingLocation[this] = value; } }
		public partial class RowFields { public StringField ProcurementAanwijzingClosingLocation; }

        [DisplayName("Procurement Aanwijzing Secretary"), Expression("jProcurement.[AanwijzingSecretary]"), ReadOnly(true)]
        public String ProcurementAanwijzingSecretary { get { return Fields.ProcurementAanwijzingSecretary[this]; } set { Fields.ProcurementAanwijzingSecretary[this] = value; } }
		public partial class RowFields { public StringField ProcurementAanwijzingSecretary; }

        [DisplayName("Procurement Aanwijzing Summary"), Expression("jProcurement.[AanwijzingSummary]"), ReadOnly(true)]
        public String ProcurementAanwijzingSummary { get { return Fields.ProcurementAanwijzingSummary[this]; } set { Fields.ProcurementAanwijzingSummary[this] = value; } }
		public partial class RowFields { public StringField ProcurementAanwijzingSummary; }

        [DisplayName("Procurement Field Survey Exists"), Expression("jProcurement.[FieldSurveyExists]"), ReadOnly(true)]
        public Boolean? ProcurementFieldSurveyExists { get { return Fields.ProcurementFieldSurveyExists[this]; } set { Fields.ProcurementFieldSurveyExists[this] = value; } }
		public partial class RowFields { public BooleanField ProcurementFieldSurveyExists; }

        [DisplayName("Procurement Field Survey Address"), Expression("jProcurement.[FieldSurveyAddress]"), ReadOnly(true)]
        public String ProcurementFieldSurveyAddress { get { return Fields.ProcurementFieldSurveyAddress[this]; } set { Fields.ProcurementFieldSurveyAddress[this] = value; } }
		public partial class RowFields { public StringField ProcurementFieldSurveyAddress; }

        [DisplayName("Procurement Itb Document File"), Expression("jProcurement.[ITBDocumentFile]"), ReadOnly(true)]
        public String ProcurementItbDocumentFile { get { return Fields.ProcurementItbDocumentFile[this]; } set { Fields.ProcurementItbDocumentFile[this] = value; } }
		public partial class RowFields { public StringField ProcurementItbDocumentFile; }

        [DisplayName("Procurement Itb Document Name"), Expression("jProcurement.[ITBDocumentName]"), ReadOnly(true)]
        public String ProcurementItbDocumentName { get { return Fields.ProcurementItbDocumentName[this]; } set { Fields.ProcurementItbDocumentName[this] = value; } }
		public partial class RowFields { public StringField ProcurementItbDocumentName; }

        [DisplayName("Procurement Rks Document File"), Expression("jProcurement.[RKSDocumentFile]"), ReadOnly(true)]
        public String ProcurementRksDocumentFile { get { return Fields.ProcurementRksDocumentFile[this]; } set { Fields.ProcurementRksDocumentFile[this] = value; } }
		public partial class RowFields { public StringField ProcurementRksDocumentFile; }

        [DisplayName("Procurement Rks Document Name"), Expression("jProcurement.[RKSDocumentName]"), ReadOnly(true)]
        public String ProcurementRksDocumentName { get { return Fields.ProcurementRksDocumentName[this]; } set { Fields.ProcurementRksDocumentName[this] = value; } }
		public partial class RowFields { public StringField ProcurementRksDocumentName; }

        [DisplayName("Procurement Tender Doc Submit Open Date"), Expression("jProcurement.[TenderDocSubmitOpenDate]"), ReadOnly(true)]
        public DateTime? ProcurementTenderDocSubmitOpenDate { get { return Fields.ProcurementTenderDocSubmitOpenDate[this]; } set { Fields.ProcurementTenderDocSubmitOpenDate[this] = value; } }
		public partial class RowFields { public DateTimeField ProcurementTenderDocSubmitOpenDate; }

        [DisplayName("Procurement Tender Doc Submit Close Date"), Expression("jProcurement.[TenderDocSubmitCloseDate]"), ReadOnly(true)]
        public DateTime? ProcurementTenderDocSubmitCloseDate { get { return Fields.ProcurementTenderDocSubmitCloseDate[this]; } set { Fields.ProcurementTenderDocSubmitCloseDate[this] = value; } }
		public partial class RowFields { public DateTimeField ProcurementTenderDocSubmitCloseDate; }

        [DisplayName("Procurement Order Type Id"), Expression("jProcurement.[OrderTypeId]"), ReadOnly(true)]
        public String ProcurementOrderTypeId { get { return Fields.ProcurementOrderTypeId[this]; } set { Fields.ProcurementOrderTypeId[this] = value; } }
		public partial class RowFields { public StringField ProcurementOrderTypeId; }

        [DisplayName("Procurement Purch Doc Num"), Expression("jProcurement.[PurchDocNum]"), ReadOnly(true)]
        public String ProcurementPurchDocNum { get { return Fields.ProcurementPurchDocNum[this]; } set { Fields.ProcurementPurchDocNum[this] = value; } }
		public partial class RowFields { public StringField ProcurementPurchDocNum; }

        [DisplayName("Procurement Rfq Date"), Expression("jProcurement.[RFQDate]"), ReadOnly(true)]
        public DateTime? ProcurementRfqDate { get { return Fields.ProcurementRfqDate[this]; } set { Fields.ProcurementRfqDate[this] = value; } }
		public partial class RowFields { public DateTimeField ProcurementRfqDate; }

        [DisplayName("Procurement Quotation Deadline"), Expression("jProcurement.[QuotationDeadline]"), ReadOnly(true)]
        public DateTime? ProcurementQuotationDeadline { get { return Fields.ProcurementQuotationDeadline[this]; } set { Fields.ProcurementQuotationDeadline[this] = value; } }
		public partial class RowFields { public DateTimeField ProcurementQuotationDeadline; }

        [DisplayName("Procurement Purch Group"), Expression("jProcurement.[PurchGroup]"), ReadOnly(true)]
        public String ProcurementPurchGroup { get { return Fields.ProcurementPurchGroup[this]; } set { Fields.ProcurementPurchGroup[this] = value; } }
		public partial class RowFields { public StringField ProcurementPurchGroup; }

        [DisplayName("Procurement Pr No"), Expression("jProcurement.[PRNo]"), ReadOnly(true)]
        public String ProcurementPrNo { get { return Fields.ProcurementPrNo[this]; } set { Fields.ProcurementPrNo[this] = value; } }
		public partial class RowFields { public StringField ProcurementPrNo; }

        [DisplayName("Procurement Auth Person Name"), Expression("jProcurement.[AuthPersonName]"), ReadOnly(true)]
        public String ProcurementAuthPersonName { get { return Fields.ProcurementAuthPersonName[this]; } set { Fields.ProcurementAuthPersonName[this] = value; } }
		public partial class RowFields { public StringField ProcurementAuthPersonName; }

        [DisplayName("Procurement Auth Position"), Expression("jProcurement.[AuthPosition]"), ReadOnly(true)]
        public String ProcurementAuthPosition { get { return Fields.ProcurementAuthPosition[this]; } set { Fields.ProcurementAuthPosition[this] = value; } }
		public partial class RowFields { public StringField ProcurementAuthPosition; }

        [DisplayName("Procurement Header Text"), Expression("jProcurement.[HeaderText]"), ReadOnly(true)]
        public String ProcurementHeaderText { get { return Fields.ProcurementHeaderText[this]; } set { Fields.ProcurementHeaderText[this] = value; } }
		public partial class RowFields { public StringField ProcurementHeaderText; }

        [DisplayName("Procurement Header Note"), Expression("jProcurement.[HeaderNote]"), ReadOnly(true)]
        public String ProcurementHeaderNote { get { return Fields.ProcurementHeaderNote[this]; } set { Fields.ProcurementHeaderNote[this] = value; } }
		public partial class RowFields { public StringField ProcurementHeaderNote; }

        [DisplayName("Procurement Work Description"), Expression("jProcurement.[WorkDescription]"), ReadOnly(true)]
        public String ProcurementWorkDescription { get { return Fields.ProcurementWorkDescription[this]; } set { Fields.ProcurementWorkDescription[this] = value; } }
		public partial class RowFields { public StringField ProcurementWorkDescription; }

        [DisplayName("Procurement Bank Key"), Expression("jProcurement.[BankKey]"), ReadOnly(true)]
        public String ProcurementBankKey { get { return Fields.ProcurementBankKey[this]; } set { Fields.ProcurementBankKey[this] = value; } }
		public partial class RowFields { public StringField ProcurementBankKey; }

        [DisplayName("Procurement Po Cover"), Expression("jProcurement.[POCover]"), ReadOnly(true)]
        public String ProcurementPoCover { get { return Fields.ProcurementPoCover[this]; } set { Fields.ProcurementPoCover[this] = value; } }
		public partial class RowFields { public StringField ProcurementPoCover; }

        [DisplayName("Procurement Delivery Address"), Expression("jProcurement.[DeliveryAddress]"), ReadOnly(true)]
        public String ProcurementDeliveryAddress { get { return Fields.ProcurementDeliveryAddress[this]; } set { Fields.ProcurementDeliveryAddress[this] = value; } }
		public partial class RowFields { public StringField ProcurementDeliveryAddress; }

        [DisplayName("Procurement To P Targ Val"), Expression("jProcurement.[ToPTargVal]"), ReadOnly(true)]
        public String ProcurementToPTargVal { get { return Fields.ProcurementToPTargVal[this]; } set { Fields.ProcurementToPTargVal[this] = value; } }
		public partial class RowFields { public StringField ProcurementToPTargVal; }

        [DisplayName("Procurement Your Reference"), Expression("jProcurement.[YourReference]"), ReadOnly(true)]
        public String ProcurementYourReference { get { return Fields.ProcurementYourReference[this]; } set { Fields.ProcurementYourReference[this] = value; } }
		public partial class RowFields { public StringField ProcurementYourReference; }

        [DisplayName("Procurement Our Reference"), Expression("jProcurement.[OurReference]"), ReadOnly(true)]
        public String ProcurementOurReference { get { return Fields.ProcurementOurReference[this]; } set { Fields.ProcurementOurReference[this] = value; } }
		public partial class RowFields { public StringField ProcurementOurReference; }

        [DisplayName("Procurement Sales Person"), Expression("jProcurement.[SalesPerson]"), ReadOnly(true)]
        public String ProcurementSalesPerson { get { return Fields.ProcurementSalesPerson[this]; } set { Fields.ProcurementSalesPerson[this] = value; } }
		public partial class RowFields { public StringField ProcurementSalesPerson; }

        [DisplayName("Procurement Telephone"), Expression("jProcurement.[Telephone]"), ReadOnly(true)]
        public String ProcurementTelephone { get { return Fields.ProcurementTelephone[this]; } set { Fields.ProcurementTelephone[this] = value; } }
		public partial class RowFields { public StringField ProcurementTelephone; }

        [DisplayName("Procurement Validity Start"), Expression("jProcurement.[ValidityStart]"), ReadOnly(true)]
        public DateTime? ProcurementValidityStart { get { return Fields.ProcurementValidityStart[this]; } set { Fields.ProcurementValidityStart[this] = value; } }
		public partial class RowFields { public DateTimeField ProcurementValidityStart; }

        [DisplayName("Procurement Validity End"), Expression("jProcurement.[ValidityEnd]"), ReadOnly(true)]
        public DateTime? ProcurementValidityEnd { get { return Fields.ProcurementValidityEnd[this]; } set { Fields.ProcurementValidityEnd[this] = value; } }
		public partial class RowFields { public DateTimeField ProcurementValidityEnd; }

        [DisplayName("Procurement Item Interval"), Expression("jProcurement.[ItemInterval]"), ReadOnly(true)]
        public Decimal? ProcurementItemInterval { get { return Fields.ProcurementItemInterval[this]; } set { Fields.ProcurementItemInterval[this] = value; } }
		public partial class RowFields { public DecimalField ProcurementItemInterval; }

        [DisplayName("Procurement Sub Item Interval"), Expression("jProcurement.[SubItemInterval]"), ReadOnly(true)]
        public Decimal? ProcurementSubItemInterval { get { return Fields.ProcurementSubItemInterval[this]; } set { Fields.ProcurementSubItemInterval[this] = value; } }
		public partial class RowFields { public DecimalField ProcurementSubItemInterval; }

        [DisplayName("Procurement Warranty"), Expression("jProcurement.[Warranty]"), ReadOnly(true)]
        public DateTime? ProcurementWarranty { get { return Fields.ProcurementWarranty[this]; } set { Fields.ProcurementWarranty[this] = value; } }
		public partial class RowFields { public DateTimeField ProcurementWarranty; }

        [DisplayName("Procurement Language"), Expression("jProcurement.[Language]"), ReadOnly(true)]
        public String ProcurementLanguage { get { return Fields.ProcurementLanguage[this]; } set { Fields.ProcurementLanguage[this] = value; } }
		public partial class RowFields { public StringField ProcurementLanguage; }

        [DisplayName("Procurement Evaluation Closing Price Date"), Expression("jProcurement.[EvaluationClosingPriceDate]"), ReadOnly(true)]
        public DateTime? ProcurementEvaluationClosingPriceDate { get { return Fields.ProcurementEvaluationClosingPriceDate[this]; } set { Fields.ProcurementEvaluationClosingPriceDate[this] = value; } }
		public partial class RowFields { public DateTimeField ProcurementEvaluationClosingPriceDate; }

        [DisplayName("Procurement Review Oe Required"), Expression("jProcurement.[ReviewOERequired]"), ReadOnly(true)]
        public Boolean? ProcurementReviewOeRequired { get { return Fields.ProcurementReviewOeRequired[this]; } set { Fields.ProcurementReviewOeRequired[this] = value; } }
		public partial class RowFields { public BooleanField ProcurementReviewOeRequired; }

        [DisplayName("Procurement Proc Agreement"), Expression("jProcurement.[ProcAgreement]"), ReadOnly(true)]
        public Boolean? ProcurementProcAgreement { get { return Fields.ProcurementProcAgreement[this]; } set { Fields.ProcurementProcAgreement[this] = value; } }
		public partial class RowFields { public BooleanField ProcurementProcAgreement; }

        [DisplayName("Procurement Proc Agreement Date"), Expression("jProcurement.[ProcAgreementDate]"), ReadOnly(true)]
        public DateTime? ProcurementProcAgreementDate { get { return Fields.ProcurementProcAgreementDate[this]; } set { Fields.ProcurementProcAgreementDate[this] = value; } }
		public partial class RowFields { public DateTimeField ProcurementProcAgreementDate; }

        [DisplayName("Procurement Proc As Required"), Expression("jProcurement.[ProcASRequired]"), ReadOnly(true)]
        public Boolean? ProcurementProcAsRequired { get { return Fields.ProcurementProcAsRequired[this]; } set { Fields.ProcurementProcAsRequired[this] = value; } }
		public partial class RowFields { public BooleanField ProcurementProcAsRequired; }

        [DisplayName("Procurement Proc As Approved"), Expression("jProcurement.[ProcASApproved]"), ReadOnly(true)]
        public Boolean? ProcurementProcAsApproved { get { return Fields.ProcurementProcAsApproved[this]; } set { Fields.ProcurementProcAsApproved[this] = value; } }
		public partial class RowFields { public BooleanField ProcurementProcAsApproved; }

        [DisplayName("Procurement Proc As Approved Date"), Expression("jProcurement.[ProcASApprovedDate]"), ReadOnly(true)]
        public DateTime? ProcurementProcAsApprovedDate { get { return Fields.ProcurementProcAsApprovedDate[this]; } set { Fields.ProcurementProcAsApprovedDate[this] = value; } }
		public partial class RowFields { public DateTimeField ProcurementProcAsApprovedDate; }

        [DisplayName("Procurement Proc As Desc"), Expression("jProcurement.[ProcASDesc]"), ReadOnly(true)]
        public String ProcurementProcAsDesc { get { return Fields.ProcurementProcAsDesc[this]; } set { Fields.ProcurementProcAsDesc[this] = value; } }
		public partial class RowFields { public StringField ProcurementProcAsDesc; }

        [DisplayName("Procurement Final Conclusion Desc"), Expression("jProcurement.[FinalConclusionDesc]"), ReadOnly(true)]
        public String ProcurementFinalConclusionDesc { get { return Fields.ProcurementFinalConclusionDesc[this]; } set { Fields.ProcurementFinalConclusionDesc[this] = value; } }
		public partial class RowFields { public StringField ProcurementFinalConclusionDesc; }

        [DisplayName("Procurement Winner Nomination Date"), Expression("jProcurement.[WinnerNominationDate]"), ReadOnly(true)]
        public DateTime? ProcurementWinnerNominationDate { get { return Fields.ProcurementWinnerNominationDate[this]; } set { Fields.ProcurementWinnerNominationDate[this] = value; } }
		public partial class RowFields { public DateTimeField ProcurementWinnerNominationDate; }

        [DisplayName("Procurement Objection Close Date"), Expression("jProcurement.[ObjectionCloseDate]"), ReadOnly(true)]
        public DateTime? ProcurementObjectionCloseDate { get { return Fields.ProcurementObjectionCloseDate[this]; } set { Fields.ProcurementObjectionCloseDate[this] = value; } }
		public partial class RowFields { public DateTimeField ProcurementObjectionCloseDate; }

        [DisplayName("Procurement Po Doc Name"), Expression("jProcurement.[PODocName]"), ReadOnly(true)]
        public String ProcurementPoDocName { get { return Fields.ProcurementPoDocName[this]; } set { Fields.ProcurementPoDocName[this] = value; } }
		public partial class RowFields { public StringField ProcurementPoDocName; }

        [DisplayName("Procurement Temporary Pic"), Expression("jProcurement.[TemporaryPIC]"), ReadOnly(true)]
        public String ProcurementTemporaryPic { get { return Fields.ProcurementTemporaryPic[this]; } set { Fields.ProcurementTemporaryPic[this] = value; } }
		public partial class RowFields { public StringField ProcurementTemporaryPic; }

        [DisplayName("Procurement Po Number"), Expression("jProcurement.[PONumber]"), ReadOnly(true)]
        public String ProcurementPoNumber { get { return Fields.ProcurementPoNumber[this]; } set { Fields.ProcurementPoNumber[this] = value; } }
		public partial class RowFields { public StringField ProcurementPoNumber; }

        [DisplayName("Procurement Po Doc File"), Expression("jProcurement.[PODocFile]"), ReadOnly(true)]
        public String ProcurementPoDocFile { get { return Fields.ProcurementPoDocFile[this]; } set { Fields.ProcurementPoDocFile[this] = value; } }
		public partial class RowFields { public StringField ProcurementPoDocFile; }

        [DisplayName("Procurement F1 Submit Date"), Expression("jProcurement.[F1SubmitDate]"), ReadOnly(true)]
        public DateTime? ProcurementF1SubmitDate { get { return Fields.ProcurementF1SubmitDate[this]; } set { Fields.ProcurementF1SubmitDate[this] = value; } }
		public partial class RowFields { public DateTimeField ProcurementF1SubmitDate; }

        [DisplayName("Procurement F1 Submit By"), Expression("jProcurement.[F1SubmitBy]"), ReadOnly(true)]
        public String ProcurementF1SubmitBy { get { return Fields.ProcurementF1SubmitBy[this]; } set { Fields.ProcurementF1SubmitBy[this] = value; } }
		public partial class RowFields { public StringField ProcurementF1SubmitBy; }

        [DisplayName("Procurement F2 Submit Date"), Expression("jProcurement.[F2SubmitDate]"), ReadOnly(true)]
        public DateTime? ProcurementF2SubmitDate { get { return Fields.ProcurementF2SubmitDate[this]; } set { Fields.ProcurementF2SubmitDate[this] = value; } }
		public partial class RowFields { public DateTimeField ProcurementF2SubmitDate; }

        [DisplayName("Procurement F2 Submit By"), Expression("jProcurement.[F2SubmitBy]"), ReadOnly(true)]
        public String ProcurementF2SubmitBy { get { return Fields.ProcurementF2SubmitBy[this]; } set { Fields.ProcurementF2SubmitBy[this] = value; } }
		public partial class RowFields { public StringField ProcurementF2SubmitBy; }

        [DisplayName("Procurement F3 Submit Date"), Expression("jProcurement.[F3SubmitDate]"), ReadOnly(true)]
        public DateTime? ProcurementF3SubmitDate { get { return Fields.ProcurementF3SubmitDate[this]; } set { Fields.ProcurementF3SubmitDate[this] = value; } }
		public partial class RowFields { public DateTimeField ProcurementF3SubmitDate; }

        [DisplayName("Procurement F3 Submit By"), Expression("jProcurement.[F3SubmitBy]"), ReadOnly(true)]
        public String ProcurementF3SubmitBy { get { return Fields.ProcurementF3SubmitBy[this]; } set { Fields.ProcurementF3SubmitBy[this] = value; } }
		public partial class RowFields { public StringField ProcurementF3SubmitBy; }

        [DisplayName("Procurement F3 1 Submit Date"), Expression("jProcurement.[F3_1SubmitDate]"), ReadOnly(true)]
        public DateTime? ProcurementF31SubmitDate { get { return Fields.ProcurementF31SubmitDate[this]; } set { Fields.ProcurementF31SubmitDate[this] = value; } }
		public partial class RowFields { public DateTimeField ProcurementF31SubmitDate; }

        [DisplayName("Procurement F3 1 Submit By"), Expression("jProcurement.[F3_1SubmitBy]"), ReadOnly(true)]
        public String ProcurementF31SubmitBy { get { return Fields.ProcurementF31SubmitBy[this]; } set { Fields.ProcurementF31SubmitBy[this] = value; } }
		public partial class RowFields { public StringField ProcurementF31SubmitBy; }

        [DisplayName("Procurement F4 Submit Date"), Expression("jProcurement.[F4SubmitDate]"), ReadOnly(true)]
        public DateTime? ProcurementF4SubmitDate { get { return Fields.ProcurementF4SubmitDate[this]; } set { Fields.ProcurementF4SubmitDate[this] = value; } }
		public partial class RowFields { public DateTimeField ProcurementF4SubmitDate; }

        [DisplayName("Procurement F4 Submit By"), Expression("jProcurement.[F4SubmitBy]"), ReadOnly(true)]
        public String ProcurementF4SubmitBy { get { return Fields.ProcurementF4SubmitBy[this]; } set { Fields.ProcurementF4SubmitBy[this] = value; } }
		public partial class RowFields { public StringField ProcurementF4SubmitBy; }

        [DisplayName("Procurement F5 Submit Date"), Expression("jProcurement.[F5SubmitDate]"), ReadOnly(true)]
        public DateTime? ProcurementF5SubmitDate { get { return Fields.ProcurementF5SubmitDate[this]; } set { Fields.ProcurementF5SubmitDate[this] = value; } }
		public partial class RowFields { public DateTimeField ProcurementF5SubmitDate; }

        [DisplayName("Procurement F5 Submit By"), Expression("jProcurement.[F5SubmitBy]"), ReadOnly(true)]
        public String ProcurementF5SubmitBy { get { return Fields.ProcurementF5SubmitBy[this]; } set { Fields.ProcurementF5SubmitBy[this] = value; } }
		public partial class RowFields { public StringField ProcurementF5SubmitBy; }

        [DisplayName("Procurement F6 Submit Date"), Expression("jProcurement.[F6SubmitDate]"), ReadOnly(true)]
        public DateTime? ProcurementF6SubmitDate { get { return Fields.ProcurementF6SubmitDate[this]; } set { Fields.ProcurementF6SubmitDate[this] = value; } }
		public partial class RowFields { public DateTimeField ProcurementF6SubmitDate; }

        [DisplayName("Procurement F6 Submit By"), Expression("jProcurement.[F6SubmitBy]"), ReadOnly(true)]
        public String ProcurementF6SubmitBy { get { return Fields.ProcurementF6SubmitBy[this]; } set { Fields.ProcurementF6SubmitBy[this] = value; } }
		public partial class RowFields { public StringField ProcurementF6SubmitBy; }

        [DisplayName("Procurement F7 Submit Date"), Expression("jProcurement.[F7SubmitDate]"), ReadOnly(true)]
        public DateTime? ProcurementF7SubmitDate { get { return Fields.ProcurementF7SubmitDate[this]; } set { Fields.ProcurementF7SubmitDate[this] = value; } }
		public partial class RowFields { public DateTimeField ProcurementF7SubmitDate; }

        [DisplayName("Procurement F7 Submit By"), Expression("jProcurement.[F7SubmitBy]"), ReadOnly(true)]
        public String ProcurementF7SubmitBy { get { return Fields.ProcurementF7SubmitBy[this]; } set { Fields.ProcurementF7SubmitBy[this] = value; } }
		public partial class RowFields { public StringField ProcurementF7SubmitBy; }

        [DisplayName("Procurement F8 Submit Date"), Expression("jProcurement.[F8SubmitDate]"), ReadOnly(true)]
        public DateTime? ProcurementF8SubmitDate { get { return Fields.ProcurementF8SubmitDate[this]; } set { Fields.ProcurementF8SubmitDate[this] = value; } }
		public partial class RowFields { public DateTimeField ProcurementF8SubmitDate; }

        [DisplayName("Procurement F8 Submit By"), Expression("jProcurement.[F8SubmitBy]"), ReadOnly(true)]
        public String ProcurementF8SubmitBy { get { return Fields.ProcurementF8SubmitBy[this]; } set { Fields.ProcurementF8SubmitBy[this] = value; } }
		public partial class RowFields { public StringField ProcurementF8SubmitBy; }

        [DisplayName("Procurement F9 Submit Date"), Expression("jProcurement.[F9SubmitDate]"), ReadOnly(true)]
        public DateTime? ProcurementF9SubmitDate { get { return Fields.ProcurementF9SubmitDate[this]; } set { Fields.ProcurementF9SubmitDate[this] = value; } }
		public partial class RowFields { public DateTimeField ProcurementF9SubmitDate; }

        [DisplayName("Procurement F9 Submit By"), Expression("jProcurement.[F9SubmitBy]"), ReadOnly(true)]
        public String ProcurementF9SubmitBy { get { return Fields.ProcurementF9SubmitBy[this]; } set { Fields.ProcurementF9SubmitBy[this] = value; } }
		public partial class RowFields { public StringField ProcurementF9SubmitBy; }

        [DisplayName("Procurement F10 Submit Date"), Expression("jProcurement.[F10SubmitDate]"), ReadOnly(true)]
        public DateTime? ProcurementF10SubmitDate { get { return Fields.ProcurementF10SubmitDate[this]; } set { Fields.ProcurementF10SubmitDate[this] = value; } }
		public partial class RowFields { public DateTimeField ProcurementF10SubmitDate; }

        [DisplayName("Procurement F10 Submit By"), Expression("jProcurement.[F10SubmitBy]"), ReadOnly(true)]
        public String ProcurementF10SubmitBy { get { return Fields.ProcurementF10SubmitBy[this]; } set { Fields.ProcurementF10SubmitBy[this] = value; } }
		public partial class RowFields { public StringField ProcurementF10SubmitBy; }

        [DisplayName("Procurement F11 Submit Date"), Expression("jProcurement.[F11SubmitDate]"), ReadOnly(true)]
        public DateTime? ProcurementF11SubmitDate { get { return Fields.ProcurementF11SubmitDate[this]; } set { Fields.ProcurementF11SubmitDate[this] = value; } }
		public partial class RowFields { public DateTimeField ProcurementF11SubmitDate; }

        [DisplayName("Procurement F11 Submit By"), Expression("jProcurement.[F11SubmitBy]"), ReadOnly(true)]
        public String ProcurementF11SubmitBy { get { return Fields.ProcurementF11SubmitBy[this]; } set { Fields.ProcurementF11SubmitBy[this] = value; } }
		public partial class RowFields { public StringField ProcurementF11SubmitBy; }

        [DisplayName("Procurement F12 Submit Date"), Expression("jProcurement.[F12SubmitDate]"), ReadOnly(true)]
        public DateTime? ProcurementF12SubmitDate { get { return Fields.ProcurementF12SubmitDate[this]; } set { Fields.ProcurementF12SubmitDate[this] = value; } }
		public partial class RowFields { public DateTimeField ProcurementF12SubmitDate; }

        [DisplayName("Procurement F12 Submit By"), Expression("jProcurement.[F12SubmitBy]"), ReadOnly(true)]
        public String ProcurementF12SubmitBy { get { return Fields.ProcurementF12SubmitBy[this]; } set { Fields.ProcurementF12SubmitBy[this] = value; } }
		public partial class RowFields { public StringField ProcurementF12SubmitBy; }

        [DisplayName("Procurement F13 Submit Date"), Expression("jProcurement.[F13SubmitDate]"), ReadOnly(true)]
        public DateTime? ProcurementF13SubmitDate { get { return Fields.ProcurementF13SubmitDate[this]; } set { Fields.ProcurementF13SubmitDate[this] = value; } }
		public partial class RowFields { public DateTimeField ProcurementF13SubmitDate; }

        [DisplayName("Procurement F13 Submit By"), Expression("jProcurement.[F13SubmitBy]"), ReadOnly(true)]
        public String ProcurementF13SubmitBy { get { return Fields.ProcurementF13SubmitBy[this]; } set { Fields.ProcurementF13SubmitBy[this] = value; } }
		public partial class RowFields { public StringField ProcurementF13SubmitBy; }

        [DisplayName("Procurement F14 Submit Date"), Expression("jProcurement.[F14SubmitDate]"), ReadOnly(true)]
        public DateTime? ProcurementF14SubmitDate { get { return Fields.ProcurementF14SubmitDate[this]; } set { Fields.ProcurementF14SubmitDate[this] = value; } }
		public partial class RowFields { public DateTimeField ProcurementF14SubmitDate; }

        [DisplayName("Procurement F14 Submit By"), Expression("jProcurement.[F14SubmitBy]"), ReadOnly(true)]
        public String ProcurementF14SubmitBy { get { return Fields.ProcurementF14SubmitBy[this]; } set { Fields.ProcurementF14SubmitBy[this] = value; } }
		public partial class RowFields { public StringField ProcurementF14SubmitBy; }

        [DisplayName("Procurement F15 Submit Date"), Expression("jProcurement.[F15SubmitDate]"), ReadOnly(true)]
        public DateTime? ProcurementF15SubmitDate { get { return Fields.ProcurementF15SubmitDate[this]; } set { Fields.ProcurementF15SubmitDate[this] = value; } }
		public partial class RowFields { public DateTimeField ProcurementF15SubmitDate; }

        [DisplayName("Procurement F15 Submit By"), Expression("jProcurement.[F15SubmitBy]"), ReadOnly(true)]
        public String ProcurementF15SubmitBy { get { return Fields.ProcurementF15SubmitBy[this]; } set { Fields.ProcurementF15SubmitBy[this] = value; } }
		public partial class RowFields { public StringField ProcurementF15SubmitBy; }

        [DisplayName("Procurement F16 Submit Date"), Expression("jProcurement.[F16SubmitDate]"), ReadOnly(true)]
        public DateTime? ProcurementF16SubmitDate { get { return Fields.ProcurementF16SubmitDate[this]; } set { Fields.ProcurementF16SubmitDate[this] = value; } }
		public partial class RowFields { public DateTimeField ProcurementF16SubmitDate; }

        [DisplayName("Procurement F16 Submit By"), Expression("jProcurement.[F16SubmitBy]"), ReadOnly(true)]
        public String ProcurementF16SubmitBy { get { return Fields.ProcurementF16SubmitBy[this]; } set { Fields.ProcurementF16SubmitBy[this] = value; } }
		public partial class RowFields { public StringField ProcurementF16SubmitBy; }

        [DisplayName("Procurement F17 Submit Date"), Expression("jProcurement.[F17SubmitDate]"), ReadOnly(true)]
        public DateTime? ProcurementF17SubmitDate { get { return Fields.ProcurementF17SubmitDate[this]; } set { Fields.ProcurementF17SubmitDate[this] = value; } }
		public partial class RowFields { public DateTimeField ProcurementF17SubmitDate; }

        [DisplayName("Procurement F17 Submit By"), Expression("jProcurement.[F17SubmitBy]"), ReadOnly(true)]
        public String ProcurementF17SubmitBy { get { return Fields.ProcurementF17SubmitBy[this]; } set { Fields.ProcurementF17SubmitBy[this] = value; } }
		public partial class RowFields { public StringField ProcurementF17SubmitBy; }

        [DisplayName("Procurement Procurement Method Id"), Expression("jProcurement.[ProcurementMethodId]"), ReadOnly(true)]
        public String ProcurementProcurementMethodId { get { return Fields.ProcurementProcurementMethodId[this]; } set { Fields.ProcurementProcurementMethodId[this] = value; } }
		public partial class RowFields { public StringField ProcurementProcurementMethodId; }

        [DisplayName("Procurement District"), Expression("jProcurement.[District]"), ReadOnly(true)]
        public String ProcurementDistrict { get { return Fields.ProcurementDistrict[this]; } set { Fields.ProcurementDistrict[this] = value; } }
		public partial class RowFields { public StringField ProcurementDistrict; }

        [DisplayName("Procurement Csms"), Expression("jProcurement.[Csms]"), ReadOnly(true)]
        public String ProcurementCsms { get { return Fields.ProcurementCsms[this]; } set { Fields.ProcurementCsms[this] = value; } }
		public partial class RowFields { public StringField ProcurementCsms; }

        [DisplayName("Procurement Min Score"), Expression("jProcurement.[MinScore]"), ReadOnly(true)]
        public String ProcurementMinScore { get { return Fields.ProcurementMinScore[this]; } set { Fields.ProcurementMinScore[this] = value; } }
		public partial class RowFields { public StringField ProcurementMinScore; }



        [DisplayName("Pr No Buyer Id"), Expression("jPrNo.[BuyerId]"), ReadOnly(true)]
        public Int32? PrNoBuyerId { get { return Fields.PrNoBuyerId[this]; } set { Fields.PrNoBuyerId[this] = value; } }
		public partial class RowFields { public Int32Field PrNoBuyerId; }

        [DisplayName("Pr No Cost Center"), Expression("jPrNo.[CostCenter]"), ReadOnly(true)]
        public String PrNoCostCenter { get { return Fields.PrNoCostCenter[this]; } set { Fields.PrNoCostCenter[this] = value; } }
		public partial class RowFields { public StringField PrNoCostCenter; }

        [DisplayName("Pr No Scan Pr File"), Expression("jPrNo.[ScanPRFile]"), ReadOnly(true)]
        public String PrNoScanPrFile { get { return Fields.PrNoScanPrFile[this]; } set { Fields.PrNoScanPrFile[this] = value; } }
		public partial class RowFields { public StringField PrNoScanPrFile; }

        [DisplayName("Pr No Scan Pr Name"), Expression("jPrNo.[ScanPRName]"), ReadOnly(true)]
        public String PrNoScanPrName { get { return Fields.PrNoScanPrName[this]; } set { Fields.PrNoScanPrName[this] = value; } }
		public partial class RowFields { public StringField PrNoScanPrName; }

        [DisplayName("Pr No Assign Date"), Expression("jPrNo.[AssignDate]"), ReadOnly(true)]
        public DateTime? PrNoAssignDate { get { return Fields.PrNoAssignDate[this]; } set { Fields.PrNoAssignDate[this] = value; } }
		public partial class RowFields { public DateTimeField PrNoAssignDate; }

        [DisplayName("Pr No Assign By"), Expression("jPrNo.[AssignBy]"), ReadOnly(true)]
        public String PrNoAssignBy { get { return Fields.PrNoAssignBy[this]; } set { Fields.PrNoAssignBy[this] = value; } }
		public partial class RowFields { public StringField PrNoAssignBy; }

        [DisplayName("Pr No Created Date"), Expression("jPrNo.[CreatedDate]"), ReadOnly(true)]
        public DateTime? PrNoCreatedDate { get { return Fields.PrNoCreatedDate[this]; } set { Fields.PrNoCreatedDate[this] = value; } }
		public partial class RowFields { public DateTimeField PrNoCreatedDate; }

        [DisplayName("Pr No Created By"), Expression("jPrNo.[CreatedBy]"), ReadOnly(true)]
        public String PrNoCreatedBy { get { return Fields.PrNoCreatedBy[this]; } set { Fields.PrNoCreatedBy[this] = value; } }
		public partial class RowFields { public StringField PrNoCreatedBy; }

        [DisplayName("Pr No Status"), Expression("jPrNo.[Status]"), ReadOnly(true)]
        public String PrNoStatus { get { return Fields.PrNoStatus[this]; } set { Fields.PrNoStatus[this] = value; } }
		public partial class RowFields { public StringField PrNoStatus; }


        #endregion Foreign Fields


        IIdField IIdRow.IdField { get { return Fields.ProcPrId; } }

        StringField INameRow.NameField { get { return Fields.PrNo; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public F20_ProcPrRow() : base(Fields) { }

		public partial class RowFields : RowFieldsBase { }
    }
}
