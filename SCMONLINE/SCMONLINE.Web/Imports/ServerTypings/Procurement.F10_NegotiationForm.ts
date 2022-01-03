namespace SCMONLINE.Procurement {
    export interface F10_NegotiationForm {
        ProcurementTypeId: Serenity.LookupEditor;
        Status: Serenity.LookupEditor;
        CollectiveNumber: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        Classification: Serenity.StringEditor;
        Qualification: Serenity.StringEditor;
        ContractTypeId: Serenity.LookupEditor;
        ReviewOeRequired: _Ext.YaTidakEditor;
        RfqItems: F10_RfqItemsEditor;
        ProcParticipantItems: F10_ProcParticipantItemsEditor;
        EvaluationClosingPriceDate: Serenity.DateEditor;
        F10SubmitDate: Serenity.DateTimeEditor;
        F10SubmitBy: Serenity.StringEditor;
    }

    export class F10_NegotiationForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.F10_Negotiation';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!F10_NegotiationForm.init)  {
                F10_NegotiationForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = _Ext.YaTidakEditor;
                var w3 = F10_RfqItemsEditor;
                var w4 = F10_ProcParticipantItemsEditor;
                var w5 = s.DateEditor;
                var w6 = s.DateTimeEditor;

                Q.initFormType(F10_NegotiationForm, [
                    'ProcurementTypeId', w0,
                    'Status', w0,
                    'CollectiveNumber', w1,
                    'Title', w1,
                    'Classification', w1,
                    'Qualification', w1,
                    'ContractTypeId', w0,
                    'ReviewOeRequired', w2,
                    'RfqItems', w3,
                    'ProcParticipantItems', w4,
                    'EvaluationClosingPriceDate', w5,
                    'F10SubmitDate', w6,
                    'F10SubmitBy', w1
                ]);
            }
        }
    }
}

