namespace SCMONLINE.Administration {
    export interface SettingForm {
        Value: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }

    export class SettingForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.Setting';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SettingForm.init)  {
                SettingForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(SettingForm, [
                    'Value', w0,
                    'Description', w0
                ]);
            }
        }
    }
}

