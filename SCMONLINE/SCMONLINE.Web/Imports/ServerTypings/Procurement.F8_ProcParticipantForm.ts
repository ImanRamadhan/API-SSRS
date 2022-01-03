namespace SCMONLINE.Procurement {
    export interface F8_ProcParticipantForm {
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
        EvaluationConclusionId: Serenity.LookupEditor;
        ClarificationRequest: Serenity.TextAreaEditor;
        ClarificationOffer: Serenity.TextAreaEditor;
        ClarificationResult: Serenity.TextAreaEditor;
        F5ParticipantSubmitDate: Serenity.DateTimeEditor;
        F5ParticipantSubmitBy: Serenity.StringEditor;
    }

    export class F8_ProcParticipantForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.F8_ProcParticipant';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!F8_ProcParticipantForm.init)  {
                F8_ProcParticipantForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.LookupEditor;
                var w3 = s.ImageUploadEditor;
                var w4 = s.TextAreaEditor;
                var w5 = s.DateTimeEditor;

                Q.initFormType(F8_ProcParticipantForm, [
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
                    'EvaluationConclusionId', w2,
                    'ClarificationRequest', w4,
                    'ClarificationOffer', w4,
                    'ClarificationResult', w4,
                    'F5ParticipantSubmitDate', w5,
                    'F5ParticipantSubmitBy', w0
                ]);
            }
        }
    }
}

