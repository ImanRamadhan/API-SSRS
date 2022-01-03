namespace SCMONLINE.Procurement {
    export namespace BuyerLookupViewService {
        export const baseUrl = 'Procurement/BuyerLookupView';

        export declare function Create(request: Serenity.SaveRequest<BuyerLookupViewRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<BuyerLookupViewRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BuyerLookupViewRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BuyerLookupViewRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Procurement/BuyerLookupView/Create",
            Update = "Procurement/BuyerLookupView/Update",
            Delete = "Procurement/BuyerLookupView/Delete",
            Retrieve = "Procurement/BuyerLookupView/Retrieve",
            List = "Procurement/BuyerLookupView/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>BuyerLookupViewService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

