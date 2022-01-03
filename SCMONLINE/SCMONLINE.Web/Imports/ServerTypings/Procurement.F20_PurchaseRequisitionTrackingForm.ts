namespace SCMONLINE.Procurement {
    export interface F20_PurchaseRequisitionTrackingForm {
        BuyerId: Serenity.LookupEditor;
        CostCenter: Serenity.StringEditor;
        ScanPrFile: Serenity.ImageUploadEditor;
        ScanPrName: Serenity.StringEditor;
        AssignDate: Serenity.DateEditor;
        AssignBy: Serenity.StringEditor;
        CreatedDate: Serenity.DateEditor;
        CreatedBy: Serenity.StringEditor;
        Status: Serenity.StringEditor;
        ProcPrItems: F20_ProcPrEditor;
    }

    export class F20_PurchaseRequisitionTrackingForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.F20_PurchaseRequisitionTracking';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!F20_PurchaseRequisitionTrackingForm.init)  {
                F20_PurchaseRequisitionTrackingForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.ImageUploadEditor;
                var w3 = s.DateEditor;
                var w4 = F20_ProcPrEditor;

                Q.initFormType(F20_PurchaseRequisitionTrackingForm, [
                    'BuyerId', w0,
                    'CostCenter', w1,
                    'ScanPrFile', w2,
                    'ScanPrName', w1,
                    'AssignDate', w3,
                    'AssignBy', w1,
                    'CreatedDate', w3,
                    'CreatedBy', w1,
                    'Status', w1,
                    'ProcPrItems', w4
                ]);
            }
        }
    }
}

