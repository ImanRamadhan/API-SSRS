namespace SCMONLINE.Procurement {
    export interface F6_ProcParticipantItemForm {
        ProcParticipantItemId: Serenity.StringEditor;
        ItemSequence: Serenity.StringEditor;
        Material: Serenity.StringEditor;
        ShortText: Serenity.TextAreaEditor;
        RfqItemTargetQuantity: Serenity.DecimalEditor;
        RfqItemOrderUnit: Serenity.StringEditor;
        ProcurementDocSubmitMethodId: Serenity.IntegerEditor;
    }

    export class F6_ProcParticipantItemForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.F6_ProcParticipantItem';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!F6_ProcParticipantItemForm.init)  {
                F6_ProcParticipantItemForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.IntegerEditor;

                Q.initFormType(F6_ProcParticipantItemForm, [
                    'ProcParticipantItemId', w0,
                    'ItemSequence', w0,
                    'Material', w0,
                    'ShortText', w1,
                    'RfqItemTargetQuantity', w2,
                    'RfqItemOrderUnit', w0,
                    'ProcurementDocSubmitMethodId', w3
                ]);
            }
        }
    }
}

