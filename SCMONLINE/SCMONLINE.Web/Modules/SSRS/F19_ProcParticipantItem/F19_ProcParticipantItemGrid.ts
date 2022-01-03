
namespace SCMONLINE.Procurement {
    import fld = ProcParticipantItemRow.Fields;

    @Serenity.Decorators.registerClass()
    export class F19_ProcParticipantItemGrid extends _Ext.GridBase<ProcParticipantItemRow, any> {
        protected getColumnsKey() { return 'Procurement.F19_ProcParticipantItem'; }
        protected getDialogType() { return F19_ProcParticipantItemDialog; }
        protected getIdProperty() { return ProcParticipantItemRow.idProperty; }
        protected getLocalTextPrefix() { return ProcParticipantItemRow.localTextPrefix; }
        protected getService() { return F19_ProcParticipantItemService.baseUrl; }

        constructor(container: JQuery, options) {
            super(container, options);
        }
    }
}