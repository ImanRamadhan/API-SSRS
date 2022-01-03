namespace SCMONLINE.Procurement {
    export interface F4_AanwijzingForm {
        ProcurementTypeId: Serenity.LookupEditor;
        Status: Serenity.LookupEditor;
        CollectiveNumber: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        Classification: Serenity.StringEditor;
        Qualification: Serenity.StringEditor;
        AanwijzingDate: Serenity.DateEditor;
        AanwijzingClosingDate: Serenity.DateEditor;
        AanwijzingLocation: Serenity.TextAreaEditor;
        AanwijzingClosingLocation: Serenity.TextAreaEditor;
        AanwijzingSecretary: Serenity.StringEditor;
        AdministrativeExplanation: Serenity.TextAreaEditor;
        TechnicalExplanation: Serenity.TextAreaEditor;
        OtherExplanation: Serenity.TextAreaEditor;
        AanwijzingSummary: Serenity.TextAreaEditor;
        TenderDocSubmitOpenDate: Serenity.DateTimeEditor;
        TenderDocSubmitCloseDate: Serenity.DateTimeEditor;
        F4SubmitDate: Serenity.DateTimeEditor;
        F4SubmitBy: Serenity.StringEditor;
    }

    export class F4_AanwijzingForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.F4_Aanwijzing';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!F4_AanwijzingForm.init)  {
                F4_AanwijzingForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;
                var w3 = s.TextAreaEditor;
                var w4 = s.DateTimeEditor;

                Q.initFormType(F4_AanwijzingForm, [
                    'ProcurementTypeId', w0,
                    'Status', w0,
                    'CollectiveNumber', w1,
                    'Title', w1,
                    'Classification', w1,
                    'Qualification', w1,
                    'AanwijzingDate', w2,
                    'AanwijzingClosingDate', w2,
                    'AanwijzingLocation', w3,
                    'AanwijzingClosingLocation', w3,
                    'AanwijzingSecretary', w1,
                    'AdministrativeExplanation', w3,
                    'TechnicalExplanation', w3,
                    'OtherExplanation', w3,
                    'AanwijzingSummary', w3,
                    'TenderDocSubmitOpenDate', w4,
                    'TenderDocSubmitCloseDate', w4,
                    'F4SubmitDate', w4,
                    'F4SubmitBy', w1
                ]);
            }
        }
    }
}

