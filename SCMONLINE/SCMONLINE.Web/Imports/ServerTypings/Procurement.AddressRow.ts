namespace SCMONLINE.Procurement {
    export interface AddressRow {
        AddressId?: number;
        Name?: string;
        Description?: string;
        AddressTypeId?: number;
        AddressTypeName?: string;
        AddressTypeDescription?: string;
    }

    export namespace AddressRow {
        export const idProperty = 'AddressId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Procurement.Address';
        export const lookupKey = 'Procurement.Address';

        export function getLookup(): Q.Lookup<AddressRow> {
            return Q.getLookup<AddressRow>('Procurement.Address');
        }

        export declare const enum Fields {
            AddressId = "AddressId",
            Name = "Name",
            Description = "Description",
            AddressTypeId = "AddressTypeId",
            AddressTypeName = "AddressTypeName",
            AddressTypeDescription = "AddressTypeDescription"
        }
    }
}

