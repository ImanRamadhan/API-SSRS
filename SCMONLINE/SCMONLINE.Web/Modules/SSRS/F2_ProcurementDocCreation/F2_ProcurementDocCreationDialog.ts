
namespace SCMONLINE.Procurement {
    import fld = ProcurementRow.Fields;

    @Serenity.Decorators.registerClass()
    export class F2_ProcurementDocCreationDialog extends _Ext.DialogBase<ProcurementRow, any> {
        protected getFormKey() { return F2_ProcurementDocCreationForm.formKey; }
        protected getIdProperty() { return ProcurementRow.idProperty; }
        protected getLocalTextPrefix() { return ProcurementRow.localTextPrefix; }
        protected getNameProperty() { return ProcurementRow.nameProperty; }
        protected getService() { return F2_ProcurementDocCreationService.baseUrl; }

        protected form = new F2_ProcurementDocCreationForm(this.idPrefix);


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
                            F2_ProcurementDocCreationService.Submit({
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
            if (this.entity.F2SubmitDate) {
                this.toolbar.findButton(".submit-button").remove();
                this.toolbar.findButton(".apply-changes-button").remove();
            }
            //this.form.RequestTerms.value = Administration.SettingRow.getLookup().itemById["request_description"].Value;
            //this.updateInterface();
        }

        protected updateInterface() {
            super.updateInterface();
            this.form.RequestTerms.element.parent().show();
            //this.form.ObjectionDescription.element.parent().show();

            //if (this.form.SubmitObjection.get_value() == "true") {
            //    this.form.ObjectionTerms.element.parent().show();
            //    this.form.ObjectionDescription.element.parent().show();
            //} else {
            //    this.form.ObjectionTerms.element.parent().hide();
            //    this.form.ObjectionDescription.element.parent().hide();
            //}

        }
    }
}