namespace SCMONLINE.Procurement {
    export namespace EvaluationConclusionService {
        export const baseUrl = 'Procurement/EvaluationConclusion';

        export declare function Create(request: Serenity.SaveRequest<EvaluationConclusionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<EvaluationConclusionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EvaluationConclusionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EvaluationConclusionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Procurement/EvaluationConclusion/Create",
            Update = "Procurement/EvaluationConclusion/Update",
            Delete = "Procurement/EvaluationConclusion/Delete",
            Retrieve = "Procurement/EvaluationConclusion/Retrieve",
            List = "Procurement/EvaluationConclusion/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>EvaluationConclusionService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

