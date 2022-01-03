namespace SCMONLINE.Administration {
    export interface EmailAccountsRow {
        Id?: number;
        Email?: string;
        DisplayName?: string;
        Host?: string;
        Port?: number;
        Username?: string;
        Password?: string;
        EnableSsl?: boolean;
        UseDefaultCredentials?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        IsActive?: number;
    }

    export namespace EmailAccountsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Email';
        export const localTextPrefix = 'Administration.EmailAccounts';

        export declare const enum Fields {
            Id = "Id",
            Email = "Email",
            DisplayName = "DisplayName",
            Host = "Host",
            Port = "Port",
            Username = "Username",
            Password = "Password",
            EnableSsl = "EnableSsl",
            UseDefaultCredentials = "UseDefaultCredentials",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            IsActive = "IsActive"
        }
    }
}

