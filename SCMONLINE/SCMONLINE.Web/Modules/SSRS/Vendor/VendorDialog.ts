
namespace SCMONLINE.Procurement {
    import fld = VendorRow.Fields;

    @Serenity.Decorators.registerClass()
    export class VendorDialog extends _Ext.DialogBase<VendorRow, any> {
        protected getFormKey() { return VendorForm.formKey; }
        protected getIdProperty() { return VendorRow.idProperty; }
        protected getLocalTextPrefix() { return VendorRow.localTextPrefix; }
        protected getNameProperty() { return VendorRow.nameProperty; }
        protected getService() { return VendorService.baseUrl; }

        protected form = new VendorForm(this.idPrefix);

    }
}