
namespace SCMONLINE.Procurement {
    import fld = CommitteeMemberRow.Fields;

    @Serenity.Decorators.registerClass()
    export class F19_CommitteeMemberDialog extends _Ext.DialogBase<CommitteeMemberRow, any> {
        protected getFormKey() { return F19_CommitteeMemberForm.formKey; }
        protected getIdProperty() { return CommitteeMemberRow.idProperty; }
        protected getLocalTextPrefix() { return CommitteeMemberRow.localTextPrefix; }
        protected getNameProperty() { return CommitteeMemberRow.nameProperty; }
        protected getService() { return F19_CommitteeMemberService.baseUrl; }

        protected form = new F19_CommitteeMemberForm(this.idPrefix);
        public parentDialog: F19_CommitteeApprovalDialog;


        protected onSaveSuccess(response) {
            super.onSaveSuccess(response);
            //if (this.parentForm.form.ContractTypeId.value == 1) {
            //}

        }

        protected onDialogClose() {
            this.parentDialog.reload();
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

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "apply-changes-button"), 1);
            //buttons.push(
            //    {
            //        title: Q.text('Approve'),
            //        cssClass: 'approve-button',
            //        icon: 'fa-check text-green',
            //        onClick: () => {
            //            if (!this.validateForm()) return;

            //            Q.confirm('Are you sure want to approve?', () => {
            //                F19_CommitteeMemberService.Approve({
            //                    EntityId: this.get_entityId(),
            //                    Entity: this.getSaveEntity()
            //                }, response => {
            //                    //F19_CommitteeMemberService.SendMailApprove({ EntityId: this.get_entityId() },
            //                    //    response => {
            //                            Q.notifySuccess("Procuremnt " + this.form.ProcurementId.value + " has been successfully Submitted.");
            //                            this.reloadById();
            //                    //    }
            //                    //);
            //                });

            //            });
            //        }
            //    }
            //);
            //buttons.push(
            //    {
            //        title: Q.text('Reject'),
            //        cssClass: 'reject-button',
            //        icon: 'fa-close text-red',
            //        onClick: () => {
            //            if (!this.validateForm()) return;

            //            Q.confirm('Are you sure want to reject?', () => {
            //                F19_CommitteeMemberService.Reject({
            //                    EntityId: this.get_entityId(),
            //                    Entity: this.getSaveEntity()
            //                }, response => {
            //                    //F19_CommitteeMemberService.SendMailReject({ EntityId: this.get_entityId() },
            //                    //    response => {
            //                            Q.notifySuccess("Procuremnt " + this.form.ProcurementId.value + " has been successfully Submitted.");
            //                            this.reloadById();
            //                        //}
            //                    //);
            //                });
            //            });
            //        }
            //    }
            //);
            return buttons;
        }


        protected afterLoadEntity() {
            super.afterLoadEntity();
            //remove button after submision completed
            if (this.form.ApprovalDate.value) {
                this.toolbar.findButton(".approve-button").remove();
                this.toolbar.findButton(".reject-button").remove();
            }
        }

    }
}