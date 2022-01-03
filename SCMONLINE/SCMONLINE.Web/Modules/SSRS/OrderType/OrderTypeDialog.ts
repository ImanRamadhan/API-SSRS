
namespace SCMONLINE.Procurement {
    import fld = OrderTypeRow.Fields;

    @Serenity.Decorators.registerClass()
    export class OrderTypeDialog extends _Ext.DialogBase<OrderTypeRow, any> {
        protected getFormKey() { return OrderTypeForm.formKey; }
        protected getIdProperty() { return OrderTypeRow.idProperty; }
        protected getLocalTextPrefix() { return OrderTypeRow.localTextPrefix; }
        protected getNameProperty() { return OrderTypeRow.nameProperty; }
        protected getService() { return OrderTypeService.baseUrl; }

        protected form = new OrderTypeForm(this.idPrefix);

    }
}