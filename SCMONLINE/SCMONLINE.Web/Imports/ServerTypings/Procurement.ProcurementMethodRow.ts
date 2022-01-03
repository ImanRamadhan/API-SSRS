namespace SCMONLINE.Procurement {
    export interface ProcurementMethodRow {
        ProcurementMethodId?: string;
        Name?: string;
        Description?: string;
    }

    export namespace ProcurementMethodRow {
        export const idProperty = 'ProcurementMethodId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Procurement.ProcurementMethod';
        export const lookupKey = 'Procurement.ProcurementMethod';

        export function getLookup(): Q.Lookup<ProcurementMethodRow> {
            return Q.getLookup<ProcurementMethodRow>('Procurement.ProcurementMethod');
        }

        export declare const enum Fields {
            ProcurementMethodId = "ProcurementMethodId",
            Name = "Name",
            Description = "Description"
        }
    }
}

