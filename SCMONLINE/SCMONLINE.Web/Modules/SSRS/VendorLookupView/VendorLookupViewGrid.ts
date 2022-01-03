
namespace SCMONLINE.Procurement {
    import fld = VendorLookupViewRow.Fields;

    @Serenity.Decorators.registerClass()
    export class VendorLookupViewGrid extends _Ext.GridBase<VendorLookupViewRow, any> {
        protected getColumnsKey() { return 'Procurement.VendorLookupView'; }
        protected getDialogType() { return VendorLookupViewDialog; }
        protected getIdProperty() { return VendorLookupViewRow.idProperty; }
        protected getLocalTextPrefix() { return VendorLookupViewRow.localTextPrefix; }
        protected getService() { return VendorLookupViewService.baseUrl; }

        constructor(container: JQuery, options) {
            super(container, options);
        }
    }
}