namespace SCMONLINE.Procurement {

    @Serenity.Decorators.registerClass()
    export class OwnerEstimateImportDialog extends Serenity.PropertyDialog<any, any> {

        private form: OwnerEstimateImportForm;

        public rfqItemsEditor: RfqItemsEditor;

        constructor() {
            super();

            this.form = new OwnerEstimateImportForm(this.idPrefix);
        }

        protected getDialogTitle(): string {
            return "Excel Import";
        }

        protected getDialogButtons(): Serenity.DialogButton[] {
            return [
                {
                    text: 'Import',
                    click: () => {
                        if (!this.validateBeforeSave())
                            return;

                        if (this.form.FileName.value == null ||
                            Q.isEmptyOrNull(this.form.FileName.value.Filename)) {
                            Q.notifyError("Please select a file!");
                            return;
                        }

                        F3_1_InputOwnerEstimateService.ExcelImport({
                            FileName: this.form.FileName.value.Filename
                        }, response => {
                            console.log("response");
                            console.log(response);
                            Q.notifyInfo('Updated: ' + (response.Updated || 0));
                            //Q.notifyInfo(
                            //    'Inserted: ' + (response.Inserted || 0) +
                            //    ', Updated: ' + (response.Updated || 0));

                            if (response.ErrorList != null && response.ErrorList.length > 0) {
                                Q.notifyError(response.ErrorList.join(',\r\n '));
                            }

                            let rfqList = this.rfqItemsEditor.view.getItems();
                            var importedRfqList = response.ImportedData;
                            var i = 1;
                            rfqList.forEach(row => {
                                //sequence match
                                var matchExcelRow = importedRfqList[importedRfqList.map(function (e) { return e.Item; }).indexOf(row.Item)];
                                if (matchExcelRow) {
                                    row.OwnerEstimate = matchExcelRow.OwnerEstimate;
                                    row.OrderPriceUnit = matchExcelRow.OrderPriceUnit;
                                    row.OrderQuantity = matchExcelRow.OrderQuantity;
                                }
                                row["__id"] = "``" + i;
                                i++;

                            });
                            this.rfqItemsEditor.view.setItems(rfqList, false);

                            this.dialogClose();
                        });
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