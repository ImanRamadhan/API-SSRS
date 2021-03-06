
namespace SCMONLINE.Procurement {
    import fld = ProcurementRow.Fields;

    @Serenity.Decorators.registerClass()
    export class F16_WinnerDesignationDialog extends _Ext.DialogBase<ProcurementRow, any> {
        protected getFormKey() { return F16_WinnerDesignationForm.formKey; }
        protected getIdProperty() { return ProcurementRow.idProperty; }
        protected getLocalTextPrefix() { return ProcurementRow.localTextPrefix; }
        protected getNameProperty() { return ProcurementRow.nameProperty; }
        protected getService() { return F16_WinnerDesignationService.baseUrl; }

        protected form = new F16_WinnerDesignationForm(this.idPrefix);

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
                            F16_WinnerDesignationService.Submit({
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


            buttons.push({
                title: "Report [R7] - SPPL",
                cssClass: "'dd-note-button",
                icon: "fa-print",
                separator:true,
                onClick: () => {
                    this.get_entityId()
                    var a = '../Procurement/Report/ReportR7?';
                    //window.open(a, '_blank');
                    window.open(a + 'ProcurementId=' + this.get_entityId(), '_blank');
                    //window.location.href = a + this.get_entityId(), '_blank';

                }
            });
            return buttons;
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();


            //hide next button when flow passed
            if (this.entity.F16SubmitDate) {
                this.toolbar.findButton(".submit-button").remove();
                this.toolbar.findButton(".apply-changes-button").remove();
            }
        }

    }
}