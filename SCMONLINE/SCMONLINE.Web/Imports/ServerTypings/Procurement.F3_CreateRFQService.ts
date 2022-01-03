namespace SCMONLINE.Procurement {
    export namespace F3_CreateRFQService {
        export const baseUrl = 'Procurement/F3_CreateRFQ';

        export declare function Create(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Submit(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function SendMail(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function SendMailVendor(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetRFQ(request: RfqServiceRequest, onSuccess?: (response: ProcurementRow) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Procurement/F3_CreateRFQ/Create",
            Update = "Procurement/F3_CreateRFQ/Update",
            Delete = "Procurement/F3_CreateRFQ/Delete",
            Retrieve = "Procurement/F3_CreateRFQ/Retrieve",
            List = "Procurement/F3_CreateRFQ/List",
            Submit = "Procurement/F3_CreateRFQ/Submit",
            SendMail = "Procurement/F3_CreateRFQ/SendMail",
            SendMailVendor = "Procurement/F3_CreateRFQ/SendMailVendor",
            GetRFQ = "Procurement/F3_CreateRFQ/GetRFQ"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'Submit', 
            'SendMail', 
            'SendMailVendor', 
            'GetRFQ'
        ].forEach(x => {
            (<any>F3_CreateRFQService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

