namespace SCMONLINE.Procurement {
    export namespace F3_1_InputOwnerEstimateService {
        export const baseUrl = 'Procurement/F3_1_InputOwnerEstimate';

        export declare function Create(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Submit(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function ExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse<RfqItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Procurement/F3_1_InputOwnerEstimate/Create",
            Update = "Procurement/F3_1_InputOwnerEstimate/Update",
            Delete = "Procurement/F3_1_InputOwnerEstimate/Delete",
            Retrieve = "Procurement/F3_1_InputOwnerEstimate/Retrieve",
            List = "Procurement/F3_1_InputOwnerEstimate/List",
            Submit = "Procurement/F3_1_InputOwnerEstimate/Submit",
            ExcelImport = "Procurement/F3_1_InputOwnerEstimate/ExcelImport"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'Submit', 
            'ExcelImport'
        ].forEach(x => {
            (<any>F3_1_InputOwnerEstimateService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

