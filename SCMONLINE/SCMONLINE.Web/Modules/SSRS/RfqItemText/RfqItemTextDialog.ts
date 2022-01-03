
namespace SCMONLINE.Procurement {
    import fld = RfqItemTextRow.Fields;

    @Serenity.Decorators.registerClass()
    export class RfqItemTextDialog extends _Ext.DialogBase<RfqItemTextRow, any> {
        protected getFormKey() { return RfqItemTextForm.formKey; }
        protected getIdProperty() { return RfqItemTextRow.idProperty; }
        protected getLocalTextPrefix() { return RfqItemTextRow.localTextPrefix; }
        protected getNameProperty() { return RfqItemTextRow.nameProperty; }
        protected getService() { return RfqItemTextService.baseUrl; }

        protected form = new RfqItemTextForm(this.idPrefix);

    }
}