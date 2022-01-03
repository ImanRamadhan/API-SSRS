namespace SCMONLINE.Procurement {
    export interface CharacteristicValueForm {
        Object: Serenity.StringEditor;
        InternalChar: Serenity.StringEditor;
        Counter: Serenity.StringEditor;
        ObjectClass: Serenity.StringEditor;
        ClassType: Serenity.StringEditor;
        IntCounter: Serenity.StringEditor;
        CharValue: Serenity.StringEditor;
        ValueFrom: Serenity.StringEditor;
        IntMeasUnit: Serenity.StringEditor;
        ValueTo: Serenity.StringEditor;
        Code: Serenity.StringEditor;
        ToleranceFrom: Serenity.StringEditor;
        ToleranceTo: Serenity.StringEditor;
        Percentage: Serenity.StringEditor;
        Increment: Serenity.StringEditor;
        Author: Serenity.StringEditor;
        ChangeNumber: Serenity.StringEditor;
        ValidFrom: Serenity.StringEditor;
        DeletionInd: Serenity.StringEditor;
        InstanceCntr: Serenity.StringEditor;
        Position: Serenity.StringEditor;
        CompType: Serenity.StringEditor;
    }

    export class CharacteristicValueForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.CharacteristicValue';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CharacteristicValueForm.init)  {
                CharacteristicValueForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(CharacteristicValueForm, [
                    'Object', w0,
                    'InternalChar', w0,
                    'Counter', w0,
                    'ObjectClass', w0,
                    'ClassType', w0,
                    'IntCounter', w0,
                    'CharValue', w0,
                    'ValueFrom', w0,
                    'IntMeasUnit', w0,
                    'ValueTo', w0,
                    'Code', w0,
                    'ToleranceFrom', w0,
                    'ToleranceTo', w0,
                    'Percentage', w0,
                    'Increment', w0,
                    'Author', w0,
                    'ChangeNumber', w0,
                    'ValidFrom', w0,
                    'DeletionInd', w0,
                    'InstanceCntr', w0,
                    'Position', w0,
                    'CompType', w0
                ]);
            }
        }
    }
}

