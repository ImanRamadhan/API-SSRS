namespace SCMONLINE.Procurement {
    export interface ProcValueRangeRow {
        ProcValueRangeId?: number;
        Name?: string;
        Description?: string;
    }

    export namespace ProcValueRangeRow {
        export const idProperty = 'ProcValueRangeId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Procurement.ProcValueRange';
        export const lookupKey = 'Procurement.ProcValueRange';

        export function getLookup(): Q.Lookup<ProcValueRangeRow> {
            return Q.getLookup<ProcValueRangeRow>('Procurement.ProcValueRange');
        }

        export declare const enum Fields {
            ProcValueRangeId = "ProcValueRangeId",
            Name = "Name",
            Description = "Description"
        }
    }
}

