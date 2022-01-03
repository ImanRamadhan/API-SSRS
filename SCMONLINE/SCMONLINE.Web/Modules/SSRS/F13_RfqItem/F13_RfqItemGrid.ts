
namespace SCMONLINE.Procurement {
    import fld = RfqItemRow.Fields;

    @Serenity.Decorators.registerClass()
    export class F13_RfqItemGrid extends _Ext.GridBase<RfqItemRow, any> {
        protected getColumnsKey() { return 'Procurement.F13_RfqItem'; }
        protected getDialogType() { return F13_RfqItemDialog; }
        protected getIdProperty() { return RfqItemRow.idProperty; }
        protected getLocalTextPrefix() { return RfqItemRow.localTextPrefix; }
        protected getService() { return F13_RfqItemService.baseUrl; }

        constructor(container: JQuery, options) {
            super(container, options);
        }
    }
}