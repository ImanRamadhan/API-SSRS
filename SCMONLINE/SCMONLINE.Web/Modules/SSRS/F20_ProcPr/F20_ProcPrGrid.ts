
namespace SCMONLINE.Procurement {
    import fld = ProcPrRow.Fields;

    @Serenity.Decorators.registerClass()
    export class F20_ProcPrGrid extends _Ext.GridBase<ProcPrRow, any> {
        protected getColumnsKey() { return 'Procurement.F20_ProcPr'; }
        protected getDialogType() { return F20_ProcPrDialog; }
        protected getIdProperty() { return ProcPrRow.idProperty; }
        protected getLocalTextPrefix() { return ProcPrRow.localTextPrefix; }
        protected getService() { return F20_ProcPrService.baseUrl; }

        constructor(container: JQuery, options) {
            super(container, options);
        }
    }
}