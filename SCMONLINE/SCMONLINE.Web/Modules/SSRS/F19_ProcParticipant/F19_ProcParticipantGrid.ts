
namespace SCMONLINE.Procurement {
    import fld = ProcParticipantRow.Fields;

    @Serenity.Decorators.registerClass()
    export class F19_ProcParticipantGrid extends _Ext.GridBase<ProcParticipantRow, any> {
        protected getColumnsKey() { return 'Procurement.F19_ProcParticipant'; }
        protected getDialogType() { return F19_ProcParticipantDialog; }
        protected getIdProperty() { return ProcParticipantRow.idProperty; }
        protected getLocalTextPrefix() { return ProcParticipantRow.localTextPrefix; }
        protected getService() { return F19_ProcParticipantService.baseUrl; }

        constructor(container: JQuery, options) {
            super(container, options);
        }

    }
}