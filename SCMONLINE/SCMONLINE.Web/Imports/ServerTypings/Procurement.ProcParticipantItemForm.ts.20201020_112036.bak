namespace SCMONLINE.Procurement {
    export interface ProcParticipantItemForm {
        ProcParticipantId: Serenity.StringEditor;
        ProcurementId: Serenity.StringEditor;
        VendorId: Serenity.StringEditor;
        VendorName: Serenity.StringEditor;
        F5ParticipantSubmitDate: Serenity.DateTimeEditor;
        F5ParticipantSubmitBy: Serenity.StringEditor;
        RfqItemId: Serenity.StringEditor;
        ItemSequence: Serenity.StringEditor;
        Material: Serenity.StringEditor;
        ShortText: Serenity.TextAreaEditor;
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

    export class ProcParticipantItemForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.ProcParticipantItem';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProcParticipantItemForm.init)  {
                ProcParticipantItemForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateTimeEditor;
                var w2 = s.TextAreaEditor;
                var w3 = s.DecimalEditor;
                var w4 = s.IntegerEditor;
                var w5 = s.BooleanEditor;
                var w6 = s.LookupEditor;

                Q.initFormType(ProcParticipantItemForm, [
                    'ProcParticipantId', w0,
                    'ProcurementId', w0,
                    'VendorId', w0,
                    'VendorName', w0,
                    'F5ParticipantSubmitDate', w1,
                    'F5ParticipantSubmitBy', w0,
                    'RfqItemId', w0,
                    'ItemSequence', w0,
                    'Material', w0,
                    'ShortText', w2,
                    'BidPrice', w3,
                    'BidPriceVsOe', w3,
                    'BidPriceVsOePercentage', w3,
                    'Rank', w4,
                    'EvaluationDescription', w2,
                    'NegotiationPrice', w3,
                    'NpVsOe', w3,
                    'NpVsOePercentage', w3,
                    'NegotiationRank', w4,
                    'NegotiationDesc', w2,
                    'ProposeDisclaimer', w5,
                    'DisclaimerDesc', w0,
                    'EvaluationConclusionItemId', w6
                ]);
            }
        }
    }
}

