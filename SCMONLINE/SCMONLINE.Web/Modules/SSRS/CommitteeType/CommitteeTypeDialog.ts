
namespace SCMONLINE.Procurement {
    import fld = CommitteeTypeRow.Fields;

    @Serenity.Decorators.registerClass()
    export class CommitteeTypeDialog extends _Ext.DialogBase<CommitteeTypeRow, any> {
        protected getFormKey() { return CommitteeTypeForm.formKey; }
        protected getIdProperty() { return CommitteeTypeRow.idProperty; }
        protected getLocalTextPrefix() { return CommitteeTypeRow.localTextPrefix; }
        protected getNameProperty() { return CommitteeTypeRow.nameProperty; }
        protected getService() { return CommitteeTypeService.baseUrl; }

        protected form = new CommitteeTypeForm(this.idPrefix);

    }
}