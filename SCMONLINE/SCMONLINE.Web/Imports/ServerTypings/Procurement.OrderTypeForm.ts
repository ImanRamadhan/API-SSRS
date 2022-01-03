namespace SCMONLINE.Procurement {
    export interface OrderTypeForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }

    export class OrderTypeForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.OrderType';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OrderTypeForm.init)  {
                OrderTypeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(OrderTypeForm, [
                    'Name', w0,
                    'Description', w0
                ]);
            }
        }
    }
}

