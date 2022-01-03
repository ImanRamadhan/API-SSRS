namespace SCMONLINE.Procurement {
    export interface OwnerEstimateReviewImportForm {
        FileName: Serenity.ImageUploadEditor;
    }

    export class OwnerEstimateReviewImportForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.OwnerEstimateReviewImport';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OwnerEstimateReviewImportForm.init)  {
                OwnerEstimateReviewImportForm.init = true;

                var s = Serenity;
                var w0 = s.ImageUploadEditor;

                Q.initFormType(OwnerEstimateReviewImportForm, [
                    'FileName', w0
                ]);
            }
        }
    }
}

