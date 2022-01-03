namespace SCMONLINE.Procurement {
    export interface PurchDocTextRefRow {
        TextId?: string;
        Meaning?: string;
    }

    export namespace PurchDocTextRefRow {
        export const idProperty = 'TextId';
        export const nameProperty = 'Meaning';
        export const localTextPrefix = 'Procurement.PurchDocTextRef';
        export const lookupKey = 'Procurement.PurchDocTextRef';

        export function getLookup(): Q.Lookup<PurchDocTextRefRow> {
            return Q.getLookup<PurchDocTextRefRow>('Procurement.PurchDocTextRef');
        }

        export declare const enum Fields {
            TextId = "TextId",
            Meaning = "Meaning"
        }
    }
}

