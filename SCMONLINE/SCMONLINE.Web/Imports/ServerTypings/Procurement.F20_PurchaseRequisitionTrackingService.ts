namespace SCMONLINE.Procurement {
    export namespace F20_PurchaseRequisitionTrackingService {
        export const baseUrl = 'Procurement/F20_PurchaseRequisitionTracking';

        export declare function Create(request: Serenity.SaveRequest<PurchaseRequisitionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<PurchaseRequisitionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PurchaseRequisitionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PurchaseRequisitionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Procurement/F20_PurchaseRequisitionTracking/Create",
            Update = "Procurement/F20_PurchaseRequisitionTracking/Update",
            Delete = "Procurement/F20_PurchaseRequisitionTracking/Delete",
            Retrieve = "Procurement/F20_PurchaseRequisitionTracking/Retrieve",
            List = "Procurement/F20_PurchaseRequisitionTracking/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>F20_PurchaseRequisitionTrackingService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

