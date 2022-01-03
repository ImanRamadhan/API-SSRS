namespace SCMONLINE.Inbox {
    export interface StoreGraphsFCRow {
        buyer?: string;
        label?: string;
        data?: number;
    }

    export namespace StoreGraphsFCRow {
        export const idProperty = 'buyer';
        export const nameProperty = 'label';
        export const localTextPrefix = 'Inbox.StoreGraphsFC';

        export declare const enum Fields {
            buyer = "buyer",
            label = "label",
            data = "data"
        }
    }
}

