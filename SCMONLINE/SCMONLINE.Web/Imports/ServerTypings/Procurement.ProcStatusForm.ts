namespace SCMONLINE.Procurement {
    export interface ProcStatusForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }

    export class ProcStatusForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.ProcStatus';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProcStatusForm.init)  {
                ProcStatusForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(ProcStatusForm, [
                    'Name', w0,
                    'Description', w0
                ]);
            }
        }
    }
}

