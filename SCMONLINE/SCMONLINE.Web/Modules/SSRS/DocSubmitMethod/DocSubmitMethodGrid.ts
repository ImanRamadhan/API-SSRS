
namespace SCMONLINE.Procurement {
    import fld = DocSubmitMethodRow.Fields;

    @Serenity.Decorators.registerClass()
    export class DocSubmitMethodGrid extends _Ext.GridBase<DocSubmitMethodRow, any> {
        protected getColumnsKey() { return 'Procurement.DocSubmitMethod'; }
        protected getDialogType() { return DocSubmitMethodDialog; }
        protected getIdProperty() { return DocSubmitMethodRow.idProperty; }
        protected getLocalTextPrefix() { return DocSubmitMethodRow.localTextPrefix; }
        protected getService() { return DocSubmitMethodService.baseUrl; }

        constructor(container: JQuery, options) {
            super(container, options);
        }
    }
}