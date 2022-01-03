///// <reference path="../../_Ext/Bases/DialogBase.ts" />
///// <reference path="../../_Ext/Bases/GridBase.ts" />

namespace SCMONLINE.Procurement {
    import fld = ProcurementRow.Fields;

    @Serenity.Decorators.registerClass()
    export class F7_TenderEvaluationDialog extends _Ext.DialogBase<ProcurementRow, any> {
        protected getFormKey() { return F7_TenderEvaluationForm.formKey; }
        protected getIdProperty() { return ProcurementRow.idProperty; }
        protected getLocalTextPrefix() { return ProcurementRow.localTextPrefix; }
        protected getNameProperty() { return ProcurementRow.nameProperty; }
        protected getService() { return F7_TenderEvaluationService.baseUrl; }

        public form = new F7_TenderEvaluationForm(this.idPrefix);

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
                            F7_TenderEvaluationService.Submit({
                                EntityId: this.get_entityId(),
                                Entity: this.getSaveEntity()
                            }, response => {
                                F7_TenderEvaluationService.SendMail({ EntityId: this.get_entityId(), Entity: this.getSaveEntity() },
                                    response => {
                                        Q.notifySuccess("Procuremnt " + this.form.Title.value + " has been successfully Submitted.");
                                        this.reloadById();
                                    }
                                );
                                F7_TenderEvaluationService.SendCommitteeNotification({ EntityId: this.get_entityId(), Entity: this.getSaveEntity() },
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
                title: "Report [R4] - Berita Acara Pembukaan Dokumen Penawaran Sampul I (Administrasi dan Teknis)",
                cssClass: "'dd-note-button",
                icon: "fa-print",
                separator:true,
                onClick: () => {
                    this.get_entityId()
                    var a = '../Procurement/Report/ReportR4?';
                    //window.open(a, '_blank');
                    window.open(a + 'ProcurementId=' + this.get_entityId(), '_blank');
                    //window.location.href = a + this.get_entityId(), '_blank';

                }
            });

            return buttons;
        }
        protected onDialogOpen() {
            super.onDialogOpen();
            this.form.ProcParticipant.parentDialog = this;


            let columns = this.form.ProcParticipant.slickGrid.getColumns();
            //1 (Satu) Tahap - 2 (Dua) Sampul
            if (this.get_entity().DocSubmitMethodId == 2) {
                //columns = columns.filter(f => f.field != ProcParticipantRow.Fields.PriceDocumentName);
                columns = columns.filter(f => f.field != ProcParticipantRow.Fields.PriceDocumentFile);
            }

            console.log("this.entity.DocSubmitMethodId");
            console.log(this.entity.DocSubmitMethodId);

            this.form.ProcParticipant.slickGrid.setColumns(columns);

            this.form.ProcParticipant.slickGrid.resizeCanvas();
            //if (!this.form.F31SubmitDate.value) {
            //    Q.alert("Owner Estimate pengadaan ini belum diisi. <a href='/" + F3_1_InputOwnerEstimateService.baseUrl + "#edit/" + this.get_entityId() + "' target='_blank'>Isi Owner Estimate</a>", { htmlEncode: false });
            //    this.dialogClose();
            //}
        }
        protected afterLoadEntity() {
            super.afterLoadEntity();


            //hide next button when flow passed
            if (this.entity.F7SubmitDate) {
                this.toolbar.findButton(".submit-button").remove();
                this.toolbar.findButton(".apply-changes-button").remove();
            }
        }


        public getEntity(): ProcurementRow {
            return this.get_entity();
        }
    }
}