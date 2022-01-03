namespace SCMONLINE.Procurement {
    export interface CommitteeMemberMappingForm {
        Sequence: Serenity.IntegerEditor;
        ProcurementTypeId: Serenity.StringEditor;
        ProcValueRangeId: Serenity.IntegerEditor;
        RoleId: Serenity.IntegerEditor;
        CommitteeRoleId: Serenity.IntegerEditor;
    }

    export class CommitteeMemberMappingForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.CommitteeMemberMapping';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CommitteeMemberMappingForm.init)  {
                CommitteeMemberMappingForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;

                Q.initFormType(CommitteeMemberMappingForm, [
                    'Sequence', w0,
                    'ProcurementTypeId', w1,
                    'ProcValueRangeId', w0,
                    'RoleId', w0,
                    'CommitteeRoleId', w0
                ]);
            }
        }
    }
}

