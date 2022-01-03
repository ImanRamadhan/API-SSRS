namespace SCMONLINE.Procurement {
    export interface F5_SubmitTenderDocumentForm {
        ProcurementId: Serenity.StringEditor;
        ProcurementProcurementTypeId: Serenity.StringEditor;
        ProcurementStatus: Serenity.StringEditor;
        ProcurementCollectiveNumber: Serenity.StringEditor;
        ProcurementTitle: Serenity.StringEditor;
        ProcurementClassification: Serenity.StringEditor;
        ProcurementQualification: Serenity.StringEditor;
        DocSubmitMethodName: Serenity.StringEditor;
        VendorId: Serenity.LookupEditor;
        PriceDocumentFile: Serenity.ImageUploadEditor;
        TechSpecDocFile: Serenity.ImageUploadEditor;
        SupportingLetterFile: Serenity.ImageUploadEditor;
        CatalogFile: Serenity.ImageUploadEditor;
        SubmitDocTnc: Serenity.BooleanEditor;
        SubmitDocTncDate: Serenity.DateEditor;
        ProcParticipantItems: F5_ProcParticipantItemsEditor;
        F5ParticipantSubmitDate: Serenity.DateTimeEditor;
        F5ParticipantSubmitBy: Serenity.StringEditor;
    }

    export class F5_SubmitTenderDocumentForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.F5_SubmitTenderDocument';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!F5_SubmitTenderDocumentForm.init)  {
                F5_SubmitTenderDocumentForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.ImageUploadEditor;
                var w3 = s.BooleanEditor;
                var w4 = s.DateEditor;
                var w5 = F5_ProcParticipantItemsEditor;
                var w6 = s.DateTimeEditor;

                Q.initFormType(F5_SubmitTenderDocumentForm, [
                    'ProcurementId', w0,
                    'ProcurementProcurementTypeId', w0,
                    'ProcurementStatus', w0,
                    'ProcurementCollectiveNumber', w0,
                    'ProcurementTitle', w0,
                    'ProcurementClassification', w0,
                    'ProcurementQualification', w0,
                    'DocSubmitMethodName', w0,
                    'VendorId', w1,
                    'PriceDocumentFile', w2,
                    'TechSpecDocFile', w2,
                    'SupportingLetterFile', w2,
                    'CatalogFile', w2,
                    'SubmitDocTnc', w3,
                    'SubmitDocTncDate', w4,
                    'ProcParticipantItems', w5,
                    'F5ParticipantSubmitDate', w6,
                    'F5ParticipantSubmitBy', w0
                ]);
            }
        }
    }
}

