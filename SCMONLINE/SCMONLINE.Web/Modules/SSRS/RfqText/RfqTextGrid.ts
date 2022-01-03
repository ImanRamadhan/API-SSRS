
namespace SCMONLINE.Procurement {
    import fld = RfqTextRow.Fields;

    @Serenity.Decorators.registerClass()
    export class RfqTextGrid extends _Ext.GridBase<RfqTextRow, any> {
        protected getColumnsKey() { return 'Procurement.RfqText'; }
        protected getDialogType() { return RfqTextDialog; }
        protected getIdProperty() { return RfqTextRow.idProperty; }
        protected getLocalTextPrefix() { return RfqTextRow.localTextPrefix; }
        protected getService() { return RfqTextService.baseUrl; }

        constructor(container: JQuery, options) {
            super(container, options);
        }
    }
}