namespace SCMONLINE.Procurement {
    export namespace F7_ProcParticipantItemService {
        export const baseUrl = 'Procurement/F7_ProcParticipantItem';

        export declare function Create(request: Serenity.SaveRequest<ProcParticipantItemRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ProcParticipantItemRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcParticipantItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcParticipantItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Procurement/F7_ProcParticipantItem/Create",
            Update = "Procurement/F7_ProcParticipantItem/Update",
            Delete = "Procurement/F7_ProcParticipantItem/Delete",
            Retrieve = "Procurement/F7_ProcParticipantItem/Retrieve",
            List = "Procurement/F7_ProcParticipantItem/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>F7_ProcParticipantItemService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

