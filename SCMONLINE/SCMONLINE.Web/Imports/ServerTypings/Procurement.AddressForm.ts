namespace SCMONLINE.Procurement {
    export interface AddressForm {
        Name: Serenity.TextAreaEditor;
        Description: Serenity.TextAreaEditor;
        AddressTypeId: Serenity.LookupEditor;
    }

    export class AddressForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.Address';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AddressForm.init)  {
                AddressForm.init = true;

                var s = Serenity;
                var w0 = s.TextAreaEditor;
                var w1 = s.LookupEditor;

                Q.initFormType(AddressForm, [
                    'Name', w0,
                    'Description', w0,
                    'AddressTypeId', w1
                ]);
            }
        }
    }
}

