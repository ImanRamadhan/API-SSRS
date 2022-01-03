namespace SCMONLINE.Procurement {
    export namespace F1_BLSelectionAdjustmentService {
        export const baseUrl = 'Procurement/F1_BLSelectionAdjustment';

        export declare function Create(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetBidderListHeader(request: BidderListServiceRequest, onSuccess?: (response: ProcurementRow) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function SubmitCreate(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function SubmitUpdate(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Procurement/F1_BLSelectionAdjustment/Create",
            Update = "Procurement/F1_BLSelectionAdjustment/Update",
            Delete = "Procurement/F1_BLSelectionAdjustment/Delete",
            Retrieve = "Procurement/F1_BLSelectionAdjustment/Retrieve",
            List = "Procurement/F1_BLSelectionAdjustment/List",
            GetBidderListHeader = "Procurement/F1_BLSelectionAdjustment/GetBidderListHeader",
            SubmitCreate = "Procurement/F1_BLSelectionAdjustment/SubmitCreate",
            SubmitUpdate = "Procurement/F1_BLSelectionAdjustment/SubmitUpdate"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'GetBidderListHeader', 
            'SubmitCreate', 
            'SubmitUpdate'
        ].forEach(x => {
            (<any>F1_BLSelectionAdjustmentService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

