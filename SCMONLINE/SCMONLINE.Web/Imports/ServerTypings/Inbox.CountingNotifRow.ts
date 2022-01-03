namespace SCMONLINE.Inbox {
    export interface CountingNotifRow {
        NotifCount?: number;
    }

    export namespace CountingNotifRow {
        export const idProperty = 'NotifCount';
        export const localTextPrefix = 'Inbox.CountingNotif';

        export declare const enum Fields {
            NotifCount = "NotifCount"
        }
    }
}

