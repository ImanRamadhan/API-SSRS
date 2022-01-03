namespace SCMONLINE.Procurement {
    export interface PurchDocTextRefForm {
        Meaning: Serenity.StringEditor;
    }

    export class PurchDocTextRefForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.PurchDocTextRef';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PurchDocTextRefForm.init)  {
                PurchDocTextRefForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(PurchDocTextRefForm, [
                    'Meaning', w0
                ]);
            }
        }
    }
}

