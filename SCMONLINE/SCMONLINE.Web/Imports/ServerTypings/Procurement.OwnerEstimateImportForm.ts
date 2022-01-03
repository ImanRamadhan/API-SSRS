namespace SCMONLINE.Procurement {
    export interface OwnerEstimateImportForm {
        FileName: Serenity.ImageUploadEditor;
    }

    export class OwnerEstimateImportForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.OwnerEstimateImport';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OwnerEstimateImportForm.init)  {
                OwnerEstimateImportForm.init = true;

                var s = Serenity;
                var w0 = s.ImageUploadEditor;

                Q.initFormType(OwnerEstimateImportForm, [
                    'FileName', w0
                ]);
            }
        }
    }
}

