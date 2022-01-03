namespace SCMONLINE.Procurement {
    export interface ProcStatusRow {
        ProcStatusId?: string;
        Name?: string;
        Description?: string;
    }

    export namespace ProcStatusRow {
        export const idProperty = 'ProcStatusId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Procurement.ProcStatus';
        export const lookupKey = 'Procurement.ProcStatus';

        export function getLookup(): Q.Lookup<ProcStatusRow> {
            return Q.getLookup<ProcStatusRow>('Procurement.ProcStatus');
        }

        export declare const enum Fields {
            ProcStatusId = "ProcStatusId",
            Name = "Name",
            Description = "Description"
        }
    }
}

