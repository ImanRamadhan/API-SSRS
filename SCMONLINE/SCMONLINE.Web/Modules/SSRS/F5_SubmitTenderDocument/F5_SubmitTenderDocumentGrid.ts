
namespace SCMONLINE.Procurement {
    import fld = ProcParticipantRow.Fields;

    @Serenity.Decorators.registerClass()
    export class F5_SubmitTenderDocumentGrid extends _Ext.GridBase<ProcParticipantRow, any> {
        protected getColumnsKey() { return 'Procurement.F5_SubmitTenderDocument'; }
        protected getDialogType() { return F5_SubmitTenderDocumentDialog; }
        protected getIdProperty() { return ProcParticipantRow.idProperty; }
        protected getLocalTextPrefix() { return ProcParticipantRow.localTextPrefix; }
        protected getService() { return F5_SubmitTenderDocumentService.baseUrl; }

        constructor(container: JQuery, options) {
            super(container, options);
        }

        protected getButtons(): Serenity.ToolButton[] {

            var buttons = super.getButtons();

            //Remove a Button
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);

            return buttons;
        }
    }
}