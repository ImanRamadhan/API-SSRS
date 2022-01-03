namespace SCMONLINE.Procurement {
    export interface F8_TechnicalClarificationForm {
        ProcurementTypeId: Serenity.LookupEditor;
        Status: Serenity.LookupEditor;
        CollectiveNumber: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        Classification: Serenity.StringEditor;
        Qualification: Serenity.StringEditor;
        ProcParticipant: F8_ProcParticipantsEditor;
        F8SubmitDate: Serenity.DateTimeEditor;
        F8SubmitBy: Serenity.StringEditor;
    }

    export class F8_TechnicalClarificationForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.F8_TechnicalClarification';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!F8_TechnicalClarificationForm.init)  {
                F8_TechnicalClarificationForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = F8_ProcParticipantsEditor;
                var w3 = s.DateTimeEditor;

                Q.initFormType(F8_TechnicalClarificationForm, [
                    'ProcurementTypeId', w0,
                    'Status', w0,
                    'CollectiveNumber', w1,
                    'Title', w1,
                    'Classification', w1,
                    'Qualification', w1,
                    'ProcParticipant', w2,
                    'F8SubmitDate', w3,
                    'F8SubmitBy', w1
                ]);
            }
        }
    }
}

