namespace SCMONLINE.Administration {
    export interface QueuedEmailRow {
        Id?: number;
        PriorityId?: number;
        From?: string;
        FromName?: string;
        To?: string;
        ToName?: string;
        ReplyTo?: string;
        ReplyToName?: string;
        Cc?: string;
        Bcc?: string;
        Subject?: string;
        Body?: string;
        AttachmentFilePath?: string;
        AttachmentFileName?: string;
        AttachedDownloadId?: number;
        CreatedOnUtc?: string;
        SentTries?: number;
        SentOnUtc?: string;
        EmailAccountId?: number;
        DontSendBeforeDateUtc?: string;
        HasError?: boolean;
        Result?: string;
        EmailAccountEmail?: string;
        EmailAccountDisplayName?: string;
        EmailAccountHost?: string;
        EmailAccountPort?: number;
        EmailAccountUsername?: string;
        EmailAccountPassword?: string;
        EmailAccountEnableSsl?: boolean;
        EmailAccountUseDefaultCredentials?: boolean;
        EmailAccountInsertDate?: string;
        EmailAccountInsertUserId?: number;
        EmailAccountUpdateDate?: string;
        EmailAccountUpdateUserId?: number;
        EmailAccountIsActive?: number;
    }

    export namespace QueuedEmailRow {
        export const idProperty = 'Id';
        export const nameProperty = 'From';
        export const localTextPrefix = 'Administration.QueuedEmail';

        export declare const enum Fields {
            Id = "Id",
            PriorityId = "PriorityId",
            From = "From",
            FromName = "FromName",
            To = "To",
            ToName = "ToName",
            ReplyTo = "ReplyTo",
            ReplyToName = "ReplyToName",
            Cc = "Cc",
            Bcc = "Bcc",
            Subject = "Subject",
            Body = "Body",
            AttachmentFilePath = "AttachmentFilePath",
            AttachmentFileName = "AttachmentFileName",
            AttachedDownloadId = "AttachedDownloadId",
            CreatedOnUtc = "CreatedOnUtc",
            SentTries = "SentTries",
            SentOnUtc = "SentOnUtc",
            EmailAccountId = "EmailAccountId",
            DontSendBeforeDateUtc = "DontSendBeforeDateUtc",
            HasError = "HasError",
            Result = "Result",
            EmailAccountEmail = "EmailAccountEmail",
            EmailAccountDisplayName = "EmailAccountDisplayName",
            EmailAccountHost = "EmailAccountHost",
            EmailAccountPort = "EmailAccountPort",
            EmailAccountUsername = "EmailAccountUsername",
            EmailAccountPassword = "EmailAccountPassword",
            EmailAccountEnableSsl = "EmailAccountEnableSsl",
            EmailAccountUseDefaultCredentials = "EmailAccountUseDefaultCredentials",
            EmailAccountInsertDate = "EmailAccountInsertDate",
            EmailAccountInsertUserId = "EmailAccountInsertUserId",
            EmailAccountUpdateDate = "EmailAccountUpdateDate",
            EmailAccountUpdateUserId = "EmailAccountUpdateUserId",
            EmailAccountIsActive = "EmailAccountIsActive"
        }
    }
}

