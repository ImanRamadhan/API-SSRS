
namespace SCMONLINE.Procurement {
    import fld = AddressRow.Fields;

    @Serenity.Decorators.registerClass()
    export class AddressGrid extends _Ext.GridBase<AddressRow, any> {
        protected getColumnsKey() { return 'Procurement.Address'; }
        protected getDialogType() { return AddressDialog; }
        protected getIdProperty() { return AddressRow.idProperty; }
        protected getLocalTextPrefix() { return AddressRow.localTextPrefix; }
        protected getService() { return AddressService.baseUrl; }

        constructor(container: JQuery, options) {
            super(container, options);
        }
    }
}