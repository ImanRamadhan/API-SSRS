
namespace SCMONLINE.Procurement {
    import fld = AddressTypeRow.Fields;

    @Serenity.Decorators.registerClass()
    export class AddressTypeGrid extends _Ext.GridBase<AddressTypeRow, any> {
        protected getColumnsKey() { return 'Procurement.AddressType'; }
        protected getDialogType() { return AddressTypeDialog; }
        protected getIdProperty() { return AddressTypeRow.idProperty; }
        protected getLocalTextPrefix() { return AddressTypeRow.localTextPrefix; }
        protected getService() { return AddressTypeService.baseUrl; }

        constructor(container: JQuery, options) {
            super(container, options);
        }
    }
}