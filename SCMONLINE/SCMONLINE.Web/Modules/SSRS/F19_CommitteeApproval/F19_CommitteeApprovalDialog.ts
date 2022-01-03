
namespace SCMONLINE.Procurement {
    import fld = ProcurementRow.Fields;

    @Serenity.Decorators.registerClass()
    export class F19_CommitteeApprovalDialog extends _Ext.DialogBase<ProcurementRow, any> {
        protected getFormKey() { return F19_CommitteeApprovalForm.formKey; }
        protected getIdProperty() { return ProcurementRow.idProperty; }
        protected getLocalTextPrefix() { return ProcurementRow.localTextPrefix; }
        protected getNameProperty() { return ProcurementRow.nameProperty; }
        protected getService() { return F19_CommitteeApprovalService.baseUrl; }

        protected form = new F19_CommitteeApprovalForm(this.idPrefix);

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

            buttons.push(
                {
                    title: Q.text('Approve'),
                    cssClass: 'approve-button',
                    icon: 'fa-check text-green',
                    onClick: () => {
                        if (!this.validateForm()) return;

                        Q.confirm('Are you sure want to approve?', () => {
                            F19_CommitteeApprovalService.Approve({
                                EntityId: this.get_entityId(),
                                Entity: this.getSaveEntity()
                            }, response => {
                                //F19_CommitteeMemberService.Submit({ EntityId: this.get_entityId() },
                                //    response => {
                                Q.notifySuccess("Procuremnt " + this.form.ProcurementId.value + " has been successfully Submitted.");
                                this.reloadById();
                                //    }
                                //);
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
                            F19_CommitteeApprovalService.Reject({
                                EntityId: this.get_entityId(),
                                Entity: this.getSaveEntity()
                            }, response => {
                                //F19_CommitteeMemberService.SendMailReject({ EntityId: this.get_entityId() },
                                //    response => {
                                Q.notifyError("Procuremnt " + this.form.ProcurementId.value + " has been successfully Rejected.");
                                this.reloadById();
                                //}
                                //);
                            });
                        });
                    }
                }
            );

            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "apply-changes-button"), 1);

            return buttons;
        }


        private permissions: SCMONLINE.Administration.RoleCheckEditor;
        protected afterLoadEntity() {
            super.afterLoadEntity();
            //remove button after submision completed
            var permissions = null;
            //Console.log(this.permissions);
            this.form.CommitteeMember.view.getItems().forEach(x => {
                //console.log(x.ApprovalDate + ",Coba")
                //var auth = Authorization.userDefinition.UserId
                //console.log(auth)
                console.log(x.RoleId)
                console.log(Authorization.userDefinition.UserId);
                var request: Serenity.ListRequest;
                //request = {};
                //request.Criteria = Serenity.Criteria.and(request.Criteria,[["UserId"], "=", Authorization.userDefinition.UserId]);
                SCMONLINE.Administration.UserRoleService.List({
                    UserID: Authorization.userDefinition.UserId
                    
                }, response => {
                    response.Entities.forEach(item => {
                        if (item == x.RoleId) {
                            var a = x.ApprovalDate;
                            console.log(x.ApprovalDate)
                            console.log(item)
                            console.log(x)
                            if (x.ApprovalDate != null) {
                                this.toolbar.findButton(".approve-button").remove();
                                this.toolbar.findButton(".reject-button").remove();
                            }
                        }
                    });
                    //////response.Entities.forEach(item => {
                    //////    var user: UserRoleRow;
                    console.log(permissions);
                    //////})
                    
                });
                //if (Authorization.userDefinition.UserId == x.RoleId) {
                //    var a = x.RoleId;
                //    console.log("coba aja tes")
                //    console.log(x.ApprovalDate)
                //    console.log(a)
                //    if (x.ApprovalDate != null) {
                //        this.toolbar.findButton(".approve-button").remove();
                //        this.toolbar.findButton(".reject-button").remove();
                //    }
                //} 
                
                //this.permissions = new SCMONLINE.Administration.RoleCheckEditor(this.byId('Roles'));
                //SCMONLINE.Administration.UserRoleService.List({
                //    UserID: Authorization.userDefinition.UserId
                //UserID: this.options.byId('Roles')
                //UserID: this.options.userID
            }
                //, response => {
                //console.log(x.ApprovalDate);
                //        //this.permissions.value = response.Entities.map(x => x.toString());
                //        //console.log(a);
                //    if (x.ApprovalDate) {
                //        this.toolbar.findButton(".approve-button").remove();
                //        this.toolbar.findButton(".reject-button").remove();
                //    }
                ////});
                //}
            );
        }

        constructor(container: JQuery) {
            super(container);

            this.form.CommitteeMember.parentDialog = this;
        }

        protected updateInterface() {
            super.updateInterface();

        }
        protected onDialogOpen() {
            super.onDialogOpen();
            //need this to re-adjust detail grid, otherwise some column wouldn't shown
            this.form.CommitteeMember.slickGrid.resizeCanvas();

        }
        public reload() {
            //console.log("asldnasdpi");
            this.reloadById();
            //this.form.CommitteeMember.refresh();
            //this.form.CommitteeMember.view.refresh();
        }
    }
}