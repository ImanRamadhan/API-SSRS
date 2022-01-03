namespace SCMONLINE.Inbox {
    export interface NotificationRow {
        NotificationId?: number;
        Title?: string;
        Description?: string;
        Link?: string;
        CreateDate?: string;
        ReadingDate?: string;
        UserId?: number;
        UserUsername?: string;
        UserDisplayName?: string;
        UserEmail?: string;
        UserSource?: string;
        UserPasswordHash?: string;
        UserPasswordSalt?: string;
        UserLastDirectoryUpdate?: string;
        UserUserImage?: string;
        UserInsertDate?: string;
        UserInsertUserId?: number;
        UserUpdateDate?: string;
        UserUpdateUserId?: number;
        UserIsActive?: number;
    }

    export namespace NotificationRow {
        export const idProperty = 'NotificationId';
        export const nameProperty = 'Title';
        export const localTextPrefix = 'Inbox.Notification';

        export declare const enum Fields {
            NotificationId = "NotificationId",
            Title = "Title",
            Description = "Description",
            Link = "Link",
            CreateDate = "CreateDate",
            ReadingDate = "ReadingDate",
            UserId = "UserId",
            UserUsername = "UserUsername",
            UserDisplayName = "UserDisplayName",
            UserEmail = "UserEmail",
            UserSource = "UserSource",
            UserPasswordHash = "UserPasswordHash",
            UserPasswordSalt = "UserPasswordSalt",
            UserLastDirectoryUpdate = "UserLastDirectoryUpdate",
            UserUserImage = "UserUserImage",
            UserInsertDate = "UserInsertDate",
            UserInsertUserId = "UserInsertUserId",
            UserUpdateDate = "UserUpdateDate",
            UserUpdateUserId = "UserUpdateUserId",
            UserIsActive = "UserIsActive"
        }
    }
}

