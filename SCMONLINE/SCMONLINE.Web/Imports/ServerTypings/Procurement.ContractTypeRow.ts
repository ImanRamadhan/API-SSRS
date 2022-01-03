namespace SCMONLINE.Procurement {
    export interface ContractTypeRow {
        ContractTypeId?: number;
        Name?: string;
        Description?: string;
    }

    export namespace ContractTypeRow {
        export const idProperty = 'ContractTypeId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Procurement.ContractType';
        export const lookupKey = 'Procurement.ContractType';

        export function getLookup(): Q.Lookup<ContractTypeRow> {
            return Q.getLookup<ContractTypeRow>('Procurement.ContractType');
        }

        export declare const enum Fields {
            ContractTypeId = "ContractTypeId",
            Name = "Name",
            Description = "Description"
        }
    }
}

