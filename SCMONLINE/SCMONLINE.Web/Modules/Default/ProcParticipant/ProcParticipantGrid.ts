
namespace SCMONLINE.Default {
    import fld = ProcParticipantRow.Fields;

    @Serenity.Decorators.registerClass()
    export class ProcParticipantGrid extends _Ext.GridBase<ProcParticipantRow, any> {
        protected getColumnsKey() { return 'Default.ProcParticipant'; }
        protected getDialogType() { return ProcParticipantDialog; }
        protected getIdProperty() { return ProcParticipantRow.idProperty; }
        protected getLocalTextPrefix() { return ProcParticipantRow.localTextPrefix; }
        protected getService() { return ProcParticipantService.baseUrl; }

        constructor(container: JQuery, options) {
            super(container, options);
        }
    }
}