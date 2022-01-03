namespace SCMONLINE.Procurement {
    export interface F12_ProcAsForm {
        ProcurementTypeId: Serenity.LookupEditor;
        Status: Serenity.LookupEditor;
        CollectiveNumber: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        Classification: Serenity.StringEditor;
        Qualification: Serenity.StringEditor;
        ProcAsRequired: Serenity.EnumEditor;
        WinnerNominationDate: Serenity.DateTimeEditor;
        ProcAsApproved: Serenity.EnumEditor;
        ProcAsApprovedDate: Serenity.DateEditor;
        ProcAsDesc: Serenity.StringEditor;
        F12SubmitDate: Serenity.DateTimeEditor;
        F12SubmitBy: Serenity.StringEditor;
        ProcurementMethodId: Serenity.LookupEditor;
    }

    export class F12_ProcAsForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.F12_ProcAs';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!F12_ProcAsForm.init)  {
                F12_ProcAsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.EnumEditor;
                var w3 = s.DateTimeEditor;
                var w4 = s.DateEditor;

                Q.initFormType(F12_ProcAsForm, [
                    'ProcurementTypeId', w0,
                    'Status', w0,
                    'CollectiveNumber', w1,
                    'Title', w1,
                    'Classification', w1,
                    'Qualification', w1,
                    'ProcAsRequired', w2,
                    'WinnerNominationDate', w3,
                    'ProcAsApproved', w2,
                    'ProcAsApprovedDate', w4,
                    'ProcAsDesc', w1,
                    'F12SubmitDate', w3,
                    'F12SubmitBy', w1,
                    'ProcurementMethodId', w0
                ]);
            }
        }
    }
}

