
namespace SCMONLINE.Procurement {
    import fld = ProcurementRow.Fields;

    @Serenity.Decorators.registerClass()
    export class F13_ProcResultDecisionDialog extends _Ext.DialogBase<ProcurementRow, any> {
        protected getFormKey() { return F13_ProcResultDecisionForm.formKey; }
        protected getIdProperty() { return ProcurementRow.idProperty; }
        protected getLocalTextPrefix() { return ProcurementRow.localTextPrefix; }
        protected getNameProperty() { return ProcurementRow.nameProperty; }
        protected getService() { return F13_ProcResultDecisionService.baseUrl; }

        protected form = new F13_ProcResultDecisionForm(this.idPrefix);


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

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "apply-changes-button"), 1);
            buttons.push(
                {
                    title: Q.text('Approve'),
                    cssClass: 'approve-button',
                    icon: 'fa-check text-green',
                    onClick: () => {
                        if (!this.validateForm()) return;

                        Q.confirm('Are you sure want to approve?', () => {
                            F13_ProcResultDecisionService.Approve({
                                EntityId: this.get_entityId(),
                                Entity: this.getSaveEntity()
                            }, response => {
                                F13_ProcResultDecisionService.SendMailApprove({ EntityId: this.get_entityId() },
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
            buttons.push(
                {
                    title: Q.text('Reject'),
                    cssClass: 'reject-button',
                    icon: 'fa-close text-red',
                    onClick: () => {
                        if (!this.validateForm()) return;

                        Q.confirm('Are you sure want to reject?', () => {
                            F13_ProcResultDecisionService.Reject({
                                EntityId: this.get_entityId(),
                                Entity: this.getSaveEntity()
                            }, response => {
                                F13_ProcResultDecisionService.SendMailReject({ EntityId: this.get_entityId() },
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
            return buttons;
            //buttons.push({
            //    title: "Report R1",
            //    cssClass: "'dd-note-button",
            //    icon: "fa-print",
            //    separator: true,
            //    onClick: () => {
            //        this.get_entity
            //        this.get_entityId()
            //        var a = '/Procurement/Report/ReportR1?';
            //        //window.open(a, '_blank');
            //        window.open(a + 'ProcurementId=' + this.get_entityId(), '_blank');
            //        //window.location.href = a + this.get_entityId(), '_blank';

            //    }
            //});
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();
            //remove button after submision completed
            if (this.form.F13SubmitDate.value) {
                this.toolbar.findButton(".approve-button").remove();
                this.toolbar.findButton(".reject-button").remove();
            }
        }

    }
}