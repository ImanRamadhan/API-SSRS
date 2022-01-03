
namespace SCMONLINE.Procurement {
    import fld = ProcurementRow.Fields;

    @Serenity.Decorators.registerClass()
    export class F10_NegotiationGrid extends _Ext.GridBase<ProcurementRow, any> {
        protected getColumnsKey() { return 'Procurement.F10_Negotiation'; }
        protected getDialogType() { return F10_NegotiationDialog; }
        protected getIdProperty() { return ProcurementRow.idProperty; }
        protected getLocalTextPrefix() { return ProcurementRow.localTextPrefix; }
        protected getService() { return F10_NegotiationService.baseUrl; }

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