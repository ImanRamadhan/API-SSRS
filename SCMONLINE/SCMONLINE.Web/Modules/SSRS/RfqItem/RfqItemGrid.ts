
namespace SCMONLINE.Procurement {
    import fld = RfqItemRow.Fields;

    @Serenity.Decorators.registerClass()
    export class RfqItemGrid extends _Ext.GridBase<RfqItemRow, any> {
        protected getColumnsKey() { return 'Procurement.RfqItem'; }
        protected getDialogType() { return RfqItemDialog; }
        protected getIdProperty() { return RfqItemRow.idProperty; }
        protected getLocalTextPrefix() { return RfqItemRow.localTextPrefix; }
        protected getService() { return RfqItemService.baseUrl; }

        constructor(container: JQuery, options) {
            super(container, options);
        }
    }
}