
namespace SCMONLINE.Procurement {
    import fld = VendorAddressRow.Fields;

    @Serenity.Decorators.registerClass()
    export class VendorAddressGrid extends _Ext.GridBase<VendorAddressRow, any> {
        protected getColumnsKey() { return 'Procurement.VendorAddress'; }
        protected getDialogType() { return VendorAddressDialog; }
        protected getIdProperty() { return VendorAddressRow.idProperty; }
        protected getLocalTextPrefix() { return VendorAddressRow.localTextPrefix; }
        protected getService() { return VendorAddressService.baseUrl; }

        constructor(container: JQuery, options) {
            super(container, options);
        }
    }
}