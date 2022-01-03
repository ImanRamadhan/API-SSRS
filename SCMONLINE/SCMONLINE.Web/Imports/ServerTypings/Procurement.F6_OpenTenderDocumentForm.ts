namespace SCMONLINE.Procurement {
    export interface F6_OpenTenderDocumentForm {
        ProcurementTypeId: Serenity.LookupEditor;
        Status: Serenity.LookupEditor;
        CollectiveNumber: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        Classification: Serenity.StringEditor;
        Qualification: Serenity.StringEditor;
        ProcParticipant: F6_ProcParticipantsEditor;
        DocSubmitMethodId: Serenity.LookupEditor;
        ProcRejectTender: Serenity.EnumEditor;
        ProcRejectTenderDesc: Serenity.TextAreaEditor;
        TenderDocSubmitOpenDate: Serenity.DateTimeEditor;
        TenderDocSubmitCloseDate: Serenity.DateTimeEditor;
    }

    export class F6_OpenTenderDocumentForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.F6_OpenTenderDocument';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!F6_OpenTenderDocumentForm.init)  {
                F6_OpenTenderDocumentForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = F6_ProcParticipantsEditor;
                var w3 = s.EnumEditor;
                var w4 = s.TextAreaEditor;
                var w5 = s.DateTimeEditor;

                Q.initFormType(F6_OpenTenderDocumentForm, [
                    'ProcurementTypeId', w0,
                    'Status', w0,
                    'CollectiveNumber', w1,
                    'Title', w1,
                    'Classification', w1,
                    'Qualification', w1,
                    'ProcParticipant', w2,
                    'DocSubmitMethodId', w0,
                    'ProcRejectTender', w3,
                    'ProcRejectTenderDesc', w4,
                    'TenderDocSubmitOpenDate', w5,
                    'TenderDocSubmitCloseDate', w5
                ]);
            }
        }
    }
}

