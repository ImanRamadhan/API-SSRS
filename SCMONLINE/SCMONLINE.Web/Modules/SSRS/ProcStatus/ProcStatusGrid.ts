
namespace SCMONLINE.Procurement {
    import fld = ProcStatusRow.Fields;

    @Serenity.Decorators.registerClass()
    export class ProcStatusGrid extends _Ext.GridBase<ProcStatusRow, any> {
        protected getColumnsKey() { return 'Procurement.ProcStatus'; }
        protected getDialogType() { return ProcStatusDialog; }
        protected getIdProperty() { return ProcStatusRow.idProperty; }
        protected getLocalTextPrefix() { return ProcStatusRow.localTextPrefix; }
        protected getService() { return ProcStatusService.baseUrl; }

        constructor(container: JQuery, options) {
            super(container, options);
        }
    }
}