namespace SCMONLINE.Procurement {
    export interface F13_ProcResultDecisionForm {
        ProcurementTypeId: Serenity.LookupEditor;
        Status: Serenity.LookupEditor;
        CollectiveNumber: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        Classification: Serenity.StringEditor;
        Qualification: Serenity.StringEditor;
        ProcParticipant: F13_ProcParticipantsEditor;
        F13SubmitDate: Serenity.DateTimeEditor;
        F13SubmitBy: Serenity.StringEditor;
        FinalConclusionDesc: Serenity.TextAreaEditor;
    }

    export class F13_ProcResultDecisionForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.F13_ProcResultDecision';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!F13_ProcResultDecisionForm.init)  {
                F13_ProcResultDecisionForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = F13_ProcParticipantsEditor;
                var w3 = s.DateTimeEditor;
                var w4 = s.TextAreaEditor;

                Q.initFormType(F13_ProcResultDecisionForm, [
                    'ProcurementTypeId', w0,
                    'Status', w0,
                    'CollectiveNumber', w1,
                    'Title', w1,
                    'Classification', w1,
                    'Qualification', w1,
                    'ProcParticipant', w2,
                    'F13SubmitDate', w3,
                    'F13SubmitBy', w1,
                    'FinalConclusionDesc', w4
                ]);
            }
        }
    }
}

