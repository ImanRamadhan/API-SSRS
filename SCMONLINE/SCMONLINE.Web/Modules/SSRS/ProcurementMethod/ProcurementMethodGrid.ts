
namespace SCMONLINE.Procurement {
    import fld = ProcurementMethodRow.Fields;

    @Serenity.Decorators.registerClass()
    export class ProcurementMethodGrid extends _Ext.GridBase<ProcurementMethodRow, any> {
        protected getColumnsKey() { return 'Procurement.ProcurementMethod'; }
        protected getDialogType() { return ProcurementMethodDialog; }
        protected getIdProperty() { return ProcurementMethodRow.idProperty; }
        protected getLocalTextPrefix() { return ProcurementMethodRow.localTextPrefix; }
        protected getService() { return ProcurementMethodService.baseUrl; }

        constructor(container: JQuery, options) {
            super(container, options);
        }
    }
}