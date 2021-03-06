namespace SCMONLINE.Procurement {
    export interface ProcParticipantForm {
        ProcurementId: Serenity.StringEditor;
        SequenceNo: Serenity.IntegerEditor;
        VendorId: Serenity.LookupEditor;
        VendorName: Serenity.StringEditor;
        VendorPenaltyCode: Serenity.StringEditor;
        Qualification: Serenity.StringEditor;
    }

    export class ProcParticipantForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.ProcParticipant';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProcParticipantForm.init)  {
                ProcParticipantForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.LookupEditor;

                Q.initFormType(ProcParticipantForm, [
                    'ProcurementId', w0,
                    'SequenceNo', w1,
                    'VendorId', w2,
                    'VendorName', w0,
                    'VendorPenaltyCode', w0,
                    'Qualification', w0
                ]);
            }
        }
    }
}

