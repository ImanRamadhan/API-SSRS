namespace SCMONLINE.Procurement {
    export namespace PurchDocTextRefService {
        export const baseUrl = 'Procurement/PurchDocTextRef';

        export declare function Create(request: Serenity.SaveRequest<PurchDocTextRefRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<PurchDocTextRefRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PurchDocTextRefRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PurchDocTextRefRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Procurement/PurchDocTextRef/Create",
            Update = "Procurement/PurchDocTextRef/Update",
            Delete = "Procurement/PurchDocTextRef/Delete",
            Retrieve = "Procurement/PurchDocTextRef/Retrieve",
            List = "Procurement/PurchDocTextRef/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>PurchDocTextRefService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

