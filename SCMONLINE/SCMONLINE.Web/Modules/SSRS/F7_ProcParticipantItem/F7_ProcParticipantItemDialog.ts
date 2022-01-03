
namespace SCMONLINE.Procurement {
    import fld = ProcParticipantItemRow.Fields;

    @Serenity.Decorators.registerClass()
    //export class F7_ProcParticipantItemDialog extends _Ext.DialogBase<ProcParticipantItemRow, any> {
    export class F7_ProcParticipantItemDialog extends Common.GridEditorDialog<ProcParticipantItemRow> {
        protected getFormKey() { return F7_ProcParticipantItemForm.formKey; }
        //protected getIdProperty() { return ProcParticipantItemRow.idProperty; }
        protected getIdProperty() { return "__id"; }
        protected getLocalTextPrefix() { return ProcParticipantItemRow.localTextPrefix; }
        protected getNameProperty() { return ProcParticipantItemRow.nameProperty; }
        //protected getService() { return F7_ProcParticipantItemService.baseUrl; }

        protected form = new F7_ProcParticipantItemForm(this.idPrefix);

        public parentDialog: F7_ProcParticipantItemDialog;

        protected afterLoadEntity() {
            super.afterLoadEntity();

            console.log("this.entity");
            console.log(this.entity);
            //1 (Satu) Tahap - 2 (Dua) Sampul
            if (this.entity.ProcurementDocSubmitMethodId == 2) {
                this.entity.BidPrice = null;
                this.form.BidPrice.value = null;
                this.form.BidPrice.getGridField().toggle(false);
            }
        }

        protected onSaveSuccess(response) {
            super.onSaveSuccess(response);
            //if (this.parentForm.form.ContractTypeId.value == 1) {

            //}

        }

        protected onDialogClose() {
            //this.parentDialog.adjustItemGrid(this.form.ProcParticipantVendorId.value, this.form.EvaluationConclusionItemId.value);
        }

        protected getToolbarButtons(): Serenity.ToolButton[] {
            return [];
        }

    }
}