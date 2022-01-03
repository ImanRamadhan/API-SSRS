namespace SCMONLINE.Procurement {
    export interface ContractTypeForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }

    export class ContractTypeForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.ContractType';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ContractTypeForm.init)  {
                ContractTypeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(ContractTypeForm, [
                    'Name', w0,
                    'Description', w0
                ]);
            }
        }
    }
}

