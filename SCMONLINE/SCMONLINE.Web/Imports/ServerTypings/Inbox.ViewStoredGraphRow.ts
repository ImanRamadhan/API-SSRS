namespace SCMONLINE.Inbox {
    export interface ViewStoredGraphRow {
        Name?: string;
        Jumlah?: number;
    }

    export namespace ViewStoredGraphRow {
        export const idProperty = 'Name';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Inbox.ViewStoredGraph';

        export declare const enum Fields {
            Name = "Name",
            Jumlah = "Jumlah"
        }
    }
}

