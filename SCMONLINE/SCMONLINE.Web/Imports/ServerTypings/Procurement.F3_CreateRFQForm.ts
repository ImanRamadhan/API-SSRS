namespace SCMONLINE.Procurement {
    export interface F3_CreateRFQForm {
        ProcurementTypeId: Serenity.LookupEditor;
        Status: Serenity.LookupEditor;
        CollectiveNumber: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        Classification: Serenity.StringEditor;
        Qualification: Serenity.StringEditor;
        AanwijzingExists: Serenity.BooleanEditor;
        TenderDocSubmitOpenDate: Serenity.DateTimeEditor;
        TenderDocSubmitCloseDate: Serenity.DateTimeEditor;
        CurrencyId: Serenity.LookupEditor;
        PurchDocNum: Serenity.StringEditor;
        OrderTypeId: Serenity.LookupEditor;
        RfqDate: Serenity.DateTimeEditor;
        QuotationDeadline: Serenity.DateTimeEditor;
        PurchGroup: Serenity.StringEditor;
        PrNo: Serenity.StringEditor;
        AuthPersonName: Serenity.StringEditor;
        AuthPosition: Serenity.StringEditor;
        DeliveryAddress: Serenity.TextAreaEditor;
        ToPTargVal: Serenity.StringEditor;
        YourReference: Serenity.StringEditor;
        OurReference: Serenity.StringEditor;
        SalesPerson: Serenity.StringEditor;
        Telephone: Serenity.StringEditor;
        ValidityStart: Serenity.DateEditor;
        ValidityEnd: Serenity.DateEditor;
        ItemInterval: Serenity.DecimalEditor;
        SubItemInterval: Serenity.DecimalEditor;
        Warranty: Serenity.DateEditor;
        Language: Serenity.StringEditor;
        F3SubmitDate: Serenity.DateTimeEditor;
        F3SubmitBy: Serenity.StringEditor;
        RfqItems: RfqItemsEditor;
        RfqTexts: RfqTextsEditor;
        ProcPurchaseRequests: PurchaseRequestsEditor;
    }

    export class F3_CreateRFQForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.F3_CreateRFQ';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!F3_CreateRFQForm.init)  {
                F3_CreateRFQForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.BooleanEditor;
                var w3 = s.DateTimeEditor;
                var w4 = s.TextAreaEditor;
                var w5 = s.DateEditor;
                var w6 = s.DecimalEditor;
                var w7 = RfqItemsEditor;
                var w8 = RfqTextsEditor;
                var w9 = PurchaseRequestsEditor;

                Q.initFormType(F3_CreateRFQForm, [
                    'ProcurementTypeId', w0,
                    'Status', w0,
                    'CollectiveNumber', w1,
                    'Title', w1,
                    'Classification', w1,
                    'Qualification', w1,
                    'AanwijzingExists', w2,
                    'TenderDocSubmitOpenDate', w3,
                    'TenderDocSubmitCloseDate', w3,
                    'CurrencyId', w0,
                    'PurchDocNum', w1,
                    'OrderTypeId', w0,
                    'RfqDate', w3,
                    'QuotationDeadline', w3,
                    'PurchGroup', w1,
                    'PrNo', w1,
                    'AuthPersonName', w1,
                    'AuthPosition', w1,
                    'DeliveryAddress', w4,
                    'ToPTargVal', w1,
                    'YourReference', w1,
                    'OurReference', w1,
                    'SalesPerson', w1,
                    'Telephone', w1,
                    'ValidityStart', w5,
                    'ValidityEnd', w5,
                    'ItemInterval', w6,
                    'SubItemInterval', w6,
                    'Warranty', w5,
                    'Language', w1,
                    'F3SubmitDate', w3,
                    'F3SubmitBy', w1,
                    'RfqItems', w7,
                    'RfqTexts', w8,
                    'ProcPurchaseRequests', w9
                ]);
            }
        }
    }
}

