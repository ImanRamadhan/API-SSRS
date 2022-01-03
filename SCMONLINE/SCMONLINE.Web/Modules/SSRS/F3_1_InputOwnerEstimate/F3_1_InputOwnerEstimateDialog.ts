
namespace SCMONLINE.Procurement {
    import fld = ProcurementRow.Fields;

    @Serenity.Decorators.registerClass()
    export class F3_1_InputOwnerEstimateDialog extends _Ext.DialogBase<ProcurementRow, any> {
        protected getFormKey() { return F3_1_InputOwnerEstimateForm.formKey; }
        protected getIdProperty() { return ProcurementRow.idProperty; }
        protected getLocalTextPrefix() { return ProcurementRow.localTextPrefix; }
        protected getNameProperty() { return ProcurementRow.nameProperty; }
        protected getService() { return F3_1_InputOwnerEstimateService.baseUrl; }

        protected form = new F3_1_InputOwnerEstimateForm(this.idPrefix);

        constructor(container: JQuery) {
            super(container);
            //  this.toolbar.element.remove();
            q.initDetailEditor(this, this.form.RfqItems as any);
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
                            F3_1_InputOwnerEstimateService.Submit({
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
            return buttons;
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            //hide next button when flow passed
            if (this.entity.F31SubmitDate) {
                this.toolbar.findButton(".submit-button").remove();
            }
        }

    }
}