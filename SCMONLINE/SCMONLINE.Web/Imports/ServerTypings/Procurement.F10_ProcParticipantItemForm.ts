namespace SCMONLINE.Procurement {
    export interface F10_ProcParticipantItemForm {
        ProcParticipantId: Serenity.StringEditor;
        ProcurementId: Serenity.StringEditor;
        RfqItemId: Serenity.StringEditor;
        ProcParticipantVendorId: Serenity.StringEditor;
        VendorName: Serenity.StringEditor;
        BidPrice: Serenity.DecimalEditor;
        BidPriceVsOe: Serenity.DecimalEditor;
        BidPriceVsOePercentage: Serenity.DecimalEditor;
        Rank: Serenity.IntegerEditor;
        EvaluationDescription: Serenity.TextAreaEditor;
        NegotiationPrice: Serenity.DecimalEditor;
        NpVsOe: Serenity.DecimalEditor;
        NpVsOePercentage: Serenity.DecimalEditor;
        NegotiationRank: Serenity.IntegerEditor;
        NegotiationDesc: Serenity.TextAreaEditor;
        ProposeDisclaimer: Serenity.BooleanEditor;
        DisclaimerDesc: Serenity.StringEditor;
        EvaluationConclusionItemId: Serenity.LookupEditor;
    }

    export class F10_ProcParticipantItemForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.F10_ProcParticipantItem';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!F10_ProcParticipantItemForm.init)  {
                F10_ProcParticipantItemForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.TextAreaEditor;
                var w4 = s.BooleanEditor;
                var w5 = s.LookupEditor;

                Q.initFormType(F10_ProcParticipantItemForm, [
                    'ProcParticipantId', w0,
                    'ProcurementId', w0,
                    'RfqItemId', w0,
                    'ProcParticipantVendorId', w0,
                    'VendorName', w0,
                    'BidPrice', w1,
                    'BidPriceVsOe', w1,
                    'BidPriceVsOePercentage', w1,
                    'Rank', w2,
                    'EvaluationDescription', w3,
                    'NegotiationPrice', w1,
                    'NpVsOe', w1,
                    'NpVsOePercentage', w1,
                    'NegotiationRank', w2,
                    'NegotiationDesc', w3,
                    'ProposeDisclaimer', w4,
                    'DisclaimerDesc', w0,
                    'EvaluationConclusionItemId', w5
                ]);
            }
        }
    }
}

