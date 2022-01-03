namespace SCMONLINE.Default {
    export interface ProcParticipantForm {
        ProcurementId: Serenity.StringEditor;
        SequenceNo: Serenity.IntegerEditor;
        VendorId: Serenity.StringEditor;
        PriceDocumentFile: Serenity.StringEditor;
        PriceDocumentName: Serenity.StringEditor;
        TechSpecDocFile: Serenity.StringEditor;
        TechSpecDocName: Serenity.StringEditor;
        SupportingLetterFile: Serenity.StringEditor;
        SupportingLetterName: Serenity.StringEditor;
        CatalogFile: Serenity.StringEditor;
        CatalogName: Serenity.StringEditor;
        SubmitDocTnc: Serenity.BooleanEditor;
        SubmitDocTncDate: Serenity.DateEditor;
        AdminDocExists: Serenity.BooleanEditor;
        TechSpecDocExists: Serenity.BooleanEditor;
        SupportingLetterExists: Serenity.BooleanEditor;
        CatalogExists: Serenity.BooleanEditor;
        OpeningDocDesc: Serenity.StringEditor;
        AdminDocAtk: Serenity.IntegerEditor;
        TechSpecDocAtk: Serenity.IntegerEditor;
        SupportingLetterAtk: Serenity.IntegerEditor;
        CatalogAtk: Serenity.IntegerEditor;
        EvaluationDesc: Serenity.StringEditor;
        ClarificationRequest: Serenity.StringEditor;
        EvaluationConclusionId: Serenity.IntegerEditor;
        ClarificationOffer: Serenity.StringEditor;
        ClarificationResult: Serenity.StringEditor;
        Source: Serenity.StringEditor;
        F5ParticipantSubmitDate: Serenity.DateEditor;
        F5ParticipantSubmitBy: Serenity.StringEditor;
        FinalBidPrice: Serenity.DecimalEditor;
        SubmitObjection: Serenity.BooleanEditor;
        ObjectionDescription: Serenity.StringEditor;
        F15ParticipantSubmitDate: Serenity.DateEditor;
        F15ParticipantSubmitBy: Serenity.StringEditor;
        Invitation: Serenity.BooleanEditor;
        QuoteDesc: Serenity.StringEditor;
    }

    export class ProcParticipantForm extends Serenity.PrefixedContext {
        static formKey = 'Default.ProcParticipant';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProcParticipantForm.init)  {
                ProcParticipantForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.BooleanEditor;
                var w3 = s.DateEditor;
                var w4 = s.DecimalEditor;

                Q.initFormType(ProcParticipantForm, [
                    'ProcurementId', w0,
                    'SequenceNo', w1,
                    'VendorId', w0,
                    'PriceDocumentFile', w0,
                    'PriceDocumentName', w0,
                    'TechSpecDocFile', w0,
                    'TechSpecDocName', w0,
                    'SupportingLetterFile', w0,
                    'SupportingLetterName', w0,
                    'CatalogFile', w0,
                    'CatalogName', w0,
                    'SubmitDocTnc', w2,
                    'SubmitDocTncDate', w3,
                    'AdminDocExists', w2,
                    'TechSpecDocExists', w2,
                    'SupportingLetterExists', w2,
                    'CatalogExists', w2,
                    'OpeningDocDesc', w0,
                    'AdminDocAtk', w1,
                    'TechSpecDocAtk', w1,
                    'SupportingLetterAtk', w1,
                    'CatalogAtk', w1,
                    'EvaluationDesc', w0,
                    'ClarificationRequest', w0,
                    'EvaluationConclusionId', w1,
                    'ClarificationOffer', w0,
                    'ClarificationResult', w0,
                    'Source', w0,
                    'F5ParticipantSubmitDate', w3,
                    'F5ParticipantSubmitBy', w0,
                    'FinalBidPrice', w4,
                    'SubmitObjection', w2,
                    'ObjectionDescription', w0,
                    'F15ParticipantSubmitDate', w3,
                    'F15ParticipantSubmitBy', w0,
                    'Invitation', w2,
                    'QuoteDesc', w0
                ]);
            }
        }
    }
}

