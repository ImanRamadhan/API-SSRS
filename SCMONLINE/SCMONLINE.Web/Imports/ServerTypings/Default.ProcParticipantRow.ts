namespace SCMONLINE.Default {
    export interface ProcParticipantRow {
        ProcParticipantId?: number;
        ProcurementId?: number;
        SequenceNo?: number;
        VendorId?: string;
        PriceDocumentFile?: string;
        PriceDocumentName?: string;
        TechSpecDocFile?: string;
        TechSpecDocName?: string;
        SupportingLetterFile?: string;
        SupportingLetterName?: string;
        CatalogFile?: string;
        CatalogName?: string;
        SubmitDocTnc?: boolean;
        SubmitDocTncDate?: string;
        AdminDocExists?: boolean;
        TechSpecDocExists?: boolean;
        SupportingLetterExists?: boolean;
        CatalogExists?: boolean;
        OpeningDocDesc?: string;
        AdminDocAtk?: number;
        TechSpecDocAtk?: number;
        SupportingLetterAtk?: number;
        CatalogAtk?: number;
        EvaluationDesc?: string;
        ClarificationRequest?: string;
        EvaluationConclusionId?: number;
        ClarificationOffer?: string;
        ClarificationResult?: string;
        Source?: string;
        F5ParticipantSubmitDate?: string;
        F5ParticipantSubmitBy?: string;
        FinalBidPrice?: number;
        SubmitObjection?: boolean;
        ObjectionDescription?: string;
        F15ParticipantSubmitDate?: string;
        F15ParticipantSubmitBy?: string;
        Invitation?: boolean;
        QuoteDesc?: string;
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
        ProcurementTechnicalExplanation?: string;
        ProcurementAdministrativeExplanation?: string;
        ProcurementOtherExplanation?: string;
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
        ProcurementEvaluationClosingPriceDate?: string;
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
        ProcurementF19SubmitDate?: string;
        ProcurementF19SubmitBy?: string;
        ProcurementProcurementMethodId?: string;
        ProcurementDistrict?: string;
        ProcurementCsms?: string;
        ProcurementMinScore?: string;
        ProcurementProcRejectTender?: boolean;
        ProcurementProcRejectTenderDesc?: string;
        AdminDocAtkName?: string;
        AdminDocAtkDescription?: string;
        TechSpecDocAtkName?: string;
        TechSpecDocAtkDescription?: string;
        SupportingLetterAtkName?: string;
        SupportingLetterAtkDescription?: string;
        CatalogAtkName?: string;
        CatalogAtkDescription?: string;
        EvaluationConclusionName?: string;
        EvaluationConclusionDescription?: string;
    }

    export namespace ProcParticipantRow {
        export const idProperty = 'ProcParticipantId';
        export const nameProperty = 'VendorId';
        export const localTextPrefix = 'Default.ProcParticipant';

        export declare const enum Fields {
            ProcParticipantId = "ProcParticipantId",
            ProcurementId = "ProcurementId",
            SequenceNo = "SequenceNo",
            VendorId = "VendorId",
            PriceDocumentFile = "PriceDocumentFile",
            PriceDocumentName = "PriceDocumentName",
            TechSpecDocFile = "TechSpecDocFile",
            TechSpecDocName = "TechSpecDocName",
            SupportingLetterFile = "SupportingLetterFile",
            SupportingLetterName = "SupportingLetterName",
            CatalogFile = "CatalogFile",
            CatalogName = "CatalogName",
            SubmitDocTnc = "SubmitDocTnc",
            SubmitDocTncDate = "SubmitDocTncDate",
            AdminDocExists = "AdminDocExists",
            TechSpecDocExists = "TechSpecDocExists",
            SupportingLetterExists = "SupportingLetterExists",
            CatalogExists = "CatalogExists",
            OpeningDocDesc = "OpeningDocDesc",
            AdminDocAtk = "AdminDocAtk",
            TechSpecDocAtk = "TechSpecDocAtk",
            SupportingLetterAtk = "SupportingLetterAtk",
            CatalogAtk = "CatalogAtk",
            EvaluationDesc = "EvaluationDesc",
            ClarificationRequest = "ClarificationRequest",
            EvaluationConclusionId = "EvaluationConclusionId",
            ClarificationOffer = "ClarificationOffer",
            ClarificationResult = "ClarificationResult",
            Source = "Source",
            F5ParticipantSubmitDate = "F5ParticipantSubmitDate",
            F5ParticipantSubmitBy = "F5ParticipantSubmitBy",
            FinalBidPrice = "FinalBidPrice",
            SubmitObjection = "SubmitObjection",
            ObjectionDescription = "ObjectionDescription",
            F15ParticipantSubmitDate = "F15ParticipantSubmitDate",
            F15ParticipantSubmitBy = "F15ParticipantSubmitBy",
            Invitation = "Invitation",
            QuoteDesc = "QuoteDesc",
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
            ProcurementTechnicalExplanation = "ProcurementTechnicalExplanation",
            ProcurementAdministrativeExplanation = "ProcurementAdministrativeExplanation",
            ProcurementOtherExplanation = "ProcurementOtherExplanation",
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
            ProcurementEvaluationClosingPriceDate = "ProcurementEvaluationClosingPriceDate",
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
            ProcurementF19SubmitDate = "ProcurementF19SubmitDate",
            ProcurementF19SubmitBy = "ProcurementF19SubmitBy",
            ProcurementProcurementMethodId = "ProcurementProcurementMethodId",
            ProcurementDistrict = "ProcurementDistrict",
            ProcurementCsms = "ProcurementCsms",
            ProcurementMinScore = "ProcurementMinScore",
            ProcurementProcRejectTender = "ProcurementProcRejectTender",
            ProcurementProcRejectTenderDesc = "ProcurementProcRejectTenderDesc",
            AdminDocAtkName = "AdminDocAtkName",
            AdminDocAtkDescription = "AdminDocAtkDescription",
            TechSpecDocAtkName = "TechSpecDocAtkName",
            TechSpecDocAtkDescription = "TechSpecDocAtkDescription",
            SupportingLetterAtkName = "SupportingLetterAtkName",
            SupportingLetterAtkDescription = "SupportingLetterAtkDescription",
            CatalogAtkName = "CatalogAtkName",
            CatalogAtkDescription = "CatalogAtkDescription",
            EvaluationConclusionName = "EvaluationConclusionName",
            EvaluationConclusionDescription = "EvaluationConclusionDescription"
        }
    }
}

