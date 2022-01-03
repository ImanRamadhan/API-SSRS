
namespace SCMONLINE.Procurement {
    import fld = ProcurementRow.Fields;

    @Serenity.Decorators.registerClass()
    export class F20_ProcurementDialog extends _Ext.DialogBase<ProcurementRow, any> {
        protected getFormKey() { return F20_ProcurementForm.formKey; }
        protected getIdProperty() { return ProcurementRow.idProperty; }
        protected getLocalTextPrefix() { return ProcurementRow.localTextPrefix; }
        protected getNameProperty() { return ProcurementRow.nameProperty; }
        protected getService() { return F20_ProcurementService.baseUrl; }

        protected form = new F20_ProcurementForm(this.idPrefix);

    }
}