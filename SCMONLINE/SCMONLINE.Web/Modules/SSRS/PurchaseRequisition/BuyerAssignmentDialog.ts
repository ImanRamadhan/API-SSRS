namespace SCMONLINE.Procurement {

    @Serenity.Decorators.registerClass()
    export class BuyerAssignmentDialog extends Serenity.PropertyDialog<any, any> {

        private form: BuyerAssignmentForm;
        public rowSelection: Serenity.GridRowSelectionMixin;

        constructor() {
            super();

            this.form = new BuyerAssignmentForm(this.idPrefix);
        }

        protected getDialogTitle(): string {
            return "Buyer Assignment";
        }

        protected getDialogButtons(): Serenity.DialogButton[] {
            return [
                {
                    text: 'Assign',
                    click: () => {
                        if (!this.validateBeforeSave())
                            return;

                        if (this.form.BuyerId.value == null
                            //||Q.isEmptyOrNull(this.form.BuyerId.value)

                        ) {
                            Q.notifyError("Please select a buyer!");
                            return;
                        }

                        var action = new AssignBuyerBulkAction(this.form.BuyerId.value);
                        action.done = () => {
                            this.rowSelection.resetCheckedAndRefresh();
                            Q.reloadLookup('Procurement.BuyerLookup');
                            this.dialogClose();
                        }
                        action.execute(this.rowSelection.getSelectedKeys());
                        

                        //BuyerAssignmentService.ExcelImport({
                        //    FileName: this.form.FileName.value.Filename
                        //}, response => {
                        //    Q.notifyInfo(
                        //        'Inserted: ' + (response.Inserted || 0) +
                        //        ', Updated: ' + (response.Updated || 0));

                        //    if (response.ErrorList != null && response.ErrorList.length > 0) {
                        //        Q.notifyError(response.ErrorList.join(',\r\n '));
                        //    }

                        //    this.dialogClose();
                        //});
                    },
                },
                {
                    text: 'Cancel',
                    click: () => this.dialogClose()
                }
            ];
        }
    }
}