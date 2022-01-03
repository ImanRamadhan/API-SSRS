
namespace SCMONLINE.Procurement {
    import fld = PurchDocTextRefRow.Fields;

    @Serenity.Decorators.registerClass()
    export class PurchDocTextRefDialog extends _Ext.DialogBase<PurchDocTextRefRow, any> {
        protected getFormKey() { return PurchDocTextRefForm.formKey; }
        protected getIdProperty() { return PurchDocTextRefRow.idProperty; }
        protected getLocalTextPrefix() { return PurchDocTextRefRow.localTextPrefix; }
        protected getNameProperty() { return PurchDocTextRefRow.nameProperty; }
        protected getService() { return PurchDocTextRefService.baseUrl; }

        protected form = new PurchDocTextRefForm(this.idPrefix);

    }
}