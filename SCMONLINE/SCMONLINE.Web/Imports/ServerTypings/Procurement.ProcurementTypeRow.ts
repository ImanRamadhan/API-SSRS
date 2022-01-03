namespace SCMONLINE.Procurement {
    export interface ProcurementTypeRow {
        ProcurementTypeId?: string;
        Name?: string;
        Description?: string;
    }

    export namespace ProcurementTypeRow {
        export const idProperty = 'ProcurementTypeId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Procurement.ProcurementType';
        export const lookupKey = 'Procurement.ProcurementType';

        export function getLookup(): Q.Lookup<ProcurementTypeRow> {
            return Q.getLookup<ProcurementTypeRow>('Procurement.ProcurementType');
        }

        export declare const enum Fields {
            ProcurementTypeId = "ProcurementTypeId",
            Name = "Name",
            Description = "Description"
        }
    }
}

