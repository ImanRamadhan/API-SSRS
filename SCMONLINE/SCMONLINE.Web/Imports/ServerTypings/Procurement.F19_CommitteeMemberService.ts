namespace SCMONLINE.Procurement {
    export namespace F19_CommitteeMemberService {
        export const baseUrl = 'Procurement/F19_CommitteeMember';

        export declare function Create(request: Serenity.SaveRequest<CommitteeMemberRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<CommitteeMemberRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CommitteeMemberRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CommitteeMemberRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Procurement/F19_CommitteeMember/Create",
            Update = "Procurement/F19_CommitteeMember/Update",
            Delete = "Procurement/F19_CommitteeMember/Delete",
            Retrieve = "Procurement/F19_CommitteeMember/Retrieve",
            List = "Procurement/F19_CommitteeMember/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>F19_CommitteeMemberService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

