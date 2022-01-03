
namespace SCMONLINE.Procurement {
    import fld = CurrencyRow.Fields;

    @Serenity.Decorators.registerClass()
    export class CurrencyGrid extends _Ext.GridBase<CurrencyRow, any> {
        protected getColumnsKey() { return 'Procurement.Currency'; }
        protected getDialogType() { return CurrencyDialog; }
        protected getIdProperty() { return CurrencyRow.idProperty; }
        protected getLocalTextPrefix() { return CurrencyRow.localTextPrefix; }
        protected getService() { return CurrencyService.baseUrl; }

        constructor(container: JQuery, options) {
            super(container, options);
        }
    }
}