
namespace SCMONLINE.Procurement {
    import fld = ProcParticipantRow.Fields;

    @Serenity.Decorators.registerClass()
    //export class ProcParticipantDialog extends _Ext.DialogBase<ProcParticipantRow, any> {
    export class ProcParticipantDialog extends Common.GridEditorDialog<ProcParticipantRow> {
        protected getFormKey() { return ProcParticipantForm.formKey; }
        //protected getIdProperty() { return ProcParticipantRow.idProperty; }
        protected getLocalTextPrefix() { return ProcParticipantRow.localTextPrefix; }
        //protected getNameProperty() { return ProcParticipantRow.nameProperty; }
        //protected getService() { return ProcParticipantService.baseUrl; }

        protected form = new ProcParticipantForm(this.idPrefix);

        constructor() {
            super();

            this.form = new ProcParticipantForm(this.idPrefix);
            this.form.VendorId.changeSelect2(e => {
                //var vendorID = Q.toId(this.form.VendorID.value);
                var vendorId = this.form.VendorId.get_value();
                if (vendorId) {
                    this.form.VendorName.value = VendorRow.getLookup().itemById[vendorId].Name;
                    this.form.VendorPenaltyCode.value = VendorRow.getLookup().itemById[vendorId].PenaltyCode;
                    this.form.Qualification.value = VendorRow.getLookup().itemById[vendorId].Qualification;
                }
            });

            //this.form.Discount.addValidationRule(this.uniqueName, e => {
            //    var price = this.form.UnitPrice.value;
            //    var quantity = this.form.Quantity.value;
            //    var discount = this.form.Discount.value;
            //    if (price != null && quantity != null && discount != null &&
            //        discount > 0 && discount >= price * quantity) {
            //        return "Discount can't be higher than total price!";
            //    }
            //});
        }

        //protected onDialogOpen() {
        //    super.onDialogOpen();

        //    //if (this.isNew()) {
        //    //    this.form.
        //    //}

        //}
        //protected onDialogClose() {
        //    super.onDialogClose();

        //}


    }
}