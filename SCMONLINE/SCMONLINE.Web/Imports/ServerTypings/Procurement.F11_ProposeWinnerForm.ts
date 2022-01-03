namespace SCMONLINE.Procurement {
    export interface F11_ProposeWinnerForm {
        ProcurementTypeId: Serenity.LookupEditor;
        Status: Serenity.LookupEditor;
        CollectiveNumber: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        Classification: Serenity.StringEditor;
        Qualification: Serenity.StringEditor;
        ProcAgreement: Serenity.EnumEditor;
        ProcAgreementDate: Serenity.DateTimeEditor;
        WinnerNominationDate: Serenity.DateTimeEditor;
        ProcAsApproved: Serenity.EnumEditor;
        ProcAsApprovedDate: Serenity.DateEditor;
        ProcAsDesc: Serenity.StringEditor;
        FinalConclusionDesc: Serenity.TextAreaEditor;
        ProcRejectTender: Serenity.EnumEditor;
        ProcRejectTenderDesc: Serenity.TextAreaEditor;
        F11SubmitDate: Serenity.DateTimeEditor;
        F11SubmitBy: Serenity.StringEditor;
        ProcurementMethodId: Serenity.LookupEditor;
    }

    export class F11_ProposeWinnerForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.F11_ProposeWinner';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!F11_ProposeWinnerForm.init)  {
                F11_ProposeWinnerForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.EnumEditor;
                var w3 = s.DateTimeEditor;
                var w4 = s.DateEditor;
                var w5 = s.TextAreaEditor;

                Q.initFormType(F11_ProposeWinnerForm, [
                    'ProcurementTypeId', w0,
                    'Status', w0,
                    'CollectiveNumber', w1,
                    'Title', w1,
                    'Classification', w1,
                    'Qualification', w1,
                    'ProcAgreement', w2,
                    'ProcAgreementDate', w3,
                    'WinnerNominationDate', w3,
                    'ProcAsApproved', w2,
                    'ProcAsApprovedDate', w4,
                    'ProcAsDesc', w1,
                    'FinalConclusionDesc', w5,
                    'ProcRejectTender', w2,
                    'ProcRejectTenderDesc', w5,
                    'F11SubmitDate', w3,
                    'F11SubmitBy', w1,
                    'ProcurementMethodId', w0
                ]);
            }
        }
    }
}

