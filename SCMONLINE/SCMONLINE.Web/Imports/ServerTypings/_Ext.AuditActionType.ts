namespace _Ext {
    export enum AuditActionType {
        Insert = 1,
        Update = 2,
        Delete = 3,
        Login = 4
    }
    Serenity.Decorators.registerEnumType(AuditActionType, '_Ext.AuditActionType', 'Enum.Audit.AuditActionType');
}

