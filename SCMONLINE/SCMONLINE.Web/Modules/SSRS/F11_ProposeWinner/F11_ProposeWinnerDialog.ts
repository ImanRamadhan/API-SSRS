
namespace SCMONLINE.Procurement {
    import fld = ProcurementRow.Fields;

    @Serenity.Decorators.registerClass()
    export class F11_ProposeWinnerDialog extends _Ext.DialogBase<ProcurementRow, any> {
        protected getFormKey() { return F11_ProposeWinnerForm.formKey; }
        protected getIdProperty() { return ProcurementRow.idProperty; }
        protected getLocalTextPrefix() { return ProcurementRow.localTextPrefix; }
        protected getNameProperty() { return ProcurementRow.nameProperty; }
        protected getService() { return F11_ProposeWinnerService.baseUrl; }

        protected form = new F11_ProposeWinnerForm(this.idPrefix);
        //public parentDialog: F11_ProposeWinnerDialog;
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
                            F11_ProposeWinnerService.Submit({
                                EntityId: this.get_entityId(),
                                //Entity: this.entity.ProcAgreement,
                                Entity: this.getSaveEntity()
                            }, response => {
                                F11_ProposeWinnerService.SendMail({ EntityId: this.get_entityId(), Entity: this.getSaveEntity()},
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
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "reject-button") + 1, 0,
                {
                    title: Q.text('Reject'),
                    cssClass: 'reject',
                    icon: 'fa-times-circle text-red',
                    onClick: () => {
                        Q.confirm('Are you sure want to Reject?', () => {
                            F11_ProposeWinnerService.Submit({
                                EntityId: this.get_entityId(),
                                Entity: this.getSaveEntity()
                            }, response => {
                                F11_ProposeWinnerService.SendMailReject({ EntityId: this.get_entityId(), Entity: this.getSaveEntity() },
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
                title: "Report [R6] - Berita Acara Hasil Pengadaan",
                cssClass: "'dd-note-button",
                icon: "fa-print",
                separator: true,
                onClick: () => {
                    this.get_entityId()
                    var a = '../Procurement/Report/ReportR6?';
                    //window.open(a, '_blank');
                    window.open(a + 'ProcurementId=' + this.get_entityId(), '_blank');
                    //window.location.href = a + this.get_entityId(), '_blank';

                }
            });
            return buttons;
        }

        protected updateInterface() {
            super.updateInterface()
            //console.log("Apapun itu" + this.form.ProcRejectTender.get_value());
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
            if (this.entity.F11SubmitDate) {
                this.toolbar.findButton(".submit-button").remove();
                this.toolbar.findButton(".apply-changes-button").remove();
            }
        }

    }
}