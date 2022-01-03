
namespace SCMONLINE.Procurement {
    import fld = PurchaseRequisitionRow.Fields;

    @Serenity.Decorators.registerClass()
    export class F20_PurchaseRequisitionTrackingDialog extends _Ext.DialogBase<PurchaseRequisitionRow, any> {
        protected getFormKey() { return F20_PurchaseRequisitionTrackingForm.formKey; }
        protected getIdProperty() { return PurchaseRequisitionRow.idProperty; }
        protected getLocalTextPrefix() { return PurchaseRequisitionRow.localTextPrefix; }
        protected getNameProperty() { return PurchaseRequisitionRow.nameProperty; }
        protected getService() { return F20_PurchaseRequisitionTrackingService.baseUrl; }

        protected form = new F20_PurchaseRequisitionTrackingForm(this.idPrefix);

    }
}