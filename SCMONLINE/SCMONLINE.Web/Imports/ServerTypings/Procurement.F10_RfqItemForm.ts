namespace SCMONLINE.Procurement {
    export interface F10_RfqItemForm {
        RfqItemId: Serenity.StringEditor;
        OwnerEstimate: Serenity.DecimalEditor;
        OwnerEstimateReview: Serenity.DecimalEditor;
        Item: Serenity.StringEditor;
        ShortText: Serenity.StringEditor;
        Material: Serenity.StringEditor;
        TargetQuantity: Serenity.DecimalEditor;
        OrderUnit: Serenity.StringEditor;
        PriceUnit: Serenity.DecimalEditor;
    }

    export class F10_RfqItemForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.F10_RfqItem';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!F10_RfqItemForm.init)  {
                F10_RfqItemForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(F10_RfqItemForm, [
                    'RfqItemId', w0,
                    'OwnerEstimate', w1,
                    'OwnerEstimateReview', w1,
                    'Item', w0,
                    'ShortText', w0,
                    'Material', w0,
                    'TargetQuantity', w1,
                    'OrderUnit', w0,
                    'PriceUnit', w1
                ]);
            }
        }
    }
}

