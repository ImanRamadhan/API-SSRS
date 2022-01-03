namespace SCMONLINE.Procurement {
    export namespace F4_AanwijzingService {
        export const baseUrl = 'Procurement/F4_Aanwijzing';

        export declare function Create(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Submit(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Procurement/F4_Aanwijzing/Create",
            Update = "Procurement/F4_Aanwijzing/Update",
            Delete = "Procurement/F4_Aanwijzing/Delete",
            Retrieve = "Procurement/F4_Aanwijzing/Retrieve",
            List = "Procurement/F4_Aanwijzing/List",
            Submit = "Procurement/F4_Aanwijzing/Submit"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'Submit'
        ].forEach(x => {
            (<any>F4_AanwijzingService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

