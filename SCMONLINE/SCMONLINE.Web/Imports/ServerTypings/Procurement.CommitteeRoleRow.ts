namespace SCMONLINE.Procurement {
    export interface CommitteeRoleRow {
        CommitteeRoleId?: number;
        Name?: string;
        Description?: string;
        MandatoryRole?: boolean;
    }

    export namespace CommitteeRoleRow {
        export const idProperty = 'CommitteeRoleId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Procurement.CommitteeRole';
        export const lookupKey = 'Procurement.CommitteeRole';

        export function getLookup(): Q.Lookup<CommitteeRoleRow> {
            return Q.getLookup<CommitteeRoleRow>('Procurement.CommitteeRole');
        }

        export declare const enum Fields {
            CommitteeRoleId = "CommitteeRoleId",
            Name = "Name",
            Description = "Description",
            MandatoryRole = "MandatoryRole"
        }
    }
}

