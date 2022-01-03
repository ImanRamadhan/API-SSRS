
namespace SCMONLINE.Procurement {
    import fld = PurchaseRequisitionRow.Fields;

    @Serenity.Decorators.registerClass()
    export class F20_PurchaseRequisitionTrackingGrid extends _Ext.GridBase<PurchaseRequisitionRow, any> {
        protected getColumnsKey() { return 'Procurement.F20_PurchaseRequisitionTracking'; }
        protected getDialogType() { return F20_PurchaseRequisitionTrackingDialog; }
        protected getIdProperty() { return PurchaseRequisitionRow.idProperty; }
        protected getLocalTextPrefix() { return PurchaseRequisitionRow.localTextPrefix; }
        protected getService() { return F20_PurchaseRequisitionTrackingService.baseUrl; }

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