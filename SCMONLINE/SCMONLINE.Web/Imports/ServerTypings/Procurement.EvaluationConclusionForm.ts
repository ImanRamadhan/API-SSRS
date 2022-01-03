namespace SCMONLINE.Procurement {
    export interface EvaluationConclusionForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }

    export class EvaluationConclusionForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.EvaluationConclusion';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EvaluationConclusionForm.init)  {
                EvaluationConclusionForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(EvaluationConclusionForm, [
                    'Name', w0,
                    'Description', w0
                ]);
            }
        }
    }
}

