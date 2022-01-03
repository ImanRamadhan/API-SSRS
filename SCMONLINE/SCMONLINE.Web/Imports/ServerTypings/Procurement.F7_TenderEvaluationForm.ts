namespace SCMONLINE.Procurement {
    export interface F7_TenderEvaluationForm {
        ProcurementTypeId: Serenity.LookupEditor;
        Status: Serenity.LookupEditor;
        CollectiveNumber: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        Classification: Serenity.StringEditor;
        Qualification: Serenity.StringEditor;
        ProcParticipant: F7_ProcParticipantsEditor;
        DocSubmitMethodId: Serenity.LookupEditor;
        TenderDocSubmitOpenDate: Serenity.DateTimeEditor;
        TenderDocSubmitCloseDate: Serenity.DateTimeEditor;
    }

    export class F7_TenderEvaluationForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.F7_TenderEvaluation';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!F7_TenderEvaluationForm.init)  {
                F7_TenderEvaluationForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = F7_ProcParticipantsEditor;
                var w3 = s.DateTimeEditor;

                Q.initFormType(F7_TenderEvaluationForm, [
                    'ProcurementTypeId', w0,
                    'Status', w0,
                    'CollectiveNumber', w1,
                    'Title', w1,
                    'Classification', w1,
                    'Qualification', w1,
                    'ProcParticipant', w2,
                    'DocSubmitMethodId', w0,
                    'TenderDocSubmitOpenDate', w3,
                    'TenderDocSubmitCloseDate', w3
                ]);
            }
        }
    }
}

