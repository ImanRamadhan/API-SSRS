namespace SCMONLINE.Inbox {
    export namespace StoreGraphsFCService {
        export const baseUrl = 'Inbox/StoreGraphsFC';

        export declare function Create(request: Serenity.SaveRequest<StoreGraphsFCRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<StoreGraphsFCRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StoreGraphsFCRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StoreGraphsFCRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Inbox/StoreGraphsFC/Create",
            Update = "Inbox/StoreGraphsFC/Update",
            Delete = "Inbox/StoreGraphsFC/Delete",
            Retrieve = "Inbox/StoreGraphsFC/Retrieve",
            List = "Inbox/StoreGraphsFC/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>StoreGraphsFCService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

