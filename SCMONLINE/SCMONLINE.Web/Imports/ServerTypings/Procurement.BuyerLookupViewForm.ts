namespace SCMONLINE.Procurement {
    export interface BuyerLookupViewForm {
        Name: Serenity.StringEditor;
        ActivePr: Serenity.IntegerEditor;
    }

    export class BuyerLookupViewForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.BuyerLookupView';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BuyerLookupViewForm.init)  {
                BuyerLookupViewForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(BuyerLookupViewForm, [
                    'Name', w0,
                    'ActivePr', w1
                ]);
            }
        }
    }
}

