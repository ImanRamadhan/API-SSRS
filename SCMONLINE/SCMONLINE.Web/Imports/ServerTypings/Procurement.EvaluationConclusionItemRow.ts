namespace SCMONLINE.Procurement {
    export interface EvaluationConclusionItemRow {
        EvaluationConclusionItemId?: number;
        Name?: string;
        Description?: string;
    }

    export namespace EvaluationConclusionItemRow {
        export const idProperty = 'EvaluationConclusionItemId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Procurement.EvaluationConclusionItem';
        export const lookupKey = 'Procurement.EvaluationConclusionItem';

        export function getLookup(): Q.Lookup<EvaluationConclusionItemRow> {
            return Q.getLookup<EvaluationConclusionItemRow>('Procurement.EvaluationConclusionItem');
        }

        export declare const enum Fields {
            EvaluationConclusionItemId = "EvaluationConclusionItemId",
            Name = "Name",
            Description = "Description"
        }
    }
}

