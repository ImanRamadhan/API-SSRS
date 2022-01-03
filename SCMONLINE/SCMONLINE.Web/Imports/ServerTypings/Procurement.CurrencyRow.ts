namespace SCMONLINE.Procurement {
    export interface CurrencyRow {
        CurrencyId?: string;
        Name?: string;
        Description?: string;
    }

    export namespace CurrencyRow {
        export const idProperty = 'CurrencyId';
        export const nameProperty = 'CurrencyId';
        export const localTextPrefix = 'Procurement.Currency';
        export const lookupKey = 'Procurement.Currency';

        export function getLookup(): Q.Lookup<CurrencyRow> {
            return Q.getLookup<CurrencyRow>('Procurement.Currency');
        }

        export declare const enum Fields {
            CurrencyId = "CurrencyId",
            Name = "Name",
            Description = "Description"
        }
    }
}

