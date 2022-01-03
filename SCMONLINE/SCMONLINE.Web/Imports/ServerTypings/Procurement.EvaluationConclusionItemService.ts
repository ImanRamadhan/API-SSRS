namespace SCMONLINE.Procurement {
    export namespace EvaluationConclusionItemService {
        export const baseUrl = 'Procurement/EvaluationConclusionItem';

        export declare function Create(request: Serenity.SaveRequest<EvaluationConclusionItemRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<EvaluationConclusionItemRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EvaluationConclusionItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EvaluationConclusionItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Procurement/EvaluationConclusionItem/Create",
            Update = "Procurement/EvaluationConclusionItem/Update",
            Delete = "Procurement/EvaluationConclusionItem/Delete",
            Retrieve = "Procurement/EvaluationConclusionItem/Retrieve",
            List = "Procurement/EvaluationConclusionItem/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>EvaluationConclusionItemService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

