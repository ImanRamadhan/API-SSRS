namespace SCMONLINE.Procurement {

    @Serenity.Decorators.registerClass()
    export class BidPriceImportDialog extends Serenity.PropertyDialog<any, any> {

        private form: BidPriceImportForm;

        public procParticipantItemsEditor: F5_ProcParticipantItemsEditor;

        constructor() {
            super();

            this.form = new BidPriceImportForm(this.idPrefix);
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

                        F5_SubmitTenderDocumentService.BidPriceImport({
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

                            let procParticipantItemList = this.procParticipantItemsEditor.view.getItems();
                            var importedProcParticipantItemList = response.ImportedData;
                            console.log(importedProcParticipantItemList);
                            var i = 1;
                            procParticipantItemList.forEach(row => {

                                //sequence match
                                var matchExcelRow = importedProcParticipantItemList[importedProcParticipantItemList.map(function (e) { return e.ItemSequence; }).indexOf(row.ItemSequence)];
                                if (matchExcelRow) {
                                    row.BidPrice = matchExcelRow.BidPrice;
                                }
                                row["__id"] = "``" + i;
                                i++;
                            });
                            this.procParticipantItemsEditor.view.setItems(procParticipantItemList, false);

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