namespace SCMONLINE.Inbox {
    export namespace StoreGraphs2Service {
        export const baseUrl = 'Inbox/StoreGraphs2';

        export declare function Create(request: Serenity.SaveRequest<StoreGraphs2Row>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<StoreGraphs2Row>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StoreGraphs2Row>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StoreGraphs2Row>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Inbox/StoreGraphs2/Create",
            Update = "Inbox/StoreGraphs2/Update",
            Delete = "Inbox/StoreGraphs2/Delete",
            Retrieve = "Inbox/StoreGraphs2/Retrieve",
            List = "Inbox/StoreGraphs2/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>StoreGraphs2Service)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

