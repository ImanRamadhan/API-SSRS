namespace SCMONLINE.Procurement {
    export interface F2_ProcurementDocCreationForm {
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
        AanwijzingSecretary: Serenity.StringEditor;
        AanwijzingSummary: Serenity.TextAreaEditor;
        FieldSurveyExists: Serenity.EnumEditor;
        FieldSurveyAddress: Serenity.TextAreaEditor;
        RequestTerms: Serenity.HtmlNoteContentEditor;
        ItbDocumentFile: Serenity.ImageUploadEditor;
        ItbDocumentName: Serenity.StringEditor;
        RksDocumentFile: Serenity.ImageUploadEditor;
        RksDocumentName: Serenity.StringEditor;
        TenderDocSubmitOpenDate: Serenity.DateTimeEditor;
        TenderDocSubmitCloseDate: Serenity.DateTimeEditor;
        F2SubmitDate: Serenity.DateTimeEditor;
        F2SubmitBy: Serenity.StringEditor;
    }

    export class F2_ProcurementDocCreationForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.F2_ProcurementDocCreation';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!F2_ProcurementDocCreationForm.init)  {
                F2_ProcurementDocCreationForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateTimeEditor;
                var w3 = s.IntegerEditor;
                var w4 = s.BooleanEditor;
                var w5 = s.DateEditor;
                var w6 = s.TextAreaEditor;
                var w7 = s.EnumEditor;
                var w8 = s.HtmlNoteContentEditor;
                var w9 = s.ImageUploadEditor;

                Q.initFormType(F2_ProcurementDocCreationForm, [
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
                    'TenderPeriod', w3,
                    'DeliveryTime', w3,
                    'DestinationId', w0,
                    'ContractTypeId', w0,
                    'CurrencyId', w0,
                    'DocSubmitMethodId', w0,
                    'AanwijzingExists', w4,
                    'AanwijzingDate', w5,
                    'AanwijzingClosingDate', w5,
                    'AanwijzingLocation', w6,
                    'AanwijzingSecretary', w1,
                    'AanwijzingSummary', w6,
                    'FieldSurveyExists', w7,
                    'FieldSurveyAddress', w6,
                    'RequestTerms', w8,
                    'ItbDocumentFile', w9,
                    'ItbDocumentName', w1,
                    'RksDocumentFile', w9,
                    'RksDocumentName', w1,
                    'TenderDocSubmitOpenDate', w2,
                    'TenderDocSubmitCloseDate', w2,
                    'F2SubmitDate', w2,
                    'F2SubmitBy', w1
                ]);
            }
        }
    }
}

