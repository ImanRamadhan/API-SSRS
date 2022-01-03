namespace SCMONLINE.Procurement {
    export namespace F10_NegotiationService {
        export const baseUrl = 'Procurement/F10_Negotiation';

        export declare function Create(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Submit(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function OwnerEstimateReviewImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse<RfqItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Procurement/F10_Negotiation/Create",
            Update = "Procurement/F10_Negotiation/Update",
            Delete = "Procurement/F10_Negotiation/Delete",
            Retrieve = "Procurement/F10_Negotiation/Retrieve",
            List = "Procurement/F10_Negotiation/List",
            Submit = "Procurement/F10_Negotiation/Submit",
            OwnerEstimateReviewImport = "Procurement/F10_Negotiation/OwnerEstimateReviewImport"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'Submit', 
            'OwnerEstimateReviewImport'
        ].forEach(x => {
            (<any>F10_NegotiationService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

