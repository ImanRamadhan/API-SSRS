
namespace SCMONLINE.Default {
    import fld = ProcParticipantItemRow.Fields;

    @Serenity.Decorators.registerClass()
    export class ProcParticipantItemGrid extends _Ext.GridBase<ProcParticipantItemRow, any> {
        protected getColumnsKey() { return 'Default.ProcParticipantItem'; }
        protected getDialogType() { return ProcParticipantItemDialog; }
        protected getIdProperty() { return ProcParticipantItemRow.idProperty; }
        protected getLocalTextPrefix() { return ProcParticipantItemRow.localTextPrefix; }
        protected getService() { return ProcParticipantItemService.baseUrl; }

        constructor(container: JQuery, options) {
            super(container, options);
        }
    }
}