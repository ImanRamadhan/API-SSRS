
namespace SCMONLINE.Procurement {
    import fld = ProcurementRow.Fields;

    @Serenity.Decorators.registerClass()
    //export class F9_PriceEvaluationDialog extends _Ext.DialogBase<ProcurementRow, any> {
    export class F9_PriceEvaluationDialog extends _Ext.DialogBase<ProcurementRow, any> {
        protected getFormKey() { return F9_PriceEvaluationForm.formKey; }
        protected getIdProperty() { return ProcurementRow.idProperty; }
        protected getLocalTextPrefix() { return ProcurementRow.localTextPrefix; }
        protected getNameProperty() { return ProcurementRow.nameProperty; }
        protected getService() { return F9_PriceEvaluationService.baseUrl; }

        protected form = new F9_PriceEvaluationForm(this.idPrefix);

        getToolbarButtons() {
            var buttons = super.getToolbarButtons();
            if (Q.indexOf(buttons, x => x.cssClass == "add-button") > -1) {
                buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);
            }
            if (Q.indexOf(buttons, x => x.cssClass == "delete-button") > -1) {
                buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);
            }
            if (Q.indexOf(buttons, x => x.cssClass == "save-and-close-button") > -1) {
                //it's used for pendingChangesConfirmation, we can't just remove the button
                var saveCloseIndex = Q.indexOf(buttons, x => x.cssClass == "save-and-close-button");
                buttons[saveCloseIndex].cssClass = buttons[saveCloseIndex].cssClass + " hide";
            }

            
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "apply-changes-button") + 1, 0,
                {
                    title: Q.text('Notifikasi Harga Penawaran '),
                    cssClass: 'submit-button',
                    icon: 'fa-play text-green',
                    onClick: () => {
                        Q.confirm('Are you sure want to submit?', () => {
                            F9_PriceEvaluationService.Submit({
                                EntityId: this.get_entityId(),
                                Entity: this.getSaveEntity()
                            }, response => {
                                F9_PriceEvaluationService.SendMail({ EntityId: this.get_entityId(), Entity: this.getSaveEntity() },
                                    response => {
                                        Q.notifySuccess("Procuremnt " + this.form.Title.value + " has been successfully Submitted.");
                                        this.reloadById();
                                    }
                                );
                            });
                        });
                    }
                }
            );
            buttons.push({
                title: "Report Evaluasi Harga Penawaran",
                cssClass: "'dd-note-button",
                icon: "fa-print",
                separator: true,
                onClick: () => {
                    //this.get_entity
                    this.get_entityId()
                    var a = '../Procurement/Report/EVALUASI_HARGA?';
                    //window.open(a, '_blank');
                    window.open(a + 'ProcurementId=' + this.get_entityId(), '_blank');
                    //window.location.href = a + this.get_entityId(), '_blank';

                }
            });
            return buttons;
        }
        constructor(container: JQuery) {
            super(container);

            this.form.ProcParticipantItems.parentDialog = this;
        }

        protected updateInterface() {
            super.updateInterface();

        }
        protected onDialogOpen() {
            super.onDialogOpen();
            //need this to re-adjust detail grid, otherwise some column wouldn't shown
            this.form.ProcParticipantItems.slickGrid.resizeCanvas();

        }
        protected afterLoadEntity() {
            super.afterLoadEntity();

            this.adjustItemGrid();

            //hide next button when flow passed
            if (this.entity.F9SubmitDate) {
                this.toolbar.findButton(".submit-button").remove();
                this.toolbar.findButton(".apply-changes-button").remove();
            }

        }



        public adjustItemGrid(changedVendorId?: string, evaluationConclusionItemId?: number) {
            var data = this.form.ProcParticipantItems.view.getItems();
            function uniqueBy(arr, prop) {
                return arr.reduce((a, d) => {
                    if (!a.includes(d[prop])) { a.push(d[prop]); }
                    return a;
                }, []);
            }
            //rank item
            var items = uniqueBy(data, "ItemSequence");
            let resultArr = [];
            items.forEach(item => {
                let filteredArr = data.filter(o => o.ItemSequence == item)
                //filteredArr.sort((a, b) => (a.BidPrice > b.BidPrice) ? 1 : ((b.BidPrice > a.BidPrice) ? -1 : 0))
                filteredArr.sort((a, b) =>
                    (a.BidPrice > b.BidPrice) ? 1 : ((b.BidPrice > a.BidPrice) ? -1 :
                        //if same price, sort by document submit date
                        (a.F5ParticipantSubmitDate > b.F5ParticipantSubmitDate) ? 1 : ((b.F5ParticipantSubmitDate > a.F5ParticipantSubmitDate) ? -1 : 0
                        )))
                
                console.log(filteredArr.length);
                for (let i = 0; i < filteredArr.length; i++) {
                    filteredArr[i].Rank = i + 1;
                    //contract type lumpsum
                    if (this.form.ContractTypeId.value == 1
                        && typeof evaluationConclusionItemId !== "undefined") {
                        //assign all item conclusion as winner based vendor
                        console.log("Apapunitubla");
                        console.log(evaluationConclusionItemId);
                        console.log(changedVendorId);
                        if (changedVendorId == filteredArr[i].VendorId
                            && evaluationConclusionItemId != 1 //winner
                        ) {
                            console.log(changedVendorId);
                            console.log(evaluationConclusionItemId);
                            console.log(filteredArr[i]);
                            filteredArr[i].EvaluationConclusionItemId = evaluationConclusionItemId;
                            filteredArr[i].EvaluationConclusionItemName = EvaluationConclusionItemRow.getLookup().itemById[evaluationConclusionItemId].Name;
                        } else {
                            filteredArr[i].EvaluationConclusionItemId = null;
                            filteredArr[i].EvaluationConclusionItemName = null;
                        }
                    }
                }
                resultArr = resultArr.concat(filteredArr)
            })
            this.form.ProcParticipantItems.view.setItems(data, true);
        }

        protected compare(a: ProcParticipantItemRow, b: ProcParticipantItemRow) {
            if (a.ItemSequence < b.ItemSequence)
                return -1;
            if (a.ItemSequence > b.ItemSequence)
                return 1;
            return 0;
        }
    }
}