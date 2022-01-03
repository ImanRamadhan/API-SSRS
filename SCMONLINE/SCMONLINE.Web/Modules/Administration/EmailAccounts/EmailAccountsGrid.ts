
namespace SCMONLINE.Administration {
    import fld = EmailAccountsRow.Fields;

    @Serenity.Decorators.registerClass()
    export class EmailAccountsGrid extends _Ext.GridBase<EmailAccountsRow, any> {
        protected getColumnsKey() { return 'Administration.EmailAccounts'; }
        protected getDialogType() { return EmailAccountsDialog; }
        protected getIdProperty() { return EmailAccountsRow.idProperty; }
        protected getLocalTextPrefix() { return EmailAccountsRow.localTextPrefix; }
        protected getService() { return EmailAccountsService.baseUrl; }

        constructor(container: JQuery, options) {
            super(container, options);
        }
    }
}