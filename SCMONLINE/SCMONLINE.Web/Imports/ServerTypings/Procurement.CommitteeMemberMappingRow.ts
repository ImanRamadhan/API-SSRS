namespace SCMONLINE.Procurement {
    export interface CommitteeMemberMappingRow {
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

    export namespace CommitteeMemberMappingRow {
        export const idProperty = 'CommitteeMemberMappingId';
        export const nameProperty = 'ProcurementTypeId';
        export const localTextPrefix = 'Procurement.CommitteeMemberMapping';
        export const lookupKey = 'Procurement.CommitteeMemberMapping';

        export function getLookup(): Q.Lookup<CommitteeMemberMappingRow> {
            return Q.getLookup<CommitteeMemberMappingRow>('Procurement.CommitteeMemberMapping');
        }

        export declare const enum Fields {
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

