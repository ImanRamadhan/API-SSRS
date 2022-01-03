namespace SCMONLINE.Procurement {
    export interface F15_ObjectionProcessForm {
        VendorId: Serenity.LookupEditor;
        EvaluationConclusionId: Serenity.LookupEditor;
        SubmitObjection: _Ext.YaTidakEditor;
        ObjectionTerms: _Ext.StaticTextBlock;
        ObjectionDescription: Serenity.TextAreaEditor;
    }

    export class F15_ObjectionProcessForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.F15_ObjectionProcess';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!F15_ObjectionProcessForm.init)  {
                F15_ObjectionProcessForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = _Ext.YaTidakEditor;
                var w2 = _Ext.StaticTextBlock;
                var w3 = s.TextAreaEditor;

                Q.initFormType(F15_ObjectionProcessForm, [
                    'VendorId', w0,
                    'EvaluationConclusionId', w0,
                    'SubmitObjection', w1,
                    'ObjectionTerms', w2,
                    'ObjectionDescription', w3
                ]);
            }
        }
    }
}

