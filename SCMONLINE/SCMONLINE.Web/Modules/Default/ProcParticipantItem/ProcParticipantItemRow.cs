namespace SCMONLINE.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
	using System.Collections.Generic;
    using System.IO;

    [ConnectionKey("Default"), TableName("[dbo].[ProcParticipantItem]")]
    [DisplayName("Proc Participant Item"), InstanceName("Proc Participant Item"), TwoLevelCached]
    [ReadPermission("Default:ProcParticipantItem:Read")]
    [InsertPermission("Default:ProcParticipantItem:Insert")]
    [UpdatePermission("Default:ProcParticipantItem:Update")]
    [DeletePermission("Default:ProcParticipantItem:Delete")]
    public sealed class ProcParticipantItemRow : Row, IIdRow, INameRow
    {

        [DisplayName("Proc Participant Item Id"), Identity]
        public Int64? ProcParticipantItemId { get { return Fields.ProcParticipantItemId[this]; } set { Fields.ProcParticipantItemId[this] = value; } }
		public partial class RowFields { public Int64Field ProcParticipantItemId; }

        [DisplayName("Proc Participant"), ForeignKey("[dbo].[ProcParticipant]", "ProcParticipantId"), LeftJoin("jProcParticipant"), TextualField("ProcParticipantVendorId")]
        public Int64? ProcParticipantId { get { return Fields.ProcParticipantId[this]; } set { Fields.ProcParticipantId[this] = value; } }
		public partial class RowFields { public Int64Field ProcParticipantId; }

        [DisplayName("Procurement Id")]
        public Int64? ProcurementId { get { return Fields.ProcurementId[this]; } set { Fields.ProcurementId[this] = value; } }
		public partial class RowFields { public Int64Field ProcurementId; }

        [DisplayName("Rfq Item Id"), Column("RFQItemId")]
        public Int64? RfqItemId { get { return Fields.RfqItemId[this]; } set { Fields.RfqItemId[this] = value; } }
		public partial class RowFields { public Int64Field RfqItemId; }

        [DisplayName("Bid Price"), Size(19), Scale(4)]
        public Decimal? BidPrice { get { return Fields.BidPrice[this]; } set { Fields.BidPrice[this] = value; } }
		public partial class RowFields { public DecimalField BidPrice; }

        [DisplayName("Bid Price Vs Oe"), Column("BidPriceVsOE"), Size(19), Scale(4)]
        public Decimal? BidPriceVsOe { get { return Fields.BidPriceVsOe[this]; } set { Fields.BidPriceVsOe[this] = value; } }
		public partial class RowFields { public DecimalField BidPriceVsOe; }

        [DisplayName("Bid Price Vs Oe Percentage"), Column("BidPriceVsOEPercentage"), Size(19), Scale(4)]
        public Decimal? BidPriceVsOePercentage { get { return Fields.BidPriceVsOePercentage[this]; } set { Fields.BidPriceVsOePercentage[this] = value; } }
		public partial class RowFields { public DecimalField BidPriceVsOePercentage; }

        [DisplayName("Rank")]
        public Int32? Rank { get { return Fields.Rank[this]; } set { Fields.Rank[this] = value; } }
		public partial class RowFields { public Int32Field Rank; }

        [DisplayName("Evaluation Description"), QuickSearch]
        public String EvaluationDescription { get { return Fields.EvaluationDescription[this]; } set { Fields.EvaluationDescription[this] = value; } }
		public partial class RowFields { public StringField EvaluationDescription; }

        [DisplayName("Negotiation Price"), Size(19), Scale(4)]
        public Decimal? NegotiationPrice { get { return Fields.NegotiationPrice[this]; } set { Fields.NegotiationPrice[this] = value; } }
		public partial class RowFields { public DecimalField NegotiationPrice; }

        [DisplayName("Np Vs Oe"), Column("NPVsOE"), Size(19), Scale(4)]
        public Decimal? NpVsOe { get { return Fields.NpVsOe[this]; } set { Fields.NpVsOe[this] = value; } }
		public partial class RowFields { public DecimalField NpVsOe; }

        [DisplayName("Np Vs Oe Percentage"), Column("NPVsOEPercentage"), Size(19), Scale(4)]
        public Decimal? NpVsOePercentage { get { return Fields.NpVsOePercentage[this]; } set { Fields.NpVsOePercentage[this] = value; } }
		public partial class RowFields { public DecimalField NpVsOePercentage; }

        [DisplayName("Negotiation Rank")]
        public Int32? NegotiationRank { get { return Fields.NegotiationRank[this]; } set { Fields.NegotiationRank[this] = value; } }
		public partial class RowFields { public Int32Field NegotiationRank; }

        [DisplayName("Negotiation Desc")]
        public String NegotiationDesc { get { return Fields.NegotiationDesc[this]; } set { Fields.NegotiationDesc[this] = value; } }
		public partial class RowFields { public StringField NegotiationDesc; }

        [DisplayName("Propose Disclaimer")]
        public Boolean? ProposeDisclaimer { get { return Fields.ProposeDisclaimer[this]; } set { Fields.ProposeDisclaimer[this] = value; } }
		public partial class RowFields { public BooleanField ProposeDisclaimer; }

        [DisplayName("Disclaimer Desc")]
        public String DisclaimerDesc { get { return Fields.DisclaimerDesc[this]; } set { Fields.DisclaimerDesc[this] = value; } }
		public partial class RowFields { public StringField DisclaimerDesc; }

        [DisplayName("Evaluation Conclusion Item"), ForeignKey("[dbo].[EvaluationConclusionItem]", "EvaluationConclusionItemId"), LeftJoin("jEvaluationConclusionItem"), TextualField("EvaluationConclusionItemName")]
        public Int32? EvaluationConclusionItemId { get { return Fields.EvaluationConclusionItemId[this]; } set { Fields.EvaluationConclusionItemId[this] = value; } }
		public partial class RowFields { public Int32Field EvaluationConclusionItemId; }

        #region Foreign Fields


        [DisplayName("Proc Participant Procurement Id"), Expression("jProcParticipant.[ProcurementId]"), ReadOnly(true)]
        public Int64? ProcParticipantProcurementId { get { return Fields.ProcParticipantProcurementId[this]; } set { Fields.ProcParticipantProcurementId[this] = value; } }
		public partial class RowFields { public Int64Field ProcParticipantProcurementId; }

        [DisplayName("Proc Participant Sequence No"), Expression("jProcParticipant.[SequenceNo]"), ReadOnly(true)]
        public Int32? ProcParticipantSequenceNo { get { return Fields.ProcParticipantSequenceNo[this]; } set { Fields.ProcParticipantSequenceNo[this] = value; } }
		public partial class RowFields { public Int32Field ProcParticipantSequenceNo; }

        [DisplayName("Proc Participant Vendor Id"), Expression("jProcParticipant.[VendorId]"), ReadOnly(true)]
        public String ProcParticipantVendorId { get { return Fields.ProcParticipantVendorId[this]; } set { Fields.ProcParticipantVendorId[this] = value; } }
		public partial class RowFields { public StringField ProcParticipantVendorId; }

        [DisplayName("Proc Participant Price Document File"), Expression("jProcParticipant.[PriceDocumentFile]"), ReadOnly(true)]
        public String ProcParticipantPriceDocumentFile { get { return Fields.ProcParticipantPriceDocumentFile[this]; } set { Fields.ProcParticipantPriceDocumentFile[this] = value; } }
		public partial class RowFields { public StringField ProcParticipantPriceDocumentFile; }

        [DisplayName("Proc Participant Price Document Name"), Expression("jProcParticipant.[PriceDocumentName]"), ReadOnly(true)]
        public String ProcParticipantPriceDocumentName { get { return Fields.ProcParticipantPriceDocumentName[this]; } set { Fields.ProcParticipantPriceDocumentName[this] = value; } }
		public partial class RowFields { public StringField ProcParticipantPriceDocumentName; }

        [DisplayName("Proc Participant Tech Spec Doc File"), Expression("jProcParticipant.[TechSpecDocFile]"), ReadOnly(true)]
        public String ProcParticipantTechSpecDocFile { get { return Fields.ProcParticipantTechSpecDocFile[this]; } set { Fields.ProcParticipantTechSpecDocFile[this] = value; } }
		public partial class RowFields { public StringField ProcParticipantTechSpecDocFile; }

        [DisplayName("Proc Participant Tech Spec Doc Name"), Expression("jProcParticipant.[TechSpecDocName]"), ReadOnly(true)]
        public String ProcParticipantTechSpecDocName { get { return Fields.ProcParticipantTechSpecDocName[this]; } set { Fields.ProcParticipantTechSpecDocName[this] = value; } }
		public partial class RowFields { public StringField ProcParticipantTechSpecDocName; }

        [DisplayName("Proc Participant Supporting Letter File"), Expression("jProcParticipant.[SupportingLetterFile]"), ReadOnly(true)]
        public String ProcParticipantSupportingLetterFile { get { return Fields.ProcParticipantSupportingLetterFile[this]; } set { Fields.ProcParticipantSupportingLetterFile[this] = value; } }
		public partial class RowFields { public StringField ProcParticipantSupportingLetterFile; }

        [DisplayName("Proc Participant Supporting Letter Name"), Expression("jProcParticipant.[SupportingLetterName]"), ReadOnly(true)]
        public String ProcParticipantSupportingLetterName { get { return Fields.ProcParticipantSupportingLetterName[this]; } set { Fields.ProcParticipantSupportingLetterName[this] = value; } }
		public partial class RowFields { public StringField ProcParticipantSupportingLetterName; }

        [DisplayName("Proc Participant Catalog File"), Expression("jProcParticipant.[CatalogFile]"), ReadOnly(true)]
        public String ProcParticipantCatalogFile { get { return Fields.ProcParticipantCatalogFile[this]; } set { Fields.ProcParticipantCatalogFile[this] = value; } }
		public partial class RowFields { public StringField ProcParticipantCatalogFile; }

        [DisplayName("Proc Participant Catalog Name"), Expression("jProcParticipant.[CatalogName]"), ReadOnly(true)]
        public String ProcParticipantCatalogName { get { return Fields.ProcParticipantCatalogName[this]; } set { Fields.ProcParticipantCatalogName[this] = value; } }
		public partial class RowFields { public StringField ProcParticipantCatalogName; }

        [DisplayName("Proc Participant Submit Doc Tnc"), Expression("jProcParticipant.[SubmitDocTNC]"), ReadOnly(true)]
        public Boolean? ProcParticipantSubmitDocTnc { get { return Fields.ProcParticipantSubmitDocTnc[this]; } set { Fields.ProcParticipantSubmitDocTnc[this] = value; } }
		public partial class RowFields { public BooleanField ProcParticipantSubmitDocTnc; }

        [DisplayName("Proc Participant Submit Doc Tnc Date"), Expression("jProcParticipant.[SubmitDocTNCDate]"), ReadOnly(true)]
        public DateTime? ProcParticipantSubmitDocTncDate { get { return Fields.ProcParticipantSubmitDocTncDate[this]; } set { Fields.ProcParticipantSubmitDocTncDate[this] = value; } }
		public partial class RowFields { public DateTimeField ProcParticipantSubmitDocTncDate; }

        [DisplayName("Proc Participant Admin Doc Exists"), Expression("jProcParticipant.[AdminDocExists]"), ReadOnly(true)]
        public Boolean? ProcParticipantAdminDocExists { get { return Fields.ProcParticipantAdminDocExists[this]; } set { Fields.ProcParticipantAdminDocExists[this] = value; } }
		public partial class RowFields { public BooleanField ProcParticipantAdminDocExists; }

        [DisplayName("Proc Participant Tech Spec Doc Exists"), Expression("jProcParticipant.[TechSpecDocExists]"), ReadOnly(true)]
        public Boolean? ProcParticipantTechSpecDocExists { get { return Fields.ProcParticipantTechSpecDocExists[this]; } set { Fields.ProcParticipantTechSpecDocExists[this] = value; } }
		public partial class RowFields { public BooleanField ProcParticipantTechSpecDocExists; }

        [DisplayName("Proc Participant Supporting Letter Exists"), Expression("jProcParticipant.[SupportingLetterExists]"), ReadOnly(true)]
        public Boolean? ProcParticipantSupportingLetterExists { get { return Fields.ProcParticipantSupportingLetterExists[this]; } set { Fields.ProcParticipantSupportingLetterExists[this] = value; } }
		public partial class RowFields { public BooleanField ProcParticipantSupportingLetterExists; }

        [DisplayName("Proc Participant Catalog Exists"), Expression("jProcParticipant.[CatalogExists]"), ReadOnly(true)]
        public Boolean? ProcParticipantCatalogExists { get { return Fields.ProcParticipantCatalogExists[this]; } set { Fields.ProcParticipantCatalogExists[this] = value; } }
		public partial class RowFields { public BooleanField ProcParticipantCatalogExists; }

        [DisplayName("Proc Participant Opening Doc Desc"), Expression("jProcParticipant.[OpeningDocDesc]"), ReadOnly(true)]
        public String ProcParticipantOpeningDocDesc { get { return Fields.ProcParticipantOpeningDocDesc[this]; } set { Fields.ProcParticipantOpeningDocDesc[this] = value; } }
		public partial class RowFields { public StringField ProcParticipantOpeningDocDesc; }

        [DisplayName("Proc Participant Admin Doc Atk"), Expression("jProcParticipant.[AdminDocATK]"), ReadOnly(true)]
        public Int32? ProcParticipantAdminDocAtk { get { return Fields.ProcParticipantAdminDocAtk[this]; } set { Fields.ProcParticipantAdminDocAtk[this] = value; } }
		public partial class RowFields { public Int32Field ProcParticipantAdminDocAtk; }

        [DisplayName("Proc Participant Tech Spec Doc Atk"), Expression("jProcParticipant.[TechSpecDocATK]"), ReadOnly(true)]
        public Int32? ProcParticipantTechSpecDocAtk { get { return Fields.ProcParticipantTechSpecDocAtk[this]; } set { Fields.ProcParticipantTechSpecDocAtk[this] = value; } }
		public partial class RowFields { public Int32Field ProcParticipantTechSpecDocAtk; }

        [DisplayName("Proc Participant Supporting Letter Atk"), Expression("jProcParticipant.[SupportingLetterATK]"), ReadOnly(true)]
        public Int32? ProcParticipantSupportingLetterAtk { get { return Fields.ProcParticipantSupportingLetterAtk[this]; } set { Fields.ProcParticipantSupportingLetterAtk[this] = value; } }
		public partial class RowFields { public Int32Field ProcParticipantSupportingLetterAtk; }

        [DisplayName("Proc Participant Catalog Atk"), Expression("jProcParticipant.[CatalogATK]"), ReadOnly(true)]
        public Int32? ProcParticipantCatalogAtk { get { return Fields.ProcParticipantCatalogAtk[this]; } set { Fields.ProcParticipantCatalogAtk[this] = value; } }
		public partial class RowFields { public Int32Field ProcParticipantCatalogAtk; }

        [DisplayName("Proc Participant Evaluation Desc"), Expression("jProcParticipant.[EvaluationDesc]"), ReadOnly(true)]
        public String ProcParticipantEvaluationDesc { get { return Fields.ProcParticipantEvaluationDesc[this]; } set { Fields.ProcParticipantEvaluationDesc[this] = value; } }
		public partial class RowFields { public StringField ProcParticipantEvaluationDesc; }

        [DisplayName("Proc Participant Clarification Request"), Expression("jProcParticipant.[ClarificationRequest]"), ReadOnly(true)]
        public String ProcParticipantClarificationRequest { get { return Fields.ProcParticipantClarificationRequest[this]; } set { Fields.ProcParticipantClarificationRequest[this] = value; } }
		public partial class RowFields { public StringField ProcParticipantClarificationRequest; }

        [DisplayName("Proc Participant Evaluation Conclusion Id"), Expression("jProcParticipant.[EvaluationConclusionId]"), ReadOnly(true)]
        public Int32? ProcParticipantEvaluationConclusionId { get { return Fields.ProcParticipantEvaluationConclusionId[this]; } set { Fields.ProcParticipantEvaluationConclusionId[this] = value; } }
		public partial class RowFields { public Int32Field ProcParticipantEvaluationConclusionId; }

        [DisplayName("Proc Participant Clarification Offer"), Expression("jProcParticipant.[ClarificationOffer]"), ReadOnly(true)]
        public String ProcParticipantClarificationOffer { get { return Fields.ProcParticipantClarificationOffer[this]; } set { Fields.ProcParticipantClarificationOffer[this] = value; } }
		public partial class RowFields { public StringField ProcParticipantClarificationOffer; }

        [DisplayName("Proc Participant Clarification Result"), Expression("jProcParticipant.[ClarificationResult]"), ReadOnly(true)]
        public String ProcParticipantClarificationResult { get { return Fields.ProcParticipantClarificationResult[this]; } set { Fields.ProcParticipantClarificationResult[this] = value; } }
		public partial class RowFields { public StringField ProcParticipantClarificationResult; }

        [DisplayName("Proc Participant Source"), Expression("jProcParticipant.[Source]"), ReadOnly(true)]
        public String ProcParticipantSource { get { return Fields.ProcParticipantSource[this]; } set { Fields.ProcParticipantSource[this] = value; } }
		public partial class RowFields { public StringField ProcParticipantSource; }

        [DisplayName("Proc Participant F5 Participant Submit Date"), Expression("jProcParticipant.[F5ParticipantSubmitDate]"), ReadOnly(true)]
        public DateTime? ProcParticipantF5ParticipantSubmitDate { get { return Fields.ProcParticipantF5ParticipantSubmitDate[this]; } set { Fields.ProcParticipantF5ParticipantSubmitDate[this] = value; } }
		public partial class RowFields { public DateTimeField ProcParticipantF5ParticipantSubmitDate; }

        [DisplayName("Proc Participant F5 Participant Submit By"), Expression("jProcParticipant.[F5ParticipantSubmitBy]"), ReadOnly(true)]
        public String ProcParticipantF5ParticipantSubmitBy { get { return Fields.ProcParticipantF5ParticipantSubmitBy[this]; } set { Fields.ProcParticipantF5ParticipantSubmitBy[this] = value; } }
		public partial class RowFields { public StringField ProcParticipantF5ParticipantSubmitBy; }

        [DisplayName("Proc Participant Final Bid Price"), Expression("jProcParticipant.[FinalBidPrice]"), ReadOnly(true)]
        public Decimal? ProcParticipantFinalBidPrice { get { return Fields.ProcParticipantFinalBidPrice[this]; } set { Fields.ProcParticipantFinalBidPrice[this] = value; } }
		public partial class RowFields { public DecimalField ProcParticipantFinalBidPrice; }

        [DisplayName("Proc Participant Submit Objection"), Expression("jProcParticipant.[SubmitObjection]"), ReadOnly(true)]
        public Boolean? ProcParticipantSubmitObjection { get { return Fields.ProcParticipantSubmitObjection[this]; } set { Fields.ProcParticipantSubmitObjection[this] = value; } }
		public partial class RowFields { public BooleanField ProcParticipantSubmitObjection; }

        [DisplayName("Proc Participant Objection Description"), Expression("jProcParticipant.[ObjectionDescription]"), ReadOnly(true)]
        public String ProcParticipantObjectionDescription { get { return Fields.ProcParticipantObjectionDescription[this]; } set { Fields.ProcParticipantObjectionDescription[this] = value; } }
		public partial class RowFields { public StringField ProcParticipantObjectionDescription; }

        [DisplayName("Proc Participant F15 Participant Submit Date"), Expression("jProcParticipant.[F15ParticipantSubmitDate]"), ReadOnly(true)]
        public DateTime? ProcParticipantF15ParticipantSubmitDate { get { return Fields.ProcParticipantF15ParticipantSubmitDate[this]; } set { Fields.ProcParticipantF15ParticipantSubmitDate[this] = value; } }
		public partial class RowFields { public DateTimeField ProcParticipantF15ParticipantSubmitDate; }

        [DisplayName("Proc Participant F15 Participant Submit By"), Expression("jProcParticipant.[F15ParticipantSubmitBy]"), ReadOnly(true)]
        public String ProcParticipantF15ParticipantSubmitBy { get { return Fields.ProcParticipantF15ParticipantSubmitBy[this]; } set { Fields.ProcParticipantF15ParticipantSubmitBy[this] = value; } }
		public partial class RowFields { public StringField ProcParticipantF15ParticipantSubmitBy; }

        [DisplayName("Proc Participant Invitation"), Expression("jProcParticipant.[Invitation]"), ReadOnly(true)]
        public Boolean? ProcParticipantInvitation { get { return Fields.ProcParticipantInvitation[this]; } set { Fields.ProcParticipantInvitation[this] = value; } }
		public partial class RowFields { public BooleanField ProcParticipantInvitation; }

        [DisplayName("Proc Participant Quote Desc"), Expression("jProcParticipant.[QuoteDesc]"), ReadOnly(true)]
        public String ProcParticipantQuoteDesc { get { return Fields.ProcParticipantQuoteDesc[this]; } set { Fields.ProcParticipantQuoteDesc[this] = value; } }
		public partial class RowFields { public StringField ProcParticipantQuoteDesc; }



        [DisplayName("Evaluation Conclusion Item Name"), Expression("jEvaluationConclusionItem.[Name]"), ReadOnly(true)]
        public String EvaluationConclusionItemName { get { return Fields.EvaluationConclusionItemName[this]; } set { Fields.EvaluationConclusionItemName[this] = value; } }
		public partial class RowFields { public StringField EvaluationConclusionItemName; }

        [DisplayName("Evaluation Conclusion Item Description"), Expression("jEvaluationConclusionItem.[Description]"), ReadOnly(true)]
        public String EvaluationConclusionItemDescription { get { return Fields.EvaluationConclusionItemDescription[this]; } set { Fields.EvaluationConclusionItemDescription[this] = value; } }
		public partial class RowFields { public StringField EvaluationConclusionItemDescription; }


        #endregion Foreign Fields


        IIdField IIdRow.IdField { get { return Fields.ProcParticipantItemId; } }

        StringField INameRow.NameField { get { return Fields.EvaluationDescription; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProcParticipantItemRow() : base(Fields) { }

		public partial class RowFields : RowFieldsBase { }
    }
}
