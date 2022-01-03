
namespace SCMONLINE.Procurement {
    import fld = RfqItemTextRow.Fields;

    @Serenity.Decorators.registerClass()
    export class RfqItemTextGrid extends _Ext.GridBase<RfqItemTextRow, any> {
        protected getColumnsKey() { return 'Procurement.RfqItemText'; }
        protected getDialogType() { return RfqItemTextDialog; }
        protected getIdProperty() { return RfqItemTextRow.idProperty; }
        protected getLocalTextPrefix() { return RfqItemTextRow.localTextPrefix; }
        protected getService() { return RfqItemTextService.baseUrl; }

        constructor(container: JQuery, options) {
            super(container, options);
        }
    }
}