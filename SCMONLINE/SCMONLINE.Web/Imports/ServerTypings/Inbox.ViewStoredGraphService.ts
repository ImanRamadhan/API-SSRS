namespace SCMONLINE.Inbox {
    export namespace ViewStoredGraphService {
        export const baseUrl = 'Inbox/ViewStoredGraph';

        export declare function Create(request: Serenity.SaveRequest<ViewStoredGraphRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ViewStoredGraphRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ViewStoredGraphRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ViewStoredGraphRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Inbox/ViewStoredGraph/Create",
            Update = "Inbox/ViewStoredGraph/Update",
            Delete = "Inbox/ViewStoredGraph/Delete",
            Retrieve = "Inbox/ViewStoredGraph/Retrieve",
            List = "Inbox/ViewStoredGraph/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ViewStoredGraphService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

