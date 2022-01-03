namespace SCMONLINE.Procurement {
    export interface F1_BLSelectionAdjustmentForm {
        CollectiveNumber: Serenity.StringEditor;
        ProcurementId: Serenity.StringEditor;
        ProcurementTypeId: Serenity.LookupEditor;
        Status: Serenity.LookupEditor;
        Title: Serenity.StringEditor;
        Classification: Serenity.StringEditor;
        Qualification: Serenity.StringEditor;
        RequestedBy: Serenity.StringEditor;
        RequestorPosition: Serenity.StringEditor;
        ApprovedBy: Serenity.StringEditor;
        ApproverPosition: Serenity.StringEditor;
        SapBidderListCreatedBy: Serenity.StringEditor;
        SapBidderListCreatedDate: Serenity.DateTimeEditor;
        OfficeAddress: Serenity.LookupEditor;
        ProcValueRangeId: Serenity.LookupEditor;
        PerformanceGuaranteeRequired: _Ext.YaTidakEditor;
        GuaranteePercentage: Serenity.DecimalEditor;
        CommitteeTypeId: Serenity.LookupEditor;
        ProcurementMethodId: Serenity.LookupEditor;
        CommitteeMember: CommitteeMembersEditor;
        ProcParticipant: ProcParticipantsEditor;
        CreatedBy: Serenity.StringEditor;
        CreatedDate: Serenity.DateTimeEditor;
        F1SubmitDate: Serenity.DateTimeEditor;
        F1SubmitBy: Serenity.StringEditor;
    }

    export class F1_BLSelectionAdjustmentForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.F1_BLSelectionAdjustment';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!F1_BLSelectionAdjustmentForm.init)  {
                F1_BLSelectionAdjustmentForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DateTimeEditor;
                var w3 = _Ext.YaTidakEditor;
                var w4 = s.DecimalEditor;
                var w5 = CommitteeMembersEditor;
                var w6 = ProcParticipantsEditor;

                Q.initFormType(F1_BLSelectionAdjustmentForm, [
                    'CollectiveNumber', w0,
                    'ProcurementId', w0,
                    'ProcurementTypeId', w1,
                    'Status', w1,
                    'Title', w0,
                    'Classification', w0,
                    'Qualification', w0,
                    'RequestedBy', w0,
                    'RequestorPosition', w0,
                    'ApprovedBy', w0,
                    'ApproverPosition', w0,
                    'SapBidderListCreatedBy', w0,
                    'SapBidderListCreatedDate', w2,
                    'OfficeAddress', w1,
                    'ProcValueRangeId', w1,
                    'PerformanceGuaranteeRequired', w3,
                    'GuaranteePercentage', w4,
                    'CommitteeTypeId', w1,
                    'ProcurementMethodId', w1,
                    'CommitteeMember', w5,
                    'ProcParticipant', w6,
                    'CreatedBy', w0,
                    'CreatedDate', w2,
                    'F1SubmitDate', w2,
                    'F1SubmitBy', w0
                ]);
            }
        }
    }
}

