
namespace SCMONLINE.Procurement {
    import fld = RfqTextRow.Fields;

    @Serenity.Decorators.registerClass()
    //export class RfqTextDialog extends _Ext.DialogBase<RfqTextRow, any> {
    export class RfqTextDialog extends Common.GridEditorDialog<RfqTextRow> {
        protected getFormKey() { return RfqTextForm.formKey; }
        protected getIdProperty() { return RfqTextRow.idProperty; }
        protected getLocalTextPrefix() { return RfqTextRow.localTextPrefix; }
        protected getNameProperty() { return RfqTextRow.nameProperty; }
        protected getService() { return RfqTextService.baseUrl; }

        protected form = new RfqTextForm(this.idPrefix);

    }
}