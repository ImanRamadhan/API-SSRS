
namespace SCMONLINE.Procurement {
    import fld = ProcParticipantRow.Fields;
    @Serenity.Decorators.registerClass()
    export class F15_ObjectionProcessDialog extends _Ext.DialogBase<ProcParticipantRow, any> {
        protected getFormKey() { return F15_ObjectionProcessForm.formKey; }
        protected getIdProperty() { return ProcParticipantRow.idProperty; }
        protected getLocalTextPrefix() { return ProcParticipantRow.localTextPrefix; }
        protected getNameProperty() { return ProcParticipantRow.nameProperty; }
        protected getService() { return F15_ObjectionProcessService.baseUrl; }

        protected form = new F15_ObjectionProcessForm(this.idPrefix);
        constructor() {
            super();

            this.form.SubmitObjection.changeSelect2(e => {
                this.updateInterface();
            })
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
                            F15_ObjectionProcessService.Submit({
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
            if (this.entity.F15ParticipantSubmitDate) {
                this.toolbar.findButton(".submit-button").remove();
                this.toolbar.findButton(".apply-changes-button").remove();
            }

            this.form.ObjectionTerms.value = Administration.SettingRow.getLookup().itemById["objection_terms"].Value;
            this.updateInterface();
        }
        protected updateInterface() {
            super.updateInterface();
            if (this.form.SubmitObjection.get_value() == "true") {
                this.form.ObjectionTerms.element.parent().show();
                this.form.ObjectionDescription.element.parent().show();
            } else {
                this.form.ObjectionTerms.element.parent().hide();
                this.form.ObjectionDescription.element.parent().hide();
            }

        }
    }
}