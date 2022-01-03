namespace SCMONLINE.Procurement {
    export namespace F14_WinnerAnnouncementService {
        export const baseUrl = 'Procurement/F14_WinnerAnnouncement';

        export declare function Create(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProcurementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Submit(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function SendMail(request: Serenity.SaveRequest<ProcurementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Procurement/F14_WinnerAnnouncement/Create",
            Update = "Procurement/F14_WinnerAnnouncement/Update",
            Delete = "Procurement/F14_WinnerAnnouncement/Delete",
            Retrieve = "Procurement/F14_WinnerAnnouncement/Retrieve",
            List = "Procurement/F14_WinnerAnnouncement/List",
            Submit = "Procurement/F14_WinnerAnnouncement/Submit",
            SendMail = "Procurement/F14_WinnerAnnouncement/SendMail"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'Submit', 
            'SendMail'
        ].forEach(x => {
            (<any>F14_WinnerAnnouncementService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

