namespace SCMONLINE.Procurement {
    export interface F20_ProcPrForm {
        ProcurementId: Serenity.StringEditor;
        PrNo: Serenity.StringEditor;
        InsertDate: Serenity.DateEditor;
        InsertBy: Serenity.StringEditor;
    }

    export class F20_ProcPrForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.F20_ProcPr';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!F20_ProcPrForm.init)  {
                F20_ProcPrForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;

                Q.initFormType(F20_ProcPrForm, [
                    'ProcurementId', w0,
                    'PrNo', w0,
                    'InsertDate', w1,
                    'InsertBy', w0
                ]);
            }
        }
    }
}

