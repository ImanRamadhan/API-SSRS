
namespace SCMONLINE.Procurement {
    import fld = ProcParticipantItemRow.Fields;

    @Serenity.Decorators.registerClass()
    export class F6_ProcParticipantItemGrid extends _Ext.GridBase<ProcParticipantItemRow, any> {
        protected getColumnsKey() { return 'Procurement.F6_ProcParticipantItem'; }
        protected getDialogType() { return F6_ProcParticipantItemDialog; }
        protected getIdProperty() { return ProcParticipantItemRow.idProperty; }
        protected getLocalTextPrefix() { return ProcParticipantItemRow.localTextPrefix; }
        protected getService() { return F6_ProcParticipantItemService.baseUrl; }

        constructor(container: JQuery, options) {
            super(container, options);
        }
    }
}