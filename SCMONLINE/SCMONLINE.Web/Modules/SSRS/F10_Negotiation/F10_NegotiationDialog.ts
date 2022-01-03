
namespace SCMONLINE.Procurement {
    import fld = ProcurementRow.Fields;

    @Serenity.Decorators.registerClass()
    export class F10_NegotiationDialog extends _Ext.DialogBase<ProcurementRow, any> {
        protected getFormKey() { return F10_NegotiationForm.formKey; }
        protected getIdProperty() { return ProcurementRow.idProperty; }
        protected getLocalTextPrefix() { return ProcurementRow.localTextPrefix; }
        protected getNameProperty() { return ProcurementRow.nameProperty; }
        protected getService() { return F10_NegotiationService.baseUrl; }

        protected form = new F10_NegotiationForm(this.idPrefix);

        constructor() {
            super();
            this.form.ProcParticipantItems.parentDialog = this;
            this.form.ReviewOeRequired.changeSelect2(e => this.updateInterface());
        }
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
                    title: Q.text('Submit'),
                    cssClass: 'submit-button',
                    icon: 'fa-play text-green',
                    onClick: () => {
                        Q.confirm('Are you sure want to submit?', () => {
                            F10_NegotiationService.Submit({
                                EntityId: this.get_entityId(),
                                Entity: this.getSaveEntity()
                            }, response => {
                                Q.notifySuccess("Procuremnt " + this.form.Title.value + " has been successfully Submitted.");
                                this.reloadById();
                            });
                        });
                    }
                }
            );

            buttons.push({
                title: "Report [R5] - Berita Acara Evaluasi Nego",
                cssClass: "'dd-note-button",
                icon: "fa-print",
                separator: true,
                onClick: () => {
                    this.get_entityId()
                    var linkReportR5 = '../Procurement/Report/ReportR5?';
                    //window.open(a, '_blank');
                    window.open(linkReportR5 + 'ProcurementId=' + this.get_entityId(), '_blank');
                    //window.location.href = a + this.get_entityId(), '_blank';

                }
            });
            return buttons;
        }

        protected updateInterface() {
            super.updateInterface()

            if (this.form.ReviewOeRequired.get_value() == "true") {
                this.form.RfqItems.element.parent().parent().toggle(true);
                this.onDialogOpen();
            } else {
                this.form.RfqItems.element.parent().parent().toggle(false);
                this.onDialogOpen();
            }
        }

        protected onDialogOpen() {
            super.onDialogOpen();
            //need this to re-adjust detail grid, otherwise some column wouldn't shown
            this.form.ProcParticipantItems.slickGrid.resizeCanvas();
            this.form.RfqItems.slickGrid.resizeCanvas();

        }

        protected afterLoadEntity() {
            super.afterLoadEntity();
            //hide next button when flow passed
            if (this.entity.F10SubmitDate) {
                this.toolbar.findButton(".submit-button").remove();
                this.toolbar.findButton(".apply-changes-button").remove();
            }
            this.form.RfqItems.slickGrid.resizeCanvas();
            this.adjustItemGrid();
        }



        public adjustItemGrid(changedVendorId?: string, evaluationConclusionItemId?: number) {

            var data = this.form.ProcParticipantItems.view.getItems();
            console.log("TEST DEBUG DAta");
            console.log(data);
            function uniqueBy(arr, prop) {
                return arr.reduce((a, d) => {
                    if (!a.includes(d[prop])) { a.push(d[prop]); }
                    return a;
                }, []);
            }

            //rank item
            var items = uniqueBy(data, "ItemSequence");
            console.log(this.form.ContractTypeId.value);
            console.log(evaluationConclusionItemId);
            console.log(changedVendorId);
            let resultArr = [];
            items.forEach(item => {
                let filteredArr = data.filter(o => o.ItemSequence == item)
                console.log("TEST DEBUG");
                console.log(filteredArr);
                
                console.log(item);
                //filteredArr.sort((a, b) => (a.BidPrice > b.BidPrice) ? 1 : ((b.BidPrice > a.BidPrice) ? -1 : 0))
                filteredArr.sort((a, b) =>
                    (a.BidPrice > b.BidPrice) ? 1 : ((b.BidPrice > a.BidPrice) ? -1 :
                        //if same price, sort by document submit date
                        (a.F5ParticipantSubmitDate > b.F5ParticipantSubmitDate) ? 1 : ((b.F5ParticipantSubmitDate > a.F5ParticipantSubmitDate) ? -1 : 0
                        )))
                //console.log(a.BidPrice);
                //console.log(b.BidPrice);
                //console.log(a.F5ParticipantSubmitDate);
                //console.log(b.F5ParticipantSubmitDate);
                console.log("apapun");
                console.log(filteredArr.length);
                for (let i = 0; i < filteredArr.length; i++) {
                    filteredArr[i].Rank = i + 1;
                    console.log(this.form.ContractTypeId.value);
                    console.log("juga");
                    //contract type lumpsum
                    if (this.form.ContractTypeId.value == 1
                        && typeof evaluationConclusionItemId !== "undefined") {
                        //assign all item conclusion as winner based vendor
                        console.log("apa");
                        console.log(evaluationConclusionItemId);
                        console.log(filteredArr[i]);
                        if (changedVendorId == filteredArr[i].VendorId
                            && evaluationConclusionItemId == 1 //winner
                        ) {
                            console.log("itu");
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