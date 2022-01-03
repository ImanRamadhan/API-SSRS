namespace SCMONLINE.Procurement {
    export interface F10_ProcParticipantForm {
        ProcurementId: Serenity.StringEditor;
        SequenceNo: Serenity.IntegerEditor;
        VendorId: Serenity.LookupEditor;
        PriceDocumentFile: Serenity.ImageUploadEditor;
        PriceDocumentName: Serenity.StringEditor;
        TechSpecDocFile: Serenity.ImageUploadEditor;
        TechSpecDocName: Serenity.StringEditor;
        SupportingLetterFile: Serenity.ImageUploadEditor;
        SupportingLetterName: Serenity.StringEditor;
        CatalogFile: Serenity.ImageUploadEditor;
        CatalogName: Serenity.StringEditor;
        SubmitDocTnc: Serenity.BooleanEditor;
        SubmitDocTncDate: Serenity.DateEditor;
        AdminDocExists: Serenity.EnumEditor;
        TechSpecDocExists: Serenity.EnumEditor;
        SupportingLetterExists: Serenity.EnumEditor;
        CatalogExists: Serenity.EnumEditor;
        OpeningDocDesc: Serenity.TextAreaEditor;
        AdminDocAtk: Serenity.LookupEditor;
        TechSpecDocAtk: Serenity.LookupEditor;
        SupportingLetterAtk: Serenity.LookupEditor;
        CatalogAtk: Serenity.LookupEditor;
        EvaluationDesc: Serenity.TextAreaEditor;
        ClarificationRequest: Serenity.TextAreaEditor;
        EvaluationConclusionId: Serenity.LookupEditor;
        ClarificationOffer: Serenity.TextAreaEditor;
        ClarificationResult: Serenity.TextAreaEditor;
        Source: Serenity.StringEditor;
        F5ParticipantSubmitDate: Serenity.DateTimeEditor;
        F5ParticipantSubmitBy: Serenity.StringEditor;
        FinalBidPrice: Serenity.DecimalEditor;
        SubmitObjection: _Ext.YaTidakEditor;
        ObjectionDescription: Serenity.TextAreaEditor;
        F15ParticipantSubmitDate: Serenity.DateTimeEditor;
        F15ParticipantSubmitBy: Serenity.StringEditor;
        Invitation: Serenity.EnumEditor;
    }

    export class F10_ProcParticipantForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.F10_ProcParticipant';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!F10_ProcParticipantForm.init)  {
                F10_ProcParticipantForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.LookupEditor;
                var w3 = s.ImageUploadEditor;
                var w4 = s.BooleanEditor;
                var w5 = s.DateEditor;
                var w6 = s.EnumEditor;
                var w7 = s.TextAreaEditor;
                var w8 = s.DateTimeEditor;
                var w9 = s.DecimalEditor;
                var w10 = _Ext.YaTidakEditor;

                Q.initFormType(F10_ProcParticipantForm, [
                    'ProcurementId', w0,
                    'SequenceNo', w1,
                    'VendorId', w2,
                    'PriceDocumentFile', w3,
                    'PriceDocumentName', w0,
                    'TechSpecDocFile', w3,
                    'TechSpecDocName', w0,
                    'SupportingLetterFile', w3,
                    'SupportingLetterName', w0,
                    'CatalogFile', w3,
                    'CatalogName', w0,
                    'SubmitDocTnc', w4,
                    'SubmitDocTncDate', w5,
                    'AdminDocExists', w6,
                    'TechSpecDocExists', w6,
                    'SupportingLetterExists', w6,
                    'CatalogExists', w6,
                    'OpeningDocDesc', w7,
                    'AdminDocAtk', w2,
                    'TechSpecDocAtk', w2,
                    'SupportingLetterAtk', w2,
                    'CatalogAtk', w2,
                    'EvaluationDesc', w7,
                    'ClarificationRequest', w7,
                    'EvaluationConclusionId', w2,
                    'ClarificationOffer', w7,
                    'ClarificationResult', w7,
                    'Source', w0,
                    'F5ParticipantSubmitDate', w8,
                    'F5ParticipantSubmitBy', w0,
                    'FinalBidPrice', w9,
                    'SubmitObjection', w10,
                    'ObjectionDescription', w7,
                    'F15ParticipantSubmitDate', w8,
                    'F15ParticipantSubmitBy', w0,
                    'Invitation', w6
                ]);
            }
        }
    }
}

