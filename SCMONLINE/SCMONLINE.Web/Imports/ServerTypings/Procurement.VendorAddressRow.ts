namespace SCMONLINE.Procurement {
    export interface VendorAddressRow {
        VendorAddressId?: number;
        VendorId?: string;
        AddressId?: number;
        AddressName?: string;
        AddressDescription?: string;
        AddressAddressTypeId?: number;
    }

    export namespace VendorAddressRow {
        export const idProperty = 'VendorAddressId';
        export const nameProperty = 'AddressName';
        export const localTextPrefix = 'Procurement.VendorAddress';

        export declare const enum Fields {
            VendorAddressId = "VendorAddressId",
            VendorId = "VendorId",
            AddressId = "AddressId",
            AddressName = "AddressName",
            AddressDescription = "AddressDescription",
            AddressAddressTypeId = "AddressAddressTypeId"
        }
    }
}

