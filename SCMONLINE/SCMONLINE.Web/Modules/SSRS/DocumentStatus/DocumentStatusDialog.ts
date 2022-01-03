
namespace SCMONLINE.Procurement {
    import fld = DocumentStatusRow.Fields;

    @Serenity.Decorators.registerClass()
    export class DocumentStatusDialog extends _Ext.DialogBase<DocumentStatusRow, any> {
        protected getFormKey() { return DocumentStatusForm.formKey; }
        protected getIdProperty() { return DocumentStatusRow.idProperty; }
        protected getLocalTextPrefix() { return DocumentStatusRow.localTextPrefix; }
        protected getNameProperty() { return DocumentStatusRow.nameProperty; }
        protected getService() { return DocumentStatusService.baseUrl; }

        protected form = new DocumentStatusForm(this.idPrefix);

    }
}