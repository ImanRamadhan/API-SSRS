
namespace SCMONLINE.Procurement {
    import fld = ProcParticipantRow.Fields;

    @Serenity.Decorators.registerClass()
    export class F6_ProcParticipantGrid extends _Ext.GridBase<ProcParticipantRow, any> {
        protected getColumnsKey() { return 'Procurement.F6_ProcParticipant'; }
        protected getDialogType() { return F6_ProcParticipantDialog; }
        protected getIdProperty() { return ProcParticipantRow.idProperty; }
        protected getLocalTextPrefix() { return ProcParticipantRow.localTextPrefix; }
        protected getService() { return F6_ProcParticipantService.baseUrl; }

        constructor(container: JQuery, options) {
            super(container, options);
        }
    }
}