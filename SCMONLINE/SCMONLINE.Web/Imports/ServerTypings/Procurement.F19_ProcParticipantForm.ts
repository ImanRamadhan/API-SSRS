namespace SCMONLINE.Procurement {
    export interface F19_ProcParticipantForm {
        ProcurementId: Serenity.StringEditor;
        SequenceNo: Serenity.IntegerEditor;
        VendorId: Serenity.LookupEditor;
        VendorName: Serenity.StringEditor;
        PriceDocumentFile: Serenity.ImageUploadEditor;
        TechSpecDocFile: Serenity.ImageUploadEditor;
        SupportingLetterFile: Serenity.ImageUploadEditor;
        CatalogFile: Serenity.ImageUploadEditor;
        AdminDocAtk: Serenity.LookupEditor;
        TechSpecDocAtk: Serenity.LookupEditor;
        SupportingLetterAtk: Serenity.LookupEditor;
        CatalogAtk: Serenity.LookupEditor;
        EvaluationDesc: Serenity.TextAreaEditor;
        ClarificationRequest: Serenity.TextAreaEditor;
        EvaluationConclusionId: Serenity.LookupEditor;
        ProcParticipantItems: F7_ProcParticipantItemsEditor;
        F5ParticipantSubmitDate: Serenity.DateTimeEditor;
        F5ParticipantSubmitBy: Serenity.StringEditor;
    }

    export class F19_ProcParticipantForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.F19_ProcParticipant';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!F19_ProcParticipantForm.init)  {
                F19_ProcParticipantForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.LookupEditor;
                var w3 = s.ImageUploadEditor;
                var w4 = s.TextAreaEditor;
                var w5 = F7_ProcParticipantItemsEditor;
                var w6 = s.DateTimeEditor;

                Q.initFormType(F19_ProcParticipantForm, [
                    'ProcurementId', w0,
                    'SequenceNo', w1,
                    'VendorId', w2,
                    'VendorName', w0,
                    'PriceDocumentFile', w3,
                    'TechSpecDocFile', w3,
                    'SupportingLetterFile', w3,
                    'CatalogFile', w3,
                    'AdminDocAtk', w2,
                    'TechSpecDocAtk', w2,
                    'SupportingLetterAtk', w2,
                    'CatalogAtk', w2,
                    'EvaluationDesc', w4,
                    'ClarificationRequest', w4,
                    'EvaluationConclusionId', w2,
                    'ProcParticipantItems', w5,
                    'F5ParticipantSubmitDate', w6,
                    'F5ParticipantSubmitBy', w0
                ]);
            }
        }
    }
}

