namespace SCMONLINE.Procurement {
    export interface F6_ProcParticipantForm {
        ProcurementId: Serenity.StringEditor;
        SequenceNo: Serenity.IntegerEditor;
        VendorId: Serenity.LookupEditor;
        VendorName: Serenity.StringEditor;
        PriceDocumentFile: Serenity.ImageUploadEditor;
        TechSpecDocFile: Serenity.ImageUploadEditor;
        SupportingLetterFile: Serenity.ImageUploadEditor;
        CatalogFile: Serenity.ImageUploadEditor;
        AdminDocExists: Serenity.EnumEditor;
        TechSpecDocExists: Serenity.EnumEditor;
        SupportingLetterExists: Serenity.EnumEditor;
        CatalogExists: Serenity.EnumEditor;
        OpeningDocDesc: Serenity.TextAreaEditor;
        ProcParticipantItems: F6_ProcParticipantItemsEditor;
        F5ParticipantSubmitDate: Serenity.DateTimeEditor;
        F5ParticipantSubmitBy: Serenity.StringEditor;
    }

    export class F6_ProcParticipantForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.F6_ProcParticipant';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!F6_ProcParticipantForm.init)  {
                F6_ProcParticipantForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.LookupEditor;
                var w3 = s.ImageUploadEditor;
                var w4 = s.EnumEditor;
                var w5 = s.TextAreaEditor;
                var w6 = F6_ProcParticipantItemsEditor;
                var w7 = s.DateTimeEditor;

                Q.initFormType(F6_ProcParticipantForm, [
                    'ProcurementId', w0,
                    'SequenceNo', w1,
                    'VendorId', w2,
                    'VendorName', w0,
                    'PriceDocumentFile', w3,
                    'TechSpecDocFile', w3,
                    'SupportingLetterFile', w3,
                    'CatalogFile', w3,
                    'AdminDocExists', w4,
                    'TechSpecDocExists', w4,
                    'SupportingLetterExists', w4,
                    'CatalogExists', w4,
                    'OpeningDocDesc', w5,
                    'ProcParticipantItems', w6,
                    'F5ParticipantSubmitDate', w7,
                    'F5ParticipantSubmitBy', w0
                ]);
            }
        }
    }
}

