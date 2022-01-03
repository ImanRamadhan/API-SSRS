namespace SCMONLINE.Procurement {
    export interface BuyerLookupViewRow {
        UserId?: number;
        Name?: string;
        ActivePr?: number;
    }

    export namespace BuyerLookupViewRow {
        export const idProperty = 'UserId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Procurement.BuyerLookupView';
        export const lookupKey = 'Procurement.BuyerLookupView';

        export function getLookup(): Q.Lookup<BuyerLookupViewRow> {
            return Q.getLookup<BuyerLookupViewRow>('Procurement.BuyerLookupView');
        }

        export declare const enum Fields {
            UserId = "UserId",
            Name = "Name",
            ActivePr = "ActivePr"
        }
    }
}

