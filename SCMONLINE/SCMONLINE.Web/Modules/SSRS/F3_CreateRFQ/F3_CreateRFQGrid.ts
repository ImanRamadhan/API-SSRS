
namespace SCMONLINE.Procurement {
    import fld = ProcurementRow.Fields;

    @Serenity.Decorators.registerClass()
    export class F3_CreateRFQGrid extends _Ext.GridBase<ProcurementRow, any> {
        protected getColumnsKey() { return 'Procurement.F3_CreateRFQ'; }
        protected getDialogType() { return F3_CreateRFQDialog; }
        protected getIdProperty() { return ProcurementRow.idProperty; }
        protected getLocalTextPrefix() { return ProcurementRow.localTextPrefix; }
        protected getService() { return F3_CreateRFQService.baseUrl; }

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