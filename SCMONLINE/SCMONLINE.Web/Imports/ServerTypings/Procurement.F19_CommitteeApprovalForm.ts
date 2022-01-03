namespace SCMONLINE.Procurement {
    export interface F19_CommitteeApprovalForm {
        ProcurementId: Serenity.StringEditor;
        ProcurementTypeId: Serenity.LookupEditor;
        Status: Serenity.LookupEditor;
        CollectiveNumber: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        Classification: Serenity.StringEditor;
        Qualification: Serenity.StringEditor;
        CommitteeMember: F19_CommitteeMembersEditor;
        ProcParticipant: F19_ProcParticipantsEditor;
        DocSubmitMethodId: Serenity.LookupEditor;
        TenderDocSubmitOpenDate: Serenity.DateTimeEditor;
        TenderDocSubmitCloseDate: Serenity.DateTimeEditor;
        F19SubmitDate: Serenity.DateTimeEditor;
        F19SubmitBy: Serenity.StringEditor;
    }

    export class F19_CommitteeApprovalForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.F19_CommitteeApproval';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!F19_CommitteeApprovalForm.init)  {
                F19_CommitteeApprovalForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = F19_CommitteeMembersEditor;
                var w3 = F19_ProcParticipantsEditor;
                var w4 = s.DateTimeEditor;

                Q.initFormType(F19_CommitteeApprovalForm, [
                    'ProcurementId', w0,
                    'ProcurementTypeId', w1,
                    'Status', w1,
                    'CollectiveNumber', w0,
                    'Title', w0,
                    'Classification', w0,
                    'Qualification', w0,
                    'CommitteeMember', w2,
                    'ProcParticipant', w3,
                    'DocSubmitMethodId', w1,
                    'TenderDocSubmitOpenDate', w4,
                    'TenderDocSubmitCloseDate', w4,
                    'F19SubmitDate', w4,
                    'F19SubmitBy', w0
                ]);
            }
        }
    }
}

