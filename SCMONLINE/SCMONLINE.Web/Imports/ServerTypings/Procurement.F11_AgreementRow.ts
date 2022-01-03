namespace SCMONLINE.Procurement {
    export interface F11_AgreementRow {
        EmailParticipant?: string;
        Agreement?: string;
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

    export namespace F11_AgreementRow {
        export const idProperty = 'EmailParticipant';
        export const nameProperty = 'Agreement';
        export const localTextPrefix = 'Procurement.F11_Agreement';

        export declare const enum Fields {
            EmailParticipant = "EmailParticipant",
            Agreement = "Agreement",
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

