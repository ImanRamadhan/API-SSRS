namespace SCMONLINE.Procurement {
    export interface ProcValueRangeForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }

    export class ProcValueRangeForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.ProcValueRange';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProcValueRangeForm.init)  {
                ProcValueRangeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(ProcValueRangeForm, [
                    'Name', w0,
                    'Description', w0
                ]);
            }
        }
    }
}

