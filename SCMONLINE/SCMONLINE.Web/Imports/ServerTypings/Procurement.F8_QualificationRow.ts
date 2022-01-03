namespace SCMONLINE.Procurement {
    export interface F8_QualificationRow {
        Email?: string;
        Vendorid?: string;
        NAME?: string;
        title?: string;
        ProcurementTypeName?: string;
        ProcurementTypeDescription?: string;
        StatusName?: string;
        StatusDescription?: string;
        OfficeAddressName?: string;
        OfficeAddressDescription?: string;
        OfficeAddressAddressTypeId?: number;
        ProcValueRangeName?: string;
        ProcValueRangeDescription?: string;
        CommitteeTypeName?: string;
        CommitteeTypeDescription?: string;
        DestinationName?: string;
        DestinationDescription?: string;
        DestinationAddressTypeId?: number;
        ContractTypeName?: string;
        ContractTypeDescription?: string;
        CurrencyName?: string;
        CurrencyDescription?: string;
        DocSubmitMethodName?: string;
        DocSubmitMethodDescription?: string;
        OrderTypeName?: string;
        OrderTypeDescription?: string;
        ProcurementMethodName?: string;
        ProcurementMethodDescription?: string;
    }

    export namespace F8_QualificationRow {
        export const idProperty = 'Email';
        export const nameProperty = 'Vendorid';
        export const localTextPrefix = 'Procurement.F8_Qualification';

        export declare const enum Fields {
            Email = "Email",
            Vendorid = "Vendorid",
            NAME = "NAME",
            title = "title",
            ProcurementTypeName = "ProcurementTypeName",
            ProcurementTypeDescription = "ProcurementTypeDescription",
            StatusName = "StatusName",
            StatusDescription = "StatusDescription",
            OfficeAddressName = "OfficeAddressName",
            OfficeAddressDescription = "OfficeAddressDescription",
            OfficeAddressAddressTypeId = "OfficeAddressAddressTypeId",
            ProcValueRangeName = "ProcValueRangeName",
            ProcValueRangeDescription = "ProcValueRangeDescription",
            CommitteeTypeName = "CommitteeTypeName",
            CommitteeTypeDescription = "CommitteeTypeDescription",
            DestinationName = "DestinationName",
            DestinationDescription = "DestinationDescription",
            DestinationAddressTypeId = "DestinationAddressTypeId",
            ContractTypeName = "ContractTypeName",
            ContractTypeDescription = "ContractTypeDescription",
            CurrencyName = "CurrencyName",
            CurrencyDescription = "CurrencyDescription",
            DocSubmitMethodName = "DocSubmitMethodName",
            DocSubmitMethodDescription = "DocSubmitMethodDescription",
            OrderTypeName = "OrderTypeName",
            OrderTypeDescription = "OrderTypeDescription",
            ProcurementMethodName = "ProcurementMethodName",
            ProcurementMethodDescription = "ProcurementMethodDescription"
        }
    }
}

