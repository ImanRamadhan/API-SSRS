namespace SCMONLINE.Procurement {
    export namespace F13_ProcResultDecisionService {
        export const baseUrl = 'Procurement/F13_ProcResultDecision';

        export declare function Create(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Approve(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Reject(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function SendMailApprove(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function SendMailReject(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Procurement/F13_ProcResultDecision/Create",
            Update = "Procurement/F13_ProcResultDecision/Update",
            Delete = "Procurement/F13_ProcResultDecision/Delete",
            Retrieve = "Procurement/F13_ProcResultDecision/Retrieve",
            List = "Procurement/F13_ProcResultDecision/List",
            Approve = "Procurement/F13_ProcResultDecision/Approve",
            Reject = "Procurement/F13_ProcResultDecision/Reject",
            SendMailApprove = "Procurement/F13_ProcResultDecision/SendMailApprove",
            SendMailReject = "Procurement/F13_ProcResultDecision/SendMailReject"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'Approve', 
            'Reject', 
            'SendMailApprove', 
            'SendMailReject'
        ].forEach(x => {
            (<any>F13_ProcResultDecisionService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

