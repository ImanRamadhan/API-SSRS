
namespace SCMONLINE.Procurement {
    import fld = ProcurementMethodRow.Fields;

    @Serenity.Decorators.registerClass()
    export class ProcurementMethodDialog extends _Ext.DialogBase<ProcurementMethodRow, any> {
        protected getFormKey() { return ProcurementMethodForm.formKey; }
        protected getIdProperty() { return ProcurementMethodRow.idProperty; }
        protected getLocalTextPrefix() { return ProcurementMethodRow.localTextPrefix; }
        protected getNameProperty() { return ProcurementMethodRow.nameProperty; }
        protected getService() { return ProcurementMethodService.baseUrl; }

        protected form = new ProcurementMethodForm(this.idPrefix);

    }
}