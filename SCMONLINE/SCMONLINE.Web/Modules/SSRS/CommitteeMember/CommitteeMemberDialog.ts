
namespace SCMONLINE.Procurement {
    import fld = CommitteeMemberRow.Fields;

    @Serenity.Decorators.registerClass()
    //    export class CommitteeMemberDialog extends _Ext.DialogBase<CommitteeMemberRow, any> {
    export class CommitteeMemberDialog extends Common.GridEditorDialog<CommitteeMemberRow> {
        protected getFormKey() { return CommitteeMemberForm.formKey; }
        //protected getIdProperty() { return CommitteeMemberRow.idProperty; }
        protected getLocalTextPrefix() { return CommitteeMemberRow.localTextPrefix; }
        //protected getService() { return CommitteeMemberService.baseUrl; }

        protected form = new CommitteeMemberForm(this.idPrefix);

        constructor() {
            super();
        }
        protected onDialogOpen() {
            super.onDialogOpen();
            if (this.isNew()) {
                //Committe Role Default Value
                this.form.CommitteeRoleId.value = 5;
            }
        }

    }
}