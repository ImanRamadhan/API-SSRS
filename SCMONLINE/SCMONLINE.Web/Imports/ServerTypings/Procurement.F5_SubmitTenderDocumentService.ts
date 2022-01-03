namespace SCMONLINE.Procurement {
    export namespace F5_SubmitTenderDocumentService {
        export const baseUrl = 'Procurement/F5_SubmitTenderDocument';

        export declare function Create(request: Serenity.SaveRequest<ProcParticipantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ProcParticipantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcParticipantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcParticipantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Submit(request: Serenity.SaveRequest<ProcParticipantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function BidPriceImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse<ProcParticipantItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Procurement/F5_SubmitTenderDocument/Create",
            Update = "Procurement/F5_SubmitTenderDocument/Update",
            Delete = "Procurement/F5_SubmitTenderDocument/Delete",
            Retrieve = "Procurement/F5_SubmitTenderDocument/Retrieve",
            List = "Procurement/F5_SubmitTenderDocument/List",
            Submit = "Procurement/F5_SubmitTenderDocument/Submit",
            BidPriceImport = "Procurement/F5_SubmitTenderDocument/BidPriceImport"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'Submit', 
            'BidPriceImport'
        ].forEach(x => {
            (<any>F5_SubmitTenderDocumentService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

