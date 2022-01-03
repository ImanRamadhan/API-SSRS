namespace SCMONLINE.Procurement {
    export interface F17_PurchOrderDocUploadForm {
        ProcurementTypeId: Serenity.LookupEditor;
        Status: Serenity.LookupEditor;
        CollectiveNumber: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        Classification: Serenity.StringEditor;
        Qualification: Serenity.StringEditor;
        PoDocName: Serenity.StringEditor;
        PoNumber: Serenity.StringEditor;
        PoDocFile: Serenity.ImageUploadEditor;
        F13SubmitDate: Serenity.DateTimeEditor;
        F17SubmitDate: Serenity.DateTimeEditor;
        F17SubmitBy: Serenity.StringEditor;
    }

    export class F17_PurchOrderDocUploadForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.F17_PurchOrderDocUpload';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!F17_PurchOrderDocUploadForm.init)  {
                F17_PurchOrderDocUploadForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.ImageUploadEditor;
                var w3 = s.DateTimeEditor;

                Q.initFormType(F17_PurchOrderDocUploadForm, [
                    'ProcurementTypeId', w0,
                    'Status', w0,
                    'CollectiveNumber', w1,
                    'Title', w1,
                    'Classification', w1,
                    'Qualification', w1,
                    'PoDocName', w1,
                    'PoNumber', w1,
                    'PoDocFile', w2,
                    'F13SubmitDate', w3,
                    'F17SubmitDate', w3,
                    'F17SubmitBy', w1
                ]);
            }
        }
    }
}

