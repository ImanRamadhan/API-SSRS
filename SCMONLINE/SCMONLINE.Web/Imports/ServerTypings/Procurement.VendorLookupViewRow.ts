namespace SCMONLINE.Procurement {
    export interface VendorLookupViewRow {
        VendorId?: string;
        Name?: string;
    }

    export namespace VendorLookupViewRow {
        export const idProperty = 'VendorId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Procurement.VendorLookupView';
        export const lookupKey = 'Procurement.VendorLookupView';

        export function getLookup(): Q.Lookup<VendorLookupViewRow> {
            return Q.getLookup<VendorLookupViewRow>('Procurement.VendorLookupView');
        }

        export declare const enum Fields {
            VendorId = "VendorId",
            Name = "Name"
        }
    }
}

