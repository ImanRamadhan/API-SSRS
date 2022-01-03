namespace SCMONLINE.Procurement {
    export interface DocSubmitMethodForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }

    export class DocSubmitMethodForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.DocSubmitMethod';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DocSubmitMethodForm.init)  {
                DocSubmitMethodForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(DocSubmitMethodForm, [
                    'Name', w0,
                    'Description', w0
                ]);
            }
        }
    }
}

