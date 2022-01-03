namespace SCMONLINE.Default {
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
        ProcParticipantF5ParticipantSubmitDate?: string;
        ProcParticipantF5ParticipantSubmitBy?: string;
        ProcParticipantFinalBidPrice?: number;
        ProcParticipantSubmitObjection?: boolean;
        ProcParticipantObjectionDescription?: string;
        ProcParticipantF15ParticipantSubmitDate?: string;
        ProcParticipantF15ParticipantSubmitBy?: string;
        ProcParticipantInvitation?: boolean;
        ProcParticipantQuoteDesc?: string;
        EvaluationConclusionItemName?: string;
        EvaluationConclusionItemDescription?: string;
    }

    export namespace ProcParticipantItemRow {
        export const idProperty = 'ProcParticipantItemId';
        export const nameProperty = 'EvaluationDescription';
        export const localTextPrefix = 'Default.ProcParticipantItem';

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
            ProcParticipantF5ParticipantSubmitDate = "ProcParticipantF5ParticipantSubmitDate",
            ProcParticipantF5ParticipantSubmitBy = "ProcParticipantF5ParticipantSubmitBy",
            ProcParticipantFinalBidPrice = "ProcParticipantFinalBidPrice",
            ProcParticipantSubmitObjection = "ProcParticipantSubmitObjection",
            ProcParticipantObjectionDescription = "ProcParticipantObjectionDescription",
            ProcParticipantF15ParticipantSubmitDate = "ProcParticipantF15ParticipantSubmitDate",
            ProcParticipantF15ParticipantSubmitBy = "ProcParticipantF15ParticipantSubmitBy",
            ProcParticipantInvitation = "ProcParticipantInvitation",
            ProcParticipantQuoteDesc = "ProcParticipantQuoteDesc",
            EvaluationConclusionItemName = "EvaluationConclusionItemName",
            EvaluationConclusionItemDescription = "EvaluationConclusionItemDescription"
        }
    }
}

