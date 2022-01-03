namespace SCMONLINE.Procurement {
    export interface DocumentStatusForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }

    export class DocumentStatusForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.DocumentStatus';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DocumentStatusForm.init)  {
                DocumentStatusForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(DocumentStatusForm, [
                    'Name', w0,
                    'Description', w0
                ]);
            }
        }
    }
}

