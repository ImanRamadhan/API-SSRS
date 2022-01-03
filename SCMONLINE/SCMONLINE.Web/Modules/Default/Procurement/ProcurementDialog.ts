
namespace SCMONLINE.Default {
    import fld = ProcurementRow.Fields;

    @Serenity.Decorators.registerClass()
    export class ProcurementDialog extends _Ext.DialogBase<ProcurementRow, any> {
        protected getFormKey() { return ProcurementForm.formKey; }
        protected getIdProperty() { return ProcurementRow.idProperty; }
        protected getLocalTextPrefix() { return ProcurementRow.localTextPrefix; }
        protected getNameProperty() { return ProcurementRow.nameProperty; }
        protected getService() { return ProcurementService.baseUrl; }

        protected form = new ProcurementForm(this.idPrefix);

    }
}