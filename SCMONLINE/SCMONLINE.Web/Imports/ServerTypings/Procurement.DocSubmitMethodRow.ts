namespace SCMONLINE.Procurement {
    export interface DocSubmitMethodRow {
        DocSubmitMethodId?: number;
        Name?: string;
        Description?: string;
    }

    export namespace DocSubmitMethodRow {
        export const idProperty = 'DocSubmitMethodId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Procurement.DocSubmitMethod';
        export const lookupKey = 'Procurement.DocSubmitMethod';

        export function getLookup(): Q.Lookup<DocSubmitMethodRow> {
            return Q.getLookup<DocSubmitMethodRow>('Procurement.DocSubmitMethod');
        }

        export declare const enum Fields {
            DocSubmitMethodId = "DocSubmitMethodId",
            Name = "Name",
            Description = "Description"
        }
    }
}

