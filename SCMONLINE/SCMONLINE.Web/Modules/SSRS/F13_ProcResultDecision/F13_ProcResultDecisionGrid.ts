
namespace SCMONLINE.Procurement {
    import fld = ProcurementRow.Fields;

    @Serenity.Decorators.registerClass()
    export class F13_ProcResultDecisionGrid extends _Ext.GridBase<ProcurementRow, any> {
        protected getColumnsKey() { return 'Procurement.F13_ProcResultDecision'; }
        protected getDialogType() { return F13_ProcResultDecisionDialog; }
        protected getIdProperty() { return ProcurementRow.idProperty; }
        protected getLocalTextPrefix() { return ProcurementRow.localTextPrefix; }
        protected getService() { return F13_ProcResultDecisionService.baseUrl; }

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