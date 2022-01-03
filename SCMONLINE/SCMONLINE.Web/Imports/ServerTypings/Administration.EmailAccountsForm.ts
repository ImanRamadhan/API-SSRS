namespace SCMONLINE.Administration {
    export interface EmailAccountsForm {
        Email: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Host: Serenity.StringEditor;
        Port: Serenity.IntegerEditor;
        Username: Serenity.StringEditor;
        Password: Serenity.StringEditor;
        EnableSsl: Serenity.BooleanEditor;
        UseDefaultCredentials: Serenity.BooleanEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        IsActive: Serenity.IntegerEditor;
    }

    export class EmailAccountsForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.EmailAccounts';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EmailAccountsForm.init)  {
                EmailAccountsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.BooleanEditor;
                var w3 = s.DateEditor;

                Q.initFormType(EmailAccountsForm, [
                    'Email', w0,
                    'DisplayName', w0,
                    'Host', w0,
                    'Port', w1,
                    'Username', w0,
                    'Password', w0,
                    'EnableSsl', w2,
                    'UseDefaultCredentials', w2,
                    'InsertDate', w3,
                    'InsertUserId', w1,
                    'UpdateDate', w3,
                    'UpdateUserId', w1,
                    'IsActive', w1
                ]);
            }
        }
    }
}

