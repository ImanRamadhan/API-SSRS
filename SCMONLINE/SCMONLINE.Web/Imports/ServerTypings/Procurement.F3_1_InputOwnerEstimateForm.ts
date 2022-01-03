namespace SCMONLINE.Procurement {
    export interface F3_1_InputOwnerEstimateForm {
        ProcurementTypeId: Serenity.LookupEditor;
        Status: Serenity.LookupEditor;
        CollectiveNumber: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        Classification: Serenity.StringEditor;
        Qualification: Serenity.StringEditor;
        F31SubmitDate: Serenity.DateTimeEditor;
        F31SubmitBy: Serenity.StringEditor;
        RfqItems: RfqItemsEditor;
    }

    export class F3_1_InputOwnerEstimateForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.F3_1_InputOwnerEstimate';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!F3_1_InputOwnerEstimateForm.init)  {
                F3_1_InputOwnerEstimateForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateTimeEditor;
                var w3 = RfqItemsEditor;

                Q.initFormType(F3_1_InputOwnerEstimateForm, [
                    'ProcurementTypeId', w0,
                    'Status', w0,
                    'CollectiveNumber', w1,
                    'Title', w1,
                    'Classification', w1,
                    'Qualification', w1,
                    'F31SubmitDate', w2,
                    'F31SubmitBy', w1,
                    'RfqItems', w3
                ]);
            }
        }
    }
}

