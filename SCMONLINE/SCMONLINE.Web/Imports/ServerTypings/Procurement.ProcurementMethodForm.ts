namespace SCMONLINE.Procurement {
    export interface ProcurementMethodForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }

    export class ProcurementMethodForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.ProcurementMethod';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProcurementMethodForm.init)  {
                ProcurementMethodForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(ProcurementMethodForm, [
                    'Name', w0,
                    'Description', w0
                ]);
            }
        }
    }
}

