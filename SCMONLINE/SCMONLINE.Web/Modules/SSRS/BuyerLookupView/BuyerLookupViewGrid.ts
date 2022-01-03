
namespace SCMONLINE.Procurement {
    import fld = BuyerLookupViewRow.Fields;

    @Serenity.Decorators.registerClass()
    export class BuyerLookupViewGrid extends _Ext.GridBase<BuyerLookupViewRow, any> {
        protected getColumnsKey() { return 'Procurement.BuyerLookupView'; }
        protected getDialogType() { return BuyerLookupViewDialog; }
        protected getIdProperty() { return BuyerLookupViewRow.idProperty; }
        protected getLocalTextPrefix() { return BuyerLookupViewRow.localTextPrefix; }
        protected getService() { return BuyerLookupViewService.baseUrl; }

        constructor(container: JQuery, options) {
            super(container, options);
        }
    }
}