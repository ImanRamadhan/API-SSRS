namespace SCMONLINE.Procurement {
    export interface ForgotForm {
        CollectiveNumber: Serenity.StringEditor;
    }

    export class ForgotForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.Report';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ForgotForm.init)  {
                ForgotForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(ForgotForm, [
                    'CollectiveNumber', w0
                ]);
            }
        }
    }
}

