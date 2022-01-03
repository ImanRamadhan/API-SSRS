
namespace SCMONLINE.Procurement {
    import fld = VendorLookupViewRow.Fields;

    @Serenity.Decorators.registerClass()
    export class VendorLookupViewDialog extends _Ext.DialogBase<VendorLookupViewRow, any> {
        protected getFormKey() { return VendorLookupViewForm.formKey; }
        protected getIdProperty() { return VendorLookupViewRow.idProperty; }
        protected getLocalTextPrefix() { return VendorLookupViewRow.localTextPrefix; }
        protected getNameProperty() { return VendorLookupViewRow.nameProperty; }
        protected getService() { return VendorLookupViewService.baseUrl; }

        protected form = new VendorLookupViewForm(this.idPrefix);

    }
}