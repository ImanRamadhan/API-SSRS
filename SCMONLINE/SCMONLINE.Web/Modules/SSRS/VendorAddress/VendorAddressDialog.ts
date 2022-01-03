
namespace SCMONLINE.Procurement {
    import fld = VendorAddressRow.Fields;

    @Serenity.Decorators.registerClass()
    export class VendorAddressDialog extends _Ext.DialogBase<VendorAddressRow, any> {
        protected getFormKey() { return VendorAddressForm.formKey; }
        protected getIdProperty() { return VendorAddressRow.idProperty; }
        protected getLocalTextPrefix() { return VendorAddressRow.localTextPrefix; }
        protected getNameProperty() { return VendorAddressRow.nameProperty; }
        protected getService() { return VendorAddressService.baseUrl; }

        protected form = new VendorAddressForm(this.idPrefix);

    }
}