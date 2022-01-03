
namespace SCMONLINE.Procurement {
    import fld = ProcParticipantItemRow.Fields;

    @Serenity.Decorators.registerClass()
    //export class F5_ProcParticipantItemDialog extends _Ext.DialogBase<ProcParticipantItemRow, any> {
    export class F5_ProcParticipantItemDialog extends Common.GridEditorDialog<ProcParticipantItemRow> {
        protected getFormKey() { return F5_ProcParticipantItemForm.formKey; }
        //protected getIdProperty() { return ProcParticipantItemRow.idProperty; }
        protected getLocalTextPrefix() { return ProcParticipantItemRow.localTextPrefix; }
        protected getNameProperty() { return ProcParticipantItemRow.nameProperty; }
        //protected getService() { return F5_ProcParticipantItemService.baseUrl; }

        protected form = new F5_ProcParticipantItemForm(this.idPrefix);

        public parentDialog: F5_SubmitTenderDocumentDialog;

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
            //this.parentDialog.adjustItemGrid(this.form.ProcParticipantVendorId.value, this.form.EvaluationConclusionItemId.value);
        }
    }
}