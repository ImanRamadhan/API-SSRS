namespace SCMONLINE.Procurement {
    export interface F16_WinnerDesignationForm {
        ProcurementTypeId: Serenity.LookupEditor;
        Status: Serenity.LookupEditor;
        CollectiveNumber: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        Classification: Serenity.StringEditor;
        Qualification: Serenity.StringEditor;
        TemporaryPic: Serenity.StringEditor;
        F13SubmitDate: Serenity.DateTimeEditor;
        F16SubmitDate: Serenity.DateTimeEditor;
        F16SubmitBy: Serenity.StringEditor;
    }

    export class F16_WinnerDesignationForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.F16_WinnerDesignation';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!F16_WinnerDesignationForm.init)  {
                F16_WinnerDesignationForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateTimeEditor;

                Q.initFormType(F16_WinnerDesignationForm, [
                    'ProcurementTypeId', w0,
                    'Status', w0,
                    'CollectiveNumber', w1,
                    'Title', w1,
                    'Classification', w1,
                    'Qualification', w1,
                    'TemporaryPic', w1,
                    'F13SubmitDate', w2,
                    'F16SubmitDate', w2,
                    'F16SubmitBy', w1
                ]);
            }
        }
    }
}

