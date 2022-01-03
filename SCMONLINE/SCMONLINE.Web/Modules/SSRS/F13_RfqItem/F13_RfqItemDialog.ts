
namespace SCMONLINE.Procurement {
    import fld = RfqItemRow.Fields;

    @Serenity.Decorators.registerClass()
    export class F13_RfqItemDialog extends _Ext.DialogBase<RfqItemRow, any> {
        protected getFormKey() { return F13_RfqItemForm.formKey; }
        protected getIdProperty() { return RfqItemRow.idProperty; }
        protected getLocalTextPrefix() { return RfqItemRow.localTextPrefix; }
        protected getNameProperty() { return RfqItemRow.nameProperty; }
        protected getService() { return F13_RfqItemService.baseUrl; }

        protected form = new F13_RfqItemForm(this.idPrefix);

    }
}