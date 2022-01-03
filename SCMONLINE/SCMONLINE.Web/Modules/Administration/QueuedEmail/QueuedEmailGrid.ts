
namespace SCMONLINE.Administration {
    import fld = QueuedEmailRow.Fields;

    @Serenity.Decorators.registerClass()
    export class QueuedEmailGrid extends _Ext.GridBase<QueuedEmailRow, any> {
        protected getColumnsKey() { return 'Administration.QueuedEmail'; }
        protected getDialogType() { return QueuedEmailDialog; }
        protected getIdProperty() { return QueuedEmailRow.idProperty; }
        protected getLocalTextPrefix() { return QueuedEmailRow.localTextPrefix; }
        protected getService() { return QueuedEmailService.baseUrl; }

        constructor(container: JQuery, options) {
            super(container, options);
        }
    }
}