
namespace SCMONLINE.Procurement {
    import fld = ProcParticipantItemRow.Fields;

    @Serenity.Decorators.registerClass()
        //tambah ini
    //@Serenity.Decorators.filterable()
    //export class F9_ProcParticipantItemDialog extends _Ext.DialogBase<ProcParticipantItemRow, any> {
    export class F9_ProcParticipantItemDialog extends Common.GridEditorDialog<ProcParticipantItemRow> {
        //view: any;
        protected getFormKey() { return F9_ProcParticipantItemForm.formKey; }
        //protected getIdProperty() { return ProcParticipantItemRow.idProperty; }
        protected getLocalTextPrefix() { return ProcParticipantItemRow.localTextPrefix; }
        protected getNameProperty() { return ProcParticipantItemRow.nameProperty; }
        //protected getService() { return F9_ProcParticipantItemService.baseUrl; }

        protected form = new F9_ProcParticipantItemForm(this.idPrefix);

        public parentDialog: F9_PriceEvaluationDialog;

        //protected enableFiltering() {
        //    return true;
        //}

        //protected onViewSubmit() {

        //    this.view.beginUpdate();

        //    let filter = function filter(item, args) {
        //        var linha = (item as ProcParticipantItemRow);

        //        // filter logic
        //        //Sample filter (if the Value for column "CduCodigo" equals 3)
        //        if (item["BidPrice"] == "0")
        //            return true;
        //        console.log("Berhasil ga bro???");
        //        return false;
        //    }

        //    this.view.setFilter(filter);

        //    this.view.endUpdate();

        //    return true;
        //}

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