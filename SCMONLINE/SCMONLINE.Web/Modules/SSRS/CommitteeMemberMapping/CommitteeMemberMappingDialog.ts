
namespace SCMONLINE.Procurement {
    import fld = CommitteeMemberMappingRow.Fields;

    @Serenity.Decorators.registerClass()
    export class CommitteeMemberMappingDialog extends _Ext.DialogBase<CommitteeMemberMappingRow, any> {
        protected getFormKey() { return CommitteeMemberMappingForm.formKey; }
        protected getIdProperty() { return CommitteeMemberMappingRow.idProperty; }
        protected getLocalTextPrefix() { return CommitteeMemberMappingRow.localTextPrefix; }
        protected getNameProperty() { return CommitteeMemberMappingRow.nameProperty; }
        protected getService() { return CommitteeMemberMappingService.baseUrl; }

        protected form = new CommitteeMemberMappingForm(this.idPrefix);

    }
}