namespace SCMONLINE.Procurement {
    export interface PurchaseRequisitionRow {
        PrNo?: string;
        BuyerId?: number;
        CostCenter?: string;
        ScanPrFile?: string;
        ScanPrName?: string;
        AssignDate?: string;
        AssignBy?: string;
        CreatedDate?: string;
        CreatedBy?: string;
        Status?: string;
        ProcPrItems?: ProcPrRow[];
        BuyerUsername?: string;
        BuyerDisplayName?: string;
        BuyerEmail?: string;
        BuyerSource?: string;
        BuyerPasswordHash?: string;
        BuyerPasswordSalt?: string;
        BuyerLastDirectoryUpdate?: string;
        BuyerUserImage?: string;
        BuyerInsertDate?: string;
        BuyerInsertUserId?: number;
        BuyerUpdateDate?: string;
        BuyerUpdateUserId?: number;
        BuyerIsActive?: number;
    }

    export namespace PurchaseRequisitionRow {
        export const idProperty = 'PrNo';
        export const nameProperty = 'PrNo';
        export const localTextPrefix = 'Procurement.PurchaseRequisition';

        export declare const enum Fields {
            PrNo = "PrNo",
            BuyerId = "BuyerId",
            CostCenter = "CostCenter",
            ScanPrFile = "ScanPrFile",
            ScanPrName = "ScanPrName",
            AssignDate = "AssignDate",
            AssignBy = "AssignBy",
            CreatedDate = "CreatedDate",
            CreatedBy = "CreatedBy",
            Status = "Status",
            ProcPrItems = "ProcPrItems",
            BuyerUsername = "BuyerUsername",
            BuyerDisplayName = "BuyerDisplayName",
            BuyerEmail = "BuyerEmail",
            BuyerSource = "BuyerSource",
            BuyerPasswordHash = "BuyerPasswordHash",
            BuyerPasswordSalt = "BuyerPasswordSalt",
            BuyerLastDirectoryUpdate = "BuyerLastDirectoryUpdate",
            BuyerUserImage = "BuyerUserImage",
            BuyerInsertDate = "BuyerInsertDate",
            BuyerInsertUserId = "BuyerInsertUserId",
            BuyerUpdateDate = "BuyerUpdateDate",
            BuyerUpdateUserId = "BuyerUpdateUserId",
            BuyerIsActive = "BuyerIsActive"
        }
    }
}

