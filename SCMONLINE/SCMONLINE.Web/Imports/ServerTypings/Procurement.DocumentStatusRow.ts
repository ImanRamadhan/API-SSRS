namespace SCMONLINE.Procurement {
    export interface DocumentStatusRow {
        DocumentStatusId?: number;
        Name?: string;
        Description?: string;
    }

    export namespace DocumentStatusRow {
        export const idProperty = 'DocumentStatusId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Procurement.DocumentStatus';
        export const lookupKey = 'Procurement.DocumentStatus';

        export function getLookup(): Q.Lookup<DocumentStatusRow> {
            return Q.getLookup<DocumentStatusRow>('Procurement.DocumentStatus');
        }

        export declare const enum Fields {
            DocumentStatusId = "DocumentStatusId",
            Name = "Name",
            Description = "Description"
        }
    }
}

