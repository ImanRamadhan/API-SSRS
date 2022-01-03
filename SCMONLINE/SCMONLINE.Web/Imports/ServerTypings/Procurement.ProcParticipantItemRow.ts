namespace SCMONLINE.Procurement {
    export interface ProcParticipantItemRow {
        ProcParticipantItemId?: number;
        ProcParticipantId?: number;
        ProcurementId?: number;
        RfqItemId?: number;
        BidPrice?: number;
        BidPriceVsOe?: number;
        BidPriceVsOePercentage?: number;
        Rank?: number;
        EvaluationDescription?: string;
        NegotiationPrice?: number;
        NpVsOe?: number;
        NpVsOePercentage?: number;
        NegotiationRank?: number;
        NegotiationDesc?: string;
        ProposeDisclaimer?: boolean;
        DisclaimerDesc?: string;
        EvaluationConclusionItemId?: number;
        ProcParticipantProcurementId?: number;
        ProcParticipantSequenceNo?: number;
        ProcParticipantVendorId?: string;
        VendorId?: string;
        VendorName?: string;
        ProcParticipantPriceDocumentFile?: string;
        ProcParticipantPriceDocumentName?: string;
        ProcParticipantTechSpecDocFile?: string;
        ProcParticipantTechSpecDocName?: string;
        ProcParticipantSupportingLetterFile?: string;
        ProcParticipantSupportingLetterName?: string;
        ProcParticipantCatalogFile?: string;
        ProcParticipantCatalogName?: string;
        ProcParticipantSubmitDocTnc?: boolean;
        ProcParticipantSubmitDocTncDate?: string;
        ProcParticipantAdminDocExists?: boolean;
        ProcParticipantTechSpecDocExists?: boolean;
        ProcParticipantSupportingLetterExists?: boolean;
        ProcParticipantCatalogExists?: boolean;
        ProcParticipantOpeningDocDesc?: string;
        ProcParticipantAdminDocAtk?: number;
        ProcParticipantTechSpecDocAtk?: number;
        ProcParticipantSupportingLetterAtk?: number;
        ProcParticipantCatalogAtk?: number;
        ProcParticipantEvaluationDesc?: string;
        ProcParticipantClarificationRequest?: string;
        ProcParticipantEvaluationConclusionId?: number;
        ProcParticipantClarificationOffer?: string;
        ProcParticipantClarificationResult?: string;
        ProcParticipantSource?: string;
        F5ParticipantSubmitDate?: string;
        F5ParticipantSubmitBy?: string;
        ProcurementProcurementTypeId?: string;
        ProcurementStatus?: string;
        ProcurementCollectiveNumber?: string;
        ProcurementTitle?: string;
        ProcurementClassification?: string;
        ProcurementQualification?: string;
        ProcurementRequestedBy?: string;
        ProcurementRequestorPosition?: string;
        ProcurementApprovedBy?: string;
        ProcurementApproverPosition?: string;
        ProcurementSapBidderListCreatedBy?: string;
        ProcurementSapBidderListCreatedDate?: string;
        ProcurementCreatedBy?: string;
        ProcurementCreatedDate?: string;
        ProcurementGuaranteePercentage?: number;
        ProcurementOfficeAddress?: number;
        ProcurementProcValueRangeId?: number;
        ProcurementCommitteeTypeId?: number;
        ProcurementPerformanceGuaranteeRequired?: boolean;
        ProcurementTenderPeriod?: number;
        ProcurementDeliveryTime?: number;
        ProcurementDestinationId?: number;
        ProcurementContractTypeId?: number;
        ProcurementCurrencyId?: string;
        ProcurementDocSubmitMethodId?: number;
        ProcurementAanwijzingExists?: boolean;
        ProcurementAanwijzingDate?: string;
        ProcurementAanwijzingClosingDate?: string;
        ProcurementAanwijzingLocation?: string;
        ProcurementAanwijzingClosingLocation?: string;
        ProcurementAanwijzingSecretary?: string;
        ProcurementAanwijzingSummary?: string;
        ProcurementFieldSurveyExists?: boolean;
        ProcurementFieldSurveyAddress?: string;
        ProcurementItbDocumentFile?: string;
        ProcurementItbDocumentName?: string;
        ProcurementRksDocumentFile?: string;
        ProcurementRksDocumentName?: string;
        ProcurementTenderDocSubmitOpenDate?: string;
        ProcurementTenderDocSubmitCloseDate?: string;
        ProcurementOrderTypeId?: string;
        ProcurementPurchDocNum?: string;
        ProcurementRfqDate?: string;
        ProcurementQuotationDeadline?: string;
        ProcurementPurchGroup?: string;
        ProcurementPrNo?: string;
        ProcurementAuthPersonName?: string;
        ProcurementAuthPosition?: string;
        ProcurementHeaderText?: string;
        ProcurementHeaderNote?: string;
        ProcurementWorkDescription?: string;
        ProcurementBankKey?: string;
        ProcurementPoCover?: string;
        ProcurementDeliveryAddress?: string;
        ProcurementToPTargVal?: string;
        ProcurementYourReference?: string;
        ProcurementOurReference?: string;
        ProcurementSalesPerson?: string;
        ProcurementTelephone?: string;
        ProcurementValidityStart?: string;
        ProcurementValidityEnd?: string;
        ProcurementItemInterval?: number;
        ProcurementSubItemInterval?: number;
        ProcurementWarranty?: string;
        ProcurementLanguage?: string;
        ProcurementReviewOeRequired?: boolean;
        ProcurementProcAgreement?: boolean;
        ProcurementProcAgreementDate?: string;
        ProcurementProcAsRequired?: boolean;
        ProcurementProcAsApproved?: boolean;
        ProcurementProcAsApprovedDate?: string;
        ProcurementProcAsDesc?: string;
        ProcurementFinalConclusionDesc?: string;
        ProcurementWinnerNominationDate?: string;
        ProcurementObjectionCloseDate?: string;
        ProcurementPoDocName?: string;
        ProcurementTemporaryPic?: string;
        ProcurementPoNumber?: string;
        ProcurementPoDocFile?: string;
        ProcurementF1SubmitDate?: string;
        ProcurementF1SubmitBy?: string;
        ProcurementF2SubmitDate?: string;
        ProcurementF2SubmitBy?: string;
        ProcurementF3SubmitDate?: string;
        ProcurementF3SubmitBy?: string;
        ProcurementF31SubmitDate?: string;
        ProcurementF31SubmitBy?: string;
        ProcurementF4SubmitDate?: string;
        ProcurementF4SubmitBy?: string;
        ProcurementF5SubmitDate?: string;
        ProcurementF5SubmitBy?: string;
        ProcurementF6SubmitDate?: string;
        ProcurementF6SubmitBy?: string;
        ProcurementF7SubmitDate?: string;
        ProcurementF7SubmitBy?: string;
        ProcurementF8SubmitDate?: string;
        ProcurementF8SubmitBy?: string;
        ProcurementF9SubmitDate?: string;
        ProcurementF9SubmitBy?: string;
        ProcurementF10SubmitDate?: string;
        ProcurementF10SubmitBy?: string;
        ProcurementF11SubmitDate?: string;
        ProcurementF11SubmitBy?: string;
        ProcurementF12SubmitDate?: string;
        ProcurementF12SubmitBy?: string;
        ProcurementF13SubmitDate?: string;
        ProcurementF13SubmitBy?: string;
        ProcurementF14SubmitDate?: string;
        ProcurementF14SubmitBy?: string;
        ProcurementF15SubmitDate?: string;
        ProcurementF15SubmitBy?: string;
        ProcurementF16SubmitDate?: string;
        ProcurementF16SubmitBy?: string;
        ProcurementF17SubmitDate?: string;
        ProcurementF17SubmitBy?: string;
        ProcurementProcurementMethodId?: string;
        RfqItemProcurementId?: number;
        RfqItemOwnerEstimateReview?: number;
        RfqItemOwnerEstimate?: number;
        RfqItemPurchasingDocument?: string;
        ItemSequence?: string;
        RfqItemDeletionIndicator?: string;
        RfqItemRfqStatus?: string;
        RfqItemLastChangedOn?: string;
        ShortText?: string;
        Material?: string;
        RfqItemPlant?: string;
        RfqItemStorageLocation?: string;
        RfqItemReqTrackingNumber?: string;
        RfqItemMaterialGroup?: string;
        RfqItemPurchasingInfoRec?: string;
        RfqItemVendorMaterialNo?: string;
        RfqItemTargetQuantity?: number;
        RfqItemOrderQuantity?: number;
        RfqItemOrderUnit?: string;
        RfqItemOrderPriceUnit?: string;
        RfqItemQuantityConversion?: number;
        RfqItemEqualTo?: number;
        RfqItemDenominator?: number;
        RfqItemNetOrderPrice?: number;
        RfqItemPriceUnit?: number;
        RfqItemNetOrderValue?: number;
        RfqItemGrossOrderValue?: number;
        RfqItemQuotationDeadline?: string;
        RfqItemGrProcessingTime?: number;
        RfqItemTaxCode?: string;
        RfqItemBaseUnitOfMeasure?: string;
        RfqItemShippingInstr?: string;
        RfqItemOaTargetValue?: number;
        RfqItemPriceDate?: string;
        RfqItemPurchDocCategory?: string;
        RfqItemEffectiveValue?: number;
        RfqItemAffectsCommitments?: string;
        RfqItemMaterialType?: string;
        RfqItemSubitemCategory?: string;
        RfqItemSubItems?: string;
        RfqItemSubtotal1?: number;
        RfqItemSubtotal2?: number;
        RfqItemSubtotal3?: number;
        RfqItemSubtotal4?: number;
        RfqItemSubtotal5?: number;
        EvaluationConclusionItemName?: string;
        EvaluationConclusionItemDescription?: string;
    }

    export namespace ProcParticipantItemRow {
        export const idProperty = 'ProcParticipantItemId';
        export const nameProperty = 'ProcurementTitle';
        export const localTextPrefix = 'Procurement.ProcParticipantItem';
        export const lookupKey = 'Procurement.ProcParticipantItem';

        export function getLookup(): Q.Lookup<ProcParticipantItemRow> {
            return Q.getLookup<ProcParticipantItemRow>('Procurement.ProcParticipantItem');
        }

        export declare const enum Fields {
            ProcParticipantItemId = "ProcParticipantItemId",
            ProcParticipantId = "ProcParticipantId",
            ProcurementId = "ProcurementId",
            RfqItemId = "RfqItemId",
            BidPrice = "BidPrice",
            BidPriceVsOe = "BidPriceVsOe",
            BidPriceVsOePercentage = "BidPriceVsOePercentage",
            Rank = "Rank",
            EvaluationDescription = "EvaluationDescription",
            NegotiationPrice = "NegotiationPrice",
            NpVsOe = "NpVsOe",
            NpVsOePercentage = "NpVsOePercentage",
            NegotiationRank = "NegotiationRank",
            NegotiationDesc = "NegotiationDesc",
            ProposeDisclaimer = "ProposeDisclaimer",
            DisclaimerDesc = "DisclaimerDesc",
            EvaluationConclusionItemId = "EvaluationConclusionItemId",
            ProcParticipantProcurementId = "ProcParticipantProcurementId",
            ProcParticipantSequenceNo = "ProcParticipantSequenceNo",
            ProcParticipantVendorId = "ProcParticipantVendorId",
            VendorId = "VendorId",
            VendorName = "VendorName",
            ProcParticipantPriceDocumentFile = "ProcParticipantPriceDocumentFile",
            ProcParticipantPriceDocumentName = "ProcParticipantPriceDocumentName",
            ProcParticipantTechSpecDocFile = "ProcParticipantTechSpecDocFile",
            ProcParticipantTechSpecDocName = "ProcParticipantTechSpecDocName",
            ProcParticipantSupportingLetterFile = "ProcParticipantSupportingLetterFile",
            ProcParticipantSupportingLetterName = "ProcParticipantSupportingLetterName",
            ProcParticipantCatalogFile = "ProcParticipantCatalogFile",
            ProcParticipantCatalogName = "ProcParticipantCatalogName",
            ProcParticipantSubmitDocTnc = "ProcParticipantSubmitDocTnc",
            ProcParticipantSubmitDocTncDate = "ProcParticipantSubmitDocTncDate",
            ProcParticipantAdminDocExists = "ProcParticipantAdminDocExists",
            ProcParticipantTechSpecDocExists = "ProcParticipantTechSpecDocExists",
            ProcParticipantSupportingLetterExists = "ProcParticipantSupportingLetterExists",
            ProcParticipantCatalogExists = "ProcParticipantCatalogExists",
            ProcParticipantOpeningDocDesc = "ProcParticipantOpeningDocDesc",
            ProcParticipantAdminDocAtk = "ProcParticipantAdminDocAtk",
            ProcParticipantTechSpecDocAtk = "ProcParticipantTechSpecDocAtk",
            ProcParticipantSupportingLetterAtk = "ProcParticipantSupportingLetterAtk",
            ProcParticipantCatalogAtk = "ProcParticipantCatalogAtk",
            ProcParticipantEvaluationDesc = "ProcParticipantEvaluationDesc",
            ProcParticipantClarificationRequest = "ProcParticipantClarificationRequest",
            ProcParticipantEvaluationConclusionId = "ProcParticipantEvaluationConclusionId",
            ProcParticipantClarificationOffer = "ProcParticipantClarificationOffer",
            ProcParticipantClarificationResult = "ProcParticipantClarificationResult",
            ProcParticipantSource = "ProcParticipantSource",
            F5ParticipantSubmitDate = "F5ParticipantSubmitDate",
            F5ParticipantSubmitBy = "F5ParticipantSubmitBy",
            ProcurementProcurementTypeId = "ProcurementProcurementTypeId",
            ProcurementStatus = "ProcurementStatus",
            ProcurementCollectiveNumber = "ProcurementCollectiveNumber",
            ProcurementTitle = "ProcurementTitle",
            ProcurementClassification = "ProcurementClassification",
            ProcurementQualification = "ProcurementQualification",
            ProcurementRequestedBy = "ProcurementRequestedBy",
            ProcurementRequestorPosition = "ProcurementRequestorPosition",
            ProcurementApprovedBy = "ProcurementApprovedBy",
            ProcurementApproverPosition = "ProcurementApproverPosition",
            ProcurementSapBidderListCreatedBy = "ProcurementSapBidderListCreatedBy",
            ProcurementSapBidderListCreatedDate = "ProcurementSapBidderListCreatedDate",
            ProcurementCreatedBy = "ProcurementCreatedBy",
            ProcurementCreatedDate = "ProcurementCreatedDate",
            ProcurementGuaranteePercentage = "ProcurementGuaranteePercentage",
            ProcurementOfficeAddress = "ProcurementOfficeAddress",
            ProcurementProcValueRangeId = "ProcurementProcValueRangeId",
            ProcurementCommitteeTypeId = "ProcurementCommitteeTypeId",
            ProcurementPerformanceGuaranteeRequired = "ProcurementPerformanceGuaranteeRequired",
            ProcurementTenderPeriod = "ProcurementTenderPeriod",
            ProcurementDeliveryTime = "ProcurementDeliveryTime",
            ProcurementDestinationId = "ProcurementDestinationId",
            ProcurementContractTypeId = "ProcurementContractTypeId",
            ProcurementCurrencyId = "ProcurementCurrencyId",
            ProcurementDocSubmitMethodId = "ProcurementDocSubmitMethodId",
            ProcurementAanwijzingExists = "ProcurementAanwijzingExists",
            ProcurementAanwijzingDate = "ProcurementAanwijzingDate",
            ProcurementAanwijzingClosingDate = "ProcurementAanwijzingClosingDate",
            ProcurementAanwijzingLocation = "ProcurementAanwijzingLocation",
            ProcurementAanwijzingClosingLocation = "ProcurementAanwijzingClosingLocation",
            ProcurementAanwijzingSecretary = "ProcurementAanwijzingSecretary",
            ProcurementAanwijzingSummary = "ProcurementAanwijzingSummary",
            ProcurementFieldSurveyExists = "ProcurementFieldSurveyExists",
            ProcurementFieldSurveyAddress = "ProcurementFieldSurveyAddress",
            ProcurementItbDocumentFile = "ProcurementItbDocumentFile",
            ProcurementItbDocumentName = "ProcurementItbDocumentName",
            ProcurementRksDocumentFile = "ProcurementRksDocumentFile",
            ProcurementRksDocumentName = "ProcurementRksDocumentName",
            ProcurementTenderDocSubmitOpenDate = "ProcurementTenderDocSubmitOpenDate",
            ProcurementTenderDocSubmitCloseDate = "ProcurementTenderDocSubmitCloseDate",
            ProcurementOrderTypeId = "ProcurementOrderTypeId",
            ProcurementPurchDocNum = "ProcurementPurchDocNum",
            ProcurementRfqDate = "ProcurementRfqDate",
            ProcurementQuotationDeadline = "ProcurementQuotationDeadline",
            ProcurementPurchGroup = "ProcurementPurchGroup",
            ProcurementPrNo = "ProcurementPrNo",
            ProcurementAuthPersonName = "ProcurementAuthPersonName",
            ProcurementAuthPosition = "ProcurementAuthPosition",
            ProcurementHeaderText = "ProcurementHeaderText",
            ProcurementHeaderNote = "ProcurementHeaderNote",
            ProcurementWorkDescription = "ProcurementWorkDescription",
            ProcurementBankKey = "ProcurementBankKey",
            ProcurementPoCover = "ProcurementPoCover",
            ProcurementDeliveryAddress = "ProcurementDeliveryAddress",
            ProcurementToPTargVal = "ProcurementToPTargVal",
            ProcurementYourReference = "ProcurementYourReference",
            ProcurementOurReference = "ProcurementOurReference",
            ProcurementSalesPerson = "ProcurementSalesPerson",
            ProcurementTelephone = "ProcurementTelephone",
            ProcurementValidityStart = "ProcurementValidityStart",
            ProcurementValidityEnd = "ProcurementValidityEnd",
            ProcurementItemInterval = "ProcurementItemInterval",
            ProcurementSubItemInterval = "ProcurementSubItemInterval",
            ProcurementWarranty = "ProcurementWarranty",
            ProcurementLanguage = "ProcurementLanguage",
            ProcurementReviewOeRequired = "ProcurementReviewOeRequired",
            ProcurementProcAgreement = "ProcurementProcAgreement",
            ProcurementProcAgreementDate = "ProcurementProcAgreementDate",
            ProcurementProcAsRequired = "ProcurementProcAsRequired",
            ProcurementProcAsApproved = "ProcurementProcAsApproved",
            ProcurementProcAsApprovedDate = "ProcurementProcAsApprovedDate",
            ProcurementProcAsDesc = "ProcurementProcAsDesc",
            ProcurementFinalConclusionDesc = "ProcurementFinalConclusionDesc",
            ProcurementWinnerNominationDate = "ProcurementWinnerNominationDate",
            ProcurementObjectionCloseDate = "ProcurementObjectionCloseDate",
            ProcurementPoDocName = "ProcurementPoDocName",
            ProcurementTemporaryPic = "ProcurementTemporaryPic",
            ProcurementPoNumber = "ProcurementPoNumber",
            ProcurementPoDocFile = "ProcurementPoDocFile",
            ProcurementF1SubmitDate = "ProcurementF1SubmitDate",
            ProcurementF1SubmitBy = "ProcurementF1SubmitBy",
            ProcurementF2SubmitDate = "ProcurementF2SubmitDate",
            ProcurementF2SubmitBy = "ProcurementF2SubmitBy",
            ProcurementF3SubmitDate = "ProcurementF3SubmitDate",
            ProcurementF3SubmitBy = "ProcurementF3SubmitBy",
            ProcurementF31SubmitDate = "ProcurementF31SubmitDate",
            ProcurementF31SubmitBy = "ProcurementF31SubmitBy",
            ProcurementF4SubmitDate = "ProcurementF4SubmitDate",
            ProcurementF4SubmitBy = "ProcurementF4SubmitBy",
            ProcurementF5SubmitDate = "ProcurementF5SubmitDate",
            ProcurementF5SubmitBy = "ProcurementF5SubmitBy",
            ProcurementF6SubmitDate = "ProcurementF6SubmitDate",
            ProcurementF6SubmitBy = "ProcurementF6SubmitBy",
            ProcurementF7SubmitDate = "ProcurementF7SubmitDate",
            ProcurementF7SubmitBy = "ProcurementF7SubmitBy",
            ProcurementF8SubmitDate = "ProcurementF8SubmitDate",
            ProcurementF8SubmitBy = "ProcurementF8SubmitBy",
            ProcurementF9SubmitDate = "ProcurementF9SubmitDate",
            ProcurementF9SubmitBy = "ProcurementF9SubmitBy",
            ProcurementF10SubmitDate = "ProcurementF10SubmitDate",
            ProcurementF10SubmitBy = "ProcurementF10SubmitBy",
            ProcurementF11SubmitDate = "ProcurementF11SubmitDate",
            ProcurementF11SubmitBy = "ProcurementF11SubmitBy",
            ProcurementF12SubmitDate = "ProcurementF12SubmitDate",
            ProcurementF12SubmitBy = "ProcurementF12SubmitBy",
            ProcurementF13SubmitDate = "ProcurementF13SubmitDate",
            ProcurementF13SubmitBy = "ProcurementF13SubmitBy",
            ProcurementF14SubmitDate = "ProcurementF14SubmitDate",
            ProcurementF14SubmitBy = "ProcurementF14SubmitBy",
            ProcurementF15SubmitDate = "ProcurementF15SubmitDate",
            ProcurementF15SubmitBy = "ProcurementF15SubmitBy",
            ProcurementF16SubmitDate = "ProcurementF16SubmitDate",
            ProcurementF16SubmitBy = "ProcurementF16SubmitBy",
            ProcurementF17SubmitDate = "ProcurementF17SubmitDate",
            ProcurementF17SubmitBy = "ProcurementF17SubmitBy",
            ProcurementProcurementMethodId = "ProcurementProcurementMethodId",
            RfqItemProcurementId = "RfqItemProcurementId",
            RfqItemOwnerEstimateReview = "RfqItemOwnerEstimateReview",
            RfqItemOwnerEstimate = "RfqItemOwnerEstimate",
            RfqItemPurchasingDocument = "RfqItemPurchasingDocument",
            ItemSequence = "ItemSequence",
            RfqItemDeletionIndicator = "RfqItemDeletionIndicator",
            RfqItemRfqStatus = "RfqItemRfqStatus",
            RfqItemLastChangedOn = "RfqItemLastChangedOn",
            ShortText = "ShortText",
            Material = "Material",
            RfqItemPlant = "RfqItemPlant",
            RfqItemStorageLocation = "RfqItemStorageLocation",
            RfqItemReqTrackingNumber = "RfqItemReqTrackingNumber",
            RfqItemMaterialGroup = "RfqItemMaterialGroup",
            RfqItemPurchasingInfoRec = "RfqItemPurchasingInfoRec",
            RfqItemVendorMaterialNo = "RfqItemVendorMaterialNo",
            RfqItemTargetQuantity = "RfqItemTargetQuantity",
            RfqItemOrderQuantity = "RfqItemOrderQuantity",
            RfqItemOrderUnit = "RfqItemOrderUnit",
            RfqItemOrderPriceUnit = "RfqItemOrderPriceUnit",
            RfqItemQuantityConversion = "RfqItemQuantityConversion",
            RfqItemEqualTo = "RfqItemEqualTo",
            RfqItemDenominator = "RfqItemDenominator",
            RfqItemNetOrderPrice = "RfqItemNetOrderPrice",
            RfqItemPriceUnit = "RfqItemPriceUnit",
            RfqItemNetOrderValue = "RfqItemNetOrderValue",
            RfqItemGrossOrderValue = "RfqItemGrossOrderValue",
            RfqItemQuotationDeadline = "RfqItemQuotationDeadline",
            RfqItemGrProcessingTime = "RfqItemGrProcessingTime",
            RfqItemTaxCode = "RfqItemTaxCode",
            RfqItemBaseUnitOfMeasure = "RfqItemBaseUnitOfMeasure",
            RfqItemShippingInstr = "RfqItemShippingInstr",
            RfqItemOaTargetValue = "RfqItemOaTargetValue",
            RfqItemPriceDate = "RfqItemPriceDate",
            RfqItemPurchDocCategory = "RfqItemPurchDocCategory",
            RfqItemEffectiveValue = "RfqItemEffectiveValue",
            RfqItemAffectsCommitments = "RfqItemAffectsCommitments",
            RfqItemMaterialType = "RfqItemMaterialType",
            RfqItemSubitemCategory = "RfqItemSubitemCategory",
            RfqItemSubItems = "RfqItemSubItems",
            RfqItemSubtotal1 = "RfqItemSubtotal1",
            RfqItemSubtotal2 = "RfqItemSubtotal2",
            RfqItemSubtotal3 = "RfqItemSubtotal3",
            RfqItemSubtotal4 = "RfqItemSubtotal4",
            RfqItemSubtotal5 = "RfqItemSubtotal5",
            EvaluationConclusionItemName = "EvaluationConclusionItemName",
            EvaluationConclusionItemDescription = "EvaluationConclusionItemDescription"
        }
    }
}

