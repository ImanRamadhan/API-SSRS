namespace SCMONLINE.Procurement {
    export interface CurrencyForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }

    export class CurrencyForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.Currency';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CurrencyForm.init)  {
                CurrencyForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(CurrencyForm, [
                    'Name', w0,
                    'Description', w0
                ]);
            }
        }
    }
}

