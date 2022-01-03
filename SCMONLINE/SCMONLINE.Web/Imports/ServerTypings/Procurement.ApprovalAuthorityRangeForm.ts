namespace SCMONLINE.Procurement {
    export interface ApprovalAuthorityRangeForm {
        RoleId: Serenity.IntegerEditor;
        ProcurementTypeId: Serenity.StringEditor;
        CurrencyId: Serenity.StringEditor;
        MinValue: Serenity.DecimalEditor;
        MaxValue: Serenity.DecimalEditor;
    }

    export class ApprovalAuthorityRangeForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.ApprovalAuthorityRange';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ApprovalAuthorityRangeForm.init)  {
                ApprovalAuthorityRangeForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(ApprovalAuthorityRangeForm, [
                    'RoleId', w0,
                    'ProcurementTypeId', w1,
                    'CurrencyId', w1,
                    'MinValue', w2,
                    'MaxValue', w2
                ]);
            }
        }
    }
}

