namespace SCMONLINE.Procurement {
    export interface F14_WinnerAnnouncementForm {
        ProcurementTypeId: Serenity.LookupEditor;
        Status: Serenity.LookupEditor;
        CollectiveNumber: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        Classification: Serenity.StringEditor;
        Qualification: Serenity.StringEditor;
        ObjectionCloseDate: Serenity.DateTimeEditor;
        F13SubmitDate: Serenity.DateTimeEditor;
        F13SubmitBy: Serenity.StringEditor;
        F14SubmitDate: Serenity.DateTimeEditor;
        F14SubmitBy: Serenity.StringEditor;
    }

    export class F14_WinnerAnnouncementForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.F14_WinnerAnnouncement';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!F14_WinnerAnnouncementForm.init)  {
                F14_WinnerAnnouncementForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateTimeEditor;

                Q.initFormType(F14_WinnerAnnouncementForm, [
                    'ProcurementTypeId', w0,
                    'Status', w0,
                    'CollectiveNumber', w1,
                    'Title', w1,
                    'Classification', w1,
                    'Qualification', w1,
                    'ObjectionCloseDate', w2,
                    'F13SubmitDate', w2,
                    'F13SubmitBy', w1,
                    'F14SubmitDate', w2,
                    'F14SubmitBy', w1
                ]);
            }
        }
    }
}

