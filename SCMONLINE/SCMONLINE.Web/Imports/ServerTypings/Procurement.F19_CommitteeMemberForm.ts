namespace SCMONLINE.Procurement {
    export interface F19_CommitteeMemberForm {
        ProcurementId: Serenity.StringEditor;
        RoleId: Serenity.LookupEditor;
        CommitteeRoleId: Serenity.LookupEditor;
        ApprovalStatus: Serenity.EnumEditor;
        ApprovalDate: Serenity.DateEditor;
        ApprovalBy: Serenity.StringEditor;
    }

    export class F19_CommitteeMemberForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.F19_CommitteeMember';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!F19_CommitteeMemberForm.init)  {
                F19_CommitteeMemberForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.EnumEditor;
                var w3 = s.DateEditor;

                Q.initFormType(F19_CommitteeMemberForm, [
                    'ProcurementId', w0,
                    'RoleId', w1,
                    'CommitteeRoleId', w1,
                    'ApprovalStatus', w2,
                    'ApprovalDate', w3,
                    'ApprovalBy', w0
                ]);
            }
        }
    }
}

