
namespace SCMONLINE.Procurement {
    import fld = VendorRow.Fields;

    @Serenity.Decorators.registerClass()
    export class VendorGrid extends _Ext.GridBase<VendorRow, any> {
        protected getColumnsKey() { return 'Procurement.Vendor'; }
        protected getDialogType() { return VendorDialog; }
        protected getIdProperty() { return VendorRow.idProperty; }
        protected getLocalTextPrefix() { return VendorRow.localTextPrefix; }
        protected getService() { return VendorService.baseUrl; }

        constructor(container: JQuery, options) {
            super(container, options);
        }
    }
}