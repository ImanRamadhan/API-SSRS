namespace SCMONLINE.Inbox {
    export interface TryGraphRow {
        stat?: string;
        tgl?: string;
        label?: string;
        value?: number;
    }

    export namespace TryGraphRow {
        export const idProperty = 'stat';
        export const nameProperty = 'label';
        export const localTextPrefix = 'Inbox.TryGraph';

        export declare const enum Fields {
            stat = "stat",
            tgl = "tgl",
            label = "label",
            value = "value"
        }
    }
}

