namespace SCMONLINE.Procurement {
    export interface BuyerAssignmentForm {
        BuyerId: Serenity.LookupEditor;
    }

    export class BuyerAssignmentForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.BuyerAssignment';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BuyerAssignmentForm.init)  {
                BuyerAssignmentForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;

                Q.initFormType(BuyerAssignmentForm, [
                    'BuyerId', w0
                ]);
            }
        }
    }
}

