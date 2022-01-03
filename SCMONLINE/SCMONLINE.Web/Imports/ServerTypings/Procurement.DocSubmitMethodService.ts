namespace SCMONLINE.Procurement {
    export namespace DocSubmitMethodService {
        export const baseUrl = 'Procurement/DocSubmitMethod';

        export declare function Create(request: Serenity.SaveRequest<DocSubmitMethodRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<DocSubmitMethodRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DocSubmitMethodRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DocSubmitMethodRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Procurement/DocSubmitMethod/Create",
            Update = "Procurement/DocSubmitMethod/Update",
            Delete = "Procurement/DocSubmitMethod/Delete",
            Retrieve = "Procurement/DocSubmitMethod/Retrieve",
            List = "Procurement/DocSubmitMethod/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>DocSubmitMethodService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

