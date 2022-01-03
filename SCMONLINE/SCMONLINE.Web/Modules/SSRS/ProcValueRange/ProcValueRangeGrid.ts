
namespace SCMONLINE.Procurement {
    import fld = ProcValueRangeRow.Fields;

    @Serenity.Decorators.registerClass()
    export class ProcValueRangeGrid extends _Ext.GridBase<ProcValueRangeRow, any> {
        protected getColumnsKey() { return 'Procurement.ProcValueRange'; }
        protected getDialogType() { return ProcValueRangeDialog; }
        protected getIdProperty() { return ProcValueRangeRow.idProperty; }
        protected getLocalTextPrefix() { return ProcValueRangeRow.localTextPrefix; }
        protected getService() { return ProcValueRangeService.baseUrl; }

        constructor(container: JQuery, options) {
            super(container, options);
        }
    }
}