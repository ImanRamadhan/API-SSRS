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
    using _Ext;

    [ConnectionKey("Default"), TableName("[dbo].[ProcParticipantItem]")]
    [DisplayName("Bidder Item"), InstanceName("Bidder Item"), TwoLevelCached]
    [ReadPermission("Procurement:ProcParticipantItem:Read")]
    [InsertPermission("Procurement:ProcParticipantItem:Insert")]
    [UpdatePermission("Procurement:ProcParticipantItem:Update")]
    [DeletePermission("Procurement:ProcParticipantItem:Delete")]
    [LookupScript]
    public sealed class ProcParticipantItemRow : Row, IIdRow, INameRow
    {

        [DisplayName("Bidder Item Id"), Identity]
        [MinSelectLevel(SelectLevel.List)]

        [EditLink, QuickSearch]
        public Int64? ProcParticipantItemId { get { return Fields.ProcParticipantItemId[this]; } set { Fields.ProcParticipantItemId[this] = value; } }
        public partial class RowFields { public Int64Field ProcParticipantItemId; }

        [DisplayName("Bidder"), ForeignKey("[dbo].[ProcParticipant]", "ProcParticipantId"), LeftJoin("jProcParticipant"), LookupInclude]
        [EditLink, QuickSearch]
        public Int64? ProcParticipantId { get { return Fields.ProcParticipantId[this]; } set { Fields.ProcParticipantId[this] = value; } }
        public partial class RowFields { public Int64Field ProcParticipantId; }

        [DisplayName("Procurement"), ForeignKey("[dbo].[Procurement]", "ProcurementId"), LeftJoin("jProcurement"), TextualField("ProcurementProcurementTypeId")]
        [EditLink, QuickSearch]
        public Int64? ProcurementId { get { return Fields.ProcurementId[this]; } set { Fields.ProcurementId[this] = value; } }
        public partial class RowFields { public Int64Field ProcurementId; }

        [DisplayName("Rfq Item"), Column("RFQItemId"), ForeignKey("[dbo].[RFQItem]", "RFQItemId"), LeftJoin("jRfqItem"), TextualField("RfqItemPurchasingDocument")]
        [EditLink, QuickSearch]
        public Int64? RfqItemId { get { return Fields.RfqItemId[this]; } set { Fields.RfqItemId[this] = value; } }
        public partial class RowFields { public Int64Field RfqItemId; }


        [DisplayName("Bid Price"), Size(19), Scale(0)]
        [DisplayFormat("#,##0.00")]
        public Decimal? BidPrice { get { return Fields.BidPrice[this]; } set { Fields.BidPrice[this] = value; } }
        public partial class RowFields { public DecimalField BidPrice; }
        
        [DisplayName("Bid Price Vs Oe"), Expression("([BidPrice] - [OwnerEstimate])") , Column("BidPriceVsOE"), Size(19), Scale(0)]
        [DisplayFormat("#,##0.00")]
        public Decimal? BidPriceVsOe { get { return Fields.BidPriceVsOe[this]; } set { Fields.BidPriceVsOe[this] = value; } }
        public partial class RowFields { public DecimalField BidPriceVsOe; }

        [DisplayName("Bid Price Vs Oe Percentage"), Expression("((([BidPrice] - [OwnerEstimate]) / NULLIF([OwnerEstimate], 0)) * 100)"), Column("BidPriceVsOEPercentage"), Size(19), Scale(0)]
        [DisplayFormat("#,##0.00%")]
        public Decimal? BidPriceVsOePercentage { get { return Fields.BidPriceVsOePercentage[this]; } set { Fields.BidPriceVsOePercentage[this] = value; } }
        public partial class RowFields { public DecimalField BidPriceVsOePercentage; }

        [DisplayName("Rank")]
        [EditLink, QuickSearch]
        public Int32? Rank { get { return Fields.Rank[this]; } set { Fields.Rank[this] = value; } }
        public partial class RowFields { public Int32Field Rank; }

        [DisplayName("Evaluation Description")]
        [TextAreaEditor]
        [EditLink, QuickSearch]
        public String EvaluationDescription { get { return Fields.EvaluationDescription[this]; } set { Fields.EvaluationDescription[this] = value; } }
        public partial class RowFields { public StringField EvaluationDescription; }

        [DisplayName("Negotiation Price"), Size(19), Scale(0)]
        public Decimal? NegotiationPrice { get { return Fields.NegotiationPrice[this]; } set { Fields.NegotiationPrice[this] = value; } }
        public partial class RowFields { public DecimalField NegotiationPrice; }

        [DisplayName("Np Vs Oe"), Expression("([NegotiationPrice] - [OwnerEstimateReview])"), Column("NPVsOE"), Size(19), Scale(0)]
        public Decimal? NpVsOe { get { return Fields.NpVsOe[this]; } set { Fields.NpVsOe[this] = value; } }
        public partial class RowFields { public DecimalField NpVsOe; }

        [DisplayName("Np Vs Oe Percentage"), Expression("((([NegotiationPrice] - [OwnerEstimateReview]) / NULLIF([OwnerEstimateReview],0)) * 100)"), Column("NPVsOEPercentage"), Size(19), Scale(0)]
        [DisplayFormat("#,##0.00%")]
        public Decimal? NpVsOePercentage { get { return Fields.NpVsOePercentage[this]; } set { Fields.NpVsOePercentage[this] = value; } }
        public partial class RowFields { public DecimalField NpVsOePercentage; }

        [DisplayName("Negotiation Rank")]
        [EditLink, QuickSearch]
        public Int32? NegotiationRank { get { return Fields.NegotiationRank[this]; } set { Fields.NegotiationRank[this] = value; } }
        public partial class RowFields { public Int32Field NegotiationRank; }

        [DisplayName("Negotiation Desc")]
        [TextAreaEditor]
        [EditLink, QuickSearch]
        public String NegotiationDesc { get { return Fields.NegotiationDesc[this]; } set { Fields.NegotiationDesc[this] = value; } }
        public partial class RowFields { public StringField NegotiationDesc; }

        [DisplayName("Propose Disclaimer")]
        [EditLink, QuickSearch]
        public Boolean? ProposeDisclaimer { get { return Fields.ProposeDisclaimer[this]; } set { Fields.ProposeDisclaimer[this] = value; } }
        public partial class RowFields { public BooleanField ProposeDisclaimer; }

        [DisplayName("Disclaimer Desc")]
        [EditLink, QuickSearch]
        public String DisclaimerDesc { get { return Fields.DisclaimerDesc[this]; } set { Fields.DisclaimerDesc[this] = value; } }
        public partial class RowFields { public StringField DisclaimerDesc; }

        [DisplayName("Evaluation Conclusion Item"), ForeignKey("[dbo].[EvaluationConclusionItem]", "EvaluationConclusionItemId"), LeftJoin("jEvaluationConclusionItem"), TextualField("EvaluationConclusionItemName"), LookupInclude]
        [LookupEditor(typeof(EvaluationConclusionItemRow))]
        [MinSelectLevel(SelectLevel.List)]
        [EditLink, QuickSearch]
        public Int32? EvaluationConclusionItemId { get { return Fields.EvaluationConclusionItemId[this]; } set { Fields.EvaluationConclusionItemId[this] = value; } }
        public partial class RowFields { public Int32Field EvaluationConclusionItemId; }

        #region Foreign Fields


        [DisplayName("Bidder Procurement Id"), Expression("jProcParticipant.[ProcurementId]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public Int64? ProcParticipantProcurementId { get { return Fields.ProcParticipantProcurementId[this]; } set { Fields.ProcParticipantProcurementId[this] = value; } }
        public partial class RowFields { public Int64Field ProcParticipantProcurementId; }

        [DisplayName("Bidder Sequence No"), Expression("jProcParticipant.[SequenceNo]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public Int32? ProcParticipantSequenceNo { get { return Fields.ProcParticipantSequenceNo[this]; } set { Fields.ProcParticipantSequenceNo[this] = value; } }
        public partial class RowFields { public Int32Field ProcParticipantSequenceNo; }

        [DisplayName("Bidder Vendor Id"), Expression("jProcParticipant.[VendorId]"), ReadOnly(true)]
        [MinSelectLevel(SelectLevel.List), LookupInclude]
        [EditLink, QuickSearch]
        public String ProcParticipantVendorId { get { return Fields.ProcParticipantVendorId[this]; } set { Fields.ProcParticipantVendorId[this] = value; } }
        public partial class RowFields { public StringField ProcParticipantVendorId; }

        [DisplayName("Vendor Id"), Expression("jProcParticipant.[VendorId]"), ForeignKey("[dbo].Vendor", "VendorId"), LeftJoin("jVendor"), ReadOnly(true)]
        [MinSelectLevel(SelectLevel.List)]
        [EditLink, QuickSearch]
        public String VendorId { get { return Fields.VendorId[this]; } set { Fields.VendorId[this] = value; } }
        public partial class RowFields { public StringField VendorId; }

        [DisplayName("Vendor Name"), Expression("jVendor.[Name]"), ReadOnly(true)]
        [MinSelectLevel(SelectLevel.List), LookupInclude]
        [EditLink, QuickSearch]
        public String VendorName { get { return Fields.VendorName[this]; } set { Fields.VendorName[this] = value; } }
        public partial class RowFields { public StringField VendorName; }



        [DisplayName("Bidder Price Document File"), Expression("jProcParticipant.[PriceDocumentFile]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcParticipantPriceDocumentFile { get { return Fields.ProcParticipantPriceDocumentFile[this]; } set { Fields.ProcParticipantPriceDocumentFile[this] = value; } }
        public partial class RowFields { public StringField ProcParticipantPriceDocumentFile; }

        [DisplayName("Bidder Price Document Name"), Expression("jProcParticipant.[PriceDocumentName]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcParticipantPriceDocumentName { get { return Fields.ProcParticipantPriceDocumentName[this]; } set { Fields.ProcParticipantPriceDocumentName[this] = value; } }
        public partial class RowFields { public StringField ProcParticipantPriceDocumentName; }

        [DisplayName("Bidder Tech Spec Doc File"), Expression("jProcParticipant.[TechSpecDocFile]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcParticipantTechSpecDocFile { get { return Fields.ProcParticipantTechSpecDocFile[this]; } set { Fields.ProcParticipantTechSpecDocFile[this] = value; } }
        public partial class RowFields { public StringField ProcParticipantTechSpecDocFile; }

        [DisplayName("Bidder Tech Spec Doc Name"), Expression("jProcParticipant.[TechSpecDocName]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcParticipantTechSpecDocName { get { return Fields.ProcParticipantTechSpecDocName[this]; } set { Fields.ProcParticipantTechSpecDocName[this] = value; } }
        public partial class RowFields { public StringField ProcParticipantTechSpecDocName; }

        [DisplayName("Bidder Supporting Letter File"), Expression("jProcParticipant.[SupportingLetterFile]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcParticipantSupportingLetterFile { get { return Fields.ProcParticipantSupportingLetterFile[this]; } set { Fields.ProcParticipantSupportingLetterFile[this] = value; } }
        public partial class RowFields { public StringField ProcParticipantSupportingLetterFile; }

        [DisplayName("Bidder Supporting Letter Name"), Expression("jProcParticipant.[SupportingLetterName]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcParticipantSupportingLetterName { get { return Fields.ProcParticipantSupportingLetterName[this]; } set { Fields.ProcParticipantSupportingLetterName[this] = value; } }
        public partial class RowFields { public StringField ProcParticipantSupportingLetterName; }

        [DisplayName("Bidder Catalog File"), Expression("jProcParticipant.[CatalogFile]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcParticipantCatalogFile { get { return Fields.ProcParticipantCatalogFile[this]; } set { Fields.ProcParticipantCatalogFile[this] = value; } }
        public partial class RowFields { public StringField ProcParticipantCatalogFile; }

        [DisplayName("Bidder Catalog Name"), Expression("jProcParticipant.[CatalogName]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcParticipantCatalogName { get { return Fields.ProcParticipantCatalogName[this]; } set { Fields.ProcParticipantCatalogName[this] = value; } }
        public partial class RowFields { public StringField ProcParticipantCatalogName; }

        [DisplayName("Bidder Submit Doc Tnc"), Expression("jProcParticipant.[SubmitDocTNC]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public Boolean? ProcParticipantSubmitDocTnc { get { return Fields.ProcParticipantSubmitDocTnc[this]; } set { Fields.ProcParticipantSubmitDocTnc[this] = value; } }
        public partial class RowFields { public BooleanField ProcParticipantSubmitDocTnc; }

        [DisplayName("Bidder Submit Doc Tnc Date"), Expression("jProcParticipant.[SubmitDocTNCDate]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public DateTime? ProcParticipantSubmitDocTncDate { get { return Fields.ProcParticipantSubmitDocTncDate[this]; } set { Fields.ProcParticipantSubmitDocTncDate[this] = value; } }
        public partial class RowFields { public DateTimeField ProcParticipantSubmitDocTncDate; }

        [DisplayName("Bidder Admin Doc Exists"), Expression("jProcParticipant.[AdminDocExists]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public Boolean? ProcParticipantAdminDocExists { get { return Fields.ProcParticipantAdminDocExists[this]; } set { Fields.ProcParticipantAdminDocExists[this] = value; } }
        public partial class RowFields { public BooleanField ProcParticipantAdminDocExists; }

        [DisplayName("Bidder Tech Spec Doc Exists"), Expression("jProcParticipant.[TechSpecDocExists]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public Boolean? ProcParticipantTechSpecDocExists { get { return Fields.ProcParticipantTechSpecDocExists[this]; } set { Fields.ProcParticipantTechSpecDocExists[this] = value; } }
        public partial class RowFields { public BooleanField ProcParticipantTechSpecDocExists; }

        [DisplayName("Bidder Supporting Letter Exists"), Expression("jProcParticipant.[SupportingLetterExists]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public Boolean? ProcParticipantSupportingLetterExists { get { return Fields.ProcParticipantSupportingLetterExists[this]; } set { Fields.ProcParticipantSupportingLetterExists[this] = value; } }
        public partial class RowFields { public BooleanField ProcParticipantSupportingLetterExists; }

        [DisplayName("Bidder Catalog Exists"), Expression("jProcParticipant.[CatalogExists]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public Boolean? ProcParticipantCatalogExists { get { return Fields.ProcParticipantCatalogExists[this]; } set { Fields.ProcParticipantCatalogExists[this] = value; } }
        public partial class RowFields { public BooleanField ProcParticipantCatalogExists; }

        [DisplayName("Bidder Opening Doc Desc"), Expression("jProcParticipant.[OpeningDocDesc]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcParticipantOpeningDocDesc { get { return Fields.ProcParticipantOpeningDocDesc[this]; } set { Fields.ProcParticipantOpeningDocDesc[this] = value; } }
        public partial class RowFields { public StringField ProcParticipantOpeningDocDesc; }

        [DisplayName("Bidder Admin Doc Atk"), Expression("jProcParticipant.[AdminDocATK]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public Int32? ProcParticipantAdminDocAtk { get { return Fields.ProcParticipantAdminDocAtk[this]; } set { Fields.ProcParticipantAdminDocAtk[this] = value; } }
        public partial class RowFields { public Int32Field ProcParticipantAdminDocAtk; }

        [DisplayName("Bidder Tech Spec Doc Atk"), Expression("jProcParticipant.[TechSpecDocATK]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public Int32? ProcParticipantTechSpecDocAtk { get { return Fields.ProcParticipantTechSpecDocAtk[this]; } set { Fields.ProcParticipantTechSpecDocAtk[this] = value; } }
        public partial class RowFields { public Int32Field ProcParticipantTechSpecDocAtk; }

        [DisplayName("Bidder Supporting Letter Atk"), Expression("jProcParticipant.[SupportingLetterATK]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public Int32? ProcParticipantSupportingLetterAtk { get { return Fields.ProcParticipantSupportingLetterAtk[this]; } set { Fields.ProcParticipantSupportingLetterAtk[this] = value; } }
        public partial class RowFields { public Int32Field ProcParticipantSupportingLetterAtk; }

        [DisplayName("Bidder Catalog Atk"), Expression("jProcParticipant.[CatalogATK]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public Int32? ProcParticipantCatalogAtk { get { return Fields.ProcParticipantCatalogAtk[this]; } set { Fields.ProcParticipantCatalogAtk[this] = value; } }
        public partial class RowFields { public Int32Field ProcParticipantCatalogAtk; }

        [DisplayName("Bidder Evaluation Desc"), Expression("jProcParticipant.[EvaluationDesc]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcParticipantEvaluationDesc { get { return Fields.ProcParticipantEvaluationDesc[this]; } set { Fields.ProcParticipantEvaluationDesc[this] = value; } }
        public partial class RowFields { public StringField ProcParticipantEvaluationDesc; }

        [DisplayName("Bidder Clarification Request"), Expression("jProcParticipant.[ClarificationRequest]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcParticipantClarificationRequest { get { return Fields.ProcParticipantClarificationRequest[this]; } set { Fields.ProcParticipantClarificationRequest[this] = value; } }
        public partial class RowFields { public StringField ProcParticipantClarificationRequest; }

        [DisplayName("Bidder Evaluation Conclusion Id"), Expression("jProcParticipant.[EvaluationConclusionId]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public Int32? ProcParticipantEvaluationConclusionId { get { return Fields.ProcParticipantEvaluationConclusionId[this]; } set { Fields.ProcParticipantEvaluationConclusionId[this] = value; } }
        public partial class RowFields { public Int32Field ProcParticipantEvaluationConclusionId; }

        [DisplayName("Bidder Clarification Offer"), Expression("jProcParticipant.[ClarificationOffer]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcParticipantClarificationOffer { get { return Fields.ProcParticipantClarificationOffer[this]; } set { Fields.ProcParticipantClarificationOffer[this] = value; } }
        public partial class RowFields { public StringField ProcParticipantClarificationOffer; }

        [DisplayName("Bidder Clarification Result"), Expression("jProcParticipant.[ClarificationResult]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcParticipantClarificationResult { get { return Fields.ProcParticipantClarificationResult[this]; } set { Fields.ProcParticipantClarificationResult[this] = value; } }
        public partial class RowFields { public StringField ProcParticipantClarificationResult; }

        [DisplayName("Bidder Source"), Expression("jProcParticipant.[Source]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcParticipantSource { get { return Fields.ProcParticipantSource[this]; } set { Fields.ProcParticipantSource[this] = value; } }
        public partial class RowFields { public StringField ProcParticipantSource; }

        [DisplayName("Bidder F5 Participant Submit Date"), Expression("jProcParticipant.[F5ParticipantSubmitDate]"), ReadOnly(true)]
        [MinSelectLevel(SelectLevel.List)]
        [DateTimeFormatter(DisplayFormat = "dd/MM/yyyy HH:mm:ss")]
        [DateTimeEditor(IntervalMinutes = 1)]
        [EditLink, QuickSearch]
        public DateTime? F5ParticipantSubmitDate { get { return Fields.F5ParticipantSubmitDate[this]; } set { Fields.F5ParticipantSubmitDate[this] = value; } }
        public partial class RowFields { public DateTimeField F5ParticipantSubmitDate; }

        [DisplayName("Bidder F5 Participant Submit By"), Expression("jProcParticipant.[F5ParticipantSubmitBy]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String F5ParticipantSubmitBy { get { return Fields.F5ParticipantSubmitBy[this]; } set { Fields.F5ParticipantSubmitBy[this] = value; } }
        public partial class RowFields { public StringField F5ParticipantSubmitBy; }



        [DisplayName("Procurement Procurement Type Id"), Expression("jProcurement.[ProcurementTypeId]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementProcurementTypeId { get { return Fields.ProcurementProcurementTypeId[this]; } set { Fields.ProcurementProcurementTypeId[this] = value; } }
        public partial class RowFields { public StringField ProcurementProcurementTypeId; }

        [DisplayName("Procurement Status"), Expression("jProcurement.[Status]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementStatus { get { return Fields.ProcurementStatus[this]; } set { Fields.ProcurementStatus[this] = value; } }
        public partial class RowFields { public StringField ProcurementStatus; }

        [DisplayName("Procurement Collective Number"), Expression("jProcurement.[CollectiveNumber]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementCollectiveNumber { get { return Fields.ProcurementCollectiveNumber[this]; } set { Fields.ProcurementCollectiveNumber[this] = value; } }
        public partial class RowFields { public StringField ProcurementCollectiveNumber; }

        [DisplayName("Procurement Title"), Expression("jProcurement.[Title]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementTitle { get { return Fields.ProcurementTitle[this]; } set { Fields.ProcurementTitle[this] = value; } }
        public partial class RowFields { public StringField ProcurementTitle; }

        [DisplayName("Procurement Classification"), Expression("jProcurement.[Classification]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementClassification { get { return Fields.ProcurementClassification[this]; } set { Fields.ProcurementClassification[this] = value; } }
        public partial class RowFields { public StringField ProcurementClassification; }

        [DisplayName("Procurement Qualification"), Expression("jProcurement.[Qualification]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementQualification { get { return Fields.ProcurementQualification[this]; } set { Fields.ProcurementQualification[this] = value; } }
        public partial class RowFields { public StringField ProcurementQualification; }

        [DisplayName("Procurement Requested By"), Expression("jProcurement.[RequestedBy]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementRequestedBy { get { return Fields.ProcurementRequestedBy[this]; } set { Fields.ProcurementRequestedBy[this] = value; } }
        public partial class RowFields { public StringField ProcurementRequestedBy; }

        [DisplayName("Procurement Requestor Position"), Expression("jProcurement.[RequestorPosition]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementRequestorPosition { get { return Fields.ProcurementRequestorPosition[this]; } set { Fields.ProcurementRequestorPosition[this] = value; } }
        public partial class RowFields { public StringField ProcurementRequestorPosition; }

        [DisplayName("Procurement Approved By"), Expression("jProcurement.[ApprovedBy]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementApprovedBy { get { return Fields.ProcurementApprovedBy[this]; } set { Fields.ProcurementApprovedBy[this] = value; } }
        public partial class RowFields { public StringField ProcurementApprovedBy; }

        [DisplayName("Procurement Approver Position"), Expression("jProcurement.[ApproverPosition]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementApproverPosition { get { return Fields.ProcurementApproverPosition[this]; } set { Fields.ProcurementApproverPosition[this] = value; } }
        public partial class RowFields { public StringField ProcurementApproverPosition; }

        [DisplayName("Procurement Sap Bidder List Created By"), Expression("jProcurement.[SAPBidderListCreatedBy]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementSapBidderListCreatedBy { get { return Fields.ProcurementSapBidderListCreatedBy[this]; } set { Fields.ProcurementSapBidderListCreatedBy[this] = value; } }
        public partial class RowFields { public StringField ProcurementSapBidderListCreatedBy; }

        [DisplayName("Procurement Sap Bidder List Created Date"), Expression("jProcurement.[SAPBidderListCreatedDate]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public DateTime? ProcurementSapBidderListCreatedDate { get { return Fields.ProcurementSapBidderListCreatedDate[this]; } set { Fields.ProcurementSapBidderListCreatedDate[this] = value; } }
        public partial class RowFields { public DateTimeField ProcurementSapBidderListCreatedDate; }

        [DisplayName("Procurement Created By"), Expression("jProcurement.[CreatedBy]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementCreatedBy { get { return Fields.ProcurementCreatedBy[this]; } set { Fields.ProcurementCreatedBy[this] = value; } }
        public partial class RowFields { public StringField ProcurementCreatedBy; }

        [DisplayName("Procurement Created Date"), Expression("jProcurement.[CreatedDate]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public DateTime? ProcurementCreatedDate { get { return Fields.ProcurementCreatedDate[this]; } set { Fields.ProcurementCreatedDate[this] = value; } }
        public partial class RowFields { public DateTimeField ProcurementCreatedDate; }

        [DisplayName("Procurement Guarantee Percentage"), Expression("jProcurement.[GuaranteePercentage]"), ReadOnly(true)]
        public Decimal? ProcurementGuaranteePercentage { get { return Fields.ProcurementGuaranteePercentage[this]; } set { Fields.ProcurementGuaranteePercentage[this] = value; } }
        public partial class RowFields { public DecimalField ProcurementGuaranteePercentage; }

        [DisplayName("Procurement Office Address"), Expression("jProcurement.[OfficeAddress]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public Int32? ProcurementOfficeAddress { get { return Fields.ProcurementOfficeAddress[this]; } set { Fields.ProcurementOfficeAddress[this] = value; } }
        public partial class RowFields { public Int32Field ProcurementOfficeAddress; }

        [DisplayName("Procurement Proc Value Range Id"), Expression("jProcurement.[ProcValueRangeId]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public Int32? ProcurementProcValueRangeId { get { return Fields.ProcurementProcValueRangeId[this]; } set { Fields.ProcurementProcValueRangeId[this] = value; } }
        public partial class RowFields { public Int32Field ProcurementProcValueRangeId; }

        [DisplayName("Procurement Committee Type Id"), Expression("jProcurement.[CommitteeTypeId]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public Int32? ProcurementCommitteeTypeId { get { return Fields.ProcurementCommitteeTypeId[this]; } set { Fields.ProcurementCommitteeTypeId[this] = value; } }
        public partial class RowFields { public Int32Field ProcurementCommitteeTypeId; }

        [DisplayName("Procurement Performance Guarantee Required"), Expression("jProcurement.[PerformanceGuaranteeRequired]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public Boolean? ProcurementPerformanceGuaranteeRequired { get { return Fields.ProcurementPerformanceGuaranteeRequired[this]; } set { Fields.ProcurementPerformanceGuaranteeRequired[this] = value; } }
        public partial class RowFields { public BooleanField ProcurementPerformanceGuaranteeRequired; }

        [DisplayName("Procurement Tender Period"), Expression("jProcurement.[TenderPeriod]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public Int32? ProcurementTenderPeriod { get { return Fields.ProcurementTenderPeriod[this]; } set { Fields.ProcurementTenderPeriod[this] = value; } }
        public partial class RowFields { public Int32Field ProcurementTenderPeriod; }

        [DisplayName("Procurement Delivery Time"), Expression("jProcurement.[DeliveryTime]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public Int32? ProcurementDeliveryTime { get { return Fields.ProcurementDeliveryTime[this]; } set { Fields.ProcurementDeliveryTime[this] = value; } }
        public partial class RowFields { public Int32Field ProcurementDeliveryTime; }

        [DisplayName("Procurement Destination Id"), Expression("jProcurement.[DestinationId]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public Int32? ProcurementDestinationId { get { return Fields.ProcurementDestinationId[this]; } set { Fields.ProcurementDestinationId[this] = value; } }
        public partial class RowFields { public Int32Field ProcurementDestinationId; }

        [DisplayName("Procurement Contract Type Id"), Expression("jProcurement.[ContractTypeId]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public Int32? ProcurementContractTypeId { get { return Fields.ProcurementContractTypeId[this]; } set { Fields.ProcurementContractTypeId[this] = value; } }
        public partial class RowFields { public Int32Field ProcurementContractTypeId; }

        [DisplayName("Procurement Currency Id"), Expression("jProcurement.[CurrencyId]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementCurrencyId { get { return Fields.ProcurementCurrencyId[this]; } set { Fields.ProcurementCurrencyId[this] = value; } }
        public partial class RowFields { public StringField ProcurementCurrencyId; }

        [DisplayName("Procurement Doc Submit Method Id"), Expression("jProcurement.[DocSubmitMethodId]"), ReadOnly(true)]
        [MinSelectLevel(SelectLevel.List)]
        [EditLink, QuickSearch]
        public Int32? ProcurementDocSubmitMethodId { get { return Fields.ProcurementDocSubmitMethodId[this]; } set { Fields.ProcurementDocSubmitMethodId[this] = value; } }
        public partial class RowFields { public Int32Field ProcurementDocSubmitMethodId; }

        [DisplayName("Procurement Aanwijzing Exists"), Expression("jProcurement.[AanwijzingExists]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public Boolean? ProcurementAanwijzingExists { get { return Fields.ProcurementAanwijzingExists[this]; } set { Fields.ProcurementAanwijzingExists[this] = value; } }
        public partial class RowFields { public BooleanField ProcurementAanwijzingExists; }

        [DisplayName("Procurement Aanwijzing Date"), Expression("jProcurement.[AanwijzingDate]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public DateTime? ProcurementAanwijzingDate { get { return Fields.ProcurementAanwijzingDate[this]; } set { Fields.ProcurementAanwijzingDate[this] = value; } }
        public partial class RowFields { public DateTimeField ProcurementAanwijzingDate; }

        [DisplayName("Procurement Aanwijzing Closing Date"), Expression("jProcurement.[AanwijzingClosingDate]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public DateTime? ProcurementAanwijzingClosingDate { get { return Fields.ProcurementAanwijzingClosingDate[this]; } set { Fields.ProcurementAanwijzingClosingDate[this] = value; } }
        public partial class RowFields { public DateTimeField ProcurementAanwijzingClosingDate; }

        [DisplayName("Procurement Aanwijzing Location"), Expression("jProcurement.[AanwijzingLocation]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementAanwijzingLocation { get { return Fields.ProcurementAanwijzingLocation[this]; } set { Fields.ProcurementAanwijzingLocation[this] = value; } }
        public partial class RowFields { public StringField ProcurementAanwijzingLocation; }

        [DisplayName("Procurement Aanwijzing Closing Location"), Expression("jProcurement.[AanwijzingClosingLocation]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementAanwijzingClosingLocation { get { return Fields.ProcurementAanwijzingClosingLocation[this]; } set { Fields.ProcurementAanwijzingClosingLocation[this] = value; } }
        public partial class RowFields { public StringField ProcurementAanwijzingClosingLocation; }

        [DisplayName("Procurement Aanwijzing Secretary"), Expression("jProcurement.[AanwijzingSecretary]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementAanwijzingSecretary { get { return Fields.ProcurementAanwijzingSecretary[this]; } set { Fields.ProcurementAanwijzingSecretary[this] = value; } }
        public partial class RowFields { public StringField ProcurementAanwijzingSecretary; }

        [DisplayName("Procurement Aanwijzing Summary"), Expression("jProcurement.[AanwijzingSummary]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementAanwijzingSummary { get { return Fields.ProcurementAanwijzingSummary[this]; } set { Fields.ProcurementAanwijzingSummary[this] = value; } }
        public partial class RowFields { public StringField ProcurementAanwijzingSummary; }

        [DisplayName("Procurement Field Survey Exists"), Expression("jProcurement.[FieldSurveyExists]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public Boolean? ProcurementFieldSurveyExists { get { return Fields.ProcurementFieldSurveyExists[this]; } set { Fields.ProcurementFieldSurveyExists[this] = value; } }
        public partial class RowFields { public BooleanField ProcurementFieldSurveyExists; }

        [DisplayName("Procurement Field Survey Address"), Expression("jProcurement.[FieldSurveyAddress]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementFieldSurveyAddress { get { return Fields.ProcurementFieldSurveyAddress[this]; } set { Fields.ProcurementFieldSurveyAddress[this] = value; } }
        public partial class RowFields { public StringField ProcurementFieldSurveyAddress; }

        [DisplayName("Procurement Itb Document File"), Expression("jProcurement.[ITBDocumentFile]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementItbDocumentFile { get { return Fields.ProcurementItbDocumentFile[this]; } set { Fields.ProcurementItbDocumentFile[this] = value; } }
        public partial class RowFields { public StringField ProcurementItbDocumentFile; }

        [DisplayName("Procurement Itb Document Name"), Expression("jProcurement.[ITBDocumentName]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementItbDocumentName { get { return Fields.ProcurementItbDocumentName[this]; } set { Fields.ProcurementItbDocumentName[this] = value; } }
        public partial class RowFields { public StringField ProcurementItbDocumentName; }

        [DisplayName("Procurement Rks Document File"), Expression("jProcurement.[RKSDocumentFile]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementRksDocumentFile { get { return Fields.ProcurementRksDocumentFile[this]; } set { Fields.ProcurementRksDocumentFile[this] = value; } }
        public partial class RowFields { public StringField ProcurementRksDocumentFile; }

        [DisplayName("Procurement Rks Document Name"), Expression("jProcurement.[RKSDocumentName]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementRksDocumentName { get { return Fields.ProcurementRksDocumentName[this]; } set { Fields.ProcurementRksDocumentName[this] = value; } }
        public partial class RowFields { public StringField ProcurementRksDocumentName; }

        [DisplayName("Procurement Tender Doc Submit Open Date"), Expression("jProcurement.[TenderDocSubmitOpenDate]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public DateTime? ProcurementTenderDocSubmitOpenDate { get { return Fields.ProcurementTenderDocSubmitOpenDate[this]; } set { Fields.ProcurementTenderDocSubmitOpenDate[this] = value; } }
        public partial class RowFields { public DateTimeField ProcurementTenderDocSubmitOpenDate; }

        [DisplayName("Procurement Tender Doc Submit Close Date"), Expression("jProcurement.[TenderDocSubmitCloseDate]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public DateTime? ProcurementTenderDocSubmitCloseDate { get { return Fields.ProcurementTenderDocSubmitCloseDate[this]; } set { Fields.ProcurementTenderDocSubmitCloseDate[this] = value; } }
        public partial class RowFields { public DateTimeField ProcurementTenderDocSubmitCloseDate; }

        [DisplayName("Procurement Order Type Id"), Expression("jProcurement.[OrderTypeId]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementOrderTypeId { get { return Fields.ProcurementOrderTypeId[this]; } set { Fields.ProcurementOrderTypeId[this] = value; } }
        public partial class RowFields { public StringField ProcurementOrderTypeId; }

        [DisplayName("Procurement Purch Doc Num"), Expression("jProcurement.[PurchDocNum]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementPurchDocNum { get { return Fields.ProcurementPurchDocNum[this]; } set { Fields.ProcurementPurchDocNum[this] = value; } }
        public partial class RowFields { public StringField ProcurementPurchDocNum; }

        [DisplayName("Procurement Rfq Date"), Expression("jProcurement.[RFQDate]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public DateTime? ProcurementRfqDate { get { return Fields.ProcurementRfqDate[this]; } set { Fields.ProcurementRfqDate[this] = value; } }
        public partial class RowFields { public DateTimeField ProcurementRfqDate; }

        [DisplayName("Procurement Quotation Deadline"), Expression("jProcurement.[QuotationDeadline]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public DateTime? ProcurementQuotationDeadline { get { return Fields.ProcurementQuotationDeadline[this]; } set { Fields.ProcurementQuotationDeadline[this] = value; } }
        public partial class RowFields { public DateTimeField ProcurementQuotationDeadline; }

        [DisplayName("Procurement Purch Group"), Expression("jProcurement.[PurchGroup]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementPurchGroup { get { return Fields.ProcurementPurchGroup[this]; } set { Fields.ProcurementPurchGroup[this] = value; } }
        public partial class RowFields { public StringField ProcurementPurchGroup; }

        [DisplayName("Procurement Pr No"), Expression("jProcurement.[PRNo]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementPrNo { get { return Fields.ProcurementPrNo[this]; } set { Fields.ProcurementPrNo[this] = value; } }
        public partial class RowFields { public StringField ProcurementPrNo; }

        [DisplayName("Procurement Auth Person Name"), Expression("jProcurement.[AuthPersonName]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementAuthPersonName { get { return Fields.ProcurementAuthPersonName[this]; } set { Fields.ProcurementAuthPersonName[this] = value; } }
        public partial class RowFields { public StringField ProcurementAuthPersonName; }

        [DisplayName("Procurement Auth Position"), Expression("jProcurement.[AuthPosition]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementAuthPosition { get { return Fields.ProcurementAuthPosition[this]; } set { Fields.ProcurementAuthPosition[this] = value; } }
        public partial class RowFields { public StringField ProcurementAuthPosition; }

        [DisplayName("Procurement Header Text"), Expression("jProcurement.[HeaderText]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementHeaderText { get { return Fields.ProcurementHeaderText[this]; } set { Fields.ProcurementHeaderText[this] = value; } }
        public partial class RowFields { public StringField ProcurementHeaderText; }

        [DisplayName("Procurement Header Note"), Expression("jProcurement.[HeaderNote]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementHeaderNote { get { return Fields.ProcurementHeaderNote[this]; } set { Fields.ProcurementHeaderNote[this] = value; } }
        public partial class RowFields { public StringField ProcurementHeaderNote; }

        [DisplayName("Procurement Work Description"), Expression("jProcurement.[WorkDescription]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementWorkDescription { get { return Fields.ProcurementWorkDescription[this]; } set { Fields.ProcurementWorkDescription[this] = value; } }
        public partial class RowFields { public StringField ProcurementWorkDescription; }

        [DisplayName("Procurement Bank Key"), Expression("jProcurement.[BankKey]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementBankKey { get { return Fields.ProcurementBankKey[this]; } set { Fields.ProcurementBankKey[this] = value; } }
        public partial class RowFields { public StringField ProcurementBankKey; }

        [DisplayName("Procurement Po Cover"), Expression("jProcurement.[POCover]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementPoCover { get { return Fields.ProcurementPoCover[this]; } set { Fields.ProcurementPoCover[this] = value; } }
        public partial class RowFields { public StringField ProcurementPoCover; }

        [DisplayName("Procurement Delivery Address"), Expression("jProcurement.[DeliveryAddress]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementDeliveryAddress { get { return Fields.ProcurementDeliveryAddress[this]; } set { Fields.ProcurementDeliveryAddress[this] = value; } }
        public partial class RowFields { public StringField ProcurementDeliveryAddress; }

        [DisplayName("Procurement To P Targ Val"), Expression("jProcurement.[ToPTargVal]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementToPTargVal { get { return Fields.ProcurementToPTargVal[this]; } set { Fields.ProcurementToPTargVal[this] = value; } }
        public partial class RowFields { public StringField ProcurementToPTargVal; }

        [DisplayName("Procurement Your Reference"), Expression("jProcurement.[YourReference]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementYourReference { get { return Fields.ProcurementYourReference[this]; } set { Fields.ProcurementYourReference[this] = value; } }
        public partial class RowFields { public StringField ProcurementYourReference; }

        [DisplayName("Procurement Our Reference"), Expression("jProcurement.[OurReference]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementOurReference { get { return Fields.ProcurementOurReference[this]; } set { Fields.ProcurementOurReference[this] = value; } }
        public partial class RowFields { public StringField ProcurementOurReference; }

        [DisplayName("Procurement Sales Person"), Expression("jProcurement.[SalesPerson]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementSalesPerson { get { return Fields.ProcurementSalesPerson[this]; } set { Fields.ProcurementSalesPerson[this] = value; } }
        public partial class RowFields { public StringField ProcurementSalesPerson; }

        [DisplayName("Procurement Telephone"), Expression("jProcurement.[Telephone]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementTelephone { get { return Fields.ProcurementTelephone[this]; } set { Fields.ProcurementTelephone[this] = value; } }
        public partial class RowFields { public StringField ProcurementTelephone; }

        [DisplayName("Procurement Validity Start"), Expression("jProcurement.[ValidityStart]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public DateTime? ProcurementValidityStart { get { return Fields.ProcurementValidityStart[this]; } set { Fields.ProcurementValidityStart[this] = value; } }
        public partial class RowFields { public DateTimeField ProcurementValidityStart; }

        [DisplayName("Procurement Validity End"), Expression("jProcurement.[ValidityEnd]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public DateTime? ProcurementValidityEnd { get { return Fields.ProcurementValidityEnd[this]; } set { Fields.ProcurementValidityEnd[this] = value; } }
        public partial class RowFields { public DateTimeField ProcurementValidityEnd; }

        [DisplayName("Procurement Item Interval"), Expression("jProcurement.[ItemInterval]"), ReadOnly(true)]
        public Decimal? ProcurementItemInterval { get { return Fields.ProcurementItemInterval[this]; } set { Fields.ProcurementItemInterval[this] = value; } }
        public partial class RowFields { public DecimalField ProcurementItemInterval; }

        [DisplayName("Procurement Sub Item Interval"), Expression("jProcurement.[SubItemInterval]"), ReadOnly(true)]
        public Decimal? ProcurementSubItemInterval { get { return Fields.ProcurementSubItemInterval[this]; } set { Fields.ProcurementSubItemInterval[this] = value; } }
        public partial class RowFields { public DecimalField ProcurementSubItemInterval; }

        [DisplayName("Procurement Warranty"), Expression("jProcurement.[Warranty]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public DateTime? ProcurementWarranty { get { return Fields.ProcurementWarranty[this]; } set { Fields.ProcurementWarranty[this] = value; } }
        public partial class RowFields { public DateTimeField ProcurementWarranty; }

        [DisplayName("Procurement Language"), Expression("jProcurement.[Language]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementLanguage { get { return Fields.ProcurementLanguage[this]; } set { Fields.ProcurementLanguage[this] = value; } }
        public partial class RowFields { public StringField ProcurementLanguage; }

        [DisplayName("Procurement Review Oe Required"), Expression("jProcurement.[ReviewOERequired]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public Boolean? ProcurementReviewOeRequired { get { return Fields.ProcurementReviewOeRequired[this]; } set { Fields.ProcurementReviewOeRequired[this] = value; } }
        public partial class RowFields { public BooleanField ProcurementReviewOeRequired; }

        [DisplayName("Procurement Proc Agreement"), Expression("jProcurement.[ProcAgreement]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public Boolean? ProcurementProcAgreement { get { return Fields.ProcurementProcAgreement[this]; } set { Fields.ProcurementProcAgreement[this] = value; } }
        public partial class RowFields { public BooleanField ProcurementProcAgreement; }

        [DisplayName("Procurement Proc Agreement Date"), Expression("jProcurement.[ProcAgreementDate]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public DateTime? ProcurementProcAgreementDate { get { return Fields.ProcurementProcAgreementDate[this]; } set { Fields.ProcurementProcAgreementDate[this] = value; } }
        public partial class RowFields { public DateTimeField ProcurementProcAgreementDate; }

        [DisplayName("Procurement Proc As Required"), Expression("jProcurement.[ProcASRequired]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public Boolean? ProcurementProcAsRequired { get { return Fields.ProcurementProcAsRequired[this]; } set { Fields.ProcurementProcAsRequired[this] = value; } }
        public partial class RowFields { public BooleanField ProcurementProcAsRequired; }

        [DisplayName("Procurement Proc As Approved"), Expression("jProcurement.[ProcASApproved]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public Boolean? ProcurementProcAsApproved { get { return Fields.ProcurementProcAsApproved[this]; } set { Fields.ProcurementProcAsApproved[this] = value; } }
        public partial class RowFields { public BooleanField ProcurementProcAsApproved; }

        [DisplayName("Procurement Proc As Approved Date"), Expression("jProcurement.[ProcASApprovedDate]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public DateTime? ProcurementProcAsApprovedDate { get { return Fields.ProcurementProcAsApprovedDate[this]; } set { Fields.ProcurementProcAsApprovedDate[this] = value; } }
        public partial class RowFields { public DateTimeField ProcurementProcAsApprovedDate; }

        [DisplayName("Procurement Proc As Desc"), Expression("jProcurement.[ProcASDesc]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementProcAsDesc { get { return Fields.ProcurementProcAsDesc[this]; } set { Fields.ProcurementProcAsDesc[this] = value; } }
        public partial class RowFields { public StringField ProcurementProcAsDesc; }

        [DisplayName("Procurement Final Conclusion Desc"), Expression("jProcurement.[FinalConclusionDesc]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementFinalConclusionDesc { get { return Fields.ProcurementFinalConclusionDesc[this]; } set { Fields.ProcurementFinalConclusionDesc[this] = value; } }
        public partial class RowFields { public StringField ProcurementFinalConclusionDesc; }

        [DisplayName("Procurement Winner Nomination Date"), Expression("jProcurement.[WinnerNominationDate]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public DateTime? ProcurementWinnerNominationDate { get { return Fields.ProcurementWinnerNominationDate[this]; } set { Fields.ProcurementWinnerNominationDate[this] = value; } }
        public partial class RowFields { public DateTimeField ProcurementWinnerNominationDate; }

        [DisplayName("Procurement Objection Close Date"), Expression("jProcurement.[ObjectionCloseDate]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public DateTime? ProcurementObjectionCloseDate { get { return Fields.ProcurementObjectionCloseDate[this]; } set { Fields.ProcurementObjectionCloseDate[this] = value; } }
        public partial class RowFields { public DateTimeField ProcurementObjectionCloseDate; }

        [DisplayName("Procurement Po Doc Name"), Expression("jProcurement.[PODocName]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementPoDocName { get { return Fields.ProcurementPoDocName[this]; } set { Fields.ProcurementPoDocName[this] = value; } }
        public partial class RowFields { public StringField ProcurementPoDocName; }

        [DisplayName("Procurement Temporary Pic"), Expression("jProcurement.[TemporaryPIC]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementTemporaryPic { get { return Fields.ProcurementTemporaryPic[this]; } set { Fields.ProcurementTemporaryPic[this] = value; } }
        public partial class RowFields { public StringField ProcurementTemporaryPic; }

        [DisplayName("Procurement Po Number"), Expression("jProcurement.[PONumber]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementPoNumber { get { return Fields.ProcurementPoNumber[this]; } set { Fields.ProcurementPoNumber[this] = value; } }
        public partial class RowFields { public StringField ProcurementPoNumber; }

        [DisplayName("Procurement Po Doc File"), Expression("jProcurement.[PODocFile]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementPoDocFile { get { return Fields.ProcurementPoDocFile[this]; } set { Fields.ProcurementPoDocFile[this] = value; } }
        public partial class RowFields { public StringField ProcurementPoDocFile; }

        [DisplayName("Procurement F1 Submit Date"), Expression("jProcurement.[F1SubmitDate]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public DateTime? ProcurementF1SubmitDate { get { return Fields.ProcurementF1SubmitDate[this]; } set { Fields.ProcurementF1SubmitDate[this] = value; } }
        public partial class RowFields { public DateTimeField ProcurementF1SubmitDate; }

        [DisplayName("Procurement F1 Submit By"), Expression("jProcurement.[F1SubmitBy]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementF1SubmitBy { get { return Fields.ProcurementF1SubmitBy[this]; } set { Fields.ProcurementF1SubmitBy[this] = value; } }
        public partial class RowFields { public StringField ProcurementF1SubmitBy; }

        [DisplayName("Procurement F2 Submit Date"), Expression("jProcurement.[F2SubmitDate]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public DateTime? ProcurementF2SubmitDate { get { return Fields.ProcurementF2SubmitDate[this]; } set { Fields.ProcurementF2SubmitDate[this] = value; } }
        public partial class RowFields { public DateTimeField ProcurementF2SubmitDate; }

        [DisplayName("Procurement F2 Submit By"), Expression("jProcurement.[F2SubmitBy]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementF2SubmitBy { get { return Fields.ProcurementF2SubmitBy[this]; } set { Fields.ProcurementF2SubmitBy[this] = value; } }
        public partial class RowFields { public StringField ProcurementF2SubmitBy; }

        [DisplayName("Procurement F3 Submit Date"), Expression("jProcurement.[F3SubmitDate]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public DateTime? ProcurementF3SubmitDate { get { return Fields.ProcurementF3SubmitDate[this]; } set { Fields.ProcurementF3SubmitDate[this] = value; } }
        public partial class RowFields { public DateTimeField ProcurementF3SubmitDate; }

        [DisplayName("Procurement F3 Submit By"), Expression("jProcurement.[F3SubmitBy]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementF3SubmitBy { get { return Fields.ProcurementF3SubmitBy[this]; } set { Fields.ProcurementF3SubmitBy[this] = value; } }
        public partial class RowFields { public StringField ProcurementF3SubmitBy; }

        [DisplayName("Procurement F3 1 Submit Date"), Expression("jProcurement.[F3_1SubmitDate]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public DateTime? ProcurementF31SubmitDate { get { return Fields.ProcurementF31SubmitDate[this]; } set { Fields.ProcurementF31SubmitDate[this] = value; } }
        public partial class RowFields { public DateTimeField ProcurementF31SubmitDate; }

        [DisplayName("Procurement F3 1 Submit By"), Expression("jProcurement.[F3_1SubmitBy]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementF31SubmitBy { get { return Fields.ProcurementF31SubmitBy[this]; } set { Fields.ProcurementF31SubmitBy[this] = value; } }
        public partial class RowFields { public StringField ProcurementF31SubmitBy; }

        [DisplayName("Procurement F4 Submit Date"), Expression("jProcurement.[F4SubmitDate]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public DateTime? ProcurementF4SubmitDate { get { return Fields.ProcurementF4SubmitDate[this]; } set { Fields.ProcurementF4SubmitDate[this] = value; } }
        public partial class RowFields { public DateTimeField ProcurementF4SubmitDate; }

        [DisplayName("Procurement F4 Submit By"), Expression("jProcurement.[F4SubmitBy]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementF4SubmitBy { get { return Fields.ProcurementF4SubmitBy[this]; } set { Fields.ProcurementF4SubmitBy[this] = value; } }
        public partial class RowFields { public StringField ProcurementF4SubmitBy; }

        [DisplayName("Document Submit Date"), Expression("jProcurement.[F5SubmitDate]"), ReadOnly(true)]
        [MinSelectLevel(SelectLevel.List)]
        [EditLink, QuickSearch]
        public DateTime? ProcurementF5SubmitDate { get { return Fields.ProcurementF5SubmitDate[this]; } set { Fields.ProcurementF5SubmitDate[this] = value; } }
        public partial class RowFields { public DateTimeField ProcurementF5SubmitDate; }

        [DisplayName("Procurement F5 Submit By"), Expression("jProcurement.[F5SubmitBy]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementF5SubmitBy { get { return Fields.ProcurementF5SubmitBy[this]; } set { Fields.ProcurementF5SubmitBy[this] = value; } }
        public partial class RowFields { public StringField ProcurementF5SubmitBy; }

        [DisplayName("Procurement F6 Submit Date"), Expression("jProcurement.[F6SubmitDate]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public DateTime? ProcurementF6SubmitDate { get { return Fields.ProcurementF6SubmitDate[this]; } set { Fields.ProcurementF6SubmitDate[this] = value; } }
        public partial class RowFields { public DateTimeField ProcurementF6SubmitDate; }

        [DisplayName("Procurement F6 Submit By"), Expression("jProcurement.[F6SubmitBy]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementF6SubmitBy { get { return Fields.ProcurementF6SubmitBy[this]; } set { Fields.ProcurementF6SubmitBy[this] = value; } }
        public partial class RowFields { public StringField ProcurementF6SubmitBy; }

        [DisplayName("Procurement F7 Submit Date"), Expression("jProcurement.[F7SubmitDate]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public DateTime? ProcurementF7SubmitDate { get { return Fields.ProcurementF7SubmitDate[this]; } set { Fields.ProcurementF7SubmitDate[this] = value; } }
        public partial class RowFields { public DateTimeField ProcurementF7SubmitDate; }

        [DisplayName("Procurement F7 Submit By"), Expression("jProcurement.[F7SubmitBy]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementF7SubmitBy { get { return Fields.ProcurementF7SubmitBy[this]; } set { Fields.ProcurementF7SubmitBy[this] = value; } }
        public partial class RowFields { public StringField ProcurementF7SubmitBy; }

        [DisplayName("Procurement F8 Submit Date"), Expression("jProcurement.[F8SubmitDate]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public DateTime? ProcurementF8SubmitDate { get { return Fields.ProcurementF8SubmitDate[this]; } set { Fields.ProcurementF8SubmitDate[this] = value; } }
        public partial class RowFields { public DateTimeField ProcurementF8SubmitDate; }

        [DisplayName("Procurement F8 Submit By"), Expression("jProcurement.[F8SubmitBy]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementF8SubmitBy { get { return Fields.ProcurementF8SubmitBy[this]; } set { Fields.ProcurementF8SubmitBy[this] = value; } }
        public partial class RowFields { public StringField ProcurementF8SubmitBy; }

        [DisplayName("Procurement F9 Submit Date"), Expression("jProcurement.[F9SubmitDate]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public DateTime? ProcurementF9SubmitDate { get { return Fields.ProcurementF9SubmitDate[this]; } set { Fields.ProcurementF9SubmitDate[this] = value; } }
        public partial class RowFields { public DateTimeField ProcurementF9SubmitDate; }

        [DisplayName("Procurement F9 Submit By"), Expression("jProcurement.[F9SubmitBy]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementF9SubmitBy { get { return Fields.ProcurementF9SubmitBy[this]; } set { Fields.ProcurementF9SubmitBy[this] = value; } }
        public partial class RowFields { public StringField ProcurementF9SubmitBy; }

        [DisplayName("Procurement F10 Submit Date"), Expression("jProcurement.[F10SubmitDate]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public DateTime? ProcurementF10SubmitDate { get { return Fields.ProcurementF10SubmitDate[this]; } set { Fields.ProcurementF10SubmitDate[this] = value; } }
        public partial class RowFields { public DateTimeField ProcurementF10SubmitDate; }

        [DisplayName("Procurement F10 Submit By"), Expression("jProcurement.[F10SubmitBy]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementF10SubmitBy { get { return Fields.ProcurementF10SubmitBy[this]; } set { Fields.ProcurementF10SubmitBy[this] = value; } }
        public partial class RowFields { public StringField ProcurementF10SubmitBy; }

        [DisplayName("Procurement F11 Submit Date"), Expression("jProcurement.[F11SubmitDate]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public DateTime? ProcurementF11SubmitDate { get { return Fields.ProcurementF11SubmitDate[this]; } set { Fields.ProcurementF11SubmitDate[this] = value; } }
        public partial class RowFields { public DateTimeField ProcurementF11SubmitDate; }

        [DisplayName("Procurement F11 Submit By"), Expression("jProcurement.[F11SubmitBy]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementF11SubmitBy { get { return Fields.ProcurementF11SubmitBy[this]; } set { Fields.ProcurementF11SubmitBy[this] = value; } }
        public partial class RowFields { public StringField ProcurementF11SubmitBy; }

        [DisplayName("Procurement F12 Submit Date"), Expression("jProcurement.[F12SubmitDate]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public DateTime? ProcurementF12SubmitDate { get { return Fields.ProcurementF12SubmitDate[this]; } set { Fields.ProcurementF12SubmitDate[this] = value; } }
        public partial class RowFields { public DateTimeField ProcurementF12SubmitDate; }

        [DisplayName("Procurement F12 Submit By"), Expression("jProcurement.[F12SubmitBy]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementF12SubmitBy { get { return Fields.ProcurementF12SubmitBy[this]; } set { Fields.ProcurementF12SubmitBy[this] = value; } }
        public partial class RowFields { public StringField ProcurementF12SubmitBy; }

        [DisplayName("Procurement F13 Submit Date"), Expression("jProcurement.[F13SubmitDate]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public DateTime? ProcurementF13SubmitDate { get { return Fields.ProcurementF13SubmitDate[this]; } set { Fields.ProcurementF13SubmitDate[this] = value; } }
        public partial class RowFields { public DateTimeField ProcurementF13SubmitDate; }

        [DisplayName("Procurement F13 Submit By"), Expression("jProcurement.[F13SubmitBy]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementF13SubmitBy { get { return Fields.ProcurementF13SubmitBy[this]; } set { Fields.ProcurementF13SubmitBy[this] = value; } }
        public partial class RowFields { public StringField ProcurementF13SubmitBy; }

        [DisplayName("Procurement F14 Submit Date"), Expression("jProcurement.[F14SubmitDate]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public DateTime? ProcurementF14SubmitDate { get { return Fields.ProcurementF14SubmitDate[this]; } set { Fields.ProcurementF14SubmitDate[this] = value; } }
        public partial class RowFields { public DateTimeField ProcurementF14SubmitDate; }

        [DisplayName("Procurement F14 Submit By"), Expression("jProcurement.[F14SubmitBy]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementF14SubmitBy { get { return Fields.ProcurementF14SubmitBy[this]; } set { Fields.ProcurementF14SubmitBy[this] = value; } }
        public partial class RowFields { public StringField ProcurementF14SubmitBy; }

        [DisplayName("Procurement F15 Submit Date"), Expression("jProcurement.[F15SubmitDate]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public DateTime? ProcurementF15SubmitDate { get { return Fields.ProcurementF15SubmitDate[this]; } set { Fields.ProcurementF15SubmitDate[this] = value; } }
        public partial class RowFields { public DateTimeField ProcurementF15SubmitDate; }

        [DisplayName("Procurement F15 Submit By"), Expression("jProcurement.[F15SubmitBy]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementF15SubmitBy { get { return Fields.ProcurementF15SubmitBy[this]; } set { Fields.ProcurementF15SubmitBy[this] = value; } }
        public partial class RowFields { public StringField ProcurementF15SubmitBy; }

        [DisplayName("Procurement F16 Submit Date"), Expression("jProcurement.[F16SubmitDate]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public DateTime? ProcurementF16SubmitDate { get { return Fields.ProcurementF16SubmitDate[this]; } set { Fields.ProcurementF16SubmitDate[this] = value; } }
        public partial class RowFields { public DateTimeField ProcurementF16SubmitDate; }

        [DisplayName("Procurement F16 Submit By"), Expression("jProcurement.[F16SubmitBy]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementF16SubmitBy { get { return Fields.ProcurementF16SubmitBy[this]; } set { Fields.ProcurementF16SubmitBy[this] = value; } }
        public partial class RowFields { public StringField ProcurementF16SubmitBy; }

        [DisplayName("Procurement F17 Submit Date"), Expression("jProcurement.[F17SubmitDate]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public DateTime? ProcurementF17SubmitDate { get { return Fields.ProcurementF17SubmitDate[this]; } set { Fields.ProcurementF17SubmitDate[this] = value; } }
        public partial class RowFields { public DateTimeField ProcurementF17SubmitDate; }

        [DisplayName("Procurement F17 Submit By"), Expression("jProcurement.[F17SubmitBy]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementF17SubmitBy { get { return Fields.ProcurementF17SubmitBy[this]; } set { Fields.ProcurementF17SubmitBy[this] = value; } }
        public partial class RowFields { public StringField ProcurementF17SubmitBy; }

        [DisplayName("Procurement Procurement Method Id"), Expression("jProcurement.[ProcurementMethodId]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String ProcurementProcurementMethodId { get { return Fields.ProcurementProcurementMethodId[this]; } set { Fields.ProcurementProcurementMethodId[this] = value; } }
        public partial class RowFields { public StringField ProcurementProcurementMethodId; }



        [DisplayName("Rfq Item Procurement Id"), Expression("jRfqItem.[ProcurementId]"), ReadOnly(true)]
        [MinSelectLevel(SelectLevel.List)]
        [EditLink, QuickSearch]
        public Int64? RfqItemProcurementId { get { return Fields.RfqItemProcurementId[this]; } set { Fields.RfqItemProcurementId[this] = value; } }
        public partial class RowFields { public Int64Field RfqItemProcurementId; }

        [DisplayName("Owner Estimate Review"), Expression("jRfqItem.[OwnerEstimateReview]"), ReadOnly(true)]
        [MinSelectLevel(SelectLevel.List)]
        public Decimal? RfqItemOwnerEstimateReview { get { return Fields.RfqItemOwnerEstimateReview[this]; } set { Fields.RfqItemOwnerEstimateReview[this] = value; } }
        public partial class RowFields { public DecimalField RfqItemOwnerEstimateReview; }

        [DisplayName("Owner Estimate"), Expression("jRfqItem.[OwnerEstimate]"), ReadOnly(true)]
        [MinSelectLevel(SelectLevel.List)]
        [DisplayFormat("#,##0.00")]
        public Decimal? RfqItemOwnerEstimate { get { return Fields.RfqItemOwnerEstimate[this]; } set { Fields.RfqItemOwnerEstimate[this] = value; } }
        public partial class RowFields { public DecimalField RfqItemOwnerEstimate; }

        [DisplayName("Purchasing Document"), Expression("jRfqItem.[PurchasingDocument]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String RfqItemPurchasingDocument { get { return Fields.RfqItemPurchasingDocument[this]; } set { Fields.RfqItemPurchasingDocument[this] = value; } }
        public partial class RowFields { public StringField RfqItemPurchasingDocument; }

        [DisplayName("Item"), Expression("jRfqItem.[Item]"), ReadOnly(true), LookupInclude]
        [MinSelectLevel(SelectLevel.List)]
        [EditLink, QuickSearch]
        public String ItemSequence { get { return Fields.ItemSequence[this]; } set { Fields.ItemSequence[this] = value; } }
        public partial class RowFields { public StringField ItemSequence; }

        [DisplayName("Rfq Item Deletion Indicator"), Expression("jRfqItem.[DeletionIndicator]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String RfqItemDeletionIndicator { get { return Fields.RfqItemDeletionIndicator[this]; } set { Fields.RfqItemDeletionIndicator[this] = value; } }
        public partial class RowFields { public StringField RfqItemDeletionIndicator; }

        [DisplayName("Rfq Item Rfq Status"), Expression("jRfqItem.[RfqStatus]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String RfqItemRfqStatus { get { return Fields.RfqItemRfqStatus[this]; } set { Fields.RfqItemRfqStatus[this] = value; } }
        public partial class RowFields { public StringField RfqItemRfqStatus; }

        [DisplayName("Rfq Item Last Changed On"), Expression("jRfqItem.[LastChangedOn]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public DateTime? RfqItemLastChangedOn { get { return Fields.RfqItemLastChangedOn[this]; } set { Fields.RfqItemLastChangedOn[this] = value; } }
        public partial class RowFields { public DateTimeField RfqItemLastChangedOn; }

        [DisplayName("Short Text"), Expression("jRfqItem.[ShortText]"), ReadOnly(true)]
        [MinSelectLevel(SelectLevel.List)]
        [TextAreaEditor]
        [EditLink, QuickSearch]
        public String ShortText { get { return Fields.ShortText[this]; } set { Fields.ShortText[this] = value; } }
        public partial class RowFields { public StringField ShortText; }

        [DisplayName("Material"), Expression("jRfqItem.[Material]"), ReadOnly(true)]
        [MinSelectLevel(SelectLevel.List)]
        [EditLink, QuickSearch]
        public String Material { get { return Fields.Material[this]; } set { Fields.Material[this] = value; } }
        public partial class RowFields { public StringField Material; }

        [DisplayName("Rfq Item Plant"), Expression("jRfqItem.[Plant]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String RfqItemPlant { get { return Fields.RfqItemPlant[this]; } set { Fields.RfqItemPlant[this] = value; } }
        public partial class RowFields { public StringField RfqItemPlant; }

        [DisplayName("Rfq Item Storage Location"), Expression("jRfqItem.[StorageLocation]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String RfqItemStorageLocation { get { return Fields.RfqItemStorageLocation[this]; } set { Fields.RfqItemStorageLocation[this] = value; } }
        public partial class RowFields { public StringField RfqItemStorageLocation; }

        [DisplayName("Rfq Item Req Tracking Number"), Expression("jRfqItem.[ReqTrackingNumber]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String RfqItemReqTrackingNumber { get { return Fields.RfqItemReqTrackingNumber[this]; } set { Fields.RfqItemReqTrackingNumber[this] = value; } }
        public partial class RowFields { public StringField RfqItemReqTrackingNumber; }

        [DisplayName("Rfq Item Material Group"), Expression("jRfqItem.[MaterialGroup]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String RfqItemMaterialGroup { get { return Fields.RfqItemMaterialGroup[this]; } set { Fields.RfqItemMaterialGroup[this] = value; } }
        public partial class RowFields { public StringField RfqItemMaterialGroup; }

        [DisplayName("Rfq Item Purchasing Info Rec"), Expression("jRfqItem.[PurchasingInfoRec]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String RfqItemPurchasingInfoRec { get { return Fields.RfqItemPurchasingInfoRec[this]; } set { Fields.RfqItemPurchasingInfoRec[this] = value; } }
        public partial class RowFields { public StringField RfqItemPurchasingInfoRec; }

        [DisplayName("Rfq Item Vendor Material No"), Expression("jRfqItem.[VendorMaterialNo]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String RfqItemVendorMaterialNo { get { return Fields.RfqItemVendorMaterialNo[this]; } set { Fields.RfqItemVendorMaterialNo[this] = value; } }
        public partial class RowFields { public StringField RfqItemVendorMaterialNo; }

        [DisplayName("Target Quantity"), Expression("jRfqItem.[TargetQuantity]"), ReadOnly(true)]
        [MinSelectLevel(SelectLevel.List)]
        public Decimal? RfqItemTargetQuantity { get { return Fields.RfqItemTargetQuantity[this]; } set { Fields.RfqItemTargetQuantity[this] = value; } }
        public partial class RowFields { public DecimalField RfqItemTargetQuantity; }

        [DisplayName("Order Quantity"), Expression("jRfqItem.[OrderQuantity]"), ReadOnly(true)]
        [MinSelectLevel(SelectLevel.List)]
        public Decimal? RfqItemOrderQuantity { get { return Fields.RfqItemOrderQuantity[this]; } set { Fields.RfqItemOrderQuantity[this] = value; } }
        public partial class RowFields { public DecimalField RfqItemOrderQuantity; }

        [DisplayName("Order Unit"), Expression("jRfqItem.[OrderUnit]"), ReadOnly(true)]
        [MinSelectLevel(SelectLevel.List)]
        [EditLink, QuickSearch]
        public String RfqItemOrderUnit { get { return Fields.RfqItemOrderUnit[this]; } set { Fields.RfqItemOrderUnit[this] = value; } }
        public partial class RowFields { public StringField RfqItemOrderUnit; }

        [DisplayName("Rfq Item Order Price Unit"), Expression("jRfqItem.[OrderPriceUnit]"), ReadOnly(true)]
        [MinSelectLevel(SelectLevel.List)]
        [EditLink, QuickSearch]
        public String RfqItemOrderPriceUnit { get { return Fields.RfqItemOrderPriceUnit[this]; } set { Fields.RfqItemOrderPriceUnit[this] = value; } }
        public partial class RowFields { public StringField RfqItemOrderPriceUnit; }

        [DisplayName("Rfq Item Quantity Conversion"), Expression("jRfqItem.[QuantityConversion]"), ReadOnly(true)]
        public Decimal? RfqItemQuantityConversion { get { return Fields.RfqItemQuantityConversion[this]; } set { Fields.RfqItemQuantityConversion[this] = value; } }
        public partial class RowFields { public DecimalField RfqItemQuantityConversion; }

        [DisplayName("Rfq Item Equal To"), Expression("jRfqItem.[EqualTo]"), ReadOnly(true)]
        public Decimal? RfqItemEqualTo { get { return Fields.RfqItemEqualTo[this]; } set { Fields.RfqItemEqualTo[this] = value; } }
        public partial class RowFields { public DecimalField RfqItemEqualTo; }

        [DisplayName("Rfq Item Denominator"), Expression("jRfqItem.[Denominator]"), ReadOnly(true)]
        public Decimal? RfqItemDenominator { get { return Fields.RfqItemDenominator[this]; } set { Fields.RfqItemDenominator[this] = value; } }
        public partial class RowFields { public DecimalField RfqItemDenominator; }

        [DisplayName("Rfq Item Net Order Price"), Expression("jRfqItem.[NetOrderPrice]"), ReadOnly(true)]
        public Decimal? RfqItemNetOrderPrice { get { return Fields.RfqItemNetOrderPrice[this]; } set { Fields.RfqItemNetOrderPrice[this] = value; } }
        public partial class RowFields { public DecimalField RfqItemNetOrderPrice; }

        [DisplayName("Rfq Item Price Unit"), Expression("jRfqItem.[PriceUnit]"), ReadOnly(true)]
        public Decimal? RfqItemPriceUnit { get { return Fields.RfqItemPriceUnit[this]; } set { Fields.RfqItemPriceUnit[this] = value; } }
        [MinSelectLevel(SelectLevel.List)]
        public partial class RowFields { public DecimalField RfqItemPriceUnit; }

        [DisplayName("Rfq Item Net Order Value"), Expression("jRfqItem.[NetOrderValue]"), ReadOnly(true)]
        public Decimal? RfqItemNetOrderValue { get { return Fields.RfqItemNetOrderValue[this]; } set { Fields.RfqItemNetOrderValue[this] = value; } }
        public partial class RowFields { public DecimalField RfqItemNetOrderValue; }

        [DisplayName("Rfq Item Gross Order Value"), Expression("jRfqItem.[GrossOrderValue]"), ReadOnly(true)]
        public Decimal? RfqItemGrossOrderValue { get { return Fields.RfqItemGrossOrderValue[this]; } set { Fields.RfqItemGrossOrderValue[this] = value; } }
        public partial class RowFields { public DecimalField RfqItemGrossOrderValue; }

        [DisplayName("Rfq Item Quotation Deadline"), Expression("jRfqItem.[QuotationDeadline]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public DateTime? RfqItemQuotationDeadline { get { return Fields.RfqItemQuotationDeadline[this]; } set { Fields.RfqItemQuotationDeadline[this] = value; } }
        public partial class RowFields { public DateTimeField RfqItemQuotationDeadline; }

        [DisplayName("Rfq Item Gr Processing Time"), Expression("jRfqItem.[GrProcessingTime]"), ReadOnly(true)]
        public Decimal? RfqItemGrProcessingTime { get { return Fields.RfqItemGrProcessingTime[this]; } set { Fields.RfqItemGrProcessingTime[this] = value; } }
        public partial class RowFields { public DecimalField RfqItemGrProcessingTime; }

        [DisplayName("Rfq Item Tax Code"), Expression("jRfqItem.[TaxCode]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String RfqItemTaxCode { get { return Fields.RfqItemTaxCode[this]; } set { Fields.RfqItemTaxCode[this] = value; } }
        public partial class RowFields { public StringField RfqItemTaxCode; }

        [DisplayName("Rfq Item Base Unit Of Measure"), Expression("jRfqItem.[BaseUnitOfMeasure]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String RfqItemBaseUnitOfMeasure { get { return Fields.RfqItemBaseUnitOfMeasure[this]; } set { Fields.RfqItemBaseUnitOfMeasure[this] = value; } }
        public partial class RowFields { public StringField RfqItemBaseUnitOfMeasure; }

        [DisplayName("Rfq Item Shipping Instr"), Expression("jRfqItem.[ShippingInstr]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String RfqItemShippingInstr { get { return Fields.RfqItemShippingInstr[this]; } set { Fields.RfqItemShippingInstr[this] = value; } }
        public partial class RowFields { public StringField RfqItemShippingInstr; }

        [DisplayName("Rfq Item Oa Target Value"), Expression("jRfqItem.[OaTargetValue]"), ReadOnly(true)]
        public Decimal? RfqItemOaTargetValue { get { return Fields.RfqItemOaTargetValue[this]; } set { Fields.RfqItemOaTargetValue[this] = value; } }
        public partial class RowFields { public DecimalField RfqItemOaTargetValue; }

        [DisplayName("Rfq Item Price Date"), Expression("jRfqItem.[PriceDate]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String RfqItemPriceDate { get { return Fields.RfqItemPriceDate[this]; } set { Fields.RfqItemPriceDate[this] = value; } }
        public partial class RowFields { public StringField RfqItemPriceDate; }

        [DisplayName("Rfq Item Purch Doc Category"), Expression("jRfqItem.[PurchDocCategory]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String RfqItemPurchDocCategory { get { return Fields.RfqItemPurchDocCategory[this]; } set { Fields.RfqItemPurchDocCategory[this] = value; } }
        public partial class RowFields { public StringField RfqItemPurchDocCategory; }

        [DisplayName("Rfq Item Effective Value"), Expression("jRfqItem.[EffectiveValue]"), ReadOnly(true)]
        public Decimal? RfqItemEffectiveValue { get { return Fields.RfqItemEffectiveValue[this]; } set { Fields.RfqItemEffectiveValue[this] = value; } }
        public partial class RowFields { public DecimalField RfqItemEffectiveValue; }

        [DisplayName("Rfq Item Affects Commitments"), Expression("jRfqItem.[AffectsCommitments]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String RfqItemAffectsCommitments { get { return Fields.RfqItemAffectsCommitments[this]; } set { Fields.RfqItemAffectsCommitments[this] = value; } }
        public partial class RowFields { public StringField RfqItemAffectsCommitments; }

        [DisplayName("Rfq Item Material Type"), Expression("jRfqItem.[MaterialType]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String RfqItemMaterialType { get { return Fields.RfqItemMaterialType[this]; } set { Fields.RfqItemMaterialType[this] = value; } }
        public partial class RowFields { public StringField RfqItemMaterialType; }

        [DisplayName("Rfq Item Subitem Category"), Expression("jRfqItem.[SubitemCategory]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String RfqItemSubitemCategory { get { return Fields.RfqItemSubitemCategory[this]; } set { Fields.RfqItemSubitemCategory[this] = value; } }
        public partial class RowFields { public StringField RfqItemSubitemCategory; }

        [DisplayName("Rfq Item Sub Items"), Expression("jRfqItem.[SubItems]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String RfqItemSubItems { get { return Fields.RfqItemSubItems[this]; } set { Fields.RfqItemSubItems[this] = value; } }
        public partial class RowFields { public StringField RfqItemSubItems; }

        [DisplayName("Rfq Item Subtotal1"), Expression("jRfqItem.[Subtotal1]"), ReadOnly(true)]
        public Decimal? RfqItemSubtotal1 { get { return Fields.RfqItemSubtotal1[this]; } set { Fields.RfqItemSubtotal1[this] = value; } }
        public partial class RowFields { public DecimalField RfqItemSubtotal1; }

        [DisplayName("Rfq Item Subtotal2"), Expression("jRfqItem.[Subtotal2]"), ReadOnly(true)]
        public Decimal? RfqItemSubtotal2 { get { return Fields.RfqItemSubtotal2[this]; } set { Fields.RfqItemSubtotal2[this] = value; } }
        public partial class RowFields { public DecimalField RfqItemSubtotal2; }

        [DisplayName("Rfq Item Subtotal3"), Expression("jRfqItem.[Subtotal3]"), ReadOnly(true)]
        public Decimal? RfqItemSubtotal3 { get { return Fields.RfqItemSubtotal3[this]; } set { Fields.RfqItemSubtotal3[this] = value; } }
        public partial class RowFields { public DecimalField RfqItemSubtotal3; }

        [DisplayName("Rfq Item Subtotal4"), Expression("jRfqItem.[Subtotal4]"), ReadOnly(true)]
        public Decimal? RfqItemSubtotal4 { get { return Fields.RfqItemSubtotal4[this]; } set { Fields.RfqItemSubtotal4[this] = value; } }
        public partial class RowFields { public DecimalField RfqItemSubtotal4; }

        [DisplayName("Rfq Item Subtotal5"), Expression("jRfqItem.[Subtotal5]"), ReadOnly(true)]
        public Decimal? RfqItemSubtotal5 { get { return Fields.RfqItemSubtotal5[this]; } set { Fields.RfqItemSubtotal5[this] = value; } }
        public partial class RowFields { public DecimalField RfqItemSubtotal5; }



        [DisplayName("Evaluation Conclusion Item Name"), Expression("jEvaluationConclusionItem.[Name]"), ReadOnly(true), LookupInclude]
        [MinSelectLevel(SelectLevel.List)]
        [EditLink, QuickSearch]
        public String EvaluationConclusionItemName { get { return Fields.EvaluationConclusionItemName[this]; } set { Fields.EvaluationConclusionItemName[this] = value; } }
        public partial class RowFields { public StringField EvaluationConclusionItemName; }

        [DisplayName("Evaluation Conclusion Item Description"), Expression("jEvaluationConclusionItem.[Description]"), ReadOnly(true)]
        [EditLink, QuickSearch]
        public String EvaluationConclusionItemDescription { get { return Fields.EvaluationConclusionItemDescription[this]; } set { Fields.EvaluationConclusionItemDescription[this] = value; } }
        public partial class RowFields { public StringField EvaluationConclusionItemDescription; }

        #endregion Foreign Fields


        IIdField IIdRow.IdField { get { return Fields.ProcParticipantItemId; } }

        StringField INameRow.NameField { get { return Fields.ProcurementTitle; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProcParticipantItemRow() : base(Fields) { }

        public partial class RowFields : RowFieldsBase { }
    }
}
