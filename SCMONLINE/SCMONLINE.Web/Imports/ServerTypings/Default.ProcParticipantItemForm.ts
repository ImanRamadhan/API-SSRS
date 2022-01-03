namespace SCMONLINE.Default {
    export interface ProcParticipantItemForm {
        ProcParticipantId: Serenity.StringEditor;
        ProcurementId: Serenity.StringEditor;
        RfqItemId: Serenity.StringEditor;
        BidPrice: Serenity.DecimalEditor;
        BidPriceVsOe: Serenity.DecimalEditor;
        BidPriceVsOePercentage: Serenity.DecimalEditor;
        Rank: Serenity.IntegerEditor;
        EvaluationDescription: Serenity.StringEditor;
        NegotiationPrice: Serenity.DecimalEditor;
        NpVsOe: Serenity.DecimalEditor;
        NpVsOePercentage: Serenity.DecimalEditor;
        NegotiationRank: Serenity.IntegerEditor;
        NegotiationDesc: Serenity.StringEditor;
        ProposeDisclaimer: Serenity.BooleanEditor;
        DisclaimerDesc: Serenity.StringEditor;
        EvaluationConclusionItemId: Serenity.IntegerEditor;
    }

    export class ProcParticipantItemForm extends Serenity.PrefixedContext {
        static formKey = 'Default.ProcParticipantItem';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProcParticipantItemForm.init)  {
                ProcParticipantItemForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.BooleanEditor;

                Q.initFormType(ProcParticipantItemForm, [
                    'ProcParticipantId', w0,
                    'ProcurementId', w0,
                    'RfqItemId', w0,
                    'BidPrice', w1,
                    'BidPriceVsOe', w1,
                    'BidPriceVsOePercentage', w1,
                    'Rank', w2,
                    'EvaluationDescription', w0,
                    'NegotiationPrice', w1,
                    'NpVsOe', w1,
                    'NpVsOePercentage', w1,
                    'NegotiationRank', w2,
                    'NegotiationDesc', w0,
                    'ProposeDisclaimer', w3,
                    'DisclaimerDesc', w0,
                    'EvaluationConclusionItemId', w2
                ]);
            }
        }
    }
}

