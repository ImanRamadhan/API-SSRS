
namespace SCMONLINE.Procurement {
    import fld = PurchaseRequisitionRow.Fields;

    @Serenity.Decorators.registerClass()
    export class PurchaseRequisitionDialog extends _Ext.DialogBase<PurchaseRequisitionRow, any> {
        protected getFormKey() { return PurchaseRequisitionForm.formKey; }
        protected getIdProperty() { return PurchaseRequisitionRow.idProperty; }
        protected getLocalTextPrefix() { return PurchaseRequisitionRow.localTextPrefix; }
        protected getNameProperty() { return PurchaseRequisitionRow.nameProperty; }
        protected getService() { return PurchaseRequisitionService.baseUrl; }

        protected form = new PurchaseRequisitionForm(this.idPrefix);

        constructor() {
            super();
        }
        protected onDialogOpen() {
            super.onDialogOpen();
        }
        protected onSaveSuccess(response) {
            super.onSaveSuccess(response);
            console.log('super.onSaveSuccess(response);');
            Q.reloadLookup('Procurement.BuyerLookup');
            //Q.reloadLookup(BuyerLookupViewRow.lookupKey);
            //this.reloadById();
        }

    }
}