
namespace SCMONLINE.Procurement {
    import fld = ProcurementRow.Fields;

    @Serenity.Decorators.registerClass()
    export class F11_ProposeWinnerGrid extends _Ext.GridBase<ProcurementRow, any> {
        protected getColumnsKey() { return 'Procurement.F11_ProposeWinner'; }
        protected getDialogType() { return F11_ProposeWinnerDialog; }
        protected getIdProperty() { return ProcurementRow.idProperty; }
        protected getLocalTextPrefix() { return ProcurementRow.localTextPrefix; }
        protected getService() { return F11_ProposeWinnerService.baseUrl; }

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