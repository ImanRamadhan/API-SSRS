namespace SCMONLINE.Procurement {
    export interface ApprovalAuthorityRangeRow {
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

    export namespace ApprovalAuthorityRangeRow {
        export const idProperty = 'ApprovalAuthorityRangeId';
        export const nameProperty = 'ProcurementTypeId';
        export const localTextPrefix = 'Procurement.ApprovalAuthorityRange';

        export declare const enum Fields {
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

