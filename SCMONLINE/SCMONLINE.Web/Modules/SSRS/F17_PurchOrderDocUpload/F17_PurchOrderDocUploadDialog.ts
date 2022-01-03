
namespace SCMONLINE.Procurement {
    import fld = ProcurementRow.Fields;

    @Serenity.Decorators.registerClass()
    export class F17_PurchOrderDocUploadDialog extends _Ext.DialogBase<ProcurementRow, any> {
        protected getFormKey() { return F17_PurchOrderDocUploadForm.formKey; }
        protected getIdProperty() { return ProcurementRow.idProperty; }
        protected getLocalTextPrefix() { return ProcurementRow.localTextPrefix; }
        protected getNameProperty() { return ProcurementRow.nameProperty; }
        protected getService() { return F17_PurchOrderDocUploadService.baseUrl; }

        protected form = new F17_PurchOrderDocUploadForm(this.idPrefix);

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
                            F17_PurchOrderDocUploadService.Submit({
                                EntityId: this.get_entityId(),
                                Entity: this.getSaveEntity()
                            }, response => {
                                Q.notifySuccess("Data has been successfully Submitted.");
                                this.reloadById();
                            });
                        });
                    }
                }
            );

            return buttons;
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();


            //hide next button when flow passed
            if (this.entity.F17SubmitDate) {
                this.toolbar.findButton(".submit-button").remove();
                this.toolbar.findButton(".apply-changes-button").remove();
            }
        }


    }
}