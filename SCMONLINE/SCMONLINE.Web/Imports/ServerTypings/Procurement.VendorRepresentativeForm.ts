namespace SCMONLINE.Procurement {
    export interface VendorRepresentativeForm {
        VendorId: Serenity.StringEditor;
        UserId: Serenity.IntegerEditor;
    }

    export class VendorRepresentativeForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.VendorRepresentative';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VendorRepresentativeForm.init)  {
                VendorRepresentativeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(VendorRepresentativeForm, [
                    'VendorId', w0,
                    'UserId', w1
                ]);
            }
        }
    }
}

