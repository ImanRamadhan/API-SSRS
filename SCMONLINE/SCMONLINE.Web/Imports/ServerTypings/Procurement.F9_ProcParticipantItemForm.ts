namespace SCMONLINE.Procurement {
    export interface F9_ProcParticipantItemForm {
        ProcParticipantItemId: Serenity.StringEditor;
        ProcParticipantId: Serenity.StringEditor;
        ProcParticipantVendorId: Serenity.StringEditor;
        VendorName: Serenity.StringEditor;
        F5ParticipantSubmitDate: Serenity.DateTimeEditor;
        RfqItemId: Serenity.StringEditor;
        ItemSequence: Serenity.StringEditor;
        Material: Serenity.StringEditor;
        ShortText: Serenity.TextAreaEditor;
        BidPrice: Serenity.DecimalEditor;
        BidPriceVsOe: Serenity.DecimalEditor;
        BidPriceVsOePercentage: Serenity.DecimalEditor;
        Rank: Serenity.IntegerEditor;
        EvaluationDescription: Serenity.TextAreaEditor;
        EvaluationConclusionItemId: Serenity.LookupEditor;
    }

    export class F9_ProcParticipantItemForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.F9_ProcParticipantItem';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!F9_ProcParticipantItemForm.init)  {
                F9_ProcParticipantItemForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateTimeEditor;
                var w2 = s.TextAreaEditor;
                var w3 = s.DecimalEditor;
                var w4 = s.IntegerEditor;
                var w5 = s.LookupEditor;

                Q.initFormType(F9_ProcParticipantItemForm, [
                    'ProcParticipantItemId', w0,
                    'ProcParticipantId', w0,
                    'ProcParticipantVendorId', w0,
                    'VendorName', w0,
                    'F5ParticipantSubmitDate', w1,
                    'RfqItemId', w0,
                    'ItemSequence', w0,
                    'Material', w0,
                    'ShortText', w2,
                    'BidPrice', w3,
                    'BidPriceVsOe', w3,
                    'BidPriceVsOePercentage', w3,
                    'Rank', w4,
                    'EvaluationDescription', w2,
                    'EvaluationConclusionItemId', w5
                ]);
            }
        }
    }
}

