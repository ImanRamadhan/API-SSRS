namespace SCMONLINE.Procurement {
    export interface VendorLookupViewForm {
        Name: Serenity.StringEditor;
    }

    export class VendorLookupViewForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.VendorLookupView';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VendorLookupViewForm.init)  {
                VendorLookupViewForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(VendorLookupViewForm, [
                    'Name', w0
                ]);
            }
        }
    }
}

