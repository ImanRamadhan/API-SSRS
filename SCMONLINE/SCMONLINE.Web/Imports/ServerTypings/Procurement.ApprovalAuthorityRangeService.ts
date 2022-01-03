namespace SCMONLINE.Procurement {
    export namespace ApprovalAuthorityRangeService {
        export const baseUrl = 'Procurement/ApprovalAuthorityRange';

        export declare function Create(request: Serenity.SaveRequest<ApprovalAuthorityRangeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ApprovalAuthorityRangeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ApprovalAuthorityRangeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ApprovalAuthorityRangeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Procurement/ApprovalAuthorityRange/Create",
            Update = "Procurement/ApprovalAuthorityRange/Update",
            Delete = "Procurement/ApprovalAuthorityRange/Delete",
            Retrieve = "Procurement/ApprovalAuthorityRange/Retrieve",
            List = "Procurement/ApprovalAuthorityRange/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ApprovalAuthorityRangeService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

