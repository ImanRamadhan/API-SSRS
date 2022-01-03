
namespace SCMONLINE.Procurement {
    import fld = ProcParticipantRow.Fields;

    @Serenity.Decorators.registerClass()
    export class F19_ProcParticipantDialog extends _Ext.DialogBase<ProcParticipantRow, any> {
        protected getFormKey() { return F19_ProcParticipantForm.formKey; }
        protected getIdProperty() { return ProcParticipantRow.idProperty; }
        protected getLocalTextPrefix() { return ProcParticipantRow.localTextPrefix; }
        protected getNameProperty() { return ProcParticipantRow.nameProperty; }
        protected getService() { return F19_ProcParticipantService.baseUrl; }

        protected form = new F19_ProcParticipantForm(this.idPrefix);
        public parentDialog: F19_CommitteeApprovalDialog;

    }
}