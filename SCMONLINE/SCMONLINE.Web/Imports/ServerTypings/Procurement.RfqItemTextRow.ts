namespace SCMONLINE.Procurement {
    export interface RfqItemTextRow {
        RfqItemTextId?: number;
        RfqItemId?: number;
        TextId?: string;
        TextForm?: string;
        TextLine?: string;
        RfqItemProcurementId?: number;
        RfqItemOwnerEstimateReview?: number;
        RfqItemOwnerEstimate?: number;
        RfqItemPurchasingDocument?: string;
        RfqItemItem?: string;
        RfqItemDeletionIndicator?: string;
        RfqItemRfqStatus?: string;
        RfqItemLastChangedOn?: string;
        RfqItemShortText?: string;
        RfqItemMaterial?: string;
        RfqItemPlant?: string;
        RfqItemStorageLocation?: string;
        RfqItemReqTrackingNumber?: string;
        RfqItemMaterialGroup?: string;
        RfqItemPurchasingInfoRec?: string;
        RfqItemVendorMaterialNo?: string;
        RfqItemTargetQuantity?: number;
        RfqItemOrderQuantity?: number;
        RfqItemOrderUnit?: string;
        RfqItemOrderPriceUnit?: string;
        RfqItemQuantityConversion?: number;
        RfqItemEqualTo?: number;
        RfqItemDenominator?: number;
        RfqItemNetOrderPrice?: number;
        RfqItemPriceUnit?: number;
        RfqItemNetOrderValue?: number;
        RfqItemGrossOrderValue?: number;
        RfqItemQuotationDeadline?: string;
        RfqItemGrProcessingTime?: string;
        RfqItemTaxCode?: string;
        RfqItemBaseUnitOfMeasure?: string;
        RfqItemShippingInstr?: string;
        RfqItemOaTargetValue?: number;
        RfqItemPriceDate?: string;
        RfqItemPurchDocCategory?: string;
        RfqItemEffectiveValue?: number;
        RfqItemAffectsCommitments?: string;
        RfqItemMaterialType?: string;
        RfqItemSubitemCategory?: string;
        RfqItemSubItems?: string;
        RfqItemSubtotal1?: number;
        RfqItemSubtotal2?: number;
        RfqItemSubtotal3?: number;
        RfqItemSubtotal4?: number;
        RfqItemSubtotal5?: number;
    }

    export namespace RfqItemTextRow {
        export const idProperty = 'RfqItemTextId';
        export const nameProperty = 'TextLine';
        export const localTextPrefix = 'Procurement.RfqItemText';

        export declare const enum Fields {
            RfqItemTextId = "RfqItemTextId",
            RfqItemId = "RfqItemId",
            TextId = "TextId",
            TextForm = "TextForm",
            TextLine = "TextLine",
            RfqItemProcurementId = "RfqItemProcurementId",
            RfqItemOwnerEstimateReview = "RfqItemOwnerEstimateReview",
            RfqItemOwnerEstimate = "RfqItemOwnerEstimate",
            RfqItemPurchasingDocument = "RfqItemPurchasingDocument",
            RfqItemItem = "RfqItemItem",
            RfqItemDeletionIndicator = "RfqItemDeletionIndicator",
            RfqItemRfqStatus = "RfqItemRfqStatus",
            RfqItemLastChangedOn = "RfqItemLastChangedOn",
            RfqItemShortText = "RfqItemShortText",
            RfqItemMaterial = "RfqItemMaterial",
            RfqItemPlant = "RfqItemPlant",
            RfqItemStorageLocation = "RfqItemStorageLocation",
            RfqItemReqTrackingNumber = "RfqItemReqTrackingNumber",
            RfqItemMaterialGroup = "RfqItemMaterialGroup",
            RfqItemPurchasingInfoRec = "RfqItemPurchasingInfoRec",
            RfqItemVendorMaterialNo = "RfqItemVendorMaterialNo",
            RfqItemTargetQuantity = "RfqItemTargetQuantity",
            RfqItemOrderQuantity = "RfqItemOrderQuantity",
            RfqItemOrderUnit = "RfqItemOrderUnit",
            RfqItemOrderPriceUnit = "RfqItemOrderPriceUnit",
            RfqItemQuantityConversion = "RfqItemQuantityConversion",
            RfqItemEqualTo = "RfqItemEqualTo",
            RfqItemDenominator = "RfqItemDenominator",
            RfqItemNetOrderPrice = "RfqItemNetOrderPrice",
            RfqItemPriceUnit = "RfqItemPriceUnit",
            RfqItemNetOrderValue = "RfqItemNetOrderValue",
            RfqItemGrossOrderValue = "RfqItemGrossOrderValue",
            RfqItemQuotationDeadline = "RfqItemQuotationDeadline",
            RfqItemGrProcessingTime = "RfqItemGrProcessingTime",
            RfqItemTaxCode = "RfqItemTaxCode",
            RfqItemBaseUnitOfMeasure = "RfqItemBaseUnitOfMeasure",
            RfqItemShippingInstr = "RfqItemShippingInstr",
            RfqItemOaTargetValue = "RfqItemOaTargetValue",
            RfqItemPriceDate = "RfqItemPriceDate",
            RfqItemPurchDocCategory = "RfqItemPurchDocCategory",
            RfqItemEffectiveValue = "RfqItemEffectiveValue",
            RfqItemAffectsCommitments = "RfqItemAffectsCommitments",
            RfqItemMaterialType = "RfqItemMaterialType",
            RfqItemSubitemCategory = "RfqItemSubitemCategory",
            RfqItemSubItems = "RfqItemSubItems",
            RfqItemSubtotal1 = "RfqItemSubtotal1",
            RfqItemSubtotal2 = "RfqItemSubtotal2",
            RfqItemSubtotal3 = "RfqItemSubtotal3",
            RfqItemSubtotal4 = "RfqItemSubtotal4",
            RfqItemSubtotal5 = "RfqItemSubtotal5"
        }
    }
}

