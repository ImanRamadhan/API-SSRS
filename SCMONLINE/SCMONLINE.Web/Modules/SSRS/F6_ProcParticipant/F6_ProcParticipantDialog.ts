
namespace SCMONLINE.Procurement {
    import fld = ProcParticipantRow.Fields;

    @Serenity.Decorators.registerClass()
    export class F6_ProcParticipantDialog extends _Ext.DialogBase<ProcParticipantRow, any> {
        protected getFormKey() { return F6_ProcParticipantForm.formKey; }
        protected getIdProperty() { return ProcParticipantRow.idProperty; }
        protected getLocalTextPrefix() { return ProcParticipantRow.localTextPrefix; }
        protected getNameProperty() { return ProcParticipantRow.nameProperty; }
        protected getService() { return F6_ProcParticipantService.baseUrl; }

        protected form = new F6_ProcParticipantForm(this.idPrefix);
        public parentDialog: F6_OpenTenderDocumentDialog;
        //protected getToolbarButtons(): Serenity.ToolButton[] {
        //    return [];
        //}

        protected afterLoadEntity() {
            super.afterLoadEntity();

            //1 (Satu) Tahap - 2 (Dua) Sampul
            if (this.parentDialog.getEntity().DocSubmitMethodId == 2) {
                this.form.PriceDocumentFile.getGridField().toggle(false);
                this.form.PriceDocumentFile.element.find(".file-item").remove();
            }
        }
        protected onDialogOpen() {
            super.onDialogOpen();

            let columns = this.form.ProcParticipantItems.slickGrid.getColumns();
            //1 (Satu) Tahap - 2 (Dua) Sampul
            if (this.parentDialog.getEntity().DocSubmitMethodId == 2) {
                columns = columns.filter(f => f.field != ProcParticipantItemRow.Fields.BidPrice);
            }
            this.form.ProcParticipantItems.slickGrid.setColumns(columns);
            this.form.ProcParticipantItems.slickGrid.resizeCanvas();
        }

    }
}