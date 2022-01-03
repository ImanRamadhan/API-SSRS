namespace SCMONLINE.Procurement {
    export interface VendorAddressForm {
        VendorId: Serenity.StringEditor;
        AddressId: Serenity.IntegerEditor;
    }

    export class VendorAddressForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.VendorAddress';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VendorAddressForm.init)  {
                VendorAddressForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(VendorAddressForm, [
                    'VendorId', w0,
                    'AddressId', w1
                ]);
            }
        }
    }
}

