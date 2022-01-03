namespace SCMONLINE.Procurement {
    export interface F13_RfqItemForm {
        ProcurementId: Serenity.StringEditor;
        OwnerEstimateReview: Serenity.DecimalEditor;
        OwnerEstimate: Serenity.DecimalEditor;
        PurchasingDocument: Serenity.StringEditor;
        Item: Serenity.StringEditor;
        DeletionIndicator: Serenity.StringEditor;
        RfqStatus: Serenity.StringEditor;
        LastChangedOn: Serenity.DateEditor;
        ShortText: Serenity.StringEditor;
        Material: Serenity.StringEditor;
        Plant: Serenity.StringEditor;
        StorageLocation: Serenity.StringEditor;
        ReqTrackingNumber: Serenity.StringEditor;
        MaterialGroup: Serenity.StringEditor;
        PurchasingInfoRec: Serenity.StringEditor;
        VendorMaterialNo: Serenity.StringEditor;
        TargetQuantity: Serenity.DecimalEditor;
        OrderQuantity: Serenity.DecimalEditor;
        OrderUnit: Serenity.StringEditor;
        OrderPriceUnit: Serenity.StringEditor;
        QuantityConversion: Serenity.DecimalEditor;
        EqualTo: Serenity.DecimalEditor;
        Denominator: Serenity.DecimalEditor;
        NetOrderPrice: Serenity.DecimalEditor;
        PriceUnit: Serenity.DecimalEditor;
        NetOrderValue: Serenity.DecimalEditor;
        GrossOrderValue: Serenity.DecimalEditor;
        QuotationDeadline: Serenity.DateEditor;
        GrProcessingTime: Serenity.DecimalEditor;
        TaxCode: Serenity.StringEditor;
        BaseUnitOfMeasure: Serenity.StringEditor;
        ShippingInstr: Serenity.StringEditor;
        OaTargetValue: Serenity.DecimalEditor;
        PriceDate: Serenity.StringEditor;
        PurchDocCategory: Serenity.StringEditor;
        EffectiveValue: Serenity.DecimalEditor;
        AffectsCommitments: Serenity.StringEditor;
        MaterialType: Serenity.StringEditor;
        SubitemCategory: Serenity.StringEditor;
        SubItems: Serenity.StringEditor;
        Subtotal1: Serenity.DecimalEditor;
        Subtotal2: Serenity.DecimalEditor;
        Subtotal3: Serenity.DecimalEditor;
        Subtotal4: Serenity.DecimalEditor;
        Subtotal5: Serenity.DecimalEditor;
    }

    export class F13_RfqItemForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.F13_RfqItem';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!F13_RfqItemForm.init)  {
                F13_RfqItemForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.DateEditor;

                Q.initFormType(F13_RfqItemForm, [
                    'ProcurementId', w0,
                    'OwnerEstimateReview', w1,
                    'OwnerEstimate', w1,
                    'PurchasingDocument', w0,
                    'Item', w0,
                    'DeletionIndicator', w0,
                    'RfqStatus', w0,
                    'LastChangedOn', w2,
                    'ShortText', w0,
                    'Material', w0,
                    'Plant', w0,
                    'StorageLocation', w0,
                    'ReqTrackingNumber', w0,
                    'MaterialGroup', w0,
                    'PurchasingInfoRec', w0,
                    'VendorMaterialNo', w0,
                    'TargetQuantity', w1,
                    'OrderQuantity', w1,
                    'OrderUnit', w0,
                    'OrderPriceUnit', w0,
                    'QuantityConversion', w1,
                    'EqualTo', w1,
                    'Denominator', w1,
                    'NetOrderPrice', w1,
                    'PriceUnit', w1,
                    'NetOrderValue', w1,
                    'GrossOrderValue', w1,
                    'QuotationDeadline', w2,
                    'GrProcessingTime', w1,
                    'TaxCode', w0,
                    'BaseUnitOfMeasure', w0,
                    'ShippingInstr', w0,
                    'OaTargetValue', w1,
                    'PriceDate', w0,
                    'PurchDocCategory', w0,
                    'EffectiveValue', w1,
                    'AffectsCommitments', w0,
                    'MaterialType', w0,
                    'SubitemCategory', w0,
                    'SubItems', w0,
                    'Subtotal1', w1,
                    'Subtotal2', w1,
                    'Subtotal3', w1,
                    'Subtotal4', w1,
                    'Subtotal5', w1
                ]);
            }
        }
    }
}

