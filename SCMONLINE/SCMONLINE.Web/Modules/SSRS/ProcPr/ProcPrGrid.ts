
namespace SCMONLINE.Procurement {
    import fld = ProcPrRow.Fields;

    @Serenity.Decorators.registerClass()
    export class ProcPrGrid extends _Ext.GridBase<ProcPrRow, any> {
        protected getColumnsKey() { return 'Procurement.ProcPr'; }
        protected getDialogType() { return ProcPrDialog; }
        protected getIdProperty() { return ProcPrRow.idProperty; }
        protected getLocalTextPrefix() { return ProcPrRow.localTextPrefix; }
        protected getService() { return ProcPrService.baseUrl; }

        constructor(container: JQuery, options) {
            super(container, options);
        }
    }
}