namespace SCMONLINE.Procurement {
    //var F5_TnCMessageTemplate = require('F5_TnCMessageTemplate.html').default;

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.maximizable()
    @Serenity.Decorators.resizable()
    @Serenity.Decorators.filterable()
    @Serenity.Decorators.responsive()

    //export class F5_TnCDialog extends Serenity.PropertyDialog<any, any> {
    export class F5_TnCDialog extends Serenity.TemplatedDialog<any> {
        private form: F5_TnCForm;
        //public procurementForm: F5_SubmitTenderDocumentForm;
        public procParticipantEntity: ProcParticipantRow;
        public parentDialog: F5_SubmitTenderDocumentDialog;

        constructor() {
            super();
            this.form = new F5_TnCForm(this.idPrefix);


            usingJsRender();

            this.element.find("#tnc-button").click(()=> {
                var isTncChecked = this.element.find("#tnc-checkbox").prop("checked");
                if (!isTncChecked)
                    return;
                
                F5_SubmitTenderDocumentService.Submit({
                    EntityId: this.procParticipantEntity.ProcParticipantId,
                    Entity: this.procParticipantEntity
                }, response => {
                    Q.notifySuccess("Procurement document has been successfully Submitted.");

                    this.parentDialog.reloadDialog();
                    this.dialogClose();
                });
            });

        }

        protected getDialogTitle(): string {
            return "Terms & Conditions";
        }

        /**
         * Here we override loadInitialEntity method to set value for "DisplayFieldValue" field.
         * If this was an EntityDialog, your field value would be originating from server side entity.
         */
        //protected loadInitialEntity() {
        //    this.propertyGrid.load({
        //        TnCDescription: 'This content comes from <b>the value</b> of <em>DisplayFieldValue</em> field.'
        //    });
        //}

        //protected getDialogButtons(): Serenity.DialogButton[] {
        //    return [
        //        {
        //            text: 'Submit',
        //            click: () => {
        //                //if (!this.validateBeforeSave())
        //                //    return;

        //                //if (this.form.FileName.value == null ||
        //                //    Q.isEmptyOrNull(this.form.FileName.value.Filename)) {
        //                //    Q.notifyError("Please select a file!");
        //                //    return;
        //                //}

        //                //F3_1_InputOwnerEstimateService.ExcelImport({
        //                //    FileName: this.form.FileName.value.Filename
        //                //}, response => {
        //                //    console.log("response");
        //                //    console.log(response);
        //                //    Q.notifyInfo('Updated: ' + (response.Updated || 0));
        //                //    //Q.notifyInfo(
        //                //    //    'Inserted: ' + (response.Inserted || 0) +
        //                //    //    ', Updated: ' + (response.Updated || 0));

        //                //    if (response.ErrorList != null && response.ErrorList.length > 0) {
        //                //        Q.notifyError(response.ErrorList.join(',\r\n '));
        //                //    }

        //                //    let rfqList = this.rfqItemsEditor.view.getItems();
        //                //    var importedRfqList = response.ImportedData;
        //                //    rfqList.forEach(row => {
        //                //        //sequence match
        //                //        var matchExcelRow = importedRfqList[importedRfqList.map(function (e) { return e.Item; }).indexOf(row.Item)];
        //                //        if (matchExcelRow) {
        //                //            row.OwnerEstimate = matchExcelRow.OwnerEstimate;
        //                //        }
        //                //    });
        //                //    this.rfqItemsEditor.view.setItems(rfqList, false);

        //                //    this.dialogClose();
        //                //});
        //            },
        //        },
        //        {
        //            text: 'Cancel',
        //            click: () => this.dialogClose()
        //        }
        //    ];
        //}
        protected onDialogOpen() {
            super.onDialogOpen();
            var tncDescription = this.element.find("#tnc-description");
            tncDescription.html(
                Q.jsRender(tncDescription.html(), this.procParticipantEntity)
            );
            //this.element.html(
            //    Q.jsRender(this.element.html(), this.procParticipantEntity)
            //);


            //strange behaviour jquery ui. content always to top on initial load.
            //add this to manually scroll to top
            this.element.parent().parent().find('.s-Procurement-F5_TnCDialog .ui-widget-content').scrollTop(0);
        }

    }
}