namespace SCMONLINE.Inbox {
    export interface StoreGraphs2Row {
        label?: string;
        value?: number;
    }

    export namespace StoreGraphs2Row {
        export const idProperty = 'label';
        export const nameProperty = 'label';
        export const localTextPrefix = 'Inbox.StoreGraphs2';

        export declare const enum Fields {
            label = "label",
            value = "value"
        }
    }
}

