
namespace SCMONLINE.Procurement {
    import fld = ProcParticipantItemRow.Fields;

    @Serenity.Decorators.registerClass()
    //export class F10_ProcParticipantItemDialog extends _Ext.DialogBase<ProcParticipantItemRow, any> {
    export class F10_ProcParticipantItemDialog extends Common.GridEditorDialog<ProcParticipantItemRow> {
        protected getFormKey() { return F10_ProcParticipantItemForm.formKey; }
        //protected getIdProperty() { return ProcParticipantItemRow.idProperty; }
        protected getLocalTextPrefix() { return ProcParticipantItemRow.localTextPrefix; }
        protected getNameProperty() { return ProcParticipantItemRow.nameProperty; }
        //protected getService() { return F10_ProcParticipantItemService.baseUrl; }

        protected form = new F10_ProcParticipantItemForm(this.idPrefix);

        public parentDialog: F10_NegotiationDialog;

        protected afterLoadEntity() {
            super.afterLoadEntity();

            //this.form.Rank
        }

        protected onSaveSuccess(response) {
            super.onSaveSuccess(response);
            //if (this.parentForm.form.ContractTypeId.value == 1) {

            //}

        }

        protected onDialogClose() {
            this.parentDialog.adjustItemGrid(this.form.ProcParticipantVendorId.value, this.form.EvaluationConclusionItemId.value);
        }
    }
}