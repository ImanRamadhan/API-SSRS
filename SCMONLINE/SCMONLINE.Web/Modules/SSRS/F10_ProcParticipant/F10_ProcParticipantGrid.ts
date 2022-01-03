
namespace SCMONLINE.Procurement {

    @Serenity.Decorators.registerClass()
    export class F10_ProcParticipantGrid extends Serenity.EntityGrid<ProcParticipantRow, any> {
        protected getColumnsKey() { return 'Procurement.F10_ProcParticipant'; }
        protected getDialogType() { return F10_ProcParticipantDialog; }
        protected getIdProperty() { return ProcParticipantRow.idProperty; }
        protected getLocalTextPrefix() { return ProcParticipantRow.localTextPrefix; }
        protected getService() { return F10_ProcParticipantService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}