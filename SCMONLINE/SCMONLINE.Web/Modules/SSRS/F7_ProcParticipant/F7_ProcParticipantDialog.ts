
namespace SCMONLINE.Procurement {
    import fld = ProcParticipantRow.Fields;

    @Serenity.Decorators.registerClass()
    export class F7_ProcParticipantDialog extends _Ext.DialogBase<ProcParticipantRow, any> {
        protected getFormKey() { return F7_ProcParticipantForm.formKey; }
        protected getIdProperty() { return ProcParticipantRow.idProperty; }
        protected getLocalTextPrefix() { return ProcParticipantRow.localTextPrefix; }
        protected getNameProperty() { return ProcParticipantRow.nameProperty; }
        protected getService() { return F7_ProcParticipantService.baseUrl; }

        protected form = new F7_ProcParticipantForm(this.idPrefix);
        public parentDialog: F7_TenderEvaluationDialog;
        constructor() {
            super();
            //Change when click dropdowntext evaluation conclution
            this.form.EvaluationConclusionId.changeSelect2(e => this.updateInterface());
        }
        //protected getToolbarButtons(): Serenity.ToolButton[] {
        //    return [];
        //}
        protected afterLoadEntity() {
            super.afterLoadEntity();
            //1 (Satu) Tahap - 2 (Dua) Sampul
            if (this.parentDialog.getEntity().DocSubmitMethodId == 2) {
                this.form.PriceDocumentFile.getGridField().toggle(false);
                this.form.PriceDocumentFile.element.find(".file-item").remove();
                //this.form.PriceDocumentFile.element.remove();
                //this.form.PriceDocumentFile.element.parent().toggle(false);
            }
        }

        protected updateInterface() {
            super.updateInterface()
            console.log("Apapun itu"+this.form.EvaluationConclusionId.get_value());
            //if (this.form.EvaluationConclusionId.get_value() == "No Quote") {
            if (this.form.EvaluationConclusionId.get_value() != 1) {
                this.form.QuoteDesc.getGridField().toggle(false);
                this.onDialogOpen();
            } else {
                //this.form.RfqItems.element.parent().parent().toggle(false);
                this.form.QuoteDesc.getGridField().toggle(true);
                this.onDialogOpen();
            }
        }

        protected onDialogOpen() {
            super.onDialogOpen();
            //need this to re-adjust detail grid, otherwise some column wouldn't shown
            //this.form.ProcParticipantItems.slickGrid.resizeCanvas();
            //this.form.QuoteDesc.getGridField().show(true);
        }
    }
}