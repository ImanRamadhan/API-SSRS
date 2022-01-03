namespace SCMONLINE.Procurement {
    export interface EvaluationConclusionRow {
        EvaluationConclusionId?: number;
        Name?: string;
        Description?: string;
    }

    export namespace EvaluationConclusionRow {
        export const idProperty = 'EvaluationConclusionId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Procurement.EvaluationConclusion';
        export const lookupKey = 'Procurement.EvaluationConclusion';

        export function getLookup(): Q.Lookup<EvaluationConclusionRow> {
            return Q.getLookup<EvaluationConclusionRow>('Procurement.EvaluationConclusion');
        }

        export declare const enum Fields {
            EvaluationConclusionId = "EvaluationConclusionId",
            Name = "Name",
            Description = "Description"
        }
    }
}

