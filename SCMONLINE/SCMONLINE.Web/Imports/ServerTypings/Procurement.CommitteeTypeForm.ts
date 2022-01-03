namespace SCMONLINE.Procurement {
    export interface CommitteeTypeForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }

    export class CommitteeTypeForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.CommitteeType';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CommitteeTypeForm.init)  {
                CommitteeTypeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(CommitteeTypeForm, [
                    'Name', w0,
                    'Description', w0
                ]);
            }
        }
    }
}

