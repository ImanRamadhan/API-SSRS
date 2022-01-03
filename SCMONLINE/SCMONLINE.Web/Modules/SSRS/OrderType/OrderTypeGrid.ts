
namespace SCMONLINE.Procurement {
    import fld = OrderTypeRow.Fields;

    @Serenity.Decorators.registerClass()
    export class OrderTypeGrid extends _Ext.GridBase<OrderTypeRow, any> {
        protected getColumnsKey() { return 'Procurement.OrderType'; }
        protected getDialogType() { return OrderTypeDialog; }
        protected getIdProperty() { return OrderTypeRow.idProperty; }
        protected getLocalTextPrefix() { return OrderTypeRow.localTextPrefix; }
        protected getService() { return OrderTypeService.baseUrl; }

        constructor(container: JQuery, options) {
            super(container, options);
        }
    }
}