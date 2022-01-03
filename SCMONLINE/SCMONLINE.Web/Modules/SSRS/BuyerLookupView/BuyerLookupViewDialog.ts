
namespace SCMONLINE.Procurement {
    import fld = BuyerLookupViewRow.Fields;

    @Serenity.Decorators.registerClass()
    export class BuyerLookupViewDialog extends _Ext.DialogBase<BuyerLookupViewRow, any> {
        protected getFormKey() { return BuyerLookupViewForm.formKey; }
        protected getIdProperty() { return BuyerLookupViewRow.idProperty; }
        protected getLocalTextPrefix() { return BuyerLookupViewRow.localTextPrefix; }
        protected getNameProperty() { return BuyerLookupViewRow.nameProperty; }
        protected getService() { return BuyerLookupViewService.baseUrl; }

        protected form = new BuyerLookupViewForm(this.idPrefix);

    }
}