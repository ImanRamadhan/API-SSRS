namespace SCMONLINE.Procurement {
    export interface OrderTypeRow {
        OrderTypeId?: string;
        Name?: string;
        Description?: string;
    }

    export namespace OrderTypeRow {
        export const idProperty = 'OrderTypeId';
        export const nameProperty = 'OrderTypeId';
        export const localTextPrefix = 'Procurement.OrderType';
        export const lookupKey = 'Procurement.OrderType';

        export function getLookup(): Q.Lookup<OrderTypeRow> {
            return Q.getLookup<OrderTypeRow>('Procurement.OrderType');
        }

        export declare const enum Fields {
            OrderTypeId = "OrderTypeId",
            Name = "Name",
            Description = "Description"
        }
    }
}

