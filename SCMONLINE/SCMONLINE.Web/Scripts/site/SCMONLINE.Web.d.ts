/// <reference path="../../Modules/_Ext/_q/_q.d.ts" />
/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare module SCMONLINE.mi_osReadTableMC_PXD {
    class dt_ReadTableMC_Request extends Object {
        private cLIENTField;
        private qUERY_TABLEField;
        private dELIMITERField;
        private nO_DATAField;
        private rOWSKIPSField;
        private rOWCOUNTField;
        private oPTIONSField;
        private fIELDSField;
        CLIENT: string;
        QUERY_TABLE: string;
        DELIMITER: string;
        NO_DATA: string;
        ROWSKIPS: string;
        ROWCOUNT: string;
        OPTIONS: dt_ReadTableMC_RequestOPTIONS[];
        FIELDS: dt_ReadTableMC_RequestFIELDS[];
    }
    class dt_ReadTableMC_RequestOPTIONS extends Object {
        private tEXTField;
        TEXT: string;
    }
    class dt_ReadTableMC_Response extends Object {
        private cLIENTField;
        private eRROR_CODESField;
        private fIELDSField;
        private dATAField;
        CLIENT: string;
        ERROR_CODES: string;
        FIELDS: dt_ReadTableMC_ResponseFIELDS[];
        DATA: dt_ReadTableMC_ResponseDATA[];
    }
    class dt_ReadTableMC_ResponseFIELDS extends Object {
        private fIELDNAMEField;
        private oFFSETField;
        private lENGTHField;
        private tYPEField;
        private fIELDTEXTField;
        FIELDNAME: string;
        OFFSET: string;
        LENGTH: string;
        TYPE: string;
        FIELDTEXT: string;
    }
    class dt_ReadTableMC_ResponseDATA extends Object {
        private waField;
        WA: string;
    }
    class dt_ReadTableMC_RequestFIELDS extends Object {
        private fIELDNAMEField;
        FIELDNAME: string;
    }
}
declare namespace SCMONLINE.Administration {
}
declare namespace SCMONLINE.Administration {
    interface EmailAccountsForm {
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
    class EmailAccountsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Administration {
    interface EmailAccountsRow {
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
    namespace EmailAccountsRow {
        const idProperty = "Id";
        const nameProperty = "Email";
        const localTextPrefix = "Administration.EmailAccounts";
        const enum Fields {
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
declare namespace SCMONLINE.Administration {
    namespace EmailAccountsService {
        const baseUrl = "Administration/EmailAccounts";
        function Create(request: Serenity.SaveRequest<EmailAccountsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmailAccountsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmailAccountsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmailAccountsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/EmailAccounts/Create",
            Update = "Administration/EmailAccounts/Update",
            Delete = "Administration/EmailAccounts/Delete",
            Retrieve = "Administration/EmailAccounts/Retrieve",
            List = "Administration/EmailAccounts/List"
        }
    }
}
declare namespace SCMONLINE.Administration {
}
declare namespace SCMONLINE.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace SCMONLINE.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace SCMONLINE.Administration {
}
declare namespace SCMONLINE.Administration {
    interface QueuedEmailForm {
        PriorityId: Serenity.IntegerEditor;
        From: Serenity.StringEditor;
        FromName: Serenity.StringEditor;
        To: Serenity.StringEditor;
        ToName: Serenity.StringEditor;
        ReplyTo: Serenity.StringEditor;
        ReplyToName: Serenity.StringEditor;
        Cc: Serenity.StringEditor;
        Bcc: Serenity.StringEditor;
        Subject: Serenity.StringEditor;
        Body: Serenity.StringEditor;
        AttachmentFilePath: Serenity.StringEditor;
        AttachmentFileName: Serenity.StringEditor;
        AttachedDownloadId: Serenity.IntegerEditor;
        CreatedOnUtc: Serenity.DateEditor;
        SentTries: Serenity.IntegerEditor;
        SentOnUtc: Serenity.DateEditor;
        EmailAccountId: Serenity.IntegerEditor;
        DontSendBeforeDateUtc: Serenity.DateEditor;
        HasError: Serenity.BooleanEditor;
        Result: Serenity.StringEditor;
    }
    class QueuedEmailForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Administration {
    interface QueuedEmailRow {
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
    namespace QueuedEmailRow {
        const idProperty = "Id";
        const nameProperty = "From";
        const localTextPrefix = "Administration.QueuedEmail";
        const enum Fields {
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
declare namespace SCMONLINE.Administration {
    namespace QueuedEmailService {
        const baseUrl = "Administration/QueuedEmail";
        function Create(request: Serenity.SaveRequest<QueuedEmailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<QueuedEmailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<QueuedEmailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<QueuedEmailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Submit(request: Serenity.SaveRequest<QueuedEmailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/QueuedEmail/Create",
            Update = "Administration/QueuedEmail/Update",
            Delete = "Administration/QueuedEmail/Delete",
            Retrieve = "Administration/QueuedEmail/Retrieve",
            List = "Administration/QueuedEmail/List",
            Submit = "Administration/QueuedEmail/Submit"
        }
    }
}
declare namespace SCMONLINE.Administration {
}
declare namespace SCMONLINE.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace SCMONLINE.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace SCMONLINE.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const lookupKey = "Administration.RolePermission";
        function getLookup(): Q.Lookup<RolePermissionRow>;
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace SCMONLINE.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace SCMONLINE.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace SCMONLINE.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName"
        }
    }
}
declare namespace SCMONLINE.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace SCMONLINE.Administration {
}
declare namespace SCMONLINE.Administration {
    interface SettingForm {
        Value: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }
    class SettingForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Administration {
    interface SettingRow {
        Name?: string;
        Value?: string;
        Description?: string;
    }
    namespace SettingRow {
        const idProperty = "Name";
        const nameProperty = "Name";
        const localTextPrefix = "Administration.Setting";
        const lookupKey = "Administration.Setting";
        function getLookup(): Q.Lookup<SettingRow>;
        const enum Fields {
            Name = "Name",
            Value = "Value",
            Description = "Description"
        }
    }
}
declare namespace SCMONLINE.Administration {
    namespace SettingService {
        const baseUrl = "Administration/Setting";
        function Create(request: Serenity.SaveRequest<SettingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SettingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SettingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SettingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Setting/Create",
            Update = "Administration/Setting/Update",
            Delete = "Administration/Setting/Delete",
            Retrieve = "Administration/Setting/Retrieve",
            List = "Administration/Setting/List"
        }
    }
}
declare namespace SCMONLINE.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace SCMONLINE.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace SCMONLINE.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace SCMONLINE.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace SCMONLINE.Administration {
}
declare namespace SCMONLINE.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace SCMONLINE.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace SCMONLINE.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace SCMONLINE.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace SCMONLINE.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace SCMONLINE.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace SCMONLINE.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace SCMONLINE.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace SCMONLINE.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace SCMONLINE.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace SCMONLINE.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace SCMONLINE.BasicSamples {
    namespace BasicSamplesService {
        const baseUrl = "BasicSamples/BasicSamples";
        function OrdersByShipper(request: OrdersByShipperRequest, onSuccess?: (response: OrdersByShipperResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function OrderBulkAction(request: OrderBulkActionRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            OrdersByShipper = "BasicSamples/BasicSamples/OrdersByShipper",
            OrderBulkAction = "BasicSamples/BasicSamples/OrderBulkAction"
        }
    }
}
declare namespace SCMONLINE.BasicSamples {
    interface ChangingLookupTextForm {
        ProductID: ChangingLookupTextEditor;
        UnitPrice: Serenity.DecimalEditor;
        Quantity: Serenity.IntegerEditor;
        Discount: Serenity.DecimalEditor;
    }
    class ChangingLookupTextForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.BasicSamples {
}
declare namespace SCMONLINE.BasicSamples {
    interface CustomerGrossSalesListRequest extends Serenity.ListRequest {
        StartDate?: string;
        EndDate?: string;
    }
}
declare namespace SCMONLINE.BasicSamples {
    namespace CustomerGrossSalesService {
        const baseUrl = "BasicSamples/CustomerGrossSales";
        function List(request: CustomerGrossSalesListRequest, onSuccess?: (response: Serenity.ListResponse<Northwind.CustomerGrossSalesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "BasicSamples/CustomerGrossSales/List"
        }
    }
}
declare namespace SCMONLINE.BasicSamples {
}
declare namespace SCMONLINE.BasicSamples {
    interface DragDropSampleForm {
        Title: Serenity.StringEditor;
    }
    class DragDropSampleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.BasicSamples {
    interface DragDropSampleRow {
        Id?: number;
        ParentId?: number;
        Title?: string;
    }
    namespace DragDropSampleRow {
        const idProperty = "Id";
        const nameProperty = "Title";
        const localTextPrefix = "Northwind.DragDropSample";
        const enum Fields {
            Id = "Id",
            ParentId = "ParentId",
            Title = "Title"
        }
    }
}
declare namespace SCMONLINE.BasicSamples {
    namespace DragDropSampleService {
        const baseUrl = "BasicSamples/DragDropSample";
        function Create(request: Serenity.SaveRequest<DragDropSampleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DragDropSampleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DragDropSampleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DragDropSampleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "BasicSamples/DragDropSample/Create",
            Update = "BasicSamples/DragDropSample/Update",
            Delete = "BasicSamples/DragDropSample/Delete",
            Retrieve = "BasicSamples/DragDropSample/Retrieve",
            List = "BasicSamples/DragDropSample/List"
        }
    }
}
declare namespace SCMONLINE.BasicSamples {
    interface FilteredLookupInDetailForm {
        CustomerID: Northwind.CustomerEditor;
        OrderDate: Serenity.DateEditor;
        CategoryID: Serenity.LookupEditor;
        DetailList: FilteredLookupDetailEditor;
    }
    class FilteredLookupInDetailForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.BasicSamples {
    interface HardcodedValuesForm {
        SomeValue: HardcodedValuesEditor;
    }
    class HardcodedValuesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.BasicSamples {
}
declare namespace SCMONLINE.BasicSamples {
    interface LookupFilterByMultipleForm {
        ProductName: Serenity.StringEditor;
        ProductImage: Serenity.ImageUploadEditor;
        Discontinued: Serenity.BooleanEditor;
        SupplierID: Serenity.LookupEditor;
        CategoryID: ProduceSeafoodCategoryEditor;
        QuantityPerUnit: Serenity.StringEditor;
        UnitPrice: Serenity.DecimalEditor;
        UnitsInStock: Serenity.IntegerEditor;
        UnitsOnOrder: Serenity.IntegerEditor;
        ReorderLevel: Serenity.IntegerEditor;
    }
    class LookupFilterByMultipleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.BasicSamples {
    interface OrderBulkActionRequest extends Serenity.ServiceRequest {
        OrderIDs?: number[];
    }
}
declare namespace SCMONLINE.BasicSamples {
    interface OrdersByShipperRequest extends Serenity.ServiceRequest {
    }
}
declare namespace SCMONLINE.BasicSamples {
    interface OrdersByShipperResponse extends Serenity.ServiceResponse {
        Values?: {
            [key: string]: any;
        }[];
        ShipperKeys?: string[];
        ShipperLabels?: string[];
    }
}
declare namespace SCMONLINE.BasicSamples {
    interface PopulateLinkedDataForm {
        CustomerID: Northwind.CustomerEditor;
        CustomerContactName: Serenity.StringEditor;
        CustomerContactTitle: Serenity.StringEditor;
        CustomerCity: Serenity.StringEditor;
        CustomerRegion: Serenity.StringEditor;
        CustomerCountry: Serenity.StringEditor;
        CustomerPhone: Serenity.StringEditor;
        CustomerFax: Serenity.StringEditor;
        OrderDate: Serenity.DateEditor;
        RequiredDate: Serenity.DateEditor;
        EmployeeID: Serenity.LookupEditor;
        DetailList: Northwind.OrderDetailsEditor;
    }
    class PopulateLinkedDataForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.BasicSamples {
    interface ProductExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }
    class ProductExcelImportForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.BasicSamples {
    namespace ProductExcelImportService {
        const baseUrl = "BasicSamples/ProductExcelImport";
        function ExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse<any>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            ExcelImport = "BasicSamples/ProductExcelImport/ExcelImport"
        }
    }
}
declare namespace SCMONLINE.BasicSamples {
    interface StaticTextBlockForm {
        StaticText: StaticTextBlock;
        SomeInput: Serenity.StringEditor;
        HtmlList: StaticTextBlock;
        FromLocalText: StaticTextBlock;
        DisplayFieldValue: StaticTextBlock;
    }
    class StaticTextBlockForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.BasicSamples {
}
declare namespace SCMONLINE.BasicSamples {
    interface VSGalleryQAPost {
        PostId?: number;
        PostedOn?: string;
        PostedByName?: string;
        PostedByUserId?: string;
        Message?: string;
    }
}
declare namespace SCMONLINE.BasicSamples {
    namespace VSGalleryQAService {
        const baseUrl = "BasicSamples/VSGalleryQA";
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VSGalleryQAThread>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "BasicSamples/VSGalleryQA/List"
        }
    }
}
declare namespace SCMONLINE.BasicSamples {
    interface VSGalleryQAThread {
        ThreadId?: number;
        Title?: string;
        StartedOn?: string;
        StartedByName?: string;
        StartedByUserId?: string;
        LastPostOn?: string;
        PostCount?: number;
        Posts?: VSGalleryQAPost[];
    }
}
declare namespace SCMONLINE.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace SCMONLINE.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace SCMONLINE.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value"
        }
    }
}
declare namespace SCMONLINE.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve"
        }
    }
}
declare namespace SCMONLINE.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace SCMONLINE.Default {
}
declare namespace SCMONLINE.Default {
    interface ProcParticipantForm {
        ProcurementId: Serenity.StringEditor;
        SequenceNo: Serenity.IntegerEditor;
        VendorId: Serenity.StringEditor;
        PriceDocumentFile: Serenity.StringEditor;
        PriceDocumentName: Serenity.StringEditor;
        TechSpecDocFile: Serenity.StringEditor;
        TechSpecDocName: Serenity.StringEditor;
        SupportingLetterFile: Serenity.StringEditor;
        SupportingLetterName: Serenity.StringEditor;
        CatalogFile: Serenity.StringEditor;
        CatalogName: Serenity.StringEditor;
        SubmitDocTnc: Serenity.BooleanEditor;
        SubmitDocTncDate: Serenity.DateEditor;
        AdminDocExists: Serenity.BooleanEditor;
        TechSpecDocExists: Serenity.BooleanEditor;
        SupportingLetterExists: Serenity.BooleanEditor;
        CatalogExists: Serenity.BooleanEditor;
        OpeningDocDesc: Serenity.StringEditor;
        AdminDocAtk: Serenity.IntegerEditor;
        TechSpecDocAtk: Serenity.IntegerEditor;
        SupportingLetterAtk: Serenity.IntegerEditor;
        CatalogAtk: Serenity.IntegerEditor;
        EvaluationDesc: Serenity.StringEditor;
        ClarificationRequest: Serenity.StringEditor;
        EvaluationConclusionId: Serenity.IntegerEditor;
        ClarificationOffer: Serenity.StringEditor;
        ClarificationResult: Serenity.StringEditor;
        Source: Serenity.StringEditor;
        F5ParticipantSubmitDate: Serenity.DateEditor;
        F5ParticipantSubmitBy: Serenity.StringEditor;
        FinalBidPrice: Serenity.DecimalEditor;
        SubmitObjection: Serenity.BooleanEditor;
        ObjectionDescription: Serenity.StringEditor;
        F15ParticipantSubmitDate: Serenity.DateEditor;
        F15ParticipantSubmitBy: Serenity.StringEditor;
        Invitation: Serenity.BooleanEditor;
        QuoteDesc: Serenity.StringEditor;
    }
    class ProcParticipantForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Default {
}
declare namespace SCMONLINE.Default {
    interface ProcParticipantItemForm {
        ProcParticipantId: Serenity.StringEditor;
        ProcurementId: Serenity.StringEditor;
        RfqItemId: Serenity.StringEditor;
        BidPrice: Serenity.DecimalEditor;
        BidPriceVsOe: Serenity.DecimalEditor;
        BidPriceVsOePercentage: Serenity.DecimalEditor;
        Rank: Serenity.IntegerEditor;
        EvaluationDescription: Serenity.StringEditor;
        NegotiationPrice: Serenity.DecimalEditor;
        NpVsOe: Serenity.DecimalEditor;
        NpVsOePercentage: Serenity.DecimalEditor;
        NegotiationRank: Serenity.IntegerEditor;
        NegotiationDesc: Serenity.StringEditor;
        ProposeDisclaimer: Serenity.BooleanEditor;
        DisclaimerDesc: Serenity.StringEditor;
        EvaluationConclusionItemId: Serenity.IntegerEditor;
    }
    class ProcParticipantItemForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Default {
    interface ProcParticipantItemRow {
        ProcParticipantItemId?: number;
        ProcParticipantId?: number;
        ProcurementId?: number;
        RfqItemId?: number;
        BidPrice?: number;
        BidPriceVsOe?: number;
        BidPriceVsOePercentage?: number;
        Rank?: number;
        EvaluationDescription?: string;
        NegotiationPrice?: number;
        NpVsOe?: number;
        NpVsOePercentage?: number;
        NegotiationRank?: number;
        NegotiationDesc?: string;
        ProposeDisclaimer?: boolean;
        DisclaimerDesc?: string;
        EvaluationConclusionItemId?: number;
        ProcParticipantProcurementId?: number;
        ProcParticipantSequenceNo?: number;
        ProcParticipantVendorId?: string;
        ProcParticipantPriceDocumentFile?: string;
        ProcParticipantPriceDocumentName?: string;
        ProcParticipantTechSpecDocFile?: string;
        ProcParticipantTechSpecDocName?: string;
        ProcParticipantSupportingLetterFile?: string;
        ProcParticipantSupportingLetterName?: string;
        ProcParticipantCatalogFile?: string;
        ProcParticipantCatalogName?: string;
        ProcParticipantSubmitDocTnc?: boolean;
        ProcParticipantSubmitDocTncDate?: string;
        ProcParticipantAdminDocExists?: boolean;
        ProcParticipantTechSpecDocExists?: boolean;
        ProcParticipantSupportingLetterExists?: boolean;
        ProcParticipantCatalogExists?: boolean;
        ProcParticipantOpeningDocDesc?: string;
        ProcParticipantAdminDocAtk?: number;
        ProcParticipantTechSpecDocAtk?: number;
        ProcParticipantSupportingLetterAtk?: number;
        ProcParticipantCatalogAtk?: number;
        ProcParticipantEvaluationDesc?: string;
        ProcParticipantClarificationRequest?: string;
        ProcParticipantEvaluationConclusionId?: number;
        ProcParticipantClarificationOffer?: string;
        ProcParticipantClarificationResult?: string;
        ProcParticipantSource?: string;
        ProcParticipantF5ParticipantSubmitDate?: string;
        ProcParticipantF5ParticipantSubmitBy?: string;
        ProcParticipantFinalBidPrice?: number;
        ProcParticipantSubmitObjection?: boolean;
        ProcParticipantObjectionDescription?: string;
        ProcParticipantF15ParticipantSubmitDate?: string;
        ProcParticipantF15ParticipantSubmitBy?: string;
        ProcParticipantInvitation?: boolean;
        ProcParticipantQuoteDesc?: string;
        EvaluationConclusionItemName?: string;
        EvaluationConclusionItemDescription?: string;
    }
    namespace ProcParticipantItemRow {
        const idProperty = "ProcParticipantItemId";
        const nameProperty = "EvaluationDescription";
        const localTextPrefix = "Default.ProcParticipantItem";
        const enum Fields {
            ProcParticipantItemId = "ProcParticipantItemId",
            ProcParticipantId = "ProcParticipantId",
            ProcurementId = "ProcurementId",
            RfqItemId = "RfqItemId",
            BidPrice = "BidPrice",
            BidPriceVsOe = "BidPriceVsOe",
            BidPriceVsOePercentage = "BidPriceVsOePercentage",
            Rank = "Rank",
            EvaluationDescription = "EvaluationDescription",
            NegotiationPrice = "NegotiationPrice",
            NpVsOe = "NpVsOe",
            NpVsOePercentage = "NpVsOePercentage",
            NegotiationRank = "NegotiationRank",
            NegotiationDesc = "NegotiationDesc",
            ProposeDisclaimer = "ProposeDisclaimer",
            DisclaimerDesc = "DisclaimerDesc",
            EvaluationConclusionItemId = "EvaluationConclusionItemId",
            ProcParticipantProcurementId = "ProcParticipantProcurementId",
            ProcParticipantSequenceNo = "ProcParticipantSequenceNo",
            ProcParticipantVendorId = "ProcParticipantVendorId",
            ProcParticipantPriceDocumentFile = "ProcParticipantPriceDocumentFile",
            ProcParticipantPriceDocumentName = "ProcParticipantPriceDocumentName",
            ProcParticipantTechSpecDocFile = "ProcParticipantTechSpecDocFile",
            ProcParticipantTechSpecDocName = "ProcParticipantTechSpecDocName",
            ProcParticipantSupportingLetterFile = "ProcParticipantSupportingLetterFile",
            ProcParticipantSupportingLetterName = "ProcParticipantSupportingLetterName",
            ProcParticipantCatalogFile = "ProcParticipantCatalogFile",
            ProcParticipantCatalogName = "ProcParticipantCatalogName",
            ProcParticipantSubmitDocTnc = "ProcParticipantSubmitDocTnc",
            ProcParticipantSubmitDocTncDate = "ProcParticipantSubmitDocTncDate",
            ProcParticipantAdminDocExists = "ProcParticipantAdminDocExists",
            ProcParticipantTechSpecDocExists = "ProcParticipantTechSpecDocExists",
            ProcParticipantSupportingLetterExists = "ProcParticipantSupportingLetterExists",
            ProcParticipantCatalogExists = "ProcParticipantCatalogExists",
            ProcParticipantOpeningDocDesc = "ProcParticipantOpeningDocDesc",
            ProcParticipantAdminDocAtk = "ProcParticipantAdminDocAtk",
            ProcParticipantTechSpecDocAtk = "ProcParticipantTechSpecDocAtk",
            ProcParticipantSupportingLetterAtk = "ProcParticipantSupportingLetterAtk",
            ProcParticipantCatalogAtk = "ProcParticipantCatalogAtk",
            ProcParticipantEvaluationDesc = "ProcParticipantEvaluationDesc",
            ProcParticipantClarificationRequest = "ProcParticipantClarificationRequest",
            ProcParticipantEvaluationConclusionId = "ProcParticipantEvaluationConclusionId",
            ProcParticipantClarificationOffer = "ProcParticipantClarificationOffer",
            ProcParticipantClarificationResult = "ProcParticipantClarificationResult",
            ProcParticipantSource = "ProcParticipantSource",
            ProcParticipantF5ParticipantSubmitDate = "ProcParticipantF5ParticipantSubmitDate",
            ProcParticipantF5ParticipantSubmitBy = "ProcParticipantF5ParticipantSubmitBy",
            ProcParticipantFinalBidPrice = "ProcParticipantFinalBidPrice",
            ProcParticipantSubmitObjection = "ProcParticipantSubmitObjection",
            ProcParticipantObjectionDescription = "ProcParticipantObjectionDescription",
            ProcParticipantF15ParticipantSubmitDate = "ProcParticipantF15ParticipantSubmitDate",
            ProcParticipantF15ParticipantSubmitBy = "ProcParticipantF15ParticipantSubmitBy",
            ProcParticipantInvitation = "ProcParticipantInvitation",
            ProcParticipantQuoteDesc = "ProcParticipantQuoteDesc",
            EvaluationConclusionItemName = "EvaluationConclusionItemName",
            EvaluationConclusionItemDescription = "EvaluationConclusionItemDescription"
        }
    }
}
declare namespace SCMONLINE.Default {
    namespace ProcParticipantItemService {
        const baseUrl = "Default/ProcParticipantItem";
        function Create(request: Serenity.SaveRequest<ProcParticipantItemRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProcParticipantItemRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcParticipantItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcParticipantItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/ProcParticipantItem/Create",
            Update = "Default/ProcParticipantItem/Update",
            Delete = "Default/ProcParticipantItem/Delete",
            Retrieve = "Default/ProcParticipantItem/Retrieve",
            List = "Default/ProcParticipantItem/List"
        }
    }
}
declare namespace SCMONLINE.Default {
    interface ProcParticipantRow {
        ProcParticipantId?: number;
        ProcurementId?: number;
        SequenceNo?: number;
        VendorId?: string;
        PriceDocumentFile?: string;
        PriceDocumentName?: string;
        TechSpecDocFile?: string;
        TechSpecDocName?: string;
        SupportingLetterFile?: string;
        SupportingLetterName?: string;
        CatalogFile?: string;
        CatalogName?: string;
        SubmitDocTnc?: boolean;
        SubmitDocTncDate?: string;
        AdminDocExists?: boolean;
        TechSpecDocExists?: boolean;
        SupportingLetterExists?: boolean;
        CatalogExists?: boolean;
        OpeningDocDesc?: string;
        AdminDocAtk?: number;
        TechSpecDocAtk?: number;
        SupportingLetterAtk?: number;
        CatalogAtk?: number;
        EvaluationDesc?: string;
        ClarificationRequest?: string;
        EvaluationConclusionId?: number;
        ClarificationOffer?: string;
        ClarificationResult?: string;
        Source?: string;
        F5ParticipantSubmitDate?: string;
        F5ParticipantSubmitBy?: string;
        FinalBidPrice?: number;
        SubmitObjection?: boolean;
        ObjectionDescription?: string;
        F15ParticipantSubmitDate?: string;
        F15ParticipantSubmitBy?: string;
        Invitation?: boolean;
        QuoteDesc?: string;
        ProcurementProcurementTypeId?: string;
        ProcurementStatus?: string;
        ProcurementCollectiveNumber?: string;
        ProcurementTitle?: string;
        ProcurementClassification?: string;
        ProcurementQualification?: string;
        ProcurementRequestedBy?: string;
        ProcurementRequestorPosition?: string;
        ProcurementApprovedBy?: string;
        ProcurementApproverPosition?: string;
        ProcurementSapBidderListCreatedBy?: string;
        ProcurementSapBidderListCreatedDate?: string;
        ProcurementCreatedBy?: string;
        ProcurementCreatedDate?: string;
        ProcurementGuaranteePercentage?: number;
        ProcurementOfficeAddress?: number;
        ProcurementProcValueRangeId?: number;
        ProcurementCommitteeTypeId?: number;
        ProcurementPerformanceGuaranteeRequired?: boolean;
        ProcurementTenderPeriod?: number;
        ProcurementDeliveryTime?: number;
        ProcurementDestinationId?: number;
        ProcurementContractTypeId?: number;
        ProcurementCurrencyId?: string;
        ProcurementDocSubmitMethodId?: number;
        ProcurementAanwijzingExists?: boolean;
        ProcurementAanwijzingDate?: string;
        ProcurementAanwijzingClosingDate?: string;
        ProcurementAanwijzingLocation?: string;
        ProcurementAanwijzingClosingLocation?: string;
        ProcurementAanwijzingSecretary?: string;
        ProcurementTechnicalExplanation?: string;
        ProcurementAdministrativeExplanation?: string;
        ProcurementOtherExplanation?: string;
        ProcurementAanwijzingSummary?: string;
        ProcurementFieldSurveyExists?: boolean;
        ProcurementFieldSurveyAddress?: string;
        ProcurementItbDocumentFile?: string;
        ProcurementItbDocumentName?: string;
        ProcurementRksDocumentFile?: string;
        ProcurementRksDocumentName?: string;
        ProcurementTenderDocSubmitOpenDate?: string;
        ProcurementTenderDocSubmitCloseDate?: string;
        ProcurementOrderTypeId?: string;
        ProcurementPurchDocNum?: string;
        ProcurementRfqDate?: string;
        ProcurementQuotationDeadline?: string;
        ProcurementPurchGroup?: string;
        ProcurementPrNo?: string;
        ProcurementAuthPersonName?: string;
        ProcurementAuthPosition?: string;
        ProcurementHeaderText?: string;
        ProcurementHeaderNote?: string;
        ProcurementWorkDescription?: string;
        ProcurementBankKey?: string;
        ProcurementPoCover?: string;
        ProcurementDeliveryAddress?: string;
        ProcurementToPTargVal?: string;
        ProcurementYourReference?: string;
        ProcurementOurReference?: string;
        ProcurementSalesPerson?: string;
        ProcurementTelephone?: string;
        ProcurementValidityStart?: string;
        ProcurementValidityEnd?: string;
        ProcurementItemInterval?: number;
        ProcurementSubItemInterval?: number;
        ProcurementWarranty?: string;
        ProcurementLanguage?: string;
        ProcurementEvaluationClosingPriceDate?: string;
        ProcurementReviewOeRequired?: boolean;
        ProcurementProcAgreement?: boolean;
        ProcurementProcAgreementDate?: string;
        ProcurementProcAsRequired?: boolean;
        ProcurementProcAsApproved?: boolean;
        ProcurementProcAsApprovedDate?: string;
        ProcurementProcAsDesc?: string;
        ProcurementFinalConclusionDesc?: string;
        ProcurementWinnerNominationDate?: string;
        ProcurementObjectionCloseDate?: string;
        ProcurementPoDocName?: string;
        ProcurementTemporaryPic?: string;
        ProcurementPoNumber?: string;
        ProcurementPoDocFile?: string;
        ProcurementF1SubmitDate?: string;
        ProcurementF1SubmitBy?: string;
        ProcurementF2SubmitDate?: string;
        ProcurementF2SubmitBy?: string;
        ProcurementF3SubmitDate?: string;
        ProcurementF3SubmitBy?: string;
        ProcurementF31SubmitDate?: string;
        ProcurementF31SubmitBy?: string;
        ProcurementF4SubmitDate?: string;
        ProcurementF4SubmitBy?: string;
        ProcurementF5SubmitDate?: string;
        ProcurementF5SubmitBy?: string;
        ProcurementF6SubmitDate?: string;
        ProcurementF6SubmitBy?: string;
        ProcurementF7SubmitDate?: string;
        ProcurementF7SubmitBy?: string;
        ProcurementF8SubmitDate?: string;
        ProcurementF8SubmitBy?: string;
        ProcurementF9SubmitDate?: string;
        ProcurementF9SubmitBy?: string;
        ProcurementF10SubmitDate?: string;
        ProcurementF10SubmitBy?: string;
        ProcurementF11SubmitDate?: string;
        ProcurementF11SubmitBy?: string;
        ProcurementF12SubmitDate?: string;
        ProcurementF12SubmitBy?: string;
        ProcurementF13SubmitDate?: string;
        ProcurementF13SubmitBy?: string;
        ProcurementF14SubmitDate?: string;
        ProcurementF14SubmitBy?: string;
        ProcurementF15SubmitDate?: string;
        ProcurementF15SubmitBy?: string;
        ProcurementF16SubmitDate?: string;
        ProcurementF16SubmitBy?: string;
        ProcurementF17SubmitDate?: string;
        ProcurementF17SubmitBy?: string;
        ProcurementF19SubmitDate?: string;
        ProcurementF19SubmitBy?: string;
        ProcurementProcurementMethodId?: string;
        ProcurementDistrict?: string;
        ProcurementCsms?: string;
        ProcurementMinScore?: string;
        ProcurementProcRejectTender?: boolean;
        ProcurementProcRejectTenderDesc?: string;
        AdminDocAtkName?: string;
        AdminDocAtkDescription?: string;
        TechSpecDocAtkName?: string;
        TechSpecDocAtkDescription?: string;
        SupportingLetterAtkName?: string;
        SupportingLetterAtkDescription?: string;
        CatalogAtkName?: string;
        CatalogAtkDescription?: string;
        EvaluationConclusionName?: string;
        EvaluationConclusionDescription?: string;
    }
    namespace ProcParticipantRow {
        const idProperty = "ProcParticipantId";
        const nameProperty = "VendorId";
        const localTextPrefix = "Default.ProcParticipant";
        const enum Fields {
            ProcParticipantId = "ProcParticipantId",
            ProcurementId = "ProcurementId",
            SequenceNo = "SequenceNo",
            VendorId = "VendorId",
            PriceDocumentFile = "PriceDocumentFile",
            PriceDocumentName = "PriceDocumentName",
            TechSpecDocFile = "TechSpecDocFile",
            TechSpecDocName = "TechSpecDocName",
            SupportingLetterFile = "SupportingLetterFile",
            SupportingLetterName = "SupportingLetterName",
            CatalogFile = "CatalogFile",
            CatalogName = "CatalogName",
            SubmitDocTnc = "SubmitDocTnc",
            SubmitDocTncDate = "SubmitDocTncDate",
            AdminDocExists = "AdminDocExists",
            TechSpecDocExists = "TechSpecDocExists",
            SupportingLetterExists = "SupportingLetterExists",
            CatalogExists = "CatalogExists",
            OpeningDocDesc = "OpeningDocDesc",
            AdminDocAtk = "AdminDocAtk",
            TechSpecDocAtk = "TechSpecDocAtk",
            SupportingLetterAtk = "SupportingLetterAtk",
            CatalogAtk = "CatalogAtk",
            EvaluationDesc = "EvaluationDesc",
            ClarificationRequest = "ClarificationRequest",
            EvaluationConclusionId = "EvaluationConclusionId",
            ClarificationOffer = "ClarificationOffer",
            ClarificationResult = "ClarificationResult",
            Source = "Source",
            F5ParticipantSubmitDate = "F5ParticipantSubmitDate",
            F5ParticipantSubmitBy = "F5ParticipantSubmitBy",
            FinalBidPrice = "FinalBidPrice",
            SubmitObjection = "SubmitObjection",
            ObjectionDescription = "ObjectionDescription",
            F15ParticipantSubmitDate = "F15ParticipantSubmitDate",
            F15ParticipantSubmitBy = "F15ParticipantSubmitBy",
            Invitation = "Invitation",
            QuoteDesc = "QuoteDesc",
            ProcurementProcurementTypeId = "ProcurementProcurementTypeId",
            ProcurementStatus = "ProcurementStatus",
            ProcurementCollectiveNumber = "ProcurementCollectiveNumber",
            ProcurementTitle = "ProcurementTitle",
            ProcurementClassification = "ProcurementClassification",
            ProcurementQualification = "ProcurementQualification",
            ProcurementRequestedBy = "ProcurementRequestedBy",
            ProcurementRequestorPosition = "ProcurementRequestorPosition",
            ProcurementApprovedBy = "ProcurementApprovedBy",
            ProcurementApproverPosition = "ProcurementApproverPosition",
            ProcurementSapBidderListCreatedBy = "ProcurementSapBidderListCreatedBy",
            ProcurementSapBidderListCreatedDate = "ProcurementSapBidderListCreatedDate",
            ProcurementCreatedBy = "ProcurementCreatedBy",
            ProcurementCreatedDate = "ProcurementCreatedDate",
            ProcurementGuaranteePercentage = "ProcurementGuaranteePercentage",
            ProcurementOfficeAddress = "ProcurementOfficeAddress",
            ProcurementProcValueRangeId = "ProcurementProcValueRangeId",
            ProcurementCommitteeTypeId = "ProcurementCommitteeTypeId",
            ProcurementPerformanceGuaranteeRequired = "ProcurementPerformanceGuaranteeRequired",
            ProcurementTenderPeriod = "ProcurementTenderPeriod",
            ProcurementDeliveryTime = "ProcurementDeliveryTime",
            ProcurementDestinationId = "ProcurementDestinationId",
            ProcurementContractTypeId = "ProcurementContractTypeId",
            ProcurementCurrencyId = "ProcurementCurrencyId",
            ProcurementDocSubmitMethodId = "ProcurementDocSubmitMethodId",
            ProcurementAanwijzingExists = "ProcurementAanwijzingExists",
            ProcurementAanwijzingDate = "ProcurementAanwijzingDate",
            ProcurementAanwijzingClosingDate = "ProcurementAanwijzingClosingDate",
            ProcurementAanwijzingLocation = "ProcurementAanwijzingLocation",
            ProcurementAanwijzingClosingLocation = "ProcurementAanwijzingClosingLocation",
            ProcurementAanwijzingSecretary = "ProcurementAanwijzingSecretary",
            ProcurementTechnicalExplanation = "ProcurementTechnicalExplanation",
            ProcurementAdministrativeExplanation = "ProcurementAdministrativeExplanation",
            ProcurementOtherExplanation = "ProcurementOtherExplanation",
            ProcurementAanwijzingSummary = "ProcurementAanwijzingSummary",
            ProcurementFieldSurveyExists = "ProcurementFieldSurveyExists",
            ProcurementFieldSurveyAddress = "ProcurementFieldSurveyAddress",
            ProcurementItbDocumentFile = "ProcurementItbDocumentFile",
            ProcurementItbDocumentName = "ProcurementItbDocumentName",
            ProcurementRksDocumentFile = "ProcurementRksDocumentFile",
            ProcurementRksDocumentName = "ProcurementRksDocumentName",
            ProcurementTenderDocSubmitOpenDate = "ProcurementTenderDocSubmitOpenDate",
            ProcurementTenderDocSubmitCloseDate = "ProcurementTenderDocSubmitCloseDate",
            ProcurementOrderTypeId = "ProcurementOrderTypeId",
            ProcurementPurchDocNum = "ProcurementPurchDocNum",
            ProcurementRfqDate = "ProcurementRfqDate",
            ProcurementQuotationDeadline = "ProcurementQuotationDeadline",
            ProcurementPurchGroup = "ProcurementPurchGroup",
            ProcurementPrNo = "ProcurementPrNo",
            ProcurementAuthPersonName = "ProcurementAuthPersonName",
            ProcurementAuthPosition = "ProcurementAuthPosition",
            ProcurementHeaderText = "ProcurementHeaderText",
            ProcurementHeaderNote = "ProcurementHeaderNote",
            ProcurementWorkDescription = "ProcurementWorkDescription",
            ProcurementBankKey = "ProcurementBankKey",
            ProcurementPoCover = "ProcurementPoCover",
            ProcurementDeliveryAddress = "ProcurementDeliveryAddress",
            ProcurementToPTargVal = "ProcurementToPTargVal",
            ProcurementYourReference = "ProcurementYourReference",
            ProcurementOurReference = "ProcurementOurReference",
            ProcurementSalesPerson = "ProcurementSalesPerson",
            ProcurementTelephone = "ProcurementTelephone",
            ProcurementValidityStart = "ProcurementValidityStart",
            ProcurementValidityEnd = "ProcurementValidityEnd",
            ProcurementItemInterval = "ProcurementItemInterval",
            ProcurementSubItemInterval = "ProcurementSubItemInterval",
            ProcurementWarranty = "ProcurementWarranty",
            ProcurementLanguage = "ProcurementLanguage",
            ProcurementEvaluationClosingPriceDate = "ProcurementEvaluationClosingPriceDate",
            ProcurementReviewOeRequired = "ProcurementReviewOeRequired",
            ProcurementProcAgreement = "ProcurementProcAgreement",
            ProcurementProcAgreementDate = "ProcurementProcAgreementDate",
            ProcurementProcAsRequired = "ProcurementProcAsRequired",
            ProcurementProcAsApproved = "ProcurementProcAsApproved",
            ProcurementProcAsApprovedDate = "ProcurementProcAsApprovedDate",
            ProcurementProcAsDesc = "ProcurementProcAsDesc",
            ProcurementFinalConclusionDesc = "ProcurementFinalConclusionDesc",
            ProcurementWinnerNominationDate = "ProcurementWinnerNominationDate",
            ProcurementObjectionCloseDate = "ProcurementObjectionCloseDate",
            ProcurementPoDocName = "ProcurementPoDocName",
            ProcurementTemporaryPic = "ProcurementTemporaryPic",
            ProcurementPoNumber = "ProcurementPoNumber",
            ProcurementPoDocFile = "ProcurementPoDocFile",
            ProcurementF1SubmitDate = "ProcurementF1SubmitDate",
            ProcurementF1SubmitBy = "ProcurementF1SubmitBy",
            ProcurementF2SubmitDate = "ProcurementF2SubmitDate",
            ProcurementF2SubmitBy = "ProcurementF2SubmitBy",
            ProcurementF3SubmitDate = "ProcurementF3SubmitDate",
            ProcurementF3SubmitBy = "ProcurementF3SubmitBy",
            ProcurementF31SubmitDate = "ProcurementF31SubmitDate",
            ProcurementF31SubmitBy = "ProcurementF31SubmitBy",
            ProcurementF4SubmitDate = "ProcurementF4SubmitDate",
            ProcurementF4SubmitBy = "ProcurementF4SubmitBy",
            ProcurementF5SubmitDate = "ProcurementF5SubmitDate",
            ProcurementF5SubmitBy = "ProcurementF5SubmitBy",
            ProcurementF6SubmitDate = "ProcurementF6SubmitDate",
            ProcurementF6SubmitBy = "ProcurementF6SubmitBy",
            ProcurementF7SubmitDate = "ProcurementF7SubmitDate",
            ProcurementF7SubmitBy = "ProcurementF7SubmitBy",
            ProcurementF8SubmitDate = "ProcurementF8SubmitDate",
            ProcurementF8SubmitBy = "ProcurementF8SubmitBy",
            ProcurementF9SubmitDate = "ProcurementF9SubmitDate",
            ProcurementF9SubmitBy = "ProcurementF9SubmitBy",
            ProcurementF10SubmitDate = "ProcurementF10SubmitDate",
            ProcurementF10SubmitBy = "ProcurementF10SubmitBy",
            ProcurementF11SubmitDate = "ProcurementF11SubmitDate",
            ProcurementF11SubmitBy = "ProcurementF11SubmitBy",
            ProcurementF12SubmitDate = "ProcurementF12SubmitDate",
            ProcurementF12SubmitBy = "ProcurementF12SubmitBy",
            ProcurementF13SubmitDate = "ProcurementF13SubmitDate",
            ProcurementF13SubmitBy = "ProcurementF13SubmitBy",
            ProcurementF14SubmitDate = "ProcurementF14SubmitDate",
            ProcurementF14SubmitBy = "ProcurementF14SubmitBy",
            ProcurementF15SubmitDate = "ProcurementF15SubmitDate",
            ProcurementF15SubmitBy = "ProcurementF15SubmitBy",
            ProcurementF16SubmitDate = "ProcurementF16SubmitDate",
            ProcurementF16SubmitBy = "ProcurementF16SubmitBy",
            ProcurementF17SubmitDate = "ProcurementF17SubmitDate",
            ProcurementF17SubmitBy = "ProcurementF17SubmitBy",
            ProcurementF19SubmitDate = "ProcurementF19SubmitDate",
            ProcurementF19SubmitBy = "ProcurementF19SubmitBy",
            ProcurementProcurementMethodId = "ProcurementProcurementMethodId",
            ProcurementDistrict = "ProcurementDistrict",
            ProcurementCsms = "ProcurementCsms",
            ProcurementMinScore = "ProcurementMinScore",
            ProcurementProcRejectTender = "ProcurementProcRejectTender",
            ProcurementProcRejectTenderDesc = "ProcurementProcRejectTenderDesc",
            AdminDocAtkName = "AdminDocAtkName",
            AdminDocAtkDescription = "AdminDocAtkDescription",
            TechSpecDocAtkName = "TechSpecDocAtkName",
            TechSpecDocAtkDescription = "TechSpecDocAtkDescription",
            SupportingLetterAtkName = "SupportingLetterAtkName",
            SupportingLetterAtkDescription = "SupportingLetterAtkDescription",
            CatalogAtkName = "CatalogAtkName",
            CatalogAtkDescription = "CatalogAtkDescription",
            EvaluationConclusionName = "EvaluationConclusionName",
            EvaluationConclusionDescription = "EvaluationConclusionDescription"
        }
    }
}
declare namespace SCMONLINE.Default {
    namespace ProcParticipantService {
        const baseUrl = "Default/ProcParticipant";
        function Create(request: Serenity.SaveRequest<ProcParticipantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProcParticipantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcParticipantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcParticipantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/ProcParticipant/Create",
            Update = "Default/ProcParticipant/Update",
            Delete = "Default/ProcParticipant/Delete",
            Retrieve = "Default/ProcParticipant/Retrieve",
            List = "Default/ProcParticipant/List"
        }
    }
}
declare namespace SCMONLINE.Default {
}
declare namespace SCMONLINE.Default {
    interface ProcurementForm {
        ProcurementTypeId: Serenity.StringEditor;
        Status: Serenity.StringEditor;
        CollectiveNumber: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        Classification: Serenity.StringEditor;
        Qualification: Serenity.StringEditor;
        RequestedBy: Serenity.StringEditor;
        RequestorPosition: Serenity.StringEditor;
        ApprovedBy: Serenity.StringEditor;
        ApproverPosition: Serenity.StringEditor;
        SapBidderListCreatedBy: Serenity.StringEditor;
        SapBidderListCreatedDate: Serenity.DateEditor;
        CreatedBy: Serenity.StringEditor;
        CreatedDate: Serenity.DateEditor;
        GuaranteePercentage: Serenity.DecimalEditor;
        OfficeAddress: Serenity.IntegerEditor;
        ProcValueRangeId: Serenity.IntegerEditor;
        CommitteeTypeId: Serenity.IntegerEditor;
        PerformanceGuaranteeRequired: Serenity.BooleanEditor;
        TenderPeriod: Serenity.IntegerEditor;
        DeliveryTime: Serenity.IntegerEditor;
        DestinationId: Serenity.IntegerEditor;
        ContractTypeId: Serenity.IntegerEditor;
        CurrencyId: Serenity.StringEditor;
        DocSubmitMethodId: Serenity.IntegerEditor;
        AanwijzingExists: Serenity.BooleanEditor;
        AanwijzingDate: Serenity.DateEditor;
        AanwijzingClosingDate: Serenity.DateEditor;
        AanwijzingLocation: Serenity.StringEditor;
        AanwijzingClosingLocation: Serenity.StringEditor;
        AanwijzingSecretary: Serenity.StringEditor;
        TechnicalExplanation: Serenity.StringEditor;
        AdministrativeExplanation: Serenity.StringEditor;
        OtherExplanation: Serenity.StringEditor;
        AanwijzingSummary: Serenity.StringEditor;
        FieldSurveyExists: Serenity.BooleanEditor;
        FieldSurveyAddress: Serenity.StringEditor;
        ItbDocumentFile: Serenity.StringEditor;
        ItbDocumentName: Serenity.StringEditor;
        RksDocumentFile: Serenity.StringEditor;
        RksDocumentName: Serenity.StringEditor;
        TenderDocSubmitOpenDate: Serenity.DateEditor;
        TenderDocSubmitCloseDate: Serenity.DateEditor;
        OrderTypeId: Serenity.StringEditor;
        PurchDocNum: Serenity.StringEditor;
        RfqDate: Serenity.DateEditor;
        QuotationDeadline: Serenity.DateEditor;
        PurchGroup: Serenity.StringEditor;
        PrNo: Serenity.StringEditor;
        AuthPersonName: Serenity.StringEditor;
        AuthPosition: Serenity.StringEditor;
        HeaderText: Serenity.StringEditor;
        HeaderNote: Serenity.StringEditor;
        WorkDescription: Serenity.StringEditor;
        BankKey: Serenity.StringEditor;
        PoCover: Serenity.StringEditor;
        DeliveryAddress: Serenity.StringEditor;
        ToPTargVal: Serenity.StringEditor;
        YourReference: Serenity.StringEditor;
        OurReference: Serenity.StringEditor;
        SalesPerson: Serenity.StringEditor;
        Telephone: Serenity.StringEditor;
        ValidityStart: Serenity.DateEditor;
        ValidityEnd: Serenity.DateEditor;
        ItemInterval: Serenity.DecimalEditor;
        SubItemInterval: Serenity.DecimalEditor;
        Warranty: Serenity.DateEditor;
        Language: Serenity.StringEditor;
        EvaluationClosingPriceDate: Serenity.DateEditor;
        ReviewOeRequired: Serenity.BooleanEditor;
        ProcAgreement: Serenity.BooleanEditor;
        ProcAgreementDate: Serenity.DateEditor;
        ProcAsRequired: Serenity.BooleanEditor;
        ProcAsApproved: Serenity.BooleanEditor;
        ProcAsApprovedDate: Serenity.DateEditor;
        ProcAsDesc: Serenity.StringEditor;
        FinalConclusionDesc: Serenity.StringEditor;
        WinnerNominationDate: Serenity.DateEditor;
        ObjectionCloseDate: Serenity.DateEditor;
        PoDocName: Serenity.StringEditor;
        TemporaryPic: Serenity.StringEditor;
        PoNumber: Serenity.StringEditor;
        PoDocFile: Serenity.StringEditor;
        F1SubmitDate: Serenity.DateEditor;
        F1SubmitBy: Serenity.StringEditor;
        F2SubmitDate: Serenity.DateEditor;
        F2SubmitBy: Serenity.StringEditor;
        F3SubmitDate: Serenity.DateEditor;
        F3SubmitBy: Serenity.StringEditor;
        F31SubmitDate: Serenity.DateEditor;
        F31SubmitBy: Serenity.StringEditor;
        F4SubmitDate: Serenity.DateEditor;
        F4SubmitBy: Serenity.StringEditor;
        F5SubmitDate: Serenity.DateEditor;
        F5SubmitBy: Serenity.StringEditor;
        F6SubmitDate: Serenity.DateEditor;
        F6SubmitBy: Serenity.StringEditor;
        F7SubmitDate: Serenity.DateEditor;
        F7SubmitBy: Serenity.StringEditor;
        F8SubmitDate: Serenity.DateEditor;
        F8SubmitBy: Serenity.StringEditor;
        F9SubmitDate: Serenity.DateEditor;
        F9SubmitBy: Serenity.StringEditor;
        F10SubmitDate: Serenity.DateEditor;
        F10SubmitBy: Serenity.StringEditor;
        F11SubmitDate: Serenity.DateEditor;
        F11SubmitBy: Serenity.StringEditor;
        F12SubmitDate: Serenity.DateEditor;
        F12SubmitBy: Serenity.StringEditor;
        F13SubmitDate: Serenity.DateEditor;
        F13SubmitBy: Serenity.StringEditor;
        F14SubmitDate: Serenity.DateEditor;
        F14SubmitBy: Serenity.StringEditor;
        F15SubmitDate: Serenity.DateEditor;
        F15SubmitBy: Serenity.StringEditor;
        F16SubmitDate: Serenity.DateEditor;
        F16SubmitBy: Serenity.StringEditor;
        F17SubmitDate: Serenity.DateEditor;
        F17SubmitBy: Serenity.StringEditor;
        F19SubmitDate: Serenity.DateEditor;
        F19SubmitBy: Serenity.StringEditor;
        ProcurementMethodId: Serenity.StringEditor;
        District: Serenity.StringEditor;
        Csms: Serenity.StringEditor;
        MinScore: Serenity.StringEditor;
        ProcRejectTender: Serenity.BooleanEditor;
        ProcRejectTenderDesc: Serenity.StringEditor;
    }
    class ProcurementForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Default {
    interface ProcurementRow {
        ProcurementId?: number;
        ProcurementTypeId?: string;
        Status?: string;
        CollectiveNumber?: string;
        Title?: string;
        Classification?: string;
        Qualification?: string;
        RequestedBy?: string;
        RequestorPosition?: string;
        ApprovedBy?: string;
        ApproverPosition?: string;
        SapBidderListCreatedBy?: string;
        SapBidderListCreatedDate?: string;
        CreatedBy?: string;
        CreatedDate?: string;
        GuaranteePercentage?: number;
        OfficeAddress?: number;
        ProcValueRangeId?: number;
        CommitteeTypeId?: number;
        PerformanceGuaranteeRequired?: boolean;
        TenderPeriod?: number;
        DeliveryTime?: number;
        DestinationId?: number;
        ContractTypeId?: number;
        CurrencyId?: string;
        DocSubmitMethodId?: number;
        AanwijzingExists?: boolean;
        AanwijzingDate?: string;
        AanwijzingClosingDate?: string;
        AanwijzingLocation?: string;
        AanwijzingClosingLocation?: string;
        AanwijzingSecretary?: string;
        TechnicalExplanation?: string;
        AdministrativeExplanation?: string;
        OtherExplanation?: string;
        AanwijzingSummary?: string;
        FieldSurveyExists?: boolean;
        FieldSurveyAddress?: string;
        ItbDocumentFile?: string;
        ItbDocumentName?: string;
        RksDocumentFile?: string;
        RksDocumentName?: string;
        TenderDocSubmitOpenDate?: string;
        TenderDocSubmitCloseDate?: string;
        OrderTypeId?: string;
        PurchDocNum?: string;
        RfqDate?: string;
        QuotationDeadline?: string;
        PurchGroup?: string;
        PrNo?: string;
        AuthPersonName?: string;
        AuthPosition?: string;
        HeaderText?: string;
        HeaderNote?: string;
        WorkDescription?: string;
        BankKey?: string;
        PoCover?: string;
        DeliveryAddress?: string;
        ToPTargVal?: string;
        YourReference?: string;
        OurReference?: string;
        SalesPerson?: string;
        Telephone?: string;
        ValidityStart?: string;
        ValidityEnd?: string;
        ItemInterval?: number;
        SubItemInterval?: number;
        Warranty?: string;
        Language?: string;
        EvaluationClosingPriceDate?: string;
        ReviewOeRequired?: boolean;
        ProcAgreement?: boolean;
        ProcAgreementDate?: string;
        ProcAsRequired?: boolean;
        ProcAsApproved?: boolean;
        ProcAsApprovedDate?: string;
        ProcAsDesc?: string;
        FinalConclusionDesc?: string;
        WinnerNominationDate?: string;
        ObjectionCloseDate?: string;
        PoDocName?: string;
        TemporaryPic?: string;
        PoNumber?: string;
        PoDocFile?: string;
        F1SubmitDate?: string;
        F1SubmitBy?: string;
        F2SubmitDate?: string;
        F2SubmitBy?: string;
        F3SubmitDate?: string;
        F3SubmitBy?: string;
        F31SubmitDate?: string;
        F31SubmitBy?: string;
        F4SubmitDate?: string;
        F4SubmitBy?: string;
        F5SubmitDate?: string;
        F5SubmitBy?: string;
        F6SubmitDate?: string;
        F6SubmitBy?: string;
        F7SubmitDate?: string;
        F7SubmitBy?: string;
        F8SubmitDate?: string;
        F8SubmitBy?: string;
        F9SubmitDate?: string;
        F9SubmitBy?: string;
        F10SubmitDate?: string;
        F10SubmitBy?: string;
        F11SubmitDate?: string;
        F11SubmitBy?: string;
        F12SubmitDate?: string;
        F12SubmitBy?: string;
        F13SubmitDate?: string;
        F13SubmitBy?: string;
        F14SubmitDate?: string;
        F14SubmitBy?: string;
        F15SubmitDate?: string;
        F15SubmitBy?: string;
        F16SubmitDate?: string;
        F16SubmitBy?: string;
        F17SubmitDate?: string;
        F17SubmitBy?: string;
        F19SubmitDate?: string;
        F19SubmitBy?: string;
        ProcurementMethodId?: string;
        District?: string;
        Csms?: string;
        MinScore?: string;
        ProcRejectTender?: boolean;
        ProcRejectTenderDesc?: string;
        ProcurementTypeName?: string;
        ProcurementTypeDescription?: string;
        StatusName?: string;
        StatusDescription?: string;
        StatusSequence?: number;
        ClassificationAssociationCode?: string;
        ClassificationAreaCode?: string;
        ClassificationVendorClass?: string;
        ClassificationKodeJenisJasa?: string;
        ClassificationClassificationDescr?: string;
        ProcValueRangeName?: string;
        ProcValueRangeDescription?: string;
        CommitteeTypeName?: string;
        CommitteeTypeDescription?: string;
        ContractTypeName?: string;
        ContractTypeDescription?: string;
        CurrencyName?: string;
        CurrencyDescription?: string;
        DocSubmitMethodName?: string;
        DocSubmitMethodDescription?: string;
        OrderTypeName?: string;
        OrderTypeDescription?: string;
        ProcurementMethodName?: string;
        ProcurementMethodDescription?: string;
    }
    namespace ProcurementRow {
        const idProperty = "ProcurementId";
        const nameProperty = "ProcurementTypeId";
        const localTextPrefix = "Default.Procurement";
        const enum Fields {
            ProcurementId = "ProcurementId",
            ProcurementTypeId = "ProcurementTypeId",
            Status = "Status",
            CollectiveNumber = "CollectiveNumber",
            Title = "Title",
            Classification = "Classification",
            Qualification = "Qualification",
            RequestedBy = "RequestedBy",
            RequestorPosition = "RequestorPosition",
            ApprovedBy = "ApprovedBy",
            ApproverPosition = "ApproverPosition",
            SapBidderListCreatedBy = "SapBidderListCreatedBy",
            SapBidderListCreatedDate = "SapBidderListCreatedDate",
            CreatedBy = "CreatedBy",
            CreatedDate = "CreatedDate",
            GuaranteePercentage = "GuaranteePercentage",
            OfficeAddress = "OfficeAddress",
            ProcValueRangeId = "ProcValueRangeId",
            CommitteeTypeId = "CommitteeTypeId",
            PerformanceGuaranteeRequired = "PerformanceGuaranteeRequired",
            TenderPeriod = "TenderPeriod",
            DeliveryTime = "DeliveryTime",
            DestinationId = "DestinationId",
            ContractTypeId = "ContractTypeId",
            CurrencyId = "CurrencyId",
            DocSubmitMethodId = "DocSubmitMethodId",
            AanwijzingExists = "AanwijzingExists",
            AanwijzingDate = "AanwijzingDate",
            AanwijzingClosingDate = "AanwijzingClosingDate",
            AanwijzingLocation = "AanwijzingLocation",
            AanwijzingClosingLocation = "AanwijzingClosingLocation",
            AanwijzingSecretary = "AanwijzingSecretary",
            TechnicalExplanation = "TechnicalExplanation",
            AdministrativeExplanation = "AdministrativeExplanation",
            OtherExplanation = "OtherExplanation",
            AanwijzingSummary = "AanwijzingSummary",
            FieldSurveyExists = "FieldSurveyExists",
            FieldSurveyAddress = "FieldSurveyAddress",
            ItbDocumentFile = "ItbDocumentFile",
            ItbDocumentName = "ItbDocumentName",
            RksDocumentFile = "RksDocumentFile",
            RksDocumentName = "RksDocumentName",
            TenderDocSubmitOpenDate = "TenderDocSubmitOpenDate",
            TenderDocSubmitCloseDate = "TenderDocSubmitCloseDate",
            OrderTypeId = "OrderTypeId",
            PurchDocNum = "PurchDocNum",
            RfqDate = "RfqDate",
            QuotationDeadline = "QuotationDeadline",
            PurchGroup = "PurchGroup",
            PrNo = "PrNo",
            AuthPersonName = "AuthPersonName",
            AuthPosition = "AuthPosition",
            HeaderText = "HeaderText",
            HeaderNote = "HeaderNote",
            WorkDescription = "WorkDescription",
            BankKey = "BankKey",
            PoCover = "PoCover",
            DeliveryAddress = "DeliveryAddress",
            ToPTargVal = "ToPTargVal",
            YourReference = "YourReference",
            OurReference = "OurReference",
            SalesPerson = "SalesPerson",
            Telephone = "Telephone",
            ValidityStart = "ValidityStart",
            ValidityEnd = "ValidityEnd",
            ItemInterval = "ItemInterval",
            SubItemInterval = "SubItemInterval",
            Warranty = "Warranty",
            Language = "Language",
            EvaluationClosingPriceDate = "EvaluationClosingPriceDate",
            ReviewOeRequired = "ReviewOeRequired",
            ProcAgreement = "ProcAgreement",
            ProcAgreementDate = "ProcAgreementDate",
            ProcAsRequired = "ProcAsRequired",
            ProcAsApproved = "ProcAsApproved",
            ProcAsApprovedDate = "ProcAsApprovedDate",
            ProcAsDesc = "ProcAsDesc",
            FinalConclusionDesc = "FinalConclusionDesc",
            WinnerNominationDate = "WinnerNominationDate",
            ObjectionCloseDate = "ObjectionCloseDate",
            PoDocName = "PoDocName",
            TemporaryPic = "TemporaryPic",
            PoNumber = "PoNumber",
            PoDocFile = "PoDocFile",
            F1SubmitDate = "F1SubmitDate",
            F1SubmitBy = "F1SubmitBy",
            F2SubmitDate = "F2SubmitDate",
            F2SubmitBy = "F2SubmitBy",
            F3SubmitDate = "F3SubmitDate",
            F3SubmitBy = "F3SubmitBy",
            F31SubmitDate = "F31SubmitDate",
            F31SubmitBy = "F31SubmitBy",
            F4SubmitDate = "F4SubmitDate",
            F4SubmitBy = "F4SubmitBy",
            F5SubmitDate = "F5SubmitDate",
            F5SubmitBy = "F5SubmitBy",
            F6SubmitDate = "F6SubmitDate",
            F6SubmitBy = "F6SubmitBy",
            F7SubmitDate = "F7SubmitDate",
            F7SubmitBy = "F7SubmitBy",
            F8SubmitDate = "F8SubmitDate",
            F8SubmitBy = "F8SubmitBy",
            F9SubmitDate = "F9SubmitDate",
            F9SubmitBy = "F9SubmitBy",
            F10SubmitDate = "F10SubmitDate",
            F10SubmitBy = "F10SubmitBy",
            F11SubmitDate = "F11SubmitDate",
            F11SubmitBy = "F11SubmitBy",
            F12SubmitDate = "F12SubmitDate",
            F12SubmitBy = "F12SubmitBy",
            F13SubmitDate = "F13SubmitDate",
            F13SubmitBy = "F13SubmitBy",
            F14SubmitDate = "F14SubmitDate",
            F14SubmitBy = "F14SubmitBy",
            F15SubmitDate = "F15SubmitDate",
            F15SubmitBy = "F15SubmitBy",
            F16SubmitDate = "F16SubmitDate",
            F16SubmitBy = "F16SubmitBy",
            F17SubmitDate = "F17SubmitDate",
            F17SubmitBy = "F17SubmitBy",
            F19SubmitDate = "F19SubmitDate",
            F19SubmitBy = "F19SubmitBy",
            ProcurementMethodId = "ProcurementMethodId",
            District = "District",
            Csms = "Csms",
            MinScore = "MinScore",
            ProcRejectTender = "ProcRejectTender",
            ProcRejectTenderDesc = "ProcRejectTenderDesc",
            ProcurementTypeName = "ProcurementTypeName",
            ProcurementTypeDescription = "ProcurementTypeDescription",
            StatusName = "StatusName",
            StatusDescription = "StatusDescription",
            StatusSequence = "StatusSequence",
            ClassificationAssociationCode = "ClassificationAssociationCode",
            ClassificationAreaCode = "ClassificationAreaCode",
            ClassificationVendorClass = "ClassificationVendorClass",
            ClassificationKodeJenisJasa = "ClassificationKodeJenisJasa",
            ClassificationClassificationDescr = "ClassificationClassificationDescr",
            ProcValueRangeName = "ProcValueRangeName",
            ProcValueRangeDescription = "ProcValueRangeDescription",
            CommitteeTypeName = "CommitteeTypeName",
            CommitteeTypeDescription = "CommitteeTypeDescription",
            ContractTypeName = "ContractTypeName",
            ContractTypeDescription = "ContractTypeDescription",
            CurrencyName = "CurrencyName",
            CurrencyDescription = "CurrencyDescription",
            DocSubmitMethodName = "DocSubmitMethodName",
            DocSubmitMethodDescription = "DocSubmitMethodDescription",
            OrderTypeName = "OrderTypeName",
            OrderTypeDescription = "OrderTypeDescription",
            ProcurementMethodName = "ProcurementMethodName",
            ProcurementMethodDescription = "ProcurementMethodDescription"
        }
    }
}
declare namespace SCMONLINE.Default {
    namespace ProcurementService {
        const baseUrl = "Default/Procurement";
        function Create(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Procurement/Create",
            Update = "Default/Procurement/Update",
            Delete = "Default/Procurement/Delete",
            Retrieve = "Default/Procurement/Retrieve",
            List = "Default/Procurement/List"
        }
    }
}
declare namespace SCMONLINE {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace SCMONLINE {
    interface ExcelImportResponse<T> extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
        ImportedData?: T[];
    }
}
declare namespace SCMONLINE {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace SCMONLINE {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace SCMONLINE.Inbox {
    interface CountingNotifRow {
        NotifCount?: number;
    }
    namespace CountingNotifRow {
        const idProperty = "NotifCount";
        const localTextPrefix = "Inbox.CountingNotif";
        const enum Fields {
            NotifCount = "NotifCount"
        }
    }
}
declare namespace SCMONLINE.Inbox {
    namespace CountingNotifService {
        const baseUrl = "Inbox/CountingNotif";
        function Create(request: Serenity.SaveRequest<CountingNotifRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CountingNotifRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CountingNotifRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CountingNotifRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Inbox/CountingNotif/Create",
            Update = "Inbox/CountingNotif/Update",
            Delete = "Inbox/CountingNotif/Delete",
            Retrieve = "Inbox/CountingNotif/Retrieve",
            List = "Inbox/CountingNotif/List"
        }
    }
}
declare namespace SCMONLINE.Inbox {
    interface GraphBarRow {
        stat?: string;
        tgl?: string;
        label?: string;
        value?: number;
    }
    namespace GraphBarRow {
        const idProperty = "stat";
        const nameProperty = "label";
        const localTextPrefix = "Inbox.GraphBar";
        const enum Fields {
            stat = "stat",
            tgl = "tgl",
            label = "label",
            value = "value"
        }
    }
}
declare namespace SCMONLINE.Inbox {
    namespace GraphBarService {
        const baseUrl = "Inbox/GraphBar";
        function Create(request: Serenity.SaveRequest<GraphBarRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<GraphBarRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<GraphBarRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<GraphBarRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Inbox/GraphBar/Create",
            Update = "Inbox/GraphBar/Update",
            Delete = "Inbox/GraphBar/Delete",
            Retrieve = "Inbox/GraphBar/Retrieve",
            List = "Inbox/GraphBar/List"
        }
    }
}
declare namespace SCMONLINE.Inbox {
}
declare namespace SCMONLINE.Inbox {
    interface NotificationForm {
        Title: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        Link: Serenity.StringEditor;
        CreateDate: Serenity.DateEditor;
        ReadingDate: Serenity.DateEditor;
        UserId: Serenity.IntegerEditor;
    }
    class NotificationForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Inbox {
    interface NotificationRow {
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
    namespace NotificationRow {
        const idProperty = "NotificationId";
        const nameProperty = "Title";
        const localTextPrefix = "Inbox.Notification";
        const enum Fields {
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
declare namespace SCMONLINE.Inbox {
    namespace NotificationService {
        const baseUrl = "Inbox/Notification";
        function Create(request: Serenity.SaveRequest<NotificationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<NotificationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<NotificationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<NotificationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Inbox/Notification/Create",
            Update = "Inbox/Notification/Update",
            Delete = "Inbox/Notification/Delete",
            Retrieve = "Inbox/Notification/Retrieve",
            List = "Inbox/Notification/List"
        }
    }
}
declare namespace SCMONLINE.Inbox {
    interface ShowNotificationRow {
        NotificationId?: number;
        Title?: string;
        Description?: string;
        Link?: string;
        CreateDate?: string;
        ReadingDate?: string;
        UserId?: number;
    }
    namespace ShowNotificationRow {
        const idProperty = "NotificationId";
        const nameProperty = "Title";
        const localTextPrefix = "Inbox.ShowNotification";
        const enum Fields {
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
declare namespace SCMONLINE.Inbox {
    namespace ShowNotificationService {
        const baseUrl = "Inbox/ShowNotification";
        function Create(request: Serenity.SaveRequest<ShowNotificationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ShowNotificationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ShowNotificationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ShowNotificationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Inbox/ShowNotification/Create",
            Update = "Inbox/ShowNotification/Update",
            Delete = "Inbox/ShowNotification/Delete",
            Retrieve = "Inbox/ShowNotification/Retrieve",
            List = "Inbox/ShowNotification/List"
        }
    }
}
declare namespace SCMONLINE.Inbox {
    interface StoreGraphs2Row {
        label?: string;
        value?: number;
    }
    namespace StoreGraphs2Row {
        const idProperty = "label";
        const nameProperty = "label";
        const localTextPrefix = "Inbox.StoreGraphs2";
        const enum Fields {
            label = "label",
            value = "value"
        }
    }
}
declare namespace SCMONLINE.Inbox {
    namespace StoreGraphs2Service {
        const baseUrl = "Inbox/StoreGraphs2";
        function Create(request: Serenity.SaveRequest<StoreGraphs2Row>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StoreGraphs2Row>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StoreGraphs2Row>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StoreGraphs2Row>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Inbox/StoreGraphs2/Create",
            Update = "Inbox/StoreGraphs2/Update",
            Delete = "Inbox/StoreGraphs2/Delete",
            Retrieve = "Inbox/StoreGraphs2/Retrieve",
            List = "Inbox/StoreGraphs2/List"
        }
    }
}
declare namespace SCMONLINE.Inbox {
    interface StoreGraphsFCRow {
        buyer?: string;
        label?: string;
        data?: number;
    }
    namespace StoreGraphsFCRow {
        const idProperty = "buyer";
        const nameProperty = "label";
        const localTextPrefix = "Inbox.StoreGraphsFC";
        const enum Fields {
            buyer = "buyer",
            label = "label",
            data = "data"
        }
    }
}
declare namespace SCMONLINE.Inbox {
    namespace StoreGraphsFCService {
        const baseUrl = "Inbox/StoreGraphsFC";
        function Create(request: Serenity.SaveRequest<StoreGraphsFCRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StoreGraphsFCRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StoreGraphsFCRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StoreGraphsFCRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Inbox/StoreGraphsFC/Create",
            Update = "Inbox/StoreGraphsFC/Update",
            Delete = "Inbox/StoreGraphsFC/Delete",
            Retrieve = "Inbox/StoreGraphsFC/Retrieve",
            List = "Inbox/StoreGraphsFC/List"
        }
    }
}
declare namespace SCMONLINE.Inbox {
    interface TryGraphRow {
        stat?: string;
        tgl?: string;
        label?: string;
        value?: number;
    }
    namespace TryGraphRow {
        const idProperty = "stat";
        const nameProperty = "label";
        const localTextPrefix = "Inbox.TryGraph";
        const enum Fields {
            stat = "stat",
            tgl = "tgl",
            label = "label",
            value = "value"
        }
    }
}
declare namespace SCMONLINE.Inbox {
    namespace TryGraphService {
        const baseUrl = "Inbox/TryGraph";
        function Create(request: Serenity.SaveRequest<TryGraphRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TryGraphRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TryGraphRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TryGraphRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Inbox/TryGraph/Create",
            Update = "Inbox/TryGraph/Update",
            Delete = "Inbox/TryGraph/Delete",
            Retrieve = "Inbox/TryGraph/Retrieve",
            List = "Inbox/TryGraph/List"
        }
    }
}
declare namespace SCMONLINE.Inbox {
    interface ViewStoredGraphRow {
        Name?: string;
        Jumlah?: number;
    }
    namespace ViewStoredGraphRow {
        const idProperty = "Name";
        const nameProperty = "Name";
        const localTextPrefix = "Inbox.ViewStoredGraph";
        const enum Fields {
            Name = "Name",
            Jumlah = "Jumlah"
        }
    }
}
declare namespace SCMONLINE.Inbox {
    namespace ViewStoredGraphService {
        const baseUrl = "Inbox/ViewStoredGraph";
        function Create(request: Serenity.SaveRequest<ViewStoredGraphRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ViewStoredGraphRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ViewStoredGraphRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ViewStoredGraphRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Inbox/ViewStoredGraph/Create",
            Update = "Inbox/ViewStoredGraph/Update",
            Delete = "Inbox/ViewStoredGraph/Delete",
            Retrieve = "Inbox/ViewStoredGraph/Retrieve",
            List = "Inbox/ViewStoredGraph/List"
        }
    }
}
declare namespace SCMONLINE.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace SCMONLINE.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace SCMONLINE.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace SCMONLINE.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace SCMONLINE.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace SCMONLINE.Modules._Ext {
    interface UploadResponse extends Serenity.ServiceResponse {
        TemporaryFile?: string;
        Size?: number;
        IsImage?: boolean;
        Width?: number;
        Height?: number;
    }
}
declare namespace SCMONLINE.Northwind {
}
declare namespace SCMONLINE.Northwind {
    interface CategoryForm {
        CategoryName: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }
    class CategoryForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Northwind {
    interface CategoryLangRow {
        Id?: number;
        CategoryId?: number;
        LanguageId?: number;
        CategoryName?: string;
        Description?: string;
    }
    namespace CategoryLangRow {
        const idProperty = "Id";
        const nameProperty = "CategoryName";
        const localTextPrefix = "Northwind.CategoryLang";
        const enum Fields {
            Id = "Id",
            CategoryId = "CategoryId",
            LanguageId = "LanguageId",
            CategoryName = "CategoryName",
            Description = "Description"
        }
    }
}
declare namespace SCMONLINE.Northwind {
    namespace CategoryLangService {
        const baseUrl = "Northwind/CategoryLang";
        function Create(request: Serenity.SaveRequest<CategoryLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CategoryLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CategoryLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CategoryLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/CategoryLang/Create",
            Update = "Northwind/CategoryLang/Update",
            Delete = "Northwind/CategoryLang/Delete",
            Retrieve = "Northwind/CategoryLang/Retrieve",
            List = "Northwind/CategoryLang/List"
        }
    }
}
declare namespace SCMONLINE.Northwind {
    interface CategoryRow {
        CategoryID?: number;
        CategoryName?: string;
        Description?: string;
        Picture?: number[];
    }
    namespace CategoryRow {
        const idProperty = "CategoryID";
        const nameProperty = "CategoryName";
        const localTextPrefix = "Northwind.Category";
        const lookupKey = "Northwind.Category";
        function getLookup(): Q.Lookup<CategoryRow>;
        const enum Fields {
            CategoryID = "CategoryID",
            CategoryName = "CategoryName",
            Description = "Description",
            Picture = "Picture"
        }
    }
}
declare namespace SCMONLINE.Northwind {
    namespace CategoryService {
        const baseUrl = "Northwind/Category";
        function Create(request: Serenity.SaveRequest<CategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/Category/Create",
            Update = "Northwind/Category/Update",
            Delete = "Northwind/Category/Delete",
            Retrieve = "Northwind/Category/Retrieve",
            List = "Northwind/Category/List"
        }
    }
}
declare namespace SCMONLINE.Northwind {
}
declare namespace SCMONLINE.Northwind {
    interface CustomerCustomerDemoRow {
        ID?: number;
        CustomerID?: string;
        CustomerTypeID?: string;
        CustomerCompanyName?: string;
        CustomerContactName?: string;
        CustomerContactTitle?: string;
        CustomerAddress?: string;
        CustomerCity?: string;
        CustomerRegion?: string;
        CustomerPostalCode?: string;
        CustomerCountry?: string;
        CustomerPhone?: string;
        CustomerFax?: string;
        CustomerTypeCustomerDesc?: string;
    }
    namespace CustomerCustomerDemoRow {
        const idProperty = "ID";
        const nameProperty = "CustomerID";
        const localTextPrefix = "Northwind.CustomerCustomerDemo";
        const enum Fields {
            ID = "ID",
            CustomerID = "CustomerID",
            CustomerTypeID = "CustomerTypeID",
            CustomerCompanyName = "CustomerCompanyName",
            CustomerContactName = "CustomerContactName",
            CustomerContactTitle = "CustomerContactTitle",
            CustomerAddress = "CustomerAddress",
            CustomerCity = "CustomerCity",
            CustomerRegion = "CustomerRegion",
            CustomerPostalCode = "CustomerPostalCode",
            CustomerCountry = "CustomerCountry",
            CustomerPhone = "CustomerPhone",
            CustomerFax = "CustomerFax",
            CustomerTypeCustomerDesc = "CustomerTypeCustomerDesc"
        }
    }
}
declare namespace SCMONLINE.Northwind {
    interface CustomerDemographicRow {
        ID?: number;
        CustomerTypeID?: string;
        CustomerDesc?: string;
    }
    namespace CustomerDemographicRow {
        const idProperty = "ID";
        const nameProperty = "CustomerTypeID";
        const localTextPrefix = "Northwind.CustomerDemographic";
        const enum Fields {
            ID = "ID",
            CustomerTypeID = "CustomerTypeID",
            CustomerDesc = "CustomerDesc"
        }
    }
}
declare namespace SCMONLINE.Northwind {
    interface CustomerDetailsRow {
        Id?: number;
        LastContactDate?: string;
        LastContactedBy?: number;
        Email?: string;
        SendBulletin?: boolean;
        LastContactedByLastName?: string;
        LastContactedByFirstName?: string;
        LastContactedByTitle?: string;
        LastContactedByTitleOfCourtesy?: string;
        LastContactedByBirthDate?: string;
        LastContactedByHireDate?: string;
        LastContactedByAddress?: string;
        LastContactedByCity?: string;
        LastContactedByRegion?: string;
        LastContactedByPostalCode?: string;
        LastContactedByCountry?: string;
        LastContactedByHomePhone?: string;
        LastContactedByExtension?: string;
        LastContactedByPhoto?: number[];
        LastContactedByNotes?: string;
        LastContactedByReportsTo?: number;
        LastContactedByPhotoPath?: string;
    }
    namespace CustomerDetailsRow {
        const idProperty = "Id";
        const nameProperty = "Email";
        const localTextPrefix = "Northwind.CustomerDetails";
        const enum Fields {
            Id = "Id",
            LastContactDate = "LastContactDate",
            LastContactedBy = "LastContactedBy",
            Email = "Email",
            SendBulletin = "SendBulletin",
            LastContactedByLastName = "LastContactedByLastName",
            LastContactedByFirstName = "LastContactedByFirstName",
            LastContactedByTitle = "LastContactedByTitle",
            LastContactedByTitleOfCourtesy = "LastContactedByTitleOfCourtesy",
            LastContactedByBirthDate = "LastContactedByBirthDate",
            LastContactedByHireDate = "LastContactedByHireDate",
            LastContactedByAddress = "LastContactedByAddress",
            LastContactedByCity = "LastContactedByCity",
            LastContactedByRegion = "LastContactedByRegion",
            LastContactedByPostalCode = "LastContactedByPostalCode",
            LastContactedByCountry = "LastContactedByCountry",
            LastContactedByHomePhone = "LastContactedByHomePhone",
            LastContactedByExtension = "LastContactedByExtension",
            LastContactedByPhoto = "LastContactedByPhoto",
            LastContactedByNotes = "LastContactedByNotes",
            LastContactedByReportsTo = "LastContactedByReportsTo",
            LastContactedByPhotoPath = "LastContactedByPhotoPath"
        }
    }
}
declare namespace SCMONLINE.Northwind {
    interface CustomerForm {
        CustomerID: Serenity.StringEditor;
        CompanyName: Serenity.StringEditor;
        ContactName: Serenity.StringEditor;
        ContactTitle: Serenity.StringEditor;
        Representatives: Serenity.LookupEditor;
        Address: Serenity.StringEditor;
        Country: Serenity.LookupEditor;
        City: Serenity.LookupEditor;
        Region: Serenity.StringEditor;
        PostalCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Fax: Serenity.StringEditor;
        NoteList: NotesEditor;
        LastContactDate: Serenity.DateEditor;
        LastContactedBy: Serenity.LookupEditor;
        Email: Serenity.EmailEditor;
        SendBulletin: Serenity.BooleanEditor;
    }
    class CustomerForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Northwind {
    interface CustomerGrossSalesRow {
        CustomerId?: string;
        ContactName?: string;
        ProductId?: number;
        ProductName?: string;
        GrossAmount?: number;
    }
    namespace CustomerGrossSalesRow {
        const nameProperty = "ContactName";
        const localTextPrefix = "Northwind.CustomerGrossSales";
        const enum Fields {
            CustomerId = "CustomerId",
            ContactName = "ContactName",
            ProductId = "ProductId",
            ProductName = "ProductName",
            GrossAmount = "GrossAmount"
        }
    }
}
declare namespace SCMONLINE.Northwind {
    interface CustomerRepresentativesRow {
        RepresentativeId?: number;
        CustomerId?: number;
        EmployeeId?: number;
    }
    namespace CustomerRepresentativesRow {
        const idProperty = "RepresentativeId";
        const localTextPrefix = "Northwind.CustomerRepresentatives";
        const enum Fields {
            RepresentativeId = "RepresentativeId",
            CustomerId = "CustomerId",
            EmployeeId = "EmployeeId"
        }
    }
}
declare namespace SCMONLINE.Northwind {
    interface CustomerRow {
        ID?: number;
        CustomerID?: string;
        CompanyName?: string;
        ContactName?: string;
        ContactTitle?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        Phone?: string;
        Fax?: string;
        NoteList?: NoteRow[];
        Representatives?: number[];
        LastContactDate?: string;
        LastContactedBy?: number;
        Email?: string;
        SendBulletin?: boolean;
    }
    namespace CustomerRow {
        const idProperty = "ID";
        const nameProperty = "CompanyName";
        const localTextPrefix = "Northwind.Customer";
        const lookupKey = "Northwind.Customer";
        function getLookup(): Q.Lookup<CustomerRow>;
        const enum Fields {
            ID = "ID",
            CustomerID = "CustomerID",
            CompanyName = "CompanyName",
            ContactName = "ContactName",
            ContactTitle = "ContactTitle",
            Address = "Address",
            City = "City",
            Region = "Region",
            PostalCode = "PostalCode",
            Country = "Country",
            Phone = "Phone",
            Fax = "Fax",
            NoteList = "NoteList",
            Representatives = "Representatives",
            LastContactDate = "LastContactDate",
            LastContactedBy = "LastContactedBy",
            Email = "Email",
            SendBulletin = "SendBulletin"
        }
    }
}
declare namespace SCMONLINE.Northwind {
    namespace CustomerService {
        const baseUrl = "Northwind/Customer";
        function Create(request: Serenity.SaveRequest<CustomerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CustomerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/Customer/Create",
            Update = "Northwind/Customer/Update",
            Delete = "Northwind/Customer/Delete",
            GetNextNumber = "Northwind/Customer/GetNextNumber",
            Retrieve = "Northwind/Customer/Retrieve",
            List = "Northwind/Customer/List"
        }
    }
}
declare namespace SCMONLINE.Northwind {
    interface EmployeeRow {
        EmployeeID?: number;
        LastName?: string;
        FirstName?: string;
        FullName?: string;
        Title?: string;
        TitleOfCourtesy?: string;
        BirthDate?: string;
        HireDate?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        HomePhone?: string;
        Extension?: string;
        Photo?: number[];
        Notes?: string;
        ReportsTo?: number;
        PhotoPath?: string;
        ReportsToFullName?: string;
        ReportsToLastName?: string;
        ReportsToFirstName?: string;
        ReportsToTitle?: string;
        ReportsToTitleOfCourtesy?: string;
        ReportsToBirthDate?: string;
        ReportsToHireDate?: string;
        ReportsToAddress?: string;
        ReportsToCity?: string;
        ReportsToRegion?: string;
        ReportsToPostalCode?: string;
        ReportsToCountry?: string;
        ReportsToHomePhone?: string;
        ReportsToExtension?: string;
        ReportsToPhoto?: number[];
        ReportsToNotes?: string;
        ReportsToReportsTo?: number;
        ReportsToPhotoPath?: string;
        Gender?: Gender;
    }
    namespace EmployeeRow {
        const idProperty = "EmployeeID";
        const nameProperty = "FullName";
        const localTextPrefix = "Northwind.Employee";
        const lookupKey = "Northwind.Employee";
        function getLookup(): Q.Lookup<EmployeeRow>;
        const enum Fields {
            EmployeeID = "EmployeeID",
            LastName = "LastName",
            FirstName = "FirstName",
            FullName = "FullName",
            Title = "Title",
            TitleOfCourtesy = "TitleOfCourtesy",
            BirthDate = "BirthDate",
            HireDate = "HireDate",
            Address = "Address",
            City = "City",
            Region = "Region",
            PostalCode = "PostalCode",
            Country = "Country",
            HomePhone = "HomePhone",
            Extension = "Extension",
            Photo = "Photo",
            Notes = "Notes",
            ReportsTo = "ReportsTo",
            PhotoPath = "PhotoPath",
            ReportsToFullName = "ReportsToFullName",
            ReportsToLastName = "ReportsToLastName",
            ReportsToFirstName = "ReportsToFirstName",
            ReportsToTitle = "ReportsToTitle",
            ReportsToTitleOfCourtesy = "ReportsToTitleOfCourtesy",
            ReportsToBirthDate = "ReportsToBirthDate",
            ReportsToHireDate = "ReportsToHireDate",
            ReportsToAddress = "ReportsToAddress",
            ReportsToCity = "ReportsToCity",
            ReportsToRegion = "ReportsToRegion",
            ReportsToPostalCode = "ReportsToPostalCode",
            ReportsToCountry = "ReportsToCountry",
            ReportsToHomePhone = "ReportsToHomePhone",
            ReportsToExtension = "ReportsToExtension",
            ReportsToPhoto = "ReportsToPhoto",
            ReportsToNotes = "ReportsToNotes",
            ReportsToReportsTo = "ReportsToReportsTo",
            ReportsToPhotoPath = "ReportsToPhotoPath",
            Gender = "Gender"
        }
    }
}
declare namespace SCMONLINE.Northwind {
    interface EmployeeTerritoryRow {
        EmployeeID?: number;
        TerritoryID?: string;
        EmployeeLastName?: string;
        EmployeeFirstName?: string;
        EmployeeTitle?: string;
        EmployeeTitleOfCourtesy?: string;
        EmployeeBirthDate?: string;
        EmployeeHireDate?: string;
        EmployeeAddress?: string;
        EmployeeCity?: string;
        EmployeeRegion?: string;
        EmployeePostalCode?: string;
        EmployeeCountry?: string;
        EmployeeHomePhone?: string;
        EmployeeExtension?: string;
        EmployeePhoto?: number[];
        EmployeeNotes?: string;
        EmployeeReportsTo?: number;
        EmployeePhotoPath?: string;
        TerritoryTerritoryDescription?: string;
        TerritoryRegionID?: number;
    }
    namespace EmployeeTerritoryRow {
        const idProperty = "EmployeeID";
        const nameProperty = "TerritoryID";
        const localTextPrefix = "Northwind.EmployeeTerritory";
        const enum Fields {
            EmployeeID = "EmployeeID",
            TerritoryID = "TerritoryID",
            EmployeeLastName = "EmployeeLastName",
            EmployeeFirstName = "EmployeeFirstName",
            EmployeeTitle = "EmployeeTitle",
            EmployeeTitleOfCourtesy = "EmployeeTitleOfCourtesy",
            EmployeeBirthDate = "EmployeeBirthDate",
            EmployeeHireDate = "EmployeeHireDate",
            EmployeeAddress = "EmployeeAddress",
            EmployeeCity = "EmployeeCity",
            EmployeeRegion = "EmployeeRegion",
            EmployeePostalCode = "EmployeePostalCode",
            EmployeeCountry = "EmployeeCountry",
            EmployeeHomePhone = "EmployeeHomePhone",
            EmployeeExtension = "EmployeeExtension",
            EmployeePhoto = "EmployeePhoto",
            EmployeeNotes = "EmployeeNotes",
            EmployeeReportsTo = "EmployeeReportsTo",
            EmployeePhotoPath = "EmployeePhotoPath",
            TerritoryTerritoryDescription = "TerritoryTerritoryDescription",
            TerritoryRegionID = "TerritoryRegionID"
        }
    }
}
declare namespace SCMONLINE.Northwind {
    enum Gender {
        Male = 1,
        Female = 2
    }
}
declare namespace SCMONLINE.Northwind {
    interface NoteRow {
        NoteId?: number;
        EntityType?: string;
        EntityId?: number;
        Text?: string;
        InsertUserId?: number;
        InsertDate?: string;
        InsertUserDisplayName?: string;
    }
    namespace NoteRow {
        const idProperty = "NoteId";
        const nameProperty = "EntityType";
        const localTextPrefix = "Northwind.Note";
        const enum Fields {
            NoteId = "NoteId",
            EntityType = "EntityType",
            EntityId = "EntityId",
            Text = "Text",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            InsertUserDisplayName = "InsertUserDisplayName"
        }
    }
}
declare namespace SCMONLINE.Northwind {
}
declare namespace SCMONLINE.Northwind {
}
declare namespace SCMONLINE.Northwind {
    interface OrderDetailForm {
        ProductID: Serenity.LookupEditor;
        UnitPrice: Serenity.DecimalEditor;
        Quantity: Serenity.IntegerEditor;
        Discount: Serenity.DecimalEditor;
    }
    class OrderDetailForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Northwind {
    interface OrderDetailRow {
        DetailID?: number;
        OrderID?: number;
        ProductID?: number;
        UnitPrice?: number;
        Quantity?: number;
        Discount?: number;
        OrderCustomerID?: string;
        OrderEmployeeID?: number;
        OrderDate?: string;
        OrderShippedDate?: string;
        OrderShipVia?: number;
        OrderShipCity?: string;
        OrderShipCountry?: string;
        ProductName?: string;
        ProductDiscontinued?: boolean;
        ProductSupplierID?: number;
        ProductQuantityPerUnit?: string;
        ProductUnitPrice?: number;
        LineTotal?: number;
    }
    namespace OrderDetailRow {
        const idProperty = "DetailID";
        const localTextPrefix = "Northwind.OrderDetail";
        const enum Fields {
            DetailID = "DetailID",
            OrderID = "OrderID",
            ProductID = "ProductID",
            UnitPrice = "UnitPrice",
            Quantity = "Quantity",
            Discount = "Discount",
            OrderCustomerID = "OrderCustomerID",
            OrderEmployeeID = "OrderEmployeeID",
            OrderDate = "OrderDate",
            OrderShippedDate = "OrderShippedDate",
            OrderShipVia = "OrderShipVia",
            OrderShipCity = "OrderShipCity",
            OrderShipCountry = "OrderShipCountry",
            ProductName = "ProductName",
            ProductDiscontinued = "ProductDiscontinued",
            ProductSupplierID = "ProductSupplierID",
            ProductQuantityPerUnit = "ProductQuantityPerUnit",
            ProductUnitPrice = "ProductUnitPrice",
            LineTotal = "LineTotal"
        }
    }
}
declare namespace SCMONLINE.Northwind {
    namespace OrderDetailService {
        const baseUrl = "Northwind/OrderDetail";
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OrderDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OrderDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Retrieve = "Northwind/OrderDetail/Retrieve",
            List = "Northwind/OrderDetail/List"
        }
    }
}
declare namespace SCMONLINE.Northwind {
    interface OrderForm {
        CustomerID: CustomerEditor;
        OrderDate: Serenity.DateEditor;
        RequiredDate: Serenity.DateEditor;
        EmployeeID: Serenity.LookupEditor;
        DetailList: OrderDetailsEditor;
        ShippedDate: Serenity.DateEditor;
        ShipVia: Serenity.LookupEditor;
        Freight: Serenity.DecimalEditor;
        ShipName: Serenity.StringEditor;
        ShipAddress: Serenity.StringEditor;
        ShipCity: Serenity.StringEditor;
        ShipRegion: Serenity.StringEditor;
        ShipPostalCode: Serenity.StringEditor;
        ShipCountry: Serenity.StringEditor;
    }
    class OrderForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Northwind {
    interface OrderListRequest extends Serenity.ListRequest {
        ProductID?: number;
    }
}
declare namespace SCMONLINE.Northwind {
    interface OrderRow {
        OrderID?: number;
        CustomerID?: string;
        EmployeeID?: number;
        OrderDate?: string;
        RequiredDate?: string;
        ShippedDate?: string;
        ShipVia?: number;
        Freight?: number;
        ShipName?: string;
        ShipAddress?: string;
        ShipCity?: string;
        ShipRegion?: string;
        ShipPostalCode?: string;
        ShipCountry?: string;
        CustomerCompanyName?: string;
        CustomerContactName?: string;
        CustomerContactTitle?: string;
        CustomerCity?: string;
        CustomerRegion?: string;
        CustomerCountry?: string;
        CustomerPhone?: string;
        CustomerFax?: string;
        EmployeeFullName?: string;
        EmployeeGender?: Gender;
        EmployeeReportsToFullName?: string;
        ShipViaCompanyName?: string;
        ShipViaPhone?: string;
        ShippingState?: OrderShippingState;
        DetailList?: OrderDetailRow[];
    }
    namespace OrderRow {
        const idProperty = "OrderID";
        const nameProperty = "CustomerID";
        const localTextPrefix = "Northwind.Order";
        const enum Fields {
            OrderID = "OrderID",
            CustomerID = "CustomerID",
            EmployeeID = "EmployeeID",
            OrderDate = "OrderDate",
            RequiredDate = "RequiredDate",
            ShippedDate = "ShippedDate",
            ShipVia = "ShipVia",
            Freight = "Freight",
            ShipName = "ShipName",
            ShipAddress = "ShipAddress",
            ShipCity = "ShipCity",
            ShipRegion = "ShipRegion",
            ShipPostalCode = "ShipPostalCode",
            ShipCountry = "ShipCountry",
            CustomerCompanyName = "CustomerCompanyName",
            CustomerContactName = "CustomerContactName",
            CustomerContactTitle = "CustomerContactTitle",
            CustomerCity = "CustomerCity",
            CustomerRegion = "CustomerRegion",
            CustomerCountry = "CustomerCountry",
            CustomerPhone = "CustomerPhone",
            CustomerFax = "CustomerFax",
            EmployeeFullName = "EmployeeFullName",
            EmployeeGender = "EmployeeGender",
            EmployeeReportsToFullName = "EmployeeReportsToFullName",
            ShipViaCompanyName = "ShipViaCompanyName",
            ShipViaPhone = "ShipViaPhone",
            ShippingState = "ShippingState",
            DetailList = "DetailList"
        }
    }
}
declare namespace SCMONLINE.Northwind {
    namespace OrderService {
        const baseUrl = "Northwind/Order";
        function Create(request: Serenity.SaveRequest<OrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: OrderListRequest, onSuccess?: (response: Serenity.ListResponse<OrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/Order/Create",
            Update = "Northwind/Order/Update",
            Delete = "Northwind/Order/Delete",
            Retrieve = "Northwind/Order/Retrieve",
            List = "Northwind/Order/List"
        }
    }
}
declare namespace SCMONLINE.Northwind {
    enum OrderShippingState {
        NotShipped = 0,
        Shipped = 1
    }
}
declare namespace SCMONLINE.Northwind {
}
declare namespace SCMONLINE.Northwind {
    interface ProductForm {
        ProductName: Serenity.StringEditor;
        ProductImage: Serenity.ImageUploadEditor;
        Discontinued: Serenity.BooleanEditor;
        SupplierID: Serenity.LookupEditor;
        CategoryID: Serenity.LookupEditor;
        QuantityPerUnit: Serenity.StringEditor;
        UnitPrice: Serenity.DecimalEditor;
        UnitsInStock: Serenity.IntegerEditor;
        UnitsOnOrder: Serenity.IntegerEditor;
        ReorderLevel: Serenity.IntegerEditor;
    }
    class ProductForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Northwind {
    interface ProductLangRow {
        Id?: number;
        ProductId?: number;
        LanguageId?: number;
        ProductName?: string;
    }
    namespace ProductLangRow {
        const idProperty = "Id";
        const nameProperty = "ProductName";
        const localTextPrefix = "Northwind.ProductLang";
        const enum Fields {
            Id = "Id",
            ProductId = "ProductId",
            LanguageId = "LanguageId",
            ProductName = "ProductName"
        }
    }
}
declare namespace SCMONLINE.Northwind {
    namespace ProductLangService {
        const baseUrl = "Northwind/ProductLang";
        function Create(request: Serenity.SaveRequest<ProductLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/ProductLang/Create",
            Update = "Northwind/ProductLang/Update",
            Delete = "Northwind/ProductLang/Delete",
            Retrieve = "Northwind/ProductLang/Retrieve",
            List = "Northwind/ProductLang/List"
        }
    }
}
declare namespace SCMONLINE.Northwind {
    interface ProductLogRow {
        ProductLogID?: number;
        OperationType?: Serenity.CaptureOperationType;
        ChangingUserId?: number;
        ValidFrom?: string;
        ValidUntil?: string;
        ProductID?: number;
        ProductName?: string;
        ProductImage?: string;
        Discontinued?: boolean;
        SupplierID?: number;
        CategoryID?: number;
        QuantityPerUnit?: string;
        UnitPrice?: number;
        UnitsInStock?: number;
        UnitsOnOrder?: number;
        ReorderLevel?: number;
    }
    namespace ProductLogRow {
        const idProperty = "ProductLogID";
        const localTextPrefix = "Northwind.ProductLog";
        const enum Fields {
            ProductLogID = "ProductLogID",
            OperationType = "OperationType",
            ChangingUserId = "ChangingUserId",
            ValidFrom = "ValidFrom",
            ValidUntil = "ValidUntil",
            ProductID = "ProductID",
            ProductName = "ProductName",
            ProductImage = "ProductImage",
            Discontinued = "Discontinued",
            SupplierID = "SupplierID",
            CategoryID = "CategoryID",
            QuantityPerUnit = "QuantityPerUnit",
            UnitPrice = "UnitPrice",
            UnitsInStock = "UnitsInStock",
            UnitsOnOrder = "UnitsOnOrder",
            ReorderLevel = "ReorderLevel"
        }
    }
}
declare namespace SCMONLINE.Northwind {
    interface ProductRow {
        ProductID?: number;
        ProductName?: string;
        ProductImage?: string;
        Discontinued?: boolean;
        SupplierID?: number;
        CategoryID?: number;
        QuantityPerUnit?: string;
        UnitPrice?: number;
        UnitsInStock?: number;
        UnitsOnOrder?: number;
        ReorderLevel?: number;
        SupplierCompanyName?: string;
        SupplierContactName?: string;
        SupplierContactTitle?: string;
        SupplierAddress?: string;
        SupplierCity?: string;
        SupplierRegion?: string;
        SupplierPostalCode?: string;
        SupplierCountry?: string;
        SupplierPhone?: string;
        SupplierFax?: string;
        SupplierHomePage?: string;
        CategoryName?: string;
        CategoryDescription?: string;
        CategoryPicture?: number[];
    }
    namespace ProductRow {
        const idProperty = "ProductID";
        const nameProperty = "ProductName";
        const localTextPrefix = "Northwind.Product";
        const lookupKey = "Northwind.Product";
        function getLookup(): Q.Lookup<ProductRow>;
        const enum Fields {
            ProductID = "ProductID",
            ProductName = "ProductName",
            ProductImage = "ProductImage",
            Discontinued = "Discontinued",
            SupplierID = "SupplierID",
            CategoryID = "CategoryID",
            QuantityPerUnit = "QuantityPerUnit",
            UnitPrice = "UnitPrice",
            UnitsInStock = "UnitsInStock",
            UnitsOnOrder = "UnitsOnOrder",
            ReorderLevel = "ReorderLevel",
            SupplierCompanyName = "SupplierCompanyName",
            SupplierContactName = "SupplierContactName",
            SupplierContactTitle = "SupplierContactTitle",
            SupplierAddress = "SupplierAddress",
            SupplierCity = "SupplierCity",
            SupplierRegion = "SupplierRegion",
            SupplierPostalCode = "SupplierPostalCode",
            SupplierCountry = "SupplierCountry",
            SupplierPhone = "SupplierPhone",
            SupplierFax = "SupplierFax",
            SupplierHomePage = "SupplierHomePage",
            CategoryName = "CategoryName",
            CategoryDescription = "CategoryDescription",
            CategoryPicture = "CategoryPicture"
        }
    }
}
declare namespace SCMONLINE.Northwind {
    namespace ProductService {
        const baseUrl = "Northwind/Product";
        function Create(request: Serenity.SaveRequest<ProductRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/Product/Create",
            Update = "Northwind/Product/Update",
            Delete = "Northwind/Product/Delete",
            Retrieve = "Northwind/Product/Retrieve",
            List = "Northwind/Product/List"
        }
    }
}
declare namespace SCMONLINE.Northwind {
}
declare namespace SCMONLINE.Northwind {
    interface RegionForm {
        RegionID: Serenity.IntegerEditor;
        RegionDescription: Serenity.StringEditor;
    }
    class RegionForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Northwind {
    interface RegionRow {
        RegionID?: number;
        RegionDescription?: string;
    }
    namespace RegionRow {
        const idProperty = "RegionID";
        const nameProperty = "RegionDescription";
        const localTextPrefix = "Northwind.Region";
        const lookupKey = "Northwind.Region";
        function getLookup(): Q.Lookup<RegionRow>;
        const enum Fields {
            RegionID = "RegionID",
            RegionDescription = "RegionDescription"
        }
    }
}
declare namespace SCMONLINE.Northwind {
    namespace RegionService {
        const baseUrl = "Northwind/Region";
        function Create(request: Serenity.SaveRequest<RegionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RegionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RegionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RegionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/Region/Create",
            Update = "Northwind/Region/Update",
            Delete = "Northwind/Region/Delete",
            Retrieve = "Northwind/Region/Retrieve",
            List = "Northwind/Region/List"
        }
    }
}
declare namespace SCMONLINE.Northwind {
}
declare namespace SCMONLINE.Northwind {
    interface SalesByCategoryRow {
        CategoryId?: number;
        CategoryName?: string;
        ProductName?: string;
        ProductSales?: number;
    }
    namespace SalesByCategoryRow {
        const nameProperty = "CategoryName";
        const localTextPrefix = "Northwind.SalesByCategory";
        const enum Fields {
            CategoryId = "CategoryId",
            CategoryName = "CategoryName",
            ProductName = "ProductName",
            ProductSales = "ProductSales"
        }
    }
}
declare namespace SCMONLINE.Northwind {
    namespace SalesByCategoryService {
        const baseUrl = "Northwind/SalesByCategory";
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SalesByCategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Northwind/SalesByCategory/List"
        }
    }
}
declare namespace SCMONLINE.Northwind {
}
declare namespace SCMONLINE.Northwind {
    interface ShipperForm {
        CompanyName: Serenity.StringEditor;
        Phone: PhoneEditor;
    }
    class ShipperForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Northwind {
    interface ShipperRow {
        ShipperID?: number;
        CompanyName?: string;
        Phone?: string;
    }
    namespace ShipperRow {
        const idProperty = "ShipperID";
        const nameProperty = "CompanyName";
        const localTextPrefix = "Northwind.Shipper";
        const lookupKey = "Northwind.Shipper";
        function getLookup(): Q.Lookup<ShipperRow>;
        const enum Fields {
            ShipperID = "ShipperID",
            CompanyName = "CompanyName",
            Phone = "Phone"
        }
    }
}
declare namespace SCMONLINE.Northwind {
    namespace ShipperService {
        const baseUrl = "Northwind/Shipper";
        function Create(request: Serenity.SaveRequest<ShipperRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ShipperRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ShipperRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ShipperRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/Shipper/Create",
            Update = "Northwind/Shipper/Update",
            Delete = "Northwind/Shipper/Delete",
            Retrieve = "Northwind/Shipper/Retrieve",
            List = "Northwind/Shipper/List"
        }
    }
}
declare namespace SCMONLINE.Northwind {
}
declare namespace SCMONLINE.Northwind {
    interface SupplierForm {
        CompanyName: Serenity.StringEditor;
        ContactName: Serenity.StringEditor;
        ContactTitle: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Region: Serenity.StringEditor;
        PostalCode: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Fax: Serenity.StringEditor;
        HomePage: Serenity.StringEditor;
    }
    class SupplierForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Northwind {
    interface SupplierRow {
        SupplierID?: number;
        CompanyName?: string;
        ContactName?: string;
        ContactTitle?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        Phone?: string;
        Fax?: string;
        HomePage?: string;
    }
    namespace SupplierRow {
        const idProperty = "SupplierID";
        const nameProperty = "CompanyName";
        const localTextPrefix = "Northwind.Supplier";
        const lookupKey = "Northwind.Supplier";
        function getLookup(): Q.Lookup<SupplierRow>;
        const enum Fields {
            SupplierID = "SupplierID",
            CompanyName = "CompanyName",
            ContactName = "ContactName",
            ContactTitle = "ContactTitle",
            Address = "Address",
            City = "City",
            Region = "Region",
            PostalCode = "PostalCode",
            Country = "Country",
            Phone = "Phone",
            Fax = "Fax",
            HomePage = "HomePage"
        }
    }
}
declare namespace SCMONLINE.Northwind {
    namespace SupplierService {
        const baseUrl = "Northwind/Supplier";
        function Create(request: Serenity.SaveRequest<SupplierRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SupplierRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SupplierRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SupplierRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/Supplier/Create",
            Update = "Northwind/Supplier/Update",
            Delete = "Northwind/Supplier/Delete",
            Retrieve = "Northwind/Supplier/Retrieve",
            List = "Northwind/Supplier/List"
        }
    }
}
declare namespace SCMONLINE.Northwind {
}
declare namespace SCMONLINE.Northwind {
    interface TerritoryForm {
        TerritoryID: Serenity.StringEditor;
        TerritoryDescription: Serenity.StringEditor;
        RegionID: Serenity.LookupEditor;
    }
    class TerritoryForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Northwind {
    interface TerritoryRow {
        ID?: number;
        TerritoryID?: string;
        TerritoryDescription?: string;
        RegionID?: number;
        RegionDescription?: string;
    }
    namespace TerritoryRow {
        const idProperty = "ID";
        const nameProperty = "TerritoryID";
        const localTextPrefix = "Northwind.Territory";
        const lookupKey = "Northwind.Territory";
        function getLookup(): Q.Lookup<TerritoryRow>;
        const enum Fields {
            ID = "ID",
            TerritoryID = "TerritoryID",
            TerritoryDescription = "TerritoryDescription",
            RegionID = "RegionID",
            RegionDescription = "RegionDescription"
        }
    }
}
declare namespace SCMONLINE.Northwind {
    namespace TerritoryService {
        const baseUrl = "Northwind/Territory";
        function Create(request: Serenity.SaveRequest<TerritoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TerritoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TerritoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TerritoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/Territory/Create",
            Update = "Northwind/Territory/Update",
            Delete = "Northwind/Territory/Delete",
            Retrieve = "Northwind/Territory/Retrieve",
            List = "Northwind/Territory/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface AddressForm {
        Name: Serenity.TextAreaEditor;
        Description: Serenity.TextAreaEditor;
        AddressTypeId: Serenity.LookupEditor;
    }
    class AddressForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    interface AddressRow {
        AddressId?: number;
        Name?: string;
        Description?: string;
        AddressTypeId?: number;
        AddressTypeName?: string;
        AddressTypeDescription?: string;
    }
    namespace AddressRow {
        const idProperty = "AddressId";
        const nameProperty = "Name";
        const localTextPrefix = "Procurement.Address";
        const lookupKey = "Procurement.Address";
        function getLookup(): Q.Lookup<AddressRow>;
        const enum Fields {
            AddressId = "AddressId",
            Name = "Name",
            Description = "Description",
            AddressTypeId = "AddressTypeId",
            AddressTypeName = "AddressTypeName",
            AddressTypeDescription = "AddressTypeDescription"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    namespace AddressService {
        const baseUrl = "Procurement/Address";
        function Create(request: Serenity.SaveRequest<AddressRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AddressRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AddressRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AddressRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/Address/Create",
            Update = "Procurement/Address/Update",
            Delete = "Procurement/Address/Delete",
            Retrieve = "Procurement/Address/Retrieve",
            List = "Procurement/Address/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface AddressTypeForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }
    class AddressTypeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    interface AddressTypeRow {
        AddressTypeId?: number;
        Name?: string;
        Description?: string;
    }
    namespace AddressTypeRow {
        const idProperty = "AddressTypeId";
        const nameProperty = "Name";
        const localTextPrefix = "Procurement.AddressType";
        const lookupKey = "Procurement.AddressType";
        function getLookup(): Q.Lookup<AddressTypeRow>;
        const enum Fields {
            AddressTypeId = "AddressTypeId",
            Name = "Name",
            Description = "Description"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    namespace AddressTypeService {
        const baseUrl = "Procurement/AddressType";
        function Create(request: Serenity.SaveRequest<AddressTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AddressTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AddressTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AddressTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/AddressType/Create",
            Update = "Procurement/AddressType/Update",
            Delete = "Procurement/AddressType/Delete",
            Retrieve = "Procurement/AddressType/Retrieve",
            List = "Procurement/AddressType/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface ApprovalAuthorityRangeForm {
        RoleId: Serenity.IntegerEditor;
        ProcurementTypeId: Serenity.StringEditor;
        CurrencyId: Serenity.StringEditor;
        MinValue: Serenity.DecimalEditor;
        MaxValue: Serenity.DecimalEditor;
    }
    class ApprovalAuthorityRangeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    interface ApprovalAuthorityRangeRow {
        ApprovalAuthorityRangeId?: number;
        RoleId?: number;
        ProcurementTypeId?: string;
        CurrencyId?: string;
        MinValue?: number;
        MaxValue?: number;
        RoleRoleName?: string;
        RoleCostCenter?: string;
        ProcurementTypeName?: string;
        ProcurementTypeDescription?: string;
        CurrencyName?: string;
        CurrencyDescription?: string;
    }
    namespace ApprovalAuthorityRangeRow {
        const idProperty = "ApprovalAuthorityRangeId";
        const nameProperty = "ProcurementTypeId";
        const localTextPrefix = "Procurement.ApprovalAuthorityRange";
        const enum Fields {
            ApprovalAuthorityRangeId = "ApprovalAuthorityRangeId",
            RoleId = "RoleId",
            ProcurementTypeId = "ProcurementTypeId",
            CurrencyId = "CurrencyId",
            MinValue = "MinValue",
            MaxValue = "MaxValue",
            RoleRoleName = "RoleRoleName",
            RoleCostCenter = "RoleCostCenter",
            ProcurementTypeName = "ProcurementTypeName",
            ProcurementTypeDescription = "ProcurementTypeDescription",
            CurrencyName = "CurrencyName",
            CurrencyDescription = "CurrencyDescription"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    namespace ApprovalAuthorityRangeService {
        const baseUrl = "Procurement/ApprovalAuthorityRange";
        function Create(request: Serenity.SaveRequest<ApprovalAuthorityRangeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ApprovalAuthorityRangeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ApprovalAuthorityRangeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ApprovalAuthorityRangeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/ApprovalAuthorityRange/Create",
            Update = "Procurement/ApprovalAuthorityRange/Update",
            Delete = "Procurement/ApprovalAuthorityRange/Delete",
            Retrieve = "Procurement/ApprovalAuthorityRange/Retrieve",
            List = "Procurement/ApprovalAuthorityRange/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    interface AssignBuyerActionRequest extends Serenity.ServiceRequest {
        PrNo?: string[];
        BuyerId?: number;
    }
}
declare namespace SCMONLINE.Procurement {
    interface BidderListServiceRequest extends Serenity.ServiceRequest {
        CollectiveNumber?: string;
    }
}
declare namespace SCMONLINE.Procurement {
    interface BidPriceImportForm {
        FileName: Serenity.ImageUploadEditor;
    }
    class BidPriceImportForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    interface BuyerAssignmentForm {
        BuyerId: Serenity.LookupEditor;
    }
    class BuyerAssignmentForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface BuyerLookupViewForm {
        Name: Serenity.StringEditor;
        ActivePr: Serenity.IntegerEditor;
    }
    class BuyerLookupViewForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    interface BuyerLookupViewRow {
        UserId?: number;
        Name?: string;
        ActivePr?: number;
    }
    namespace BuyerLookupViewRow {
        const idProperty = "UserId";
        const nameProperty = "Name";
        const localTextPrefix = "Procurement.BuyerLookupView";
        const lookupKey = "Procurement.BuyerLookupView";
        function getLookup(): Q.Lookup<BuyerLookupViewRow>;
        const enum Fields {
            UserId = "UserId",
            Name = "Name",
            ActivePr = "ActivePr"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    namespace BuyerLookupViewService {
        const baseUrl = "Procurement/BuyerLookupView";
        function Create(request: Serenity.SaveRequest<BuyerLookupViewRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BuyerLookupViewRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BuyerLookupViewRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BuyerLookupViewRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/BuyerLookupView/Create",
            Update = "Procurement/BuyerLookupView/Update",
            Delete = "Procurement/BuyerLookupView/Delete",
            Retrieve = "Procurement/BuyerLookupView/Retrieve",
            List = "Procurement/BuyerLookupView/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface CharacteristicDescriptionForm {
        Language: Serenity.StringEditor;
        IntCounter: Serenity.IntegerEditor;
        Description: Serenity.StringEditor;
        Heading1: Serenity.StringEditor;
        Heading2: Serenity.StringEditor;
        ValidFrom: Serenity.DateEditor;
        TechStFrom: Serenity.StringEditor;
        ChangeNumber: Serenity.StringEditor;
        DeletionInd: Serenity.StringEditor;
    }
    class CharacteristicDescriptionForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    interface CharacteristicDescriptionRow {
        InternalChar?: string;
        Language?: string;
        IntCounter?: number;
        Description?: string;
        Heading1?: string;
        Heading2?: string;
        ValidFrom?: string;
        TechStFrom?: string;
        ChangeNumber?: string;
        DeletionInd?: string;
    }
    namespace CharacteristicDescriptionRow {
        const idProperty = "InternalChar";
        const nameProperty = "InternalChar";
        const localTextPrefix = "Procurement.CharacteristicDescription";
        const enum Fields {
            InternalChar = "InternalChar",
            Language = "Language",
            IntCounter = "IntCounter",
            Description = "Description",
            Heading1 = "Heading1",
            Heading2 = "Heading2",
            ValidFrom = "ValidFrom",
            TechStFrom = "TechStFrom",
            ChangeNumber = "ChangeNumber",
            DeletionInd = "DeletionInd"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    namespace CharacteristicDescriptionService {
        const baseUrl = "Procurement/CharacteristicDescription";
        function Create(request: Serenity.SaveRequest<CharacteristicDescriptionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CharacteristicDescriptionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CharacteristicDescriptionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CharacteristicDescriptionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/CharacteristicDescription/Create",
            Update = "Procurement/CharacteristicDescription/Update",
            Delete = "Procurement/CharacteristicDescription/Delete",
            Retrieve = "Procurement/CharacteristicDescription/Retrieve",
            List = "Procurement/CharacteristicDescription/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface CharacteristicValueForm {
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
    class CharacteristicValueForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    interface CharacteristicValueRow {
        CharacteristicValueId?: number;
        Object?: string;
        InternalChar?: string;
        Counter?: string;
        ObjectClass?: string;
        ClassType?: string;
        IntCounter?: string;
        CharValue?: string;
        ValueFrom?: string;
        IntMeasUnit?: string;
        ValueTo?: string;
        Code?: string;
        ToleranceFrom?: string;
        ToleranceTo?: string;
        Percentage?: string;
        Increment?: string;
        Author?: string;
        ChangeNumber?: string;
        ValidFrom?: string;
        DeletionInd?: string;
        InstanceCntr?: string;
        Position?: string;
        CompType?: string;
    }
    namespace CharacteristicValueRow {
        const idProperty = "CharacteristicValueId";
        const nameProperty = "Object";
        const localTextPrefix = "Procurement.CharacteristicValue";
        const enum Fields {
            CharacteristicValueId = "CharacteristicValueId",
            Object = "Object",
            InternalChar = "InternalChar",
            Counter = "Counter",
            ObjectClass = "ObjectClass",
            ClassType = "ClassType",
            IntCounter = "IntCounter",
            CharValue = "CharValue",
            ValueFrom = "ValueFrom",
            IntMeasUnit = "IntMeasUnit",
            ValueTo = "ValueTo",
            Code = "Code",
            ToleranceFrom = "ToleranceFrom",
            ToleranceTo = "ToleranceTo",
            Percentage = "Percentage",
            Increment = "Increment",
            Author = "Author",
            ChangeNumber = "ChangeNumber",
            ValidFrom = "ValidFrom",
            DeletionInd = "DeletionInd",
            InstanceCntr = "InstanceCntr",
            Position = "Position",
            CompType = "CompType"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    namespace CharacteristicValueService {
        const baseUrl = "Procurement/CharacteristicValue";
        function Create(request: Serenity.SaveRequest<CharacteristicValueRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CharacteristicValueRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CharacteristicValueRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CharacteristicValueRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/CharacteristicValue/Create",
            Update = "Procurement/CharacteristicValue/Update",
            Delete = "Procurement/CharacteristicValue/Delete",
            Retrieve = "Procurement/CharacteristicValue/Retrieve",
            List = "Procurement/CharacteristicValue/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface CommitteeMemberForm {
        ProcurementId: Serenity.StringEditor;
        CommitteeRoleId: Serenity.LookupEditor;
        RoleId: Serenity.LookupEditor;
    }
    class CommitteeMemberForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface CommitteeMemberMappingForm {
        Sequence: Serenity.IntegerEditor;
        ProcurementTypeId: Serenity.StringEditor;
        ProcValueRangeId: Serenity.IntegerEditor;
        RoleId: Serenity.IntegerEditor;
        CommitteeRoleId: Serenity.IntegerEditor;
    }
    class CommitteeMemberMappingForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    interface CommitteeMemberMappingRow {
        CommitteeMemberMappingId?: number;
        Sequence?: number;
        ProcurementTypeId?: string;
        ProcValueRangeId?: number;
        RoleId?: number;
        CommitteeRoleId?: number;
        ProcurementTypeName?: string;
        ProcurementTypeDescription?: string;
        ProcValueRangeName?: string;
        ProcValueRangeDescription?: string;
        RoleRoleName?: string;
        RoleCostCenter?: string;
        CommitteeRoleName?: string;
        CommitteeRoleDescription?: string;
    }
    namespace CommitteeMemberMappingRow {
        const idProperty = "CommitteeMemberMappingId";
        const nameProperty = "ProcurementTypeId";
        const localTextPrefix = "Procurement.CommitteeMemberMapping";
        const lookupKey = "Procurement.CommitteeMemberMapping";
        function getLookup(): Q.Lookup<CommitteeMemberMappingRow>;
        const enum Fields {
            CommitteeMemberMappingId = "CommitteeMemberMappingId",
            Sequence = "Sequence",
            ProcurementTypeId = "ProcurementTypeId",
            ProcValueRangeId = "ProcValueRangeId",
            RoleId = "RoleId",
            CommitteeRoleId = "CommitteeRoleId",
            ProcurementTypeName = "ProcurementTypeName",
            ProcurementTypeDescription = "ProcurementTypeDescription",
            ProcValueRangeName = "ProcValueRangeName",
            ProcValueRangeDescription = "ProcValueRangeDescription",
            RoleRoleName = "RoleRoleName",
            RoleCostCenter = "RoleCostCenter",
            CommitteeRoleName = "CommitteeRoleName",
            CommitteeRoleDescription = "CommitteeRoleDescription"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    namespace CommitteeMemberMappingService {
        const baseUrl = "Procurement/CommitteeMemberMapping";
        function Create(request: Serenity.SaveRequest<CommitteeMemberMappingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CommitteeMemberMappingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CommitteeMemberMappingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CommitteeMemberMappingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/CommitteeMemberMapping/Create",
            Update = "Procurement/CommitteeMemberMapping/Update",
            Delete = "Procurement/CommitteeMemberMapping/Delete",
            Retrieve = "Procurement/CommitteeMemberMapping/Retrieve",
            List = "Procurement/CommitteeMemberMapping/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    interface CommitteeMemberRow {
        CommitteeMemberId?: number;
        ProcurementId?: number;
        RoleId?: number;
        CommitteeRoleId?: number;
        ApprovalStatus?: _Ext.ApproveTidakApprove;
        ApprovalBy?: string;
        ApprovalDate?: string;
        ProcurementStatus?: string;
        ProcurementCollectiveNumber?: string;
        ProcurementTitle?: string;
        ProcurementClassification?: string;
        ProcurementQualification?: string;
        ProcurementRequestedBy?: string;
        ProcurementRequestorPosition?: string;
        ProcurementApprovedBy?: string;
        ProcurementApproverPosition?: string;
        ProcurementCreatedBy?: string;
        ProcurementCreatedDate?: string;
        ProcurementGuaranteePercentage?: number;
        ProcurementOfficeAddress?: number;
        ProcurementProcValueRangeId?: number;
        ProcurementCommitteeTypeId?: number;
        ProcurementPerformanceGuaranteeRequired?: boolean;
        ProcurementTenderPeriod?: number;
        ProcurementDeliveryTime?: number;
        ProcurementDestinationId?: number;
        ProcurementContractTypeId?: number;
        ProcurementCurrencyId?: string;
        ProcurementDocSubmitMethodId?: number;
        ProcurementAanwijzingExists?: boolean;
        ProcurementAanwijzingDate?: string;
        ProcurementAanwijzingClosingDate?: string;
        ProcurementAanwijzingLocation?: string;
        ProcurementAanwijzingClosingLocation?: string;
        ProcurementAanwijzingSecretary?: string;
        ProcurementAanwijzingSummary?: string;
        ProcurementFieldSurveyExists?: boolean;
        ProcurementFieldSurveyAddress?: string;
        ProcurementItbDocumentFile?: string;
        ProcurementItbDocumentName?: string;
        ProcurementRksDocumentFile?: string;
        ProcurementRksDocumentName?: string;
        ProcurementTenderDocSubmitOpenDate?: string;
        ProcurementTenderDocSubmitCloseDate?: string;
        ProcurementOrderTypeId?: string;
        ProcurementPurchDocNum?: string;
        ProcurementRfqDate?: string;
        ProcurementQuotationDeadline?: string;
        ProcurementPurchGroup?: string;
        ProcurementPrNo?: string;
        ProcurementAuthPersonName?: string;
        ProcurementAuthPosition?: string;
        ProcurementHeaderText?: string;
        ProcurementHeaderNote?: string;
        ProcurementWorkDescription?: string;
        ProcurementBankKey?: string;
        ProcurementPoCover?: string;
        ProcurementDeliveryAddress?: string;
        ProcurementToPTargVal?: string;
        ProcurementYourReference?: string;
        ProcurementOurReference?: string;
        ProcurementSalesPerson?: string;
        ProcurementTelephone?: string;
        ProcurementValidityStart?: string;
        ProcurementValidityEnd?: string;
        ProcurementItemInterval?: number;
        ProcurementSubItemInterval?: number;
        ProcurementWarranty?: string;
        ProcurementLanguage?: string;
        ProcurementReviewOeRequired?: boolean;
        ProcurementProcAgreement?: boolean;
        ProcurementProcAgreementDate?: string;
        ProcurementProcAsRequired?: boolean;
        ProcurementProcAsApproved?: boolean;
        ProcurementProcAsApprovedDate?: string;
        ProcurementProcAsDesc?: string;
        ProcurementFinalConclusionDesc?: string;
        ProcurementWinnerNominationDate?: string;
        ProcurementObjectionCloseDate?: string;
        ProcurementPoDocName?: string;
        ProcurementTemporaryPic?: string;
        ProcurementPoNumber?: string;
        ProcurementPoDocFile?: string;
        ProcurementF1SubmitDate?: string;
        ProcurementF1SubmitBy?: string;
        ProcurementF2SubmitDate?: string;
        ProcurementF2SubmitBy?: string;
        ProcurementF3SubmitDate?: string;
        ProcurementF3SubmitBy?: string;
        ProcurementF31SubmitDate?: string;
        ProcurementF31SubmitBy?: string;
        ProcurementF4SubmitDate?: string;
        ProcurementF4SubmitBy?: string;
        ProcurementF5SubmitDate?: string;
        ProcurementF5SubmitBy?: string;
        ProcurementF6SubmitDate?: string;
        ProcurementF6SubmitBy?: string;
        ProcurementF7SubmitDate?: string;
        ProcurementF7SubmitBy?: string;
        ProcurementF8SubmitDate?: string;
        ProcurementF8SubmitBy?: string;
        ProcurementF9SubmitDate?: string;
        ProcurementF9SubmitBy?: string;
        ProcurementF10SubmitDate?: string;
        ProcurementF10SubmitBy?: string;
        ProcurementF11SubmitDate?: string;
        ProcurementF11SubmitBy?: string;
        ProcurementF12SubmitDate?: string;
        ProcurementF12SubmitBy?: string;
        ProcurementF13SubmitDate?: string;
        ProcurementF13SubmitBy?: string;
        ProcurementF14SubmitDate?: string;
        ProcurementF14SubmitBy?: string;
        ProcurementF15SubmitDate?: string;
        ProcurementF15SubmitBy?: string;
        ProcurementF16SubmitDate?: string;
        ProcurementF16SubmitBy?: string;
        ProcurementF17SubmitDate?: string;
        ProcurementF17SubmitBy?: string;
        ProcurementProcurementMethodId?: string;
        RoleRoleName?: string;
        RoleCostCenter?: string;
        CommitteeRoleName?: string;
        CommitteeRoleDescription?: string;
    }
    namespace CommitteeMemberRow {
        const idProperty = "CommitteeMemberId";
        const nameProperty = "CommitteeRoleName";
        const localTextPrefix = "Procurement.CommitteeMember";
        const enum Fields {
            CommitteeMemberId = "CommitteeMemberId",
            ProcurementId = "ProcurementId",
            RoleId = "RoleId",
            CommitteeRoleId = "CommitteeRoleId",
            ApprovalStatus = "ApprovalStatus",
            ApprovalBy = "ApprovalBy",
            ApprovalDate = "ApprovalDate",
            ProcurementStatus = "ProcurementStatus",
            ProcurementCollectiveNumber = "ProcurementCollectiveNumber",
            ProcurementTitle = "ProcurementTitle",
            ProcurementClassification = "ProcurementClassification",
            ProcurementQualification = "ProcurementQualification",
            ProcurementRequestedBy = "ProcurementRequestedBy",
            ProcurementRequestorPosition = "ProcurementRequestorPosition",
            ProcurementApprovedBy = "ProcurementApprovedBy",
            ProcurementApproverPosition = "ProcurementApproverPosition",
            ProcurementCreatedBy = "ProcurementCreatedBy",
            ProcurementCreatedDate = "ProcurementCreatedDate",
            ProcurementGuaranteePercentage = "ProcurementGuaranteePercentage",
            ProcurementOfficeAddress = "ProcurementOfficeAddress",
            ProcurementProcValueRangeId = "ProcurementProcValueRangeId",
            ProcurementCommitteeTypeId = "ProcurementCommitteeTypeId",
            ProcurementPerformanceGuaranteeRequired = "ProcurementPerformanceGuaranteeRequired",
            ProcurementTenderPeriod = "ProcurementTenderPeriod",
            ProcurementDeliveryTime = "ProcurementDeliveryTime",
            ProcurementDestinationId = "ProcurementDestinationId",
            ProcurementContractTypeId = "ProcurementContractTypeId",
            ProcurementCurrencyId = "ProcurementCurrencyId",
            ProcurementDocSubmitMethodId = "ProcurementDocSubmitMethodId",
            ProcurementAanwijzingExists = "ProcurementAanwijzingExists",
            ProcurementAanwijzingDate = "ProcurementAanwijzingDate",
            ProcurementAanwijzingClosingDate = "ProcurementAanwijzingClosingDate",
            ProcurementAanwijzingLocation = "ProcurementAanwijzingLocation",
            ProcurementAanwijzingClosingLocation = "ProcurementAanwijzingClosingLocation",
            ProcurementAanwijzingSecretary = "ProcurementAanwijzingSecretary",
            ProcurementAanwijzingSummary = "ProcurementAanwijzingSummary",
            ProcurementFieldSurveyExists = "ProcurementFieldSurveyExists",
            ProcurementFieldSurveyAddress = "ProcurementFieldSurveyAddress",
            ProcurementItbDocumentFile = "ProcurementItbDocumentFile",
            ProcurementItbDocumentName = "ProcurementItbDocumentName",
            ProcurementRksDocumentFile = "ProcurementRksDocumentFile",
            ProcurementRksDocumentName = "ProcurementRksDocumentName",
            ProcurementTenderDocSubmitOpenDate = "ProcurementTenderDocSubmitOpenDate",
            ProcurementTenderDocSubmitCloseDate = "ProcurementTenderDocSubmitCloseDate",
            ProcurementOrderTypeId = "ProcurementOrderTypeId",
            ProcurementPurchDocNum = "ProcurementPurchDocNum",
            ProcurementRfqDate = "ProcurementRfqDate",
            ProcurementQuotationDeadline = "ProcurementQuotationDeadline",
            ProcurementPurchGroup = "ProcurementPurchGroup",
            ProcurementPrNo = "ProcurementPrNo",
            ProcurementAuthPersonName = "ProcurementAuthPersonName",
            ProcurementAuthPosition = "ProcurementAuthPosition",
            ProcurementHeaderText = "ProcurementHeaderText",
            ProcurementHeaderNote = "ProcurementHeaderNote",
            ProcurementWorkDescription = "ProcurementWorkDescription",
            ProcurementBankKey = "ProcurementBankKey",
            ProcurementPoCover = "ProcurementPoCover",
            ProcurementDeliveryAddress = "ProcurementDeliveryAddress",
            ProcurementToPTargVal = "ProcurementToPTargVal",
            ProcurementYourReference = "ProcurementYourReference",
            ProcurementOurReference = "ProcurementOurReference",
            ProcurementSalesPerson = "ProcurementSalesPerson",
            ProcurementTelephone = "ProcurementTelephone",
            ProcurementValidityStart = "ProcurementValidityStart",
            ProcurementValidityEnd = "ProcurementValidityEnd",
            ProcurementItemInterval = "ProcurementItemInterval",
            ProcurementSubItemInterval = "ProcurementSubItemInterval",
            ProcurementWarranty = "ProcurementWarranty",
            ProcurementLanguage = "ProcurementLanguage",
            ProcurementReviewOeRequired = "ProcurementReviewOeRequired",
            ProcurementProcAgreement = "ProcurementProcAgreement",
            ProcurementProcAgreementDate = "ProcurementProcAgreementDate",
            ProcurementProcAsRequired = "ProcurementProcAsRequired",
            ProcurementProcAsApproved = "ProcurementProcAsApproved",
            ProcurementProcAsApprovedDate = "ProcurementProcAsApprovedDate",
            ProcurementProcAsDesc = "ProcurementProcAsDesc",
            ProcurementFinalConclusionDesc = "ProcurementFinalConclusionDesc",
            ProcurementWinnerNominationDate = "ProcurementWinnerNominationDate",
            ProcurementObjectionCloseDate = "ProcurementObjectionCloseDate",
            ProcurementPoDocName = "ProcurementPoDocName",
            ProcurementTemporaryPic = "ProcurementTemporaryPic",
            ProcurementPoNumber = "ProcurementPoNumber",
            ProcurementPoDocFile = "ProcurementPoDocFile",
            ProcurementF1SubmitDate = "ProcurementF1SubmitDate",
            ProcurementF1SubmitBy = "ProcurementF1SubmitBy",
            ProcurementF2SubmitDate = "ProcurementF2SubmitDate",
            ProcurementF2SubmitBy = "ProcurementF2SubmitBy",
            ProcurementF3SubmitDate = "ProcurementF3SubmitDate",
            ProcurementF3SubmitBy = "ProcurementF3SubmitBy",
            ProcurementF31SubmitDate = "ProcurementF31SubmitDate",
            ProcurementF31SubmitBy = "ProcurementF31SubmitBy",
            ProcurementF4SubmitDate = "ProcurementF4SubmitDate",
            ProcurementF4SubmitBy = "ProcurementF4SubmitBy",
            ProcurementF5SubmitDate = "ProcurementF5SubmitDate",
            ProcurementF5SubmitBy = "ProcurementF5SubmitBy",
            ProcurementF6SubmitDate = "ProcurementF6SubmitDate",
            ProcurementF6SubmitBy = "ProcurementF6SubmitBy",
            ProcurementF7SubmitDate = "ProcurementF7SubmitDate",
            ProcurementF7SubmitBy = "ProcurementF7SubmitBy",
            ProcurementF8SubmitDate = "ProcurementF8SubmitDate",
            ProcurementF8SubmitBy = "ProcurementF8SubmitBy",
            ProcurementF9SubmitDate = "ProcurementF9SubmitDate",
            ProcurementF9SubmitBy = "ProcurementF9SubmitBy",
            ProcurementF10SubmitDate = "ProcurementF10SubmitDate",
            ProcurementF10SubmitBy = "ProcurementF10SubmitBy",
            ProcurementF11SubmitDate = "ProcurementF11SubmitDate",
            ProcurementF11SubmitBy = "ProcurementF11SubmitBy",
            ProcurementF12SubmitDate = "ProcurementF12SubmitDate",
            ProcurementF12SubmitBy = "ProcurementF12SubmitBy",
            ProcurementF13SubmitDate = "ProcurementF13SubmitDate",
            ProcurementF13SubmitBy = "ProcurementF13SubmitBy",
            ProcurementF14SubmitDate = "ProcurementF14SubmitDate",
            ProcurementF14SubmitBy = "ProcurementF14SubmitBy",
            ProcurementF15SubmitDate = "ProcurementF15SubmitDate",
            ProcurementF15SubmitBy = "ProcurementF15SubmitBy",
            ProcurementF16SubmitDate = "ProcurementF16SubmitDate",
            ProcurementF16SubmitBy = "ProcurementF16SubmitBy",
            ProcurementF17SubmitDate = "ProcurementF17SubmitDate",
            ProcurementF17SubmitBy = "ProcurementF17SubmitBy",
            ProcurementProcurementMethodId = "ProcurementProcurementMethodId",
            RoleRoleName = "RoleRoleName",
            RoleCostCenter = "RoleCostCenter",
            CommitteeRoleName = "CommitteeRoleName",
            CommitteeRoleDescription = "CommitteeRoleDescription"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    namespace CommitteeMemberService {
        const baseUrl = "Procurement/CommitteeMember";
        function Create(request: Serenity.SaveRequest<CommitteeMemberRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CommitteeMemberRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CommitteeMemberRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CommitteeMemberRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/CommitteeMember/Create",
            Update = "Procurement/CommitteeMember/Update",
            Delete = "Procurement/CommitteeMember/Delete",
            Retrieve = "Procurement/CommitteeMember/Retrieve",
            List = "Procurement/CommitteeMember/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface CommitteeRoleForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }
    class CommitteeRoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    interface CommitteeRoleRow {
        CommitteeRoleId?: number;
        Name?: string;
        Description?: string;
        MandatoryRole?: boolean;
    }
    namespace CommitteeRoleRow {
        const idProperty = "CommitteeRoleId";
        const nameProperty = "Name";
        const localTextPrefix = "Procurement.CommitteeRole";
        const lookupKey = "Procurement.CommitteeRole";
        function getLookup(): Q.Lookup<CommitteeRoleRow>;
        const enum Fields {
            CommitteeRoleId = "CommitteeRoleId",
            Name = "Name",
            Description = "Description",
            MandatoryRole = "MandatoryRole"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    namespace CommitteeRoleService {
        const baseUrl = "Procurement/CommitteeRole";
        function Create(request: Serenity.SaveRequest<CommitteeRoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CommitteeRoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CommitteeRoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CommitteeRoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/CommitteeRole/Create",
            Update = "Procurement/CommitteeRole/Update",
            Delete = "Procurement/CommitteeRole/Delete",
            Retrieve = "Procurement/CommitteeRole/Retrieve",
            List = "Procurement/CommitteeRole/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface CommitteeTypeForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }
    class CommitteeTypeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    interface CommitteeTypeRow {
        CommitteeTypeId?: number;
        Name?: string;
        Description?: string;
    }
    namespace CommitteeTypeRow {
        const idProperty = "CommitteeTypeId";
        const nameProperty = "Name";
        const localTextPrefix = "Procurement.CommitteeType";
        const lookupKey = "Procurement.CommitteeType";
        function getLookup(): Q.Lookup<CommitteeTypeRow>;
        const enum Fields {
            CommitteeTypeId = "CommitteeTypeId",
            Name = "Name",
            Description = "Description"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    namespace CommitteeTypeService {
        const baseUrl = "Procurement/CommitteeType";
        function Create(request: Serenity.SaveRequest<CommitteeTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CommitteeTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CommitteeTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CommitteeTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/CommitteeType/Create",
            Update = "Procurement/CommitteeType/Update",
            Delete = "Procurement/CommitteeType/Delete",
            Retrieve = "Procurement/CommitteeType/Retrieve",
            List = "Procurement/CommitteeType/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface ContractTypeForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }
    class ContractTypeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    interface ContractTypeRow {
        ContractTypeId?: number;
        Name?: string;
        Description?: string;
    }
    namespace ContractTypeRow {
        const idProperty = "ContractTypeId";
        const nameProperty = "Name";
        const localTextPrefix = "Procurement.ContractType";
        const lookupKey = "Procurement.ContractType";
        function getLookup(): Q.Lookup<ContractTypeRow>;
        const enum Fields {
            ContractTypeId = "ContractTypeId",
            Name = "Name",
            Description = "Description"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    namespace ContractTypeService {
        const baseUrl = "Procurement/ContractType";
        function Create(request: Serenity.SaveRequest<ContractTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ContractTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ContractTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ContractTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/ContractType/Create",
            Update = "Procurement/ContractType/Update",
            Delete = "Procurement/ContractType/Delete",
            Retrieve = "Procurement/ContractType/Retrieve",
            List = "Procurement/ContractType/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface CurrencyForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }
    class CurrencyForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    interface CurrencyRow {
        CurrencyId?: string;
        Name?: string;
        Description?: string;
    }
    namespace CurrencyRow {
        const idProperty = "CurrencyId";
        const nameProperty = "CurrencyId";
        const localTextPrefix = "Procurement.Currency";
        const lookupKey = "Procurement.Currency";
        function getLookup(): Q.Lookup<CurrencyRow>;
        const enum Fields {
            CurrencyId = "CurrencyId",
            Name = "Name",
            Description = "Description"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    namespace CurrencyService {
        const baseUrl = "Procurement/Currency";
        function Create(request: Serenity.SaveRequest<CurrencyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CurrencyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CurrencyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CurrencyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/Currency/Create",
            Update = "Procurement/Currency/Update",
            Delete = "Procurement/Currency/Delete",
            Retrieve = "Procurement/Currency/Retrieve",
            List = "Procurement/Currency/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface DocSubmitMethodForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }
    class DocSubmitMethodForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    interface DocSubmitMethodRow {
        DocSubmitMethodId?: number;
        Name?: string;
        Description?: string;
    }
    namespace DocSubmitMethodRow {
        const idProperty = "DocSubmitMethodId";
        const nameProperty = "Name";
        const localTextPrefix = "Procurement.DocSubmitMethod";
        const lookupKey = "Procurement.DocSubmitMethod";
        function getLookup(): Q.Lookup<DocSubmitMethodRow>;
        const enum Fields {
            DocSubmitMethodId = "DocSubmitMethodId",
            Name = "Name",
            Description = "Description"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    namespace DocSubmitMethodService {
        const baseUrl = "Procurement/DocSubmitMethod";
        function Create(request: Serenity.SaveRequest<DocSubmitMethodRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DocSubmitMethodRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DocSubmitMethodRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DocSubmitMethodRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/DocSubmitMethod/Create",
            Update = "Procurement/DocSubmitMethod/Update",
            Delete = "Procurement/DocSubmitMethod/Delete",
            Retrieve = "Procurement/DocSubmitMethod/Retrieve",
            List = "Procurement/DocSubmitMethod/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface DocumentStatusForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }
    class DocumentStatusForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    interface DocumentStatusRow {
        DocumentStatusId?: number;
        Name?: string;
        Description?: string;
    }
    namespace DocumentStatusRow {
        const idProperty = "DocumentStatusId";
        const nameProperty = "Name";
        const localTextPrefix = "Procurement.DocumentStatus";
        const lookupKey = "Procurement.DocumentStatus";
        function getLookup(): Q.Lookup<DocumentStatusRow>;
        const enum Fields {
            DocumentStatusId = "DocumentStatusId",
            Name = "Name",
            Description = "Description"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    namespace DocumentStatusService {
        const baseUrl = "Procurement/DocumentStatus";
        function Create(request: Serenity.SaveRequest<DocumentStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DocumentStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DocumentStatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DocumentStatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/DocumentStatus/Create",
            Update = "Procurement/DocumentStatus/Update",
            Delete = "Procurement/DocumentStatus/Delete",
            Retrieve = "Procurement/DocumentStatus/Retrieve",
            List = "Procurement/DocumentStatus/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface EvaluationConclusionForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }
    class EvaluationConclusionForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface EvaluationConclusionItemForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }
    class EvaluationConclusionItemForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    interface EvaluationConclusionItemRow {
        EvaluationConclusionItemId?: number;
        Name?: string;
        Description?: string;
    }
    namespace EvaluationConclusionItemRow {
        const idProperty = "EvaluationConclusionItemId";
        const nameProperty = "Name";
        const localTextPrefix = "Procurement.EvaluationConclusionItem";
        const lookupKey = "Procurement.EvaluationConclusionItem";
        function getLookup(): Q.Lookup<EvaluationConclusionItemRow>;
        const enum Fields {
            EvaluationConclusionItemId = "EvaluationConclusionItemId",
            Name = "Name",
            Description = "Description"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    namespace EvaluationConclusionItemService {
        const baseUrl = "Procurement/EvaluationConclusionItem";
        function Create(request: Serenity.SaveRequest<EvaluationConclusionItemRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EvaluationConclusionItemRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EvaluationConclusionItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EvaluationConclusionItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/EvaluationConclusionItem/Create",
            Update = "Procurement/EvaluationConclusionItem/Update",
            Delete = "Procurement/EvaluationConclusionItem/Delete",
            Retrieve = "Procurement/EvaluationConclusionItem/Retrieve",
            List = "Procurement/EvaluationConclusionItem/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    interface EvaluationConclusionRow {
        EvaluationConclusionId?: number;
        Name?: string;
        Description?: string;
    }
    namespace EvaluationConclusionRow {
        const idProperty = "EvaluationConclusionId";
        const nameProperty = "Name";
        const localTextPrefix = "Procurement.EvaluationConclusion";
        const lookupKey = "Procurement.EvaluationConclusion";
        function getLookup(): Q.Lookup<EvaluationConclusionRow>;
        const enum Fields {
            EvaluationConclusionId = "EvaluationConclusionId",
            Name = "Name",
            Description = "Description"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    namespace EvaluationConclusionService {
        const baseUrl = "Procurement/EvaluationConclusion";
        function Create(request: Serenity.SaveRequest<EvaluationConclusionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EvaluationConclusionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EvaluationConclusionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EvaluationConclusionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/EvaluationConclusion/Create",
            Update = "Procurement/EvaluationConclusion/Update",
            Delete = "Procurement/EvaluationConclusion/Delete",
            Retrieve = "Procurement/EvaluationConclusion/Retrieve",
            List = "Procurement/EvaluationConclusion/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface F10_NegotiationForm {
        ProcurementTypeId: Serenity.LookupEditor;
        Status: Serenity.LookupEditor;
        CollectiveNumber: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        Classification: Serenity.StringEditor;
        Qualification: Serenity.StringEditor;
        ContractTypeId: Serenity.LookupEditor;
        ReviewOeRequired: _Ext.YaTidakEditor;
        RfqItems: F10_RfqItemsEditor;
        ProcParticipantItems: F10_ProcParticipantItemsEditor;
        EvaluationClosingPriceDate: Serenity.DateEditor;
        F10SubmitDate: Serenity.DateTimeEditor;
        F10SubmitBy: Serenity.StringEditor;
    }
    class F10_NegotiationForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    namespace F10_NegotiationService {
        const baseUrl = "Procurement/F10_Negotiation";
        function Create(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Submit(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function OwnerEstimateReviewImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse<RfqItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/F10_Negotiation/Create",
            Update = "Procurement/F10_Negotiation/Update",
            Delete = "Procurement/F10_Negotiation/Delete",
            Retrieve = "Procurement/F10_Negotiation/Retrieve",
            List = "Procurement/F10_Negotiation/List",
            Submit = "Procurement/F10_Negotiation/Submit",
            OwnerEstimateReviewImport = "Procurement/F10_Negotiation/OwnerEstimateReviewImport"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface F10_ProcParticipantForm {
        ProcurementId: Serenity.StringEditor;
        SequenceNo: Serenity.IntegerEditor;
        VendorId: Serenity.LookupEditor;
        PriceDocumentFile: Serenity.ImageUploadEditor;
        PriceDocumentName: Serenity.StringEditor;
        TechSpecDocFile: Serenity.ImageUploadEditor;
        TechSpecDocName: Serenity.StringEditor;
        SupportingLetterFile: Serenity.ImageUploadEditor;
        SupportingLetterName: Serenity.StringEditor;
        CatalogFile: Serenity.ImageUploadEditor;
        CatalogName: Serenity.StringEditor;
        SubmitDocTnc: Serenity.BooleanEditor;
        SubmitDocTncDate: Serenity.DateEditor;
        AdminDocExists: Serenity.EnumEditor;
        TechSpecDocExists: Serenity.EnumEditor;
        SupportingLetterExists: Serenity.EnumEditor;
        CatalogExists: Serenity.EnumEditor;
        OpeningDocDesc: Serenity.TextAreaEditor;
        AdminDocAtk: Serenity.LookupEditor;
        TechSpecDocAtk: Serenity.LookupEditor;
        SupportingLetterAtk: Serenity.LookupEditor;
        CatalogAtk: Serenity.LookupEditor;
        EvaluationDesc: Serenity.TextAreaEditor;
        ClarificationRequest: Serenity.TextAreaEditor;
        EvaluationConclusionId: Serenity.LookupEditor;
        ClarificationOffer: Serenity.TextAreaEditor;
        ClarificationResult: Serenity.TextAreaEditor;
        Source: Serenity.StringEditor;
        F5ParticipantSubmitDate: Serenity.DateTimeEditor;
        F5ParticipantSubmitBy: Serenity.StringEditor;
        FinalBidPrice: Serenity.DecimalEditor;
        SubmitObjection: _Ext.YaTidakEditor;
        ObjectionDescription: Serenity.TextAreaEditor;
        F15ParticipantSubmitDate: Serenity.DateTimeEditor;
        F15ParticipantSubmitBy: Serenity.StringEditor;
        Invitation: Serenity.EnumEditor;
    }
    class F10_ProcParticipantForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface F10_ProcParticipantItemForm {
        ProcParticipantId: Serenity.StringEditor;
        ProcurementId: Serenity.StringEditor;
        RfqItemId: Serenity.StringEditor;
        ProcParticipantVendorId: Serenity.StringEditor;
        VendorName: Serenity.StringEditor;
        BidPrice: Serenity.DecimalEditor;
        BidPriceVsOe: Serenity.DecimalEditor;
        BidPriceVsOePercentage: Serenity.DecimalEditor;
        Rank: Serenity.IntegerEditor;
        EvaluationDescription: Serenity.TextAreaEditor;
        NegotiationPrice: Serenity.DecimalEditor;
        NpVsOe: Serenity.DecimalEditor;
        NpVsOePercentage: Serenity.DecimalEditor;
        NegotiationRank: Serenity.IntegerEditor;
        NegotiationDesc: Serenity.TextAreaEditor;
        ProposeDisclaimer: Serenity.BooleanEditor;
        DisclaimerDesc: Serenity.StringEditor;
        EvaluationConclusionItemId: Serenity.LookupEditor;
    }
    class F10_ProcParticipantItemForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    namespace F10_ProcParticipantItemService {
        const baseUrl = "Procurement/F10_ProcParticipantItem";
        function Create(request: Serenity.SaveRequest<ProcParticipantItemRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProcParticipantItemRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcParticipantItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcParticipantItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/F10_ProcParticipantItem/Create",
            Update = "Procurement/F10_ProcParticipantItem/Update",
            Delete = "Procurement/F10_ProcParticipantItem/Delete",
            Retrieve = "Procurement/F10_ProcParticipantItem/Retrieve",
            List = "Procurement/F10_ProcParticipantItem/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    namespace F10_ProcParticipantService {
        const baseUrl = "Procurement/F10_ProcParticipant";
        function Create(request: Serenity.SaveRequest<ProcParticipantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProcParticipantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcParticipantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcParticipantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/F10_ProcParticipant/Create",
            Update = "Procurement/F10_ProcParticipant/Update",
            Delete = "Procurement/F10_ProcParticipant/Delete",
            Retrieve = "Procurement/F10_ProcParticipant/Retrieve",
            List = "Procurement/F10_ProcParticipant/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface F10_RfqItemForm {
        RfqItemId: Serenity.StringEditor;
        OwnerEstimate: Serenity.DecimalEditor;
        OwnerEstimateReview: Serenity.DecimalEditor;
        Item: Serenity.StringEditor;
        ShortText: Serenity.StringEditor;
        Material: Serenity.StringEditor;
        TargetQuantity: Serenity.DecimalEditor;
        OrderUnit: Serenity.StringEditor;
        PriceUnit: Serenity.DecimalEditor;
    }
    class F10_RfqItemForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    namespace F10_RfqItemService {
        const baseUrl = "Procurement/F10_RfqItem";
        function Create(request: Serenity.SaveRequest<RfqItemRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RfqItemRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RfqItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RfqItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/F10_RfqItem/Create",
            Update = "Procurement/F10_RfqItem/Update",
            Delete = "Procurement/F10_RfqItem/Delete",
            Retrieve = "Procurement/F10_RfqItem/Retrieve",
            List = "Procurement/F10_RfqItem/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    interface F11_AgreementRow {
        EmailParticipant?: string;
        Agreement?: string;
        ProcurementTypeName?: string;
        ProcurementTypeDescription?: string;
        StatusName?: string;
        StatusDescription?: string;
        OfficeAddressName?: string;
        OfficeAddressDescription?: string;
        OfficeAddressAddressTypeId?: number;
        ProcValueRangeName?: string;
        ProcValueRangeDescription?: string;
        CommitteeTypeName?: string;
        CommitteeTypeDescription?: string;
        DestinationName?: string;
        DestinationDescription?: string;
        DestinationAddressTypeId?: number;
        ContractTypeName?: string;
        ContractTypeDescription?: string;
        CurrencyName?: string;
        CurrencyDescription?: string;
        DocSubmitMethodName?: string;
        DocSubmitMethodDescription?: string;
        OrderTypeName?: string;
        OrderTypeDescription?: string;
        ProcurementMethodName?: string;
        ProcurementMethodDescription?: string;
    }
    namespace F11_AgreementRow {
        const idProperty = "EmailParticipant";
        const nameProperty = "Agreement";
        const localTextPrefix = "Procurement.F11_Agreement";
        const enum Fields {
            EmailParticipant = "EmailParticipant",
            Agreement = "Agreement",
            ProcurementTypeName = "ProcurementTypeName",
            ProcurementTypeDescription = "ProcurementTypeDescription",
            StatusName = "StatusName",
            StatusDescription = "StatusDescription",
            OfficeAddressName = "OfficeAddressName",
            OfficeAddressDescription = "OfficeAddressDescription",
            OfficeAddressAddressTypeId = "OfficeAddressAddressTypeId",
            ProcValueRangeName = "ProcValueRangeName",
            ProcValueRangeDescription = "ProcValueRangeDescription",
            CommitteeTypeName = "CommitteeTypeName",
            CommitteeTypeDescription = "CommitteeTypeDescription",
            DestinationName = "DestinationName",
            DestinationDescription = "DestinationDescription",
            DestinationAddressTypeId = "DestinationAddressTypeId",
            ContractTypeName = "ContractTypeName",
            ContractTypeDescription = "ContractTypeDescription",
            CurrencyName = "CurrencyName",
            CurrencyDescription = "CurrencyDescription",
            DocSubmitMethodName = "DocSubmitMethodName",
            DocSubmitMethodDescription = "DocSubmitMethodDescription",
            OrderTypeName = "OrderTypeName",
            OrderTypeDescription = "OrderTypeDescription",
            ProcurementMethodName = "ProcurementMethodName",
            ProcurementMethodDescription = "ProcurementMethodDescription"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface F11_ProposeWinnerForm {
        ProcurementTypeId: Serenity.LookupEditor;
        Status: Serenity.LookupEditor;
        CollectiveNumber: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        Classification: Serenity.StringEditor;
        Qualification: Serenity.StringEditor;
        ProcAgreement: Serenity.EnumEditor;
        ProcAgreementDate: Serenity.DateTimeEditor;
        WinnerNominationDate: Serenity.DateTimeEditor;
        ProcAsApproved: Serenity.EnumEditor;
        ProcAsApprovedDate: Serenity.DateEditor;
        ProcAsDesc: Serenity.StringEditor;
        FinalConclusionDesc: Serenity.TextAreaEditor;
        ProcRejectTender: Serenity.EnumEditor;
        ProcRejectTenderDesc: Serenity.TextAreaEditor;
        F11SubmitDate: Serenity.DateTimeEditor;
        F11SubmitBy: Serenity.StringEditor;
        ProcurementMethodId: Serenity.LookupEditor;
    }
    class F11_ProposeWinnerForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    namespace F11_ProposeWinnerService {
        const baseUrl = "Procurement/F11_ProposeWinner";
        function Create(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Submit(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function SendMailReject(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function SendMail(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/F11_ProposeWinner/Create",
            Update = "Procurement/F11_ProposeWinner/Update",
            Delete = "Procurement/F11_ProposeWinner/Delete",
            Retrieve = "Procurement/F11_ProposeWinner/Retrieve",
            List = "Procurement/F11_ProposeWinner/List",
            Submit = "Procurement/F11_ProposeWinner/Submit",
            SendMailReject = "Procurement/F11_ProposeWinner/SendMailReject",
            SendMail = "Procurement/F11_ProposeWinner/SendMail"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface F12_ProcAsForm {
        ProcurementTypeId: Serenity.LookupEditor;
        Status: Serenity.LookupEditor;
        CollectiveNumber: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        Classification: Serenity.StringEditor;
        Qualification: Serenity.StringEditor;
        ProcAsRequired: Serenity.EnumEditor;
        WinnerNominationDate: Serenity.DateTimeEditor;
        ProcAsApproved: Serenity.EnumEditor;
        ProcAsApprovedDate: Serenity.DateEditor;
        ProcAsDesc: Serenity.StringEditor;
        F12SubmitDate: Serenity.DateTimeEditor;
        F12SubmitBy: Serenity.StringEditor;
        ProcurementMethodId: Serenity.LookupEditor;
    }
    class F12_ProcAsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    namespace F12_ProcAsService {
        const baseUrl = "Procurement/F12_ProcAs";
        function Create(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Submit(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/F12_ProcAs/Create",
            Update = "Procurement/F12_ProcAs/Update",
            Delete = "Procurement/F12_ProcAs/Delete",
            Retrieve = "Procurement/F12_ProcAs/Retrieve",
            List = "Procurement/F12_ProcAs/List",
            Submit = "Procurement/F12_ProcAs/Submit"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface F13_ProcParticipantForm {
        ProcurementId: Serenity.StringEditor;
        SequenceNo: Serenity.IntegerEditor;
        VendorId: Serenity.LookupEditor;
        PriceDocumentFile: Serenity.ImageUploadEditor;
        PriceDocumentName: Serenity.StringEditor;
        TechSpecDocFile: Serenity.ImageUploadEditor;
        TechSpecDocName: Serenity.StringEditor;
        SupportingLetterFile: Serenity.ImageUploadEditor;
        SupportingLetterName: Serenity.StringEditor;
        CatalogFile: Serenity.ImageUploadEditor;
        CatalogName: Serenity.StringEditor;
        SubmitDocTnc: Serenity.BooleanEditor;
        SubmitDocTncDate: Serenity.DateEditor;
        AdminDocExists: Serenity.EnumEditor;
        TechSpecDocExists: Serenity.EnumEditor;
        SupportingLetterExists: Serenity.EnumEditor;
        CatalogExists: Serenity.EnumEditor;
        OpeningDocDesc: Serenity.TextAreaEditor;
        AdminDocAtk: Serenity.LookupEditor;
        TechSpecDocAtk: Serenity.LookupEditor;
        SupportingLetterAtk: Serenity.LookupEditor;
        CatalogAtk: Serenity.LookupEditor;
        EvaluationDesc: Serenity.TextAreaEditor;
        ClarificationRequest: Serenity.TextAreaEditor;
        EvaluationConclusionId: Serenity.LookupEditor;
        ClarificationOffer: Serenity.TextAreaEditor;
        ClarificationResult: Serenity.TextAreaEditor;
        Source: Serenity.StringEditor;
        F5ParticipantSubmitDate: Serenity.DateTimeEditor;
        F5ParticipantSubmitBy: Serenity.StringEditor;
        FinalBidPrice: Serenity.DecimalEditor;
    }
    class F13_ProcParticipantForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    namespace F13_ProcParticipantService {
        const baseUrl = "Procurement/F13_ProcParticipant";
        function Create(request: Serenity.SaveRequest<ProcParticipantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProcParticipantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcParticipantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcParticipantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/F13_ProcParticipant/Create",
            Update = "Procurement/F13_ProcParticipant/Update",
            Delete = "Procurement/F13_ProcParticipant/Delete",
            Retrieve = "Procurement/F13_ProcParticipant/Retrieve",
            List = "Procurement/F13_ProcParticipant/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface F13_ProcResultDecisionForm {
        ProcurementTypeId: Serenity.LookupEditor;
        Status: Serenity.LookupEditor;
        CollectiveNumber: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        Classification: Serenity.StringEditor;
        Qualification: Serenity.StringEditor;
        ProcParticipant: F13_ProcParticipantsEditor;
        F13SubmitDate: Serenity.DateTimeEditor;
        F13SubmitBy: Serenity.StringEditor;
        FinalConclusionDesc: Serenity.TextAreaEditor;
    }
    class F13_ProcResultDecisionForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    namespace F13_ProcResultDecisionService {
        const baseUrl = "Procurement/F13_ProcResultDecision";
        function Create(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Approve(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Reject(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function SendMailApprove(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function SendMailReject(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/F13_ProcResultDecision/Create",
            Update = "Procurement/F13_ProcResultDecision/Update",
            Delete = "Procurement/F13_ProcResultDecision/Delete",
            Retrieve = "Procurement/F13_ProcResultDecision/Retrieve",
            List = "Procurement/F13_ProcResultDecision/List",
            Approve = "Procurement/F13_ProcResultDecision/Approve",
            Reject = "Procurement/F13_ProcResultDecision/Reject",
            SendMailApprove = "Procurement/F13_ProcResultDecision/SendMailApprove",
            SendMailReject = "Procurement/F13_ProcResultDecision/SendMailReject"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface F13_RfqItemForm {
        ProcurementId: Serenity.StringEditor;
        OwnerEstimateReview: Serenity.DecimalEditor;
        OwnerEstimate: Serenity.DecimalEditor;
        PurchasingDocument: Serenity.StringEditor;
        Item: Serenity.StringEditor;
        DeletionIndicator: Serenity.StringEditor;
        RfqStatus: Serenity.StringEditor;
        LastChangedOn: Serenity.DateEditor;
        ShortText: Serenity.StringEditor;
        Material: Serenity.StringEditor;
        Plant: Serenity.StringEditor;
        StorageLocation: Serenity.StringEditor;
        ReqTrackingNumber: Serenity.StringEditor;
        MaterialGroup: Serenity.StringEditor;
        PurchasingInfoRec: Serenity.StringEditor;
        VendorMaterialNo: Serenity.StringEditor;
        TargetQuantity: Serenity.DecimalEditor;
        OrderQuantity: Serenity.DecimalEditor;
        OrderUnit: Serenity.StringEditor;
        OrderPriceUnit: Serenity.StringEditor;
        QuantityConversion: Serenity.DecimalEditor;
        EqualTo: Serenity.DecimalEditor;
        Denominator: Serenity.DecimalEditor;
        NetOrderPrice: Serenity.DecimalEditor;
        PriceUnit: Serenity.DecimalEditor;
        NetOrderValue: Serenity.DecimalEditor;
        GrossOrderValue: Serenity.DecimalEditor;
        QuotationDeadline: Serenity.DateEditor;
        GrProcessingTime: Serenity.DecimalEditor;
        TaxCode: Serenity.StringEditor;
        BaseUnitOfMeasure: Serenity.StringEditor;
        ShippingInstr: Serenity.StringEditor;
        OaTargetValue: Serenity.DecimalEditor;
        PriceDate: Serenity.StringEditor;
        PurchDocCategory: Serenity.StringEditor;
        EffectiveValue: Serenity.DecimalEditor;
        AffectsCommitments: Serenity.StringEditor;
        MaterialType: Serenity.StringEditor;
        SubitemCategory: Serenity.StringEditor;
        SubItems: Serenity.StringEditor;
        Subtotal1: Serenity.DecimalEditor;
        Subtotal2: Serenity.DecimalEditor;
        Subtotal3: Serenity.DecimalEditor;
        Subtotal4: Serenity.DecimalEditor;
        Subtotal5: Serenity.DecimalEditor;
    }
    class F13_RfqItemForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    namespace F13_RfqItemService {
        const baseUrl = "Procurement/F13_RfqItem";
        function Create(request: Serenity.SaveRequest<RfqItemRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RfqItemRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RfqItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RfqItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/F13_RfqItem/Create",
            Update = "Procurement/F13_RfqItem/Update",
            Delete = "Procurement/F13_RfqItem/Delete",
            Retrieve = "Procurement/F13_RfqItem/Retrieve",
            List = "Procurement/F13_RfqItem/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    interface F13_StatusF10Row {
        EmailParticipant?: string;
        IdStatusEvaluation?: number;
        NameStatusEvaluation?: string;
        DescConclusion?: string;
        ProcurementTypeName?: string;
        ProcurementTypeDescription?: string;
        StatusName?: string;
        StatusDescription?: string;
        OfficeAddressName?: string;
        OfficeAddressDescription?: string;
        OfficeAddressAddressTypeId?: number;
        ProcValueRangeName?: string;
        ProcValueRangeDescription?: string;
        CommitteeTypeName?: string;
        CommitteeTypeDescription?: string;
        DestinationName?: string;
        DestinationDescription?: string;
        DestinationAddressTypeId?: number;
        ContractTypeName?: string;
        ContractTypeDescription?: string;
        CurrencyName?: string;
        CurrencyDescription?: string;
        DocSubmitMethodName?: string;
        DocSubmitMethodDescription?: string;
        OrderTypeName?: string;
        OrderTypeDescription?: string;
        ProcurementMethodName?: string;
        ProcurementMethodDescription?: string;
    }
    namespace F13_StatusF10Row {
        const idProperty = "EmailParticipant";
        const nameProperty = "NameStatusEvaluation";
        const localTextPrefix = "Procurement.F13_StatusF10";
        const enum Fields {
            EmailParticipant = "EmailParticipant",
            IdStatusEvaluation = "IdStatusEvaluation",
            NameStatusEvaluation = "NameStatusEvaluation",
            DescConclusion = "DescConclusion",
            ProcurementTypeName = "ProcurementTypeName",
            ProcurementTypeDescription = "ProcurementTypeDescription",
            StatusName = "StatusName",
            StatusDescription = "StatusDescription",
            OfficeAddressName = "OfficeAddressName",
            OfficeAddressDescription = "OfficeAddressDescription",
            OfficeAddressAddressTypeId = "OfficeAddressAddressTypeId",
            ProcValueRangeName = "ProcValueRangeName",
            ProcValueRangeDescription = "ProcValueRangeDescription",
            CommitteeTypeName = "CommitteeTypeName",
            CommitteeTypeDescription = "CommitteeTypeDescription",
            DestinationName = "DestinationName",
            DestinationDescription = "DestinationDescription",
            DestinationAddressTypeId = "DestinationAddressTypeId",
            ContractTypeName = "ContractTypeName",
            ContractTypeDescription = "ContractTypeDescription",
            CurrencyName = "CurrencyName",
            CurrencyDescription = "CurrencyDescription",
            DocSubmitMethodName = "DocSubmitMethodName",
            DocSubmitMethodDescription = "DocSubmitMethodDescription",
            OrderTypeName = "OrderTypeName",
            OrderTypeDescription = "OrderTypeDescription",
            ProcurementMethodName = "ProcurementMethodName",
            ProcurementMethodDescription = "ProcurementMethodDescription"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    interface F14_VendorApprovalRow {
        Email?: string;
        NamaVendor?: string;
        collectivenumber?: string;
        title?: string;
        ProcurementTypeName?: string;
        ProcurementTypeDescription?: string;
        StatusName?: string;
        StatusDescription?: string;
        OfficeAddressName?: string;
        OfficeAddressDescription?: string;
        OfficeAddressAddressTypeId?: number;
        ProcValueRangeName?: string;
        ProcValueRangeDescription?: string;
        CommitteeTypeName?: string;
        CommitteeTypeDescription?: string;
        DestinationName?: string;
        DestinationDescription?: string;
        DestinationAddressTypeId?: number;
        ContractTypeName?: string;
        ContractTypeDescription?: string;
        CurrencyName?: string;
        CurrencyDescription?: string;
        DocSubmitMethodName?: string;
        DocSubmitMethodDescription?: string;
        OrderTypeName?: string;
        OrderTypeDescription?: string;
        ProcurementMethodName?: string;
        ProcurementMethodDescription?: string;
    }
    namespace F14_VendorApprovalRow {
        const idProperty = "Email";
        const nameProperty = "NamaVendor";
        const localTextPrefix = "Procurement.F14_VendorApproval";
        const enum Fields {
            Email = "Email",
            NamaVendor = "NamaVendor",
            collectivenumber = "collectivenumber",
            title = "title",
            ProcurementTypeName = "ProcurementTypeName",
            ProcurementTypeDescription = "ProcurementTypeDescription",
            StatusName = "StatusName",
            StatusDescription = "StatusDescription",
            OfficeAddressName = "OfficeAddressName",
            OfficeAddressDescription = "OfficeAddressDescription",
            OfficeAddressAddressTypeId = "OfficeAddressAddressTypeId",
            ProcValueRangeName = "ProcValueRangeName",
            ProcValueRangeDescription = "ProcValueRangeDescription",
            CommitteeTypeName = "CommitteeTypeName",
            CommitteeTypeDescription = "CommitteeTypeDescription",
            DestinationName = "DestinationName",
            DestinationDescription = "DestinationDescription",
            DestinationAddressTypeId = "DestinationAddressTypeId",
            ContractTypeName = "ContractTypeName",
            ContractTypeDescription = "ContractTypeDescription",
            CurrencyName = "CurrencyName",
            CurrencyDescription = "CurrencyDescription",
            DocSubmitMethodName = "DocSubmitMethodName",
            DocSubmitMethodDescription = "DocSubmitMethodDescription",
            OrderTypeName = "OrderTypeName",
            OrderTypeDescription = "OrderTypeDescription",
            ProcurementMethodName = "ProcurementMethodName",
            ProcurementMethodDescription = "ProcurementMethodDescription"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface F14_WinnerAnnouncementForm {
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
    class F14_WinnerAnnouncementForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    namespace F14_WinnerAnnouncementService {
        const baseUrl = "Procurement/F14_WinnerAnnouncement";
        function Create(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Submit(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function SendMail(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/F14_WinnerAnnouncement/Create",
            Update = "Procurement/F14_WinnerAnnouncement/Update",
            Delete = "Procurement/F14_WinnerAnnouncement/Delete",
            Retrieve = "Procurement/F14_WinnerAnnouncement/Retrieve",
            List = "Procurement/F14_WinnerAnnouncement/List",
            Submit = "Procurement/F14_WinnerAnnouncement/Submit",
            SendMail = "Procurement/F14_WinnerAnnouncement/SendMail"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface F15_ObjectionProcessForm {
        VendorId: Serenity.LookupEditor;
        EvaluationConclusionId: Serenity.LookupEditor;
        SubmitObjection: _Ext.YaTidakEditor;
        ObjectionTerms: _Ext.StaticTextBlock;
        ObjectionDescription: Serenity.TextAreaEditor;
    }
    class F15_ObjectionProcessForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    namespace F15_ObjectionProcessService {
        const baseUrl = "Procurement/F15_ObjectionProcess";
        function Create(request: Serenity.SaveRequest<ProcParticipantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProcParticipantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcParticipantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcParticipantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Submit(request: Serenity.SaveRequest<ProcParticipantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/F15_ObjectionProcess/Create",
            Update = "Procurement/F15_ObjectionProcess/Update",
            Delete = "Procurement/F15_ObjectionProcess/Delete",
            Retrieve = "Procurement/F15_ObjectionProcess/Retrieve",
            List = "Procurement/F15_ObjectionProcess/List",
            Submit = "Procurement/F15_ObjectionProcess/Submit"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface F16_WinnerDesignationForm {
        ProcurementTypeId: Serenity.LookupEditor;
        Status: Serenity.LookupEditor;
        CollectiveNumber: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        Classification: Serenity.StringEditor;
        Qualification: Serenity.StringEditor;
        TemporaryPic: Serenity.StringEditor;
        F13SubmitDate: Serenity.DateTimeEditor;
        F16SubmitDate: Serenity.DateTimeEditor;
        F16SubmitBy: Serenity.StringEditor;
    }
    class F16_WinnerDesignationForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    namespace F16_WinnerDesignationService {
        const baseUrl = "Procurement/F16_WinnerDesignation";
        function Create(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Submit(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/F16_WinnerDesignation/Create",
            Update = "Procurement/F16_WinnerDesignation/Update",
            Delete = "Procurement/F16_WinnerDesignation/Delete",
            Retrieve = "Procurement/F16_WinnerDesignation/Retrieve",
            List = "Procurement/F16_WinnerDesignation/List",
            Submit = "Procurement/F16_WinnerDesignation/Submit"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface F17_PurchOrderDocUploadForm {
        ProcurementTypeId: Serenity.LookupEditor;
        Status: Serenity.LookupEditor;
        CollectiveNumber: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        Classification: Serenity.StringEditor;
        Qualification: Serenity.StringEditor;
        PoDocName: Serenity.StringEditor;
        PoNumber: Serenity.StringEditor;
        PoDocFile: Serenity.ImageUploadEditor;
        F13SubmitDate: Serenity.DateTimeEditor;
        F17SubmitDate: Serenity.DateTimeEditor;
        F17SubmitBy: Serenity.StringEditor;
    }
    class F17_PurchOrderDocUploadForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    namespace F17_PurchOrderDocUploadService {
        const baseUrl = "Procurement/F17_PurchOrderDocUpload";
        function Create(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Submit(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/F17_PurchOrderDocUpload/Create",
            Update = "Procurement/F17_PurchOrderDocUpload/Update",
            Delete = "Procurement/F17_PurchOrderDocUpload/Delete",
            Retrieve = "Procurement/F17_PurchOrderDocUpload/Retrieve",
            List = "Procurement/F17_PurchOrderDocUpload/List",
            Submit = "Procurement/F17_PurchOrderDocUpload/Submit"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    interface F19_ApprovalRow {
        id?: number;
        role?: number;
        committee?: number;
        mandatory?: number;
        locale?: number;
        ApprovalStatus?: number;
        ProcurementTypeName?: string;
        ProcurementTypeDescription?: string;
        StatusName?: string;
        StatusDescription?: string;
        OfficeAddressName?: string;
        OfficeAddressDescription?: string;
        OfficeAddressAddressTypeId?: number;
        ProcValueRangeName?: string;
        ProcValueRangeDescription?: string;
        CommitteeTypeName?: string;
        CommitteeTypeDescription?: string;
        DestinationName?: string;
        DestinationDescription?: string;
        DestinationAddressTypeId?: number;
        ContractTypeName?: string;
        ContractTypeDescription?: string;
        CurrencyName?: string;
        CurrencyDescription?: string;
        DocSubmitMethodName?: string;
        DocSubmitMethodDescription?: string;
        OrderTypeName?: string;
        OrderTypeDescription?: string;
        ProcurementMethodName?: string;
        ProcurementMethodDescription?: string;
    }
    namespace F19_ApprovalRow {
        const idProperty = "id";
        const nameProperty = "ProcurementTypeName";
        const localTextPrefix = "Procurement.F19_Approval";
        const enum Fields {
            id = "id",
            role = "role",
            committee = "committee",
            mandatory = "mandatory",
            locale = "locale",
            ApprovalStatus = "ApprovalStatus",
            ProcurementTypeName = "ProcurementTypeName",
            ProcurementTypeDescription = "ProcurementTypeDescription",
            StatusName = "StatusName",
            StatusDescription = "StatusDescription",
            OfficeAddressName = "OfficeAddressName",
            OfficeAddressDescription = "OfficeAddressDescription",
            OfficeAddressAddressTypeId = "OfficeAddressAddressTypeId",
            ProcValueRangeName = "ProcValueRangeName",
            ProcValueRangeDescription = "ProcValueRangeDescription",
            CommitteeTypeName = "CommitteeTypeName",
            CommitteeTypeDescription = "CommitteeTypeDescription",
            DestinationName = "DestinationName",
            DestinationDescription = "DestinationDescription",
            DestinationAddressTypeId = "DestinationAddressTypeId",
            ContractTypeName = "ContractTypeName",
            ContractTypeDescription = "ContractTypeDescription",
            CurrencyName = "CurrencyName",
            CurrencyDescription = "CurrencyDescription",
            DocSubmitMethodName = "DocSubmitMethodName",
            DocSubmitMethodDescription = "DocSubmitMethodDescription",
            OrderTypeName = "OrderTypeName",
            OrderTypeDescription = "OrderTypeDescription",
            ProcurementMethodName = "ProcurementMethodName",
            ProcurementMethodDescription = "ProcurementMethodDescription"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface F19_CommitteeApprovalForm {
        ProcurementId: Serenity.StringEditor;
        ProcurementTypeId: Serenity.LookupEditor;
        Status: Serenity.LookupEditor;
        CollectiveNumber: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        Classification: Serenity.StringEditor;
        Qualification: Serenity.StringEditor;
        CommitteeMember: F19_CommitteeMembersEditor;
        ProcParticipant: F19_ProcParticipantsEditor;
        DocSubmitMethodId: Serenity.LookupEditor;
        TenderDocSubmitOpenDate: Serenity.DateTimeEditor;
        TenderDocSubmitCloseDate: Serenity.DateTimeEditor;
        F19SubmitDate: Serenity.DateTimeEditor;
        F19SubmitBy: Serenity.StringEditor;
    }
    class F19_CommitteeApprovalForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    namespace F19_CommitteeApprovalService {
        const baseUrl = "Procurement/F19_CommitteeApproval";
        function Create(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function SubmitCreate(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Approve(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Reject(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/F19_CommitteeApproval/Create",
            Update = "Procurement/F19_CommitteeApproval/Update",
            Delete = "Procurement/F19_CommitteeApproval/Delete",
            Retrieve = "Procurement/F19_CommitteeApproval/Retrieve",
            List = "Procurement/F19_CommitteeApproval/List",
            SubmitCreate = "Procurement/F19_CommitteeApproval/SubmitCreate",
            Approve = "Procurement/F19_CommitteeApproval/Approve",
            Reject = "Procurement/F19_CommitteeApproval/Reject"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface F19_CommitteeMemberForm {
        ProcurementId: Serenity.StringEditor;
        RoleId: Serenity.LookupEditor;
        CommitteeRoleId: Serenity.LookupEditor;
        ApprovalStatus: Serenity.EnumEditor;
        ApprovalDate: Serenity.DateEditor;
        ApprovalBy: Serenity.StringEditor;
    }
    class F19_CommitteeMemberForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    namespace F19_CommitteeMemberService {
        const baseUrl = "Procurement/F19_CommitteeMember";
        function Create(request: Serenity.SaveRequest<CommitteeMemberRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CommitteeMemberRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CommitteeMemberRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CommitteeMemberRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/F19_CommitteeMember/Create",
            Update = "Procurement/F19_CommitteeMember/Update",
            Delete = "Procurement/F19_CommitteeMember/Delete",
            Retrieve = "Procurement/F19_CommitteeMember/Retrieve",
            List = "Procurement/F19_CommitteeMember/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface F19_ProcParticipantForm {
        ProcurementId: Serenity.StringEditor;
        SequenceNo: Serenity.IntegerEditor;
        VendorId: Serenity.LookupEditor;
        VendorName: Serenity.StringEditor;
        PriceDocumentFile: Serenity.ImageUploadEditor;
        TechSpecDocFile: Serenity.ImageUploadEditor;
        SupportingLetterFile: Serenity.ImageUploadEditor;
        CatalogFile: Serenity.ImageUploadEditor;
        AdminDocAtk: Serenity.LookupEditor;
        TechSpecDocAtk: Serenity.LookupEditor;
        SupportingLetterAtk: Serenity.LookupEditor;
        CatalogAtk: Serenity.LookupEditor;
        EvaluationDesc: Serenity.TextAreaEditor;
        ClarificationRequest: Serenity.TextAreaEditor;
        EvaluationConclusionId: Serenity.LookupEditor;
        ProcParticipantItems: F7_ProcParticipantItemsEditor;
        F5ParticipantSubmitDate: Serenity.DateTimeEditor;
        F5ParticipantSubmitBy: Serenity.StringEditor;
    }
    class F19_ProcParticipantForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface F19_ProcParticipantItemForm {
        ProcParticipantItemId: Serenity.StringEditor;
        ItemSequence: Serenity.StringEditor;
        Material: Serenity.StringEditor;
        ShortText: Serenity.TextAreaEditor;
        BidPrice: Serenity.DecimalEditor;
        RfqItemTargetQuantity: Serenity.DecimalEditor;
        RfqItemOrderUnit: Serenity.StringEditor;
        ProcurementDocSubmitMethodId: Serenity.IntegerEditor;
    }
    class F19_ProcParticipantItemForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    namespace F19_ProcParticipantItemService {
        const baseUrl = "Procurement/F19_ProcParticipantItem";
        function Create(request: Serenity.SaveRequest<ProcParticipantItemRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProcParticipantItemRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcParticipantItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcParticipantItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/F19_ProcParticipantItem/Create",
            Update = "Procurement/F19_ProcParticipantItem/Update",
            Delete = "Procurement/F19_ProcParticipantItem/Delete",
            Retrieve = "Procurement/F19_ProcParticipantItem/Retrieve",
            List = "Procurement/F19_ProcParticipantItem/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    namespace F19_ProcParticipantService {
        const baseUrl = "Procurement/F19_ProcParticipant";
        function Create(request: Serenity.SaveRequest<ProcParticipantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProcParticipantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcParticipantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcParticipantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/F19_ProcParticipant/Create",
            Update = "Procurement/F19_ProcParticipant/Update",
            Delete = "Procurement/F19_ProcParticipant/Delete",
            Retrieve = "Procurement/F19_ProcParticipant/Retrieve",
            List = "Procurement/F19_ProcParticipant/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface F1_BLSelectionAdjustmentForm {
        CollectiveNumber: Serenity.StringEditor;
        ProcurementId: Serenity.StringEditor;
        ProcurementTypeId: Serenity.LookupEditor;
        Status: Serenity.LookupEditor;
        Title: Serenity.StringEditor;
        Classification: Serenity.StringEditor;
        Qualification: Serenity.StringEditor;
        RequestedBy: Serenity.StringEditor;
        RequestorPosition: Serenity.StringEditor;
        ApprovedBy: Serenity.StringEditor;
        ApproverPosition: Serenity.StringEditor;
        SapBidderListCreatedBy: Serenity.StringEditor;
        SapBidderListCreatedDate: Serenity.DateTimeEditor;
        OfficeAddress: Serenity.LookupEditor;
        ProcValueRangeId: Serenity.LookupEditor;
        PerformanceGuaranteeRequired: _Ext.YaTidakEditor;
        GuaranteePercentage: Serenity.DecimalEditor;
        CommitteeTypeId: Serenity.LookupEditor;
        ProcurementMethodId: Serenity.LookupEditor;
        CommitteeMember: CommitteeMembersEditor;
        ProcParticipant: ProcParticipantsEditor;
        CreatedBy: Serenity.StringEditor;
        CreatedDate: Serenity.DateTimeEditor;
        F1SubmitDate: Serenity.DateTimeEditor;
        F1SubmitBy: Serenity.StringEditor;
    }
    class F1_BLSelectionAdjustmentForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    namespace F1_BLSelectionAdjustmentService {
        const baseUrl = "Procurement/F1_BLSelectionAdjustment";
        function Create(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetBidderListHeader(request: BidderListServiceRequest, onSuccess?: (response: ProcurementRow) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function SubmitCreate(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function SubmitUpdate(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/F1_BLSelectionAdjustment/Create",
            Update = "Procurement/F1_BLSelectionAdjustment/Update",
            Delete = "Procurement/F1_BLSelectionAdjustment/Delete",
            Retrieve = "Procurement/F1_BLSelectionAdjustment/Retrieve",
            List = "Procurement/F1_BLSelectionAdjustment/List",
            GetBidderListHeader = "Procurement/F1_BLSelectionAdjustment/GetBidderListHeader",
            SubmitCreate = "Procurement/F1_BLSelectionAdjustment/SubmitCreate",
            SubmitUpdate = "Procurement/F1_BLSelectionAdjustment/SubmitUpdate"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface F20_ProcPrForm {
        ProcurementId: Serenity.StringEditor;
        PrNo: Serenity.StringEditor;
        InsertDate: Serenity.DateEditor;
        InsertBy: Serenity.StringEditor;
    }
    class F20_ProcPrForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    namespace F20_ProcPrService {
        const baseUrl = "Procurement/F20_ProcPr";
        function Create(request: Serenity.SaveRequest<ProcPrRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProcPrRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcPrRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcPrRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/F20_ProcPr/Create",
            Update = "Procurement/F20_ProcPr/Update",
            Delete = "Procurement/F20_ProcPr/Delete",
            Retrieve = "Procurement/F20_ProcPr/Retrieve",
            List = "Procurement/F20_ProcPr/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface F20_ProcurementForm {
        ProcurementTypeId: Serenity.LookupEditor;
        Status: Serenity.LookupEditor;
        CollectiveNumber: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        Classification: Serenity.StringEditor;
        Qualification: Serenity.StringEditor;
        RequestedBy: Serenity.StringEditor;
        RequestorPosition: Serenity.StringEditor;
        ApprovedBy: Serenity.StringEditor;
        ApproverPosition: Serenity.StringEditor;
        SapBidderListCreatedBy: Serenity.StringEditor;
        SapBidderListCreatedDate: Serenity.DateTimeEditor;
        CreatedBy: Serenity.StringEditor;
        CreatedDate: Serenity.DateTimeEditor;
        GuaranteePercentage: Serenity.DecimalEditor;
        OfficeAddress: Serenity.LookupEditor;
        ProcValueRangeId: Serenity.LookupEditor;
        CommitteeTypeId: Serenity.LookupEditor;
        PerformanceGuaranteeRequired: _Ext.YaTidakEditor;
        TenderPeriod: Serenity.IntegerEditor;
        DeliveryTime: Serenity.IntegerEditor;
        DestinationId: Serenity.LookupEditor;
        ContractTypeId: Serenity.LookupEditor;
        CurrencyId: Serenity.LookupEditor;
        DocSubmitMethodId: Serenity.LookupEditor;
        AanwijzingExists: Serenity.BooleanEditor;
        AanwijzingDate: Serenity.DateEditor;
        AanwijzingClosingDate: Serenity.DateEditor;
        AanwijzingLocation: Serenity.TextAreaEditor;
        AanwijzingClosingLocation: Serenity.TextAreaEditor;
        AanwijzingSecretary: Serenity.StringEditor;
        AanwijzingSummary: Serenity.TextAreaEditor;
        FieldSurveyExists: Serenity.EnumEditor;
        FieldSurveyAddress: Serenity.TextAreaEditor;
        ItbDocumentFile: Serenity.ImageUploadEditor;
        ItbDocumentName: Serenity.StringEditor;
        RksDocumentFile: Serenity.ImageUploadEditor;
        RksDocumentName: Serenity.StringEditor;
        TenderDocSubmitOpenDate: Serenity.DateTimeEditor;
        TenderDocSubmitCloseDate: Serenity.DateTimeEditor;
        OrderTypeId: Serenity.LookupEditor;
        PurchDocNum: Serenity.StringEditor;
        RfqDate: Serenity.DateTimeEditor;
        QuotationDeadline: Serenity.DateTimeEditor;
        PurchGroup: Serenity.StringEditor;
        PrNo: Serenity.StringEditor;
        AuthPersonName: Serenity.StringEditor;
        AuthPosition: Serenity.StringEditor;
        HeaderText: Serenity.TextAreaEditor;
        HeaderNote: Serenity.TextAreaEditor;
        WorkDescription: Serenity.TextAreaEditor;
        BankKey: Serenity.StringEditor;
        PoCover: Serenity.StringEditor;
        DeliveryAddress: Serenity.TextAreaEditor;
        ToPTargVal: Serenity.StringEditor;
        YourReference: Serenity.StringEditor;
        OurReference: Serenity.StringEditor;
        SalesPerson: Serenity.StringEditor;
        Telephone: Serenity.StringEditor;
        ValidityStart: Serenity.DateEditor;
        ValidityEnd: Serenity.DateEditor;
        ItemInterval: Serenity.DecimalEditor;
        SubItemInterval: Serenity.DecimalEditor;
        Warranty: Serenity.DateEditor;
        Language: Serenity.StringEditor;
        EvaluationClosingPriceDate: Serenity.DateEditor;
        ReviewOeRequired: _Ext.YaTidakEditor;
        ProcAgreement: Serenity.EnumEditor;
        ProcAgreementDate: Serenity.DateTimeEditor;
        ProcAsRequired: Serenity.EnumEditor;
        ProcAsApproved: Serenity.EnumEditor;
        ProcAsApprovedDate: Serenity.DateEditor;
        ProcAsDesc: Serenity.StringEditor;
        FinalConclusionDesc: Serenity.TextAreaEditor;
        WinnerNominationDate: Serenity.DateTimeEditor;
        ObjectionCloseDate: Serenity.DateTimeEditor;
        PoDocName: Serenity.StringEditor;
        TemporaryPic: Serenity.StringEditor;
        PoNumber: Serenity.StringEditor;
        PoDocFile: Serenity.ImageUploadEditor;
        F1SubmitDate: Serenity.DateTimeEditor;
        F1SubmitBy: Serenity.StringEditor;
        F2SubmitDate: Serenity.DateTimeEditor;
        F2SubmitBy: Serenity.StringEditor;
        F3SubmitDate: Serenity.DateTimeEditor;
        F3SubmitBy: Serenity.StringEditor;
        F31SubmitDate: Serenity.DateTimeEditor;
        F31SubmitBy: Serenity.StringEditor;
        F4SubmitDate: Serenity.DateTimeEditor;
        F4SubmitBy: Serenity.StringEditor;
        F5SubmitDate: Serenity.DateTimeEditor;
        F5SubmitBy: Serenity.StringEditor;
        F6SubmitDate: Serenity.DateTimeEditor;
        F6SubmitBy: Serenity.StringEditor;
        F7SubmitDate: Serenity.DateTimeEditor;
        F7SubmitBy: Serenity.StringEditor;
        F8SubmitDate: Serenity.DateTimeEditor;
        F8SubmitBy: Serenity.StringEditor;
        F9SubmitDate: Serenity.DateTimeEditor;
        F9SubmitBy: Serenity.StringEditor;
        F10SubmitDate: Serenity.DateTimeEditor;
        F10SubmitBy: Serenity.StringEditor;
        F11SubmitDate: Serenity.DateTimeEditor;
        F11SubmitBy: Serenity.StringEditor;
        F12SubmitDate: Serenity.DateTimeEditor;
        F12SubmitBy: Serenity.StringEditor;
        F13SubmitDate: Serenity.DateTimeEditor;
        F13SubmitBy: Serenity.StringEditor;
        F14SubmitDate: Serenity.DateTimeEditor;
        F14SubmitBy: Serenity.StringEditor;
        F15SubmitDate: Serenity.DateTimeEditor;
        F15SubmitBy: Serenity.StringEditor;
        F16SubmitDate: Serenity.DateTimeEditor;
        F16SubmitBy: Serenity.StringEditor;
        F17SubmitDate: Serenity.DateTimeEditor;
        F17SubmitBy: Serenity.StringEditor;
        ProcurementMethodId: Serenity.LookupEditor;
        District: Serenity.StringEditor;
        Csms: Serenity.StringEditor;
        MinScore: Serenity.TextAreaEditor;
    }
    class F20_ProcurementForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    namespace F20_ProcurementService {
        const baseUrl = "Procurement/F20_Procurement";
        function Create(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/F20_Procurement/Create",
            Update = "Procurement/F20_Procurement/Update",
            Delete = "Procurement/F20_Procurement/Delete",
            Retrieve = "Procurement/F20_Procurement/Retrieve",
            List = "Procurement/F20_Procurement/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface F20_PurchaseRequisitionTrackingForm {
        BuyerId: Serenity.LookupEditor;
        CostCenter: Serenity.StringEditor;
        ScanPrFile: Serenity.ImageUploadEditor;
        ScanPrName: Serenity.StringEditor;
        AssignDate: Serenity.DateEditor;
        AssignBy: Serenity.StringEditor;
        CreatedDate: Serenity.DateEditor;
        CreatedBy: Serenity.StringEditor;
        Status: Serenity.StringEditor;
        ProcPrItems: F20_ProcPrEditor;
    }
    class F20_PurchaseRequisitionTrackingForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    namespace F20_PurchaseRequisitionTrackingService {
        const baseUrl = "Procurement/F20_PurchaseRequisitionTracking";
        function Create(request: Serenity.SaveRequest<PurchaseRequisitionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PurchaseRequisitionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PurchaseRequisitionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PurchaseRequisitionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/F20_PurchaseRequisitionTracking/Create",
            Update = "Procurement/F20_PurchaseRequisitionTracking/Update",
            Delete = "Procurement/F20_PurchaseRequisitionTracking/Delete",
            Retrieve = "Procurement/F20_PurchaseRequisitionTracking/Retrieve",
            List = "Procurement/F20_PurchaseRequisitionTracking/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface F2_ProcurementDocCreationForm {
        ProcurementTypeId: Serenity.LookupEditor;
        Status: Serenity.LookupEditor;
        CollectiveNumber: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        Classification: Serenity.StringEditor;
        Qualification: Serenity.StringEditor;
        RequestedBy: Serenity.StringEditor;
        RequestorPosition: Serenity.StringEditor;
        ApprovedBy: Serenity.StringEditor;
        ApproverPosition: Serenity.StringEditor;
        SapBidderListCreatedBy: Serenity.StringEditor;
        SapBidderListCreatedDate: Serenity.DateTimeEditor;
        CreatedBy: Serenity.StringEditor;
        CreatedDate: Serenity.DateTimeEditor;
        TenderPeriod: Serenity.IntegerEditor;
        DeliveryTime: Serenity.IntegerEditor;
        DestinationId: Serenity.LookupEditor;
        ContractTypeId: Serenity.LookupEditor;
        CurrencyId: Serenity.LookupEditor;
        DocSubmitMethodId: Serenity.LookupEditor;
        AanwijzingExists: Serenity.BooleanEditor;
        AanwijzingDate: Serenity.DateEditor;
        AanwijzingClosingDate: Serenity.DateEditor;
        AanwijzingLocation: Serenity.TextAreaEditor;
        AanwijzingSecretary: Serenity.StringEditor;
        AanwijzingSummary: Serenity.TextAreaEditor;
        FieldSurveyExists: Serenity.EnumEditor;
        FieldSurveyAddress: Serenity.TextAreaEditor;
        RequestTerms: Serenity.HtmlNoteContentEditor;
        ItbDocumentFile: Serenity.ImageUploadEditor;
        ItbDocumentName: Serenity.StringEditor;
        RksDocumentFile: Serenity.ImageUploadEditor;
        RksDocumentName: Serenity.StringEditor;
        TenderDocSubmitOpenDate: Serenity.DateTimeEditor;
        TenderDocSubmitCloseDate: Serenity.DateTimeEditor;
        F2SubmitDate: Serenity.DateTimeEditor;
        F2SubmitBy: Serenity.StringEditor;
    }
    class F2_ProcurementDocCreationForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    namespace F2_ProcurementDocCreationService {
        const baseUrl = "Procurement/F2_ProcurementDocCreation";
        function Create(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Submit(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/F2_ProcurementDocCreation/Create",
            Update = "Procurement/F2_ProcurementDocCreation/Update",
            Delete = "Procurement/F2_ProcurementDocCreation/Delete",
            Retrieve = "Procurement/F2_ProcurementDocCreation/Retrieve",
            List = "Procurement/F2_ProcurementDocCreation/List",
            Submit = "Procurement/F2_ProcurementDocCreation/Submit"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    interface F3SpListRequest extends Serenity.ListRequest {
        ProcurementId?: number;
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface F3_1_InputOwnerEstimateForm {
        ProcurementTypeId: Serenity.LookupEditor;
        Status: Serenity.LookupEditor;
        CollectiveNumber: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        Classification: Serenity.StringEditor;
        Qualification: Serenity.StringEditor;
        F31SubmitDate: Serenity.DateTimeEditor;
        F31SubmitBy: Serenity.StringEditor;
        RfqItems: RfqItemsEditor;
    }
    class F3_1_InputOwnerEstimateForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    namespace F3_1_InputOwnerEstimateService {
        const baseUrl = "Procurement/F3_1_InputOwnerEstimate";
        function Create(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Submit(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse<RfqItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/F3_1_InputOwnerEstimate/Create",
            Update = "Procurement/F3_1_InputOwnerEstimate/Update",
            Delete = "Procurement/F3_1_InputOwnerEstimate/Delete",
            Retrieve = "Procurement/F3_1_InputOwnerEstimate/Retrieve",
            List = "Procurement/F3_1_InputOwnerEstimate/List",
            Submit = "Procurement/F3_1_InputOwnerEstimate/Submit",
            ExcelImport = "Procurement/F3_1_InputOwnerEstimate/ExcelImport"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface F3_CreateRFQForm {
        ProcurementTypeId: Serenity.LookupEditor;
        Status: Serenity.LookupEditor;
        CollectiveNumber: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        Classification: Serenity.StringEditor;
        Qualification: Serenity.StringEditor;
        AanwijzingExists: Serenity.BooleanEditor;
        TenderDocSubmitOpenDate: Serenity.DateTimeEditor;
        TenderDocSubmitCloseDate: Serenity.DateTimeEditor;
        CurrencyId: Serenity.LookupEditor;
        PurchDocNum: Serenity.StringEditor;
        OrderTypeId: Serenity.LookupEditor;
        RfqDate: Serenity.DateTimeEditor;
        QuotationDeadline: Serenity.DateTimeEditor;
        PurchGroup: Serenity.StringEditor;
        PrNo: Serenity.StringEditor;
        AuthPersonName: Serenity.StringEditor;
        AuthPosition: Serenity.StringEditor;
        DeliveryAddress: Serenity.TextAreaEditor;
        ToPTargVal: Serenity.StringEditor;
        YourReference: Serenity.StringEditor;
        OurReference: Serenity.StringEditor;
        SalesPerson: Serenity.StringEditor;
        Telephone: Serenity.StringEditor;
        ValidityStart: Serenity.DateEditor;
        ValidityEnd: Serenity.DateEditor;
        ItemInterval: Serenity.DecimalEditor;
        SubItemInterval: Serenity.DecimalEditor;
        Warranty: Serenity.DateEditor;
        Language: Serenity.StringEditor;
        F3SubmitDate: Serenity.DateTimeEditor;
        F3SubmitBy: Serenity.StringEditor;
        RfqItems: RfqItemsEditor;
        RfqTexts: RfqTextsEditor;
        ProcPurchaseRequests: PurchaseRequestsEditor;
    }
    class F3_CreateRFQForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    namespace F3_CreateRFQService {
        const baseUrl = "Procurement/F3_CreateRFQ";
        function Create(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Submit(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function SendMail(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function SendMailVendor(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetRFQ(request: RfqServiceRequest, onSuccess?: (response: ProcurementRow) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/F3_CreateRFQ/Create",
            Update = "Procurement/F3_CreateRFQ/Update",
            Delete = "Procurement/F3_CreateRFQ/Delete",
            Retrieve = "Procurement/F3_CreateRFQ/Retrieve",
            List = "Procurement/F3_CreateRFQ/List",
            Submit = "Procurement/F3_CreateRFQ/Submit",
            SendMail = "Procurement/F3_CreateRFQ/SendMail",
            SendMailVendor = "Procurement/F3_CreateRFQ/SendMailVendor",
            GetRFQ = "Procurement/F3_CreateRFQ/GetRFQ"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    interface F3_EmailVendorRow {
        EmailParticipant?: string;
        Username?: string;
        VendorName?: string;
        EvaluateConclusionName?: string;
        QuoteDesc?: string;
        ProcurementTypeName?: string;
        ProcurementTypeDescription?: string;
        StatusName?: string;
        StatusDescription?: string;
        OfficeAddressName?: string;
        OfficeAddressDescription?: string;
        OfficeAddressAddressTypeId?: number;
        ProcValueRangeName?: string;
        ProcValueRangeDescription?: string;
        CommitteeTypeName?: string;
        CommitteeTypeDescription?: string;
        DestinationName?: string;
        DestinationDescription?: string;
        DestinationAddressTypeId?: number;
        ContractTypeName?: string;
        ContractTypeDescription?: string;
        CurrencyName?: string;
        CurrencyDescription?: string;
        DocSubmitMethodName?: string;
        DocSubmitMethodDescription?: string;
        OrderTypeName?: string;
        OrderTypeDescription?: string;
        ProcurementMethodName?: string;
        ProcurementMethodDescription?: string;
    }
    namespace F3_EmailVendorRow {
        const idProperty = "EmailParticipant";
        const nameProperty = "EvaluateConclusionName";
        const localTextPrefix = "Procurement.F3_EmailVendor";
        const enum Fields {
            EmailParticipant = "EmailParticipant",
            Username = "Username",
            VendorName = "VendorName",
            EvaluateConclusionName = "EvaluateConclusionName",
            QuoteDesc = "QuoteDesc",
            ProcurementTypeName = "ProcurementTypeName",
            ProcurementTypeDescription = "ProcurementTypeDescription",
            StatusName = "StatusName",
            StatusDescription = "StatusDescription",
            OfficeAddressName = "OfficeAddressName",
            OfficeAddressDescription = "OfficeAddressDescription",
            OfficeAddressAddressTypeId = "OfficeAddressAddressTypeId",
            ProcValueRangeName = "ProcValueRangeName",
            ProcValueRangeDescription = "ProcValueRangeDescription",
            CommitteeTypeName = "CommitteeTypeName",
            CommitteeTypeDescription = "CommitteeTypeDescription",
            DestinationName = "DestinationName",
            DestinationDescription = "DestinationDescription",
            DestinationAddressTypeId = "DestinationAddressTypeId",
            ContractTypeName = "ContractTypeName",
            ContractTypeDescription = "ContractTypeDescription",
            CurrencyName = "CurrencyName",
            CurrencyDescription = "CurrencyDescription",
            DocSubmitMethodName = "DocSubmitMethodName",
            DocSubmitMethodDescription = "DocSubmitMethodDescription",
            OrderTypeName = "OrderTypeName",
            OrderTypeDescription = "OrderTypeDescription",
            ProcurementMethodName = "ProcurementMethodName",
            ProcurementMethodDescription = "ProcurementMethodDescription"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface F4_AanwijzingForm {
        ProcurementTypeId: Serenity.LookupEditor;
        Status: Serenity.LookupEditor;
        CollectiveNumber: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        Classification: Serenity.StringEditor;
        Qualification: Serenity.StringEditor;
        AanwijzingDate: Serenity.DateEditor;
        AanwijzingClosingDate: Serenity.DateEditor;
        AanwijzingLocation: Serenity.TextAreaEditor;
        AanwijzingClosingLocation: Serenity.TextAreaEditor;
        AanwijzingSecretary: Serenity.StringEditor;
        AdministrativeExplanation: Serenity.TextAreaEditor;
        TechnicalExplanation: Serenity.TextAreaEditor;
        OtherExplanation: Serenity.TextAreaEditor;
        AanwijzingSummary: Serenity.TextAreaEditor;
        TenderDocSubmitOpenDate: Serenity.DateTimeEditor;
        TenderDocSubmitCloseDate: Serenity.DateTimeEditor;
        F4SubmitDate: Serenity.DateTimeEditor;
        F4SubmitBy: Serenity.StringEditor;
    }
    class F4_AanwijzingForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    namespace F4_AanwijzingService {
        const baseUrl = "Procurement/F4_Aanwijzing";
        function Create(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Submit(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/F4_Aanwijzing/Create",
            Update = "Procurement/F4_Aanwijzing/Update",
            Delete = "Procurement/F4_Aanwijzing/Delete",
            Retrieve = "Procurement/F4_Aanwijzing/Retrieve",
            List = "Procurement/F4_Aanwijzing/List",
            Submit = "Procurement/F4_Aanwijzing/Submit"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface F5_ProcParticipantItemForm {
        ProcParticipantItemId: Serenity.StringEditor;
        ItemSequence: Serenity.StringEditor;
        Material: Serenity.StringEditor;
        ShortText: Serenity.TextAreaEditor;
        BidPrice: Serenity.DecimalEditor;
        RfqItemTargetQuantity: Serenity.DecimalEditor;
        RfqItemOrderUnit: Serenity.StringEditor;
        RfqItemId: Serenity.StringEditor;
    }
    class F5_ProcParticipantItemForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    namespace F5_ProcParticipantItemService {
        const baseUrl = "Procurement/F5_ProcParticipantItem";
        function Create(request: Serenity.SaveRequest<ProcParticipantItemRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProcParticipantItemRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcParticipantItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcParticipantItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/F5_ProcParticipantItem/Create",
            Update = "Procurement/F5_ProcParticipantItem/Update",
            Delete = "Procurement/F5_ProcParticipantItem/Delete",
            Retrieve = "Procurement/F5_ProcParticipantItem/Retrieve",
            List = "Procurement/F5_ProcParticipantItem/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface F5_SubmitTenderDocumentForm {
        ProcurementId: Serenity.StringEditor;
        ProcurementProcurementTypeId: Serenity.StringEditor;
        ProcurementStatus: Serenity.StringEditor;
        ProcurementCollectiveNumber: Serenity.StringEditor;
        ProcurementTitle: Serenity.StringEditor;
        ProcurementClassification: Serenity.StringEditor;
        ProcurementQualification: Serenity.StringEditor;
        DocSubmitMethodName: Serenity.StringEditor;
        VendorId: Serenity.LookupEditor;
        PriceDocumentFile: Serenity.ImageUploadEditor;
        TechSpecDocFile: Serenity.ImageUploadEditor;
        SupportingLetterFile: Serenity.ImageUploadEditor;
        CatalogFile: Serenity.ImageUploadEditor;
        SubmitDocTnc: Serenity.BooleanEditor;
        SubmitDocTncDate: Serenity.DateEditor;
        ProcParticipantItems: F5_ProcParticipantItemsEditor;
        F5ParticipantSubmitDate: Serenity.DateTimeEditor;
        F5ParticipantSubmitBy: Serenity.StringEditor;
    }
    class F5_SubmitTenderDocumentForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    namespace F5_SubmitTenderDocumentService {
        const baseUrl = "Procurement/F5_SubmitTenderDocument";
        function Create(request: Serenity.SaveRequest<ProcParticipantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProcParticipantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcParticipantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcParticipantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Submit(request: Serenity.SaveRequest<ProcParticipantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function BidPriceImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse<ProcParticipantItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/F5_SubmitTenderDocument/Create",
            Update = "Procurement/F5_SubmitTenderDocument/Update",
            Delete = "Procurement/F5_SubmitTenderDocument/Delete",
            Retrieve = "Procurement/F5_SubmitTenderDocument/Retrieve",
            List = "Procurement/F5_SubmitTenderDocument/List",
            Submit = "Procurement/F5_SubmitTenderDocument/Submit",
            BidPriceImport = "Procurement/F5_SubmitTenderDocument/BidPriceImport"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    interface F5_TnCForm {
        TnCDescription: StaticTextBlock;
        TnCAgree: Serenity.BooleanEditor;
    }
    class F5_TnCForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface F6_OpenTenderDocumentForm {
        ProcurementTypeId: Serenity.LookupEditor;
        Status: Serenity.LookupEditor;
        CollectiveNumber: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        Classification: Serenity.StringEditor;
        Qualification: Serenity.StringEditor;
        ProcParticipant: F6_ProcParticipantsEditor;
        DocSubmitMethodId: Serenity.LookupEditor;
        ProcRejectTender: Serenity.EnumEditor;
        ProcRejectTenderDesc: Serenity.TextAreaEditor;
        TenderDocSubmitOpenDate: Serenity.DateTimeEditor;
        TenderDocSubmitCloseDate: Serenity.DateTimeEditor;
    }
    class F6_OpenTenderDocumentForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    namespace F6_OpenTenderDocumentService {
        const baseUrl = "Procurement/F6_OpenTenderDocument";
        function Create(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Submit(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Rejected(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function SendMailReject(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/F6_OpenTenderDocument/Create",
            Update = "Procurement/F6_OpenTenderDocument/Update",
            Delete = "Procurement/F6_OpenTenderDocument/Delete",
            Retrieve = "Procurement/F6_OpenTenderDocument/Retrieve",
            List = "Procurement/F6_OpenTenderDocument/List",
            Submit = "Procurement/F6_OpenTenderDocument/Submit",
            Rejected = "Procurement/F6_OpenTenderDocument/Rejected",
            SendMailReject = "Procurement/F6_OpenTenderDocument/SendMailReject"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface F6_ProcParticipantForm {
        ProcurementId: Serenity.StringEditor;
        SequenceNo: Serenity.IntegerEditor;
        VendorId: Serenity.LookupEditor;
        VendorName: Serenity.StringEditor;
        PriceDocumentFile: Serenity.ImageUploadEditor;
        TechSpecDocFile: Serenity.ImageUploadEditor;
        SupportingLetterFile: Serenity.ImageUploadEditor;
        CatalogFile: Serenity.ImageUploadEditor;
        AdminDocExists: Serenity.EnumEditor;
        TechSpecDocExists: Serenity.EnumEditor;
        SupportingLetterExists: Serenity.EnumEditor;
        CatalogExists: Serenity.EnumEditor;
        OpeningDocDesc: Serenity.TextAreaEditor;
        ProcParticipantItems: F6_ProcParticipantItemsEditor;
        F5ParticipantSubmitDate: Serenity.DateTimeEditor;
        F5ParticipantSubmitBy: Serenity.StringEditor;
    }
    class F6_ProcParticipantForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface F6_ProcParticipantItemForm {
        ProcParticipantItemId: Serenity.StringEditor;
        ItemSequence: Serenity.StringEditor;
        Material: Serenity.StringEditor;
        ShortText: Serenity.TextAreaEditor;
        RfqItemTargetQuantity: Serenity.DecimalEditor;
        RfqItemOrderUnit: Serenity.StringEditor;
        ProcurementDocSubmitMethodId: Serenity.IntegerEditor;
    }
    class F6_ProcParticipantItemForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    namespace F6_ProcParticipantItemService {
        const baseUrl = "Procurement/F6_ProcParticipantItem";
        function Create(request: Serenity.SaveRequest<ProcParticipantItemRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProcParticipantItemRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcParticipantItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcParticipantItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/F6_ProcParticipantItem/Create",
            Update = "Procurement/F6_ProcParticipantItem/Update",
            Delete = "Procurement/F6_ProcParticipantItem/Delete",
            Retrieve = "Procurement/F6_ProcParticipantItem/Retrieve",
            List = "Procurement/F6_ProcParticipantItem/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    namespace F6_ProcParticipantService {
        const baseUrl = "Procurement/F6_ProcParticipant";
        function Create(request: Serenity.SaveRequest<ProcParticipantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProcParticipantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcParticipantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcParticipantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/F6_ProcParticipant/Create",
            Update = "Procurement/F6_ProcParticipant/Update",
            Delete = "Procurement/F6_ProcParticipant/Delete",
            Retrieve = "Procurement/F6_ProcParticipant/Retrieve",
            List = "Procurement/F6_ProcParticipant/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    interface F7_ListCommitteeRow {
        Email?: string;
        EvaluateConclusionName?: string;
        QuoteDesc?: string;
        ProcurementTypeName?: string;
        ProcurementTypeDescription?: string;
        StatusName?: string;
        StatusDescription?: string;
        OfficeAddressName?: string;
        OfficeAddressDescription?: string;
        OfficeAddressAddressTypeId?: number;
        ProcValueRangeName?: string;
        ProcValueRangeDescription?: string;
        CommitteeTypeName?: string;
        CommitteeTypeDescription?: string;
        DestinationName?: string;
        DestinationDescription?: string;
        DestinationAddressTypeId?: number;
        ContractTypeName?: string;
        ContractTypeDescription?: string;
        CurrencyName?: string;
        CurrencyDescription?: string;
        DocSubmitMethodName?: string;
        DocSubmitMethodDescription?: string;
        OrderTypeName?: string;
        OrderTypeDescription?: string;
        ProcurementMethodName?: string;
        ProcurementMethodDescription?: string;
    }
    namespace F7_ListCommitteeRow {
        const idProperty = "Email";
        const nameProperty = "EvaluateConclusionName";
        const localTextPrefix = "Procurement.F7_ListCommittee";
        const enum Fields {
            Email = "Email",
            EvaluateConclusionName = "EvaluateConclusionName",
            QuoteDesc = "QuoteDesc",
            ProcurementTypeName = "ProcurementTypeName",
            ProcurementTypeDescription = "ProcurementTypeDescription",
            StatusName = "StatusName",
            StatusDescription = "StatusDescription",
            OfficeAddressName = "OfficeAddressName",
            OfficeAddressDescription = "OfficeAddressDescription",
            OfficeAddressAddressTypeId = "OfficeAddressAddressTypeId",
            ProcValueRangeName = "ProcValueRangeName",
            ProcValueRangeDescription = "ProcValueRangeDescription",
            CommitteeTypeName = "CommitteeTypeName",
            CommitteeTypeDescription = "CommitteeTypeDescription",
            DestinationName = "DestinationName",
            DestinationDescription = "DestinationDescription",
            DestinationAddressTypeId = "DestinationAddressTypeId",
            ContractTypeName = "ContractTypeName",
            ContractTypeDescription = "ContractTypeDescription",
            CurrencyName = "CurrencyName",
            CurrencyDescription = "CurrencyDescription",
            DocSubmitMethodName = "DocSubmitMethodName",
            DocSubmitMethodDescription = "DocSubmitMethodDescription",
            OrderTypeName = "OrderTypeName",
            OrderTypeDescription = "OrderTypeDescription",
            ProcurementMethodName = "ProcurementMethodName",
            ProcurementMethodDescription = "ProcurementMethodDescription"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface F7_ProcParticipantForm {
        ProcurementId: Serenity.StringEditor;
        SequenceNo: Serenity.IntegerEditor;
        VendorId: Serenity.LookupEditor;
        VendorName: Serenity.StringEditor;
        PriceDocumentFile: Serenity.ImageUploadEditor;
        TechSpecDocFile: Serenity.ImageUploadEditor;
        SupportingLetterFile: Serenity.ImageUploadEditor;
        CatalogFile: Serenity.ImageUploadEditor;
        AdminDocAtk: Serenity.LookupEditor;
        TechSpecDocAtk: Serenity.LookupEditor;
        SupportingLetterAtk: Serenity.LookupEditor;
        CatalogAtk: Serenity.LookupEditor;
        EvaluationDesc: Serenity.TextAreaEditor;
        ClarificationRequest: Serenity.TextAreaEditor;
        EvaluationConclusionId: Serenity.LookupEditor;
        QuoteDesc: Serenity.TextAreaEditor;
        ProcParticipantItems: F7_ProcParticipantItemsEditor;
        F5ParticipantSubmitDate: Serenity.DateTimeEditor;
        F5ParticipantSubmitBy: Serenity.StringEditor;
    }
    class F7_ProcParticipantForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface F7_ProcParticipantItemForm {
        ProcParticipantItemId: Serenity.StringEditor;
        ItemSequence: Serenity.StringEditor;
        Material: Serenity.StringEditor;
        ShortText: Serenity.TextAreaEditor;
        BidPrice: Serenity.DecimalEditor;
        RfqItemOrderQuantity: Serenity.DecimalEditor;
        RfqItemOrderUnit: Serenity.StringEditor;
        ProcurementDocSubmitMethodId: Serenity.IntegerEditor;
    }
    class F7_ProcParticipantItemForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    namespace F7_ProcParticipantItemService {
        const baseUrl = "Procurement/F7_ProcParticipantItem";
        function Create(request: Serenity.SaveRequest<ProcParticipantItemRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProcParticipantItemRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcParticipantItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcParticipantItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/F7_ProcParticipantItem/Create",
            Update = "Procurement/F7_ProcParticipantItem/Update",
            Delete = "Procurement/F7_ProcParticipantItem/Delete",
            Retrieve = "Procurement/F7_ProcParticipantItem/Retrieve",
            List = "Procurement/F7_ProcParticipantItem/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    namespace F7_ProcParticipantService {
        const baseUrl = "Procurement/F7_ProcParticipant";
        function Create(request: Serenity.SaveRequest<ProcParticipantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProcParticipantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcParticipantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcParticipantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/F7_ProcParticipant/Create",
            Update = "Procurement/F7_ProcParticipant/Update",
            Delete = "Procurement/F7_ProcParticipant/Delete",
            Retrieve = "Procurement/F7_ProcParticipant/Retrieve",
            List = "Procurement/F7_ProcParticipant/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface F7_TenderEvaluationForm {
        ProcurementTypeId: Serenity.LookupEditor;
        Status: Serenity.LookupEditor;
        CollectiveNumber: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        Classification: Serenity.StringEditor;
        Qualification: Serenity.StringEditor;
        ProcParticipant: F7_ProcParticipantsEditor;
        DocSubmitMethodId: Serenity.LookupEditor;
        TenderDocSubmitOpenDate: Serenity.DateTimeEditor;
        TenderDocSubmitCloseDate: Serenity.DateTimeEditor;
    }
    class F7_TenderEvaluationForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    namespace F7_TenderEvaluationService {
        const baseUrl = "Procurement/F7_TenderEvaluation";
        function Create(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Submit(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function SendMail(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function SendCommitteeNotification(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/F7_TenderEvaluation/Create",
            Update = "Procurement/F7_TenderEvaluation/Update",
            Delete = "Procurement/F7_TenderEvaluation/Delete",
            Retrieve = "Procurement/F7_TenderEvaluation/Retrieve",
            List = "Procurement/F7_TenderEvaluation/List",
            Submit = "Procurement/F7_TenderEvaluation/Submit",
            SendMail = "Procurement/F7_TenderEvaluation/SendMail",
            SendCommitteeNotification = "Procurement/F7_TenderEvaluation/SendCommitteeNotification"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    interface F7_VendorParticipantRow {
        EmailParticipant?: string;
        EvaluateConclusionName?: string;
        QuoteDesc?: string;
        ProcurementTypeName?: string;
        ProcurementTypeDescription?: string;
        StatusName?: string;
        StatusDescription?: string;
        OfficeAddressName?: string;
        OfficeAddressDescription?: string;
        OfficeAddressAddressTypeId?: number;
        ProcValueRangeName?: string;
        ProcValueRangeDescription?: string;
        CommitteeTypeName?: string;
        CommitteeTypeDescription?: string;
        DestinationName?: string;
        DestinationDescription?: string;
        DestinationAddressTypeId?: number;
        ContractTypeName?: string;
        ContractTypeDescription?: string;
        CurrencyName?: string;
        CurrencyDescription?: string;
        DocSubmitMethodName?: string;
        DocSubmitMethodDescription?: string;
        OrderTypeName?: string;
        OrderTypeDescription?: string;
        ProcurementMethodName?: string;
        ProcurementMethodDescription?: string;
    }
    namespace F7_VendorParticipantRow {
        const idProperty = "EmailParticipant";
        const nameProperty = "EvaluateConclusionName";
        const localTextPrefix = "Procurement.F7_VendorParticipant";
        const enum Fields {
            EmailParticipant = "EmailParticipant",
            EvaluateConclusionName = "EvaluateConclusionName",
            QuoteDesc = "QuoteDesc",
            ProcurementTypeName = "ProcurementTypeName",
            ProcurementTypeDescription = "ProcurementTypeDescription",
            StatusName = "StatusName",
            StatusDescription = "StatusDescription",
            OfficeAddressName = "OfficeAddressName",
            OfficeAddressDescription = "OfficeAddressDescription",
            OfficeAddressAddressTypeId = "OfficeAddressAddressTypeId",
            ProcValueRangeName = "ProcValueRangeName",
            ProcValueRangeDescription = "ProcValueRangeDescription",
            CommitteeTypeName = "CommitteeTypeName",
            CommitteeTypeDescription = "CommitteeTypeDescription",
            DestinationName = "DestinationName",
            DestinationDescription = "DestinationDescription",
            DestinationAddressTypeId = "DestinationAddressTypeId",
            ContractTypeName = "ContractTypeName",
            ContractTypeDescription = "ContractTypeDescription",
            CurrencyName = "CurrencyName",
            CurrencyDescription = "CurrencyDescription",
            DocSubmitMethodName = "DocSubmitMethodName",
            DocSubmitMethodDescription = "DocSubmitMethodDescription",
            OrderTypeName = "OrderTypeName",
            OrderTypeDescription = "OrderTypeDescription",
            ProcurementMethodName = "ProcurementMethodName",
            ProcurementMethodDescription = "ProcurementMethodDescription"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface F8_ProcParticipantForm {
        ProcurementId: Serenity.StringEditor;
        SequenceNo: Serenity.IntegerEditor;
        VendorId: Serenity.LookupEditor;
        VendorName: Serenity.StringEditor;
        PriceDocumentFile: Serenity.ImageUploadEditor;
        TechSpecDocFile: Serenity.ImageUploadEditor;
        SupportingLetterFile: Serenity.ImageUploadEditor;
        CatalogFile: Serenity.ImageUploadEditor;
        AdminDocAtk: Serenity.LookupEditor;
        TechSpecDocAtk: Serenity.LookupEditor;
        SupportingLetterAtk: Serenity.LookupEditor;
        CatalogAtk: Serenity.LookupEditor;
        EvaluationDesc: Serenity.TextAreaEditor;
        EvaluationConclusionId: Serenity.LookupEditor;
        ClarificationRequest: Serenity.TextAreaEditor;
        ClarificationOffer: Serenity.TextAreaEditor;
        ClarificationResult: Serenity.TextAreaEditor;
        F5ParticipantSubmitDate: Serenity.DateTimeEditor;
        F5ParticipantSubmitBy: Serenity.StringEditor;
    }
    class F8_ProcParticipantForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    namespace F8_ProcParticipantService {
        const baseUrl = "Procurement/F8_ProcParticipant";
        function Create(request: Serenity.SaveRequest<ProcParticipantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProcParticipantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcParticipantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcParticipantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/F8_ProcParticipant/Create",
            Update = "Procurement/F8_ProcParticipant/Update",
            Delete = "Procurement/F8_ProcParticipant/Delete",
            Retrieve = "Procurement/F8_ProcParticipant/Retrieve",
            List = "Procurement/F8_ProcParticipant/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    interface F8_QualificationRow {
        Email?: string;
        Vendorid?: string;
        NAME?: string;
        title?: string;
        ProcurementTypeName?: string;
        ProcurementTypeDescription?: string;
        StatusName?: string;
        StatusDescription?: string;
        OfficeAddressName?: string;
        OfficeAddressDescription?: string;
        OfficeAddressAddressTypeId?: number;
        ProcValueRangeName?: string;
        ProcValueRangeDescription?: string;
        CommitteeTypeName?: string;
        CommitteeTypeDescription?: string;
        DestinationName?: string;
        DestinationDescription?: string;
        DestinationAddressTypeId?: number;
        ContractTypeName?: string;
        ContractTypeDescription?: string;
        CurrencyName?: string;
        CurrencyDescription?: string;
        DocSubmitMethodName?: string;
        DocSubmitMethodDescription?: string;
        OrderTypeName?: string;
        OrderTypeDescription?: string;
        ProcurementMethodName?: string;
        ProcurementMethodDescription?: string;
    }
    namespace F8_QualificationRow {
        const idProperty = "Email";
        const nameProperty = "Vendorid";
        const localTextPrefix = "Procurement.F8_Qualification";
        const enum Fields {
            Email = "Email",
            Vendorid = "Vendorid",
            NAME = "NAME",
            title = "title",
            ProcurementTypeName = "ProcurementTypeName",
            ProcurementTypeDescription = "ProcurementTypeDescription",
            StatusName = "StatusName",
            StatusDescription = "StatusDescription",
            OfficeAddressName = "OfficeAddressName",
            OfficeAddressDescription = "OfficeAddressDescription",
            OfficeAddressAddressTypeId = "OfficeAddressAddressTypeId",
            ProcValueRangeName = "ProcValueRangeName",
            ProcValueRangeDescription = "ProcValueRangeDescription",
            CommitteeTypeName = "CommitteeTypeName",
            CommitteeTypeDescription = "CommitteeTypeDescription",
            DestinationName = "DestinationName",
            DestinationDescription = "DestinationDescription",
            DestinationAddressTypeId = "DestinationAddressTypeId",
            ContractTypeName = "ContractTypeName",
            ContractTypeDescription = "ContractTypeDescription",
            CurrencyName = "CurrencyName",
            CurrencyDescription = "CurrencyDescription",
            DocSubmitMethodName = "DocSubmitMethodName",
            DocSubmitMethodDescription = "DocSubmitMethodDescription",
            OrderTypeName = "OrderTypeName",
            OrderTypeDescription = "OrderTypeDescription",
            ProcurementMethodName = "ProcurementMethodName",
            ProcurementMethodDescription = "ProcurementMethodDescription"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface F8_TechnicalClarificationForm {
        ProcurementTypeId: Serenity.LookupEditor;
        Status: Serenity.LookupEditor;
        CollectiveNumber: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        Classification: Serenity.StringEditor;
        Qualification: Serenity.StringEditor;
        ProcParticipant: F8_ProcParticipantsEditor;
        F8SubmitDate: Serenity.DateTimeEditor;
        F8SubmitBy: Serenity.StringEditor;
    }
    class F8_TechnicalClarificationForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    namespace F8_TechnicalClarificationService {
        const baseUrl = "Procurement/F8_TechnicalClarification";
        function Create(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Submit(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function SendMail(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/F8_TechnicalClarification/Create",
            Update = "Procurement/F8_TechnicalClarification/Update",
            Delete = "Procurement/F8_TechnicalClarification/Delete",
            Retrieve = "Procurement/F8_TechnicalClarification/Retrieve",
            List = "Procurement/F8_TechnicalClarification/List",
            Submit = "Procurement/F8_TechnicalClarification/Submit",
            SendMail = "Procurement/F8_TechnicalClarification/SendMail"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface F9_PriceEvaluationForm {
        ProcurementTypeId: Serenity.LookupEditor;
        Status: Serenity.LookupEditor;
        CollectiveNumber: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        Classification: Serenity.StringEditor;
        Qualification: Serenity.StringEditor;
        EvaluationClosingPriceDate: Serenity.DateEditor;
        ContractTypeId: Serenity.LookupEditor;
        ProcParticipantItems: F9_ProcParticipantItemsEditor;
        F9SubmitDate: Serenity.DateTimeEditor;
        F9SubmitBy: Serenity.StringEditor;
    }
    class F9_PriceEvaluationForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    namespace F9_PriceEvaluationService {
        const baseUrl = "Procurement/F9_PriceEvaluation";
        function Create(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Submit(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function SendMail(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/F9_PriceEvaluation/Create",
            Update = "Procurement/F9_PriceEvaluation/Update",
            Delete = "Procurement/F9_PriceEvaluation/Delete",
            Retrieve = "Procurement/F9_PriceEvaluation/Retrieve",
            List = "Procurement/F9_PriceEvaluation/List",
            Submit = "Procurement/F9_PriceEvaluation/Submit",
            SendMail = "Procurement/F9_PriceEvaluation/SendMail"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface F9_ProcParticipantItemForm {
        ProcParticipantItemId: Serenity.StringEditor;
        ProcParticipantId: Serenity.StringEditor;
        ProcParticipantVendorId: Serenity.StringEditor;
        VendorName: Serenity.StringEditor;
        F5ParticipantSubmitDate: Serenity.DateTimeEditor;
        RfqItemId: Serenity.StringEditor;
        ItemSequence: Serenity.StringEditor;
        Material: Serenity.StringEditor;
        ShortText: Serenity.TextAreaEditor;
        BidPrice: Serenity.DecimalEditor;
        BidPriceVsOe: Serenity.DecimalEditor;
        BidPriceVsOePercentage: Serenity.DecimalEditor;
        Rank: Serenity.IntegerEditor;
        EvaluationDescription: Serenity.TextAreaEditor;
        EvaluationConclusionItemId: Serenity.LookupEditor;
    }
    class F9_ProcParticipantItemForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    namespace F9_ProcParticipantItemService {
        const baseUrl = "Procurement/F9_ProcParticipantItem";
        function Create(request: Serenity.SaveRequest<ProcParticipantItemRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProcParticipantItemRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcParticipantItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcParticipantItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/F9_ProcParticipantItem/Create",
            Update = "Procurement/F9_ProcParticipantItem/Update",
            Delete = "Procurement/F9_ProcParticipantItem/Delete",
            Retrieve = "Procurement/F9_ProcParticipantItem/Retrieve",
            List = "Procurement/F9_ProcParticipantItem/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    interface ForgotForm {
        CollectiveNumber: Serenity.StringEditor;
    }
    class ForgotForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    interface ForgotRequest extends Serenity.ServiceRequest {
        CollectiveNumber?: string;
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface OrderTypeForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }
    class OrderTypeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    interface OrderTypeRow {
        OrderTypeId?: string;
        Name?: string;
        Description?: string;
    }
    namespace OrderTypeRow {
        const idProperty = "OrderTypeId";
        const nameProperty = "OrderTypeId";
        const localTextPrefix = "Procurement.OrderType";
        const lookupKey = "Procurement.OrderType";
        function getLookup(): Q.Lookup<OrderTypeRow>;
        const enum Fields {
            OrderTypeId = "OrderTypeId",
            Name = "Name",
            Description = "Description"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    namespace OrderTypeService {
        const baseUrl = "Procurement/OrderType";
        function Create(request: Serenity.SaveRequest<OrderTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OrderTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OrderTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OrderTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/OrderType/Create",
            Update = "Procurement/OrderType/Update",
            Delete = "Procurement/OrderType/Delete",
            Retrieve = "Procurement/OrderType/Retrieve",
            List = "Procurement/OrderType/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    interface OwnerEstimateImportForm {
        FileName: Serenity.ImageUploadEditor;
    }
    class OwnerEstimateImportForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    interface OwnerEstimateReviewImportForm {
        FileName: Serenity.ImageUploadEditor;
    }
    class OwnerEstimateReviewImportForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    interface ProcParam extends Serenity.ServiceRequest {
        Param1?: string;
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface ProcParticipantForm {
        ProcurementId: Serenity.StringEditor;
        SequenceNo: Serenity.IntegerEditor;
        VendorId: Serenity.LookupEditor;
        VendorName: Serenity.StringEditor;
        VendorPenaltyCode: Serenity.StringEditor;
        Qualification: Serenity.StringEditor;
    }
    class ProcParticipantForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface ProcParticipantItemForm {
        ProcParticipantId: Serenity.StringEditor;
        ProcurementId: Serenity.StringEditor;
        VendorId: Serenity.StringEditor;
        VendorName: Serenity.StringEditor;
        F5ParticipantSubmitDate: Serenity.DateTimeEditor;
        F5ParticipantSubmitBy: Serenity.StringEditor;
        RfqItemId: Serenity.StringEditor;
        ItemSequence: Serenity.StringEditor;
        Material: Serenity.StringEditor;
        ShortText: Serenity.TextAreaEditor;
        BidPrice: Serenity.DecimalEditor;
        BidPriceVsOe: Serenity.DecimalEditor;
        BidPriceVsOePercentage: Serenity.DecimalEditor;
        Rank: Serenity.IntegerEditor;
        EvaluationDescription: Serenity.TextAreaEditor;
        NegotiationPrice: Serenity.DecimalEditor;
        NpVsOe: Serenity.DecimalEditor;
        NpVsOePercentage: Serenity.DecimalEditor;
        NegotiationRank: Serenity.IntegerEditor;
        NegotiationDesc: Serenity.TextAreaEditor;
        ProposeDisclaimer: Serenity.BooleanEditor;
        DisclaimerDesc: Serenity.StringEditor;
        EvaluationConclusionItemId: Serenity.LookupEditor;
    }
    class ProcParticipantItemForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    interface ProcParticipantItemRow {
        ProcParticipantItemId?: number;
        ProcParticipantId?: number;
        ProcurementId?: number;
        RfqItemId?: number;
        BidPrice?: number;
        BidPriceVsOe?: number;
        BidPriceVsOePercentage?: number;
        Rank?: number;
        EvaluationDescription?: string;
        NegotiationPrice?: number;
        NpVsOe?: number;
        NpVsOePercentage?: number;
        NegotiationRank?: number;
        NegotiationDesc?: string;
        ProposeDisclaimer?: boolean;
        DisclaimerDesc?: string;
        EvaluationConclusionItemId?: number;
        ProcParticipantProcurementId?: number;
        ProcParticipantSequenceNo?: number;
        ProcParticipantVendorId?: string;
        VendorId?: string;
        VendorName?: string;
        ProcParticipantPriceDocumentFile?: string;
        ProcParticipantPriceDocumentName?: string;
        ProcParticipantTechSpecDocFile?: string;
        ProcParticipantTechSpecDocName?: string;
        ProcParticipantSupportingLetterFile?: string;
        ProcParticipantSupportingLetterName?: string;
        ProcParticipantCatalogFile?: string;
        ProcParticipantCatalogName?: string;
        ProcParticipantSubmitDocTnc?: boolean;
        ProcParticipantSubmitDocTncDate?: string;
        ProcParticipantAdminDocExists?: boolean;
        ProcParticipantTechSpecDocExists?: boolean;
        ProcParticipantSupportingLetterExists?: boolean;
        ProcParticipantCatalogExists?: boolean;
        ProcParticipantOpeningDocDesc?: string;
        ProcParticipantAdminDocAtk?: number;
        ProcParticipantTechSpecDocAtk?: number;
        ProcParticipantSupportingLetterAtk?: number;
        ProcParticipantCatalogAtk?: number;
        ProcParticipantEvaluationDesc?: string;
        ProcParticipantClarificationRequest?: string;
        ProcParticipantEvaluationConclusionId?: number;
        ProcParticipantClarificationOffer?: string;
        ProcParticipantClarificationResult?: string;
        ProcParticipantSource?: string;
        F5ParticipantSubmitDate?: string;
        F5ParticipantSubmitBy?: string;
        ProcurementProcurementTypeId?: string;
        ProcurementStatus?: string;
        ProcurementCollectiveNumber?: string;
        ProcurementTitle?: string;
        ProcurementClassification?: string;
        ProcurementQualification?: string;
        ProcurementRequestedBy?: string;
        ProcurementRequestorPosition?: string;
        ProcurementApprovedBy?: string;
        ProcurementApproverPosition?: string;
        ProcurementSapBidderListCreatedBy?: string;
        ProcurementSapBidderListCreatedDate?: string;
        ProcurementCreatedBy?: string;
        ProcurementCreatedDate?: string;
        ProcurementGuaranteePercentage?: number;
        ProcurementOfficeAddress?: number;
        ProcurementProcValueRangeId?: number;
        ProcurementCommitteeTypeId?: number;
        ProcurementPerformanceGuaranteeRequired?: boolean;
        ProcurementTenderPeriod?: number;
        ProcurementDeliveryTime?: number;
        ProcurementDestinationId?: number;
        ProcurementContractTypeId?: number;
        ProcurementCurrencyId?: string;
        ProcurementDocSubmitMethodId?: number;
        ProcurementAanwijzingExists?: boolean;
        ProcurementAanwijzingDate?: string;
        ProcurementAanwijzingClosingDate?: string;
        ProcurementAanwijzingLocation?: string;
        ProcurementAanwijzingClosingLocation?: string;
        ProcurementAanwijzingSecretary?: string;
        ProcurementAanwijzingSummary?: string;
        ProcurementFieldSurveyExists?: boolean;
        ProcurementFieldSurveyAddress?: string;
        ProcurementItbDocumentFile?: string;
        ProcurementItbDocumentName?: string;
        ProcurementRksDocumentFile?: string;
        ProcurementRksDocumentName?: string;
        ProcurementTenderDocSubmitOpenDate?: string;
        ProcurementTenderDocSubmitCloseDate?: string;
        ProcurementOrderTypeId?: string;
        ProcurementPurchDocNum?: string;
        ProcurementRfqDate?: string;
        ProcurementQuotationDeadline?: string;
        ProcurementPurchGroup?: string;
        ProcurementPrNo?: string;
        ProcurementAuthPersonName?: string;
        ProcurementAuthPosition?: string;
        ProcurementHeaderText?: string;
        ProcurementHeaderNote?: string;
        ProcurementWorkDescription?: string;
        ProcurementBankKey?: string;
        ProcurementPoCover?: string;
        ProcurementDeliveryAddress?: string;
        ProcurementToPTargVal?: string;
        ProcurementYourReference?: string;
        ProcurementOurReference?: string;
        ProcurementSalesPerson?: string;
        ProcurementTelephone?: string;
        ProcurementValidityStart?: string;
        ProcurementValidityEnd?: string;
        ProcurementItemInterval?: number;
        ProcurementSubItemInterval?: number;
        ProcurementWarranty?: string;
        ProcurementLanguage?: string;
        ProcurementReviewOeRequired?: boolean;
        ProcurementProcAgreement?: boolean;
        ProcurementProcAgreementDate?: string;
        ProcurementProcAsRequired?: boolean;
        ProcurementProcAsApproved?: boolean;
        ProcurementProcAsApprovedDate?: string;
        ProcurementProcAsDesc?: string;
        ProcurementFinalConclusionDesc?: string;
        ProcurementWinnerNominationDate?: string;
        ProcurementObjectionCloseDate?: string;
        ProcurementPoDocName?: string;
        ProcurementTemporaryPic?: string;
        ProcurementPoNumber?: string;
        ProcurementPoDocFile?: string;
        ProcurementF1SubmitDate?: string;
        ProcurementF1SubmitBy?: string;
        ProcurementF2SubmitDate?: string;
        ProcurementF2SubmitBy?: string;
        ProcurementF3SubmitDate?: string;
        ProcurementF3SubmitBy?: string;
        ProcurementF31SubmitDate?: string;
        ProcurementF31SubmitBy?: string;
        ProcurementF4SubmitDate?: string;
        ProcurementF4SubmitBy?: string;
        ProcurementF5SubmitDate?: string;
        ProcurementF5SubmitBy?: string;
        ProcurementF6SubmitDate?: string;
        ProcurementF6SubmitBy?: string;
        ProcurementF7SubmitDate?: string;
        ProcurementF7SubmitBy?: string;
        ProcurementF8SubmitDate?: string;
        ProcurementF8SubmitBy?: string;
        ProcurementF9SubmitDate?: string;
        ProcurementF9SubmitBy?: string;
        ProcurementF10SubmitDate?: string;
        ProcurementF10SubmitBy?: string;
        ProcurementF11SubmitDate?: string;
        ProcurementF11SubmitBy?: string;
        ProcurementF12SubmitDate?: string;
        ProcurementF12SubmitBy?: string;
        ProcurementF13SubmitDate?: string;
        ProcurementF13SubmitBy?: string;
        ProcurementF14SubmitDate?: string;
        ProcurementF14SubmitBy?: string;
        ProcurementF15SubmitDate?: string;
        ProcurementF15SubmitBy?: string;
        ProcurementF16SubmitDate?: string;
        ProcurementF16SubmitBy?: string;
        ProcurementF17SubmitDate?: string;
        ProcurementF17SubmitBy?: string;
        ProcurementProcurementMethodId?: string;
        RfqItemProcurementId?: number;
        RfqItemOwnerEstimateReview?: number;
        RfqItemOwnerEstimate?: number;
        RfqItemPurchasingDocument?: string;
        ItemSequence?: string;
        RfqItemDeletionIndicator?: string;
        RfqItemRfqStatus?: string;
        RfqItemLastChangedOn?: string;
        ShortText?: string;
        Material?: string;
        RfqItemPlant?: string;
        RfqItemStorageLocation?: string;
        RfqItemReqTrackingNumber?: string;
        RfqItemMaterialGroup?: string;
        RfqItemPurchasingInfoRec?: string;
        RfqItemVendorMaterialNo?: string;
        RfqItemTargetQuantity?: number;
        RfqItemOrderQuantity?: number;
        RfqItemOrderUnit?: string;
        RfqItemOrderPriceUnit?: string;
        RfqItemQuantityConversion?: number;
        RfqItemEqualTo?: number;
        RfqItemDenominator?: number;
        RfqItemNetOrderPrice?: number;
        RfqItemPriceUnit?: number;
        RfqItemNetOrderValue?: number;
        RfqItemGrossOrderValue?: number;
        RfqItemQuotationDeadline?: string;
        RfqItemGrProcessingTime?: number;
        RfqItemTaxCode?: string;
        RfqItemBaseUnitOfMeasure?: string;
        RfqItemShippingInstr?: string;
        RfqItemOaTargetValue?: number;
        RfqItemPriceDate?: string;
        RfqItemPurchDocCategory?: string;
        RfqItemEffectiveValue?: number;
        RfqItemAffectsCommitments?: string;
        RfqItemMaterialType?: string;
        RfqItemSubitemCategory?: string;
        RfqItemSubItems?: string;
        RfqItemSubtotal1?: number;
        RfqItemSubtotal2?: number;
        RfqItemSubtotal3?: number;
        RfqItemSubtotal4?: number;
        RfqItemSubtotal5?: number;
        EvaluationConclusionItemName?: string;
        EvaluationConclusionItemDescription?: string;
    }
    namespace ProcParticipantItemRow {
        const idProperty = "ProcParticipantItemId";
        const nameProperty = "ProcurementTitle";
        const localTextPrefix = "Procurement.ProcParticipantItem";
        const lookupKey = "Procurement.ProcParticipantItem";
        function getLookup(): Q.Lookup<ProcParticipantItemRow>;
        const enum Fields {
            ProcParticipantItemId = "ProcParticipantItemId",
            ProcParticipantId = "ProcParticipantId",
            ProcurementId = "ProcurementId",
            RfqItemId = "RfqItemId",
            BidPrice = "BidPrice",
            BidPriceVsOe = "BidPriceVsOe",
            BidPriceVsOePercentage = "BidPriceVsOePercentage",
            Rank = "Rank",
            EvaluationDescription = "EvaluationDescription",
            NegotiationPrice = "NegotiationPrice",
            NpVsOe = "NpVsOe",
            NpVsOePercentage = "NpVsOePercentage",
            NegotiationRank = "NegotiationRank",
            NegotiationDesc = "NegotiationDesc",
            ProposeDisclaimer = "ProposeDisclaimer",
            DisclaimerDesc = "DisclaimerDesc",
            EvaluationConclusionItemId = "EvaluationConclusionItemId",
            ProcParticipantProcurementId = "ProcParticipantProcurementId",
            ProcParticipantSequenceNo = "ProcParticipantSequenceNo",
            ProcParticipantVendorId = "ProcParticipantVendorId",
            VendorId = "VendorId",
            VendorName = "VendorName",
            ProcParticipantPriceDocumentFile = "ProcParticipantPriceDocumentFile",
            ProcParticipantPriceDocumentName = "ProcParticipantPriceDocumentName",
            ProcParticipantTechSpecDocFile = "ProcParticipantTechSpecDocFile",
            ProcParticipantTechSpecDocName = "ProcParticipantTechSpecDocName",
            ProcParticipantSupportingLetterFile = "ProcParticipantSupportingLetterFile",
            ProcParticipantSupportingLetterName = "ProcParticipantSupportingLetterName",
            ProcParticipantCatalogFile = "ProcParticipantCatalogFile",
            ProcParticipantCatalogName = "ProcParticipantCatalogName",
            ProcParticipantSubmitDocTnc = "ProcParticipantSubmitDocTnc",
            ProcParticipantSubmitDocTncDate = "ProcParticipantSubmitDocTncDate",
            ProcParticipantAdminDocExists = "ProcParticipantAdminDocExists",
            ProcParticipantTechSpecDocExists = "ProcParticipantTechSpecDocExists",
            ProcParticipantSupportingLetterExists = "ProcParticipantSupportingLetterExists",
            ProcParticipantCatalogExists = "ProcParticipantCatalogExists",
            ProcParticipantOpeningDocDesc = "ProcParticipantOpeningDocDesc",
            ProcParticipantAdminDocAtk = "ProcParticipantAdminDocAtk",
            ProcParticipantTechSpecDocAtk = "ProcParticipantTechSpecDocAtk",
            ProcParticipantSupportingLetterAtk = "ProcParticipantSupportingLetterAtk",
            ProcParticipantCatalogAtk = "ProcParticipantCatalogAtk",
            ProcParticipantEvaluationDesc = "ProcParticipantEvaluationDesc",
            ProcParticipantClarificationRequest = "ProcParticipantClarificationRequest",
            ProcParticipantEvaluationConclusionId = "ProcParticipantEvaluationConclusionId",
            ProcParticipantClarificationOffer = "ProcParticipantClarificationOffer",
            ProcParticipantClarificationResult = "ProcParticipantClarificationResult",
            ProcParticipantSource = "ProcParticipantSource",
            F5ParticipantSubmitDate = "F5ParticipantSubmitDate",
            F5ParticipantSubmitBy = "F5ParticipantSubmitBy",
            ProcurementProcurementTypeId = "ProcurementProcurementTypeId",
            ProcurementStatus = "ProcurementStatus",
            ProcurementCollectiveNumber = "ProcurementCollectiveNumber",
            ProcurementTitle = "ProcurementTitle",
            ProcurementClassification = "ProcurementClassification",
            ProcurementQualification = "ProcurementQualification",
            ProcurementRequestedBy = "ProcurementRequestedBy",
            ProcurementRequestorPosition = "ProcurementRequestorPosition",
            ProcurementApprovedBy = "ProcurementApprovedBy",
            ProcurementApproverPosition = "ProcurementApproverPosition",
            ProcurementSapBidderListCreatedBy = "ProcurementSapBidderListCreatedBy",
            ProcurementSapBidderListCreatedDate = "ProcurementSapBidderListCreatedDate",
            ProcurementCreatedBy = "ProcurementCreatedBy",
            ProcurementCreatedDate = "ProcurementCreatedDate",
            ProcurementGuaranteePercentage = "ProcurementGuaranteePercentage",
            ProcurementOfficeAddress = "ProcurementOfficeAddress",
            ProcurementProcValueRangeId = "ProcurementProcValueRangeId",
            ProcurementCommitteeTypeId = "ProcurementCommitteeTypeId",
            ProcurementPerformanceGuaranteeRequired = "ProcurementPerformanceGuaranteeRequired",
            ProcurementTenderPeriod = "ProcurementTenderPeriod",
            ProcurementDeliveryTime = "ProcurementDeliveryTime",
            ProcurementDestinationId = "ProcurementDestinationId",
            ProcurementContractTypeId = "ProcurementContractTypeId",
            ProcurementCurrencyId = "ProcurementCurrencyId",
            ProcurementDocSubmitMethodId = "ProcurementDocSubmitMethodId",
            ProcurementAanwijzingExists = "ProcurementAanwijzingExists",
            ProcurementAanwijzingDate = "ProcurementAanwijzingDate",
            ProcurementAanwijzingClosingDate = "ProcurementAanwijzingClosingDate",
            ProcurementAanwijzingLocation = "ProcurementAanwijzingLocation",
            ProcurementAanwijzingClosingLocation = "ProcurementAanwijzingClosingLocation",
            ProcurementAanwijzingSecretary = "ProcurementAanwijzingSecretary",
            ProcurementAanwijzingSummary = "ProcurementAanwijzingSummary",
            ProcurementFieldSurveyExists = "ProcurementFieldSurveyExists",
            ProcurementFieldSurveyAddress = "ProcurementFieldSurveyAddress",
            ProcurementItbDocumentFile = "ProcurementItbDocumentFile",
            ProcurementItbDocumentName = "ProcurementItbDocumentName",
            ProcurementRksDocumentFile = "ProcurementRksDocumentFile",
            ProcurementRksDocumentName = "ProcurementRksDocumentName",
            ProcurementTenderDocSubmitOpenDate = "ProcurementTenderDocSubmitOpenDate",
            ProcurementTenderDocSubmitCloseDate = "ProcurementTenderDocSubmitCloseDate",
            ProcurementOrderTypeId = "ProcurementOrderTypeId",
            ProcurementPurchDocNum = "ProcurementPurchDocNum",
            ProcurementRfqDate = "ProcurementRfqDate",
            ProcurementQuotationDeadline = "ProcurementQuotationDeadline",
            ProcurementPurchGroup = "ProcurementPurchGroup",
            ProcurementPrNo = "ProcurementPrNo",
            ProcurementAuthPersonName = "ProcurementAuthPersonName",
            ProcurementAuthPosition = "ProcurementAuthPosition",
            ProcurementHeaderText = "ProcurementHeaderText",
            ProcurementHeaderNote = "ProcurementHeaderNote",
            ProcurementWorkDescription = "ProcurementWorkDescription",
            ProcurementBankKey = "ProcurementBankKey",
            ProcurementPoCover = "ProcurementPoCover",
            ProcurementDeliveryAddress = "ProcurementDeliveryAddress",
            ProcurementToPTargVal = "ProcurementToPTargVal",
            ProcurementYourReference = "ProcurementYourReference",
            ProcurementOurReference = "ProcurementOurReference",
            ProcurementSalesPerson = "ProcurementSalesPerson",
            ProcurementTelephone = "ProcurementTelephone",
            ProcurementValidityStart = "ProcurementValidityStart",
            ProcurementValidityEnd = "ProcurementValidityEnd",
            ProcurementItemInterval = "ProcurementItemInterval",
            ProcurementSubItemInterval = "ProcurementSubItemInterval",
            ProcurementWarranty = "ProcurementWarranty",
            ProcurementLanguage = "ProcurementLanguage",
            ProcurementReviewOeRequired = "ProcurementReviewOeRequired",
            ProcurementProcAgreement = "ProcurementProcAgreement",
            ProcurementProcAgreementDate = "ProcurementProcAgreementDate",
            ProcurementProcAsRequired = "ProcurementProcAsRequired",
            ProcurementProcAsApproved = "ProcurementProcAsApproved",
            ProcurementProcAsApprovedDate = "ProcurementProcAsApprovedDate",
            ProcurementProcAsDesc = "ProcurementProcAsDesc",
            ProcurementFinalConclusionDesc = "ProcurementFinalConclusionDesc",
            ProcurementWinnerNominationDate = "ProcurementWinnerNominationDate",
            ProcurementObjectionCloseDate = "ProcurementObjectionCloseDate",
            ProcurementPoDocName = "ProcurementPoDocName",
            ProcurementTemporaryPic = "ProcurementTemporaryPic",
            ProcurementPoNumber = "ProcurementPoNumber",
            ProcurementPoDocFile = "ProcurementPoDocFile",
            ProcurementF1SubmitDate = "ProcurementF1SubmitDate",
            ProcurementF1SubmitBy = "ProcurementF1SubmitBy",
            ProcurementF2SubmitDate = "ProcurementF2SubmitDate",
            ProcurementF2SubmitBy = "ProcurementF2SubmitBy",
            ProcurementF3SubmitDate = "ProcurementF3SubmitDate",
            ProcurementF3SubmitBy = "ProcurementF3SubmitBy",
            ProcurementF31SubmitDate = "ProcurementF31SubmitDate",
            ProcurementF31SubmitBy = "ProcurementF31SubmitBy",
            ProcurementF4SubmitDate = "ProcurementF4SubmitDate",
            ProcurementF4SubmitBy = "ProcurementF4SubmitBy",
            ProcurementF5SubmitDate = "ProcurementF5SubmitDate",
            ProcurementF5SubmitBy = "ProcurementF5SubmitBy",
            ProcurementF6SubmitDate = "ProcurementF6SubmitDate",
            ProcurementF6SubmitBy = "ProcurementF6SubmitBy",
            ProcurementF7SubmitDate = "ProcurementF7SubmitDate",
            ProcurementF7SubmitBy = "ProcurementF7SubmitBy",
            ProcurementF8SubmitDate = "ProcurementF8SubmitDate",
            ProcurementF8SubmitBy = "ProcurementF8SubmitBy",
            ProcurementF9SubmitDate = "ProcurementF9SubmitDate",
            ProcurementF9SubmitBy = "ProcurementF9SubmitBy",
            ProcurementF10SubmitDate = "ProcurementF10SubmitDate",
            ProcurementF10SubmitBy = "ProcurementF10SubmitBy",
            ProcurementF11SubmitDate = "ProcurementF11SubmitDate",
            ProcurementF11SubmitBy = "ProcurementF11SubmitBy",
            ProcurementF12SubmitDate = "ProcurementF12SubmitDate",
            ProcurementF12SubmitBy = "ProcurementF12SubmitBy",
            ProcurementF13SubmitDate = "ProcurementF13SubmitDate",
            ProcurementF13SubmitBy = "ProcurementF13SubmitBy",
            ProcurementF14SubmitDate = "ProcurementF14SubmitDate",
            ProcurementF14SubmitBy = "ProcurementF14SubmitBy",
            ProcurementF15SubmitDate = "ProcurementF15SubmitDate",
            ProcurementF15SubmitBy = "ProcurementF15SubmitBy",
            ProcurementF16SubmitDate = "ProcurementF16SubmitDate",
            ProcurementF16SubmitBy = "ProcurementF16SubmitBy",
            ProcurementF17SubmitDate = "ProcurementF17SubmitDate",
            ProcurementF17SubmitBy = "ProcurementF17SubmitBy",
            ProcurementProcurementMethodId = "ProcurementProcurementMethodId",
            RfqItemProcurementId = "RfqItemProcurementId",
            RfqItemOwnerEstimateReview = "RfqItemOwnerEstimateReview",
            RfqItemOwnerEstimate = "RfqItemOwnerEstimate",
            RfqItemPurchasingDocument = "RfqItemPurchasingDocument",
            ItemSequence = "ItemSequence",
            RfqItemDeletionIndicator = "RfqItemDeletionIndicator",
            RfqItemRfqStatus = "RfqItemRfqStatus",
            RfqItemLastChangedOn = "RfqItemLastChangedOn",
            ShortText = "ShortText",
            Material = "Material",
            RfqItemPlant = "RfqItemPlant",
            RfqItemStorageLocation = "RfqItemStorageLocation",
            RfqItemReqTrackingNumber = "RfqItemReqTrackingNumber",
            RfqItemMaterialGroup = "RfqItemMaterialGroup",
            RfqItemPurchasingInfoRec = "RfqItemPurchasingInfoRec",
            RfqItemVendorMaterialNo = "RfqItemVendorMaterialNo",
            RfqItemTargetQuantity = "RfqItemTargetQuantity",
            RfqItemOrderQuantity = "RfqItemOrderQuantity",
            RfqItemOrderUnit = "RfqItemOrderUnit",
            RfqItemOrderPriceUnit = "RfqItemOrderPriceUnit",
            RfqItemQuantityConversion = "RfqItemQuantityConversion",
            RfqItemEqualTo = "RfqItemEqualTo",
            RfqItemDenominator = "RfqItemDenominator",
            RfqItemNetOrderPrice = "RfqItemNetOrderPrice",
            RfqItemPriceUnit = "RfqItemPriceUnit",
            RfqItemNetOrderValue = "RfqItemNetOrderValue",
            RfqItemGrossOrderValue = "RfqItemGrossOrderValue",
            RfqItemQuotationDeadline = "RfqItemQuotationDeadline",
            RfqItemGrProcessingTime = "RfqItemGrProcessingTime",
            RfqItemTaxCode = "RfqItemTaxCode",
            RfqItemBaseUnitOfMeasure = "RfqItemBaseUnitOfMeasure",
            RfqItemShippingInstr = "RfqItemShippingInstr",
            RfqItemOaTargetValue = "RfqItemOaTargetValue",
            RfqItemPriceDate = "RfqItemPriceDate",
            RfqItemPurchDocCategory = "RfqItemPurchDocCategory",
            RfqItemEffectiveValue = "RfqItemEffectiveValue",
            RfqItemAffectsCommitments = "RfqItemAffectsCommitments",
            RfqItemMaterialType = "RfqItemMaterialType",
            RfqItemSubitemCategory = "RfqItemSubitemCategory",
            RfqItemSubItems = "RfqItemSubItems",
            RfqItemSubtotal1 = "RfqItemSubtotal1",
            RfqItemSubtotal2 = "RfqItemSubtotal2",
            RfqItemSubtotal3 = "RfqItemSubtotal3",
            RfqItemSubtotal4 = "RfqItemSubtotal4",
            RfqItemSubtotal5 = "RfqItemSubtotal5",
            EvaluationConclusionItemName = "EvaluationConclusionItemName",
            EvaluationConclusionItemDescription = "EvaluationConclusionItemDescription"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    namespace ProcParticipantItemService {
        const baseUrl = "Procurement/ProcParticipantItem";
        function Create(request: Serenity.SaveRequest<ProcParticipantItemRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProcParticipantItemRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcParticipantItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcParticipantItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/ProcParticipantItem/Create",
            Update = "Procurement/ProcParticipantItem/Update",
            Delete = "Procurement/ProcParticipantItem/Delete",
            Retrieve = "Procurement/ProcParticipantItem/Retrieve",
            List = "Procurement/ProcParticipantItem/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    interface ProcParticipantRow {
        ProcParticipantId?: number;
        ProcurementId?: number;
        SequenceNo?: number;
        VendorId?: string;
        PriceDocumentFile?: string;
        PriceDocumentName?: string;
        TechSpecDocFile?: string;
        TechSpecDocName?: string;
        SupportingLetterFile?: string;
        SupportingLetterName?: string;
        CatalogFile?: string;
        CatalogName?: string;
        SubmitDocTnc?: boolean;
        SubmitDocTncDate?: string;
        AdminDocExists?: _Ext.AdaTidakAda;
        TechSpecDocExists?: _Ext.AdaTidakAda;
        SupportingLetterExists?: _Ext.AdaTidakAda;
        CatalogExists?: _Ext.AdaTidakAda;
        OpeningDocDesc?: string;
        AdminDocAtk?: number;
        TechSpecDocAtk?: number;
        SupportingLetterAtk?: number;
        CatalogAtk?: number;
        EvaluationDesc?: string;
        ClarificationRequest?: string;
        EvaluationConclusionId?: number;
        QuoteDesc?: string;
        ClarificationOffer?: string;
        ClarificationResult?: string;
        Source?: string;
        F5ParticipantSubmitDate?: string;
        F5ParticipantSubmitBy?: string;
        FinalBidPrice?: number;
        SubmitObjection?: boolean;
        ObjectionTerms?: string;
        ObjectionDescription?: string;
        ProcParticipantItems?: ProcParticipantItemRow[];
        F15ParticipantSubmitDate?: string;
        F15ParticipantSubmitBy?: string;
        Invitation?: _Ext.UndangTidakUndang;
        ProcurementProcurementTypeId?: string;
        ProcurementStatus?: string;
        ProcurementCollectiveNumber?: string;
        ProcurementTitle?: string;
        ProcurementClassification?: string;
        ProcurementQualification?: string;
        ProcurementRequestedBy?: string;
        ProcurementRequestorPosition?: string;
        ProcurementApprovedBy?: string;
        ProcurementApproverPosition?: string;
        ProcurementSapBidderListCreatedBy?: string;
        ProcurementSapBidderListCreatedDate?: string;
        ProcurementCreatedBy?: string;
        ProcurementCreatedDate?: string;
        ProcurementGuaranteePercentage?: number;
        ProcurementOfficeAddress?: number;
        ProcurementProcValueRangeId?: number;
        ProcurementCommitteeTypeId?: number;
        ProcurementPerformanceGuaranteeRequired?: boolean;
        ProcurementTenderPeriod?: number;
        ProcurementDeliveryTime?: number;
        ProcurementDestinationId?: number;
        ProcurementContractTypeId?: number;
        ProcurementCurrencyId?: string;
        ProcurementDocSubmitMethodId?: number;
        DocSubmitMethodId?: number;
        DocSubmitMethodName?: string;
        ProcurementAanwijzingExists?: boolean;
        ProcurementAanwijzingDate?: string;
        ProcurementAanwijzingClosingDate?: string;
        ProcurementAanwijzingLocation?: string;
        ProcurementAanwijzingClosingLocation?: string;
        ProcurementAanwijzingSecretary?: string;
        ProcurementAanwijzingSummary?: string;
        ProcurementFieldSurveyExists?: boolean;
        ProcurementFieldSurveyAddress?: string;
        ProcurementItbDocumentFile?: string;
        ProcurementItbDocumentName?: string;
        ProcurementRksDocumentFile?: string;
        ProcurementRksDocumentName?: string;
        ProcurementTenderDocSubmitOpenDate?: string;
        ProcurementTenderDocSubmitOpenDay?: string;
        ProcurementTenderDocSubmitOpenDateOnly?: string;
        ProcurementTenderDocSubmitOpenTime?: string;
        ProcurementTenderDocSubmitCloseDate?: string;
        ProcurementOrderTypeId?: string;
        ProcurementPurchDocNum?: string;
        ProcurementRfqDate?: string;
        ProcurementQuotationDeadline?: string;
        ProcurementPurchGroup?: string;
        ProcurementPrNo?: string;
        ProcurementAuthPersonName?: string;
        ProcurementAuthPosition?: string;
        ProcurementHeaderText?: string;
        ProcurementHeaderNote?: string;
        ProcurementWorkDescription?: string;
        ProcurementBankKey?: string;
        ProcurementPoCover?: string;
        ProcurementDeliveryAddress?: string;
        ProcurementToPTargVal?: string;
        ProcurementYourReference?: string;
        ProcurementOurReference?: string;
        ProcurementSalesPerson?: string;
        ProcurementTelephone?: string;
        ProcurementValidityStart?: string;
        ProcurementValidityEnd?: string;
        ProcurementItemInterval?: number;
        ProcurementSubItemInterval?: number;
        ProcurementWarranty?: string;
        ProcurementLanguage?: string;
        ProcurementReviewOeRequired?: boolean;
        ProcurementProcAgreement?: boolean;
        ProcurementProcAgreementDate?: string;
        ProcurementProcAsRequired?: boolean;
        ProcurementProcAsApproved?: boolean;
        ProcurementProcAsApprovedDate?: string;
        ProcurementProcAsDesc?: string;
        ProcurementFinalConclusionDesc?: string;
        ProcurementWinnerNominationDate?: string;
        ProcurementObjectionCloseDate?: string;
        ProcurementPoDocName?: string;
        ProcurementTemporaryPic?: string;
        ProcurementPoNumber?: string;
        ProcurementPoDocFile?: string;
        ProcurementF1SubmitDate?: string;
        ProcurementF1SubmitBy?: string;
        ProcurementF2SubmitDate?: string;
        ProcurementF2SubmitBy?: string;
        ProcurementF3SubmitDate?: string;
        ProcurementF3SubmitBy?: string;
        ProcurementF31SubmitDate?: string;
        ProcurementF31SubmitBy?: string;
        ProcurementF4SubmitDate?: string;
        ProcurementF4SubmitBy?: string;
        ProcurementF5SubmitDate?: string;
        ProcurementF5SubmitBy?: string;
        ProcurementF6SubmitDate?: string;
        ProcurementF6SubmitBy?: string;
        ProcurementF7SubmitDate?: string;
        ProcurementF7SubmitBy?: string;
        ProcurementF8SubmitDate?: string;
        ProcurementF8SubmitBy?: string;
        ProcurementF9SubmitDate?: string;
        ProcurementF9SubmitBy?: string;
        ProcurementF10SubmitDate?: string;
        ProcurementF10SubmitBy?: string;
        ProcurementF11SubmitDate?: string;
        ProcurementF11SubmitBy?: string;
        ProcurementF12SubmitDate?: string;
        ProcurementF12SubmitBy?: string;
        ProcurementF13SubmitDate?: string;
        ProcurementF13SubmitBy?: string;
        ProcurementF14SubmitDate?: string;
        ProcurementF14SubmitBy?: string;
        ProcurementF15SubmitDate?: string;
        ProcurementF15SubmitBy?: string;
        ProcurementF16SubmitDate?: string;
        ProcurementF16SubmitBy?: string;
        ProcurementF17SubmitDate?: string;
        ProcurementF17SubmitBy?: string;
        ProcurementProcurementMethodId?: string;
        AdminDocAtkName?: string;
        AdminDocAtkDescription?: string;
        TechSpecDocAtkName?: string;
        TechSpecDocAtkDescription?: string;
        SupportingLetterAtkName?: string;
        SupportingLetterAtkDescription?: string;
        CatalogAtkName?: string;
        CatalogAtkDescription?: string;
        EvaluationConclusionName?: string;
        EvaluationConclusionDescription?: string;
        VendorName?: string;
        VendorPenaltyCode?: string;
        Qualification?: string;
    }
    namespace ProcParticipantRow {
        const idProperty = "ProcParticipantId";
        const nameProperty = "VendorId";
        const localTextPrefix = "Procurement.ProcParticipant";
        const lookupKey = "Procurement.ProcParticipant";
        function getLookup(): Q.Lookup<ProcParticipantRow>;
        const enum Fields {
            ProcParticipantId = "ProcParticipantId",
            ProcurementId = "ProcurementId",
            SequenceNo = "SequenceNo",
            VendorId = "VendorId",
            PriceDocumentFile = "PriceDocumentFile",
            PriceDocumentName = "PriceDocumentName",
            TechSpecDocFile = "TechSpecDocFile",
            TechSpecDocName = "TechSpecDocName",
            SupportingLetterFile = "SupportingLetterFile",
            SupportingLetterName = "SupportingLetterName",
            CatalogFile = "CatalogFile",
            CatalogName = "CatalogName",
            SubmitDocTnc = "SubmitDocTnc",
            SubmitDocTncDate = "SubmitDocTncDate",
            AdminDocExists = "AdminDocExists",
            TechSpecDocExists = "TechSpecDocExists",
            SupportingLetterExists = "SupportingLetterExists",
            CatalogExists = "CatalogExists",
            OpeningDocDesc = "OpeningDocDesc",
            AdminDocAtk = "AdminDocAtk",
            TechSpecDocAtk = "TechSpecDocAtk",
            SupportingLetterAtk = "SupportingLetterAtk",
            CatalogAtk = "CatalogAtk",
            EvaluationDesc = "EvaluationDesc",
            ClarificationRequest = "ClarificationRequest",
            EvaluationConclusionId = "EvaluationConclusionId",
            QuoteDesc = "QuoteDesc",
            ClarificationOffer = "ClarificationOffer",
            ClarificationResult = "ClarificationResult",
            Source = "Source",
            F5ParticipantSubmitDate = "F5ParticipantSubmitDate",
            F5ParticipantSubmitBy = "F5ParticipantSubmitBy",
            FinalBidPrice = "FinalBidPrice",
            SubmitObjection = "SubmitObjection",
            ObjectionTerms = "ObjectionTerms",
            ObjectionDescription = "ObjectionDescription",
            ProcParticipantItems = "ProcParticipantItems",
            F15ParticipantSubmitDate = "F15ParticipantSubmitDate",
            F15ParticipantSubmitBy = "F15ParticipantSubmitBy",
            Invitation = "Invitation",
            ProcurementProcurementTypeId = "ProcurementProcurementTypeId",
            ProcurementStatus = "ProcurementStatus",
            ProcurementCollectiveNumber = "ProcurementCollectiveNumber",
            ProcurementTitle = "ProcurementTitle",
            ProcurementClassification = "ProcurementClassification",
            ProcurementQualification = "ProcurementQualification",
            ProcurementRequestedBy = "ProcurementRequestedBy",
            ProcurementRequestorPosition = "ProcurementRequestorPosition",
            ProcurementApprovedBy = "ProcurementApprovedBy",
            ProcurementApproverPosition = "ProcurementApproverPosition",
            ProcurementSapBidderListCreatedBy = "ProcurementSapBidderListCreatedBy",
            ProcurementSapBidderListCreatedDate = "ProcurementSapBidderListCreatedDate",
            ProcurementCreatedBy = "ProcurementCreatedBy",
            ProcurementCreatedDate = "ProcurementCreatedDate",
            ProcurementGuaranteePercentage = "ProcurementGuaranteePercentage",
            ProcurementOfficeAddress = "ProcurementOfficeAddress",
            ProcurementProcValueRangeId = "ProcurementProcValueRangeId",
            ProcurementCommitteeTypeId = "ProcurementCommitteeTypeId",
            ProcurementPerformanceGuaranteeRequired = "ProcurementPerformanceGuaranteeRequired",
            ProcurementTenderPeriod = "ProcurementTenderPeriod",
            ProcurementDeliveryTime = "ProcurementDeliveryTime",
            ProcurementDestinationId = "ProcurementDestinationId",
            ProcurementContractTypeId = "ProcurementContractTypeId",
            ProcurementCurrencyId = "ProcurementCurrencyId",
            ProcurementDocSubmitMethodId = "ProcurementDocSubmitMethodId",
            DocSubmitMethodId = "DocSubmitMethodId",
            DocSubmitMethodName = "DocSubmitMethodName",
            ProcurementAanwijzingExists = "ProcurementAanwijzingExists",
            ProcurementAanwijzingDate = "ProcurementAanwijzingDate",
            ProcurementAanwijzingClosingDate = "ProcurementAanwijzingClosingDate",
            ProcurementAanwijzingLocation = "ProcurementAanwijzingLocation",
            ProcurementAanwijzingClosingLocation = "ProcurementAanwijzingClosingLocation",
            ProcurementAanwijzingSecretary = "ProcurementAanwijzingSecretary",
            ProcurementAanwijzingSummary = "ProcurementAanwijzingSummary",
            ProcurementFieldSurveyExists = "ProcurementFieldSurveyExists",
            ProcurementFieldSurveyAddress = "ProcurementFieldSurveyAddress",
            ProcurementItbDocumentFile = "ProcurementItbDocumentFile",
            ProcurementItbDocumentName = "ProcurementItbDocumentName",
            ProcurementRksDocumentFile = "ProcurementRksDocumentFile",
            ProcurementRksDocumentName = "ProcurementRksDocumentName",
            ProcurementTenderDocSubmitOpenDate = "ProcurementTenderDocSubmitOpenDate",
            ProcurementTenderDocSubmitOpenDay = "ProcurementTenderDocSubmitOpenDay",
            ProcurementTenderDocSubmitOpenDateOnly = "ProcurementTenderDocSubmitOpenDateOnly",
            ProcurementTenderDocSubmitOpenTime = "ProcurementTenderDocSubmitOpenTime",
            ProcurementTenderDocSubmitCloseDate = "ProcurementTenderDocSubmitCloseDate",
            ProcurementOrderTypeId = "ProcurementOrderTypeId",
            ProcurementPurchDocNum = "ProcurementPurchDocNum",
            ProcurementRfqDate = "ProcurementRfqDate",
            ProcurementQuotationDeadline = "ProcurementQuotationDeadline",
            ProcurementPurchGroup = "ProcurementPurchGroup",
            ProcurementPrNo = "ProcurementPrNo",
            ProcurementAuthPersonName = "ProcurementAuthPersonName",
            ProcurementAuthPosition = "ProcurementAuthPosition",
            ProcurementHeaderText = "ProcurementHeaderText",
            ProcurementHeaderNote = "ProcurementHeaderNote",
            ProcurementWorkDescription = "ProcurementWorkDescription",
            ProcurementBankKey = "ProcurementBankKey",
            ProcurementPoCover = "ProcurementPoCover",
            ProcurementDeliveryAddress = "ProcurementDeliveryAddress",
            ProcurementToPTargVal = "ProcurementToPTargVal",
            ProcurementYourReference = "ProcurementYourReference",
            ProcurementOurReference = "ProcurementOurReference",
            ProcurementSalesPerson = "ProcurementSalesPerson",
            ProcurementTelephone = "ProcurementTelephone",
            ProcurementValidityStart = "ProcurementValidityStart",
            ProcurementValidityEnd = "ProcurementValidityEnd",
            ProcurementItemInterval = "ProcurementItemInterval",
            ProcurementSubItemInterval = "ProcurementSubItemInterval",
            ProcurementWarranty = "ProcurementWarranty",
            ProcurementLanguage = "ProcurementLanguage",
            ProcurementReviewOeRequired = "ProcurementReviewOeRequired",
            ProcurementProcAgreement = "ProcurementProcAgreement",
            ProcurementProcAgreementDate = "ProcurementProcAgreementDate",
            ProcurementProcAsRequired = "ProcurementProcAsRequired",
            ProcurementProcAsApproved = "ProcurementProcAsApproved",
            ProcurementProcAsApprovedDate = "ProcurementProcAsApprovedDate",
            ProcurementProcAsDesc = "ProcurementProcAsDesc",
            ProcurementFinalConclusionDesc = "ProcurementFinalConclusionDesc",
            ProcurementWinnerNominationDate = "ProcurementWinnerNominationDate",
            ProcurementObjectionCloseDate = "ProcurementObjectionCloseDate",
            ProcurementPoDocName = "ProcurementPoDocName",
            ProcurementTemporaryPic = "ProcurementTemporaryPic",
            ProcurementPoNumber = "ProcurementPoNumber",
            ProcurementPoDocFile = "ProcurementPoDocFile",
            ProcurementF1SubmitDate = "ProcurementF1SubmitDate",
            ProcurementF1SubmitBy = "ProcurementF1SubmitBy",
            ProcurementF2SubmitDate = "ProcurementF2SubmitDate",
            ProcurementF2SubmitBy = "ProcurementF2SubmitBy",
            ProcurementF3SubmitDate = "ProcurementF3SubmitDate",
            ProcurementF3SubmitBy = "ProcurementF3SubmitBy",
            ProcurementF31SubmitDate = "ProcurementF31SubmitDate",
            ProcurementF31SubmitBy = "ProcurementF31SubmitBy",
            ProcurementF4SubmitDate = "ProcurementF4SubmitDate",
            ProcurementF4SubmitBy = "ProcurementF4SubmitBy",
            ProcurementF5SubmitDate = "ProcurementF5SubmitDate",
            ProcurementF5SubmitBy = "ProcurementF5SubmitBy",
            ProcurementF6SubmitDate = "ProcurementF6SubmitDate",
            ProcurementF6SubmitBy = "ProcurementF6SubmitBy",
            ProcurementF7SubmitDate = "ProcurementF7SubmitDate",
            ProcurementF7SubmitBy = "ProcurementF7SubmitBy",
            ProcurementF8SubmitDate = "ProcurementF8SubmitDate",
            ProcurementF8SubmitBy = "ProcurementF8SubmitBy",
            ProcurementF9SubmitDate = "ProcurementF9SubmitDate",
            ProcurementF9SubmitBy = "ProcurementF9SubmitBy",
            ProcurementF10SubmitDate = "ProcurementF10SubmitDate",
            ProcurementF10SubmitBy = "ProcurementF10SubmitBy",
            ProcurementF11SubmitDate = "ProcurementF11SubmitDate",
            ProcurementF11SubmitBy = "ProcurementF11SubmitBy",
            ProcurementF12SubmitDate = "ProcurementF12SubmitDate",
            ProcurementF12SubmitBy = "ProcurementF12SubmitBy",
            ProcurementF13SubmitDate = "ProcurementF13SubmitDate",
            ProcurementF13SubmitBy = "ProcurementF13SubmitBy",
            ProcurementF14SubmitDate = "ProcurementF14SubmitDate",
            ProcurementF14SubmitBy = "ProcurementF14SubmitBy",
            ProcurementF15SubmitDate = "ProcurementF15SubmitDate",
            ProcurementF15SubmitBy = "ProcurementF15SubmitBy",
            ProcurementF16SubmitDate = "ProcurementF16SubmitDate",
            ProcurementF16SubmitBy = "ProcurementF16SubmitBy",
            ProcurementF17SubmitDate = "ProcurementF17SubmitDate",
            ProcurementF17SubmitBy = "ProcurementF17SubmitBy",
            ProcurementProcurementMethodId = "ProcurementProcurementMethodId",
            AdminDocAtkName = "AdminDocAtkName",
            AdminDocAtkDescription = "AdminDocAtkDescription",
            TechSpecDocAtkName = "TechSpecDocAtkName",
            TechSpecDocAtkDescription = "TechSpecDocAtkDescription",
            SupportingLetterAtkName = "SupportingLetterAtkName",
            SupportingLetterAtkDescription = "SupportingLetterAtkDescription",
            CatalogAtkName = "CatalogAtkName",
            CatalogAtkDescription = "CatalogAtkDescription",
            EvaluationConclusionName = "EvaluationConclusionName",
            EvaluationConclusionDescription = "EvaluationConclusionDescription",
            VendorName = "VendorName",
            VendorPenaltyCode = "VendorPenaltyCode",
            Qualification = "Qualification"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    namespace ProcParticipantService {
        const baseUrl = "Procurement/ProcParticipant";
        function Create(request: Serenity.SaveRequest<ProcParticipantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProcParticipantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcParticipantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcParticipantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/ProcParticipant/Create",
            Update = "Procurement/ProcParticipant/Update",
            Delete = "Procurement/ProcParticipant/Delete",
            Retrieve = "Procurement/ProcParticipant/Retrieve",
            List = "Procurement/ProcParticipant/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface ProcPrForm {
        PrNo: Serenity.StringEditor;
        PrNoScanPrFile: Serenity.ImageUploadEditor;
        PrNoScanPrName: Serenity.StringEditor;
        InsertDate: Serenity.DateEditor;
        InsertBy: Serenity.StringEditor;
    }
    class ProcPrForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    interface ProcPrRow {
        ProcPrId?: number;
        ProcurementId?: number;
        PrNo?: string;
        InsertDate?: string;
        InsertBy?: string;
        ProcurementProcurementTypeId?: string;
        ProcurementStatus?: string;
        ProcurementCollectiveNumber?: string;
        ProcurementTitle?: string;
        ProcurementClassification?: string;
        ProcurementQualification?: string;
        ProcurementRequestedBy?: string;
        ProcurementRequestorPosition?: string;
        ProcurementApprovedBy?: string;
        ProcurementApproverPosition?: string;
        ProcurementSapBidderListCreatedBy?: string;
        ProcurementSapBidderListCreatedDate?: string;
        ProcurementCreatedBy?: string;
        ProcurementCreatedDate?: string;
        ProcurementGuaranteePercentage?: number;
        ProcurementOfficeAddress?: number;
        ProcurementProcValueRangeId?: number;
        ProcurementCommitteeTypeId?: number;
        ProcurementPerformanceGuaranteeRequired?: boolean;
        ProcurementTenderPeriod?: number;
        ProcurementDeliveryTime?: number;
        ProcurementDestinationId?: number;
        ProcurementContractTypeId?: number;
        ProcurementCurrencyId?: string;
        ProcurementDocSubmitMethodId?: number;
        ProcurementAanwijzingExists?: boolean;
        ProcurementAanwijzingDate?: string;
        ProcurementAanwijzingClosingDate?: string;
        ProcurementAanwijzingLocation?: string;
        ProcurementAanwijzingClosingLocation?: string;
        ProcurementAanwijzingSecretary?: string;
        ProcurementAanwijzingSummary?: string;
        ProcurementFieldSurveyExists?: boolean;
        ProcurementFieldSurveyAddress?: string;
        ProcurementItbDocumentFile?: string;
        ProcurementItbDocumentName?: string;
        ProcurementRksDocumentFile?: string;
        ProcurementRksDocumentName?: string;
        ProcurementTenderDocSubmitOpenDate?: string;
        ProcurementTenderDocSubmitCloseDate?: string;
        ProcurementOrderTypeId?: string;
        ProcurementPurchDocNum?: string;
        ProcurementRfqDate?: string;
        ProcurementQuotationDeadline?: string;
        ProcurementPurchGroup?: string;
        ProcurementPrNo?: string;
        ProcurementAuthPersonName?: string;
        ProcurementAuthPosition?: string;
        ProcurementHeaderText?: string;
        ProcurementHeaderNote?: string;
        ProcurementWorkDescription?: string;
        ProcurementBankKey?: string;
        ProcurementPoCover?: string;
        ProcurementDeliveryAddress?: string;
        ProcurementToPTargVal?: string;
        ProcurementYourReference?: string;
        ProcurementOurReference?: string;
        ProcurementSalesPerson?: string;
        ProcurementTelephone?: string;
        ProcurementValidityStart?: string;
        ProcurementValidityEnd?: string;
        ProcurementItemInterval?: number;
        ProcurementSubItemInterval?: number;
        ProcurementWarranty?: string;
        ProcurementLanguage?: string;
        ProcurementReviewOeRequired?: boolean;
        ProcurementProcAgreement?: boolean;
        ProcurementProcAgreementDate?: string;
        ProcurementProcAsRequired?: boolean;
        ProcurementProcAsApproved?: boolean;
        ProcurementProcAsApprovedDate?: string;
        ProcurementProcAsDesc?: string;
        ProcurementFinalConclusionDesc?: string;
        ProcurementWinnerNominationDate?: string;
        ProcurementObjectionCloseDate?: string;
        ProcurementPoDocName?: string;
        ProcurementTemporaryPic?: string;
        ProcurementPoNumber?: string;
        ProcurementPoDocFile?: string;
        ProcurementF1SubmitDate?: string;
        ProcurementF1SubmitBy?: string;
        ProcurementF2SubmitDate?: string;
        ProcurementF2SubmitBy?: string;
        ProcurementF3SubmitDate?: string;
        ProcurementF3SubmitBy?: string;
        ProcurementF31SubmitDate?: string;
        ProcurementF31SubmitBy?: string;
        ProcurementF4SubmitDate?: string;
        ProcurementF4SubmitBy?: string;
        ProcurementF5SubmitDate?: string;
        ProcurementF5SubmitBy?: string;
        ProcurementF6SubmitDate?: string;
        ProcurementF6SubmitBy?: string;
        ProcurementF7SubmitDate?: string;
        ProcurementF7SubmitBy?: string;
        ProcurementF8SubmitDate?: string;
        ProcurementF8SubmitBy?: string;
        ProcurementF9SubmitDate?: string;
        ProcurementF9SubmitBy?: string;
        ProcurementF10SubmitDate?: string;
        ProcurementF10SubmitBy?: string;
        ProcurementF11SubmitDate?: string;
        ProcurementF11SubmitBy?: string;
        ProcurementF12SubmitDate?: string;
        ProcurementF12SubmitBy?: string;
        ProcurementF13SubmitDate?: string;
        ProcurementF13SubmitBy?: string;
        ProcurementF14SubmitDate?: string;
        ProcurementF14SubmitBy?: string;
        ProcurementF15SubmitDate?: string;
        ProcurementF15SubmitBy?: string;
        ProcurementF16SubmitDate?: string;
        ProcurementF16SubmitBy?: string;
        ProcurementF17SubmitDate?: string;
        ProcurementF17SubmitBy?: string;
        ProcurementProcurementMethodId?: string;
        PrNoBuyerId?: number;
        PrNoCostCenter?: string;
        PrNoScanPrFile?: string;
        PrNoScanPrName?: string;
        PrNoAssignDate?: string;
        PrNoAssignBy?: string;
        PrNoCreatedDate?: string;
        PrNoCreatedBy?: string;
        PrNoStatus?: string;
    }
    namespace ProcPrRow {
        const idProperty = "ProcPrId";
        const nameProperty = "PrNo";
        const localTextPrefix = "Procurement.ProcPr";
        const enum Fields {
            ProcPrId = "ProcPrId",
            ProcurementId = "ProcurementId",
            PrNo = "PrNo",
            InsertDate = "InsertDate",
            InsertBy = "InsertBy",
            ProcurementProcurementTypeId = "ProcurementProcurementTypeId",
            ProcurementStatus = "ProcurementStatus",
            ProcurementCollectiveNumber = "ProcurementCollectiveNumber",
            ProcurementTitle = "ProcurementTitle",
            ProcurementClassification = "ProcurementClassification",
            ProcurementQualification = "ProcurementQualification",
            ProcurementRequestedBy = "ProcurementRequestedBy",
            ProcurementRequestorPosition = "ProcurementRequestorPosition",
            ProcurementApprovedBy = "ProcurementApprovedBy",
            ProcurementApproverPosition = "ProcurementApproverPosition",
            ProcurementSapBidderListCreatedBy = "ProcurementSapBidderListCreatedBy",
            ProcurementSapBidderListCreatedDate = "ProcurementSapBidderListCreatedDate",
            ProcurementCreatedBy = "ProcurementCreatedBy",
            ProcurementCreatedDate = "ProcurementCreatedDate",
            ProcurementGuaranteePercentage = "ProcurementGuaranteePercentage",
            ProcurementOfficeAddress = "ProcurementOfficeAddress",
            ProcurementProcValueRangeId = "ProcurementProcValueRangeId",
            ProcurementCommitteeTypeId = "ProcurementCommitteeTypeId",
            ProcurementPerformanceGuaranteeRequired = "ProcurementPerformanceGuaranteeRequired",
            ProcurementTenderPeriod = "ProcurementTenderPeriod",
            ProcurementDeliveryTime = "ProcurementDeliveryTime",
            ProcurementDestinationId = "ProcurementDestinationId",
            ProcurementContractTypeId = "ProcurementContractTypeId",
            ProcurementCurrencyId = "ProcurementCurrencyId",
            ProcurementDocSubmitMethodId = "ProcurementDocSubmitMethodId",
            ProcurementAanwijzingExists = "ProcurementAanwijzingExists",
            ProcurementAanwijzingDate = "ProcurementAanwijzingDate",
            ProcurementAanwijzingClosingDate = "ProcurementAanwijzingClosingDate",
            ProcurementAanwijzingLocation = "ProcurementAanwijzingLocation",
            ProcurementAanwijzingClosingLocation = "ProcurementAanwijzingClosingLocation",
            ProcurementAanwijzingSecretary = "ProcurementAanwijzingSecretary",
            ProcurementAanwijzingSummary = "ProcurementAanwijzingSummary",
            ProcurementFieldSurveyExists = "ProcurementFieldSurveyExists",
            ProcurementFieldSurveyAddress = "ProcurementFieldSurveyAddress",
            ProcurementItbDocumentFile = "ProcurementItbDocumentFile",
            ProcurementItbDocumentName = "ProcurementItbDocumentName",
            ProcurementRksDocumentFile = "ProcurementRksDocumentFile",
            ProcurementRksDocumentName = "ProcurementRksDocumentName",
            ProcurementTenderDocSubmitOpenDate = "ProcurementTenderDocSubmitOpenDate",
            ProcurementTenderDocSubmitCloseDate = "ProcurementTenderDocSubmitCloseDate",
            ProcurementOrderTypeId = "ProcurementOrderTypeId",
            ProcurementPurchDocNum = "ProcurementPurchDocNum",
            ProcurementRfqDate = "ProcurementRfqDate",
            ProcurementQuotationDeadline = "ProcurementQuotationDeadline",
            ProcurementPurchGroup = "ProcurementPurchGroup",
            ProcurementPrNo = "ProcurementPrNo",
            ProcurementAuthPersonName = "ProcurementAuthPersonName",
            ProcurementAuthPosition = "ProcurementAuthPosition",
            ProcurementHeaderText = "ProcurementHeaderText",
            ProcurementHeaderNote = "ProcurementHeaderNote",
            ProcurementWorkDescription = "ProcurementWorkDescription",
            ProcurementBankKey = "ProcurementBankKey",
            ProcurementPoCover = "ProcurementPoCover",
            ProcurementDeliveryAddress = "ProcurementDeliveryAddress",
            ProcurementToPTargVal = "ProcurementToPTargVal",
            ProcurementYourReference = "ProcurementYourReference",
            ProcurementOurReference = "ProcurementOurReference",
            ProcurementSalesPerson = "ProcurementSalesPerson",
            ProcurementTelephone = "ProcurementTelephone",
            ProcurementValidityStart = "ProcurementValidityStart",
            ProcurementValidityEnd = "ProcurementValidityEnd",
            ProcurementItemInterval = "ProcurementItemInterval",
            ProcurementSubItemInterval = "ProcurementSubItemInterval",
            ProcurementWarranty = "ProcurementWarranty",
            ProcurementLanguage = "ProcurementLanguage",
            ProcurementReviewOeRequired = "ProcurementReviewOeRequired",
            ProcurementProcAgreement = "ProcurementProcAgreement",
            ProcurementProcAgreementDate = "ProcurementProcAgreementDate",
            ProcurementProcAsRequired = "ProcurementProcAsRequired",
            ProcurementProcAsApproved = "ProcurementProcAsApproved",
            ProcurementProcAsApprovedDate = "ProcurementProcAsApprovedDate",
            ProcurementProcAsDesc = "ProcurementProcAsDesc",
            ProcurementFinalConclusionDesc = "ProcurementFinalConclusionDesc",
            ProcurementWinnerNominationDate = "ProcurementWinnerNominationDate",
            ProcurementObjectionCloseDate = "ProcurementObjectionCloseDate",
            ProcurementPoDocName = "ProcurementPoDocName",
            ProcurementTemporaryPic = "ProcurementTemporaryPic",
            ProcurementPoNumber = "ProcurementPoNumber",
            ProcurementPoDocFile = "ProcurementPoDocFile",
            ProcurementF1SubmitDate = "ProcurementF1SubmitDate",
            ProcurementF1SubmitBy = "ProcurementF1SubmitBy",
            ProcurementF2SubmitDate = "ProcurementF2SubmitDate",
            ProcurementF2SubmitBy = "ProcurementF2SubmitBy",
            ProcurementF3SubmitDate = "ProcurementF3SubmitDate",
            ProcurementF3SubmitBy = "ProcurementF3SubmitBy",
            ProcurementF31SubmitDate = "ProcurementF31SubmitDate",
            ProcurementF31SubmitBy = "ProcurementF31SubmitBy",
            ProcurementF4SubmitDate = "ProcurementF4SubmitDate",
            ProcurementF4SubmitBy = "ProcurementF4SubmitBy",
            ProcurementF5SubmitDate = "ProcurementF5SubmitDate",
            ProcurementF5SubmitBy = "ProcurementF5SubmitBy",
            ProcurementF6SubmitDate = "ProcurementF6SubmitDate",
            ProcurementF6SubmitBy = "ProcurementF6SubmitBy",
            ProcurementF7SubmitDate = "ProcurementF7SubmitDate",
            ProcurementF7SubmitBy = "ProcurementF7SubmitBy",
            ProcurementF8SubmitDate = "ProcurementF8SubmitDate",
            ProcurementF8SubmitBy = "ProcurementF8SubmitBy",
            ProcurementF9SubmitDate = "ProcurementF9SubmitDate",
            ProcurementF9SubmitBy = "ProcurementF9SubmitBy",
            ProcurementF10SubmitDate = "ProcurementF10SubmitDate",
            ProcurementF10SubmitBy = "ProcurementF10SubmitBy",
            ProcurementF11SubmitDate = "ProcurementF11SubmitDate",
            ProcurementF11SubmitBy = "ProcurementF11SubmitBy",
            ProcurementF12SubmitDate = "ProcurementF12SubmitDate",
            ProcurementF12SubmitBy = "ProcurementF12SubmitBy",
            ProcurementF13SubmitDate = "ProcurementF13SubmitDate",
            ProcurementF13SubmitBy = "ProcurementF13SubmitBy",
            ProcurementF14SubmitDate = "ProcurementF14SubmitDate",
            ProcurementF14SubmitBy = "ProcurementF14SubmitBy",
            ProcurementF15SubmitDate = "ProcurementF15SubmitDate",
            ProcurementF15SubmitBy = "ProcurementF15SubmitBy",
            ProcurementF16SubmitDate = "ProcurementF16SubmitDate",
            ProcurementF16SubmitBy = "ProcurementF16SubmitBy",
            ProcurementF17SubmitDate = "ProcurementF17SubmitDate",
            ProcurementF17SubmitBy = "ProcurementF17SubmitBy",
            ProcurementProcurementMethodId = "ProcurementProcurementMethodId",
            PrNoBuyerId = "PrNoBuyerId",
            PrNoCostCenter = "PrNoCostCenter",
            PrNoScanPrFile = "PrNoScanPrFile",
            PrNoScanPrName = "PrNoScanPrName",
            PrNoAssignDate = "PrNoAssignDate",
            PrNoAssignBy = "PrNoAssignBy",
            PrNoCreatedDate = "PrNoCreatedDate",
            PrNoCreatedBy = "PrNoCreatedBy",
            PrNoStatus = "PrNoStatus"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    namespace ProcPrService {
        const baseUrl = "Procurement/ProcPr";
        function Create(request: Serenity.SaveRequest<ProcPrRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProcPrRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcPrRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcPrRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/ProcPr/Create",
            Update = "Procurement/ProcPr/Update",
            Delete = "Procurement/ProcPr/Delete",
            Retrieve = "Procurement/ProcPr/Retrieve",
            List = "Procurement/ProcPr/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    interface ProcResponse extends Serenity.ServiceResponse {
        ExecutionResult?: string;
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface ProcStatusForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }
    class ProcStatusForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    interface ProcStatusRow {
        ProcStatusId?: string;
        Name?: string;
        Description?: string;
    }
    namespace ProcStatusRow {
        const idProperty = "ProcStatusId";
        const nameProperty = "Name";
        const localTextPrefix = "Procurement.ProcStatus";
        const lookupKey = "Procurement.ProcStatus";
        function getLookup(): Q.Lookup<ProcStatusRow>;
        const enum Fields {
            ProcStatusId = "ProcStatusId",
            Name = "Name",
            Description = "Description"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    namespace ProcStatusService {
        const baseUrl = "Procurement/ProcStatus";
        function Create(request: Serenity.SaveRequest<ProcStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProcStatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcStatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcStatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/ProcStatus/Create",
            Update = "Procurement/ProcStatus/Update",
            Delete = "Procurement/ProcStatus/Delete",
            Retrieve = "Procurement/ProcStatus/Retrieve",
            List = "Procurement/ProcStatus/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface ProcurementForm {
        ProcurementTypeId: Serenity.LookupEditor;
        Status: Serenity.LookupEditor;
        CollectiveNumber: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        Classification: Serenity.StringEditor;
        Qualification: Serenity.StringEditor;
        RequestedBy: Serenity.StringEditor;
        RequestorPosition: Serenity.StringEditor;
        ApprovedBy: Serenity.StringEditor;
        ApproverPosition: Serenity.StringEditor;
        SapBidderListCreatedBy: Serenity.StringEditor;
        SapBidderListCreatedDate: Serenity.DateTimeEditor;
        CreatedBy: Serenity.StringEditor;
        CreatedDate: Serenity.DateTimeEditor;
        GuaranteePercentage: Serenity.DecimalEditor;
        OfficeAddress: Serenity.LookupEditor;
        ProcValueRangeId: Serenity.LookupEditor;
        CommitteeTypeId: Serenity.LookupEditor;
        PerformanceGuaranteeRequired: _Ext.YaTidakEditor;
        TenderPeriod: Serenity.IntegerEditor;
        DeliveryTime: Serenity.IntegerEditor;
        DestinationId: Serenity.LookupEditor;
        ContractTypeId: Serenity.LookupEditor;
        CurrencyId: Serenity.LookupEditor;
        DocSubmitMethodId: Serenity.LookupEditor;
        AanwijzingExists: Serenity.BooleanEditor;
        AanwijzingDate: Serenity.DateEditor;
        AanwijzingClosingDate: Serenity.DateEditor;
        AanwijzingLocation: Serenity.TextAreaEditor;
        AanwijzingClosingLocation: Serenity.TextAreaEditor;
        AanwijzingSecretary: Serenity.StringEditor;
        AanwijzingSummary: Serenity.TextAreaEditor;
        FieldSurveyExists: Serenity.EnumEditor;
        FieldSurveyAddress: Serenity.TextAreaEditor;
        ItbDocumentFile: Serenity.ImageUploadEditor;
        ItbDocumentName: Serenity.StringEditor;
        RksDocumentFile: Serenity.ImageUploadEditor;
        RksDocumentName: Serenity.StringEditor;
        TenderDocSubmitOpenDate: Serenity.DateTimeEditor;
        TenderDocSubmitCloseDate: Serenity.DateTimeEditor;
        OrderTypeId: Serenity.LookupEditor;
        PurchDocNum: Serenity.StringEditor;
        RfqDate: Serenity.DateTimeEditor;
        QuotationDeadline: Serenity.DateTimeEditor;
        PurchGroup: Serenity.StringEditor;
        PrNo: Serenity.StringEditor;
        AuthPersonName: Serenity.StringEditor;
        AuthPosition: Serenity.StringEditor;
        HeaderText: Serenity.TextAreaEditor;
        HeaderNote: Serenity.TextAreaEditor;
        WorkDescription: Serenity.TextAreaEditor;
        BankKey: Serenity.StringEditor;
        PoCover: Serenity.StringEditor;
        DeliveryAddress: Serenity.TextAreaEditor;
        ToPTargVal: Serenity.StringEditor;
        YourReference: Serenity.StringEditor;
        OurReference: Serenity.StringEditor;
        SalesPerson: Serenity.StringEditor;
        Telephone: Serenity.StringEditor;
        ValidityStart: Serenity.DateEditor;
        ValidityEnd: Serenity.DateEditor;
        ItemInterval: Serenity.DecimalEditor;
        SubItemInterval: Serenity.DecimalEditor;
        Warranty: Serenity.DateEditor;
        Language: Serenity.StringEditor;
        ReviewOeRequired: _Ext.YaTidakEditor;
        ProcAgreement: Serenity.EnumEditor;
        ProcAgreementDate: Serenity.DateTimeEditor;
        ProcAsRequired: Serenity.EnumEditor;
        ProcAsApproved: Serenity.EnumEditor;
        ProcAsApprovedDate: Serenity.DateEditor;
        ProcAsDesc: Serenity.StringEditor;
        FinalConclusionDesc: Serenity.TextAreaEditor;
        WinnerNominationDate: Serenity.DateTimeEditor;
        ObjectionCloseDate: Serenity.DateTimeEditor;
        PoDocName: Serenity.StringEditor;
        TemporaryPic: Serenity.StringEditor;
        PoNumber: Serenity.StringEditor;
        PoDocFile: Serenity.ImageUploadEditor;
        F1SubmitDate: Serenity.DateTimeEditor;
        F1SubmitBy: Serenity.StringEditor;
        F2SubmitDate: Serenity.DateTimeEditor;
        F2SubmitBy: Serenity.StringEditor;
        F3SubmitDate: Serenity.DateTimeEditor;
        F3SubmitBy: Serenity.StringEditor;
        F31SubmitDate: Serenity.DateTimeEditor;
        F31SubmitBy: Serenity.StringEditor;
        F4SubmitDate: Serenity.DateTimeEditor;
        F4SubmitBy: Serenity.StringEditor;
        F5SubmitDate: Serenity.DateTimeEditor;
        F5SubmitBy: Serenity.StringEditor;
        F6SubmitDate: Serenity.DateTimeEditor;
        F6SubmitBy: Serenity.StringEditor;
        F7SubmitDate: Serenity.DateTimeEditor;
        F7SubmitBy: Serenity.StringEditor;
        F8SubmitDate: Serenity.DateTimeEditor;
        F8SubmitBy: Serenity.StringEditor;
        F9SubmitDate: Serenity.DateTimeEditor;
        F9SubmitBy: Serenity.StringEditor;
        F10SubmitDate: Serenity.DateTimeEditor;
        F10SubmitBy: Serenity.StringEditor;
        F11SubmitDate: Serenity.DateTimeEditor;
        F11SubmitBy: Serenity.StringEditor;
        F12SubmitDate: Serenity.DateTimeEditor;
        F12SubmitBy: Serenity.StringEditor;
        F13SubmitDate: Serenity.DateTimeEditor;
        F13SubmitBy: Serenity.StringEditor;
        F14SubmitDate: Serenity.DateTimeEditor;
        F14SubmitBy: Serenity.StringEditor;
        F15SubmitDate: Serenity.DateTimeEditor;
        F15SubmitBy: Serenity.StringEditor;
        F16SubmitDate: Serenity.DateTimeEditor;
        F16SubmitBy: Serenity.StringEditor;
        F17SubmitDate: Serenity.DateTimeEditor;
        F17SubmitBy: Serenity.StringEditor;
        ProcParticipant: ProcParticipantsEditor;
    }
    class ProcurementForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface ProcurementMethodForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }
    class ProcurementMethodForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    interface ProcurementMethodRow {
        ProcurementMethodId?: string;
        Name?: string;
        Description?: string;
    }
    namespace ProcurementMethodRow {
        const idProperty = "ProcurementMethodId";
        const nameProperty = "Name";
        const localTextPrefix = "Procurement.ProcurementMethod";
        const lookupKey = "Procurement.ProcurementMethod";
        function getLookup(): Q.Lookup<ProcurementMethodRow>;
        const enum Fields {
            ProcurementMethodId = "ProcurementMethodId",
            Name = "Name",
            Description = "Description"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    namespace ProcurementMethodService {
        const baseUrl = "Procurement/ProcurementMethod";
        function Create(request: Serenity.SaveRequest<ProcurementMethodRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProcurementMethodRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcurementMethodRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcurementMethodRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/ProcurementMethod/Create",
            Update = "Procurement/ProcurementMethod/Update",
            Delete = "Procurement/ProcurementMethod/Delete",
            Retrieve = "Procurement/ProcurementMethod/Retrieve",
            List = "Procurement/ProcurementMethod/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    interface ProcurementRow {
        ProcurementId?: number;
        ProcurementTypeId?: string;
        Status?: string;
        CollectiveNumber?: string;
        Title?: string;
        Classification?: string;
        Qualification?: string;
        RequestedBy?: string;
        RequestorPosition?: string;
        ApprovedBy?: string;
        ApproverPosition?: string;
        SapBidderListCreatedBy?: string;
        SapBidderListCreatedDate?: string;
        CreatedBy?: string;
        CreatedDate?: string;
        GuaranteePercentage?: number;
        OfficeAddress?: number;
        ProcValueRangeId?: number;
        CommitteeTypeId?: number;
        PerformanceGuaranteeRequired?: boolean;
        TenderPeriod?: number;
        DeliveryTime?: number;
        DestinationId?: number;
        ContractTypeId?: number;
        CurrencyId?: string;
        DocSubmitMethodId?: number;
        AanwijzingExists?: boolean;
        AanwijzingDate?: string;
        AanwijzingClosingDate?: string;
        AanwijzingLocation?: string;
        AanwijzingClosingLocation?: string;
        AanwijzingSecretary?: string;
        AdministrativeExplanation?: string;
        TechnicalExplanation?: string;
        OtherExplanation?: string;
        AanwijzingSummary?: string;
        FieldSurveyExists?: _Ext.AdaTidakAda;
        FieldSurveyAddress?: string;
        ItbDocumentFile?: string;
        ItbDocumentName?: string;
        RksDocumentFile?: string;
        RksDocumentName?: string;
        TenderDocSubmitOpenDate?: string;
        TenderDocSubmitCloseDate?: string;
        OrderTypeId?: string;
        PurchDocNum?: string;
        RfqDate?: string;
        QuotationDeadline?: string;
        PurchGroup?: string;
        PrNo?: string;
        AuthPersonName?: string;
        AuthPosition?: string;
        HeaderText?: string;
        HeaderNote?: string;
        WorkDescription?: string;
        BankKey?: string;
        PoCover?: string;
        DeliveryAddress?: string;
        ToPTargVal?: string;
        YourReference?: string;
        OurReference?: string;
        SalesPerson?: string;
        Telephone?: string;
        ValidityStart?: string;
        ValidityEnd?: string;
        ItemInterval?: number;
        SubItemInterval?: number;
        Warranty?: string;
        Language?: string;
        EvaluationClosingPriceDate?: string;
        ReviewOeRequired?: boolean;
        ProcAgreement?: _Ext.ApproveTidakApprove;
        ProcAgreementDate?: string;
        ProcAsRequired?: _Ext.YaTidak;
        ProcAsApproved?: _Ext.ApproveTidakApprove;
        ProcAsApprovedDate?: string;
        ProcAsDesc?: string;
        FinalConclusionDesc?: string;
        WinnerNominationDate?: string;
        ObjectionCloseDate?: string;
        PoDocName?: string;
        TemporaryPic?: string;
        PoNumber?: string;
        PoDocFile?: string;
        F1SubmitDate?: string;
        F1SubmitBy?: string;
        F2SubmitDate?: string;
        F2SubmitBy?: string;
        F3SubmitDate?: string;
        F3SubmitBy?: string;
        F31SubmitDate?: string;
        F31SubmitBy?: string;
        F4SubmitDate?: string;
        F4SubmitBy?: string;
        F5SubmitDate?: string;
        F5SubmitBy?: string;
        F6SubmitDate?: string;
        F6SubmitBy?: string;
        F7SubmitDate?: string;
        F7SubmitBy?: string;
        F8SubmitDate?: string;
        F8SubmitBy?: string;
        F9SubmitDate?: string;
        F9SubmitBy?: string;
        F10SubmitDate?: string;
        F10SubmitBy?: string;
        F11SubmitDate?: string;
        F11SubmitBy?: string;
        F12SubmitDate?: string;
        F12SubmitBy?: string;
        F13SubmitDate?: string;
        F13SubmitBy?: string;
        F14SubmitDate?: string;
        F14SubmitBy?: string;
        F15SubmitDate?: string;
        F15SubmitBy?: string;
        F16SubmitDate?: string;
        F16SubmitBy?: string;
        F17SubmitDate?: string;
        F17SubmitBy?: string;
        F19SubmitDate?: string;
        F19SubmitBy?: string;
        ProcurementMethodId?: string;
        District?: string;
        Csms?: string;
        CommitteeMember?: CommitteeMemberRow[];
        ProcParticipant?: ProcParticipantRow[];
        RfqTexts?: RfqTextRow[];
        RfqItems?: RfqItemRow[];
        ProcParticipantItems?: ProcParticipantItemRow[];
        ProcPurchaseRequests?: ProcPrRow[];
        RequestTerms?: string;
        MinScore?: string;
        ProcRejectTender?: _Ext.LelangGagalLelang;
        ProcRejectTenderDesc?: string;
        ProcurementTypeName?: string;
        ProcurementTypeDescription?: string;
        StatusName?: string;
        StatusDescription?: string;
        StatusSequence?: number;
        ClassificationAssociationCode?: string;
        ClassificationAreaCode?: string;
        ClassificationVendorClass?: string;
        ClassificationKodeJenisJasa?: string;
        ClassificationClassificationDescr?: string;
        OfficeAddressName?: string;
        OfficeAddressDescription?: string;
        OfficeAddressAddressTypeId?: number;
        ProcValueRangeName?: string;
        ProcValueRangeDescription?: string;
        CommitteeTypeName?: string;
        CommitteeTypeDescription?: string;
        DestinationName?: string;
        DestinationDescription?: string;
        DestinationAddressTypeId?: number;
        ContractTypeName?: string;
        ContractTypeDescription?: string;
        CurrencyName?: string;
        CurrencyDescription?: string;
        DocSubmitMethodName?: string;
        DocSubmitMethodDescription?: string;
        OrderTypeName?: string;
        OrderTypeDescription?: string;
        ProcurementMethodName?: string;
        ProcurementMethodDescription?: string;
    }
    namespace ProcurementRow {
        const idProperty = "ProcurementId";
        const nameProperty = "Title";
        const localTextPrefix = "Procurement.Procurement";
        const lookupKey = "Procurement.Procurement";
        function getLookup(): Q.Lookup<ProcurementRow>;
        const enum Fields {
            ProcurementId = "ProcurementId",
            ProcurementTypeId = "ProcurementTypeId",
            Status = "Status",
            CollectiveNumber = "CollectiveNumber",
            Title = "Title",
            Classification = "Classification",
            Qualification = "Qualification",
            RequestedBy = "RequestedBy",
            RequestorPosition = "RequestorPosition",
            ApprovedBy = "ApprovedBy",
            ApproverPosition = "ApproverPosition",
            SapBidderListCreatedBy = "SapBidderListCreatedBy",
            SapBidderListCreatedDate = "SapBidderListCreatedDate",
            CreatedBy = "CreatedBy",
            CreatedDate = "CreatedDate",
            GuaranteePercentage = "GuaranteePercentage",
            OfficeAddress = "OfficeAddress",
            ProcValueRangeId = "ProcValueRangeId",
            CommitteeTypeId = "CommitteeTypeId",
            PerformanceGuaranteeRequired = "PerformanceGuaranteeRequired",
            TenderPeriod = "TenderPeriod",
            DeliveryTime = "DeliveryTime",
            DestinationId = "DestinationId",
            ContractTypeId = "ContractTypeId",
            CurrencyId = "CurrencyId",
            DocSubmitMethodId = "DocSubmitMethodId",
            AanwijzingExists = "AanwijzingExists",
            AanwijzingDate = "AanwijzingDate",
            AanwijzingClosingDate = "AanwijzingClosingDate",
            AanwijzingLocation = "AanwijzingLocation",
            AanwijzingClosingLocation = "AanwijzingClosingLocation",
            AanwijzingSecretary = "AanwijzingSecretary",
            AdministrativeExplanation = "AdministrativeExplanation",
            TechnicalExplanation = "TechnicalExplanation",
            OtherExplanation = "OtherExplanation",
            AanwijzingSummary = "AanwijzingSummary",
            FieldSurveyExists = "FieldSurveyExists",
            FieldSurveyAddress = "FieldSurveyAddress",
            ItbDocumentFile = "ItbDocumentFile",
            ItbDocumentName = "ItbDocumentName",
            RksDocumentFile = "RksDocumentFile",
            RksDocumentName = "RksDocumentName",
            TenderDocSubmitOpenDate = "TenderDocSubmitOpenDate",
            TenderDocSubmitCloseDate = "TenderDocSubmitCloseDate",
            OrderTypeId = "OrderTypeId",
            PurchDocNum = "PurchDocNum",
            RfqDate = "RfqDate",
            QuotationDeadline = "QuotationDeadline",
            PurchGroup = "PurchGroup",
            PrNo = "PrNo",
            AuthPersonName = "AuthPersonName",
            AuthPosition = "AuthPosition",
            HeaderText = "HeaderText",
            HeaderNote = "HeaderNote",
            WorkDescription = "WorkDescription",
            BankKey = "BankKey",
            PoCover = "PoCover",
            DeliveryAddress = "DeliveryAddress",
            ToPTargVal = "ToPTargVal",
            YourReference = "YourReference",
            OurReference = "OurReference",
            SalesPerson = "SalesPerson",
            Telephone = "Telephone",
            ValidityStart = "ValidityStart",
            ValidityEnd = "ValidityEnd",
            ItemInterval = "ItemInterval",
            SubItemInterval = "SubItemInterval",
            Warranty = "Warranty",
            Language = "Language",
            EvaluationClosingPriceDate = "EvaluationClosingPriceDate",
            ReviewOeRequired = "ReviewOeRequired",
            ProcAgreement = "ProcAgreement",
            ProcAgreementDate = "ProcAgreementDate",
            ProcAsRequired = "ProcAsRequired",
            ProcAsApproved = "ProcAsApproved",
            ProcAsApprovedDate = "ProcAsApprovedDate",
            ProcAsDesc = "ProcAsDesc",
            FinalConclusionDesc = "FinalConclusionDesc",
            WinnerNominationDate = "WinnerNominationDate",
            ObjectionCloseDate = "ObjectionCloseDate",
            PoDocName = "PoDocName",
            TemporaryPic = "TemporaryPic",
            PoNumber = "PoNumber",
            PoDocFile = "PoDocFile",
            F1SubmitDate = "F1SubmitDate",
            F1SubmitBy = "F1SubmitBy",
            F2SubmitDate = "F2SubmitDate",
            F2SubmitBy = "F2SubmitBy",
            F3SubmitDate = "F3SubmitDate",
            F3SubmitBy = "F3SubmitBy",
            F31SubmitDate = "F31SubmitDate",
            F31SubmitBy = "F31SubmitBy",
            F4SubmitDate = "F4SubmitDate",
            F4SubmitBy = "F4SubmitBy",
            F5SubmitDate = "F5SubmitDate",
            F5SubmitBy = "F5SubmitBy",
            F6SubmitDate = "F6SubmitDate",
            F6SubmitBy = "F6SubmitBy",
            F7SubmitDate = "F7SubmitDate",
            F7SubmitBy = "F7SubmitBy",
            F8SubmitDate = "F8SubmitDate",
            F8SubmitBy = "F8SubmitBy",
            F9SubmitDate = "F9SubmitDate",
            F9SubmitBy = "F9SubmitBy",
            F10SubmitDate = "F10SubmitDate",
            F10SubmitBy = "F10SubmitBy",
            F11SubmitDate = "F11SubmitDate",
            F11SubmitBy = "F11SubmitBy",
            F12SubmitDate = "F12SubmitDate",
            F12SubmitBy = "F12SubmitBy",
            F13SubmitDate = "F13SubmitDate",
            F13SubmitBy = "F13SubmitBy",
            F14SubmitDate = "F14SubmitDate",
            F14SubmitBy = "F14SubmitBy",
            F15SubmitDate = "F15SubmitDate",
            F15SubmitBy = "F15SubmitBy",
            F16SubmitDate = "F16SubmitDate",
            F16SubmitBy = "F16SubmitBy",
            F17SubmitDate = "F17SubmitDate",
            F17SubmitBy = "F17SubmitBy",
            F19SubmitDate = "F19SubmitDate",
            F19SubmitBy = "F19SubmitBy",
            ProcurementMethodId = "ProcurementMethodId",
            District = "District",
            Csms = "Csms",
            CommitteeMember = "CommitteeMember",
            ProcParticipant = "ProcParticipant",
            RfqTexts = "RfqTexts",
            RfqItems = "RfqItems",
            ProcParticipantItems = "ProcParticipantItems",
            ProcPurchaseRequests = "ProcPurchaseRequests",
            RequestTerms = "RequestTerms",
            MinScore = "MinScore",
            ProcRejectTender = "ProcRejectTender",
            ProcRejectTenderDesc = "ProcRejectTenderDesc",
            ProcurementTypeName = "ProcurementTypeName",
            ProcurementTypeDescription = "ProcurementTypeDescription",
            StatusName = "StatusName",
            StatusDescription = "StatusDescription",
            StatusSequence = "StatusSequence",
            ClassificationAssociationCode = "ClassificationAssociationCode",
            ClassificationAreaCode = "ClassificationAreaCode",
            ClassificationVendorClass = "ClassificationVendorClass",
            ClassificationKodeJenisJasa = "ClassificationKodeJenisJasa",
            ClassificationClassificationDescr = "ClassificationClassificationDescr",
            OfficeAddressName = "OfficeAddressName",
            OfficeAddressDescription = "OfficeAddressDescription",
            OfficeAddressAddressTypeId = "OfficeAddressAddressTypeId",
            ProcValueRangeName = "ProcValueRangeName",
            ProcValueRangeDescription = "ProcValueRangeDescription",
            CommitteeTypeName = "CommitteeTypeName",
            CommitteeTypeDescription = "CommitteeTypeDescription",
            DestinationName = "DestinationName",
            DestinationDescription = "DestinationDescription",
            DestinationAddressTypeId = "DestinationAddressTypeId",
            ContractTypeName = "ContractTypeName",
            ContractTypeDescription = "ContractTypeDescription",
            CurrencyName = "CurrencyName",
            CurrencyDescription = "CurrencyDescription",
            DocSubmitMethodName = "DocSubmitMethodName",
            DocSubmitMethodDescription = "DocSubmitMethodDescription",
            OrderTypeName = "OrderTypeName",
            OrderTypeDescription = "OrderTypeDescription",
            ProcurementMethodName = "ProcurementMethodName",
            ProcurementMethodDescription = "ProcurementMethodDescription"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    namespace ProcurementService {
        const baseUrl = "Procurement/Procurement";
        function Create(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/Procurement/Create",
            Update = "Procurement/Procurement/Update",
            Delete = "Procurement/Procurement/Delete",
            Retrieve = "Procurement/Procurement/Retrieve",
            List = "Procurement/Procurement/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface ProcurementTypeForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }
    class ProcurementTypeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    interface ProcurementTypeRow {
        ProcurementTypeId?: string;
        Name?: string;
        Description?: string;
    }
    namespace ProcurementTypeRow {
        const idProperty = "ProcurementTypeId";
        const nameProperty = "Name";
        const localTextPrefix = "Procurement.ProcurementType";
        const lookupKey = "Procurement.ProcurementType";
        function getLookup(): Q.Lookup<ProcurementTypeRow>;
        const enum Fields {
            ProcurementTypeId = "ProcurementTypeId",
            Name = "Name",
            Description = "Description"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    namespace ProcurementTypeService {
        const baseUrl = "Procurement/ProcurementType";
        function Create(request: Serenity.SaveRequest<ProcurementTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProcurementTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcurementTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcurementTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/ProcurementType/Create",
            Update = "Procurement/ProcurementType/Update",
            Delete = "Procurement/ProcurementType/Delete",
            Retrieve = "Procurement/ProcurementType/Retrieve",
            List = "Procurement/ProcurementType/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface ProcValueRangeForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }
    class ProcValueRangeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    interface ProcValueRangeRow {
        ProcValueRangeId?: number;
        Name?: string;
        Description?: string;
    }
    namespace ProcValueRangeRow {
        const idProperty = "ProcValueRangeId";
        const nameProperty = "Name";
        const localTextPrefix = "Procurement.ProcValueRange";
        const lookupKey = "Procurement.ProcValueRange";
        function getLookup(): Q.Lookup<ProcValueRangeRow>;
        const enum Fields {
            ProcValueRangeId = "ProcValueRangeId",
            Name = "Name",
            Description = "Description"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    namespace ProcValueRangeService {
        const baseUrl = "Procurement/ProcValueRange";
        function Create(request: Serenity.SaveRequest<ProcValueRangeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProcValueRangeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcValueRangeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcValueRangeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/ProcValueRange/Create",
            Update = "Procurement/ProcValueRange/Update",
            Delete = "Procurement/ProcValueRange/Delete",
            Retrieve = "Procurement/ProcValueRange/Retrieve",
            List = "Procurement/ProcValueRange/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface PurchaseRequisitionForm {
        PrNo: Serenity.StringEditor;
        BuyerId: Serenity.LookupEditor;
        ScanPrFile: Serenity.ImageUploadEditor;
        ScanPrName: Serenity.StringEditor;
        AssignDate: Serenity.DateEditor;
        AssignBy: Serenity.StringEditor;
        CreatedDate: Serenity.DateEditor;
        CreatedBy: Serenity.StringEditor;
        Status: Serenity.StringEditor;
    }
    class PurchaseRequisitionForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    interface PurchaseRequisitionRow {
        PrNo?: string;
        BuyerId?: number;
        CostCenter?: string;
        ScanPrFile?: string;
        ScanPrName?: string;
        AssignDate?: string;
        AssignBy?: string;
        CreatedDate?: string;
        CreatedBy?: string;
        Status?: string;
        ProcPrItems?: ProcPrRow[];
        BuyerUsername?: string;
        BuyerDisplayName?: string;
        BuyerEmail?: string;
        BuyerSource?: string;
        BuyerPasswordHash?: string;
        BuyerPasswordSalt?: string;
        BuyerLastDirectoryUpdate?: string;
        BuyerUserImage?: string;
        BuyerInsertDate?: string;
        BuyerInsertUserId?: number;
        BuyerUpdateDate?: string;
        BuyerUpdateUserId?: number;
        BuyerIsActive?: number;
    }
    namespace PurchaseRequisitionRow {
        const idProperty = "PrNo";
        const nameProperty = "PrNo";
        const localTextPrefix = "Procurement.PurchaseRequisition";
        const enum Fields {
            PrNo = "PrNo",
            BuyerId = "BuyerId",
            CostCenter = "CostCenter",
            ScanPrFile = "ScanPrFile",
            ScanPrName = "ScanPrName",
            AssignDate = "AssignDate",
            AssignBy = "AssignBy",
            CreatedDate = "CreatedDate",
            CreatedBy = "CreatedBy",
            Status = "Status",
            ProcPrItems = "ProcPrItems",
            BuyerUsername = "BuyerUsername",
            BuyerDisplayName = "BuyerDisplayName",
            BuyerEmail = "BuyerEmail",
            BuyerSource = "BuyerSource",
            BuyerPasswordHash = "BuyerPasswordHash",
            BuyerPasswordSalt = "BuyerPasswordSalt",
            BuyerLastDirectoryUpdate = "BuyerLastDirectoryUpdate",
            BuyerUserImage = "BuyerUserImage",
            BuyerInsertDate = "BuyerInsertDate",
            BuyerInsertUserId = "BuyerInsertUserId",
            BuyerUpdateDate = "BuyerUpdateDate",
            BuyerUpdateUserId = "BuyerUpdateUserId",
            BuyerIsActive = "BuyerIsActive"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    namespace PurchaseRequisitionService {
        const baseUrl = "Procurement/PurchaseRequisition";
        function Create(request: Serenity.SaveRequest<PurchaseRequisitionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PurchaseRequisitionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PurchaseRequisitionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PurchaseRequisitionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function AssignBuyerBulkAction(request: AssignBuyerActionRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/PurchaseRequisition/Create",
            Update = "Procurement/PurchaseRequisition/Update",
            Delete = "Procurement/PurchaseRequisition/Delete",
            Retrieve = "Procurement/PurchaseRequisition/Retrieve",
            List = "Procurement/PurchaseRequisition/List",
            AssignBuyerBulkAction = "Procurement/PurchaseRequisition/AssignBuyerBulkAction"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface PurchDocTextRefForm {
        Meaning: Serenity.StringEditor;
    }
    class PurchDocTextRefForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    interface PurchDocTextRefRow {
        TextId?: string;
        Meaning?: string;
    }
    namespace PurchDocTextRefRow {
        const idProperty = "TextId";
        const nameProperty = "Meaning";
        const localTextPrefix = "Procurement.PurchDocTextRef";
        const lookupKey = "Procurement.PurchDocTextRef";
        function getLookup(): Q.Lookup<PurchDocTextRefRow>;
        const enum Fields {
            TextId = "TextId",
            Meaning = "Meaning"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    namespace PurchDocTextRefService {
        const baseUrl = "Procurement/PurchDocTextRef";
        function Create(request: Serenity.SaveRequest<PurchDocTextRefRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PurchDocTextRefRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PurchDocTextRefRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PurchDocTextRefRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/PurchDocTextRef/Create",
            Update = "Procurement/PurchDocTextRef/Update",
            Delete = "Procurement/PurchDocTextRef/Delete",
            Retrieve = "Procurement/PurchDocTextRef/Retrieve",
            List = "Procurement/PurchDocTextRef/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface RfqItemExportServiceRequest extends Serenity.ServiceRequest {
        RfqItemList?: RfqItemRow[];
    }
}
declare namespace SCMONLINE.Procurement {
    interface RfqItemForm {
        ProcurementId: Serenity.StringEditor;
        OwnerEstimateReview: Serenity.DecimalEditor;
        OwnerEstimate: Serenity.DecimalEditor;
        PurchasingDocument: Serenity.StringEditor;
        Item: Serenity.StringEditor;
        DeletionIndicator: Serenity.StringEditor;
        RfqStatus: Serenity.StringEditor;
        LastChangedOn: Serenity.DateEditor;
        ShortText: Serenity.StringEditor;
        Material: Serenity.StringEditor;
        Plant: Serenity.StringEditor;
        StorageLocation: Serenity.StringEditor;
        ReqTrackingNumber: Serenity.StringEditor;
        MaterialGroup: Serenity.StringEditor;
        PurchasingInfoRec: Serenity.StringEditor;
        VendorMaterialNo: Serenity.StringEditor;
        TargetQuantity: Serenity.DecimalEditor;
        OrderQuantity: Serenity.DecimalEditor;
        OrderUnit: Serenity.StringEditor;
        OrderPriceUnit: Serenity.StringEditor;
        QuantityConversion: Serenity.DecimalEditor;
        EqualTo: Serenity.DecimalEditor;
        Denominator: Serenity.DecimalEditor;
        NetOrderPrice: Serenity.DecimalEditor;
        PriceUnit: Serenity.DecimalEditor;
        NetOrderValue: Serenity.DecimalEditor;
        GrossOrderValue: Serenity.DecimalEditor;
        QuotationDeadline: Serenity.DateEditor;
        GrProcessingTime: Serenity.DecimalEditor;
        TaxCode: Serenity.StringEditor;
        BaseUnitOfMeasure: Serenity.StringEditor;
        ShippingInstr: Serenity.StringEditor;
        OaTargetValue: Serenity.DecimalEditor;
        PriceDate: Serenity.StringEditor;
        PurchDocCategory: Serenity.StringEditor;
        EffectiveValue: Serenity.DecimalEditor;
        AffectsCommitments: Serenity.StringEditor;
        MaterialType: Serenity.StringEditor;
        SubitemCategory: Serenity.StringEditor;
        SubItems: Serenity.StringEditor;
        Subtotal1: Serenity.DecimalEditor;
        Subtotal2: Serenity.DecimalEditor;
        Subtotal3: Serenity.DecimalEditor;
        Subtotal4: Serenity.DecimalEditor;
        Subtotal5: Serenity.DecimalEditor;
    }
    class RfqItemForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    interface RfqItemRow {
        RfqItemId?: number;
        ProcurementId?: number;
        OwnerEstimateReview?: number;
        OwnerEstimate?: number;
        PurchasingDocument?: string;
        Item?: string;
        DeletionIndicator?: string;
        RfqStatus?: string;
        LastChangedOn?: string;
        ShortText?: string;
        Material?: string;
        Plant?: string;
        StorageLocation?: string;
        ReqTrackingNumber?: string;
        MaterialGroup?: string;
        PurchasingInfoRec?: string;
        VendorMaterialNo?: string;
        TargetQuantity?: number;
        OrderQuantity?: number;
        OrderUnit?: string;
        OrderPriceUnit?: string;
        QuantityConversion?: number;
        EqualTo?: number;
        Denominator?: number;
        NetOrderPrice?: number;
        PriceUnit?: number;
        NetOrderValue?: number;
        GrossOrderValue?: number;
        QuotationDeadline?: string;
        GrProcessingTime?: number;
        TaxCode?: string;
        BaseUnitOfMeasure?: string;
        ShippingInstr?: string;
        OaTargetValue?: number;
        PriceDate?: string;
        PurchDocCategory?: string;
        EffectiveValue?: number;
        AffectsCommitments?: string;
        MaterialType?: string;
        SubitemCategory?: string;
        SubItems?: string;
        Subtotal1?: number;
        Subtotal2?: number;
        Subtotal3?: number;
        Subtotal4?: number;
        Subtotal5?: number;
        ProcurementProcurementTypeId?: string;
        ProcurementStatus?: string;
        ProcurementCollectiveNumber?: string;
        ProcurementTitle?: string;
        ProcurementBidderListCreatedDate?: string;
        ProcurementClassification?: string;
        ProcurementQualification?: string;
        ProcurementRequestedBy?: string;
        ProcurementRequestorPosition?: string;
        ProcurementApprovedBy?: string;
        ProcurementApproverPosition?: string;
        ProcurementSapBidderListCreatedBy?: string;
        ProcurementSapBidderListCreatedDate?: string;
        ProcurementCreatedBy?: string;
        ProcurementCreatedDate?: string;
        ProcurementGuaranteePercentage?: number;
        ProcurementOfficeAddress?: number;
        ProcurementProcValueRangeId?: number;
        ProcurementCommitteeTypeId?: number;
        ProcurementPerformanceGuaranteeRequired?: boolean;
        ProcurementTenderPeriod?: number;
        ProcurementDeliveryTime?: number;
        ProcurementDestinationId?: number;
        ProcurementContractTypeId?: number;
        ProcurementCurrencyId?: string;
        ProcurementDocSubmitMethodId?: number;
        ProcurementAanwijzingExists?: boolean;
        ProcurementAanwijzingDate?: string;
        ProcurementAanwijzingClosingDate?: string;
        ProcurementAanwijzingLocation?: string;
        ProcurementAanwijzingClosingLocation?: string;
        ProcurementAanwijzingSecretary?: string;
        ProcurementAanwijzingSummary?: string;
        ProcurementFieldSurveyExists?: boolean;
        ProcurementFieldSurveyAddress?: string;
        ProcurementItbDocumentFile?: string;
        ProcurementItbDocumentName?: string;
        ProcurementRksDocumentFile?: string;
        ProcurementRksDocumentName?: string;
        ProcurementTenderDocSubmitOpenDate?: string;
        ProcurementTenderDocSubmitCloseDate?: string;
        ProcurementOrderTypeId?: string;
        ProcurementPurchDocNum?: string;
        ProcurementRfqDate?: string;
        ProcurementQuotationDeadline?: string;
        ProcurementPurchGroup?: string;
        ProcurementPrNo?: string;
        ProcurementAuthPersonName?: string;
        ProcurementAuthPosition?: string;
        ProcurementHeaderText?: string;
        ProcurementHeaderNote?: string;
        ProcurementWorkDescription?: string;
        ProcurementBankKey?: string;
        ProcurementPoCover?: string;
        ProcurementDeliveryAddress?: string;
        ProcurementToPTargVal?: string;
        ProcurementYourReference?: string;
        ProcurementOurReference?: string;
        ProcurementSalesPerson?: string;
        ProcurementTelephone?: string;
        ProcurementValidityStart?: string;
        ProcurementValidityEnd?: string;
        ProcurementItemInterval?: number;
        ProcurementSubItemInterval?: number;
        ProcurementWarranty?: string;
        ProcurementLanguage?: string;
        ProcurementReviewOeRequired?: boolean;
        ProcurementProcAgreement?: boolean;
        ProcurementProcAgreementDate?: string;
        ProcurementProcAsRequired?: boolean;
        ProcurementProcAsApproved?: boolean;
        ProcurementProcAsApprovedDate?: string;
        ProcurementProcAsDesc?: string;
        ProcurementFinalConclusionDesc?: string;
        ProcurementWinnerNominationDate?: string;
        ProcurementObjectionCloseDate?: string;
        ProcurementPoDocName?: string;
        ProcurementTemporaryPic?: string;
        ProcurementPoNumber?: string;
        ProcurementPoDocFile?: string;
        ProcurementF1SubmitDate?: string;
        ProcurementF1SubmitBy?: string;
        ProcurementF2SubmitDate?: string;
        ProcurementF2SubmitBy?: string;
        ProcurementF3SubmitDate?: string;
        ProcurementF3SubmitBy?: string;
        ProcurementF31SubmitDate?: string;
        ProcurementF31SubmitBy?: string;
        ProcurementF4SubmitDate?: string;
        ProcurementF4SubmitBy?: string;
        ProcurementF5SubmitDate?: string;
        ProcurementF5SubmitBy?: string;
        ProcurementF6SubmitDate?: string;
        ProcurementF6SubmitBy?: string;
        ProcurementF7SubmitDate?: string;
        ProcurementF7SubmitBy?: string;
        ProcurementF8SubmitDate?: string;
        ProcurementF8SubmitBy?: string;
        ProcurementF9SubmitDate?: string;
        ProcurementF9SubmitBy?: string;
        ProcurementF10SubmitDate?: string;
        ProcurementF10SubmitBy?: string;
        ProcurementF11SubmitDate?: string;
        ProcurementF11SubmitBy?: string;
        ProcurementF12SubmitDate?: string;
        ProcurementF12SubmitBy?: string;
        ProcurementF13SubmitDate?: string;
        ProcurementF13SubmitBy?: string;
        ProcurementF14SubmitDate?: string;
        ProcurementF14SubmitBy?: string;
        ProcurementF15SubmitDate?: string;
        ProcurementF15SubmitBy?: string;
        ProcurementF16SubmitDate?: string;
        ProcurementF16SubmitBy?: string;
        ProcurementF17SubmitDate?: string;
        ProcurementF17SubmitBy?: string;
        ProcurementProcurementMethodId?: string;
    }
    namespace RfqItemRow {
        const idProperty = "RfqItemId";
        const nameProperty = "PurchasingDocument";
        const localTextPrefix = "Procurement.RfqItem";
        const lookupKey = "Procurement.RfqItem";
        function getLookup(): Q.Lookup<RfqItemRow>;
        const enum Fields {
            RfqItemId = "RfqItemId",
            ProcurementId = "ProcurementId",
            OwnerEstimateReview = "OwnerEstimateReview",
            OwnerEstimate = "OwnerEstimate",
            PurchasingDocument = "PurchasingDocument",
            Item = "Item",
            DeletionIndicator = "DeletionIndicator",
            RfqStatus = "RfqStatus",
            LastChangedOn = "LastChangedOn",
            ShortText = "ShortText",
            Material = "Material",
            Plant = "Plant",
            StorageLocation = "StorageLocation",
            ReqTrackingNumber = "ReqTrackingNumber",
            MaterialGroup = "MaterialGroup",
            PurchasingInfoRec = "PurchasingInfoRec",
            VendorMaterialNo = "VendorMaterialNo",
            TargetQuantity = "TargetQuantity",
            OrderQuantity = "OrderQuantity",
            OrderUnit = "OrderUnit",
            OrderPriceUnit = "OrderPriceUnit",
            QuantityConversion = "QuantityConversion",
            EqualTo = "EqualTo",
            Denominator = "Denominator",
            NetOrderPrice = "NetOrderPrice",
            PriceUnit = "PriceUnit",
            NetOrderValue = "NetOrderValue",
            GrossOrderValue = "GrossOrderValue",
            QuotationDeadline = "QuotationDeadline",
            GrProcessingTime = "GrProcessingTime",
            TaxCode = "TaxCode",
            BaseUnitOfMeasure = "BaseUnitOfMeasure",
            ShippingInstr = "ShippingInstr",
            OaTargetValue = "OaTargetValue",
            PriceDate = "PriceDate",
            PurchDocCategory = "PurchDocCategory",
            EffectiveValue = "EffectiveValue",
            AffectsCommitments = "AffectsCommitments",
            MaterialType = "MaterialType",
            SubitemCategory = "SubitemCategory",
            SubItems = "SubItems",
            Subtotal1 = "Subtotal1",
            Subtotal2 = "Subtotal2",
            Subtotal3 = "Subtotal3",
            Subtotal4 = "Subtotal4",
            Subtotal5 = "Subtotal5",
            ProcurementProcurementTypeId = "ProcurementProcurementTypeId",
            ProcurementStatus = "ProcurementStatus",
            ProcurementCollectiveNumber = "ProcurementCollectiveNumber",
            ProcurementTitle = "ProcurementTitle",
            ProcurementBidderListCreatedDate = "ProcurementBidderListCreatedDate",
            ProcurementClassification = "ProcurementClassification",
            ProcurementQualification = "ProcurementQualification",
            ProcurementRequestedBy = "ProcurementRequestedBy",
            ProcurementRequestorPosition = "ProcurementRequestorPosition",
            ProcurementApprovedBy = "ProcurementApprovedBy",
            ProcurementApproverPosition = "ProcurementApproverPosition",
            ProcurementSapBidderListCreatedBy = "ProcurementSapBidderListCreatedBy",
            ProcurementSapBidderListCreatedDate = "ProcurementSapBidderListCreatedDate",
            ProcurementCreatedBy = "ProcurementCreatedBy",
            ProcurementCreatedDate = "ProcurementCreatedDate",
            ProcurementGuaranteePercentage = "ProcurementGuaranteePercentage",
            ProcurementOfficeAddress = "ProcurementOfficeAddress",
            ProcurementProcValueRangeId = "ProcurementProcValueRangeId",
            ProcurementCommitteeTypeId = "ProcurementCommitteeTypeId",
            ProcurementPerformanceGuaranteeRequired = "ProcurementPerformanceGuaranteeRequired",
            ProcurementTenderPeriod = "ProcurementTenderPeriod",
            ProcurementDeliveryTime = "ProcurementDeliveryTime",
            ProcurementDestinationId = "ProcurementDestinationId",
            ProcurementContractTypeId = "ProcurementContractTypeId",
            ProcurementCurrencyId = "ProcurementCurrencyId",
            ProcurementDocSubmitMethodId = "ProcurementDocSubmitMethodId",
            ProcurementAanwijzingExists = "ProcurementAanwijzingExists",
            ProcurementAanwijzingDate = "ProcurementAanwijzingDate",
            ProcurementAanwijzingClosingDate = "ProcurementAanwijzingClosingDate",
            ProcurementAanwijzingLocation = "ProcurementAanwijzingLocation",
            ProcurementAanwijzingClosingLocation = "ProcurementAanwijzingClosingLocation",
            ProcurementAanwijzingSecretary = "ProcurementAanwijzingSecretary",
            ProcurementAanwijzingSummary = "ProcurementAanwijzingSummary",
            ProcurementFieldSurveyExists = "ProcurementFieldSurveyExists",
            ProcurementFieldSurveyAddress = "ProcurementFieldSurveyAddress",
            ProcurementItbDocumentFile = "ProcurementItbDocumentFile",
            ProcurementItbDocumentName = "ProcurementItbDocumentName",
            ProcurementRksDocumentFile = "ProcurementRksDocumentFile",
            ProcurementRksDocumentName = "ProcurementRksDocumentName",
            ProcurementTenderDocSubmitOpenDate = "ProcurementTenderDocSubmitOpenDate",
            ProcurementTenderDocSubmitCloseDate = "ProcurementTenderDocSubmitCloseDate",
            ProcurementOrderTypeId = "ProcurementOrderTypeId",
            ProcurementPurchDocNum = "ProcurementPurchDocNum",
            ProcurementRfqDate = "ProcurementRfqDate",
            ProcurementQuotationDeadline = "ProcurementQuotationDeadline",
            ProcurementPurchGroup = "ProcurementPurchGroup",
            ProcurementPrNo = "ProcurementPrNo",
            ProcurementAuthPersonName = "ProcurementAuthPersonName",
            ProcurementAuthPosition = "ProcurementAuthPosition",
            ProcurementHeaderText = "ProcurementHeaderText",
            ProcurementHeaderNote = "ProcurementHeaderNote",
            ProcurementWorkDescription = "ProcurementWorkDescription",
            ProcurementBankKey = "ProcurementBankKey",
            ProcurementPoCover = "ProcurementPoCover",
            ProcurementDeliveryAddress = "ProcurementDeliveryAddress",
            ProcurementToPTargVal = "ProcurementToPTargVal",
            ProcurementYourReference = "ProcurementYourReference",
            ProcurementOurReference = "ProcurementOurReference",
            ProcurementSalesPerson = "ProcurementSalesPerson",
            ProcurementTelephone = "ProcurementTelephone",
            ProcurementValidityStart = "ProcurementValidityStart",
            ProcurementValidityEnd = "ProcurementValidityEnd",
            ProcurementItemInterval = "ProcurementItemInterval",
            ProcurementSubItemInterval = "ProcurementSubItemInterval",
            ProcurementWarranty = "ProcurementWarranty",
            ProcurementLanguage = "ProcurementLanguage",
            ProcurementReviewOeRequired = "ProcurementReviewOeRequired",
            ProcurementProcAgreement = "ProcurementProcAgreement",
            ProcurementProcAgreementDate = "ProcurementProcAgreementDate",
            ProcurementProcAsRequired = "ProcurementProcAsRequired",
            ProcurementProcAsApproved = "ProcurementProcAsApproved",
            ProcurementProcAsApprovedDate = "ProcurementProcAsApprovedDate",
            ProcurementProcAsDesc = "ProcurementProcAsDesc",
            ProcurementFinalConclusionDesc = "ProcurementFinalConclusionDesc",
            ProcurementWinnerNominationDate = "ProcurementWinnerNominationDate",
            ProcurementObjectionCloseDate = "ProcurementObjectionCloseDate",
            ProcurementPoDocName = "ProcurementPoDocName",
            ProcurementTemporaryPic = "ProcurementTemporaryPic",
            ProcurementPoNumber = "ProcurementPoNumber",
            ProcurementPoDocFile = "ProcurementPoDocFile",
            ProcurementF1SubmitDate = "ProcurementF1SubmitDate",
            ProcurementF1SubmitBy = "ProcurementF1SubmitBy",
            ProcurementF2SubmitDate = "ProcurementF2SubmitDate",
            ProcurementF2SubmitBy = "ProcurementF2SubmitBy",
            ProcurementF3SubmitDate = "ProcurementF3SubmitDate",
            ProcurementF3SubmitBy = "ProcurementF3SubmitBy",
            ProcurementF31SubmitDate = "ProcurementF31SubmitDate",
            ProcurementF31SubmitBy = "ProcurementF31SubmitBy",
            ProcurementF4SubmitDate = "ProcurementF4SubmitDate",
            ProcurementF4SubmitBy = "ProcurementF4SubmitBy",
            ProcurementF5SubmitDate = "ProcurementF5SubmitDate",
            ProcurementF5SubmitBy = "ProcurementF5SubmitBy",
            ProcurementF6SubmitDate = "ProcurementF6SubmitDate",
            ProcurementF6SubmitBy = "ProcurementF6SubmitBy",
            ProcurementF7SubmitDate = "ProcurementF7SubmitDate",
            ProcurementF7SubmitBy = "ProcurementF7SubmitBy",
            ProcurementF8SubmitDate = "ProcurementF8SubmitDate",
            ProcurementF8SubmitBy = "ProcurementF8SubmitBy",
            ProcurementF9SubmitDate = "ProcurementF9SubmitDate",
            ProcurementF9SubmitBy = "ProcurementF9SubmitBy",
            ProcurementF10SubmitDate = "ProcurementF10SubmitDate",
            ProcurementF10SubmitBy = "ProcurementF10SubmitBy",
            ProcurementF11SubmitDate = "ProcurementF11SubmitDate",
            ProcurementF11SubmitBy = "ProcurementF11SubmitBy",
            ProcurementF12SubmitDate = "ProcurementF12SubmitDate",
            ProcurementF12SubmitBy = "ProcurementF12SubmitBy",
            ProcurementF13SubmitDate = "ProcurementF13SubmitDate",
            ProcurementF13SubmitBy = "ProcurementF13SubmitBy",
            ProcurementF14SubmitDate = "ProcurementF14SubmitDate",
            ProcurementF14SubmitBy = "ProcurementF14SubmitBy",
            ProcurementF15SubmitDate = "ProcurementF15SubmitDate",
            ProcurementF15SubmitBy = "ProcurementF15SubmitBy",
            ProcurementF16SubmitDate = "ProcurementF16SubmitDate",
            ProcurementF16SubmitBy = "ProcurementF16SubmitBy",
            ProcurementF17SubmitDate = "ProcurementF17SubmitDate",
            ProcurementF17SubmitBy = "ProcurementF17SubmitBy",
            ProcurementProcurementMethodId = "ProcurementProcurementMethodId"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    namespace RfqItemService {
        const baseUrl = "Procurement/RfqItem";
        function Create(request: Serenity.SaveRequest<RfqItemRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RfqItemRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RfqItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RfqItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/RfqItem/Create",
            Update = "Procurement/RfqItem/Update",
            Delete = "Procurement/RfqItem/Delete",
            Retrieve = "Procurement/RfqItem/Retrieve",
            List = "Procurement/RfqItem/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface RfqItemTextForm {
        RfqItemId: Serenity.StringEditor;
        TextId: Serenity.StringEditor;
        TextForm: Serenity.StringEditor;
        TextLine: Serenity.StringEditor;
    }
    class RfqItemTextForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    interface RfqItemTextRow {
        RfqItemTextId?: number;
        RfqItemId?: number;
        TextId?: string;
        TextForm?: string;
        TextLine?: string;
        RfqItemProcurementId?: number;
        RfqItemOwnerEstimateReview?: number;
        RfqItemOwnerEstimate?: number;
        RfqItemPurchasingDocument?: string;
        RfqItemItem?: string;
        RfqItemDeletionIndicator?: string;
        RfqItemRfqStatus?: string;
        RfqItemLastChangedOn?: string;
        RfqItemShortText?: string;
        RfqItemMaterial?: string;
        RfqItemPlant?: string;
        RfqItemStorageLocation?: string;
        RfqItemReqTrackingNumber?: string;
        RfqItemMaterialGroup?: string;
        RfqItemPurchasingInfoRec?: string;
        RfqItemVendorMaterialNo?: string;
        RfqItemTargetQuantity?: number;
        RfqItemOrderQuantity?: number;
        RfqItemOrderUnit?: string;
        RfqItemOrderPriceUnit?: string;
        RfqItemQuantityConversion?: number;
        RfqItemEqualTo?: number;
        RfqItemDenominator?: number;
        RfqItemNetOrderPrice?: number;
        RfqItemPriceUnit?: number;
        RfqItemNetOrderValue?: number;
        RfqItemGrossOrderValue?: number;
        RfqItemQuotationDeadline?: string;
        RfqItemGrProcessingTime?: string;
        RfqItemTaxCode?: string;
        RfqItemBaseUnitOfMeasure?: string;
        RfqItemShippingInstr?: string;
        RfqItemOaTargetValue?: number;
        RfqItemPriceDate?: string;
        RfqItemPurchDocCategory?: string;
        RfqItemEffectiveValue?: number;
        RfqItemAffectsCommitments?: string;
        RfqItemMaterialType?: string;
        RfqItemSubitemCategory?: string;
        RfqItemSubItems?: string;
        RfqItemSubtotal1?: number;
        RfqItemSubtotal2?: number;
        RfqItemSubtotal3?: number;
        RfqItemSubtotal4?: number;
        RfqItemSubtotal5?: number;
    }
    namespace RfqItemTextRow {
        const idProperty = "RfqItemTextId";
        const nameProperty = "TextLine";
        const localTextPrefix = "Procurement.RfqItemText";
        const enum Fields {
            RfqItemTextId = "RfqItemTextId",
            RfqItemId = "RfqItemId",
            TextId = "TextId",
            TextForm = "TextForm",
            TextLine = "TextLine",
            RfqItemProcurementId = "RfqItemProcurementId",
            RfqItemOwnerEstimateReview = "RfqItemOwnerEstimateReview",
            RfqItemOwnerEstimate = "RfqItemOwnerEstimate",
            RfqItemPurchasingDocument = "RfqItemPurchasingDocument",
            RfqItemItem = "RfqItemItem",
            RfqItemDeletionIndicator = "RfqItemDeletionIndicator",
            RfqItemRfqStatus = "RfqItemRfqStatus",
            RfqItemLastChangedOn = "RfqItemLastChangedOn",
            RfqItemShortText = "RfqItemShortText",
            RfqItemMaterial = "RfqItemMaterial",
            RfqItemPlant = "RfqItemPlant",
            RfqItemStorageLocation = "RfqItemStorageLocation",
            RfqItemReqTrackingNumber = "RfqItemReqTrackingNumber",
            RfqItemMaterialGroup = "RfqItemMaterialGroup",
            RfqItemPurchasingInfoRec = "RfqItemPurchasingInfoRec",
            RfqItemVendorMaterialNo = "RfqItemVendorMaterialNo",
            RfqItemTargetQuantity = "RfqItemTargetQuantity",
            RfqItemOrderQuantity = "RfqItemOrderQuantity",
            RfqItemOrderUnit = "RfqItemOrderUnit",
            RfqItemOrderPriceUnit = "RfqItemOrderPriceUnit",
            RfqItemQuantityConversion = "RfqItemQuantityConversion",
            RfqItemEqualTo = "RfqItemEqualTo",
            RfqItemDenominator = "RfqItemDenominator",
            RfqItemNetOrderPrice = "RfqItemNetOrderPrice",
            RfqItemPriceUnit = "RfqItemPriceUnit",
            RfqItemNetOrderValue = "RfqItemNetOrderValue",
            RfqItemGrossOrderValue = "RfqItemGrossOrderValue",
            RfqItemQuotationDeadline = "RfqItemQuotationDeadline",
            RfqItemGrProcessingTime = "RfqItemGrProcessingTime",
            RfqItemTaxCode = "RfqItemTaxCode",
            RfqItemBaseUnitOfMeasure = "RfqItemBaseUnitOfMeasure",
            RfqItemShippingInstr = "RfqItemShippingInstr",
            RfqItemOaTargetValue = "RfqItemOaTargetValue",
            RfqItemPriceDate = "RfqItemPriceDate",
            RfqItemPurchDocCategory = "RfqItemPurchDocCategory",
            RfqItemEffectiveValue = "RfqItemEffectiveValue",
            RfqItemAffectsCommitments = "RfqItemAffectsCommitments",
            RfqItemMaterialType = "RfqItemMaterialType",
            RfqItemSubitemCategory = "RfqItemSubitemCategory",
            RfqItemSubItems = "RfqItemSubItems",
            RfqItemSubtotal1 = "RfqItemSubtotal1",
            RfqItemSubtotal2 = "RfqItemSubtotal2",
            RfqItemSubtotal3 = "RfqItemSubtotal3",
            RfqItemSubtotal4 = "RfqItemSubtotal4",
            RfqItemSubtotal5 = "RfqItemSubtotal5"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    namespace RfqItemTextService {
        const baseUrl = "Procurement/RfqItemText";
        function Create(request: Serenity.SaveRequest<RfqItemTextRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RfqItemTextRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RfqItemTextRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RfqItemTextRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/RfqItemText/Create",
            Update = "Procurement/RfqItemText/Update",
            Delete = "Procurement/RfqItemText/Delete",
            Retrieve = "Procurement/RfqItemText/Retrieve",
            List = "Procurement/RfqItemText/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    interface RfqServiceRequest extends Serenity.ServiceRequest {
        RfqNo?: string;
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface RfqTextForm {
        ProcurementId: Serenity.StringEditor;
        TextId: Serenity.LookupEditor;
        TextForm: Serenity.StringEditor;
        TextLine: Serenity.StringEditor;
    }
    class RfqTextForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    interface RfqTextRow {
        RfqTextId?: number;
        ProcurementId?: number;
        TextId?: string;
        TextForm?: string;
        TextLine?: string;
        ProcurementProcurementTypeId?: string;
        ProcurementStatus?: string;
        ProcurementCollectiveNumber?: string;
        ProcurementTitle?: string;
        ProcurementClassification?: string;
        ProcurementQualification?: string;
        ProcurementRequestedBy?: string;
        ProcurementRequestorPosition?: string;
        ProcurementApprovedBy?: string;
        ProcurementApproverPosition?: string;
        ProcurementSapBidderListCreatedBy?: string;
        ProcurementSapBidderListCreatedDate?: string;
        ProcurementCreatedBy?: string;
        ProcurementCreatedDate?: string;
        ProcurementGuaranteePercentage?: number;
        ProcurementOfficeAddress?: number;
        ProcurementProcValueRangeId?: number;
        ProcurementCommitteeTypeId?: number;
        ProcurementPerformanceGuaranteeRequired?: boolean;
        ProcurementTenderPeriod?: number;
        ProcurementDeliveryTime?: number;
        ProcurementDestinationId?: number;
        ProcurementContractTypeId?: number;
        ProcurementCurrencyId?: string;
        ProcurementDocSubmitMethodId?: number;
        ProcurementAanwijzingExists?: boolean;
        ProcurementAanwijzingDate?: string;
        ProcurementAanwijzingClosingDate?: string;
        ProcurementAanwijzingLocation?: string;
        ProcurementAanwijzingClosingLocation?: string;
        ProcurementAanwijzingSecretary?: string;
        ProcurementAanwijzingSummary?: string;
        ProcurementFieldSurveyExists?: boolean;
        ProcurementFieldSurveyAddress?: string;
        ProcurementItbDocumentFile?: string;
        ProcurementItbDocumentName?: string;
        ProcurementRksDocumentFile?: string;
        ProcurementRksDocumentName?: string;
        ProcurementTenderDocSubmitOpenDate?: string;
        ProcurementTenderDocSubmitCloseDate?: string;
        ProcurementOrderTypeId?: string;
        ProcurementPurchDocNum?: string;
        ProcurementRfqDate?: string;
        ProcurementQuotationDeadline?: string;
        ProcurementPurchGroup?: string;
        ProcurementPrNo?: string;
        ProcurementAuthPersonName?: string;
        ProcurementAuthPosition?: string;
        ProcurementHeaderText?: string;
        ProcurementHeaderNote?: string;
        ProcurementWorkDescription?: string;
        ProcurementBankKey?: string;
        ProcurementPoCover?: string;
        ProcurementDeliveryAddress?: string;
        ProcurementToPTargVal?: string;
        ProcurementYourReference?: string;
        ProcurementOurReference?: string;
        ProcurementSalesPerson?: string;
        ProcurementTelephone?: string;
        ProcurementValidityStart?: string;
        ProcurementValidityEnd?: string;
        ProcurementItemInterval?: number;
        ProcurementSubItemInterval?: number;
        ProcurementWarranty?: string;
        ProcurementLanguage?: string;
        ProcurementReviewOeRequired?: boolean;
        ProcurementProcAgreement?: boolean;
        ProcurementProcAgreementDate?: string;
        ProcurementProcAsRequired?: boolean;
        ProcurementProcAsApproved?: boolean;
        ProcurementProcAsApprovedDate?: string;
        ProcurementProcAsDesc?: string;
        ProcurementFinalConclusionDesc?: string;
        ProcurementWinnerNominationDate?: string;
        ProcurementObjectionCloseDate?: string;
        ProcurementPoDocName?: string;
        ProcurementTemporaryPic?: string;
        ProcurementPoNumber?: string;
        ProcurementPoDocFile?: string;
        ProcurementF1SubmitDate?: string;
        ProcurementF1SubmitBy?: string;
        ProcurementF2SubmitDate?: string;
        ProcurementF2SubmitBy?: string;
        ProcurementF3SubmitDate?: string;
        ProcurementF3SubmitBy?: string;
        ProcurementF31SubmitDate?: string;
        ProcurementF31SubmitBy?: string;
        ProcurementF4SubmitDate?: string;
        ProcurementF4SubmitBy?: string;
        ProcurementF5SubmitDate?: string;
        ProcurementF5SubmitBy?: string;
        ProcurementF6SubmitDate?: string;
        ProcurementF6SubmitBy?: string;
        ProcurementF7SubmitDate?: string;
        ProcurementF7SubmitBy?: string;
        ProcurementF8SubmitDate?: string;
        ProcurementF8SubmitBy?: string;
        ProcurementF9SubmitDate?: string;
        ProcurementF9SubmitBy?: string;
        ProcurementF10SubmitDate?: string;
        ProcurementF10SubmitBy?: string;
        ProcurementF11SubmitDate?: string;
        ProcurementF11SubmitBy?: string;
        ProcurementF12SubmitDate?: string;
        ProcurementF12SubmitBy?: string;
        ProcurementF13SubmitDate?: string;
        ProcurementF13SubmitBy?: string;
        ProcurementF14SubmitDate?: string;
        ProcurementF14SubmitBy?: string;
        ProcurementF15SubmitDate?: string;
        ProcurementF15SubmitBy?: string;
        ProcurementF16SubmitDate?: string;
        ProcurementF16SubmitBy?: string;
        ProcurementF17SubmitDate?: string;
        ProcurementF17SubmitBy?: string;
        ProcurementProcurementMethodId?: string;
        TextMeaning?: string;
    }
    namespace RfqTextRow {
        const idProperty = "RfqTextId";
        const nameProperty = "TextLine";
        const localTextPrefix = "Procurement.RfqText";
        const lookupKey = "Procurement.RfqText";
        function getLookup(): Q.Lookup<RfqTextRow>;
        const enum Fields {
            RfqTextId = "RfqTextId",
            ProcurementId = "ProcurementId",
            TextId = "TextId",
            TextForm = "TextForm",
            TextLine = "TextLine",
            ProcurementProcurementTypeId = "ProcurementProcurementTypeId",
            ProcurementStatus = "ProcurementStatus",
            ProcurementCollectiveNumber = "ProcurementCollectiveNumber",
            ProcurementTitle = "ProcurementTitle",
            ProcurementClassification = "ProcurementClassification",
            ProcurementQualification = "ProcurementQualification",
            ProcurementRequestedBy = "ProcurementRequestedBy",
            ProcurementRequestorPosition = "ProcurementRequestorPosition",
            ProcurementApprovedBy = "ProcurementApprovedBy",
            ProcurementApproverPosition = "ProcurementApproverPosition",
            ProcurementSapBidderListCreatedBy = "ProcurementSapBidderListCreatedBy",
            ProcurementSapBidderListCreatedDate = "ProcurementSapBidderListCreatedDate",
            ProcurementCreatedBy = "ProcurementCreatedBy",
            ProcurementCreatedDate = "ProcurementCreatedDate",
            ProcurementGuaranteePercentage = "ProcurementGuaranteePercentage",
            ProcurementOfficeAddress = "ProcurementOfficeAddress",
            ProcurementProcValueRangeId = "ProcurementProcValueRangeId",
            ProcurementCommitteeTypeId = "ProcurementCommitteeTypeId",
            ProcurementPerformanceGuaranteeRequired = "ProcurementPerformanceGuaranteeRequired",
            ProcurementTenderPeriod = "ProcurementTenderPeriod",
            ProcurementDeliveryTime = "ProcurementDeliveryTime",
            ProcurementDestinationId = "ProcurementDestinationId",
            ProcurementContractTypeId = "ProcurementContractTypeId",
            ProcurementCurrencyId = "ProcurementCurrencyId",
            ProcurementDocSubmitMethodId = "ProcurementDocSubmitMethodId",
            ProcurementAanwijzingExists = "ProcurementAanwijzingExists",
            ProcurementAanwijzingDate = "ProcurementAanwijzingDate",
            ProcurementAanwijzingClosingDate = "ProcurementAanwijzingClosingDate",
            ProcurementAanwijzingLocation = "ProcurementAanwijzingLocation",
            ProcurementAanwijzingClosingLocation = "ProcurementAanwijzingClosingLocation",
            ProcurementAanwijzingSecretary = "ProcurementAanwijzingSecretary",
            ProcurementAanwijzingSummary = "ProcurementAanwijzingSummary",
            ProcurementFieldSurveyExists = "ProcurementFieldSurveyExists",
            ProcurementFieldSurveyAddress = "ProcurementFieldSurveyAddress",
            ProcurementItbDocumentFile = "ProcurementItbDocumentFile",
            ProcurementItbDocumentName = "ProcurementItbDocumentName",
            ProcurementRksDocumentFile = "ProcurementRksDocumentFile",
            ProcurementRksDocumentName = "ProcurementRksDocumentName",
            ProcurementTenderDocSubmitOpenDate = "ProcurementTenderDocSubmitOpenDate",
            ProcurementTenderDocSubmitCloseDate = "ProcurementTenderDocSubmitCloseDate",
            ProcurementOrderTypeId = "ProcurementOrderTypeId",
            ProcurementPurchDocNum = "ProcurementPurchDocNum",
            ProcurementRfqDate = "ProcurementRfqDate",
            ProcurementQuotationDeadline = "ProcurementQuotationDeadline",
            ProcurementPurchGroup = "ProcurementPurchGroup",
            ProcurementPrNo = "ProcurementPrNo",
            ProcurementAuthPersonName = "ProcurementAuthPersonName",
            ProcurementAuthPosition = "ProcurementAuthPosition",
            ProcurementHeaderText = "ProcurementHeaderText",
            ProcurementHeaderNote = "ProcurementHeaderNote",
            ProcurementWorkDescription = "ProcurementWorkDescription",
            ProcurementBankKey = "ProcurementBankKey",
            ProcurementPoCover = "ProcurementPoCover",
            ProcurementDeliveryAddress = "ProcurementDeliveryAddress",
            ProcurementToPTargVal = "ProcurementToPTargVal",
            ProcurementYourReference = "ProcurementYourReference",
            ProcurementOurReference = "ProcurementOurReference",
            ProcurementSalesPerson = "ProcurementSalesPerson",
            ProcurementTelephone = "ProcurementTelephone",
            ProcurementValidityStart = "ProcurementValidityStart",
            ProcurementValidityEnd = "ProcurementValidityEnd",
            ProcurementItemInterval = "ProcurementItemInterval",
            ProcurementSubItemInterval = "ProcurementSubItemInterval",
            ProcurementWarranty = "ProcurementWarranty",
            ProcurementLanguage = "ProcurementLanguage",
            ProcurementReviewOeRequired = "ProcurementReviewOeRequired",
            ProcurementProcAgreement = "ProcurementProcAgreement",
            ProcurementProcAgreementDate = "ProcurementProcAgreementDate",
            ProcurementProcAsRequired = "ProcurementProcAsRequired",
            ProcurementProcAsApproved = "ProcurementProcAsApproved",
            ProcurementProcAsApprovedDate = "ProcurementProcAsApprovedDate",
            ProcurementProcAsDesc = "ProcurementProcAsDesc",
            ProcurementFinalConclusionDesc = "ProcurementFinalConclusionDesc",
            ProcurementWinnerNominationDate = "ProcurementWinnerNominationDate",
            ProcurementObjectionCloseDate = "ProcurementObjectionCloseDate",
            ProcurementPoDocName = "ProcurementPoDocName",
            ProcurementTemporaryPic = "ProcurementTemporaryPic",
            ProcurementPoNumber = "ProcurementPoNumber",
            ProcurementPoDocFile = "ProcurementPoDocFile",
            ProcurementF1SubmitDate = "ProcurementF1SubmitDate",
            ProcurementF1SubmitBy = "ProcurementF1SubmitBy",
            ProcurementF2SubmitDate = "ProcurementF2SubmitDate",
            ProcurementF2SubmitBy = "ProcurementF2SubmitBy",
            ProcurementF3SubmitDate = "ProcurementF3SubmitDate",
            ProcurementF3SubmitBy = "ProcurementF3SubmitBy",
            ProcurementF31SubmitDate = "ProcurementF31SubmitDate",
            ProcurementF31SubmitBy = "ProcurementF31SubmitBy",
            ProcurementF4SubmitDate = "ProcurementF4SubmitDate",
            ProcurementF4SubmitBy = "ProcurementF4SubmitBy",
            ProcurementF5SubmitDate = "ProcurementF5SubmitDate",
            ProcurementF5SubmitBy = "ProcurementF5SubmitBy",
            ProcurementF6SubmitDate = "ProcurementF6SubmitDate",
            ProcurementF6SubmitBy = "ProcurementF6SubmitBy",
            ProcurementF7SubmitDate = "ProcurementF7SubmitDate",
            ProcurementF7SubmitBy = "ProcurementF7SubmitBy",
            ProcurementF8SubmitDate = "ProcurementF8SubmitDate",
            ProcurementF8SubmitBy = "ProcurementF8SubmitBy",
            ProcurementF9SubmitDate = "ProcurementF9SubmitDate",
            ProcurementF9SubmitBy = "ProcurementF9SubmitBy",
            ProcurementF10SubmitDate = "ProcurementF10SubmitDate",
            ProcurementF10SubmitBy = "ProcurementF10SubmitBy",
            ProcurementF11SubmitDate = "ProcurementF11SubmitDate",
            ProcurementF11SubmitBy = "ProcurementF11SubmitBy",
            ProcurementF12SubmitDate = "ProcurementF12SubmitDate",
            ProcurementF12SubmitBy = "ProcurementF12SubmitBy",
            ProcurementF13SubmitDate = "ProcurementF13SubmitDate",
            ProcurementF13SubmitBy = "ProcurementF13SubmitBy",
            ProcurementF14SubmitDate = "ProcurementF14SubmitDate",
            ProcurementF14SubmitBy = "ProcurementF14SubmitBy",
            ProcurementF15SubmitDate = "ProcurementF15SubmitDate",
            ProcurementF15SubmitBy = "ProcurementF15SubmitBy",
            ProcurementF16SubmitDate = "ProcurementF16SubmitDate",
            ProcurementF16SubmitBy = "ProcurementF16SubmitBy",
            ProcurementF17SubmitDate = "ProcurementF17SubmitDate",
            ProcurementF17SubmitBy = "ProcurementF17SubmitBy",
            ProcurementProcurementMethodId = "ProcurementProcurementMethodId",
            TextMeaning = "TextMeaning"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    namespace RfqTextService {
        const baseUrl = "Procurement/RfqText";
        function Create(request: Serenity.SaveRequest<RfqTextRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RfqTextRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RfqTextRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RfqTextRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/RfqText/Create",
            Update = "Procurement/RfqText/Update",
            Delete = "Procurement/RfqText/Delete",
            Retrieve = "Procurement/RfqText/Retrieve",
            List = "Procurement/RfqText/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface VendorAddressForm {
        VendorId: Serenity.StringEditor;
        AddressId: Serenity.IntegerEditor;
    }
    class VendorAddressForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    interface VendorAddressRow {
        VendorAddressId?: number;
        VendorId?: string;
        AddressId?: number;
        AddressName?: string;
        AddressDescription?: string;
        AddressAddressTypeId?: number;
    }
    namespace VendorAddressRow {
        const idProperty = "VendorAddressId";
        const nameProperty = "AddressName";
        const localTextPrefix = "Procurement.VendorAddress";
        const enum Fields {
            VendorAddressId = "VendorAddressId",
            VendorId = "VendorId",
            AddressId = "AddressId",
            AddressName = "AddressName",
            AddressDescription = "AddressDescription",
            AddressAddressTypeId = "AddressAddressTypeId"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    namespace VendorAddressService {
        const baseUrl = "Procurement/VendorAddress";
        function Create(request: Serenity.SaveRequest<VendorAddressRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<VendorAddressRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VendorAddressRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VendorAddressRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/VendorAddress/Create",
            Update = "Procurement/VendorAddress/Update",
            Delete = "Procurement/VendorAddress/Delete",
            Retrieve = "Procurement/VendorAddress/Retrieve",
            List = "Procurement/VendorAddress/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface VendorForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        PenaltyCode: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        Name2: Serenity.StringEditor;
        Name3: Serenity.StringEditor;
        Name4: Serenity.StringEditor;
        City: Serenity.StringEditor;
        District: Serenity.StringEditor;
        PoBox: Serenity.StringEditor;
        PoBoxPcode: Serenity.StringEditor;
        PostalCode: Serenity.StringEditor;
        Region: Serenity.StringEditor;
        SearchTerm: Serenity.StringEditor;
        Street: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        TrainStation: Serenity.StringEditor;
        LocationNo1: Serenity.IntegerEditor;
        LocationNo2: Serenity.IntegerEditor;
        Authorization: Serenity.StringEditor;
        Industry: Serenity.StringEditor;
        CheckDigit: Serenity.IntegerEditor;
        DataLine: Serenity.StringEditor;
        DmeIndicator: Serenity.StringEditor;
        InstructionKey: Serenity.StringEditor;
        CreatedOn: Serenity.DateEditor;
        VendorRepresentative: Serenity.LookupEditor;
    }
    class VendorForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface VendorLookupViewForm {
        Name: Serenity.StringEditor;
    }
    class VendorLookupViewForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    interface VendorLookupViewRow {
        VendorId?: string;
        Name?: string;
    }
    namespace VendorLookupViewRow {
        const idProperty = "VendorId";
        const nameProperty = "Name";
        const localTextPrefix = "Procurement.VendorLookupView";
        const lookupKey = "Procurement.VendorLookupView";
        function getLookup(): Q.Lookup<VendorLookupViewRow>;
        const enum Fields {
            VendorId = "VendorId",
            Name = "Name"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    namespace VendorLookupViewService {
        const baseUrl = "Procurement/VendorLookupView";
        function Create(request: Serenity.SaveRequest<VendorLookupViewRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<VendorLookupViewRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VendorLookupViewRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VendorLookupViewRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/VendorLookupView/Create",
            Update = "Procurement/VendorLookupView/Update",
            Delete = "Procurement/VendorLookupView/Delete",
            Retrieve = "Procurement/VendorLookupView/Retrieve",
            List = "Procurement/VendorLookupView/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
}
declare namespace SCMONLINE.Procurement {
    interface VendorRepresentativeForm {
        VendorId: Serenity.StringEditor;
        UserId: Serenity.IntegerEditor;
    }
    class VendorRepresentativeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SCMONLINE.Procurement {
    interface VendorRepresentativeRow {
        VendorRepresentativeId?: number;
        VendorId?: string;
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
    namespace VendorRepresentativeRow {
        const idProperty = "VendorRepresentativeId";
        const nameProperty = "VendorId";
        const localTextPrefix = "Procurement.VendorRepresentative";
        const enum Fields {
            VendorRepresentativeId = "VendorRepresentativeId",
            VendorId = "VendorId",
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
declare namespace SCMONLINE.Procurement {
    namespace VendorRepresentativeService {
        const baseUrl = "Procurement/VendorRepresentative";
        function Create(request: Serenity.SaveRequest<VendorRepresentativeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<VendorRepresentativeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VendorRepresentativeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VendorRepresentativeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/VendorRepresentative/Create",
            Update = "Procurement/VendorRepresentative/Update",
            Delete = "Procurement/VendorRepresentative/Delete",
            Retrieve = "Procurement/VendorRepresentative/Retrieve",
            List = "Procurement/VendorRepresentative/List"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    interface VendorRow {
        VendorId?: string;
        Name?: string;
        Description?: string;
        PenaltyCode?: string;
        Vendor?: string;
        Country?: string;
        Name2?: string;
        Name3?: string;
        Name4?: string;
        City?: string;
        District?: string;
        PoBox?: string;
        PoBoxPcode?: string;
        PostalCode?: string;
        Region?: string;
        SearchTerm?: string;
        Street?: string;
        Address?: string;
        Title?: string;
        TrainStation?: string;
        LocationNo1?: number;
        LocationNo2?: number;
        Authorization?: string;
        Industry?: string;
        CheckDigit?: number;
        DataLine?: string;
        DmeIndicator?: string;
        InstructionKey?: string;
        CreatedOn?: string;
        Qualification?: string;
        VendorRepresentative?: number[];
    }
    namespace VendorRow {
        const idProperty = "VendorId";
        const nameProperty = "Name";
        const localTextPrefix = "Procurement.Vendor";
        const lookupKey = "Procurement.Vendor";
        function getLookup(): Q.Lookup<VendorRow>;
        const enum Fields {
            VendorId = "VendorId",
            Name = "Name",
            Description = "Description",
            PenaltyCode = "PenaltyCode",
            Vendor = "Vendor",
            Country = "Country",
            Name2 = "Name2",
            Name3 = "Name3",
            Name4 = "Name4",
            City = "City",
            District = "District",
            PoBox = "PoBox",
            PoBoxPcode = "PoBoxPcode",
            PostalCode = "PostalCode",
            Region = "Region",
            SearchTerm = "SearchTerm",
            Street = "Street",
            Address = "Address",
            Title = "Title",
            TrainStation = "TrainStation",
            LocationNo1 = "LocationNo1",
            LocationNo2 = "LocationNo2",
            Authorization = "Authorization",
            Industry = "Industry",
            CheckDigit = "CheckDigit",
            DataLine = "DataLine",
            DmeIndicator = "DmeIndicator",
            InstructionKey = "InstructionKey",
            CreatedOn = "CreatedOn",
            Qualification = "Qualification",
            VendorRepresentative = "VendorRepresentative"
        }
    }
}
declare namespace SCMONLINE.Procurement {
    namespace VendorService {
        const baseUrl = "Procurement/Vendor";
        function Create(request: Serenity.SaveRequest<VendorRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<VendorRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VendorRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VendorRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Procurement/Vendor/Create",
            Update = "Procurement/Vendor/Update",
            Delete = "Procurement/Vendor/Delete",
            Retrieve = "Procurement/Vendor/Retrieve",
            List = "Procurement/Vendor/List"
        }
    }
}
declare namespace SCMONLINE {
    interface ScriptUserDefinition {
        UserId?: number;
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace SCMONLINE.Texts {
}
declare namespace _Ext {
    enum AdaTidakAda {
        TidakAda = 0,
        Ada = 1
    }
}
declare namespace _Ext {
    enum ApproveTidakApprove {
        TidakApprove = 0,
        Approve = 1
    }
}
declare namespace _Ext {
    enum AuditActionType {
        Insert = 1,
        Update = 2,
        Delete = 3,
        Login = 4
    }
}
declare namespace _Ext {
}
declare namespace _Ext {
    interface AuditLogForm {
        EntityTableName: Serenity.StringEditor;
        VersionNo: Serenity.IntegerEditor;
        UserId: Serenity.LookupEditor;
        Username: Serenity.StringEditor;
        Roles: Serenity.StringEditor;
        TotalCount: Serenity.IntegerEditor;
        ActionType: Serenity.EnumEditor;
        ActionDate: Serenity.DateTimeEditor;
        EntityId: Serenity.IntegerEditor;
        OldEntity: Serenity.StringEditor;
        NewEntity: Serenity.StringEditor;
        Differences: StaticTextBlock;
        IpAddress: Serenity.StringEditor;
        SessionId: Serenity.StringEditor;
    }
    class AuditLogForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace _Ext {
    interface AuditLogRow {
        Roles?: string;
        Username?: string;
        Id?: number;
        VersionNo?: number;
        TotalCount?: number;
        UserId?: number;
        ActionType?: AuditActionType;
        ActionDate?: string;
        EntityTableName?: string;
        EntityId?: number;
        OldEntity?: string;
        NewEntity?: string;
        IpAddress?: string;
        SessionId?: string;
    }
    namespace AuditLogRow {
        const idProperty = "Id";
        const nameProperty = "EntityTableName";
        const localTextPrefix = "_Ext.AuditLog";
        const enum Fields {
            Roles = "Roles",
            Username = "Username",
            Id = "Id",
            VersionNo = "VersionNo",
            TotalCount = "TotalCount",
            UserId = "UserId",
            ActionType = "ActionType",
            ActionDate = "ActionDate",
            EntityTableName = "EntityTableName",
            EntityId = "EntityId",
            OldEntity = "OldEntity",
            NewEntity = "NewEntity",
            IpAddress = "IpAddress",
            SessionId = "SessionId"
        }
    }
}
declare namespace _Ext {
    namespace AuditLogService {
        const baseUrl = "_Ext/AuditLog";
        function Create(request: Serenity.SaveRequest<AuditLogRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AuditLogRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AuditLogRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: AuditLogSpListRequest, onSuccess?: (response: Serenity.ListResponse<AuditLogRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "_Ext/AuditLog/Create",
            Update = "_Ext/AuditLog/Update",
            Delete = "_Ext/AuditLog/Delete",
            Retrieve = "_Ext/AuditLog/Retrieve",
            List = "_Ext/AuditLog/List"
        }
    }
}
declare namespace _Ext {
    interface AuditLogSpListRequest extends Serenity.ListRequest {
        ActionStartDate?: string;
        ActionEndDate?: string;
    }
}
declare namespace _Ext {
    interface AuditLogViewerRequest extends Serenity.ServiceRequest {
        FormKey?: string;
        EntityId?: number;
    }
}
declare namespace _Ext {
    interface AuditLogViewerResponse extends Serenity.ServiceResponse {
        EntityVersions?: AuditLogRow[];
    }
}
declare namespace _Ext {
    namespace AuditLogViewerService {
        const baseUrl = "AuditLogViewer";
        function List(request: AuditLogViewerRequest, onSuccess?: (response: AuditLogViewerResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "AuditLogViewer/List"
        }
    }
}
declare namespace _Ext.DevTools {
    interface SergenConnection {
        Key?: string;
    }
}
declare namespace _Ext.DevTools {
    interface SergenGenerateOptions {
        Row?: boolean;
        Service?: boolean;
        UI?: boolean;
    }
}
declare namespace _Ext.DevTools {
    interface SergenGenerateRequest extends Serenity.ServiceRequest {
        ConnectionKey?: string;
        Table?: SergenTable;
        GenerateOptions?: SergenGenerateOptions;
    }
}
declare namespace _Ext.DevTools {
    interface SergenListTablesRequest extends Serenity.ServiceRequest {
        ConnectionKey?: string;
    }
}
declare namespace _Ext.DevTools {
    namespace SergenService {
        const baseUrl = "DevTools/Sergen";
        function ListConnections(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<SergenConnection>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListTables(request: SergenListTablesRequest, onSuccess?: (response: Serenity.ListResponse<SergenTable>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Generate(request: SergenGenerateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            ListConnections = "DevTools/Sergen/ListConnections",
            ListTables = "DevTools/Sergen/ListTables",
            Generate = "DevTools/Sergen/Generate"
        }
    }
}
declare namespace _Ext.DevTools {
    interface SergenTable {
        Tablename?: string;
        Identifier?: string;
        Module?: string;
        PermissionKey?: string;
    }
}
declare namespace _Ext {
    interface EntityReportRequest extends Serenity.RetrieveRequest {
        ReportKey?: string;
        ReportServiceMethodName?: string;
        ReportDesignPath?: string;
    }
}
declare namespace _Ext {
    enum LelangGagalLelang {
        GagalLelang = 0,
        Lelang = 1
    }
}
declare namespace _Ext {
    interface ListReportRequest extends Serenity.ListRequest {
        ReportKey?: string;
        ReportServiceMethodName?: string;
        ListExcelServiceMethodName?: string;
        ReportDesignPath?: string;
        EqualityFilterWithTextValue?: {
            [key: string]: string;
        };
    }
}
declare namespace _Ext {
    enum Months {
        January = 0,
        February = 1,
        March = 2,
        April = 3,
        May = 4,
        June = 5,
        July = 6,
        August = 7,
        September = 8,
        October = 9,
        November = 10,
        December = 11
    }
}
declare namespace _Ext {
    interface ReplaceRowForm {
        DeletedEntityName: Serenity.StringEditor;
        ReplaceWithEntityId: EmptyLookupEditor;
    }
    class ReplaceRowForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace _Ext {
    interface ReplaceRowRequest extends Serenity.ServiceRequest {
        FormKey?: string;
        IdProperty?: string;
        NameProperty?: string;
        EntityTypeTitle?: string;
        DeletedEntityId?: number;
        DeletedEntityName?: string;
        ReplaceWithEntityId?: number;
    }
}
declare namespace _Ext {
    interface ReplaceRowResponse extends Serenity.ServiceResponse {
    }
}
declare namespace _Ext {
    namespace ReplaceRowService {
        const baseUrl = "ReplaceRow";
        function Replace(request: ReplaceRowRequest, onSuccess?: (response: ReplaceRowResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Replace = "ReplaceRow/Replace"
        }
    }
}
declare namespace _Ext.Reports {
    interface CommonReportRequest extends Serenity.ListRequest {
        ColumnKey?: string;
        ReportKey?: string;
        ReportServiceMethodName?: string;
        ListExcelServiceMethodName?: string;
        ReportDesignPath?: string;
        EqualityFilterWithTextValue?: {
            [key: string]: string;
        };
    }
}
declare namespace _Ext.Reports {
    namespace CommonReportService {
        const baseUrl = "Reports/CommonReport";
        const enum Methods {
        }
    }
}
declare namespace _Ext {
    enum TimeUoM {
        Hour = 1,
        Day = 2,
        Week = 3,
        Month = 4,
        CalenderMonth = 5,
        Year = 6
    }
}
declare namespace _Ext {
    enum UndangTidakUndang {
        TidakUndang = 0,
        Undang = 1
    }
}
declare namespace _Ext {
    enum YaTidak {
        Tidak = 0,
        Ya = 1
    }
}
declare namespace SCMONLINE.LanguageList {
    function getValue(): string[][];
}
declare namespace SCMONLINE.ScriptInitialization {
}
declare namespace SCMONLINE.Administration {
    class EmailAccountsDialog extends _Ext.DialogBase<EmailAccountsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: EmailAccountsForm;
    }
}
declare namespace SCMONLINE.Administration {
    class EmailAccountsGrid extends _Ext.GridBase<EmailAccountsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmailAccountsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace SCMONLINE.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace SCMONLINE.Administration {
    class QueuedEmailDialog extends _Ext.DialogBase<QueuedEmailRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: QueuedEmailForm;
        getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace SCMONLINE.Administration {
    class QueuedEmailGrid extends _Ext.GridBase<QueuedEmailRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof QueuedEmailDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace SCMONLINE.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace SCMONLINE.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace SCMONLINE.Administration {
    class SettingDialog extends _Ext.DialogBase<SettingRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SettingForm;
    }
}
declare namespace SCMONLINE.Administration {
    class SettingGrid extends _Ext.GridBase<SettingRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SettingDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace SCMONLINE.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace SCMONLINE.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace SCMONLINE.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        value: UserPermissionRow[];
        private _rolePermissions;
        rolePermissions: string[];
        private _implicitPermissions;
        implicitPermissions: Q.Dictionary<string[]>;
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace SCMONLINE.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace SCMONLINE.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace SCMONLINE.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace SCMONLINE {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        max: number;
        value: number;
        title: string;
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace SCMONLINE.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace SCMONLINE.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace SCMONLINE.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace SCMONLINE.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace SCMONLINE.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        value: TEntity[];
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
    }
}
declare namespace SCMONLINE.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace SCMONLINE {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent;
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace SCMONLINE.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace SCMONLINE.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace SCMONLINE.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace SCMONLINE.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace SCMONLINE.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace SCMONLINE.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace SCMONLINE.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace SCMONLINE.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace SCMONLINE.Default {
    class ProcParticipantDialog extends _Ext.DialogBase<ProcParticipantRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ProcParticipantForm;
    }
}
declare namespace SCMONLINE.Default {
    class ProcParticipantGrid extends _Ext.GridBase<ProcParticipantRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProcParticipantDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Default {
    class ProcParticipantItemDialog extends _Ext.DialogBase<ProcParticipantItemRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ProcParticipantItemForm;
    }
}
declare namespace SCMONLINE.Default {
    class ProcParticipantItemGrid extends _Ext.GridBase<ProcParticipantItemRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProcParticipantItemDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Default {
    class ProcurementDialog extends _Ext.DialogBase<ProcurementRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ProcurementForm;
    }
}
declare namespace SCMONLINE.Default {
    class ProcurementGrid extends _Ext.GridBase<ProcurementRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProcurementDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Inbox {
    class NotificationDialog extends _Ext.DialogBase<NotificationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        private texteditor;
        protected form: NotificationForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace SCMONLINE.Inbox {
    class NotificationGrid extends _Ext.GridBase<NotificationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof NotificationDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
    }
}
declare namespace SCMONLINE.Northwind {
    class CategoryDialog extends Serenity.EntityDialog<CategoryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CategoryForm;
    }
}
declare namespace SCMONLINE.Northwind {
    class CategoryGrid extends Serenity.EntityGrid<CategoryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SCMONLINE.Northwind {
    class CustomerDialog extends Serenity.EntityDialog<CustomerRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CustomerForm;
        private ordersGrid;
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
        loadEntity(entity: CustomerRow): void;
        onSaveSuccess(response: any): void;
    }
}
declare namespace SCMONLINE.Northwind {
    class CustomerEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, CustomerRow> {
        constructor(hidden: JQuery);
        protected getLookupKey(): string;
        protected getItemText(item: any, lookup: any): string;
    }
}
declare namespace SCMONLINE.Northwind {
    class CustomerGrid extends Serenity.EntityGrid<CustomerRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SCMONLINE.Northwind {
    class OrderDialog extends Serenity.EntityDialog<OrderRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: OrderForm;
        constructor();
        getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace SCMONLINE.Northwind {
    class CustomerOrderDialog extends OrderDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace SCMONLINE.Northwind {
    class OrderGrid extends Serenity.EntityGrid<OrderRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected shippingStateFilter: Serenity.EnumEditor;
        constructor(container: JQuery);
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
        protected createQuickFilters(): void;
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        set_shippingState(value: number): void;
        protected addButtonClick(): void;
    }
}
declare namespace SCMONLINE.Northwind {
    class CustomerOrdersGrid extends OrderGrid {
        protected getDialogType(): typeof CustomerOrderDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _customerID;
        customerID: string;
    }
}
declare namespace SCMONLINE.Northwind {
    class EmployeeListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace SCMONLINE.Northwind {
    class EmployeeFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
        genderProperty: string;
        initializeColumn(column: Slick.Column): void;
    }
}
declare namespace SCMONLINE.Northwind {
    class NoteDialog extends Serenity.TemplatedDialog<any> {
        private textEditor;
        constructor();
        protected getTemplate(): string;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        text: string;
        okClick: () => void;
    }
}
declare namespace SCMONLINE.Northwind {
    class NotesEditor extends Serenity.TemplatedWidget<any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        private isDirty;
        private items;
        constructor(div: JQuery);
        protected getTemplate(): string;
        protected updateContent(): void;
        protected addClick(): void;
        protected editClick(e: any): void;
        deleteClick(e: any): void;
        value: NoteRow[];
        getEditValue(prop: Serenity.PropertyItem, target: any): void;
        setEditValue(source: any, prop: Serenity.PropertyItem): void;
        get_isDirty(): boolean;
        set_isDirty(value: any): void;
        onChange: () => void;
    }
}
declare namespace SCMONLINE.Northwind {
    class FreightFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace SCMONLINE.Northwind {
    class OrderDetailDialog extends Common.GridEditorDialog<OrderDetailRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: OrderDetailForm;
        constructor();
    }
}
declare namespace SCMONLINE.Northwind {
    class OrderDetailsEditor extends Common.GridEditorBase<OrderDetailRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OrderDetailDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace SCMONLINE.Northwind {
    class ProductDialog extends Serenity.EntityDialog<ProductRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ProductForm;
    }
}
declare namespace SCMONLINE.Northwind {
    class ProductGrid extends Serenity.EntityGrid<ProductRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private pendingChanges;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected onViewProcessData(response: any): Serenity.ListResponse<ProductRow>;
        /**
         * It would be nice if we could use autonumeric, Serenity editors etc. here, to control input validation,
         * but it's not supported by SlickGrid as we are only allowed to return a string, and should attach
         * no event handlers to rendered cell contents
         */
        private numericInputFormatter;
        private stringInputFormatter;
        /**
         * Sorry but you cannot use LookupEditor, e.g. Select2 here, only possible is a SELECT element
         */
        private selectFormatter;
        private getEffectiveValue;
        protected getColumns(): Slick.Column[];
        private inputsChange;
        private setSaveButtonState;
        private saveClick;
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
    }
}
declare namespace SCMONLINE.Northwind {
    class RegionDialog extends Serenity.EntityDialog<RegionRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RegionForm;
        protected getLanguages(): string[][];
    }
}
declare namespace SCMONLINE.Northwind {
    class RegionGrid extends Serenity.EntityGrid<RegionRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SCMONLINE.Northwind {
    class PhoneEditor extends Serenity.StringEditor {
        constructor(input: JQuery);
        protected formatValue(): void;
        protected getFormattedValue(): string;
        multiple: boolean;
        get_value(): string;
        set_value(value: string): void;
        static validate(phone: string, isMultiple: boolean): string;
        static isValidPhone(phone: string): boolean;
        static formatPhone(phone: any): any;
        static formatMulti(phone: string, format: (s: string) => string): string;
        static isValidMulti(phone: string, check: (s: string) => boolean): boolean;
    }
}
declare namespace SCMONLINE.Northwind {
    class ShipperDialog extends Serenity.EntityDialog<ShipperRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ShipperForm;
        protected getLanguages(): string[][];
    }
}
declare namespace SCMONLINE.Northwind {
    class ShipperFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace SCMONLINE.Northwind {
    class ShipperGrid extends Serenity.EntityGrid<ShipperRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SCMONLINE.Northwind {
    class SupplierDialog extends Serenity.EntityDialog<SupplierRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SupplierForm;
        protected getLanguages(): string[][];
    }
}
declare namespace SCMONLINE.Northwind {
    class SupplierGrid extends Serenity.EntityGrid<SupplierRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SCMONLINE.Northwind {
    class TerritoryDialog extends Serenity.EntityDialog<TerritoryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TerritoryForm;
        protected getLanguages(): string[][];
    }
}
declare namespace SCMONLINE.Northwind {
    class TerritoryGrid extends Serenity.EntityGrid<TerritoryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SCMONLINE.Procurement {
    class AddressDialog extends _Ext.DialogBase<AddressRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: AddressForm;
    }
}
declare namespace SCMONLINE.Procurement {
    class AddressGrid extends _Ext.GridBase<AddressRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AddressDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Procurement {
    class AddressTypeDialog extends _Ext.DialogBase<AddressTypeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: AddressTypeForm;
    }
}
declare namespace SCMONLINE.Procurement {
    class AddressTypeGrid extends _Ext.GridBase<AddressTypeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AddressTypeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Procurement {
    class ApprovalAuthorityRangeDialog extends _Ext.DialogBase<ApprovalAuthorityRangeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ApprovalAuthorityRangeForm;
    }
}
declare namespace SCMONLINE.Procurement {
    class ApprovalAuthorityRangeGrid extends _Ext.GridBase<ApprovalAuthorityRangeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ApprovalAuthorityRangeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Procurement {
    class BuyerLookupViewDialog extends _Ext.DialogBase<BuyerLookupViewRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: BuyerLookupViewForm;
    }
}
declare namespace SCMONLINE.Procurement {
    class BuyerLookupViewGrid extends _Ext.GridBase<BuyerLookupViewRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BuyerLookupViewDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Procurement {
    class CharacteristicDescriptionDialog extends _Ext.DialogBase<CharacteristicDescriptionRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CharacteristicDescriptionForm;
    }
}
declare namespace SCMONLINE.Procurement {
    class CharacteristicDescriptionGrid extends _Ext.GridBase<CharacteristicDescriptionRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CharacteristicDescriptionDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Procurement {
    class CharacteristicValueDialog extends _Ext.DialogBase<CharacteristicValueRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CharacteristicValueForm;
    }
}
declare namespace SCMONLINE.Procurement {
    class CharacteristicValueGrid extends _Ext.GridBase<CharacteristicValueRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CharacteristicValueDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Procurement {
    class CommitteeMemberDialog extends Common.GridEditorDialog<CommitteeMemberRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: CommitteeMemberForm;
        constructor();
        protected onDialogOpen(): void;
    }
}
declare namespace SCMONLINE.Procurement {
    class CommitteeMemberGrid extends _Ext.GridBase<CommitteeMemberRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CommitteeMemberDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Procurement {
    class CommitteeMembersEditor extends Common.GridEditorBase<CommitteeMemberRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CommitteeMemberDialog;
        protected getLocalTextPrefix(): string;
        myPassValue: number;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace SCMONLINE.Procurement {
    class CommitteeMemberMappingDialog extends _Ext.DialogBase<CommitteeMemberMappingRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CommitteeMemberMappingForm;
    }
}
declare namespace SCMONLINE.Procurement {
    class CommitteeMemberMappingGrid extends _Ext.GridBase<CommitteeMemberMappingRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CommitteeMemberMappingDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Procurement {
    class CommitteeRoleDialog extends _Ext.DialogBase<CommitteeRoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CommitteeRoleForm;
    }
}
declare namespace SCMONLINE.Procurement {
    class CommitteeRoleGrid extends _Ext.GridBase<CommitteeRoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CommitteeRoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Procurement {
    class CommitteeTypeDialog extends _Ext.DialogBase<CommitteeTypeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CommitteeTypeForm;
    }
}
declare namespace SCMONLINE.Procurement {
    class CommitteeTypeGrid extends _Ext.GridBase<CommitteeTypeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CommitteeTypeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Procurement {
    class ContractTypeDialog extends _Ext.DialogBase<ContractTypeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ContractTypeForm;
    }
}
declare namespace SCMONLINE.Procurement {
    class ContractTypeGrid extends _Ext.GridBase<ContractTypeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ContractTypeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Procurement {
    class CurrencyDialog extends _Ext.DialogBase<CurrencyRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CurrencyForm;
    }
}
declare namespace SCMONLINE.Procurement {
    class CurrencyGrid extends _Ext.GridBase<CurrencyRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CurrencyDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Procurement {
    class DocSubmitMethodDialog extends _Ext.DialogBase<DocSubmitMethodRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: DocSubmitMethodForm;
    }
}
declare namespace SCMONLINE.Procurement {
    class DocSubmitMethodGrid extends _Ext.GridBase<DocSubmitMethodRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DocSubmitMethodDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Procurement {
    class DocumentStatusDialog extends _Ext.DialogBase<DocumentStatusRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: DocumentStatusForm;
    }
}
declare namespace SCMONLINE.Procurement {
    class DocumentStatusGrid extends _Ext.GridBase<DocumentStatusRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DocumentStatusDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Procurement {
    class EvaluationConclusionDialog extends _Ext.DialogBase<EvaluationConclusionRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: EvaluationConclusionForm;
    }
}
declare namespace SCMONLINE.Procurement {
    class EvaluationConclusionGrid extends _Ext.GridBase<EvaluationConclusionRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EvaluationConclusionDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Procurement {
    class EvaluationConclusionItemDialog extends _Ext.DialogBase<EvaluationConclusionItemRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: EvaluationConclusionItemForm;
    }
}
declare namespace SCMONLINE.Procurement {
    class EvaluationConclusionItemGrid extends _Ext.GridBase<EvaluationConclusionItemRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EvaluationConclusionItemDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Procurement {
    class F10_NegotiationDialog extends _Ext.DialogBase<ProcurementRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: F10_NegotiationForm;
        constructor();
        getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected onDialogOpen(): void;
        protected afterLoadEntity(): void;
        adjustItemGrid(changedVendorId?: string, evaluationConclusionItemId?: number): void;
        protected compare(a: ProcParticipantItemRow, b: ProcParticipantItemRow): 1 | -1 | 0;
    }
}
declare namespace SCMONLINE.Procurement {
    class F10_NegotiationGrid extends _Ext.GridBase<ProcurementRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F10_NegotiationDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SCMONLINE.Procurement {
    class OwnerEstimateReviewImportDialog extends Serenity.PropertyDialog<any, any> {
        private form;
        rfqItemsEditor: F10_RfqItemsEditor;
        constructor();
        protected getDialogTitle(): string;
        protected getDialogButtons(): Serenity.DialogButton[];
    }
}
declare namespace SCMONLINE.Procurement {
    class F10_ProcParticipantDialog extends Serenity.EntityDialog<ProcParticipantRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: F10_ProcParticipantForm;
    }
}
declare namespace SCMONLINE.Procurement {
    class F10_ProcParticipantGrid extends Serenity.EntityGrid<ProcParticipantRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F10_ProcParticipantDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SCMONLINE.Procurement {
    class F10_ProcParticipantItemDialog extends Common.GridEditorDialog<ProcParticipantItemRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: F10_ProcParticipantItemForm;
        parentDialog: F10_NegotiationDialog;
        protected afterLoadEntity(): void;
        protected onSaveSuccess(response: any): void;
        protected onDialogClose(): void;
    }
}
declare namespace SCMONLINE.Procurement {
    class F10_ProcParticipantItemGrid extends _Ext.GridBase<ProcParticipantItemRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F10_ProcParticipantItemDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Procurement {
    class F10_ProcParticipantItemsEditor extends Common.GridEditorBase<ProcParticipantItemRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F10_ProcParticipantItemDialog;
        protected getLocalTextPrefix(): string;
        parentDialog: F10_NegotiationDialog;
        constructor(container: JQuery);
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>): void;
        protected createSlickGrid(): Slick.Grid;
        protected usePager(): boolean;
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace SCMONLINE.Procurement {
    class F10_RfqItemDialog extends _Ext.DialogBase<RfqItemRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: F10_RfqItemForm;
        parentDialog: F10_NegotiationDialog;
    }
}
declare namespace SCMONLINE.Procurement {
    class F10_RfqItemGrid extends _Ext.GridBase<RfqItemRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F10_RfqItemDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Procurement {
    class F10_RfqItemsEditor extends Common.GridEditorBase<RfqItemRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F10_RfqItemDialog;
        protected getLocalTextPrefix(): string;
        myPassValue: number;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
        protected AdjustRows(gridRows: any): any;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SCMONLINE.Procurement {
    class F11_ProposeWinnerDialog extends _Ext.DialogBase<ProcurementRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: F11_ProposeWinnerForm;
        constructor();
        getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace SCMONLINE.Procurement {
    class F11_ProposeWinnerGrid extends _Ext.GridBase<ProcurementRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F11_ProposeWinnerDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SCMONLINE.Procurement {
    class F12_ProcAsDialog extends _Ext.DialogBase<ProcurementRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: F12_ProcAsForm;
        getToolbarButtons(): Serenity.ToolButton[];
        protected afterLoadEntity(): void;
    }
}
declare namespace SCMONLINE.Procurement {
    class F12_ProcAsGrid extends _Ext.GridBase<ProcurementRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F12_ProcAsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SCMONLINE.Procurement {
    class F13_ProcParticipantDialog extends _Ext.DialogBase<ProcParticipantRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: F13_ProcParticipantForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace SCMONLINE.Procurement {
    class F13_ProcParticipantGrid extends _Ext.GridBase<ProcParticipantRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F13_ProcParticipantDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SCMONLINE.Procurement {
    class F13_ProcParticipantsEditor extends Common.GridEditorBase<ProcParticipantRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F13_ProcParticipantDialog;
        protected getLocalTextPrefix(): string;
        myPassValue: number;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SCMONLINE.Procurement {
    class F13_ProcResultDecisionDialog extends _Ext.DialogBase<ProcurementRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: F13_ProcResultDecisionForm;
        getToolbarButtons(): Serenity.ToolButton[];
        protected afterLoadEntity(): void;
    }
}
declare namespace SCMONLINE.Procurement {
    class F13_ProcResultDecisionGrid extends _Ext.GridBase<ProcurementRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F13_ProcResultDecisionDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SCMONLINE.Procurement {
    class F13_RfqItemDialog extends _Ext.DialogBase<RfqItemRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: F13_RfqItemForm;
    }
}
declare namespace SCMONLINE.Procurement {
    class F13_RfqItemGrid extends _Ext.GridBase<RfqItemRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F13_RfqItemDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Procurement {
    class F13_RfqItemsEditor extends Common.GridEditorBase<RfqItemRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F13_RfqItemDialog;
        protected getLocalTextPrefix(): string;
        myPassValue: number;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
        protected AdjustRows(gridRows: any): any;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SCMONLINE.Procurement {
    class F14_WinnerAnnouncementDialog extends _Ext.DialogBase<ProcurementRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: F14_WinnerAnnouncementForm;
        getToolbarButtons(): Serenity.ToolButton[];
        protected afterLoadEntity(): void;
    }
}
declare namespace SCMONLINE.Procurement {
    class F14_WinnerAnnouncementGrid extends _Ext.GridBase<ProcurementRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F14_WinnerAnnouncementDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SCMONLINE.Procurement {
    class F15_ObjectionProcessDialog extends _Ext.DialogBase<ProcParticipantRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: F15_ObjectionProcessForm;
        constructor();
        getToolbarButtons(): Serenity.ToolButton[];
        protected afterLoadEntity(): void;
        protected updateInterface(): void;
    }
}
declare namespace SCMONLINE.Procurement {
    class F15_ObjectionProcessGrid extends _Ext.GridBase<ProcParticipantRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F15_ObjectionProcessDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SCMONLINE.Procurement {
    class F16_WinnerDesignationDialog extends _Ext.DialogBase<ProcurementRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: F16_WinnerDesignationForm;
        getToolbarButtons(): Serenity.ToolButton[];
        protected afterLoadEntity(): void;
    }
}
declare namespace SCMONLINE.Procurement {
    class F16_WinnerDesignationGrid extends _Ext.GridBase<ProcurementRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F16_WinnerDesignationDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SCMONLINE.Procurement {
    class F17_PurchOrderDocUploadDialog extends _Ext.DialogBase<ProcurementRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: F17_PurchOrderDocUploadForm;
        getToolbarButtons(): Serenity.ToolButton[];
        protected afterLoadEntity(): void;
    }
}
declare namespace SCMONLINE.Procurement {
    class F17_PurchOrderDocUploadGrid extends _Ext.GridBase<ProcurementRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F17_PurchOrderDocUploadDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SCMONLINE.Procurement {
    class F19_CommitteeApprovalDialog extends _Ext.DialogBase<ProcurementRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: F19_CommitteeApprovalForm;
        getToolbarButtons(): Serenity.ToolButton[];
        private permissions;
        protected afterLoadEntity(): void;
        constructor(container: JQuery);
        protected updateInterface(): void;
        protected onDialogOpen(): void;
        reload(): void;
    }
}
declare namespace SCMONLINE.Procurement {
    class F19_CommitteeApprovalGrid extends _Ext.GridBase<ProcurementRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F19_CommitteeApprovalDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SCMONLINE.Procurement {
    class F19_CommitteeMemberDialog extends _Ext.DialogBase<CommitteeMemberRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: F19_CommitteeMemberForm;
        parentDialog: F19_CommitteeApprovalDialog;
        protected onSaveSuccess(response: any): void;
        protected onDialogClose(): void;
        getToolbarButtons(): Serenity.ToolButton[];
        protected afterLoadEntity(): void;
    }
}
declare namespace SCMONLINE.Procurement {
    class F19_CommitteeMemberGrid extends _Ext.GridBase<CommitteeMemberRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F19_CommitteeMemberDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Procurement {
    class F19_CommitteeMembersEditor extends Common.GridEditorBase<CommitteeMemberRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F19_CommitteeMemberDialog;
        protected getLocalTextPrefix(): string;
        myPassValue: number;
        parentDialog: F19_CommitteeApprovalDialog;
        constructor(container: JQuery);
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>): void;
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace SCMONLINE.Procurement {
    class F19_ProcParticipantDialog extends _Ext.DialogBase<ProcParticipantRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: F19_ProcParticipantForm;
        parentDialog: F19_CommitteeApprovalDialog;
    }
}
declare namespace SCMONLINE.Procurement {
    class F19_ProcParticipantGrid extends _Ext.GridBase<ProcParticipantRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F19_ProcParticipantDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Procurement {
    class F19_ProcParticipantsEditor extends Common.GridEditorBase<ProcParticipantRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F19_ProcParticipantDialog;
        protected getLocalTextPrefix(): string;
        parentDialog: F19_CommitteeApprovalDialog;
        constructor(container: JQuery);
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>): void;
        validateEntity(row: any, id: any): boolean;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SCMONLINE.Procurement {
    class F19_ProcParticipantItemDialog extends _Ext.DialogBase<ProcParticipantItemRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: F19_ProcParticipantItemForm;
    }
}
declare namespace SCMONLINE.Procurement {
    class F19_ProcParticipantItemGrid extends _Ext.GridBase<ProcParticipantItemRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F19_ProcParticipantItemDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Procurement {
    class F19_ProcParticipantItemsEditor extends Common.GridEditorBase<ProcParticipantItemRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F19_ProcParticipantItemDialog;
        protected getLocalTextPrefix(): string;
        parentDialog: F19_CommitteeApprovalDialog;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
        protected AdjustRows(gridRows: any): any;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SCMONLINE.Procurement {
    class F1_BLSelectionAdjustmentDialog extends _Ext.DialogBase<ProcurementRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: F1_BLSelectionAdjustmentForm;
        protected participantCount: number;
        constructor(opt?: any);
        protected loadDefaultCommitteeRole(committeeTypeId: number): void;
        getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected adjustParticipantSequence(): void;
        protected afterLoadEntity(): void;
        protected onDialogOpen(): void;
    }
}
declare namespace SCMONLINE.Procurement {
    class F1_BLSelectionAdjustmentGrid extends _Ext.GridBase<ProcurementRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F1_BLSelectionAdjustmentDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SCMONLINE.Procurement {
    class F20_ProcPrDialog extends _Ext.DialogBase<ProcPrRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: F20_ProcPrForm;
    }
}
declare namespace SCMONLINE.Procurement {
    class F20_ProcPrEditor extends Common.GridEditorBase<ProcPrRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F20_ProcPrDialog;
        protected getLocalTextPrefix(): string;
        myPassValue: number;
        parentDialog: F20_PurchaseRequisitionTrackingDialog;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SCMONLINE.Procurement {
    class F20_ProcPrGrid extends _Ext.GridBase<ProcPrRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F20_ProcPrDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Procurement {
    class F20_ProcurementDialog extends _Ext.DialogBase<ProcurementRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: F20_ProcurementForm;
    }
}
declare namespace SCMONLINE.Procurement {
    class F20_ProcurementEditor extends Common.GridEditorBase<ProcurementRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F20_ProcurementDialog;
        protected getLocalTextPrefix(): string;
        myPassValue: number;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SCMONLINE.Procurement {
    class F20_ProcurementGrid extends _Ext.GridBase<ProcurementRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F20_ProcurementDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SCMONLINE.Procurement {
    class F20_PurchaseRequisitionTrackingDialog extends _Ext.DialogBase<PurchaseRequisitionRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: F20_PurchaseRequisitionTrackingForm;
    }
}
declare namespace SCMONLINE.Procurement {
    class F20_PurchaseRequisitionTrackingGrid extends _Ext.GridBase<PurchaseRequisitionRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F20_PurchaseRequisitionTrackingDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SCMONLINE.Procurement {
    class F2_ProcurementDocCreationDialog extends _Ext.DialogBase<ProcurementRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: F2_ProcurementDocCreationForm;
        getToolbarButtons(): Serenity.ToolButton[];
        protected afterLoadEntity(): void;
        protected updateInterface(): void;
    }
}
declare namespace SCMONLINE.Procurement {
    class F2_ProcurementDocCreationGrid extends _Ext.GridBase<ProcurementRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F2_ProcurementDocCreationDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SCMONLINE.Procurement {
    class F3_1_InputOwnerEstimateDialog extends _Ext.DialogBase<ProcurementRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: F3_1_InputOwnerEstimateForm;
        constructor(container: JQuery);
        getToolbarButtons(): Serenity.ToolButton[];
        protected afterLoadEntity(): void;
    }
}
declare namespace SCMONLINE.Procurement {
    class F3_1_InputOwnerEstimateGrid extends _Ext.GridBase<ProcurementRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F3_1_InputOwnerEstimateDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SCMONLINE.Procurement {
    class OwnerEstimateImportDialog extends Serenity.PropertyDialog<any, any> {
        private form;
        rfqItemsEditor: RfqItemsEditor;
        constructor();
        protected getDialogTitle(): string;
        protected getDialogButtons(): Serenity.DialogButton[];
    }
}
declare namespace SCMONLINE.Procurement {
    class F3_CreateRFQDialog extends _Ext.DialogBase<ProcurementRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: F3_CreateRFQForm;
        constructor(opt?: any);
        getToolbarButtons(): Serenity.ToolButton[];
        protected afterLoadEntity(): void;
    }
}
declare namespace SCMONLINE.Procurement {
    class F3_CreateRFQGrid extends _Ext.GridBase<ProcurementRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F3_CreateRFQDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SCMONLINE.Procurement {
    class F4_AanwijzingDialog extends _Ext.DialogBase<ProcurementRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: F4_AanwijzingForm;
        getToolbarButtons(): Serenity.ToolButton[];
        protected afterLoadEntity(): void;
    }
}
declare namespace SCMONLINE.Procurement {
    class F4_AanwijzingGrid extends _Ext.GridBase<ProcurementRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F4_AanwijzingDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SCMONLINE.Procurement {
    class F5_ProcParticipantItemDialog extends Common.GridEditorDialog<ProcParticipantItemRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: F5_ProcParticipantItemForm;
        parentDialog: F5_SubmitTenderDocumentDialog;
        protected afterLoadEntity(): void;
        protected onSaveSuccess(response: any): void;
        protected onDialogClose(): void;
    }
}
declare namespace SCMONLINE.Procurement {
    class F5_ProcParticipantItemGrid extends _Ext.GridBase<ProcParticipantItemRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F5_ProcParticipantItemDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Procurement {
    class F5_ProcParticipantItemsEditor extends Common.GridEditorBase<ProcParticipantItemRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F5_ProcParticipantItemDialog;
        protected getLocalTextPrefix(): string;
        parentDialog: F5_SubmitTenderDocumentDialog;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
        protected AdjustRows(gridRows: any): any;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SCMONLINE.Procurement {
    class BidPriceImportDialog extends Serenity.PropertyDialog<any, any> {
        private form;
        procParticipantItemsEditor: F5_ProcParticipantItemsEditor;
        constructor();
        protected getDialogTitle(): string;
        protected getDialogButtons(): Serenity.DialogButton[];
    }
}
declare namespace SCMONLINE.Procurement {
    class F5_SubmitTenderDocumentDialog extends _Ext.DialogBase<ProcParticipantRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: F5_SubmitTenderDocumentForm;
        constructor();
        getToolbarButtons(): Serenity.ToolButton[];
        protected afterLoadEntity(): void;
        protected onDialogOpen(): void;
        reloadDialog(): void;
    }
}
declare namespace SCMONLINE.Procurement {
    class F5_SubmitTenderDocumentGrid extends _Ext.GridBase<ProcParticipantRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F5_SubmitTenderDocumentDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SCMONLINE.Procurement {
    class F5_TnCDialog extends Serenity.TemplatedDialog<any> {
        private form;
        procParticipantEntity: ProcParticipantRow;
        parentDialog: F5_SubmitTenderDocumentDialog;
        constructor();
        protected getDialogTitle(): string;
        /**
         * Here we override loadInitialEntity method to set value for "DisplayFieldValue" field.
         * If this was an EntityDialog, your field value would be originating from server side entity.
         */
        protected onDialogOpen(): void;
    }
}
declare namespace SCMONLINE.Procurement {
    class F6_OpenTenderDocumentDialog extends _Ext.DialogBase<ProcurementRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        form: F6_OpenTenderDocumentForm;
        parentDialog: F6_OpenTenderDocumentDialog;
        constructor();
        getToolbarButtons(): Serenity.ToolButton[];
        protected onDialogOpen(): void;
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
        getEntity(): ProcurementRow;
    }
}
declare namespace SCMONLINE.Procurement {
    class F6_OpenTenderDocumentGrid extends _Ext.GridBase<ProcurementRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F6_OpenTenderDocumentDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SCMONLINE.Procurement {
    class F6_ProcParticipantDialog extends _Ext.DialogBase<ProcParticipantRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: F6_ProcParticipantForm;
        parentDialog: F6_OpenTenderDocumentDialog;
        protected afterLoadEntity(): void;
        protected onDialogOpen(): void;
    }
}
declare namespace SCMONLINE.Procurement {
    class F6_ProcParticipantGrid extends _Ext.GridBase<ProcParticipantRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F6_ProcParticipantDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Procurement {
    class F6_ProcParticipantsEditor extends Common.GridEditorBase<ProcParticipantRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F6_ProcParticipantDialog;
        protected getLocalTextPrefix(): string;
        parentDialog: F6_OpenTenderDocumentDialog;
        constructor(container: JQuery);
        protected createToolbar(): any[];
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>): void;
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace SCMONLINE.Procurement {
    class F6_ProcParticipantItemDialog extends Common.GridEditorDialog<ProcParticipantItemRow> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: F6_ProcParticipantItemForm;
        parentDialog: F6_ProcParticipantItemDialog;
        protected afterLoadEntity(): void;
        protected onSaveSuccess(response: any): void;
        protected onDialogClose(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace SCMONLINE.Procurement {
    class F6_ProcParticipantItemGrid extends _Ext.GridBase<ProcParticipantItemRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F6_ProcParticipantItemDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Procurement {
    class F6_ProcParticipantItemsEditor extends Common.GridEditorBase<ProcParticipantItemRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F6_ProcParticipantItemDialog;
        protected getLocalTextPrefix(): string;
        parentDialog: F6_OpenTenderDocumentDialog;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
        protected AdjustRows(gridRows: any): any;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SCMONLINE.Procurement {
    class F7_ProcParticipantDialog extends _Ext.DialogBase<ProcParticipantRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: F7_ProcParticipantForm;
        parentDialog: F7_TenderEvaluationDialog;
        constructor();
        protected afterLoadEntity(): void;
        protected updateInterface(): void;
        protected onDialogOpen(): void;
    }
}
declare namespace SCMONLINE.Procurement {
    class F7_ProcParticipantGrid extends _Ext.GridBase<ProcParticipantRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F7_ProcParticipantDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SCMONLINE.Procurement {
    class F7_ProcParticipantsEditor extends Common.GridEditorBase<ProcParticipantRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F7_ProcParticipantDialog;
        protected getLocalTextPrefix(): string;
        parentDialog: F7_TenderEvaluationDialog;
        constructor(container: JQuery);
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>): void;
        validateEntity(row: any, id: any): boolean;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SCMONLINE.Procurement {
    class F7_ProcParticipantItemDialog extends Common.GridEditorDialog<ProcParticipantItemRow> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: F7_ProcParticipantItemForm;
        parentDialog: F7_ProcParticipantItemDialog;
        protected afterLoadEntity(): void;
        protected onSaveSuccess(response: any): void;
        protected onDialogClose(): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace SCMONLINE.Procurement {
    class F7_ProcParticipantItemGrid extends _Ext.GridBase<ProcParticipantItemRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F7_ProcParticipantItemDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Procurement {
    class F7_ProcParticipantItemsEditor extends Common.GridEditorBase<ProcParticipantItemRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F7_ProcParticipantItemDialog;
        protected getLocalTextPrefix(): string;
        parentDialog: F7_TenderEvaluationDialog;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
        protected AdjustRows(gridRows: any): any;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SCMONLINE.Procurement {
    class F7_TenderEvaluationDialog extends _Ext.DialogBase<ProcurementRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        form: F7_TenderEvaluationForm;
        getToolbarButtons(): Serenity.ToolButton[];
        protected onDialogOpen(): void;
        protected afterLoadEntity(): void;
        getEntity(): ProcurementRow;
    }
}
declare namespace SCMONLINE.Procurement {
    class F7_TenderEvaluationGrid extends _Ext.GridBase<ProcurementRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F7_TenderEvaluationDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SCMONLINE.Procurement {
    class F8_ProcParticipantDialog extends _Ext.DialogBase<ProcParticipantRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: F8_ProcParticipantForm;
        parentDialog: F8_TechnicalClarificationDialog;
        protected afterLoadEntity(): void;
    }
}
declare namespace SCMONLINE.Procurement {
    class F8_ProcParticipantGrid extends _Ext.GridBase<ProcParticipantRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F8_ProcParticipantDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getButtons(): Serenity.ToolButton[];
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Procurement {
    class F8_ProcParticipantsEditor extends Common.GridEditorBase<ProcParticipantRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F8_ProcParticipantDialog;
        protected getLocalTextPrefix(): string;
        parentDialog: F8_TechnicalClarificationDialog;
        constructor(container: JQuery);
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>): void;
        validateEntity(row: any, id: any): boolean;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SCMONLINE.Procurement {
    class F8_TechnicalClarificationDialog extends _Ext.DialogBase<ProcurementRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: F8_TechnicalClarificationForm;
        getToolbarButtons(): Serenity.ToolButton[];
        protected afterLoadEntity(): void;
    }
}
declare namespace SCMONLINE.Procurement {
    class F8_TechnicalClarificationGrid extends _Ext.GridBase<ProcurementRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F8_TechnicalClarificationDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getButtons(): Serenity.ToolButton[];
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Procurement {
    class F9_PriceEvaluationDialog extends _Ext.DialogBase<ProcurementRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: F9_PriceEvaluationForm;
        getToolbarButtons(): Serenity.ToolButton[];
        constructor(container: JQuery);
        protected updateInterface(): void;
        protected onDialogOpen(): void;
        protected afterLoadEntity(): void;
        adjustItemGrid(changedVendorId?: string, evaluationConclusionItemId?: number): void;
        protected compare(a: ProcParticipantItemRow, b: ProcParticipantItemRow): 1 | -1 | 0;
    }
}
declare namespace SCMONLINE.Procurement {
    class F9_PriceEvaluationGrid extends _Ext.GridBase<ProcurementRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F9_PriceEvaluationDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SCMONLINE.Procurement {
    class F9_ProcParticipantItemDialog extends Common.GridEditorDialog<ProcParticipantItemRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected form: F9_ProcParticipantItemForm;
        parentDialog: F9_PriceEvaluationDialog;
        protected onSaveSuccess(response: any): void;
        protected onDialogClose(): void;
    }
}
declare namespace SCMONLINE.Procurement {
    class F9_ProcParticipantItemGrid extends _Ext.GridBase<ProcParticipantItemRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F9_ProcParticipantItemDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Procurement {
    class F9_ProcParticipantItemsEditor extends Common.GridEditorBase<ProcParticipantItemRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof F9_ProcParticipantItemDialog;
        protected getLocalTextPrefix(): string;
        parentDialog: F9_PriceEvaluationDialog;
        constructor(container: JQuery);
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>): void;
        protected createSlickGrid(): Slick.Grid;
        protected usePager(): boolean;
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace SCMONLINE.Procurement {
    class OrderTypeDialog extends _Ext.DialogBase<OrderTypeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: OrderTypeForm;
    }
}
declare namespace SCMONLINE.Procurement {
    class OrderTypeGrid extends _Ext.GridBase<OrderTypeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OrderTypeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Procurement {
    class ProcParticipantDialog extends Common.GridEditorDialog<ProcParticipantRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: ProcParticipantForm;
        constructor();
    }
}
declare namespace SCMONLINE.Procurement {
    class ProcParticipantGrid extends _Ext.GridBase<ProcParticipantRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProcParticipantDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private isHighestVersionFilter;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Procurement {
    class ProcParticipantLookupEditor extends Serenity.LookupEditorBase<ProcParticipantLookupEditorOptions, any> {
        constructor(container: JQuery, opt?: ProcParticipantLookupEditorOptions);
        getSelect2Options(): Select2Options;
        protected myFormatSelection(item: Serenity.Select2Item): string;
        protected myFormatResult(item: Serenity.Select2Item): string;
    }
    interface ProcParticipantLookupEditorOptions extends Serenity.LookupEditorOptions {
        vendorId: string;
        name: string;
        penaltyCode: string;
    }
}
declare namespace SCMONLINE.Procurement {
    class ProcParticipantsEditor extends Common.GridEditorBase<ProcParticipantRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProcParticipantDialog;
        protected getLocalTextPrefix(): string;
        myPassValue: number;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace SCMONLINE.Procurement {
    class ProcParticipantItemDialog extends Common.GridEditorDialog<ProcParticipantItemRow> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ProcParticipantItemForm;
    }
}
declare namespace SCMONLINE.Procurement {
    class ProcParticipantItemGrid extends _Ext.GridBase<ProcParticipantItemRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProcParticipantItemDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Procurement {
    class ProcPrDialog extends Common.GridEditorDialog<ProcPrRow> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ProcPrForm;
    }
}
declare namespace SCMONLINE.Procurement {
    class ProcPrGrid extends _Ext.GridBase<ProcPrRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProcPrDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Procurement {
    class ProcStatusDialog extends _Ext.DialogBase<ProcStatusRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ProcStatusForm;
    }
}
declare namespace SCMONLINE.Procurement {
    class ProcStatusGrid extends _Ext.GridBase<ProcStatusRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProcStatusDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Procurement {
    class BidderListEditor extends Serenity.Widget<any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        constructor(container: JQuery);
        private updateElementContent;
        value: string;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
    }
}
declare namespace SCMONLINE.Procurement {
    class ProcurementDialog extends _Ext.DialogBase<ProcurementRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ProcurementForm;
        protected participantCount: number;
        constructor(opt?: any);
        protected updateInterface(): void;
        protected adjustParticipantSequence(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace SCMONLINE.Procurement {
    class ProcurementGrid extends _Ext.GridBase<ProcurementRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProcurementDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Procurement {
    class PurchaseRequestsEditor extends Common.GridEditorBase<ProcPrRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProcPrDialog;
        protected getLocalTextPrefix(): string;
        myPassValue: number;
        constructor(container: JQuery);
    }
}
declare namespace SCMONLINE.Procurement {
    class RfqItemsEditor extends Common.GridEditorBase<RfqItemRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RfqItemDialog;
        protected getLocalTextPrefix(): string;
        myPassValue: number;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
        protected AdjustRows(gridRows: any): any;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SCMONLINE.Procurement {
    class RfqTextsEditor extends Common.GridEditorBase<RfqTextRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RfqTextDialog;
        protected getLocalTextPrefix(): string;
        myPassValue: number;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace SCMONLINE.Procurement {
    class ProcurementMethodDialog extends _Ext.DialogBase<ProcurementMethodRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ProcurementMethodForm;
    }
}
declare namespace SCMONLINE.Procurement {
    class ProcurementMethodGrid extends _Ext.GridBase<ProcurementMethodRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProcurementMethodDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Procurement {
    class ProcurementTypeDialog extends _Ext.DialogBase<ProcurementTypeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ProcurementTypeForm;
    }
}
declare namespace SCMONLINE.Procurement {
    class ProcurementTypeGrid extends _Ext.GridBase<ProcurementTypeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProcurementTypeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Procurement {
    class ProcValueRangeDialog extends _Ext.DialogBase<ProcValueRangeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ProcValueRangeForm;
    }
}
declare namespace SCMONLINE.Procurement {
    class ProcValueRangeGrid extends _Ext.GridBase<ProcValueRangeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProcValueRangeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Procurement {
    class AssignBuyerBulkAction extends Common.BulkServiceAction {
        protected buyerId: number;
        constructor(buyerId: number);
        /**
         * This controls how many service requests will be used in parallel.
         * Determine this number based on how many requests your server
         * might be able to handle, and amount of wait on external resources.
         */
        protected getParallelRequests(): number;
        /**
         * These number of records IDs will be sent to your service in one
         * service call. If your service is designed to handle one record only,
         * set it to 1. But note that, if you have 5000 records, this will
         * result in 5000 service calls / requests.
         */
        protected getBatchSize(): number;
        /**
         * This is where you should call your service.
         * Batch parameter contains the selected AssignBuyer IDs
         * that should be processed in this service call.
         */
        protected executeForBatch(batch: any): void;
    }
}
declare namespace SCMONLINE.Procurement {
    class BuyerAssignmentDialog extends Serenity.PropertyDialog<any, any> {
        private form;
        rowSelection: Serenity.GridRowSelectionMixin;
        constructor();
        protected getDialogTitle(): string;
        protected getDialogButtons(): Serenity.DialogButton[];
    }
}
declare namespace SCMONLINE.Procurement {
    class PurchaseRequisitionDialog extends _Ext.DialogBase<PurchaseRequisitionRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PurchaseRequisitionForm;
        constructor();
        protected onDialogOpen(): void;
        protected onSaveSuccess(response: any): void;
    }
}
declare namespace SCMONLINE.Procurement {
    class PurchaseRequisitionGrid extends _Ext.GridBase<PurchaseRequisitionRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PurchaseRequisitionDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected getViewOptions(): Slick.RemoteViewOptions;
    }
}
declare namespace SCMONLINE.Procurement {
    class PurchDocTextRefDialog extends _Ext.DialogBase<PurchDocTextRefRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PurchDocTextRefForm;
    }
}
declare namespace SCMONLINE.Procurement {
    class PurchDocTextRefGrid extends _Ext.GridBase<PurchDocTextRefRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PurchDocTextRefDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Procurement {
    class RfqItemDialog extends Common.GridEditorDialog<RfqItemRow> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RfqItemForm;
        getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare namespace SCMONLINE.Procurement {
    class RfqItemGrid extends _Ext.GridBase<RfqItemRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RfqItemDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Procurement {
    class RfqItemTextDialog extends _Ext.DialogBase<RfqItemTextRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RfqItemTextForm;
    }
}
declare namespace SCMONLINE.Procurement {
    class RfqItemTextGrid extends _Ext.GridBase<RfqItemTextRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RfqItemTextDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Procurement {
    class RfqTextDialog extends Common.GridEditorDialog<RfqTextRow> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RfqTextForm;
    }
}
declare namespace SCMONLINE.Procurement {
    class RfqTextGrid extends _Ext.GridBase<RfqTextRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RfqTextDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Procurement {
    class VendorDialog extends _Ext.DialogBase<VendorRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: VendorForm;
    }
}
declare namespace SCMONLINE.Procurement {
    class VendorGrid extends _Ext.GridBase<VendorRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VendorDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Procurement {
    class VendorRepresentativeEditor extends Common.GridEditorBase<VendorRepresentativeRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VendorRepresentativeDialog;
        protected getLocalTextPrefix(): string;
        myPassValue: number;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace SCMONLINE.Procurement {
    class VendorAddressDialog extends _Ext.DialogBase<VendorAddressRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: VendorAddressForm;
    }
}
declare namespace SCMONLINE.Procurement {
    class VendorAddressGrid extends _Ext.GridBase<VendorAddressRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VendorAddressDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Procurement {
    class VendorLookupViewDialog extends _Ext.DialogBase<VendorLookupViewRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: VendorLookupViewForm;
    }
}
declare namespace SCMONLINE.Procurement {
    class VendorLookupViewGrid extends _Ext.GridBase<VendorLookupViewRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VendorLookupViewDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace SCMONLINE.Procurement {
    class VendorRepresentativeDialog extends Common.GridEditorDialog<VendorRepresentativeRow> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: VendorRepresentativeForm;
    }
}
declare namespace SCMONLINE.Procurement {
    class VendorRepresentativeGrid extends _Ext.GridBase<VendorRepresentativeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof VendorRepresentativeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, options: any);
    }
}
declare namespace _Ext {
    class AuditLogActionTypeFormatter implements Slick.Formatter {
        static format(ctx: Slick.FormatterContext): string;
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace _Ext {
    class DialogBase<TEntity, TOptions> extends Serenity.EntityDialog<TEntity, TOptions> {
        protected get_ExtDialogOptions(): ExtDialogOptions;
        private loadedState;
        isReadOnly: boolean;
        protected form: any;
        constructor(opt?: any);
        protected updateInterface(): void;
        protected onDialogOpen(): void;
        protected onDialogClose(): void;
        protected setReadOnly(value: boolean): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
        onRefreshClick(): void;
        protected getSaveState(): string;
        protected onSaveSuccess(response: any): void;
        loadResponse(data: any): void;
        maximize(): void;
        fullContentArea(): void;
        setDialogSize(width?: any, height?: any, top?: any, left?: any, $content?: any): void;
        onAfterSetDialogSize(): void;
        onAfterDialogClose(entity: TEntity): void;
        parentGrid: GridBase<TEntity, any>;
    }
}
declare namespace _Ext {
    class AuditLogDialog extends DialogBase<AuditLogRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: AuditLogForm;
        getToolbarButtons(): Serenity.ToolButton[];
        protected afterLoadEntity(): void;
    }
}
declare namespace _Ext {
    class GridBase<TItem, TOptions> extends Serenity.EntityGrid<TItem, TOptions> {
        protected get_ExtGridOptions(): ExtGridOptions;
        isReadOnly: boolean;
        isRequired: boolean;
        isAutosized: boolean;
        isChildGrid: boolean;
        nextRowNumber: number;
        autoColumnSizePlugin: any;
        rowSelection: Serenity.GridRowSelectionMixin;
        pickerDialog: GridItemPickerDialog;
        constructor(container: JQuery, options?: TOptions);
        protected markupReady(): void;
        protected getButtons(): Serenity.ToolButton[];
        protected getReportRequest(): any;
        protected getColumns(): Slick.Column[];
        protected createSlickGrid(): Slick.Grid;
        resetColumns(columns: Slick.Column[]): void;
        resizeAllCulumn(): void;
        protected getSlickOptions(): Slick.GridOptions;
        protected getViewOptions(): Slick.RemoteViewOptions;
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected onInlineActionClick(target: JQuery, recordId: any, item: TItem): void;
        protected resetRowNumber(): void;
        protected setGrouping(groupInfo: Slick.GroupInfo<TItem>[]): void;
        protected onViewProcessData(response: Serenity.ListResponse<TItem>): Serenity.ListResponse<TItem>;
        initDialog(dialog: DialogBase<TItem, any>): void;
        readonly selectedItems: TItem[];
        selectedKeys: any[];
    }
}
declare namespace _Ext {
    class AuditLogGrid extends GridBase<AuditLogRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AuditLogDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
    }
}
declare var jsondiffpatch: any;
declare namespace _Ext {
    class AuditLogViewer {
        el: string;
        data: {
            entityVersions: any[];
        };
        entity: any;
        entityId: any;
        constructor(el: string, entityVersions: AuditLogRow[]);
        mounted: () => void;
        computed: {
            test: () => string;
        };
        filters: {
            filterByYardId: () => any[];
        };
        methods: {
            showDiff: (versionInfo: AuditLogRow) => void;
            getDiff: (versionInfo: AuditLogRow) => any;
        };
        destroyed(): void;
    }
}
declare namespace _Ext {
    class AuditLogViewerDialog extends Serenity.TemplatedDialog<any> {
        request: AuditLogViewerRequest;
        constructor(request: AuditLogViewerRequest);
        protected getTemplateName(): string;
    }
}
declare namespace _Ext {
    class ReportGridBase<TItem, TOptions> extends _Ext.GridBase<TItem, TOptions> {
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
    }
}
declare namespace _Ext {
    class ReportPanelBase<TRequest> extends Serenity.PropertyPanel<TRequest, any> {
        protected getTemplateName(): string;
        protected getReportTitle(): string;
        protected getReportKey(): string;
        protected getReportRequest(): TRequest;
        constructor(container: JQuery);
    }
}
declare namespace _Ext {
    /**
     * Our select editor with hardcoded values.
     *
     * When you define a new editor type, make sure you build
     * and transform templates for it to be available
     * in server side forms, e.g. [HardCodedValuesEditor]
     */
    class AdaTidakAdaEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace _Ext {
    class AutoCompleteEditor extends Serenity.StringEditor {
        constructor(input: JQuery, options: AutoCompleteOptions);
        protected bindAutoComplete(input: any): void;
    }
    interface AutoCompleteOptions {
        lookupKey: string;
        sourceArray: string[];
        sourceCSV: string;
        minSearchLength: number;
    }
}
declare namespace _Ext {
    class ColorEditor extends Serenity.TemplatedWidget<any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getTemplate(): string;
        constructor(container: JQuery);
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
    }
}
declare namespace _Ext {
    class DateTimePickerEditor extends Serenity.Widget<any> implements Serenity.IGetEditValue, Serenity.ISetEditValue, Serenity.IReadOnly {
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        constructor(container: JQuery);
        value: string;
        valueAsDate: Date;
        get_readOnly(): boolean;
        set_readOnly(value: boolean): void;
        set_minDate(date: Date): void;
        set_maxDate(date: Date): void;
        set_minDateTime(date: Date): void;
        set_maxDateTime(date: Date): void;
    }
}
declare namespace _Ext {
    class EditorDialogBase<TEntity> extends DialogBase<TEntity, any> {
        protected get_ExtDialogOptions(): ExtDialogOptions;
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
        parentEditor: GridEditorBase<TEntity>;
    }
}
declare namespace _Ext {
    class EmptyLookupEditor extends Serenity.Select2Editor<any, any> {
        setSelect2Items(items: Serenity.Select2Item[]): void;
        setLookupItems(lookup: Q.Lookup<any>): void;
    }
}
declare namespace _Ext {
    class GridEditorBase<TEntity> extends _Ext.GridBase<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue, Serenity.IReadOnly {
        protected get_ExtGridOptions(): ExtGridOptions;
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        private sortGridFunction;
        protected getQuickFilters(): any[];
        protected id(entity: TEntity): any;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected addButtonClick(): void;
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        value: TEntity[];
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        private searchText;
        protected createToolbarExtensions(): void;
        protected onViewFilter(row: any): boolean;
        private matchContains;
        protected enableFiltering(): boolean;
        protected onViewSubmit(): boolean;
        get_readOnly(): boolean;
        set_readOnly(value: boolean): void;
        protected getSlickOptions(): Slick.GridOptions;
        parentDialog: DialogBase<any, any>;
        onItemsChanged(): void;
        onBeforeGetValue(items: TEntity[]): void;
    }
}
declare namespace _Ext {
    class HardCodedLookupEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery, options: HardCodedLookupEditorOptions);
        protected getSelect2Options(): Select2Options;
    }
    interface HardCodedLookupEditorOptions {
        sourceArray: string[];
        sourceCSV: string;
        allowOtherValue: boolean;
    }
}
declare namespace _Ext {
    class HtmlTemplateEditor extends Serenity.HtmlContentEditor {
        constructor(textArea: JQuery, opt?: HtmlTemplateEditorOptions);
        protected getConfig(): Serenity.CKEditorConfig;
    }
    interface HtmlTemplateEditorOptions extends Serenity.HtmlContentEditorOptions {
        cols?: any;
        rows?: any;
        placeholders?: any;
    }
}
declare namespace _Ext {
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private _value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent;
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
        value: string;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace _Ext {
    /**
     * Our select editor with hardcoded values.
     *
     * When you define a new editor type, make sure you build
     * and transform templates for it to be available
     * in server side forms, e.g. [HardCodedValuesEditor]
     */
    class UndangTidakUndangEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace _Ext {
    /**
     * Our select editor with hardcoded values.
     *
     * When you define a new editor type, make sure you build
     * and transform templates for it to be available
     * in server side forms, e.g. [HardCodedValuesEditor]
     */
    class YaTidakEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace _Ext {
    class CardViewMixin<TItem> {
        private options;
        private dataGrid;
        private getId;
        private vm;
        private cardContainer;
        viewType: ('list' | 'card');
        constructor(options: CardViewMixinOptions<TItem>);
        switchView(viewType: ('grid' | 'card')): void;
        updateCardItems(): void;
        resizeCardView(): void;
    }
    interface CardViewMixinOptions<TItem> {
        grid: Serenity.DataGrid<TItem, any>;
        containerTemplate?: string;
        itemTemplate?: string;
        methods?: any;
        itemCssClass?: string;
        defaultViewType?: ('list' | 'card');
        itemsCssStyle?: string;
        itemCssStyle?: string;
    }
}
declare namespace _Ext {
    /**
     * A mixin that can be applied to a DataGrid for excel style filtering functionality
     */
    class HeaderFiltersMixin<TItem> {
        private options;
        private dataGrid;
        constructor(options: HeaderFiltersMixinOptions<TItem>);
    }
    interface HeaderFiltersMixinOptions<TItem> {
        grid: Serenity.DataGrid<TItem, any>;
    }
}
declare namespace _Ext {
    /**
     * A mixin that can be applied to a DataGrid for tree functionality
     */
    class TreeGridMixin<TItem> {
        private options;
        private dataGrid;
        private getId;
        constructor(options: TreeGridMixinOptions<TItem>);
        /**
         * Expands / collapses all rows in a grid automatically
         */
        toggleAll(): void;
        expandAll(): void;
        collapsedAll(): void;
        /**
         * Reorders a set of items so that parents comes before their children.
         * This method is required for proper tree ordering, as it is not so easy to perform with SQL.
         * @param items list of items to be ordered
         * @param getId a delegate to get ID of a record (must return same ID with grid identity field)
         * @param getParentId a delegate to get parent ID of a record
         */
        static applyTreeOrdering<TItem>(items: TItem[], getId: (item: TItem) => any, getParentId: (item: TItem) => any): TItem[];
        static filterById<TItem>(item: TItem, view: Slick.RemoteView<TItem>, idProperty: any, getParentId: (x: TItem) => any): boolean;
        static treeToggle<TItem>(getView: () => Slick.RemoteView<TItem>, getId: (x: TItem) => any, formatter: Slick.Format): Slick.Format;
        static toggleClick<TItem>(e: JQueryEventObject, row: number, cell: number, view: Slick.RemoteView<TItem>, getId: (x: TItem) => any): void;
    }
    interface TreeGridMixinOptions<TItem> {
        grid: Serenity.DataGrid<TItem, any>;
        idField?: string;
        getParentId: (item: TItem) => any;
        toggleField: string;
        initialCollapse?: () => boolean;
    }
}
declare namespace _Ext {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace _Ext {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare namespace Slick {
    interface RemoteView<TEntity> {
        getGroups(): Slick.Group<TEntity>[];
        getGrouping(): Slick.GroupInfo<TEntity>[];
    }
}
declare namespace _Ext {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare namespace _Ext.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare function loadScriptAsync(url: any, callback: any): void;
declare function loadScript(url: any): void;
declare function usingVuejs(): void;
declare function includeBootstrapColorPickerCss(): void;
declare function usingBootstrapColorPicker(): void;
declare function includeJqueryUITimepickerAddonCss(): void;
declare function usingJqueryUITimepickerAddon(): void;
declare function usingBabylonjs(): void;
declare function usingChartjs(): void;
declare function includeCustomMarkerCss(): void;
declare function usingCustomMarker(): void;
declare function includeGoogleMap(callback?: Function, callbackFullName?: string): void;
declare function includeMarkerWithLabel(): void;
declare function includeVisCss(): void;
declare function usingVisjs(): void;
declare function usingJsonDiffPatch(): void;
declare function usingSlickGridEditors(): void;
declare function usingSlickAutoColumnSize(): void;
declare function usingSlickHeaderFilters(): void;
declare function usingJsRender(): void;
declare namespace q {
    function groupBy(xs: any[], key: any): any;
    function sortBy<T>(xs: T[], key: any): T[];
    function sortByDesc<T>(xs: T[], key: any): T[];
}
declare namespace q {
    function nextTick(date: any): Date;
    function addMinutes(date: Date, minutes: number): Date;
    function addHours(date: Date, hours: number): Date;
    function getHours(fromDate: Date, toDate: Date): number;
    function getDays24HourPulse(fromDate: Date, toDate: Date): number;
    function getDays(pFromDate: Date, pToDate: Date): number;
    function getMonths(fromDate: Date, toDate: Date): number;
    function getCalenderMonths(fromDate: Date, toDate: Date): number;
    function getCalenderMonthsCeil(fromDate: Date, toDate: Date): number;
    function addDays(date: Date, days: number): Date;
    function addMonths(date: Date, months: number): Date;
    function addYear(date: Date, years: number): Date;
    function getPeriods(fromDate: Date, toDate: Date, periodUnit: _Ext.TimeUoM): number;
    function addPeriod(date: Date, period: number, periodUnit: _Ext.TimeUoM): Date;
    function formatISODate(date: Date): string;
    function bindDateTimeEditorChange(editor: any, handler: any): void;
    function initDateRangeEditor(fromDateEditor: Serenity.DateEditor, toDateEditor: Serenity.DateEditor, onChangeHandler?: (e: JQueryEventObject) => void): void;
    function initDateTimeRangeEditor(fromDateTimeEditor: _Ext.DateTimePickerEditor, toDateTimeEditor: _Ext.DateTimePickerEditor, onChangeHandler?: (e: JQueryEventObject) => void): void;
    function formatDate(d: Date | string, format?: string): string;
}
declare namespace q {
    function initDetailEditor(dialog: _Ext.DialogBase<any, any>, editor: _Ext.GridEditorBase<any>, options?: ExtGridEditorOptions): void;
    function setGridEditorHeight(editor: JQuery, heightInPx: number): void;
    function addNotificationIcon(editor: Serenity.StringEditor, isSuccess: boolean): void;
    function setEditorLabel(editor: Serenity.Widget<any>, value: string): void;
    function hideEditorLabel(editor: Serenity.Widget<any>): void;
    function setEditorCategoryLabel(editor: Serenity.Widget<any>, value: string): void;
    function hideEditorCategory(editor: Serenity.Widget<any>, value?: boolean): void;
    function hideCategories(containerElement: JQuery, value?: boolean): void;
    function hideFields(containerElement: JQuery, value?: boolean): void;
    function hideFieldsAndCategories(containerElement: JQuery, value?: boolean): void;
    function hideField(editor: Serenity.Widget<any>, value?: boolean): void;
    function showField(editor: Serenity.Widget<any>, value?: boolean): void;
    function showFieldAndCategory(editor: Serenity.Widget<any>, value?: boolean): void;
    function hideEditorTab(editor: Serenity.Widget<any>, value?: boolean): void;
    function readOnlyEditorTab(editor: Serenity.Widget<any>, value?: boolean): void;
    function readOnlyEditorCategory(editor: Serenity.Widget<any>, value?: boolean): void;
    function readonlyEditorCategory($editor: JQuery, value?: boolean): void;
    function readOnlyEditor(editor: Serenity.Widget<any>, value?: boolean): void;
    function readonlyEditor($editor: JQuery, value?: boolean): void;
    function moveEditorFromTab(editor: Serenity.Widget<any>, toElement: JQuery, isPrepend?: boolean): void;
    function moveEditorCategoryFromTab(editor: Serenity.Widget<any>, toElement: JQuery, isPrepend?: boolean): void;
    function selectEditorTab(editor: Serenity.Widget<any>): void;
    function getSelectedRow<TRow>(e: JQueryEventObject): TRow;
}
declare namespace q {
    function getEnumText(enumKey: any, value: any): string;
    function getEnumValues(enumType: any): string[];
    function getEnumKeys(enumType: any): string[];
}
declare namespace q {
    function isCosmicThemeApplied(): boolean;
    function getSelectedLanguage(): string;
    function formatDecimal(value: any): string;
    function formatInt(value: any): string;
    function ToNumber(value: any): any;
    function ToBool(value: any): boolean;
    function getRandomColor(hexLetters: any): string;
}
declare var isPageRefreshRequired: boolean;
declare namespace q {
    var queryString: {};
    var jsPDFHeaderImageData: string;
    var jsPDFHeaderTitle: string;
    var useSerenityInlineEditors: boolean;
    var DefaultMainGridOptions: ExtGridOptions;
    var DefaultEditorGridOptions: ExtGridOptions;
    var DefaultEntityDialogOptions: ExtDialogOptions;
    var DefaultEditorDialogOptions: ExtDialogOptions;
    var fiscalYearMonths: number[];
}
declare namespace SCMONLINE.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare var Morris: any;
declare namespace SCMONLINE.BasicSamples {
    class ChartInDialog extends Serenity.TemplatedDialog<any> {
        private areaChart;
        static initializePage(): void;
        protected onDialogOpen(): void;
        protected arrange(): void;
        protected getTemplate(): string;
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace SCMONLINE.BasicSamples {
    class CloneableEntityDialog extends Northwind.ProductDialog {
        protected updateInterface(): void;
        /**
         * Overriding this method is optional to customize cloned entity
         */
        protected getCloningEntity(): Northwind.ProductRow;
    }
}
declare namespace SCMONLINE.BasicSamples {
    /**
     * Subclass of ProductGrid to override dialog type to CloneableEntityDialog
     */
    class CloneableEntityGrid extends Northwind.ProductGrid {
        protected getDialogType(): typeof CloneableEntityDialog;
        constructor(container: JQuery);
    }
}
declare namespace SCMONLINE.BasicSamples {
    class DefaultValuesInNewGrid extends Northwind.OrderGrid {
        constructor(container: JQuery);
        /**
         * This method is called when New Item button is clicked.
         * By default, it calls EditItem with an empty entity.
         * This is a good place to fill in default values for New Item button.
         */
        protected addButtonClick(): void;
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SCMONLINE.BasicSamples.DialogBoxes {
    function initializePage(): void;
}
declare namespace SCMONLINE.BasicSamples {
    /**
     * A version of order dialog converted to a panel by adding Serenity.Decorators.panel decorator.
     */
    class EntityDialogAsPanel extends Northwind.OrderDialog {
        constructor();
        protected updateInterface(): void;
        protected onSaveSuccess(response: any): void;
    }
}
declare namespace SCMONLINE.BasicSamples {
    class GetInsertedRecordIdDialog extends Northwind.CategoryDialog {
        /**
         * This method is called after the save request to service
         * is completed succesfully. This can be an insert or update.
         *
         * @param response Response that is returned from server
         */
        protected onSaveSuccess(response: Serenity.SaveResponse): void;
    }
}
declare namespace SCMONLINE.BasicSamples {
    /**
     * Subclass of CategoryGrid to override dialog type to GetInsertedRecordIdDialog
     */
    class GetInsertedRecordIdGrid extends Northwind.CategoryGrid {
        protected getDialogType(): typeof GetInsertedRecordIdDialog;
        constructor(container: JQuery);
    }
}
declare namespace SCMONLINE.BasicSamples {
    /**
     * Our custom order dialog subclass that will have a tab to display and edit selected customer details.
     */
    class OtherFormInTabDialog extends Northwind.OrderDialog {
        private customerPropertyGrid;
        private customerForm;
        private customerValidator;
        constructor();
        getCustomerID(): number;
        loadEntity(entity: Northwind.OrderRow): void;
    }
}
declare namespace SCMONLINE.BasicSamples {
    /**
     * Subclass of OrderGrid to override dialog type to OtherFormInTabDialog
     */
    class OtherFormInTabGrid extends Northwind.OrderGrid {
        protected getDialogType(): typeof OtherFormInTabDialog;
        constructor(container: JQuery);
    }
}
declare namespace SCMONLINE.BasicSamples {
    /**
     * Our custom order dialog subclass that will have a tab to display and edit selected customer details.
     * With single toolbar for all forms
     */
    class OtherFormOneBarDialog extends Northwind.OrderDialog {
        private customerPropertyGrid;
        private customerForm;
        private customerValidator;
        private selfChange;
        constructor();
        getCustomerID(): number;
        loadEntity(entity: Northwind.OrderRow): void;
        protected saveCustomer(callback: (response: Serenity.SaveResponse) => void, onSuccess?: (response: Serenity.SaveResponse) => void): boolean;
        protected saveOrder(callback: (response: Serenity.SaveResponse) => void): void;
        protected saveAll(callback: (response: Serenity.SaveResponse) => void): void;
        protected save(callback: (response: Serenity.SaveResponse) => void): void;
    }
}
declare namespace SCMONLINE.BasicSamples {
    /**
     * Subclass of OrderGrid to override dialog type to OtherFormInTabOneBarDialog
     */
    class OtherFormInTabOneBarGrid extends Northwind.OrderGrid {
        protected getDialogType(): typeof OtherFormOneBarDialog;
        constructor(container: JQuery);
    }
}
declare namespace SCMONLINE.BasicSamples {
    class PopulateLinkedDataDialog extends Serenity.EntityDialog<Northwind.OrderRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PopulateLinkedDataForm;
        constructor();
        private setCustomerDetails;
        /**
         * This dialog will have CSS class "s-PopulateLinkedDataDialog"
         * We are changing it here to "s-OrderDialog", to make it use default OrderDialog styles
         * This has no effect other than looks on populate linked data demonstration
         */
        protected getCssClass(): string;
    }
}
declare namespace SCMONLINE.BasicSamples {
    /**
     * A subclass of OrderGrid that launches PopulateLinkedDataDialog
     */
    class PopulateLinkedDataGrid extends Northwind.OrderGrid {
        protected getDialogType(): typeof PopulateLinkedDataDialog;
        constructor(container: JQuery);
    }
}
declare namespace SCMONLINE.BasicSamples {
    class ReadOnlyDialog extends Northwind.SupplierDialog {
        /**
         * This is the method that gets list of tool
         * buttons to be created in a dialog.
         *
         * Here we'll remove save and close button, and
         * apply changes buttons.
         */
        protected getToolbarButtons(): Serenity.ToolButton[];
        /**
         * This method is a good place to update states of
         * interface elements. It is called after dialog
         * is initialized and an entity is loaded into dialog.
         * This is also called in new item mode.
         */
        protected updateInterface(): void;
        /**
         * This method is called when dialog title needs to be updated.
         * Base class returns something like 'Edit xyz' for edit mode,
         * and 'New xyz' for new record mode.
         *
         * But our dialog is readonly, so we should change it to 'View xyz'
         */
        protected getEntityTitle(): string;
        /**
         * This method is actually the one that calls getEntityTitle()
         * and updates the dialog title. We could do it here too...
         */
        protected updateTitle(): void;
    }
}
declare namespace SCMONLINE.BasicSamples {
    /**
     * A readonly grid that launches ReadOnlyDialog
     */
    class ReadOnlyGrid extends Northwind.SupplierGrid {
        protected getDialogType(): typeof ReadOnlyDialog;
        constructor(container: JQuery);
        /**
         * Removing add button from grid using its css class
         */
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SCMONLINE.BasicSamples {
    class SerialAutoNumberDialog extends Northwind.CustomerDialog {
        constructor();
        protected afterLoadEntity(): void;
        private getNextNumber;
    }
}
declare namespace SCMONLINE.BasicSamples {
    /**
     * Subclass of CustomerGrid to override dialog type to SerialAutoNumberDialog
     */
    class SerialAutoNumberGrid extends Northwind.CustomerGrid {
        protected getDialogType(): typeof SerialAutoNumberDialog;
        constructor(container: JQuery);
    }
}
declare namespace SCMONLINE.BasicSamples {
    class ChangingLookupTextDialog extends Common.GridEditorDialog<Northwind.OrderDetailRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: ChangingLookupTextForm;
        constructor();
        protected updateInterface(): void;
    }
}
declare namespace SCMONLINE.BasicSamples {
    /**
     * Our custom product editor type
     */
    class ChangingLookupTextEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, Northwind.ProductRow> {
        constructor(container: JQuery, options: Serenity.LookupEditorOptions);
        protected getLookupKey(): string;
        protected getItems: any;
        protected getItemText(item: Northwind.ProductRow, lookup: Q.Lookup<Northwind.ProductRow>): string;
    }
}
declare namespace SCMONLINE.BasicSamples {
    /**
     * Our subclass of order detail dialog with a CategoryID property
     * that will be used to set CascadeValue of product editor
     */
    class FilteredLookupOrderDetailDialog extends Northwind.OrderDetailDialog {
        constructor();
        /**
         * This method is called just before an entity is loaded to dialog
         * This is also called for new record mode with an empty entity
         */
        protected beforeLoadEntity(entity: any): void;
        categoryID: number;
    }
}
declare namespace SCMONLINE.BasicSamples {
    /**
     * Our subclass of Order Details editor with a CategoryID property
     */
    class FilteredLookupDetailEditor extends Northwind.OrderDetailsEditor {
        protected getDialogType(): typeof FilteredLookupOrderDetailDialog;
        constructor(container: JQuery);
        categoryID: number;
        /**
         * This method is called to initialize an edit dialog created by
         * grid editor when Add button or an edit link is clicked
         * We have an opportunity here to pass CategoryID to edit dialog
         */
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>): void;
    }
}
declare namespace SCMONLINE.BasicSamples {
    /**
     * Basic order dialog with a category selection
     */
    class FilteredLookupInDetailDialog extends Serenity.EntityDialog<Northwind.OrderRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        private form;
        constructor();
    }
}
declare namespace SCMONLINE.BasicSamples {
    /**
     * Subclass of OrderGrid to override dialog type to FilteredLookupInDetailDialog
     */
    class FilteredLookupInDetailGrid extends Northwind.OrderGrid {
        protected getDialogType(): typeof FilteredLookupInDetailDialog;
        constructor(container: JQuery);
    }
}
declare namespace SCMONLINE.BasicSamples {
    /**
     * This is our custom product dialog that uses a different product form
     * (LookupFilterByMultipleForm) with our special category editor.
     */
    class LookupFilterByMultipleDialog extends Northwind.ProductDialog {
        protected getFormKey(): string;
    }
}
declare namespace SCMONLINE.BasicSamples {
    /**
     * Subclass of ProductGrid to override dialog type to CloneableEntityDialog
     */
    class LookupFilterByMultipleGrid extends Northwind.ProductGrid {
        protected getDialogType(): typeof LookupFilterByMultipleDialog;
        constructor(container: JQuery);
        /**
         * This method is called just before List request is sent to service.
         * You have an opportunity here to cancel request or modify it.
         * Here we'll add a custom criteria to list request.
         */
        protected onViewSubmit(): boolean;
    }
}
declare namespace SCMONLINE.BasicSamples {
    /**
     * This is our category editor that will show only categories of Produce and
     * Seafood. We are subclassing LookupEditorBase which also LookupEditor
     * derives from.
     *
     * After compiling and transforming templates, this editor type will be
     * available in server side to use in our LookupFilterByMultipleForm,
     * which is a version of ProductForm that uses our custom editor.
     */
    class ProduceSeafoodCategoryEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, Northwind.CategoryRow> {
        constructor(container: JQuery, opt: Serenity.LookupEditorOptions);
        /**
         * Normally LookupEditor requires a lookup key to determine which set of
         * lookup data to show in editor. As our editor will only show category
         * data, we lock it to category lookup key.
         */
        protected getLookupKey(): string;
        /**
         * Here we are filtering by category name but you could filter by any field.
         * Just make sure the fields you filter on has [LookupInclude] attribute on them,
         * otherwise their value will be null in client side as they are not sent back
         * from server in lookup script.
         */
        protected getItems(lookup: Q.Lookup<Northwind.CategoryRow>): Northwind.CategoryRow[];
    }
}
declare namespace SCMONLINE.BasicSamples {
    class HardcodedValuesDialog extends Serenity.PropertyDialog<any, any> {
        protected getFormKey(): string;
        protected form: HardcodedValuesForm;
        constructor();
    }
}
declare namespace SCMONLINE.BasicSamples {
    /**
     * Our select editor with hardcoded values.
     *
     * When you define a new editor type, make sure you build
     * and transform templates for it to be available
     * in server side forms, e.g. [HardCodedValuesEditor]
     */
    class HardcodedValuesEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace SCMONLINE.BasicSamples {
    class StaticTextBlockDialog extends Serenity.PropertyDialog<any, any> {
        protected getFormKey(): string;
        protected form: StaticTextBlockForm;
        constructor();
        /**
         * Here we override loadInitialEntity method to set value for "DisplayFieldValue" field.
         * If this was an EntityDialog, your field value would be originating from server side entity.
         */
        protected loadInitialEntity(): void;
        protected getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace SCMONLINE.BasicSamples {
    class OrderBulkAction extends Common.BulkServiceAction {
        /**
         * This controls how many service requests will be used in parallel.
         * Determine this number based on how many requests your server
         * might be able to handle, and amount of wait on external resources.
         */
        protected getParallelRequests(): number;
        /**
         * These number of records IDs will be sent to your service in one
         * service call. If your service is designed to handle one record only,
         * set it to 1. But note that, if you have 5000 records, this will
         * result in 5000 service calls / requests.
         */
        protected getBatchSize(): number;
        /**
         * This is where you should call your service.
         * Batch parameter contains the selected order IDs
         * that should be processed in this service call.
         */
        protected executeForBatch(batch: any): void;
    }
}
declare namespace SCMONLINE.BasicSamples {
    class CancellableBulkActionGrid extends Northwind.OrderGrid {
        private rowSelection;
        constructor(container: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
        protected getColumns(): Slick.Column[];
        protected getViewOptions(): Slick.RemoteViewOptions;
    }
}
declare namespace SCMONLINE.BasicSamples {
    class ConditionalFormattingGrid extends Serenity.EntityGrid<Northwind.ProductRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        /**
         * We override getColumns() to be able to add a custom CSS class to UnitPrice
         * We could also add this class in ProductColumns.cs but didn't want to modify
         * it solely for this sample.
         */
        protected getColumns(): Slick.Column[];
        /**
         * This method is called for all rows
         * @param item Data item for current row
         * @param index Index of the row in grid
         */
        protected getItemCssClass(item: Northwind.ProductRow, index: number): string;
    }
}
declare namespace SCMONLINE.BasicSamples {
    class CustomLinksInGrid extends Northwind.OrderGrid {
        constructor(container: JQuery);
        /**
         * We override getColumns() to change format functions for some columns.
         * You could also write them as formatter classes, and use them at server side
         */
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        /**
         * This method is called for columns with [EditLink] attribute,
         * but only for edit links of this grid's own item type.
         * It is also called by Add Product button with a NULL entityOrId
         * parameter so we should check that entityOrId is a string
         * to be sure it is originating from a link.
         *
         * As we changed format for other columns, this will only be called
         * for links in remaining OrderID column
         */
        protected editItem(entityOrId: any): void;
    }
}
declare namespace SCMONLINE.BasicSamples {
    class DragDropSampleDialog extends Serenity.EntityDialog<DragDropSampleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: DragDropSampleForm;
    }
}
declare namespace SCMONLINE.BasicSamples {
    class DragDropSampleGrid extends Serenity.EntityGrid<DragDropSampleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DragDropSampleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private dragging;
        constructor(container: JQuery);
        /**
         * This method will determine if item can be moved under a given target
         * An item can't be moved under itself, under one of its children
         */
        private canMoveUnder;
        /**
         * Gets children list of an item
         */
        private getChildren;
        /**
         * Gets all parents of an item
         */
        private getParents;
        protected getButtons(): any[];
        protected usePager(): boolean;
    }
}
declare namespace SCMONLINE {
    class SelectableEntityGrid<TItem, TOptions> extends Serenity.EntityGrid<TItem, TOptions> {
        protected getSlickOptions(): Slick.GridOptions;
        protected createSlickGrid(): Slick.Grid;
    }
}
declare namespace SCMONLINE.BasicSamples {
    class RowSelectionGrid extends SelectableEntityGrid<Northwind.SupplierRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace SCMONLINE.BasicSamples {
    class GridFilteredByCriteria extends Northwind.ProductGrid {
        constructor(container: JQuery);
        protected onViewSubmit(): boolean;
    }
}
declare namespace SCMONLINE.BasicSamples {
    class GroupingAndSummariesInGrid extends Northwind.ProductGrid {
        constructor(container: JQuery);
        protected createSlickGrid(): Slick.Grid;
        protected getColumns(): Slick.Column[];
        protected getSlickOptions(): Slick.GridOptions;
        protected usePager(): boolean;
        protected getButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
}
declare namespace SCMONLINE.BasicSamples {
    class InitialValuesForQuickFilters extends Northwind.OrderGrid {
        constructor(container: JQuery);
        /**
         * This method is called to get list of quick filters to be created for this grid.
         * By default, it returns quick filter objects corresponding to properties that
         * have a [QuickFilter] attribute at server side OrderColumns.cs
         */
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
        /**
         * This method is another possible place to modify quick filter widgets.
         * It is where the quick filter widgets are actually created.
         *
         * By default, it calls getQuickFilters() then renders UI for these
         * quick filters.
         *
         * We could use getQuickFilters() method for ShipVia too,
         * but this is for demonstration purposes
         */
        protected createQuickFilters(): void;
    }
}
declare namespace SCMONLINE.BasicSamples {
    class InlineActionGrid extends Northwind.CustomerGrid {
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace SCMONLINE.BasicSamples {
    class InlineImageFormatter implements Slick.Formatter, Serenity.IInitializeColumn {
        format(ctx: Slick.FormatterContext): string;
        initializeColumn(column: Slick.Column): void;
        fileProperty: string;
        thumb: boolean;
    }
}
declare namespace SCMONLINE.BasicSamples {
    class InlineImageInGrid extends Serenity.EntityGrid<Northwind.ProductRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getSlickOptions(): Slick.GridOptions;
    }
}
declare namespace SCMONLINE.BasicSamples {
    class ProductExcelImportDialog extends Serenity.PropertyDialog<any, any> {
        private form;
        constructor();
        protected getDialogTitle(): string;
        protected getDialogButtons(): Serenity.DialogButton[];
    }
}
declare namespace SCMONLINE.BasicSamples {
    class ProductExcelImportGrid extends Northwind.ProductGrid {
        constructor(container: JQuery);
        /**
         * This method is called to get list of buttons to be created.
         */
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SCMONLINE.BasicSamples {
    class QuickFilterCustomization extends Serenity.EntityGrid<Northwind.OrderRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof Northwind.OrderDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        /**
         * This method is called to get list of quick filters to be created for this grid.
         * By default, it returns quick filter objects corresponding to properties that
         * have a [QuickFilter] attribute at server side OrderColumns.cs
         */
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
    }
}
declare namespace SCMONLINE.BasicSamples {
    class RemovingAddButton extends Northwind.SupplierGrid {
        constructor(container: JQuery);
        /**
         * This method is called to get list of buttons to be created.
         */
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace SCMONLINE.BasicSamples {
    class CustomerGrossSalesGrid extends Serenity.EntityGrid<Northwind.CustomerGrossSalesRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private nextId;
        constructor(container: JQuery);
        /**
         * This method is called to preprocess data returned from the list service
         */
        protected onViewProcessData(response: Serenity.ListResponse<Northwind.SalesByCategoryRow>): Serenity.ListResponse<Northwind.SalesByCategoryRow>;
        protected getButtons(): any[];
        protected createSlickGrid(): Slick.Grid;
        protected getSlickOptions(): Slick.GridOptions;
        protected usePager(): boolean;
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
    }
}
declare namespace SCMONLINE.BasicSamples {
    class TreeGrid extends Northwind.OrderGrid {
        private treeMixin;
        constructor(container: JQuery);
        protected usePager(): boolean;
    }
}
declare namespace SCMONLINE.BasicSamples {
    class ViewWithoutIDGrid extends Serenity.EntityGrid<Northwind.SalesByCategoryRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private nextId;
        constructor(container: JQuery);
        /**
         * This method is called to preprocess data returned from the list service
         */
        protected onViewProcessData(response: Serenity.ListResponse<Northwind.SalesByCategoryRow>): Serenity.ListResponse<Northwind.SalesByCategoryRow>;
        protected getButtons(): any[];
    }
}
declare namespace SCMONLINE.BasicSamples {
    class VSGalleryQAGrid extends Serenity.EntityGrid<BasicSamples.VSGalleryQAThread, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): any[];
        protected getSlickOptions(): Slick.GridOptions;
        protected getColumns(): Slick.Column[];
        protected getInitialTitle(): any;
    }
}
declare namespace SCMONLINE.BasicSamples {
    class WrappedHeadersGrid extends Northwind.OrderGrid {
        constructor(container: JQuery);
    }
}
declare namespace SCMONLINE.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace SCMONLINE.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace SCMONLINE.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace SCMONLINE.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace _Ext {
    class ReplaceRowDialog extends _Ext.DialogBase<any, any> {
        request: ReplaceRowRequest;
        entityList: Array<any>;
        protected getFormKey(): string;
        protected form: ReplaceRowForm;
        constructor(request: ReplaceRowRequest, entityList: Array<any>);
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare var Vue: any;
declare namespace _Ext.DevTools {
    class SergenPanel extends Serenity.Widget<any> {
        constructor(container: JQuery);
    }
}
declare namespace _Ext {
    class GridItemPickerDialog extends Serenity.TemplatedDialog<GridItemPickerEditorOptions> {
        getTemplate(): string;
        checkGrid: GridBase<any, GridItemPickerEditorOptions>;
        readonly selectedItems: any[];
        constructor(options: GridItemPickerEditorOptions);
        onSuccess: (selectedItems: any) => void;
        getDialogOptions(): JQueryUI.DialogOptions;
    }
}
declare namespace _Ext {
    class GridItemPickerEditor extends Serenity.TemplatedWidget<GridItemPickerEditorOptions> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getTemplate(): string;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        constructor(container: JQuery, options: GridItemPickerEditorOptions);
        protected: any;
        value: string;
        text: string;
    }
    interface GridItemPickerEditorOptions {
        gridType: any;
        nameFieldInThisRow?: string;
        rowType?: string;
        nameFieldInGridRow?: string;
        multiple: boolean;
        preSelectedKeys?: any[];
    }
}
