namespace SCMONLINE.Procurement {
    export interface BidPriceImportForm {
        FileName: Serenity.ImageUploadEditor;
    }

    export class BidPriceImportForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.BidPriceImport';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BidPriceImportForm.init)  {
                BidPriceImportForm.init = true;

                var s = Serenity;
                var w0 = s.ImageUploadEditor;

                Q.initFormType(BidPriceImportForm, [
                    'FileName', w0
                ]);
            }
        }
    }
}

