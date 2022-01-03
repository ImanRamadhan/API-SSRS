namespace SCMONLINE.Procurement {
    export interface CharacteristicDescriptionForm {
        Language: Serenity.StringEditor;
        IntCounter: Serenity.IntegerEditor;
        Description: Serenity.StringEditor;
        Heading1: Serenity.StringEditor;
        Heading2: Serenity.StringEditor;
        ValidFrom: Serenity.DateEditor;
        TechStFrom: Serenity.StringEditor;
        ChangeNumber: Serenity.StringEditor;
        DeletionInd: Serenity.StringEditor;
    }

    export class CharacteristicDescriptionForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.CharacteristicDescription';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CharacteristicDescriptionForm.init)  {
                CharacteristicDescriptionForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;

                Q.initFormType(CharacteristicDescriptionForm, [
                    'Language', w0,
                    'IntCounter', w1,
                    'Description', w0,
                    'Heading1', w0,
                    'Heading2', w0,
                    'ValidFrom', w2,
                    'TechStFrom', w0,
                    'ChangeNumber', w0,
                    'DeletionInd', w0
                ]);
            }
        }
    }
}

