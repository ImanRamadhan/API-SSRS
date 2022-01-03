
namespace SCMONLINE.Procurement {
    import fld = PurchDocTextRefRow.Fields;

    @Serenity.Decorators.registerClass()
    export class PurchDocTextRefGrid extends _Ext.GridBase<PurchDocTextRefRow, any> {
        protected getColumnsKey() { return 'Procurement.PurchDocTextRef'; }
        protected getDialogType() { return PurchDocTextRefDialog; }
        protected getIdProperty() { return PurchDocTextRefRow.idProperty; }
        protected getLocalTextPrefix() { return PurchDocTextRefRow.localTextPrefix; }
        protected getService() { return PurchDocTextRefService.baseUrl; }

        constructor(container: JQuery, options) {
            super(container, options);
        }
    }
}