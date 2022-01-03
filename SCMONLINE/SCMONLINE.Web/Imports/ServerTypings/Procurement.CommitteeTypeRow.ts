namespace SCMONLINE.Procurement {
    export interface CommitteeTypeRow {
        CommitteeTypeId?: number;
        Name?: string;
        Description?: string;
    }

    export namespace CommitteeTypeRow {
        export const idProperty = 'CommitteeTypeId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Procurement.CommitteeType';
        export const lookupKey = 'Procurement.CommitteeType';

        export function getLookup(): Q.Lookup<CommitteeTypeRow> {
            return Q.getLookup<CommitteeTypeRow>('Procurement.CommitteeType');
        }

        export declare const enum Fields {
            CommitteeTypeId = "CommitteeTypeId",
            Name = "Name",
            Description = "Description"
        }
    }
}

