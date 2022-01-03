
namespace SCMONLINE.Procurement {
    import fld = VendorRepresentativeRow.Fields;

    @Serenity.Decorators.registerClass()
    export class VendorRepresentativeGrid extends _Ext.GridBase<VendorRepresentativeRow, any> {
        protected getColumnsKey() { return 'Procurement.VendorRepresentative'; }
        protected getDialogType() { return VendorRepresentativeDialog; }
        protected getIdProperty() { return VendorRepresentativeRow.idProperty; }
        protected getLocalTextPrefix() { return VendorRepresentativeRow.localTextPrefix; }
        protected getService() { return VendorRepresentativeService.baseUrl; }

        constructor(container: JQuery, options) {
            super(container, options);
        }
    }
}