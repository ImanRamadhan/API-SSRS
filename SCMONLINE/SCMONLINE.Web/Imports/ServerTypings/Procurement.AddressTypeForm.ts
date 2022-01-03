namespace SCMONLINE.Procurement {
    export interface AddressTypeForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }

    export class AddressTypeForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.AddressType';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AddressTypeForm.init)  {
                AddressTypeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(AddressTypeForm, [
                    'Name', w0,
                    'Description', w0
                ]);
            }
        }
    }
}

