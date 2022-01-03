
namespace SCMONLINE.Procurement {
    import fld = CommitteeRoleRow.Fields;

    @Serenity.Decorators.registerClass()
    export class CommitteeRoleDialog extends _Ext.DialogBase<CommitteeRoleRow, any> {
        protected getFormKey() { return CommitteeRoleForm.formKey; }
        protected getIdProperty() { return CommitteeRoleRow.idProperty; }
        protected getLocalTextPrefix() { return CommitteeRoleRow.localTextPrefix; }
        protected getNameProperty() { return CommitteeRoleRow.nameProperty; }
        protected getService() { return CommitteeRoleService.baseUrl; }

        protected form = new CommitteeRoleForm(this.idPrefix);

    }
}