/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace SCMONLINE.Procurement {

    @Serenity.Decorators.registerClass()
    export class ProcParticipantsEditor extends Common.GridEditorBase<ProcParticipantRow> {
        protected getColumnsKey() { return "Procurement.ProcParticipant"; }
        protected getDialogType() { return ProcParticipantDialog; }
        protected getLocalTextPrefix() { return ProcParticipantRow.localTextPrefix; }

        public myPassValue: number;

        constructor(container: JQuery) {
            super(container);
        }



        validateEntity(row, id) {
            //row.VendorId = Q.toId(row.VendorId);

            var sameVendor = Q.tryFirst(this.view.getItems(), x => x.VendorId === row.VendorId);
            if (sameVendor && this.id(sameVendor) !== id) {
                Q.alert('This Vendor is already in Bidder List');
                return false;
            }
            row.VendorId = VendorRow.getLookup().itemById[row.VendorId].VendorId;
            row.VendorName = VendorRow.getLookup().itemById[row.VendorId].Name;
            row.VendorPenaltyCode = VendorRow.getLookup().itemById[row.VendorId].PenaltyCode;
            row.Qualification = VendorRow.getLookup().itemById[row.VendorId].Qualification;
            //row.Invitation = ProcParticipantRow.getLookup().itemById[row.VendorId].Invitation;
            return true;
        }
        
    }
}