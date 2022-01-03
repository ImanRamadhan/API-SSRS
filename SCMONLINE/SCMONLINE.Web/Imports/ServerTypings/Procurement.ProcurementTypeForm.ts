namespace SCMONLINE.Procurement {
    export interface ProcurementTypeForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }

    export class ProcurementTypeForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.ProcurementType';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProcurementTypeForm.init)  {
                ProcurementTypeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(ProcurementTypeForm, [
                    'Name', w0,
                    'Description', w0
                ]);
            }
        }
    }
}

