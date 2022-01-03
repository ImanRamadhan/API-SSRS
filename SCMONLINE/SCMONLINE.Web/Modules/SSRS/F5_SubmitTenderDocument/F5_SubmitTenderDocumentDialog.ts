
namespace SCMONLINE.Procurement {
    import fld = ProcParticipantRow.Fields;

    @Serenity.Decorators.registerClass()
    export class F5_SubmitTenderDocumentDialog extends _Ext.DialogBase<ProcParticipantRow, any> {
        protected getFormKey() { return F5_SubmitTenderDocumentForm.formKey; }
        protected getIdProperty() { return ProcParticipantRow.idProperty; }
        protected getLocalTextPrefix() { return ProcParticipantRow.localTextPrefix; }
        protected getNameProperty() { return ProcParticipantRow.nameProperty; }
        protected getService() { return F5_SubmitTenderDocumentService.baseUrl; }

        protected form = new F5_SubmitTenderDocumentForm(this.idPrefix);

        constructor() {
            super();
            var tncButton = this.element.find("#tnc-button");
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

                        var dialog = new F5_TnCDialog();
                        dialog.parentDialog = this;
                        dialog.procParticipantEntity = this.entity;
                        dialog.dialogOpen();
                    }
                }
            );


            return buttons;
        }
        protected afterLoadEntity() {
            super.afterLoadEntity();

            //hide next button when flow passed
            if (this.entity.F5ParticipantSubmitDate) {
                this.toolbar.findButton(".submit-button").remove();
                this.toolbar.findButton(".apply-changes-button").remove();
            }

        }
        protected onDialogOpen() {
            super.onDialogOpen();
            this.form.ProcParticipantItems.slickGrid.resizeCanvas();
        }

        public reloadDialog() { this.reloadById(); }
    }
}