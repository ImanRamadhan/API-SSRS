
namespace SCMONLINE.Procurement {
    import fld = ProcurementRow.Fields;

    @Serenity.Decorators.registerClass()
    export class F1_BLSelectionAdjustmentGrid extends _Ext.GridBase<ProcurementRow, any> {
        protected getColumnsKey() { return 'Procurement.F1_BLSelectionAdjustment'; }
        protected getDialogType() { return F1_BLSelectionAdjustmentDialog; }
        protected getIdProperty() { return ProcurementRow.idProperty; }
        protected getLocalTextPrefix() { return ProcurementRow.localTextPrefix; }
        protected getService() { return F1_BLSelectionAdjustmentService.baseUrl; }

        constructor(container: JQuery, options) {
            super(container, options);
        }

        protected getButtons(): Serenity.ToolButton[] {

            var buttons = super.getButtons();

            //Remove a Button
            //buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);

            return buttons;
        }
    }
}