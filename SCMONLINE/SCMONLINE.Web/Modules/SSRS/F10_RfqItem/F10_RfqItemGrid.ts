
namespace SCMONLINE.Procurement {
    import fld = RfqItemRow.Fields;

    @Serenity.Decorators.registerClass()
    export class F10_RfqItemGrid extends _Ext.GridBase<RfqItemRow, any> {
        protected getColumnsKey() { return 'Procurement.F10_RfqItem'; }
        protected getDialogType() { return F10_RfqItemDialog; }
        protected getIdProperty() { return RfqItemRow.idProperty; }
        protected getLocalTextPrefix() { return RfqItemRow.localTextPrefix; }
        protected getService() { return F10_RfqItemService.baseUrl; }

        constructor(container: JQuery, options) {
            super(container, options);
        }
    }
}