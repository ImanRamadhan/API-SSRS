namespace SCMONLINE.Procurement {
    export interface ProcurementForm {
        ProcurementTypeId: Serenity.LookupEditor;
        Status: Serenity.LookupEditor;
        CollectiveNumber: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        Classification: Serenity.StringEditor;
        Qualification: Serenity.StringEditor;
        RequestedBy: Serenity.StringEditor;
        RequestorPosition: Serenity.StringEditor;
        ApprovedBy: Serenity.StringEditor;
        ApproverPosition: Serenity.StringEditor;
        SapBidderListCreatedBy: Serenity.StringEditor;
        SapBidderListCreatedDate: Serenity.DateTimeEditor;
        CreatedBy: Serenity.StringEditor;
        CreatedDate: Serenity.DateTimeEditor;
        GuaranteePercentage: Serenity.DecimalEditor;
        OfficeAddress: Serenity.LookupEditor;
        ProcValueRangeId: Serenity.LookupEditor;
        CommitteeTypeId: Serenity.LookupEditor;
        PerformanceGuaranteeRequired: _Ext.YaTidakEditor;
        TenderPeriod: Serenity.IntegerEditor;
        DeliveryTime: Serenity.IntegerEditor;
        DestinationId: Serenity.LookupEditor;
        ContractTypeId: Serenity.LookupEditor;
        CurrencyId: Serenity.LookupEditor;
        DocSubmitMethodId: Serenity.LookupEditor;
        AanwijzingExists: Serenity.BooleanEditor;
        AanwijzingDate: Serenity.DateEditor;
        AanwijzingClosingDate: Serenity.DateEditor;
        AanwijzingLocation: Serenity.TextAreaEditor;
        AanwijzingClosingLocation: Serenity.TextAreaEditor;
        AanwijzingSecretary: Serenity.StringEditor;
        AanwijzingSummary: Serenity.TextAreaEditor;
        FieldSurveyExists: Serenity.EnumEditor;
        FieldSurveyAddress: Serenity.TextAreaEditor;
        ItbDocumentFile: Serenity.ImageUploadEditor;
        ItbDocumentName: Serenity.StringEditor;
        RksDocumentFile: Serenity.ImageUploadEditor;
        RksDocumentName: Serenity.StringEditor;
        TenderDocSubmitOpenDate: Serenity.DateTimeEditor;
        TenderDocSubmitCloseDate: Serenity.DateTimeEditor;
        OrderTypeId: Serenity.LookupEditor;
        PurchDocNum: Serenity.StringEditor;
        RfqDate: Serenity.DateTimeEditor;
        QuotationDeadline: Serenity.DateTimeEditor;
        PurchGroup: Serenity.StringEditor;
        PrNo: Serenity.StringEditor;
        AuthPersonName: Serenity.StringEditor;
        AuthPosition: Serenity.StringEditor;
        HeaderText: Serenity.TextAreaEditor;
        HeaderNote: Serenity.TextAreaEditor;
        WorkDescription: Serenity.TextAreaEditor;
        BankKey: Serenity.StringEditor;
        PoCover: Serenity.StringEditor;
        DeliveryAddress: Serenity.TextAreaEditor;
        ToPTargVal: Serenity.StringEditor;
        YourReference: Serenity.StringEditor;
        OurReference: Serenity.StringEditor;
        SalesPerson: Serenity.StringEditor;
        Telephone: Serenity.StringEditor;
        ValidityStart: Serenity.DateEditor;
        ValidityEnd: Serenity.DateEditor;
        ItemInterval: Serenity.DecimalEditor;
        SubItemInterval: Serenity.DecimalEditor;
        Warranty: Serenity.DateEditor;
        Language: Serenity.StringEditor;
        ReviewOeRequired: _Ext.YaTidakEditor;
        ProcAgreement: Serenity.EnumEditor;
        ProcAgreementDate: Serenity.DateTimeEditor;
        ProcAsRequired: Serenity.EnumEditor;
        ProcAsApproved: Serenity.EnumEditor;
        ProcAsApprovedDate: Serenity.DateEditor;
        ProcAsDesc: Serenity.StringEditor;
        FinalConclusionDesc: Serenity.TextAreaEditor;
        WinnerNominationDate: Serenity.DateTimeEditor;
        ObjectionCloseDate: Serenity.DateTimeEditor;
        PoDocName: Serenity.StringEditor;
        TemporaryPic: Serenity.StringEditor;
        PoNumber: Serenity.StringEditor;
        PoDocFile: Serenity.ImageUploadEditor;
        F1SubmitDate: Serenity.DateTimeEditor;
        F1SubmitBy: Serenity.StringEditor;
        F2SubmitDate: Serenity.DateTimeEditor;
        F2SubmitBy: Serenity.StringEditor;
        F3SubmitDate: Serenity.DateTimeEditor;
        F3SubmitBy: Serenity.StringEditor;
        F31SubmitDate: Serenity.DateTimeEditor;
        F31SubmitBy: Serenity.StringEditor;
        F4SubmitDate: Serenity.DateTimeEditor;
        F4SubmitBy: Serenity.StringEditor;
        F5SubmitDate: Serenity.DateTimeEditor;
        F5SubmitBy: Serenity.StringEditor;
        F6SubmitDate: Serenity.DateTimeEditor;
        F6SubmitBy: Serenity.StringEditor;
        F7SubmitDate: Serenity.DateTimeEditor;
        F7SubmitBy: Serenity.StringEditor;
        F8SubmitDate: Serenity.DateTimeEditor;
        F8SubmitBy: Serenity.StringEditor;
        F9SubmitDate: Serenity.DateTimeEditor;
        F9SubmitBy: Serenity.StringEditor;
        F10SubmitDate: Serenity.DateTimeEditor;
        F10SubmitBy: Serenity.StringEditor;
        F11SubmitDate: Serenity.DateTimeEditor;
        F11SubmitBy: Serenity.StringEditor;
        F12SubmitDate: Serenity.DateTimeEditor;
        F12SubmitBy: Serenity.StringEditor;
        F13SubmitDate: Serenity.DateTimeEditor;
        F13SubmitBy: Serenity.StringEditor;
        F14SubmitDate: Serenity.DateTimeEditor;
        F14SubmitBy: Serenity.StringEditor;
        F15SubmitDate: Serenity.DateTimeEditor;
        F15SubmitBy: Serenity.StringEditor;
        F16SubmitDate: Serenity.DateTimeEditor;
        F16SubmitBy: Serenity.StringEditor;
        F17SubmitDate: Serenity.DateTimeEditor;
        F17SubmitBy: Serenity.StringEditor;
        ProcParticipant: ProcParticipantsEditor;
    }

    export class ProcurementForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.Procurement';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProcurementForm.init)  {
                ProcurementForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateTimeEditor;
                var w3 = s.DecimalEditor;
                var w4 = _Ext.YaTidakEditor;
                var w5 = s.IntegerEditor;
                var w6 = s.BooleanEditor;
                var w7 = s.DateEditor;
                var w8 = s.TextAreaEditor;
                var w9 = s.EnumEditor;
                var w10 = s.ImageUploadEditor;
                var w11 = ProcParticipantsEditor;

                Q.initFormType(ProcurementForm, [
                    'ProcurementTypeId', w0,
                    'Status', w0,
                    'CollectiveNumber', w1,
                    'Title', w1,
                    'Classification', w1,
                    'Qualification', w1,
                    'RequestedBy', w1,
                    'RequestorPosition', w1,
                    'ApprovedBy', w1,
                    'ApproverPosition', w1,
                    'SapBidderListCreatedBy', w1,
                    'SapBidderListCreatedDate', w2,
                    'CreatedBy', w1,
                    'CreatedDate', w2,
                    'GuaranteePercentage', w3,
                    'OfficeAddress', w0,
                    'ProcValueRangeId', w0,
                    'CommitteeTypeId', w0,
                    'PerformanceGuaranteeRequired', w4,
                    'TenderPeriod', w5,
                    'DeliveryTime', w5,
                    'DestinationId', w0,
                    'ContractTypeId', w0,
                    'CurrencyId', w0,
                    'DocSubmitMethodId', w0,
                    'AanwijzingExists', w6,
                    'AanwijzingDate', w7,
                    'AanwijzingClosingDate', w7,
                    'AanwijzingLocation', w8,
                    'AanwijzingClosingLocation', w8,
                    'AanwijzingSecretary', w1,
                    'AanwijzingSummary', w8,
                    'FieldSurveyExists', w9,
                    'FieldSurveyAddress', w8,
                    'ItbDocumentFile', w10,
                    'ItbDocumentName', w1,
                    'RksDocumentFile', w10,
                    'RksDocumentName', w1,
                    'TenderDocSubmitOpenDate', w2,
                    'TenderDocSubmitCloseDate', w2,
                    'OrderTypeId', w0,
                    'PurchDocNum', w1,
                    'RfqDate', w2,
                    'QuotationDeadline', w2,
                    'PurchGroup', w1,
                    'PrNo', w1,
                    'AuthPersonName', w1,
                    'AuthPosition', w1,
                    'HeaderText', w8,
                    'HeaderNote', w8,
                    'WorkDescription', w8,
                    'BankKey', w1,
                    'PoCover', w1,
                    'DeliveryAddress', w8,
                    'ToPTargVal', w1,
                    'YourReference', w1,
                    'OurReference', w1,
                    'SalesPerson', w1,
                    'Telephone', w1,
                    'ValidityStart', w7,
                    'ValidityEnd', w7,
                    'ItemInterval', w3,
                    'SubItemInterval', w3,
                    'Warranty', w7,
                    'Language', w1,
                    'ReviewOeRequired', w4,
                    'ProcAgreement', w9,
                    'ProcAgreementDate', w2,
                    'ProcAsRequired', w9,
                    'ProcAsApproved', w9,
                    'ProcAsApprovedDate', w7,
                    'ProcAsDesc', w1,
                    'FinalConclusionDesc', w8,
                    'WinnerNominationDate', w2,
                    'ObjectionCloseDate', w2,
                    'PoDocName', w1,
                    'TemporaryPic', w1,
                    'PoNumber', w1,
                    'PoDocFile', w10,
                    'F1SubmitDate', w2,
                    'F1SubmitBy', w1,
                    'F2SubmitDate', w2,
                    'F2SubmitBy', w1,
                    'F3SubmitDate', w2,
                    'F3SubmitBy', w1,
                    'F31SubmitDate', w2,
                    'F31SubmitBy', w1,
                    'F4SubmitDate', w2,
                    'F4SubmitBy', w1,
                    'F5SubmitDate', w2,
                    'F5SubmitBy', w1,
                    'F6SubmitDate', w2,
                    'F6SubmitBy', w1,
                    'F7SubmitDate', w2,
                    'F7SubmitBy', w1,
                    'F8SubmitDate', w2,
                    'F8SubmitBy', w1,
                    'F9SubmitDate', w2,
                    'F9SubmitBy', w1,
                    'F10SubmitDate', w2,
                    'F10SubmitBy', w1,
                    'F11SubmitDate', w2,
                    'F11SubmitBy', w1,
                    'F12SubmitDate', w2,
                    'F12SubmitBy', w1,
                    'F13SubmitDate', w2,
                    'F13SubmitBy', w1,
                    'F14SubmitDate', w2,
                    'F14SubmitBy', w1,
                    'F15SubmitDate', w2,
                    'F15SubmitBy', w1,
                    'F16SubmitDate', w2,
                    'F16SubmitBy', w1,
                    'F17SubmitDate', w2,
                    'F17SubmitBy', w1,
                    'ProcParticipant', w11
                ]);
            }
        }
    }
}

