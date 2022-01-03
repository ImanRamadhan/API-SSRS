namespace SCMONLINE.Procurement {
    export interface PurchaseRequisitionForm {
        PrNo: Serenity.StringEditor;
        BuyerId: Serenity.LookupEditor;
        ScanPrFile: Serenity.ImageUploadEditor;
        ScanPrName: Serenity.StringEditor;
        AssignDate: Serenity.DateEditor;
        AssignBy: Serenity.StringEditor;
        CreatedDate: Serenity.DateEditor;
        CreatedBy: Serenity.StringEditor;
        Status: Serenity.StringEditor;
    }

    export class PurchaseRequisitionForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.PurchaseRequisition';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PurchaseRequisitionForm.init)  {
                PurchaseRequisitionForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.ImageUploadEditor;
                var w3 = s.DateEditor;

                Q.initFormType(PurchaseRequisitionForm, [
                    'PrNo', w0,
                    'BuyerId', w1,
                    'ScanPrFile', w2,
                    'ScanPrName', w0,
                    'AssignDate', w3,
                    'AssignBy', w0,
                    'CreatedDate', w3,
                    'CreatedBy', w0,
                    'Status', w0
                ]);
            }
        }
    }
}

