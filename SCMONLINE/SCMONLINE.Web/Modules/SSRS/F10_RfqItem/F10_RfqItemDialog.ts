
namespace SCMONLINE.Procurement {
    import fld = RfqItemRow.Fields;

    @Serenity.Decorators.registerClass()
    export class F10_RfqItemDialog extends _Ext.DialogBase<RfqItemRow, any> {
        protected getFormKey() { return F10_RfqItemForm.formKey; }
        protected getIdProperty() { return RfqItemRow.idProperty; }
        protected getLocalTextPrefix() { return RfqItemRow.localTextPrefix; }
        protected getNameProperty() { return RfqItemRow.nameProperty; }
        protected getService() { return F10_RfqItemService.baseUrl; }

        protected form = new F10_RfqItemForm(this.idPrefix);
        public parentDialog: F10_NegotiationDialog;
    }
}