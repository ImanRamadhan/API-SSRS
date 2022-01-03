namespace SCMONLINE.Procurement {
    export interface RfqItemTextForm {
        RfqItemId: Serenity.StringEditor;
        TextId: Serenity.StringEditor;
        TextForm: Serenity.StringEditor;
        TextLine: Serenity.StringEditor;
    }

    export class RfqItemTextForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.RfqItemText';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RfqItemTextForm.init)  {
                RfqItemTextForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(RfqItemTextForm, [
                    'RfqItemId', w0,
                    'TextId', w0,
                    'TextForm', w0,
                    'TextLine', w0
                ]);
            }
        }
    }
}

