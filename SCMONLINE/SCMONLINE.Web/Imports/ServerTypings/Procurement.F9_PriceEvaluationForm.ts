namespace SCMONLINE.Procurement {
    export interface F9_PriceEvaluationForm {
        ProcurementTypeId: Serenity.LookupEditor;
        Status: Serenity.LookupEditor;
        CollectiveNumber: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        Classification: Serenity.StringEditor;
        Qualification: Serenity.StringEditor;
        EvaluationClosingPriceDate: Serenity.DateEditor;
        ContractTypeId: Serenity.LookupEditor;
        ProcParticipantItems: F9_ProcParticipantItemsEditor;
        F9SubmitDate: Serenity.DateTimeEditor;
        F9SubmitBy: Serenity.StringEditor;
    }

    export class F9_PriceEvaluationForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.F9_PriceEvaluation';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!F9_PriceEvaluationForm.init)  {
                F9_PriceEvaluationForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;
                var w3 = F9_ProcParticipantItemsEditor;
                var w4 = s.DateTimeEditor;

                Q.initFormType(F9_PriceEvaluationForm, [
                    'ProcurementTypeId', w0,
                    'Status', w0,
                    'CollectiveNumber', w1,
                    'Title', w1,
                    'Classification', w1,
                    'Qualification', w1,
                    'EvaluationClosingPriceDate', w2,
                    'ContractTypeId', w0,
                    'ProcParticipantItems', w3,
                    'F9SubmitDate', w4,
                    'F9SubmitBy', w1
                ]);
            }
        }
    }
}

