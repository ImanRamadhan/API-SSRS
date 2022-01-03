///// <reference path="../../_Ext/Bases/DialogBase.ts" />
///// <reference path="../../_Ext/Bases/GridBase.ts" />

namespace SCMONLINE.Procurement {
    import fld = ProcurementRow.Fields;

    @Serenity.Decorators.registerClass()
    export class F6_OpenTenderDocumentDialog extends _Ext.DialogBase<ProcurementRow, any> {
        protected getFormKey() { return F6_OpenTenderDocumentForm.formKey; }
        protected getIdProperty() { return ProcurementRow.idProperty; }
        protected getLocalTextPrefix() { return ProcurementRow.localTextPrefix; }
        protected getNameProperty() { return ProcurementRow.nameProperty; }
        protected getService() { return F6_OpenTenderDocumentService.baseUrl; }

        public form = new F6_OpenTenderDocumentForm(this.idPrefix);
        public parentDialog: F6_OpenTenderDocumentDialog;
        constructor() {
            super();
            //Change when click dropdowntext evaluation conclution
            this.form.ProcRejectTender.changeSelect2(e => this.updateInterface());
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
                            F6_OpenTenderDocumentService.Submit({
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

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "reject-button") + 1, 0,
                {
                    title: Q.text('Reject'),
                    cssClass: 'reject',
                    icon: 'fa-times-circle text-red',
                    onClick: () => {
                        Q.confirm('Are you sure want to Reject?', () => {
                            F6_OpenTenderDocumentService.Submit({
                                EntityId: this.get_entityId(),
                                Entity: this.getSaveEntity()
                            }, response => {
                                F6_OpenTenderDocumentService.SendMailReject({ EntityId: this.get_entityId(), Entity: this.getSaveEntity() },
                                    response => {
                                        Q.notifySuccess("Procuremnt " + this.form.Title.value + " has been successfully Rejected.");
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
                columns = columns.filter(f => f.field != ProcParticipantRow.Fields.PriceDocumentName);
                columns = columns.filter(f => f.field != ProcParticipantRow.Fields.PriceDocumentFile);
            }
            this.form.ProcParticipant.slickGrid.setColumns(columns);
            this.form.ProcParticipant.slickGrid.resizeCanvas();


            //if (!this.form.F31SubmitDate.value) {
            //    Q.alert("Owner Estimate pengadaan ini belum diisi. <a href='/" + F3_1_InputOwnerEstimateService.baseUrl + "#edit/" + this.get_entityId() + "' target='_blank'>Isi Owner Estimate</a>", { htmlEncode: false });
            //    this.dialogClose();
            //}
        }

        protected updateInterface() {
            super.updateInterface()
            console.log("Apapun itu" + this.form.ProcRejectTender.get_value());
            //if (this.form.EvaluationConclusionId.get_value() == "No Quote") {
            if (this.form.ProcRejectTender.get_value() != 1) {
                this.form.ProcRejectTenderDesc.getGridField().toggle(true);
                this.toolbar.findButton(".reject").show();
                this.toolbar.findButton(".submit-button").hide();
                //this.onDialogOpen();
            } else {
                //this.form.RfqItems.element.parent().parent().toggle(false);
                this.form.ProcRejectTenderDesc.getGridField().toggle(false);
                this.toolbar.findButton(".reject").hide();
                this.toolbar.findButton(".submit-button").show();
                //this.onDialogOpen();
            }
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();
            this.toolbar.findButton(".reject").hide();
            this.toolbar.findButton(".submit-button").show();
            this.form.ProcRejectTenderDesc.getGridField().toggle(false);
            //hide next button when flow passed
            if (this.entity.F6SubmitDate) {
                this.toolbar.findButton(".submit-button").remove();
                this.toolbar.findButton(".apply-changes-button").remove();
            }
        }


        public getEntity(): ProcurementRow {
            return this.get_entity();
        }
    }
}