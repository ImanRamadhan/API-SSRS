
namespace SCMONLINE.Inbox {

    @Serenity.Decorators.registerClass()
    export class NotificationGrid extends _Ext.GridBase<NotificationRow, any> {
        protected getColumnsKey() { return 'Inbox.Notification'; }
        protected getDialogType() { return NotificationDialog; }
        protected getIdProperty() { return NotificationRow.idProperty; }
        protected getLocalTextPrefix() { return NotificationRow.localTextPrefix; }
        protected getService() { return NotificationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons() {
            var buttons = super.getButtons();
            buttons.splice(0, 4);

            return buttons;
        }
       

        protected getColumns() {
            let columns = super.getColumns();

            columns.splice(0, 3);
            columns.splice(1, 2);
            columns.splice(2, 3);

            return columns;
        }

    }
}