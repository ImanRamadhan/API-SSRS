namespace SCMONLINE.Procurement {
    export interface CommitteeMemberForm {
        ProcurementId: Serenity.StringEditor;
        CommitteeRoleId: Serenity.LookupEditor;
        RoleId: Serenity.LookupEditor;
    }

    export class CommitteeMemberForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.CommitteeMember';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CommitteeMemberForm.init)  {
                CommitteeMemberForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;

                Q.initFormType(CommitteeMemberForm, [
                    'ProcurementId', w0,
                    'CommitteeRoleId', w1,
                    'RoleId', w1
                ]);
            }
        }
    }
}

