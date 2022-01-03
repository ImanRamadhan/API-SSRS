
namespace SCMONLINE.Procurement.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Procurement"), TableName("[dbo].[ProcParticipant]")]
    [DisplayName("F10 Proc Participant"), InstanceName("F10 Proc Participant")]
    [ReadPermission("Procurement:F10_ProcParticipant")]
    [ModifyPermission("Procurement:F10_ProcParticipant")]
    public sealed class ProcParticipantRow : Row, IIdRow, INameRow
    {
        [DisplayName("Proc Participant Id"), Identity]
        public Int64? ProcParticipantId
        {
            get { return Fields.ProcParticipantId[this]; }
            set { Fields.ProcParticipantId[this] = value; }
        }

        [DisplayName("Procurement"), ForeignKey("[dbo].[Procurement]", "ProcurementId"), LeftJoin("jProcurement"), TextualField("ProcurementProcurementTypeId")]
        public Int64? ProcurementId
        {
            get { return Fields.ProcurementId[this]; }
            set { Fields.ProcurementId[this] = value; }
        }

        [DisplayName("Sequence No")]
        public Int32? SequenceNo
        {
            get { return Fields.SequenceNo[this]; }
            set { Fields.SequenceNo[this] = value; }
        }

        [DisplayName("Vendor Id"), Size(50), QuickSearch]
        public String VendorId
        {
            get { return Fields.VendorId[this]; }
            set { Fields.VendorId[this] = value; }
        }

        [DisplayName("Price Document File")]
        public String PriceDocumentFile
        {
            get { return Fields.PriceDocumentFile[this]; }
            set { Fields.PriceDocumentFile[this] = value; }
        }

        [DisplayName("Price Document Name")]
        public String PriceDocumentName
        {
            get { return Fields.PriceDocumentName[this]; }
            set { Fields.PriceDocumentName[this] = value; }
        }

        [DisplayName("Tech Spec Doc File")]
        public String TechSpecDocFile
        {
            get { return Fields.TechSpecDocFile[this]; }
            set { Fields.TechSpecDocFile[this] = value; }
        }

        [DisplayName("Tech Spec Doc Name")]
        public String TechSpecDocName
        {
            get { return Fields.TechSpecDocName[this]; }
            set { Fields.TechSpecDocName[this] = value; }
        }

        [DisplayName("Supporting Letter File")]
        public String SupportingLetterFile
        {
            get { return Fields.SupportingLetterFile[this]; }
            set { Fields.SupportingLetterFile[this] = value; }
        }

        [DisplayName("Supporting Letter Name")]
        public String SupportingLetterName
        {
            get { return Fields.SupportingLetterName[this]; }
            set { Fields.SupportingLetterName[this] = value; }
        }

        [DisplayName("Catalog File")]
        public String CatalogFile
        {
            get { return Fields.CatalogFile[this]; }
            set { Fields.CatalogFile[this] = value; }
        }

        [DisplayName("Catalog Name")]
        public String CatalogName
        {
            get { return Fields.CatalogName[this]; }
            set { Fields.CatalogName[this] = value; }
        }

        [DisplayName("Submit Doc Tnc"), Column("SubmitDocTNC")]
        public Boolean? SubmitDocTnc
        {
            get { return Fields.SubmitDocTnc[this]; }
            set { Fields.SubmitDocTnc[this] = value; }
        }

        [DisplayName("Submit Doc Tnc Date"), Column("SubmitDocTNCDate")]
        public DateTime? SubmitDocTncDate
        {
            get { return Fields.SubmitDocTncDate[this]; }
            set { Fields.SubmitDocTncDate[this] = value; }
        }

        [DisplayName("Admin Doc Exists")]
        public Boolean? AdminDocExists
        {
            get { return Fields.AdminDocExists[this]; }
            set { Fields.AdminDocExists[this] = value; }
        }

        [DisplayName("Tech Spec Doc Exists")]
        public Boolean? TechSpecDocExists
        {
            get { return Fields.TechSpecDocExists[this]; }
            set { Fields.TechSpecDocExists[this] = value; }
        }

        [DisplayName("Supporting Letter Exists")]
        public Boolean? SupportingLetterExists
        {
            get { return Fields.SupportingLetterExists[this]; }
            set { Fields.SupportingLetterExists[this] = value; }
        }

        [DisplayName("Catalog Exists")]
        public Boolean? CatalogExists
        {
            get { return Fields.CatalogExists[this]; }
            set { Fields.CatalogExists[this] = value; }
        }

        [DisplayName("Opening Doc Desc")]
        public String OpeningDocDesc
        {
            get { return Fields.OpeningDocDesc[this]; }
            set { Fields.OpeningDocDesc[this] = value; }
        }

        [DisplayName("Admin Doc Atk"), Column("AdminDocATK"), ForeignKey("[dbo].[DocumentStatus]", "DocumentStatusId"), LeftJoin("jAdminDocAtk"), TextualField("AdminDocAtkName")]
        public Int32? AdminDocAtk
        {
            get { return Fields.AdminDocAtk[this]; }
            set { Fields.AdminDocAtk[this] = value; }
        }

        [DisplayName("Tech Spec Doc Atk"), Column("TechSpecDocATK"), ForeignKey("[dbo].[DocumentStatus]", "DocumentStatusId"), LeftJoin("jTechSpecDocAtk"), TextualField("TechSpecDocAtkName")]
        public Int32? TechSpecDocAtk
        {
            get { return Fields.TechSpecDocAtk[this]; }
            set { Fields.TechSpecDocAtk[this] = value; }
        }

        [DisplayName("Supporting Letter Atk"), Column("SupportingLetterATK"), ForeignKey("[dbo].[DocumentStatus]", "DocumentStatusId"), LeftJoin("jSupportingLetterAtk"), TextualField("SupportingLetterAtkName")]
        public Int32? SupportingLetterAtk
        {
            get { return Fields.SupportingLetterAtk[this]; }
            set { Fields.SupportingLetterAtk[this] = value; }
        }

        [DisplayName("Catalog Atk"), Column("CatalogATK"), ForeignKey("[dbo].[DocumentStatus]", "DocumentStatusId"), LeftJoin("jCatalogAtk"), TextualField("CatalogAtkName")]
        public Int32? CatalogAtk
        {
            get { return Fields.CatalogAtk[this]; }
            set { Fields.CatalogAtk[this] = value; }
        }

        [DisplayName("Evaluation Desc")]
        public String EvaluationDesc
        {
            get { return Fields.EvaluationDesc[this]; }
            set { Fields.EvaluationDesc[this] = value; }
        }

        [DisplayName("Clarification Request")]
        public String ClarificationRequest
        {
            get { return Fields.ClarificationRequest[this]; }
            set { Fields.ClarificationRequest[this] = value; }
        }

        [DisplayName("Evaluation Conclusion"), ForeignKey("[dbo].[EvaluationConclusion]", "EvaluationConclusionId"), LeftJoin("jEvaluationConclusion"), TextualField("EvaluationConclusionName")]
        public Int32? EvaluationConclusionId
        {
            get { return Fields.EvaluationConclusionId[this]; }
            set { Fields.EvaluationConclusionId[this] = value; }
        }

        [DisplayName("Clarification Offer")]
        public String ClarificationOffer
        {
            get { return Fields.ClarificationOffer[this]; }
            set { Fields.ClarificationOffer[this] = value; }
        }

        [DisplayName("Clarification Result")]
        public String ClarificationResult
        {
            get { return Fields.ClarificationResult[this]; }
            set { Fields.ClarificationResult[this] = value; }
        }

        [DisplayName("Source"), Size(50)]
        public String Source
        {
            get { return Fields.Source[this]; }
            set { Fields.Source[this] = value; }
        }

        [DisplayName("F5 Participant Submit Date")]
        public DateTime? F5ParticipantSubmitDate
        {
            get { return Fields.F5ParticipantSubmitDate[this]; }
            set { Fields.F5ParticipantSubmitDate[this] = value; }
        }

        [DisplayName("F5 Participant Submit By")]
        public String F5ParticipantSubmitBy
        {
            get { return Fields.F5ParticipantSubmitBy[this]; }
            set { Fields.F5ParticipantSubmitBy[this] = value; }
        }

        [DisplayName("Final Bid Price"), Size(19), Scale(4)]
        public Decimal? FinalBidPrice
        {
            get { return Fields.FinalBidPrice[this]; }
            set { Fields.FinalBidPrice[this] = value; }
        }

        [DisplayName("Submit Objection")]
        public Boolean? SubmitObjection
        {
            get { return Fields.SubmitObjection[this]; }
            set { Fields.SubmitObjection[this] = value; }
        }

        [DisplayName("Objection Description")]
        public String ObjectionDescription
        {
            get { return Fields.ObjectionDescription[this]; }
            set { Fields.ObjectionDescription[this] = value; }
        }

        [DisplayName("F15 Participant Submit Date")]
        public DateTime? F15ParticipantSubmitDate
        {
            get { return Fields.F15ParticipantSubmitDate[this]; }
            set { Fields.F15ParticipantSubmitDate[this] = value; }
        }

        [DisplayName("F15 Participant Submit By")]
        public String F15ParticipantSubmitBy
        {
            get { return Fields.F15ParticipantSubmitBy[this]; }
            set { Fields.F15ParticipantSubmitBy[this] = value; }
        }

        [DisplayName("Invitation")]
        public Boolean? Invitation
        {
            get { return Fields.Invitation[this]; }
            set { Fields.Invitation[this] = value; }
        }

        [DisplayName("Procurement Procurement Type Id"), Expression("jProcurement.[ProcurementTypeId]")]
        public String ProcurementProcurementTypeId
        {
            get { return Fields.ProcurementProcurementTypeId[this]; }
            set { Fields.ProcurementProcurementTypeId[this] = value; }
        }

        [DisplayName("Procurement Status"), Expression("jProcurement.[Status]")]
        public String ProcurementStatus
        {
            get { return Fields.ProcurementStatus[this]; }
            set { Fields.ProcurementStatus[this] = value; }
        }

        [DisplayName("Procurement Collective Number"), Expression("jProcurement.[CollectiveNumber]")]
        public String ProcurementCollectiveNumber
        {
            get { return Fields.ProcurementCollectiveNumber[this]; }
            set { Fields.ProcurementCollectiveNumber[this] = value; }
        }

        [DisplayName("Procurement Title"), Expression("jProcurement.[Title]")]
        public String ProcurementTitle
        {
            get { return Fields.ProcurementTitle[this]; }
            set { Fields.ProcurementTitle[this] = value; }
        }

        [DisplayName("Procurement Classification"), Expression("jProcurement.[Classification]")]
        public String ProcurementClassification
        {
            get { return Fields.ProcurementClassification[this]; }
            set { Fields.ProcurementClassification[this] = value; }
        }

        [DisplayName("Procurement Qualification"), Expression("jProcurement.[Qualification]")]
        public String ProcurementQualification
        {
            get { return Fields.ProcurementQualification[this]; }
            set { Fields.ProcurementQualification[this] = value; }
        }

        [DisplayName("Procurement Requested By"), Expression("jProcurement.[RequestedBy]")]
        public String ProcurementRequestedBy
        {
            get { return Fields.ProcurementRequestedBy[this]; }
            set { Fields.ProcurementRequestedBy[this] = value; }
        }

        [DisplayName("Procurement Requestor Position"), Expression("jProcurement.[RequestorPosition]")]
        public String ProcurementRequestorPosition
        {
            get { return Fields.ProcurementRequestorPosition[this]; }
            set { Fields.ProcurementRequestorPosition[this] = value; }
        }

        [DisplayName("Procurement Approved By"), Expression("jProcurement.[ApprovedBy]")]
        public String ProcurementApprovedBy
        {
            get { return Fields.ProcurementApprovedBy[this]; }
            set { Fields.ProcurementApprovedBy[this] = value; }
        }

        [DisplayName("Procurement Approver Position"), Expression("jProcurement.[ApproverPosition]")]
        public String ProcurementApproverPosition
        {
            get { return Fields.ProcurementApproverPosition[this]; }
            set { Fields.ProcurementApproverPosition[this] = value; }
        }

        [DisplayName("Procurement Sap Bidder List Created By"), Expression("jProcurement.[SAPBidderListCreatedBy]")]
        public String ProcurementSapBidderListCreatedBy
        {
            get { return Fields.ProcurementSapBidderListCreatedBy[this]; }
            set { Fields.ProcurementSapBidderListCreatedBy[this] = value; }
        }

        [DisplayName("Procurement Sap Bidder List Created Date"), Expression("jProcurement.[SAPBidderListCreatedDate]")]
        public DateTime? ProcurementSapBidderListCreatedDate
        {
            get { return Fields.ProcurementSapBidderListCreatedDate[this]; }
            set { Fields.ProcurementSapBidderListCreatedDate[this] = value; }
        }

        [DisplayName("Procurement Created By"), Expression("jProcurement.[CreatedBy]")]
        public String ProcurementCreatedBy
        {
            get { return Fields.ProcurementCreatedBy[this]; }
            set { Fields.ProcurementCreatedBy[this] = value; }
        }

        [DisplayName("Procurement Created Date"), Expression("jProcurement.[CreatedDate]")]
        public DateTime? ProcurementCreatedDate
        {
            get { return Fields.ProcurementCreatedDate[this]; }
            set { Fields.ProcurementCreatedDate[this] = value; }
        }

        [DisplayName("Procurement Guarantee Percentage"), Expression("jProcurement.[GuaranteePercentage]")]
        public Decimal? ProcurementGuaranteePercentage
        {
            get { return Fields.ProcurementGuaranteePercentage[this]; }
            set { Fields.ProcurementGuaranteePercentage[this] = value; }
        }

        [DisplayName("Procurement Office Address"), Expression("jProcurement.[OfficeAddress]")]
        public Int32? ProcurementOfficeAddress
        {
            get { return Fields.ProcurementOfficeAddress[this]; }
            set { Fields.ProcurementOfficeAddress[this] = value; }
        }

        [DisplayName("Procurement Proc Value Range Id"), Expression("jProcurement.[ProcValueRangeId]")]
        public Int32? ProcurementProcValueRangeId
        {
            get { return Fields.ProcurementProcValueRangeId[this]; }
            set { Fields.ProcurementProcValueRangeId[this] = value; }
        }

        [DisplayName("Procurement Committee Type Id"), Expression("jProcurement.[CommitteeTypeId]")]
        public Int32? ProcurementCommitteeTypeId
        {
            get { return Fields.ProcurementCommitteeTypeId[this]; }
            set { Fields.ProcurementCommitteeTypeId[this] = value; }
        }

        [DisplayName("Procurement Performance Guarantee Required"), Expression("jProcurement.[PerformanceGuaranteeRequired]")]
        public Boolean? ProcurementPerformanceGuaranteeRequired
        {
            get { return Fields.ProcurementPerformanceGuaranteeRequired[this]; }
            set { Fields.ProcurementPerformanceGuaranteeRequired[this] = value; }
        }

        [DisplayName("Procurement Tender Period"), Expression("jProcurement.[TenderPeriod]")]
        public Int32? ProcurementTenderPeriod
        {
            get { return Fields.ProcurementTenderPeriod[this]; }
            set { Fields.ProcurementTenderPeriod[this] = value; }
        }

        [DisplayName("Procurement Delivery Time"), Expression("jProcurement.[DeliveryTime]")]
        public Int32? ProcurementDeliveryTime
        {
            get { return Fields.ProcurementDeliveryTime[this]; }
            set { Fields.ProcurementDeliveryTime[this] = value; }
        }

        [DisplayName("Procurement Destination Id"), Expression("jProcurement.[DestinationId]")]
        public Int32? ProcurementDestinationId
        {
            get { return Fields.ProcurementDestinationId[this]; }
            set { Fields.ProcurementDestinationId[this] = value; }
        }

        [DisplayName("Procurement Contract Type Id"), Expression("jProcurement.[ContractTypeId]")]
        public Int32? ProcurementContractTypeId
        {
            get { return Fields.ProcurementContractTypeId[this]; }
            set { Fields.ProcurementContractTypeId[this] = value; }
        }

        [DisplayName("Procurement Currency Id"), Expression("jProcurement.[CurrencyId]")]
        public String ProcurementCurrencyId
        {
            get { return Fields.ProcurementCurrencyId[this]; }
            set { Fields.ProcurementCurrencyId[this] = value; }
        }

        [DisplayName("Procurement Doc Submit Method Id"), Expression("jProcurement.[DocSubmitMethodId]")]
        public Int32? ProcurementDocSubmitMethodId
        {
            get { return Fields.ProcurementDocSubmitMethodId[this]; }
            set { Fields.ProcurementDocSubmitMethodId[this] = value; }
        }

        [DisplayName("Procurement Aanwijzing Exists"), Expression("jProcurement.[AanwijzingExists]")]
        public Boolean? ProcurementAanwijzingExists
        {
            get { return Fields.ProcurementAanwijzingExists[this]; }
            set { Fields.ProcurementAanwijzingExists[this] = value; }
        }

        [DisplayName("Procurement Aanwijzing Date"), Expression("jProcurement.[AanwijzingDate]")]
        public DateTime? ProcurementAanwijzingDate
        {
            get { return Fields.ProcurementAanwijzingDate[this]; }
            set { Fields.ProcurementAanwijzingDate[this] = value; }
        }

        [DisplayName("Procurement Aanwijzing Closing Date"), Expression("jProcurement.[AanwijzingClosingDate]")]
        public DateTime? ProcurementAanwijzingClosingDate
        {
            get { return Fields.ProcurementAanwijzingClosingDate[this]; }
            set { Fields.ProcurementAanwijzingClosingDate[this] = value; }
        }

        [DisplayName("Procurement Aanwijzing Location"), Expression("jProcurement.[AanwijzingLocation]")]
        public String ProcurementAanwijzingLocation
        {
            get { return Fields.ProcurementAanwijzingLocation[this]; }
            set { Fields.ProcurementAanwijzingLocation[this] = value; }
        }

        [DisplayName("Procurement Aanwijzing Closing Location"), Expression("jProcurement.[AanwijzingClosingLocation]")]
        public String ProcurementAanwijzingClosingLocation
        {
            get { return Fields.ProcurementAanwijzingClosingLocation[this]; }
            set { Fields.ProcurementAanwijzingClosingLocation[this] = value; }
        }

        [DisplayName("Procurement Aanwijzing Secretary"), Expression("jProcurement.[AanwijzingSecretary]")]
        public String ProcurementAanwijzingSecretary
        {
            get { return Fields.ProcurementAanwijzingSecretary[this]; }
            set { Fields.ProcurementAanwijzingSecretary[this] = value; }
        }

        [DisplayName("Procurement Technical Explanation"), Expression("jProcurement.[TechnicalExplanation]")]
        public String ProcurementTechnicalExplanation
        {
            get { return Fields.ProcurementTechnicalExplanation[this]; }
            set { Fields.ProcurementTechnicalExplanation[this] = value; }
        }

        [DisplayName("Procurement Administrative Explanation"), Expression("jProcurement.[AdministrativeExplanation]")]
        public String ProcurementAdministrativeExplanation
        {
            get { return Fields.ProcurementAdministrativeExplanation[this]; }
            set { Fields.ProcurementAdministrativeExplanation[this] = value; }
        }

        [DisplayName("Procurement Other Explanation"), Expression("jProcurement.[OtherExplanation]")]
        public String ProcurementOtherExplanation
        {
            get { return Fields.ProcurementOtherExplanation[this]; }
            set { Fields.ProcurementOtherExplanation[this] = value; }
        }

        [DisplayName("Procurement Aanwijzing Summary"), Expression("jProcurement.[AanwijzingSummary]")]
        public String ProcurementAanwijzingSummary
        {
            get { return Fields.ProcurementAanwijzingSummary[this]; }
            set { Fields.ProcurementAanwijzingSummary[this] = value; }
        }

        [DisplayName("Procurement Field Survey Exists"), Expression("jProcurement.[FieldSurveyExists]")]
        public Boolean? ProcurementFieldSurveyExists
        {
            get { return Fields.ProcurementFieldSurveyExists[this]; }
            set { Fields.ProcurementFieldSurveyExists[this] = value; }
        }

        [DisplayName("Procurement Field Survey Address"), Expression("jProcurement.[FieldSurveyAddress]")]
        public String ProcurementFieldSurveyAddress
        {
            get { return Fields.ProcurementFieldSurveyAddress[this]; }
            set { Fields.ProcurementFieldSurveyAddress[this] = value; }
        }

        [DisplayName("Procurement Itb Document File"), Expression("jProcurement.[ITBDocumentFile]")]
        public String ProcurementItbDocumentFile
        {
            get { return Fields.ProcurementItbDocumentFile[this]; }
            set { Fields.ProcurementItbDocumentFile[this] = value; }
        }

        [DisplayName("Procurement Itb Document Name"), Expression("jProcurement.[ITBDocumentName]")]
        public String ProcurementItbDocumentName
        {
            get { return Fields.ProcurementItbDocumentName[this]; }
            set { Fields.ProcurementItbDocumentName[this] = value; }
        }

        [DisplayName("Procurement Rks Document File"), Expression("jProcurement.[RKSDocumentFile]")]
        public String ProcurementRksDocumentFile
        {
            get { return Fields.ProcurementRksDocumentFile[this]; }
            set { Fields.ProcurementRksDocumentFile[this] = value; }
        }

        [DisplayName("Procurement Rks Document Name"), Expression("jProcurement.[RKSDocumentName]")]
        public String ProcurementRksDocumentName
        {
            get { return Fields.ProcurementRksDocumentName[this]; }
            set { Fields.ProcurementRksDocumentName[this] = value; }
        }

        [DisplayName("Procurement Tender Doc Submit Open Date"), Expression("jProcurement.[TenderDocSubmitOpenDate]")]
        public DateTime? ProcurementTenderDocSubmitOpenDate
        {
            get { return Fields.ProcurementTenderDocSubmitOpenDate[this]; }
            set { Fields.ProcurementTenderDocSubmitOpenDate[this] = value; }
        }

        [DisplayName("Procurement Tender Doc Submit Close Date"), Expression("jProcurement.[TenderDocSubmitCloseDate]")]
        public DateTime? ProcurementTenderDocSubmitCloseDate
        {
            get { return Fields.ProcurementTenderDocSubmitCloseDate[this]; }
            set { Fields.ProcurementTenderDocSubmitCloseDate[this] = value; }
        }

        [DisplayName("Procurement Order Type Id"), Expression("jProcurement.[OrderTypeId]")]
        public String ProcurementOrderTypeId
        {
            get { return Fields.ProcurementOrderTypeId[this]; }
            set { Fields.ProcurementOrderTypeId[this] = value; }
        }

        [DisplayName("Procurement Purch Doc Num"), Expression("jProcurement.[PurchDocNum]")]
        public String ProcurementPurchDocNum
        {
            get { return Fields.ProcurementPurchDocNum[this]; }
            set { Fields.ProcurementPurchDocNum[this] = value; }
        }

        [DisplayName("Procurement Rfq Date"), Expression("jProcurement.[RFQDate]")]
        public DateTime? ProcurementRfqDate
        {
            get { return Fields.ProcurementRfqDate[this]; }
            set { Fields.ProcurementRfqDate[this] = value; }
        }

        [DisplayName("Procurement Quotation Deadline"), Expression("jProcurement.[QuotationDeadline]")]
        public DateTime? ProcurementQuotationDeadline
        {
            get { return Fields.ProcurementQuotationDeadline[this]; }
            set { Fields.ProcurementQuotationDeadline[this] = value; }
        }

        [DisplayName("Procurement Purch Group"), Expression("jProcurement.[PurchGroup]")]
        public String ProcurementPurchGroup
        {
            get { return Fields.ProcurementPurchGroup[this]; }
            set { Fields.ProcurementPurchGroup[this] = value; }
        }

        [DisplayName("Procurement Pr No"), Expression("jProcurement.[PRNo]")]
        public String ProcurementPrNo
        {
            get { return Fields.ProcurementPrNo[this]; }
            set { Fields.ProcurementPrNo[this] = value; }
        }

        [DisplayName("Procurement Auth Person Name"), Expression("jProcurement.[AuthPersonName]")]
        public String ProcurementAuthPersonName
        {
            get { return Fields.ProcurementAuthPersonName[this]; }
            set { Fields.ProcurementAuthPersonName[this] = value; }
        }

        [DisplayName("Procurement Auth Position"), Expression("jProcurement.[AuthPosition]")]
        public String ProcurementAuthPosition
        {
            get { return Fields.ProcurementAuthPosition[this]; }
            set { Fields.ProcurementAuthPosition[this] = value; }
        }

        [DisplayName("Procurement Header Text"), Expression("jProcurement.[HeaderText]")]
        public String ProcurementHeaderText
        {
            get { return Fields.ProcurementHeaderText[this]; }
            set { Fields.ProcurementHeaderText[this] = value; }
        }

        [DisplayName("Procurement Header Note"), Expression("jProcurement.[HeaderNote]")]
        public String ProcurementHeaderNote
        {
            get { return Fields.ProcurementHeaderNote[this]; }
            set { Fields.ProcurementHeaderNote[this] = value; }
        }

        [DisplayName("Procurement Work Description"), Expression("jProcurement.[WorkDescription]")]
        public String ProcurementWorkDescription
        {
            get { return Fields.ProcurementWorkDescription[this]; }
            set { Fields.ProcurementWorkDescription[this] = value; }
        }

        [DisplayName("Procurement Bank Key"), Expression("jProcurement.[BankKey]")]
        public String ProcurementBankKey
        {
            get { return Fields.ProcurementBankKey[this]; }
            set { Fields.ProcurementBankKey[this] = value; }
        }

        [DisplayName("Procurement Po Cover"), Expression("jProcurement.[POCover]")]
        public String ProcurementPoCover
        {
            get { return Fields.ProcurementPoCover[this]; }
            set { Fields.ProcurementPoCover[this] = value; }
        }

        [DisplayName("Procurement Delivery Address"), Expression("jProcurement.[DeliveryAddress]")]
        public String ProcurementDeliveryAddress
        {
            get { return Fields.ProcurementDeliveryAddress[this]; }
            set { Fields.ProcurementDeliveryAddress[this] = value; }
        }

        [DisplayName("Procurement To P Targ Val"), Expression("jProcurement.[ToPTargVal]")]
        public String ProcurementToPTargVal
        {
            get { return Fields.ProcurementToPTargVal[this]; }
            set { Fields.ProcurementToPTargVal[this] = value; }
        }

        [DisplayName("Procurement Your Reference"), Expression("jProcurement.[YourReference]")]
        public String ProcurementYourReference
        {
            get { return Fields.ProcurementYourReference[this]; }
            set { Fields.ProcurementYourReference[this] = value; }
        }

        [DisplayName("Procurement Our Reference"), Expression("jProcurement.[OurReference]")]
        public String ProcurementOurReference
        {
            get { return Fields.ProcurementOurReference[this]; }
            set { Fields.ProcurementOurReference[this] = value; }
        }

        [DisplayName("Procurement Sales Person"), Expression("jProcurement.[SalesPerson]")]
        public String ProcurementSalesPerson
        {
            get { return Fields.ProcurementSalesPerson[this]; }
            set { Fields.ProcurementSalesPerson[this] = value; }
        }

        [DisplayName("Procurement Telephone"), Expression("jProcurement.[Telephone]")]
        public String ProcurementTelephone
        {
            get { return Fields.ProcurementTelephone[this]; }
            set { Fields.ProcurementTelephone[this] = value; }
        }

        [DisplayName("Procurement Validity Start"), Expression("jProcurement.[ValidityStart]")]
        public DateTime? ProcurementValidityStart
        {
            get { return Fields.ProcurementValidityStart[this]; }
            set { Fields.ProcurementValidityStart[this] = value; }
        }

        [DisplayName("Procurement Validity End"), Expression("jProcurement.[ValidityEnd]")]
        public DateTime? ProcurementValidityEnd
        {
            get { return Fields.ProcurementValidityEnd[this]; }
            set { Fields.ProcurementValidityEnd[this] = value; }
        }

        [DisplayName("Procurement Item Interval"), Expression("jProcurement.[ItemInterval]")]
        public Decimal? ProcurementItemInterval
        {
            get { return Fields.ProcurementItemInterval[this]; }
            set { Fields.ProcurementItemInterval[this] = value; }
        }

        [DisplayName("Procurement Sub Item Interval"), Expression("jProcurement.[SubItemInterval]")]
        public Decimal? ProcurementSubItemInterval
        {
            get { return Fields.ProcurementSubItemInterval[this]; }
            set { Fields.ProcurementSubItemInterval[this] = value; }
        }

        [DisplayName("Procurement Warranty"), Expression("jProcurement.[Warranty]")]
        public DateTime? ProcurementWarranty
        {
            get { return Fields.ProcurementWarranty[this]; }
            set { Fields.ProcurementWarranty[this] = value; }
        }

        [DisplayName("Procurement Language"), Expression("jProcurement.[Language]")]
        public String ProcurementLanguage
        {
            get { return Fields.ProcurementLanguage[this]; }
            set { Fields.ProcurementLanguage[this] = value; }
        }

        [DisplayName("Procurement Evaluation Closing Price Date"), Expression("jProcurement.[EvaluationClosingPriceDate]")]
        public DateTime? ProcurementEvaluationClosingPriceDate
        {
            get { return Fields.ProcurementEvaluationClosingPriceDate[this]; }
            set { Fields.ProcurementEvaluationClosingPriceDate[this] = value; }
        }

        [DisplayName("Procurement Review Oe Required"), Expression("jProcurement.[ReviewOERequired]")]
        public Boolean? ProcurementReviewOeRequired
        {
            get { return Fields.ProcurementReviewOeRequired[this]; }
            set { Fields.ProcurementReviewOeRequired[this] = value; }
        }

        [DisplayName("Procurement Proc Agreement"), Expression("jProcurement.[ProcAgreement]")]
        public Boolean? ProcurementProcAgreement
        {
            get { return Fields.ProcurementProcAgreement[this]; }
            set { Fields.ProcurementProcAgreement[this] = value; }
        }

        [DisplayName("Procurement Proc Agreement Date"), Expression("jProcurement.[ProcAgreementDate]")]
        public DateTime? ProcurementProcAgreementDate
        {
            get { return Fields.ProcurementProcAgreementDate[this]; }
            set { Fields.ProcurementProcAgreementDate[this] = value; }
        }

        [DisplayName("Procurement Proc As Required"), Expression("jProcurement.[ProcASRequired]")]
        public Boolean? ProcurementProcAsRequired
        {
            get { return Fields.ProcurementProcAsRequired[this]; }
            set { Fields.ProcurementProcAsRequired[this] = value; }
        }

        [DisplayName("Procurement Proc As Approved"), Expression("jProcurement.[ProcASApproved]")]
        public Boolean? ProcurementProcAsApproved
        {
            get { return Fields.ProcurementProcAsApproved[this]; }
            set { Fields.ProcurementProcAsApproved[this] = value; }
        }

        [DisplayName("Procurement Proc As Approved Date"), Expression("jProcurement.[ProcASApprovedDate]")]
        public DateTime? ProcurementProcAsApprovedDate
        {
            get { return Fields.ProcurementProcAsApprovedDate[this]; }
            set { Fields.ProcurementProcAsApprovedDate[this] = value; }
        }

        [DisplayName("Procurement Proc As Desc"), Expression("jProcurement.[ProcASDesc]")]
        public String ProcurementProcAsDesc
        {
            get { return Fields.ProcurementProcAsDesc[this]; }
            set { Fields.ProcurementProcAsDesc[this] = value; }
        }

        [DisplayName("Procurement Final Conclusion Desc"), Expression("jProcurement.[FinalConclusionDesc]")]
        public String ProcurementFinalConclusionDesc
        {
            get { return Fields.ProcurementFinalConclusionDesc[this]; }
            set { Fields.ProcurementFinalConclusionDesc[this] = value; }
        }

        [DisplayName("Procurement Winner Nomination Date"), Expression("jProcurement.[WinnerNominationDate]")]
        public DateTime? ProcurementWinnerNominationDate
        {
            get { return Fields.ProcurementWinnerNominationDate[this]; }
            set { Fields.ProcurementWinnerNominationDate[this] = value; }
        }

        [DisplayName("Procurement Objection Close Date"), Expression("jProcurement.[ObjectionCloseDate]")]
        public DateTime? ProcurementObjectionCloseDate
        {
            get { return Fields.ProcurementObjectionCloseDate[this]; }
            set { Fields.ProcurementObjectionCloseDate[this] = value; }
        }

        [DisplayName("Procurement Po Doc Name"), Expression("jProcurement.[PODocName]")]
        public String ProcurementPoDocName
        {
            get { return Fields.ProcurementPoDocName[this]; }
            set { Fields.ProcurementPoDocName[this] = value; }
        }

        [DisplayName("Procurement Temporary Pic"), Expression("jProcurement.[TemporaryPIC]")]
        public String ProcurementTemporaryPic
        {
            get { return Fields.ProcurementTemporaryPic[this]; }
            set { Fields.ProcurementTemporaryPic[this] = value; }
        }

        [DisplayName("Procurement Po Number"), Expression("jProcurement.[PONumber]")]
        public String ProcurementPoNumber
        {
            get { return Fields.ProcurementPoNumber[this]; }
            set { Fields.ProcurementPoNumber[this] = value; }
        }

        [DisplayName("Procurement Po Doc File"), Expression("jProcurement.[PODocFile]")]
        public String ProcurementPoDocFile
        {
            get { return Fields.ProcurementPoDocFile[this]; }
            set { Fields.ProcurementPoDocFile[this] = value; }
        }

        [DisplayName("Procurement F1 Submit Date"), Expression("jProcurement.[F1SubmitDate]")]
        public DateTime? ProcurementF1SubmitDate
        {
            get { return Fields.ProcurementF1SubmitDate[this]; }
            set { Fields.ProcurementF1SubmitDate[this] = value; }
        }

        [DisplayName("Procurement F1 Submit By"), Expression("jProcurement.[F1SubmitBy]")]
        public String ProcurementF1SubmitBy
        {
            get { return Fields.ProcurementF1SubmitBy[this]; }
            set { Fields.ProcurementF1SubmitBy[this] = value; }
        }

        [DisplayName("Procurement F2 Submit Date"), Expression("jProcurement.[F2SubmitDate]")]
        public DateTime? ProcurementF2SubmitDate
        {
            get { return Fields.ProcurementF2SubmitDate[this]; }
            set { Fields.ProcurementF2SubmitDate[this] = value; }
        }

        [DisplayName("Procurement F2 Submit By"), Expression("jProcurement.[F2SubmitBy]")]
        public String ProcurementF2SubmitBy
        {
            get { return Fields.ProcurementF2SubmitBy[this]; }
            set { Fields.ProcurementF2SubmitBy[this] = value; }
        }

        [DisplayName("Procurement F3 Submit Date"), Expression("jProcurement.[F3SubmitDate]")]
        public DateTime? ProcurementF3SubmitDate
        {
            get { return Fields.ProcurementF3SubmitDate[this]; }
            set { Fields.ProcurementF3SubmitDate[this] = value; }
        }

        [DisplayName("Procurement F3 Submit By"), Expression("jProcurement.[F3SubmitBy]")]
        public String ProcurementF3SubmitBy
        {
            get { return Fields.ProcurementF3SubmitBy[this]; }
            set { Fields.ProcurementF3SubmitBy[this] = value; }
        }

        [DisplayName("Procurement F3 1 Submit Date"), Expression("jProcurement.[F3_1SubmitDate]")]
        public DateTime? ProcurementF31SubmitDate
        {
            get { return Fields.ProcurementF31SubmitDate[this]; }
            set { Fields.ProcurementF31SubmitDate[this] = value; }
        }

        [DisplayName("Procurement F3 1 Submit By"), Expression("jProcurement.[F3_1SubmitBy]")]
        public String ProcurementF31SubmitBy
        {
            get { return Fields.ProcurementF31SubmitBy[this]; }
            set { Fields.ProcurementF31SubmitBy[this] = value; }
        }

        [DisplayName("Procurement F4 Submit Date"), Expression("jProcurement.[F4SubmitDate]")]
        public DateTime? ProcurementF4SubmitDate
        {
            get { return Fields.ProcurementF4SubmitDate[this]; }
            set { Fields.ProcurementF4SubmitDate[this] = value; }
        }

        [DisplayName("Procurement F4 Submit By"), Expression("jProcurement.[F4SubmitBy]")]
        public String ProcurementF4SubmitBy
        {
            get { return Fields.ProcurementF4SubmitBy[this]; }
            set { Fields.ProcurementF4SubmitBy[this] = value; }
        }

        [DisplayName("Procurement F5 Submit Date"), Expression("jProcurement.[F5SubmitDate]")]
        public DateTime? ProcurementF5SubmitDate
        {
            get { return Fields.ProcurementF5SubmitDate[this]; }
            set { Fields.ProcurementF5SubmitDate[this] = value; }
        }

        [DisplayName("Procurement F5 Submit By"), Expression("jProcurement.[F5SubmitBy]")]
        public String ProcurementF5SubmitBy
        {
            get { return Fields.ProcurementF5SubmitBy[this]; }
            set { Fields.ProcurementF5SubmitBy[this] = value; }
        }

        [DisplayName("Procurement F6 Submit Date"), Expression("jProcurement.[F6SubmitDate]")]
        public DateTime? ProcurementF6SubmitDate
        {
            get { return Fields.ProcurementF6SubmitDate[this]; }
            set { Fields.ProcurementF6SubmitDate[this] = value; }
        }

        [DisplayName("Procurement F6 Submit By"), Expression("jProcurement.[F6SubmitBy]")]
        public String ProcurementF6SubmitBy
        {
            get { return Fields.ProcurementF6SubmitBy[this]; }
            set { Fields.ProcurementF6SubmitBy[this] = value; }
        }

        [DisplayName("Procurement F7 Submit Date"), Expression("jProcurement.[F7SubmitDate]")]
        public DateTime? ProcurementF7SubmitDate
        {
            get { return Fields.ProcurementF7SubmitDate[this]; }
            set { Fields.ProcurementF7SubmitDate[this] = value; }
        }

        [DisplayName("Procurement F7 Submit By"), Expression("jProcurement.[F7SubmitBy]")]
        public String ProcurementF7SubmitBy
        {
            get { return Fields.ProcurementF7SubmitBy[this]; }
            set { Fields.ProcurementF7SubmitBy[this] = value; }
        }

        [DisplayName("Procurement F8 Submit Date"), Expression("jProcurement.[F8SubmitDate]")]
        public DateTime? ProcurementF8SubmitDate
        {
            get { return Fields.ProcurementF8SubmitDate[this]; }
            set { Fields.ProcurementF8SubmitDate[this] = value; }
        }

        [DisplayName("Procurement F8 Submit By"), Expression("jProcurement.[F8SubmitBy]")]
        public String ProcurementF8SubmitBy
        {
            get { return Fields.ProcurementF8SubmitBy[this]; }
            set { Fields.ProcurementF8SubmitBy[this] = value; }
        }

        [DisplayName("Procurement F9 Submit Date"), Expression("jProcurement.[F9SubmitDate]")]
        public DateTime? ProcurementF9SubmitDate
        {
            get { return Fields.ProcurementF9SubmitDate[this]; }
            set { Fields.ProcurementF9SubmitDate[this] = value; }
        }

        [DisplayName("Procurement F9 Submit By"), Expression("jProcurement.[F9SubmitBy]")]
        public String ProcurementF9SubmitBy
        {
            get { return Fields.ProcurementF9SubmitBy[this]; }
            set { Fields.ProcurementF9SubmitBy[this] = value; }
        }

        [DisplayName("Procurement F10 Submit Date"), Expression("jProcurement.[F10SubmitDate]")]
        public DateTime? ProcurementF10SubmitDate
        {
            get { return Fields.ProcurementF10SubmitDate[this]; }
            set { Fields.ProcurementF10SubmitDate[this] = value; }
        }

        [DisplayName("Procurement F10 Submit By"), Expression("jProcurement.[F10SubmitBy]")]
        public String ProcurementF10SubmitBy
        {
            get { return Fields.ProcurementF10SubmitBy[this]; }
            set { Fields.ProcurementF10SubmitBy[this] = value; }
        }

        [DisplayName("Procurement F11 Submit Date"), Expression("jProcurement.[F11SubmitDate]")]
        public DateTime? ProcurementF11SubmitDate
        {
            get { return Fields.ProcurementF11SubmitDate[this]; }
            set { Fields.ProcurementF11SubmitDate[this] = value; }
        }

        [DisplayName("Procurement F11 Submit By"), Expression("jProcurement.[F11SubmitBy]")]
        public String ProcurementF11SubmitBy
        {
            get { return Fields.ProcurementF11SubmitBy[this]; }
            set { Fields.ProcurementF11SubmitBy[this] = value; }
        }

        [DisplayName("Procurement F12 Submit Date"), Expression("jProcurement.[F12SubmitDate]")]
        public DateTime? ProcurementF12SubmitDate
        {
            get { return Fields.ProcurementF12SubmitDate[this]; }
            set { Fields.ProcurementF12SubmitDate[this] = value; }
        }

        [DisplayName("Procurement F12 Submit By"), Expression("jProcurement.[F12SubmitBy]")]
        public String ProcurementF12SubmitBy
        {
            get { return Fields.ProcurementF12SubmitBy[this]; }
            set { Fields.ProcurementF12SubmitBy[this] = value; }
        }

        [DisplayName("Procurement F13 Submit Date"), Expression("jProcurement.[F13SubmitDate]")]
        public DateTime? ProcurementF13SubmitDate
        {
            get { return Fields.ProcurementF13SubmitDate[this]; }
            set { Fields.ProcurementF13SubmitDate[this] = value; }
        }

        [DisplayName("Procurement F13 Submit By"), Expression("jProcurement.[F13SubmitBy]")]
        public String ProcurementF13SubmitBy
        {
            get { return Fields.ProcurementF13SubmitBy[this]; }
            set { Fields.ProcurementF13SubmitBy[this] = value; }
        }

        [DisplayName("Procurement F14 Submit Date"), Expression("jProcurement.[F14SubmitDate]")]
        public DateTime? ProcurementF14SubmitDate
        {
            get { return Fields.ProcurementF14SubmitDate[this]; }
            set { Fields.ProcurementF14SubmitDate[this] = value; }
        }

        [DisplayName("Procurement F14 Submit By"), Expression("jProcurement.[F14SubmitBy]")]
        public String ProcurementF14SubmitBy
        {
            get { return Fields.ProcurementF14SubmitBy[this]; }
            set { Fields.ProcurementF14SubmitBy[this] = value; }
        }

        [DisplayName("Procurement F15 Submit Date"), Expression("jProcurement.[F15SubmitDate]")]
        public DateTime? ProcurementF15SubmitDate
        {
            get { return Fields.ProcurementF15SubmitDate[this]; }
            set { Fields.ProcurementF15SubmitDate[this] = value; }
        }

        [DisplayName("Procurement F15 Submit By"), Expression("jProcurement.[F15SubmitBy]")]
        public String ProcurementF15SubmitBy
        {
            get { return Fields.ProcurementF15SubmitBy[this]; }
            set { Fields.ProcurementF15SubmitBy[this] = value; }
        }

        [DisplayName("Procurement F16 Submit Date"), Expression("jProcurement.[F16SubmitDate]")]
        public DateTime? ProcurementF16SubmitDate
        {
            get { return Fields.ProcurementF16SubmitDate[this]; }
            set { Fields.ProcurementF16SubmitDate[this] = value; }
        }

        [DisplayName("Procurement F16 Submit By"), Expression("jProcurement.[F16SubmitBy]")]
        public String ProcurementF16SubmitBy
        {
            get { return Fields.ProcurementF16SubmitBy[this]; }
            set { Fields.ProcurementF16SubmitBy[this] = value; }
        }

        [DisplayName("Procurement F17 Submit Date"), Expression("jProcurement.[F17SubmitDate]")]
        public DateTime? ProcurementF17SubmitDate
        {
            get { return Fields.ProcurementF17SubmitDate[this]; }
            set { Fields.ProcurementF17SubmitDate[this] = value; }
        }

        [DisplayName("Procurement F17 Submit By"), Expression("jProcurement.[F17SubmitBy]")]
        public String ProcurementF17SubmitBy
        {
            get { return Fields.ProcurementF17SubmitBy[this]; }
            set { Fields.ProcurementF17SubmitBy[this] = value; }
        }

        [DisplayName("Procurement F19 Submit Date"), Expression("jProcurement.[F19SubmitDate]")]
        public DateTime? ProcurementF19SubmitDate
        {
            get { return Fields.ProcurementF19SubmitDate[this]; }
            set { Fields.ProcurementF19SubmitDate[this] = value; }
        }

        [DisplayName("Procurement F19 Submit By"), Expression("jProcurement.[F19SubmitBy]")]
        public String ProcurementF19SubmitBy
        {
            get { return Fields.ProcurementF19SubmitBy[this]; }
            set { Fields.ProcurementF19SubmitBy[this] = value; }
        }

        [DisplayName("Procurement Procurement Method Id"), Expression("jProcurement.[ProcurementMethodId]")]
        public String ProcurementProcurementMethodId
        {
            get { return Fields.ProcurementProcurementMethodId[this]; }
            set { Fields.ProcurementProcurementMethodId[this] = value; }
        }

        [DisplayName("Procurement District"), Expression("jProcurement.[District]")]
        public String ProcurementDistrict
        {
            get { return Fields.ProcurementDistrict[this]; }
            set { Fields.ProcurementDistrict[this] = value; }
        }

        [DisplayName("Procurement Csms"), Expression("jProcurement.[Csms]")]
        public String ProcurementCsms
        {
            get { return Fields.ProcurementCsms[this]; }
            set { Fields.ProcurementCsms[this] = value; }
        }

        [DisplayName("Procurement Min Score"), Expression("jProcurement.[MinScore]")]
        public String ProcurementMinScore
        {
            get { return Fields.ProcurementMinScore[this]; }
            set { Fields.ProcurementMinScore[this] = value; }
        }

        [DisplayName("Admin Doc Atk Name"), Expression("jAdminDocAtk.[Name]")]
        public String AdminDocAtkName
        {
            get { return Fields.AdminDocAtkName[this]; }
            set { Fields.AdminDocAtkName[this] = value; }
        }

        [DisplayName("Admin Doc Atk Description"), Expression("jAdminDocAtk.[Description]")]
        public String AdminDocAtkDescription
        {
            get { return Fields.AdminDocAtkDescription[this]; }
            set { Fields.AdminDocAtkDescription[this] = value; }
        }

        [DisplayName("Tech Spec Doc Atk Name"), Expression("jTechSpecDocAtk.[Name]")]
        public String TechSpecDocAtkName
        {
            get { return Fields.TechSpecDocAtkName[this]; }
            set { Fields.TechSpecDocAtkName[this] = value; }
        }

        [DisplayName("Tech Spec Doc Atk Description"), Expression("jTechSpecDocAtk.[Description]")]
        public String TechSpecDocAtkDescription
        {
            get { return Fields.TechSpecDocAtkDescription[this]; }
            set { Fields.TechSpecDocAtkDescription[this] = value; }
        }

        [DisplayName("Supporting Letter Atk Name"), Expression("jSupportingLetterAtk.[Name]")]
        public String SupportingLetterAtkName
        {
            get { return Fields.SupportingLetterAtkName[this]; }
            set { Fields.SupportingLetterAtkName[this] = value; }
        }

        [DisplayName("Supporting Letter Atk Description"), Expression("jSupportingLetterAtk.[Description]")]
        public String SupportingLetterAtkDescription
        {
            get { return Fields.SupportingLetterAtkDescription[this]; }
            set { Fields.SupportingLetterAtkDescription[this] = value; }
        }

        [DisplayName("Catalog Atk Name"), Expression("jCatalogAtk.[Name]")]
        public String CatalogAtkName
        {
            get { return Fields.CatalogAtkName[this]; }
            set { Fields.CatalogAtkName[this] = value; }
        }

        [DisplayName("Catalog Atk Description"), Expression("jCatalogAtk.[Description]")]
        public String CatalogAtkDescription
        {
            get { return Fields.CatalogAtkDescription[this]; }
            set { Fields.CatalogAtkDescription[this] = value; }
        }

        [DisplayName("Evaluation Conclusion Name"), Expression("jEvaluationConclusion.[Name]")]
        public String EvaluationConclusionName
        {
            get { return Fields.EvaluationConclusionName[this]; }
            set { Fields.EvaluationConclusionName[this] = value; }
        }

        [DisplayName("Evaluation Conclusion Description"), Expression("jEvaluationConclusion.[Description]")]
        public String EvaluationConclusionDescription
        {
            get { return Fields.EvaluationConclusionDescription[this]; }
            set { Fields.EvaluationConclusionDescription[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ProcParticipantId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.VendorId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProcParticipantRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field ProcParticipantId;
            public Int64Field ProcurementId;
            public Int32Field SequenceNo;
            public StringField VendorId;
            public StringField PriceDocumentFile;
            public StringField PriceDocumentName;
            public StringField TechSpecDocFile;
            public StringField TechSpecDocName;
            public StringField SupportingLetterFile;
            public StringField SupportingLetterName;
            public StringField CatalogFile;
            public StringField CatalogName;
            public BooleanField SubmitDocTnc;
            public DateTimeField SubmitDocTncDate;
            public BooleanField AdminDocExists;
            public BooleanField TechSpecDocExists;
            public BooleanField SupportingLetterExists;
            public BooleanField CatalogExists;
            public StringField OpeningDocDesc;
            public Int32Field AdminDocAtk;
            public Int32Field TechSpecDocAtk;
            public Int32Field SupportingLetterAtk;
            public Int32Field CatalogAtk;
            public StringField EvaluationDesc;
            public StringField ClarificationRequest;
            public Int32Field EvaluationConclusionId;
            public StringField ClarificationOffer;
            public StringField ClarificationResult;
            public StringField Source;
            public DateTimeField F5ParticipantSubmitDate;
            public StringField F5ParticipantSubmitBy;
            public DecimalField FinalBidPrice;
            public BooleanField SubmitObjection;
            public StringField ObjectionDescription;
            public DateTimeField F15ParticipantSubmitDate;
            public StringField F15ParticipantSubmitBy;
            public BooleanField Invitation;

            public StringField ProcurementProcurementTypeId;
            public StringField ProcurementStatus;
            public StringField ProcurementCollectiveNumber;
            public StringField ProcurementTitle;
            public StringField ProcurementClassification;
            public StringField ProcurementQualification;
            public StringField ProcurementRequestedBy;
            public StringField ProcurementRequestorPosition;
            public StringField ProcurementApprovedBy;
            public StringField ProcurementApproverPosition;
            public StringField ProcurementSapBidderListCreatedBy;
            public DateTimeField ProcurementSapBidderListCreatedDate;
            public StringField ProcurementCreatedBy;
            public DateTimeField ProcurementCreatedDate;
            public DecimalField ProcurementGuaranteePercentage;
            public Int32Field ProcurementOfficeAddress;
            public Int32Field ProcurementProcValueRangeId;
            public Int32Field ProcurementCommitteeTypeId;
            public BooleanField ProcurementPerformanceGuaranteeRequired;
            public Int32Field ProcurementTenderPeriod;
            public Int32Field ProcurementDeliveryTime;
            public Int32Field ProcurementDestinationId;
            public Int32Field ProcurementContractTypeId;
            public StringField ProcurementCurrencyId;
            public Int32Field ProcurementDocSubmitMethodId;
            public BooleanField ProcurementAanwijzingExists;
            public DateTimeField ProcurementAanwijzingDate;
            public DateTimeField ProcurementAanwijzingClosingDate;
            public StringField ProcurementAanwijzingLocation;
            public StringField ProcurementAanwijzingClosingLocation;
            public StringField ProcurementAanwijzingSecretary;
            public StringField ProcurementTechnicalExplanation;
            public StringField ProcurementAdministrativeExplanation;
            public StringField ProcurementOtherExplanation;
            public StringField ProcurementAanwijzingSummary;
            public BooleanField ProcurementFieldSurveyExists;
            public StringField ProcurementFieldSurveyAddress;
            public StringField ProcurementItbDocumentFile;
            public StringField ProcurementItbDocumentName;
            public StringField ProcurementRksDocumentFile;
            public StringField ProcurementRksDocumentName;
            public DateTimeField ProcurementTenderDocSubmitOpenDate;
            public DateTimeField ProcurementTenderDocSubmitCloseDate;
            public StringField ProcurementOrderTypeId;
            public StringField ProcurementPurchDocNum;
            public DateTimeField ProcurementRfqDate;
            public DateTimeField ProcurementQuotationDeadline;
            public StringField ProcurementPurchGroup;
            public StringField ProcurementPrNo;
            public StringField ProcurementAuthPersonName;
            public StringField ProcurementAuthPosition;
            public StringField ProcurementHeaderText;
            public StringField ProcurementHeaderNote;
            public StringField ProcurementWorkDescription;
            public StringField ProcurementBankKey;
            public StringField ProcurementPoCover;
            public StringField ProcurementDeliveryAddress;
            public StringField ProcurementToPTargVal;
            public StringField ProcurementYourReference;
            public StringField ProcurementOurReference;
            public StringField ProcurementSalesPerson;
            public StringField ProcurementTelephone;
            public DateTimeField ProcurementValidityStart;
            public DateTimeField ProcurementValidityEnd;
            public DecimalField ProcurementItemInterval;
            public DecimalField ProcurementSubItemInterval;
            public DateTimeField ProcurementWarranty;
            public StringField ProcurementLanguage;
            public DateTimeField ProcurementEvaluationClosingPriceDate;
            public BooleanField ProcurementReviewOeRequired;
            public BooleanField ProcurementProcAgreement;
            public DateTimeField ProcurementProcAgreementDate;
            public BooleanField ProcurementProcAsRequired;
            public BooleanField ProcurementProcAsApproved;
            public DateTimeField ProcurementProcAsApprovedDate;
            public StringField ProcurementProcAsDesc;
            public StringField ProcurementFinalConclusionDesc;
            public DateTimeField ProcurementWinnerNominationDate;
            public DateTimeField ProcurementObjectionCloseDate;
            public StringField ProcurementPoDocName;
            public StringField ProcurementTemporaryPic;
            public StringField ProcurementPoNumber;
            public StringField ProcurementPoDocFile;
            public DateTimeField ProcurementF1SubmitDate;
            public StringField ProcurementF1SubmitBy;
            public DateTimeField ProcurementF2SubmitDate;
            public StringField ProcurementF2SubmitBy;
            public DateTimeField ProcurementF3SubmitDate;
            public StringField ProcurementF3SubmitBy;
            public DateTimeField ProcurementF31SubmitDate;
            public StringField ProcurementF31SubmitBy;
            public DateTimeField ProcurementF4SubmitDate;
            public StringField ProcurementF4SubmitBy;
            public DateTimeField ProcurementF5SubmitDate;
            public StringField ProcurementF5SubmitBy;
            public DateTimeField ProcurementF6SubmitDate;
            public StringField ProcurementF6SubmitBy;
            public DateTimeField ProcurementF7SubmitDate;
            public StringField ProcurementF7SubmitBy;
            public DateTimeField ProcurementF8SubmitDate;
            public StringField ProcurementF8SubmitBy;
            public DateTimeField ProcurementF9SubmitDate;
            public StringField ProcurementF9SubmitBy;
            public DateTimeField ProcurementF10SubmitDate;
            public StringField ProcurementF10SubmitBy;
            public DateTimeField ProcurementF11SubmitDate;
            public StringField ProcurementF11SubmitBy;
            public DateTimeField ProcurementF12SubmitDate;
            public StringField ProcurementF12SubmitBy;
            public DateTimeField ProcurementF13SubmitDate;
            public StringField ProcurementF13SubmitBy;
            public DateTimeField ProcurementF14SubmitDate;
            public StringField ProcurementF14SubmitBy;
            public DateTimeField ProcurementF15SubmitDate;
            public StringField ProcurementF15SubmitBy;
            public DateTimeField ProcurementF16SubmitDate;
            public StringField ProcurementF16SubmitBy;
            public DateTimeField ProcurementF17SubmitDate;
            public StringField ProcurementF17SubmitBy;
            public DateTimeField ProcurementF19SubmitDate;
            public StringField ProcurementF19SubmitBy;
            public StringField ProcurementProcurementMethodId;
            public StringField ProcurementDistrict;
            public StringField ProcurementCsms;
            public StringField ProcurementMinScore;

            public StringField AdminDocAtkName;
            public StringField AdminDocAtkDescription;

            public StringField TechSpecDocAtkName;
            public StringField TechSpecDocAtkDescription;

            public StringField SupportingLetterAtkName;
            public StringField SupportingLetterAtkDescription;

            public StringField CatalogAtkName;
            public StringField CatalogAtkDescription;

            public StringField EvaluationConclusionName;
            public StringField EvaluationConclusionDescription;
        }
    }
}
