/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace SCMONLINE.Procurement {

    @Serenity.Decorators.registerClass()
    export class F19_ProcParticipantsEditor extends Common.GridEditorBase<ProcParticipantRow> {
        protected getColumnsKey() { return "Procurement.F19_ProcParticipant"; }
        protected getDialogType() { return F19_ProcParticipantDialog; }
        protected getLocalTextPrefix() { return ProcParticipantRow.localTextPrefix; }

        public parentDialog: F19_CommitteeApprovalDialog;

        constructor(container: JQuery) {
            super(container);

            //this.toolbar.element.remove();
        }
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>) {
            super.initEntityDialog(itemType, dialog);

            (dialog as F19_ProcParticipantDialog).parentDialog = this.parentDialog;
        }


        validateEntity(row, id) {
            //row.VendorId = Q.toId(row.VendorId);

            var sameVendor = Q.tryFirst(this.view.getItems(), x => x.VendorId === row.VendorId);
            if (sameVendor && this.id(sameVendor) !== id) {
                Q.alert('This Vendor is already in procurement participants');
                return false;
            }
            //console.log(row);
            //console.log(VendorRow.getLookup().items);
            //console.log(VendorRow.getLookup().itemById[row.VendorId]);
            //console.log(row.VendorId);
            row.VendorName = VendorRow.getLookup().itemById[row.VendorId].Name;
            //row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
            return true;
        }
        //protected getColumns() {
        //    var c = super.getColumns();
        //    console.log("this.parentDialog");
        //    console.log(this.parentDialog);
        //    //1 (Satu) Tahap - 2 (Dua) Sampul
        //    //if (this.parentDialog.getEntity().DocSubmitMethodId == 2) {
        //        c.splice(Q.indexOf(c, x => x.field == ProcParticipantRow.Fields.PriceDocumentFile), 1);
        //    //}
        //    return c;
        //}
        protected getButtons(): Serenity.ToolButton[] {

            var buttons = super.getButtons();

            //Remove a Button
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);

            return buttons;
        }

    }
}