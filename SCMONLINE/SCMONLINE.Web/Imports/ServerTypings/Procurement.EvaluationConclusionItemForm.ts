namespace SCMONLINE.Procurement {
    export interface EvaluationConclusionItemForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }

    export class EvaluationConclusionItemForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.EvaluationConclusionItem';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EvaluationConclusionItemForm.init)  {
                EvaluationConclusionItemForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(EvaluationConclusionItemForm, [
                    'Name', w0,
                    'Description', w0
                ]);
            }
        }
    }
}

