namespace SCMONLINE.Procurement {
    export interface F7_ProcParticipantItemForm {
        ProcParticipantItemId: Serenity.StringEditor;
        ItemSequence: Serenity.StringEditor;
        Material: Serenity.StringEditor;
        ShortText: Serenity.TextAreaEditor;
        BidPrice: Serenity.DecimalEditor;
        RfqItemOrderQuantity: Serenity.DecimalEditor;
        RfqItemOrderUnit: Serenity.StringEditor;
        ProcurementDocSubmitMethodId: Serenity.IntegerEditor;
    }

    export class F7_ProcParticipantItemForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.F7_ProcParticipantItem';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!F7_ProcParticipantItemForm.init)  {
                F7_ProcParticipantItemForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.IntegerEditor;

                Q.initFormType(F7_ProcParticipantItemForm, [
                    'ProcParticipantItemId', w0,
                    'ItemSequence', w0,
                    'Material', w0,
                    'ShortText', w1,
                    'BidPrice', w2,
                    'RfqItemOrderQuantity', w2,
                    'RfqItemOrderUnit', w0,
                    'ProcurementDocSubmitMethodId', w3
                ]);
            }
        }
    }
}

