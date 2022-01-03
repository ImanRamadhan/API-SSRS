namespace SCMONLINE.Procurement {
    export interface ProcPrForm {
        PrNo: Serenity.StringEditor;
        PrNoScanPrFile: Serenity.ImageUploadEditor;
        PrNoScanPrName: Serenity.StringEditor;
        InsertDate: Serenity.DateEditor;
        InsertBy: Serenity.StringEditor;
    }

    export class ProcPrForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.ProcPr';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProcPrForm.init)  {
                ProcPrForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.ImageUploadEditor;
                var w2 = s.DateEditor;

                Q.initFormType(ProcPrForm, [
                    'PrNo', w0,
                    'PrNoScanPrFile', w1,
                    'PrNoScanPrName', w0,
                    'InsertDate', w2,
                    'InsertBy', w0
                ]);
            }
        }
    }
}

