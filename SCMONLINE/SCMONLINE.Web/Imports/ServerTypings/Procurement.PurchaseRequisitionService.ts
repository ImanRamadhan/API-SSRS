namespace SCMONLINE.Procurement {
    export namespace PurchaseRequisitionService {
        export const baseUrl = 'Procurement/PurchaseRequisition';

        export declare function Create(request: Serenity.SaveRequest<PurchaseRequisitionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<PurchaseRequisitionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PurchaseRequisitionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PurchaseRequisitionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function AssignBuyerBulkAction(request: AssignBuyerActionRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Procurement/PurchaseRequisition/Create",
            Update = "Procurement/PurchaseRequisition/Update",
            Delete = "Procurement/PurchaseRequisition/Delete",
            Retrieve = "Procurement/PurchaseRequisition/Retrieve",
            List = "Procurement/PurchaseRequisition/List",
            AssignBuyerBulkAction = "Procurement/PurchaseRequisition/AssignBuyerBulkAction"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'AssignBuyerBulkAction'
        ].forEach(x => {
            (<any>PurchaseRequisitionService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

