
namespace SCMONLINE.Procurement {
    import fld = PurchaseRequisitionRow.Fields;

    @Serenity.Decorators.registerClass()
    export class PurchaseRequisitionGrid extends _Ext.GridBase<PurchaseRequisitionRow, any> {
        protected getColumnsKey() { return 'Procurement.PurchaseRequisition'; }
        protected getDialogType() { return PurchaseRequisitionDialog; }
        protected getIdProperty() { return PurchaseRequisitionRow.idProperty; }
        protected getLocalTextPrefix() { return PurchaseRequisitionRow.localTextPrefix; }
        protected getService() { return PurchaseRequisitionService.baseUrl; }

        //private rowSelection: Serenity.GridRowSelectionMixin;


        constructor(container: JQuery, options) {
            super(container, options);
        }


        //protected createToolbarExtensions() {
        //    super.createToolbarExtensions();
        //    this.rowSelection = new Serenity.GridRowSelectionMixin(this);
        //}

        protected getButtons() {

            var buttons = super.getButtons();

            //Remove a Button
            //buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);

            buttons.push({
                title: 'Assign Buyer',
                cssClass: 'send-button',
                onClick: () => {
                    if (!this.onViewSubmit()) {
                        return;
                    }
                    var dialog = new BuyerAssignmentDialog();
                    dialog.rowSelection = this.rowSelection;
                    dialog.element.on('dialogclose', () => {
                        this.refresh();
                        dialog = null;
                    });
                    dialog.dialogOpen();
                }
            });

            return buttons;
        }

        //protected getButtons(): Serenity.ToolButton[] {

        //    // call base method to get list of buttons
        //    var buttons = super.getButtons();

        //    // add our import button
        //    buttons.push({
        //        title: 'Import From Excel',
        //        cssClass: 'export-xlsx-button',
        //        onClick: () => {
        //            // open import dialog, let it handle rest
        //            var dialog = new ProductExcelImportDialog();
        //            dialog.element.on('dialogclose', () => {
        //                this.refresh();
        //                dialog = null;
        //            });
        //            dialog.dialogOpen();
        //        }
        //    });
        
        protected getColumns() {
            var columns = super.getColumns();
            columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(() => this.rowSelection));
            return columns;
        }

        protected getViewOptions() {
            var opt = super.getViewOptions();
            opt.rowsPerPage = 2500;
            return opt;
        }
    }
}