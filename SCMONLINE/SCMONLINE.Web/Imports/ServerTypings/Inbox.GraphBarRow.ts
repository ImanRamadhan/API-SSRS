namespace SCMONLINE.Inbox {
    export interface GraphBarRow {
        stat?: string;
        tgl?: string;
        label?: string;
        value?: number;
    }

    export namespace GraphBarRow {
        export const idProperty = 'stat';
        export const nameProperty = 'label';
        export const localTextPrefix = 'Inbox.GraphBar';

        export declare const enum Fields {
            stat = "stat",
            tgl = "tgl",
            label = "label",
            value = "value"
        }
    }
}

