
namespace SCMONLINE.Procurement {
    import fld = AddressRow.Fields;

    @Serenity.Decorators.registerClass()
    export class AddressDialog extends _Ext.DialogBase<AddressRow, any> {
        protected getFormKey() { return AddressForm.formKey; }
        protected getIdProperty() { return AddressRow.idProperty; }
        protected getLocalTextPrefix() { return AddressRow.localTextPrefix; }
        protected getNameProperty() { return AddressRow.nameProperty; }
        protected getService() { return AddressService.baseUrl; }

        protected form = new AddressForm(this.idPrefix);

    }
}