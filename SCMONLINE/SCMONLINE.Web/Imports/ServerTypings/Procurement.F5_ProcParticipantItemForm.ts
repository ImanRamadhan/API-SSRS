namespace SCMONLINE.Procurement {
    export interface F5_ProcParticipantItemForm {
        ProcParticipantItemId: Serenity.StringEditor;
        ItemSequence: Serenity.StringEditor;
        Material: Serenity.StringEditor;
        ShortText: Serenity.TextAreaEditor;
        BidPrice: Serenity.DecimalEditor;
        RfqItemTargetQuantity: Serenity.DecimalEditor;
        RfqItemOrderUnit: Serenity.StringEditor;
        RfqItemId: Serenity.StringEditor;
    }

    export class F5_ProcParticipantItemForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.F5_ProcParticipantItem';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!F5_ProcParticipantItemForm.init)  {
                F5_ProcParticipantItemForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(F5_ProcParticipantItemForm, [
                    'ProcParticipantItemId', w0,
                    'ItemSequence', w0,
                    'Material', w0,
                    'ShortText', w1,
                    'BidPrice', w2,
                    'RfqItemTargetQuantity', w2,
                    'RfqItemOrderUnit', w0,
                    'RfqItemId', w0
                ]);
            }
        }
    }
}

