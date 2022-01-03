
namespace SCMONLINE.Procurement {
    import fld = DocSubmitMethodRow.Fields;

    @Serenity.Decorators.registerClass()
    export class DocSubmitMethodDialog extends _Ext.DialogBase<DocSubmitMethodRow, any> {
        protected getFormKey() { return DocSubmitMethodForm.formKey; }
        protected getIdProperty() { return DocSubmitMethodRow.idProperty; }
        protected getLocalTextPrefix() { return DocSubmitMethodRow.localTextPrefix; }
        protected getNameProperty() { return DocSubmitMethodRow.nameProperty; }
        protected getService() { return DocSubmitMethodService.baseUrl; }

        protected form = new DocSubmitMethodForm(this.idPrefix);

    }
}