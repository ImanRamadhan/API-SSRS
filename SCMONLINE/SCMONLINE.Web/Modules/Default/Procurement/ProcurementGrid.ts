
namespace SCMONLINE.Default {
    import fld = ProcurementRow.Fields;

    @Serenity.Decorators.registerClass()
    export class ProcurementGrid extends _Ext.GridBase<ProcurementRow, any> {
        protected getColumnsKey() { return 'Default.Procurement'; }
        protected getDialogType() { return ProcurementDialog; }
        protected getIdProperty() { return ProcurementRow.idProperty; }
        protected getLocalTextPrefix() { return ProcurementRow.localTextPrefix; }
        protected getService() { return ProcurementService.baseUrl; }

        constructor(container: JQuery, options) {
            super(container, options);
        }
    }
}