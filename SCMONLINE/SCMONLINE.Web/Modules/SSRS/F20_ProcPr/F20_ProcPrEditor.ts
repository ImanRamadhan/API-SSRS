/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace SCMONLINE.Procurement {

    @Serenity.Decorators.registerClass()
    export class F20_ProcPrEditor extends Common.GridEditorBase<ProcPrRow> {
        protected getColumnsKey() { return "Procurement.F20_ProcPr"; }
        //protected getDialogType() { return ProcParticipantDialog; }
        //protected getLocalTextPrefix() { return ProcParticipantRow.localTextPrefix; }
        
        protected getDialogType() { return F20_ProcPrDialog; }
        protected getLocalTextPrefix() { return ProcPrRow.localTextPrefix; }

        public myPassValue: number;
        public parentDialog: F20_PurchaseRequisitionTrackingDialog;
        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons(): Serenity.ToolButton[] {

            var buttons = super.getButtons();

            //Remove a Button
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);

            return buttons;
        }

        //validateEntity(row, id) {
        //    //row.VendorId = Q.toId(row.VendorId);

        //    var sameVendor = Q.tryFirst(this.view.getItems(), x => x.ProcurementId === row.ProcurementId);
        //    if (sameVendor && this.id(sameVendor) !== id) {
        //        Q.alert('This Procurement is already in Bidder List');
        //        return false;
        //    }
        //    row.VendorId = VendorRow.getLookup().itemById[row.VendorId].VendorId;
        //    row.VendorName = VendorRow.getLookup().itemById[row.VendorId].Name;
        //    row.VendorPenaltyCode = VendorRow.getLookup().itemById[row.VendorId].PenaltyCode;
        //    return true;
        //}
        
    }
}