namespace SCMONLINE.Procurement {
    export namespace CommitteeMemberMappingService {
        export const baseUrl = 'Procurement/CommitteeMemberMapping';

        export declare function Create(request: Serenity.SaveRequest<CommitteeMemberMappingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<CommitteeMemberMappingRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CommitteeMemberMappingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CommitteeMemberMappingRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Procurement/CommitteeMemberMapping/Create",
            Update = "Procurement/CommitteeMemberMapping/Update",
            Delete = "Procurement/CommitteeMemberMapping/Delete",
            Retrieve = "Procurement/CommitteeMemberMapping/Retrieve",
            List = "Procurement/CommitteeMemberMapping/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>CommitteeMemberMappingService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

