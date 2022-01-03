
namespace SCMONLINE.Administration {
    import fld = EmailAccountsRow.Fields;

    @Serenity.Decorators.registerClass()
    export class EmailAccountsDialog extends _Ext.DialogBase<EmailAccountsRow, any> {
        protected getFormKey() { return EmailAccountsForm.formKey; }
        protected getIdProperty() { return EmailAccountsRow.idProperty; }
        protected getLocalTextPrefix() { return EmailAccountsRow.localTextPrefix; }
        protected getNameProperty() { return EmailAccountsRow.nameProperty; }
        protected getService() { return EmailAccountsService.baseUrl; }

        protected form = new EmailAccountsForm(this.idPrefix);

    }
}