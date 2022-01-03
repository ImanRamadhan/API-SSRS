namespace SCMONLINE.Procurement {
    export namespace F19_CommitteeApprovalService {
        export const baseUrl = 'Procurement/F19_CommitteeApproval';

        export declare function Create(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function SubmitCreate(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Approve(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Reject(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Procurement/F19_CommitteeApproval/Create",
            Update = "Procurement/F19_CommitteeApproval/Update",
            Delete = "Procurement/F19_CommitteeApproval/Delete",
            Retrieve = "Procurement/F19_CommitteeApproval/Retrieve",
            List = "Procurement/F19_CommitteeApproval/List",
            SubmitCreate = "Procurement/F19_CommitteeApproval/SubmitCreate",
            Approve = "Procurement/F19_CommitteeApproval/Approve",
            Reject = "Procurement/F19_CommitteeApproval/Reject"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'SubmitCreate', 
            'Approve', 
            'Reject'
        ].forEach(x => {
            (<any>F19_CommitteeApprovalService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

