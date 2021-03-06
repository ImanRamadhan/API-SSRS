namespace SCMONLINE.Procurement {
    export interface ProcurementRow {
        ProcurementId?: number;
        ProcurementTypeId?: string;
        Status?: string;
        CollectiveNumber?: string;
        Title?: string;
        Classification?: string;
        Qualification?: string;
        RequestedBy?: string;
        RequestorPosition?: string;
        ApprovedBy?: string;
        ApproverPosition?: string;
        SapBidderListCreatedBy?: string;
        SapBidderListCreatedDate?: string;
        CreatedBy?: string;
        CreatedDate?: string;
        GuaranteePercentage?: number;
        OfficeAddress?: number;
        ProcValueRangeId?: number;
        CommitteeTypeId?: number;
        PerformanceGuaranteeRequired?: boolean;
        TenderPeriod?: number;
        DeliveryTime?: number;
        DestinationId?: number;
        ContractTypeId?: number;
        CurrencyId?: string;
        DocSubmitMethodId?: number;
        AanwijzingExists?: boolean;
        AanwijzingDate?: string;
        AanwijzingClosingDate?: string;
        AanwijzingLocation?: string;
        AanwijzingClosingLocation?: string;
        AanwijzingSecretary?: string;
        AdministrativeExplanation?: string;
        TechnicalExplanation?: string;
        OtherExplanation?: string;
        AanwijzingSummary?: string;
        FieldSurveyExists?: _Ext.AdaTidakAda;
        FieldSurveyAddress?: string;
        ItbDocumentFile?: string;
        ItbDocumentName?: string;
        RksDocumentFile?: string;
        RksDocumentName?: string;
        TenderDocSubmitOpenDate?: string;
        TenderDocSubmitCloseDate?: string;
        OrderTypeId?: string;
        PurchDocNum?: string;
        RfqDate?: string;
        QuotationDeadline?: string;
        PurchGroup?: string;
        PrNo?: string;
        AuthPersonName?: string;
        AuthPosition?: string;
        HeaderText?: string;
        HeaderNote?: string;
        WorkDescription?: string;
        BankKey?: string;
        PoCover?: string;
        DeliveryAddress?: string;
        ToPTargVal?: string;
        YourReference?: string;
        OurReference?: string;
        SalesPerson?: string;
        Telephone?: string;
        ValidityStart?: string;
        ValidityEnd?: string;
        ItemInterval?: number;
        SubItemInterval?: number;
        Warranty?: string;
        Language?: string;
        EvaluationClosingPriceDate?: string;
        ReviewOeRequired?: boolean;
        ProcAgreement?: _Ext.ApproveTidakApprove;
        ProcAgreementDate?: string;
        ProcAsRequired?: _Ext.YaTidak;
        ProcAsApproved?: _Ext.ApproveTidakApprove;
        ProcAsApprovedDate?: string;
        ProcAsDesc?: string;
        FinalConclusionDesc?: string;
        WinnerNominationDate?: string;
        ObjectionCloseDate?: string;
        PoDocName?: string;
        TemporaryPic?: string;
        PoNumber?: string;
        PoDocFile?: string;
        F1SubmitDate?: string;
        F1SubmitBy?: string;
        F2SubmitDate?: string;
        F2SubmitBy?: string;
        F3SubmitDate?: string;
        F3SubmitBy?: string;
        F31SubmitDate?: string;
        F31SubmitBy?: string;
        F4SubmitDate?: string;
        F4SubmitBy?: string;
        F5SubmitDate?: string;
        F5SubmitBy?: string;
        F6SubmitDate?: string;
        F6SubmitBy?: string;
        F7SubmitDate?: string;
        F7SubmitBy?: string;
        F8SubmitDate?: string;
        F8SubmitBy?: string;
        F9SubmitDate?: string;
        F9SubmitBy?: string;
        F10SubmitDate?: string;
        F10SubmitBy?: string;
        F11SubmitDate?: string;
        F11SubmitBy?: string;
        F12SubmitDate?: string;
        F12SubmitBy?: string;
        F13SubmitDate?: string;
        F13SubmitBy?: string;
        F14SubmitDate?: string;
        F14SubmitBy?: string;
        F15SubmitDate?: string;
        F15SubmitBy?: string;
        F16SubmitDate?: string;
        F16SubmitBy?: string;
        F17SubmitDate?: string;
        F17SubmitBy?: string;
        F19SubmitDate?: string;
        F19SubmitBy?: string;
        ProcurementMethodId?: string;
        District?: string;
        Csms?: string;
        CommitteeMember?: CommitteeMemberRow[];
        ProcParticipant?: ProcParticipantRow[];
        RfqTexts?: RfqTextRow[];
        RfqItems?: RfqItemRow[];
        ProcParticipantItems?: ProcParticipantItemRow[];
        ProcPurchaseRequests?: ProcPrRow[];
        RequestTerms?: string;
        MinScore?: string;
        ProcRejectTender?: _Ext.LelangGagalLelang;
        ProcRejectTenderDesc?: string;
        ProcurementTypeName?: string;
        ProcurementTypeDescription?: string;
        StatusName?: string;
        StatusDescription?: string;
        StatusSequence?: number;
        ClassificationAssociationCode?: string;
        ClassificationAreaCode?: string;
        ClassificationVendorClass?: string;
        ClassificationKodeJenisJasa?: string;
        ClassificationClassificationDescr?: string;
        OfficeAddressName?: string;
        OfficeAddressDescription?: string;
        OfficeAddressAddressTypeId?: number;
        ProcValueRangeName?: string;
        ProcValueRangeDescription?: string;
        CommitteeTypeName?: string;
        CommitteeTypeDescription?: string;
        DestinationName?: string;
        DestinationDescription?: string;
        DestinationAddressTypeId?: number;
        ContractTypeName?: string;
        ContractTypeDescription?: string;
        CurrencyName?: string;
        CurrencyDescription?: string;
        DocSubmitMethodName?: string;
        DocSubmitMethodDescription?: string;
        OrderTypeName?: string;
        OrderTypeDescription?: string;
        ProcurementMethodName?: string;
        ProcurementMethodDescription?: string;
    }

    export namespace ProcurementRow {
        export const idProperty = 'ProcurementId';
        export const nameProperty = 'Title';
        export const localTextPrefix = 'Procurement.Procurement';
        export const lookupKey = 'Procurement.Procurement';

        export function getLookup(): Q.Lookup<ProcurementRow> {
            return Q.getLookup<ProcurementRow>('Procurement.Procurement');
        }

        export declare const enum Fields {
            ProcurementId = "ProcurementId",
            ProcurementTypeId = "ProcurementTypeId",
            Status = "Status",
            CollectiveNumber = "CollectiveNumber",
            Title = "Title",
            Classification = "Classification",
            Qualification = "Qualification",
            RequestedBy = "RequestedBy",
            RequestorPosition = "RequestorPosition",
            ApprovedBy = "ApprovedBy",
            ApproverPosition = "ApproverPosition",
            SapBidderListCreatedBy = "SapBidderListCreatedBy",
            SapBidderListCreatedDate = "SapBidderListCreatedDate",
            CreatedBy = "CreatedBy",
            CreatedDate = "CreatedDate",
            GuaranteePercentage = "GuaranteePercentage",
            OfficeAddress = "OfficeAddress",
            ProcValueRangeId = "ProcValueRangeId",
            CommitteeTypeId = "CommitteeTypeId",
            PerformanceGuaranteeRequired = "PerformanceGuaranteeRequired",
            TenderPeriod = "TenderPeriod",
            DeliveryTime = "DeliveryTime",
            DestinationId = "DestinationId",
            ContractTypeId = "ContractTypeId",
            CurrencyId = "CurrencyId",
            DocSubmitMethodId = "DocSubmitMethodId",
            AanwijzingExists = "AanwijzingExists",
            AanwijzingDate = "AanwijzingDate",
            AanwijzingClosingDate = "AanwijzingClosingDate",
            AanwijzingLocation = "AanwijzingLocation",
            AanwijzingClosingLocation = "AanwijzingClosingLocation",
            AanwijzingSecretary = "AanwijzingSecretary",
            AdministrativeExplanation = "AdministrativeExplanation",
            TechnicalExplanation = "TechnicalExplanation",
            OtherExplanation = "OtherExplanation",
            AanwijzingSummary = "AanwijzingSummary",
            FieldSurveyExists = "FieldSurveyExists",
            FieldSurveyAddress = "FieldSurveyAddress",
            ItbDocumentFile = "ItbDocumentFile",
            ItbDocumentName = "ItbDocumentName",
            RksDocumentFile = "RksDocumentFile",
            RksDocumentName = "RksDocumentName",
            TenderDocSubmitOpenDate = "TenderDocSubmitOpenDate",
            TenderDocSubmitCloseDate = "TenderDocSubmitCloseDate",
            OrderTypeId = "OrderTypeId",
            PurchDocNum = "PurchDocNum",
            RfqDate = "RfqDate",
            QuotationDeadline = "QuotationDeadline",
            PurchGroup = "PurchGroup",
            PrNo = "PrNo",
            AuthPersonName = "AuthPersonName",
            AuthPosition = "AuthPosition",
            HeaderText = "HeaderText",
            HeaderNote = "HeaderNote",
            WorkDescription = "WorkDescription",
            BankKey = "BankKey",
            PoCover = "PoCover",
            DeliveryAddress = "DeliveryAddress",
            ToPTargVal = "ToPTargVal",
            YourReference = "YourReference",
            OurReference = "OurReference",
            SalesPerson = "SalesPerson",
            Telephone = "Telephone",
            ValidityStart = "ValidityStart",
            ValidityEnd = "ValidityEnd",
            ItemInterval = "ItemInterval",
            SubItemInterval = "SubItemInterval",
            Warranty = "Warranty",
            Language = "Language",
            EvaluationClosingPriceDate = "EvaluationClosingPriceDate",
            ReviewOeRequired = "ReviewOeRequired",
            ProcAgreement = "ProcAgreement",
            ProcAgreementDate = "ProcAgreementDate",
            ProcAsRequired = "ProcAsRequired",
            ProcAsApproved = "ProcAsApproved",
            ProcAsApprovedDate = "ProcAsApprovedDate",
            ProcAsDesc = "ProcAsDesc",
            FinalConclusionDesc = "FinalConclusionDesc",
            WinnerNominationDate = "WinnerNominationDate",
            ObjectionCloseDate = "ObjectionCloseDate",
            PoDocName = "PoDocName",
            TemporaryPic = "TemporaryPic",
            PoNumber = "PoNumber",
            PoDocFile = "PoDocFile",
            F1SubmitDate = "F1SubmitDate",
            F1SubmitBy = "F1SubmitBy",
            F2SubmitDate = "F2SubmitDate",
            F2SubmitBy = "F2SubmitBy",
            F3SubmitDate = "F3SubmitDate",
            F3SubmitBy = "F3SubmitBy",
            F31SubmitDate = "F31SubmitDate",
            F31SubmitBy = "F31SubmitBy",
            F4SubmitDate = "F4SubmitDate",
            F4SubmitBy = "F4SubmitBy",
            F5SubmitDate = "F5SubmitDate",
            F5SubmitBy = "F5SubmitBy",
            F6SubmitDate = "F6SubmitDate",
            F6SubmitBy = "F6SubmitBy",
            F7SubmitDate = "F7SubmitDate",
            F7SubmitBy = "F7SubmitBy",
            F8SubmitDate = "F8SubmitDate",
            F8SubmitBy = "F8SubmitBy",
            F9SubmitDate = "F9SubmitDate",
            F9SubmitBy = "F9SubmitBy",
            F10SubmitDate = "F10SubmitDate",
            F10SubmitBy = "F10SubmitBy",
            F11SubmitDate = "F11SubmitDate",
            F11SubmitBy = "F11SubmitBy",
            F12SubmitDate = "F12SubmitDate",
            F12SubmitBy = "F12SubmitBy",
            F13SubmitDate = "F13SubmitDate",
            F13SubmitBy = "F13SubmitBy",
            F14SubmitDate = "F14SubmitDate",
            F14SubmitBy = "F14SubmitBy",
            F15SubmitDate = "F15SubmitDate",
            F15SubmitBy = "F15SubmitBy",
            F16SubmitDate = "F16SubmitDate",
            F16SubmitBy = "F16SubmitBy",
            F17SubmitDate = "F17SubmitDate",
            F17SubmitBy = "F17SubmitBy",
            F19SubmitDate = "F19SubmitDate",
            F19SubmitBy = "F19SubmitBy",
            ProcurementMethodId = "ProcurementMethodId",
            District = "District",
            Csms = "Csms",
            CommitteeMember = "CommitteeMember",
            ProcParticipant = "ProcParticipant",
            RfqTexts = "RfqTexts",
            RfqItems = "RfqItems",
            ProcParticipantItems = "ProcParticipantItems",
            ProcPurchaseRequests = "ProcPurchaseRequests",
            RequestTerms = "RequestTerms",
            MinScore = "MinScore",
            ProcRejectTender = "ProcRejectTender",
            ProcRejectTenderDesc = "ProcRejectTenderDesc",
            ProcurementTypeName = "ProcurementTypeName",
            ProcurementTypeDescription = "ProcurementTypeDescription",
            StatusName = "StatusName",
            StatusDescription = "StatusDescription",
            StatusSequence = "StatusSequence",
            ClassificationAssociationCode = "ClassificationAssociationCode",
            ClassificationAreaCode = "ClassificationAreaCode",
            ClassificationVendorClass = "ClassificationVendorClass",
            ClassificationKodeJenisJasa = "ClassificationKodeJenisJasa",
            ClassificationClassificationDescr = "ClassificationClassificationDescr",
            OfficeAddressName = "OfficeAddressName",
            OfficeAddressDescription = "OfficeAddressDescription",
            OfficeAddressAddressTypeId = "OfficeAddressAddressTypeId",
            ProcValueRangeName = "ProcValueRangeName",
            ProcValueRangeDescription = "ProcValueRangeDescription",
            CommitteeTypeName = "CommitteeTypeName",
            CommitteeTypeDescription = "CommitteeTypeDescription",
            DestinationName = "DestinationName",
            DestinationDescription = "DestinationDescription",
            DestinationAddressTypeId = "DestinationAddressTypeId",
            ContractTypeName = "ContractTypeName",
            ContractTypeDescription = "ContractTypeDescription",
            CurrencyName = "CurrencyName",
            CurrencyDescription = "CurrencyDescription",
            DocSubmitMethodName = "DocSubmitMethodName",
            DocSubmitMethodDescription = "DocSubmitMethodDescription",
            OrderTypeName = "OrderTypeName",
            OrderTypeDescription = "OrderTypeDescription",
            ProcurementMethodName = "ProcurementMethodName",
            ProcurementMethodDescription = "ProcurementMethodDescription"
        }
    }
}

