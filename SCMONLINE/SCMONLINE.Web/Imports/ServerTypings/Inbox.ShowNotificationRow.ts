namespace SCMONLINE.Inbox {
    export interface ShowNotificationRow {
        NotificationId?: number;
        Title?: string;
        Description?: string;
        Link?: string;
        CreateDate?: string;
        ReadingDate?: string;
        UserId?: number;
    }

    export namespace ShowNotificationRow {
        export const idProperty = 'NotificationId';
        export const nameProperty = 'Title';
        export const localTextPrefix = 'Inbox.ShowNotification';

        export declare const enum Fields {
            NotificationId = "NotificationId",
            Title = "Title",
            Description = "Description",
            Link = "Link",
            CreateDate = "CreateDate",
            ReadingDate = "ReadingDate",
            UserId = "UserId"
        }
    }
}

