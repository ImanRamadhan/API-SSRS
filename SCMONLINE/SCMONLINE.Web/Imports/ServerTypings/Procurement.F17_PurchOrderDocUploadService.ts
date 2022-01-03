namespace SCMONLINE.Procurement {
    export namespace F17_PurchOrderDocUploadService {
        export const baseUrl = 'Procurement/F17_PurchOrderDocUpload';

        export declare function Create(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Submit(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Procurement/F17_PurchOrderDocUpload/Create",
            Update = "Procurement/F17_PurchOrderDocUpload/Update",
            Delete = "Procurement/F17_PurchOrderDocUpload/Delete",
            Retrieve = "Procurement/F17_PurchOrderDocUpload/Retrieve",
            List = "Procurement/F17_PurchOrderDocUpload/List",
            Submit = "Procurement/F17_PurchOrderDocUpload/Submit"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'Submit'
        ].forEach(x => {
            (<any>F17_PurchOrderDocUploadService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

