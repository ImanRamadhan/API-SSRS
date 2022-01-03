namespace SCMONLINE.Procurement {
    export interface AddressTypeRow {
        AddressTypeId?: number;
        Name?: string;
        Description?: string;
    }

    export namespace AddressTypeRow {
        export const idProperty = 'AddressTypeId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Procurement.AddressType';
        export const lookupKey = 'Procurement.AddressType';

        export function getLookup(): Q.Lookup<AddressTypeRow> {
            return Q.getLookup<AddressTypeRow>('Procurement.AddressType');
        }

        export declare const enum Fields {
            AddressTypeId = "AddressTypeId",
            Name = "Name",
            Description = "Description"
        }
    }
}

