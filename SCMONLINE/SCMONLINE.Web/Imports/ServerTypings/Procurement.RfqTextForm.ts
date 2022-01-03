namespace SCMONLINE.Procurement {
    export interface RfqTextForm {
        ProcurementId: Serenity.StringEditor;
        TextId: Serenity.LookupEditor;
        TextForm: Serenity.StringEditor;
        TextLine: Serenity.StringEditor;
    }

    export class RfqTextForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.RfqText';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RfqTextForm.init)  {
                RfqTextForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;

                Q.initFormType(RfqTextForm, [
                    'ProcurementId', w0,
                    'TextId', w1,
                    'TextForm', w0,
                    'TextLine', w0
                ]);
            }
        }
    }
}

