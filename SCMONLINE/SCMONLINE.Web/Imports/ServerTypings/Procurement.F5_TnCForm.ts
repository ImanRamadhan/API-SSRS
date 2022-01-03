namespace SCMONLINE.Procurement {
    export interface F5_TnCForm {
        TnCDescription: StaticTextBlock;
        TnCAgree: Serenity.BooleanEditor;
    }

    export class F5_TnCForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.F5_TnC';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!F5_TnCForm.init)  {
                F5_TnCForm.init = true;

                var s = Serenity;
                var w0 = StaticTextBlock;
                var w1 = s.BooleanEditor;

                Q.initFormType(F5_TnCForm, [
                    'TnCDescription', w0,
                    'TnCAgree', w1
                ]);
            }
        }
    }
}

