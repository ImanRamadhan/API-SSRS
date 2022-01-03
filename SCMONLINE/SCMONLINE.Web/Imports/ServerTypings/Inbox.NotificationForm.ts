namespace SCMONLINE.Inbox {
    export interface NotificationForm {
        Title: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        Link: Serenity.StringEditor;
        CreateDate: Serenity.DateEditor;
        ReadingDate: Serenity.DateEditor;
        UserId: Serenity.IntegerEditor;
    }

    export class NotificationForm extends Serenity.PrefixedContext {
        static formKey = 'Inbox.Notification';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!NotificationForm.init)  {
                NotificationForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(NotificationForm, [
                    'Title', w0,
                    'Description', w0,
                    'Link', w0,
                    'CreateDate', w1,
                    'ReadingDate', w1,
                    'UserId', w2
                ]);
            }
        }
    }
}

