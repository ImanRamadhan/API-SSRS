namespace SCMONLINE.Procurement {
    export interface CommitteeRoleForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }

    export class CommitteeRoleForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.CommitteeRole';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CommitteeRoleForm.init)  {
                CommitteeRoleForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(CommitteeRoleForm, [
                    'Name', w0,
                    'Description', w0
                ]);
            }
        }
    }
}

