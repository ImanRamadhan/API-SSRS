
namespace SCMONLINE.Procurement {
    import fld = ProcParticipantItemRow.Fields;

    @Serenity.Decorators.registerClass()
    export class F5_ProcParticipantItemGrid extends _Ext.GridBase<ProcParticipantItemRow, any> {
        protected getColumnsKey() { return 'Procurement.F5_ProcParticipantItem'; }
        protected getDialogType() { return F5_ProcParticipantItemDialog; }
        protected getIdProperty() { return ProcParticipantItemRow.idProperty; }
        protected getLocalTextPrefix() { return ProcParticipantItemRow.localTextPrefix; }
        protected getService() { return F5_ProcParticipantItemService.baseUrl; }

        constructor(container: JQuery, options) {
            super(container, options);
        }
    }
}