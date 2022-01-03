
namespace SCMONLINE.Procurement {
    import fld = ProcStatusRow.Fields;

    @Serenity.Decorators.registerClass()
    export class ProcStatusDialog extends _Ext.DialogBase<ProcStatusRow, any> {
        protected getFormKey() { return ProcStatusForm.formKey; }
        protected getIdProperty() { return ProcStatusRow.idProperty; }
        protected getLocalTextPrefix() { return ProcStatusRow.localTextPrefix; }
        protected getNameProperty() { return ProcStatusRow.nameProperty; }
        protected getService() { return ProcStatusService.baseUrl; }

        protected form = new ProcStatusForm(this.idPrefix);

    }
}