
namespace SCMONLINE.Procurement {
    import fld = ProcParticipantRow.Fields;

    @Serenity.Decorators.registerClass()
    export class F8_ProcParticipantDialog extends _Ext.DialogBase<ProcParticipantRow, any> {
        protected getFormKey() { return F8_ProcParticipantForm.formKey; }
        protected getIdProperty() { return ProcParticipantRow.idProperty; }
        protected getLocalTextPrefix() { return ProcParticipantRow.localTextPrefix; }
        protected getNameProperty() { return ProcParticipantRow.nameProperty; }
        protected getService() { return F8_ProcParticipantService.baseUrl; }

        protected form = new F8_ProcParticipantForm(this.idPrefix);
        public parentDialog: F8_TechnicalClarificationDialog;
        //protected getToolbarButtons(): Serenity.ToolButton[] {
        //    return [];
        //}
        protected afterLoadEntity() {
            super.afterLoadEntity();
            //console.log("this.parentDialog.getEntity()");
            //console.log(this.parentDialog.getEntity());
            ////1 (Satu) Tahap - 2 (Dua) Sampul
            //if (this.parentDialog.getEntity().DocSubmitMethodId == 2) {
            //    this.form.PriceDocumentFile.getGridField().toggle(false);
            //    this.form.PriceDocumentFile.element.find(".file-item").remove();
            //    //this.form.PriceDocumentFile.element.remove();
            //    //this.form.PriceDocumentFile.element.parent().toggle(false);
            //}
        }

    }
}