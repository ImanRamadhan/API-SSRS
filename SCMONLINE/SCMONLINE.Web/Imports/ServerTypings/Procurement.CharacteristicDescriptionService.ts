namespace SCMONLINE.Procurement {
    export namespace CharacteristicDescriptionService {
        export const baseUrl = 'Procurement/CharacteristicDescription';

        export declare function Create(request: Serenity.SaveRequest<CharacteristicDescriptionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<CharacteristicDescriptionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CharacteristicDescriptionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CharacteristicDescriptionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Procurement/CharacteristicDescription/Create",
            Update = "Procurement/CharacteristicDescription/Update",
            Delete = "Procurement/CharacteristicDescription/Delete",
            Retrieve = "Procurement/CharacteristicDescription/Retrieve",
            List = "Procurement/CharacteristicDescription/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>CharacteristicDescriptionService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

