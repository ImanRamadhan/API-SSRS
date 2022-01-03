
namespace SCMONLINE.Procurement {
    import fld = VendorRepresentativeRow.Fields;

    @Serenity.Decorators.registerClass()
    //export class VendorRepresentativeDialog extends _Ext.DialogBase<VendorRepresentativeRow, any> {
    export class VendorRepresentativeDialog extends Common.GridEditorDialog<VendorRepresentativeRow> {
        protected getFormKey() { return VendorRepresentativeForm.formKey; }
        protected getIdProperty() { return VendorRepresentativeRow.idProperty; }
        protected getLocalTextPrefix() { return VendorRepresentativeRow.localTextPrefix; }
        protected getNameProperty() { return VendorRepresentativeRow.nameProperty; }
        protected getService() { return VendorRepresentativeService.baseUrl; }

        protected form = new VendorRepresentativeForm(this.idPrefix);

    }
}