
namespace SCMONLINE.Administration {
    import fld = QueuedEmailRow.Fields;

    @Serenity.Decorators.registerClass()
    export class QueuedEmailDialog extends _Ext.DialogBase<QueuedEmailRow, any> {
        protected getFormKey() { return QueuedEmailForm.formKey; }
        protected getIdProperty() { return QueuedEmailRow.idProperty; }
        protected getLocalTextPrefix() { return QueuedEmailRow.localTextPrefix; }
        protected getNameProperty() { return QueuedEmailRow.nameProperty; }
        protected getService() { return QueuedEmailService.baseUrl; }

        protected form = new QueuedEmailForm(this.idPrefix);

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
                    title: Q.text('Kirim Ulang'),
                    cssClass: 'submit-button',
                    icon: 'fa-retweet text-green',
                    onClick: () => {
                        Q.confirm('Are you sure want to Repeat Send this Email?', () => {
                            QueuedEmailService.Submit({
                                EntityId: this.get_entityId(),
                                Entity: this.getSaveEntity()
                            }, response => {
                                Q.notifySuccess("Mail has been successfully Sent.");
                                this.reloadById();
                                });
                        });
                    }
                }
            );
            return buttons;
        }
    }
}