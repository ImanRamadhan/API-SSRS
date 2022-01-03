
namespace SCMONLINE.Procurement {
    import fld = DocumentStatusRow.Fields;

    @Serenity.Decorators.registerClass()
    export class DocumentStatusGrid extends _Ext.GridBase<DocumentStatusRow, any> {
        protected getColumnsKey() { return 'Procurement.DocumentStatus'; }
        protected getDialogType() { return DocumentStatusDialog; }
        protected getIdProperty() { return DocumentStatusRow.idProperty; }
        protected getLocalTextPrefix() { return DocumentStatusRow.localTextPrefix; }
        protected getService() { return DocumentStatusService.baseUrl; }

        constructor(container: JQuery, options) {
            super(container, options);
        }
    }
}