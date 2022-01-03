
namespace SCMONLINE.Procurement {
    import fld = ProcPrRow.Fields;

    @Serenity.Decorators.registerClass()
    //export class ProcPrDialog extends _Ext.DialogBase<ProcPrRow, any> {
    export class ProcPrDialog extends Common.GridEditorDialog<ProcPrRow> {

        protected getFormKey() { return ProcPrForm.formKey; }
        protected getIdProperty() { return ProcPrRow.idProperty; }
        protected getLocalTextPrefix() { return ProcPrRow.localTextPrefix; }
        protected getNameProperty() { return ProcPrRow.nameProperty; }
        protected getService() { return ProcPrService.baseUrl; }

        protected form = new ProcPrForm(this.idPrefix);

    }
}